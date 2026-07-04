import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type Caso = {
  cliente: string;
  segmento: string;
  descricao: string;
  tags: string[];
  url?: string;
};

const casos: Caso[] = [
  {
    cliente: "Tomé Motors",
    segmento: "Concessionária de veículos",
    descricao:
      "Site premium com vitrine de estoque e painel próprio pra cadastrar carros sem programador. Deploy, HTTPS e analytics de acessos por veículo.",
    tags: ["Site", "Painel admin", "Analytics"],
    url: "https://tomemotors.com.br"
  }
];

function CasoCard({ cliente, segmento, descricao, tags, url }: Caso) {
  const inner = (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-accent/50 hover:bg-white/[0.04]">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold text-stone">{cliente}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-accent-hi">{segmento}</p>
          </div>
          {url ? (
            <ArrowUpRight
              size={22}
              className="shrink-0 text-steel transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white motion-reduce:transition-none"
            />
          ) : null}
        </div>
        <p className="mt-5 text-sm leading-6 text-steel">{descricao}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-steel">
            {t}
          </span>
        ))}
      </div>
    </article>
  );

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className="focus-ring block">
      {inner}
    </a>
  ) : (
    inner
  );
}

export function Cases() {
  return (
    <section id="cases" className="scroll-mt-20 py-24">
      <div className="container-x">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-steel">Cases</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-stone md:text-5xl">
            Trabalho entregue, no ar.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {casos.map((c) => (
            <Reveal key={c.cliente}>
              <CasoCard {...c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
