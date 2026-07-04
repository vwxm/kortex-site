import { Reveal } from "@/components/ui/reveal";

const pilares = [
  { n: "01", titulo: "Contexto", texto: "Todo o histórico do projeto vive num só lugar. Nada se perde entre tarefas." },
  { n: "02", titulo: "Execução", texto: "As entregas rodam com IA orquestrando os passos, do briefing ao deploy." },
  { n: "03", titulo: "Acompanhamento", texto: "Cada etapa é registrada e medida. Decisões viram dados, não achismo." }
];

export function KortexOS() {
  return (
    <section id="kortexos" className="scroll-mt-20 border-y border-white/10 bg-graphite/40 py-28">
      <div className="container-x">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">02 / A plataforma</p>
          <h2 className="mt-6 max-w-5xl font-display text-4xl font-bold uppercase leading-[1.05] text-stone md:text-6xl">
            Cada projeto opera no KortexOS
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/55">
            O KortexOS é o sistema operacional de IA da Kortex — conecta contexto,
            execução e acompanhamento num só fluxo. Não é uma agência com ferramentas
            soltas: é uma plataforma própria operando o seu projeto.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 md:grid-cols-3">
          {pilares.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 0.05}>
              <div className="h-full bg-ink/50 p-8 md:p-10">
                <span className="font-display text-sm text-white/25">{p.n}</span>
                <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wide text-stone">{p.titulo}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-white/50">{p.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
