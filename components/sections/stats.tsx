import { Reveal } from "@/components/ui/reveal";

const stats = [
  { valor: "2 em 1", label: "Tecnologia e marketing no mesmo time" },
  { valor: "< 3s", label: "Sites que carregam antes do cliente desistir" },
  { valor: "24/7", label: "Automações e atendimento sem hora pra parar" },
  { valor: "100%", label: "Código próprio, versionado e documentado" }
];

export function Stats() {
  return (
    <section className="border-y border-white/10">
      <div className="container-x grid divide-white/10 md:grid-cols-4 md:divide-x">
        {stats.map((s, i) => (
          <Reveal key={s.valor} delay={i * 0.05}>
            <div className="px-2 py-10 md:px-8">
              <p className="font-display text-3xl font-bold text-stone md:text-4xl">
                {s.valor}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/50">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
