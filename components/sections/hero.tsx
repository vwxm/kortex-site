import { ButtonLink } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center pt-16">
      <div className="container-x py-20">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-steel">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-hi" />
          Tecnologia + marketing com IA
        </p>

        <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-stone md:text-7xl">
          Soluções de IA que fazem seu negócio
          <span className="text-accent-hi"> operar em outro nível.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-steel">
          Automações, sites, atendimento e marketing — construídos e operados no
          <span className="text-stone"> KortexOS</span>, a plataforma de inteligência
          artificial da Kortex. Menos trabalho manual, mais resultado medido.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ButtonLink href={whatsappUrl("Olá! Quero conhecer as soluções da Kortex.")} external withArrow>
            Falar com a Kortex
          </ButtonLink>
          <ButtonLink href="#servicos" variant="outline">
            Ver serviços
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
