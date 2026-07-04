import { Reveal } from "@/components/ui/reveal";

const passos = [
  { n: "01", titulo: "Conversa", texto: "A gente entende o problema, o objetivo e o prazo. Sem enrolação." },
  { n: "02", titulo: "Construção", texto: "Código, automação, site ou conteúdo. Feito sob medida pro seu caso." },
  { n: "03", titulo: "No ar", texto: "Deploy no seu domínio e servidor. Você recebe tudo pronto e funcionando." },
  { n: "04", titulo: "Crescimento", texto: "A gente mede o que importa, ajusta e escala o que dá resultado." }
];

export function ComoFunciona() {
  return (
    <section id="processo" className="scroll-mt-20 py-28">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neon">{`// como funciona`}</p>
            <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-stone md:text-6xl">
              Do problema ao no ar
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-neon/40 via-white/10 to-transparent md:block" />
          {passos.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <div className="relative">
                <div className="flex items-center gap-3 md:block">
                  <span className="relative z-10 inline-block h-3.5 w-3.5 rounded-full bg-neon shadow-neon" />
                  <span className="font-mono text-sm text-neon md:mt-5 md:block">{p.n}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-stone">{p.titulo}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/50">{p.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
