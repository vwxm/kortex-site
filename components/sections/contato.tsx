"use client";

import { useState } from "react";
import { MessageCircle, Send, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { buttonClass } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/utils";

type Estado = "idle" | "enviando" | "ok" | "erro";

const inputClass =
  "focus-ring w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-stone outline-none transition placeholder:text-steel/60 focus:border-accent-hi";

export function Contato() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [erro, setErro] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEstado("enviando");
    setErro("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setErro(typeof json.error === "string" ? json.error : "Não foi possível enviar. Tente pelo WhatsApp.");
        setEstado("erro");
        return;
      }
      setEstado("ok");
      form.reset();
    } catch {
      setErro("Falha de conexão. Tente pelo WhatsApp.");
      setEstado("erro");
    }
  }

  return (
    <section id="contato" className="scroll-mt-20 py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-steel">Contato</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-stone md:text-5xl">
            Vamos conversar sobre o seu projeto.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-steel">
            Conta o que você precisa — automação, site, atendimento ou marketing.
            Respondemos rápido.
          </p>
          <a
            href={whatsappUrl("Olá! Quero falar com a Kortex sobre um projeto.")}
            className={buttonClass("primary", "mt-8")}
          >
            <MessageCircle size={16} /> Chamar no WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.05}>
          {estado === "ok" ? (
            <div className="flex h-full min-h-64 flex-col items-center justify-center rounded-2xl border border-accent/30 bg-accent/[0.06] p-10 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent-hi">
                <Check size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-stone">Mensagem enviada!</h3>
              <p className="mt-2 text-sm text-steel">Recebemos seu contato e retornamos em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="nome" required placeholder="Nome" className={inputClass} />
                <input name="empresa" placeholder="Empresa (opcional)" className={inputClass} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="email" type="email" required placeholder="E-mail" className={inputClass} />
                <input name="telefone" placeholder="Telefone / WhatsApp" className={inputClass} />
              </div>
              <textarea name="mensagem" required placeholder="Como podemos ajudar?" className={`${inputClass} min-h-32`} />
              {estado === "erro" ? <p className="text-sm text-red-300">{erro}</p> : null}
              <button
                type="submit"
                disabled={estado === "enviando"}
                className={buttonClass("primary", "w-max disabled:opacity-60")}
              >
                {estado === "enviando" ? "Enviando..." : (<><Send size={16} /> Enviar mensagem</>)}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
