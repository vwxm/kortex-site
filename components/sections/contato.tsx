"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { buttonClass } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/utils";

type Estado = "idle" | "enviando" | "ok" | "erro";

const inputClass =
  "focus-ring w-full border border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-stone outline-none transition placeholder:text-white/35 focus:border-white/45";

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
    <section id="contato" className="scroll-mt-20 border-t border-white/10 py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">04 / Contato</p>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-stone md:text-6xl">
            Vamos conversar
          </h2>
          <p className="mt-7 max-w-md text-base leading-7 text-white/55">
            Conta o que você precisa — automação, site, atendimento ou marketing.
            Respondemos rápido.
          </p>
          <a
            href={whatsappUrl("Olá! Quero falar com a Kortex sobre um projeto.")}
            className={buttonClass("primary", "mt-10")}
          >
            Chamar no WhatsApp →
          </a>
        </Reveal>

        <Reveal delay={0.05}>
          {estado === "ok" ? (
            <div className="flex h-full min-h-72 flex-col items-center justify-center border border-white/12 bg-surface p-10 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center border border-white/20">
                <Check size={22} className="text-stone" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold uppercase text-stone">Mensagem enviada</h3>
              <p className="mt-3 text-sm text-white/55">Recebemos seu contato e retornamos em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 border border-white/12 bg-surface p-6 md:p-8">
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
                className={buttonClass("primary", "mt-2 w-max disabled:opacity-50")}
              >
                {estado === "enviando" ? "Enviando..." : "Enviar mensagem →"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
