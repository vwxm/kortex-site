import { Brain, GitBranch, Activity } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const pilares = [
  { icon: Brain, titulo: "Contexto", texto: "Todo o histórico do seu projeto vive num só lugar — nada se perde entre tarefas." },
  { icon: GitBranch, titulo: "Execução", texto: "As entregas rodam com IA orquestrando os passos, do briefing ao deploy." },
  { icon: Activity, titulo: "Acompanhamento", texto: "Cada etapa é registrada e medida — decisões viram dados, não achismo." }
];

export function KortexOS() {
  return (
    <section id="kortexos" className="scroll-mt-20 py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-b from-accent/[0.10] to-transparent p-8 shadow-glow md:p-14">
            <p className="text-xs uppercase tracking-[0.28em] text-accent-hi">A plataforma por trás</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-stone md:text-5xl">
              Cada projeto roda no <span className="text-accent-hi">KortexOS</span>.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-steel">
              O KortexOS é o sistema operacional de IA da Kortex — ele conecta
              contexto, execução e acompanhamento num só fluxo. Não é uma agência
              com ferramentas soltas: é uma plataforma própria operando o seu projeto.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {pilares.map(({ icon: Icon, titulo, texto }) => (
                <div key={titulo} className="rounded-2xl border border-white/10 bg-ink/40 p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-hi">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-stone">{titulo}</h3>
                  <p className="mt-2 text-sm leading-6 text-steel">{texto}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
