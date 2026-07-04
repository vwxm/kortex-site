import { Reveal } from "@/components/ui/reveal";

type Slide = { n: string; titulo: string; texto?: string; cta?: boolean };

const slides: Slide[] = [
  { n: "", titulo: "3 sinais de que seu site tá espantando cliente", texto: "Arrasta →" },
  { n: "01", titulo: "Demora mais de 3 segundos pra abrir", texto: "Metade das pessoas vai embora antes de ver a primeira dobra." },
  { n: "02", titulo: "Não funciona direito no celular", texto: "É de lá que vem a maior parte dos seus acessos." },
  { n: "03", titulo: "Não diz o que você faz em 5 segundos", texto: "Se não entendeu, não vira contato." },
  { n: "", titulo: "Quer um site que vende?", texto: "Chama a Kortex.", cta: true }
];

function SlideCard({ n, titulo, texto, cta }: Slide) {
  return (
    <div
      className={`glass flex aspect-[4/5] w-64 shrink-0 snap-center flex-col justify-between p-6 md:w-72 ${
        cta ? "bg-neon/[0.06]" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-white/70">Kortex</span>
        {n ? <span className="font-mono text-xs text-neon">{n}</span> : null}
      </div>
      <div>
        <h3 className={`font-display font-bold uppercase leading-tight ${cta ? "text-2xl text-stone" : "text-xl text-stone"}`}>
          {titulo}
        </h3>
        {texto ? (
          <p className={`mt-3 text-sm leading-6 ${cta ? "text-neon" : "text-white/55"}`}>{texto}</p>
        ) : null}
      </div>
      <div className="h-1 w-10 bg-neon/60" />
    </div>
  );
}

export function Carrossel() {
  return (
    <section id="marketing" className="scroll-mt-20 border-y border-white/10 bg-graphite/40 py-28">
      <div className="container-x">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-neon">03 / marketing</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-bold uppercase leading-tight text-stone md:text-6xl">
            Conteúdo que a gente entrega
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/55">
            Um exemplo de carrossel criado pelo KortexOS, pronto pra publicar. Mesma
            qualidade, toda semana, com a identidade da sua marca.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {slides.map((s, i) => (
              <SlideCard key={i} {...s} />
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-white/35">arraste para o lado →</p>
        </Reveal>
      </div>
    </section>
  );
}
