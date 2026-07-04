import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";

type Stat = { to: number; prefix?: string; suffix?: string; label: string };

const stats: Stat[] = [
  { to: 15, suffix: "+", label: "habilidades prontas no KortexOS" },
  { to: 24, suffix: "/7", label: "operação que não para" },
  { to: 3, suffix: "s", label: "meta de carregamento dos sites" },
  { to: 100, suffix: "%", label: "código próprio, versionado e seu" }
];

export function Stats() {
  return (
    <section className="border-y border-white/10">
      <div className="container-x grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 md:grid-cols-4 md:divide-x">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05}>
            <div className="px-2 py-10 md:px-8">
              <p className="font-display text-4xl font-bold text-stone md:text-5xl">
                <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <div className="mt-4 h-px w-8 bg-neon" />
              <p className="mt-4 text-sm leading-6 text-white/50">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
