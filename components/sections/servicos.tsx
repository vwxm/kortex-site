import { Reveal } from "@/components/ui/reveal";

type Servico = { titulo: string; texto: string };

const tecnologia: Servico[] = [
  { titulo: "Automações", texto: "Fluxos que rodam sozinhos — integrações, tarefas repetitivas e dados conectados ponta a ponta." },
  { titulo: "Sites", texto: "Sites premium, rápidos e sob medida, do institucional à vitrine com painel próprio." },
  { titulo: "Atendimento com IA", texto: "Chatbots e agentes que atendem, qualificam e vendem 24 horas por dia." }
];

const marketing: Servico[] = [
  { titulo: "Conteúdo", texto: "Carrosséis e posts com a identidade da marca, produzidos em escala." },
  { titulo: "SEO", texto: "Ser encontrado no Google: on-page, conteúdo e monitoramento contínuo." },
  { titulo: "Anúncios", texto: "Campanhas no Google e Meta, montadas, lançadas e otimizadas por dados." },
  { titulo: "Avaliações", texto: "Gestão de reviews com respostas humanas que protegem a reputação." }
];

function Item({ n, titulo, texto }: Servico & { n: number }) {
  return (
    <div className="group border-t border-white/12 py-8 transition">
      <div className="flex items-baseline gap-6">
        <span className="font-display text-sm text-white/25">{String(n).padStart(2, "0")}</span>
        <div>
          <h3 className="font-display text-xl font-bold uppercase tracking-wide text-stone md:text-2xl">{titulo}</h3>
          <p className="mt-3 max-w-md text-sm font-light leading-7 text-white/50">{texto}</p>
        </div>
      </div>
    </div>
  );
}

function Grupo({ label, itens, start }: { label: string; itens: Servico[]; start: number }) {
  return (
    <div>
      <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">{label}</p>
      <div className="grid md:grid-cols-2">
        {itens.map((s, i) => (
          <Item key={s.titulo} n={start + i} {...s} />
        ))}
      </div>
    </div>
  );
}

export function Servicos() {
  return (
    <section id="servicos" className="scroll-mt-20 py-28">
      <div className="container-x">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">01 / Serviços</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-bold uppercase leading-tight text-stone md:text-6xl">
            Tecnologia e marketing sob o mesmo teto
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/55">
            Da automação que economiza horas ao conteúdo que traz cliente — tudo
            integrado e medido dentro do KortexOS.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-16">
          <Reveal>
            <Grupo label="Tecnologia" itens={tecnologia} start={1} />
          </Reveal>
          <Reveal delay={0.05}>
            <Grupo label="Marketing" itens={marketing} start={4} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
