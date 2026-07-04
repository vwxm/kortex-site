import { ButtonLink } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 700px at 72% 10%, rgba(255,255,255,0.06), transparent 65%), radial-gradient(900px 600px at 8% 100%, rgba(255,255,255,0.04), transparent 60%)"
        }}
      />
      <div className="container-x relative py-28">
        <p className="text-xs uppercase tracking-[0.4em] text-white/45">
          Tecnologia + marketing com IA
        </p>

        <h1 className="mt-8 font-display text-[19vw] font-bold uppercase leading-[0.86] tracking-tight text-stone md:text-[13vw] xl:text-[11rem]">
          Kortex
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
          Automações, sites, atendimento e marketing com inteligência artificial —
          operados no <span className="text-stone">KortexOS</span>, nossa plataforma
          de IA. Menos trabalho manual, mais resultado medido.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <ButtonLink href="#servicos" withArrow>
            Ver serviços
          </ButtonLink>
          <ButtonLink href={whatsappUrl("Olá! Quero conhecer as soluções da Kortex.")} variant="ghost" external>
            Falar no WhatsApp
          </ButtonLink>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">Role para explorar</span>
      </div>
    </section>
  );
}
