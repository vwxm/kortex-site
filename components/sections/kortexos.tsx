import { Reveal } from "@/components/ui/reveal";

const pilares = [
  { n: "01", titulo: "Contexto", texto: "Todo o histórico do projeto fica num lugar só. Nada se perde entre uma tarefa e outra." },
  { n: "02", titulo: "Execução", texto: "As etapas rodam automatizadas, do briefing até o que vai pro ar." },
  { n: "03", titulo: "Acompanhamento", texto: "Cada passo fica registrado e medido. Decisão vira dado, não achismo." }
];

export function KortexOS() {
  return (
    <section id="kortexos" className="scroll-mt-20 py-28">
      <div className="container-x">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-neon">{`// a plataforma`}</p>
          <h2 className="mt-6 max-w-5xl font-display text-4xl font-bold uppercase leading-[1.05] text-stone md:text-6xl">
            Tudo roda no <span className="text-neon">KortexOS</span>
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/55">
            O KortexOS é a plataforma que a Kortex usa pra tocar cada projeto. Ele
            guarda o contexto, executa as tarefas e registra cada passo. Por isso a
            entrega sai rápida e sem ponta solta.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {pilares.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 0.05}>
              <div className="glass h-full p-8">
                <span className="font-mono text-sm text-neon">{p.n}</span>
                <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-wide text-stone">{p.titulo}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{p.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
