import { ButtonLink } from "@/components/ui/button";
import { Typing } from "@/components/ui/typing";
import { whatsappUrl } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 640px at 74% 8%, rgba(34,229,160,0.07), transparent 62%), radial-gradient(800px 560px at 6% 100%, rgba(255,255,255,0.04), transparent 60%)"
        }}
      />
      <div className="container-x relative py-28">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-neon">
          &gt; estúdio de tecnologia + marketing
        </p>

        <h1 className="mt-8 font-display text-[17vw] font-bold uppercase leading-[0.86] tracking-tight text-stone md:text-[12vw] xl:text-[10.5rem]">
          Kortex
        </h1>

        <p className="mt-6 min-h-[2.4em] max-w-3xl font-body text-2xl font-medium leading-tight text-stone md:text-4xl">
          A gente cria{" "}
          <Typing
            phrases={[
              "sites que vendem.",
              "automações que trabalham.",
              "conteúdo que traz cliente.",
              "atendimento que não dorme."
            ]}
            className="text-white/70"
          />
        </p>

        <p className="mt-7 max-w-xl text-base leading-7 text-white/55">
          A Kortex escreve o código e cuida do crescimento. Você foca no negócio,
          a gente entrega o resto: produto no ar e marketing rodando.
        </p>

        <div className="mt-11 flex flex-wrap items-center gap-8">
          <ButtonLink href="#servicos" withArrow>
            Ver o que fazemos
          </ButtonLink>
          <ButtonLink href={whatsappUrl("Olá! Quero um orçamento com a Kortex.")} variant="ghost" external>
            Pedir orçamento
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
