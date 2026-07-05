import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Lead = {
  nome: string;
  email: string;
  telefone?: string;
  empresa?: string;
  mensagem: string;
};

// Rate-limit leve por IP (in-memory) — anti-spam.
const JANELA_MS = 60 * 1000;
const MAX = 5;
const hits = new Map<string, { count: number; inicio: number }>();

function limitado(ip: string): boolean {
  const agora = Date.now();
  const reg = hits.get(ip);
  if (!reg || agora - reg.inicio > JANELA_MS) {
    hits.set(ip, { count: 1, inicio: agora });
    return false;
  }
  reg.count += 1;
  return reg.count > MAX;
}

function valido(b: Record<string, unknown>): b is Lead {
  const s = (v: unknown, max: number) => typeof v === "string" && v.trim().length > 0 && v.length <= max;
  const emailOk = typeof b.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) && b.email.length <= 160;
  return s(b.nome, 120) && emailOk && s(b.mensagem, 4000);
}

async function entregar(lead: Lead): Promise<boolean> {
  const to = process.env.CONTATO_EMAIL_TO ?? "contato.kortexia@gmail.com";
  const linhas = [
    `Nome: ${lead.nome}`,
    `E-mail: ${lead.email}`,
    lead.telefone ? `Telefone: ${lead.telefone}` : null,
    lead.empresa ? `Empresa: ${lead.empresa}` : null,
    "",
    lead.mensagem
  ].filter(Boolean).join("\n");

  // Opção A — Resend
  if (process.env.RESEND_API_KEY) {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? "Kortex Site <onboarding@resend.dev>",
      to,
      replyTo: lead.email,
      subject: `Novo contato pelo site: ${lead.nome}`,
      text: linhas
    });
    return !error;
  }

  // Opção B — webhook do n8n
  if (process.env.N8N_CONTACT_WEBHOOK) {
    const r = await fetch(process.env.N8N_CONTACT_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead)
    });
    return r.ok;
  }

  // Sem mecanismo configurado: registra pra não perder o lead em silêncio.
  console.warn("[contato] Nenhum RESEND_API_KEY/N8N_CONTACT_WEBHOOK configurado. Lead:", linhas);
  return true;
}

async function enviarParaCrm(lead: Lead): Promise<void> {
  const url = process.env.CRM_LEADS_URL;
  const secret = process.env.CRM_INGEST_SECRET;
  if (!url || !secret) return; // integração opcional; sem configurar, só loga por e-mail como já fazia

  const contato = [lead.email, lead.telefone].filter(Boolean).join(" / ");
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Kortex-Secret": secret },
    body: JSON.stringify({ nome: lead.nome, contato, origem: "Site", mensagem: lead.mensagem })
  });
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "desconhecido";
  if (limitado(ip)) {
    return NextResponse.json({ error: "Muitas tentativas. Aguarde um instante." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  if (!body || !valido(body)) {
    return NextResponse.json({ error: "Preencha nome, e-mail válido e mensagem." }, { status: 400 });
  }

  const lead: Lead = {
    nome: body.nome.trim(),
    email: body.email.trim(),
    telefone: typeof body.telefone === "string" ? body.telefone.slice(0, 60) : undefined,
    empresa: typeof body.empresa === "string" ? body.empresa.slice(0, 120) : undefined,
    mensagem: body.mensagem.trim()
  };

  // Gravar o lead no CRM (pipeline de aquisição), em paralelo ao e-mail.
  // Fire-and-forget: falha na integração não impede o lead de chegar por e-mail.
  enviarParaCrm(lead).catch((e) => console.error("[contato] falha ao enviar pro CRM:", e));

  const ok = await entregar(lead).catch((e) => {
    console.error("[contato] falha ao entregar:", e);
    return false;
  });

  if (!ok) {
    return NextResponse.json({ error: "Não foi possível enviar agora. Tente pelo WhatsApp." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
