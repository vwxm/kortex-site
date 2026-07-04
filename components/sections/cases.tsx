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
    <article className="group grid overflow-hidden border border-white/12 bg-surface md:grid-cols-[1.1fr_0.9fr]">
      <div className="flex min-h-64 flex-col justify-between p-8 md:min-h-80 md:p-12">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-white/40">{segmento}</p>
          <h3 className="mt-5 font-display text-3xl font-bold uppercase text-stone md:text-4xl">{cliente}</h3>
          <p className="mt-6 max-w-md text-sm font-light leading-7 text-white/55">{descricao}</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="border border-white/12 px-3 py-1.5 text-xs uppercase tracking-wide text-white/55">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="relative min-h-52 overflow-hidden bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.02] md:min-h-80">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-6xl font-bold uppercase tracking-tight text-white/[0.06] md:text-8xl">
            {cliente.split(" ")[0]}
          </span>
        </div>
        {url ? (
          <div className="absolute bottom-6 right-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/70 transition group-hover:text-white">
            Ver ao vivo
            <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </div>
        ) : null}
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
    <section id="cases" className="scroll-mt-20 py-28">
      <div className="container-x">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">03 / Cases</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-bold uppercase leading-tight text-stone md:text-6xl">
            Trabalho entregue, no ar
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6">
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
