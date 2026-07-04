import { Reveal } from "@/components/ui/reveal";

// TODO: trocar por logos reais quando o cliente enviar (public/clientes/*.svg).
const clientes = ["Tomé Motors", "Clínica de Nutrição", "Comércio de Cabides", "Seu negócio aqui"];

function Faixa() {
  return (
    <div className="marquee-track">
      {[0, 1].map((dup) => (
        <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
          {clientes.map((c) => (
            <span
              key={c + dup}
              className="mx-8 whitespace-nowrap font-display text-xl font-bold uppercase tracking-[0.16em] text-white/30 transition hover:text-stone md:mx-12 md:text-2xl"
            >
              {c}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function Clientes() {
  return (
    <section className="border-y border-white/10 py-14">
      <div className="container-x">
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.24em] text-white/40">
            Quem já confia na Kortex
          </p>
        </Reveal>
      </div>
      <div className="marquee-mask mt-8 overflow-hidden">
        <Faixa />
      </div>
    </section>
  );
}
