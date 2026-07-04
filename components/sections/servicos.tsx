import { Bot, Globe, Workflow, LayoutGrid, Search, Megaphone, Star, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type Servico = { icon: LucideIcon; titulo: string; texto: string };

const tecnologia: Servico[] = [
  { icon: Workflow, titulo: "Automações com IA", texto: "Fluxos que rodam sozinhos: integrações, tarefas repetitivas e dados conectados ponta a ponta." },
  { icon: Globe, titulo: "Sites", texto: "Sites premium, rápidos e sob medida — do institucional à vitrine com painel próprio." },
  { icon: Bot, titulo: "Atendimento com IA", texto: "Chatbots e agentes que atendem, qualificam e vendem 24 horas por dia." }
];

const marketing: Servico[] = [
  { icon: LayoutGrid, titulo: "Conteúdo automatizado", texto: "Carrosséis e posts com a identidade da marca, produzidos em escala." },
  { icon: Search, titulo: "SEO", texto: "Ser encontrado no Google: on-page, conteúdo e monitoramento contínuo." },
  { icon: Megaphone, titulo: "Anúncios", texto: "Campanhas no Google e Meta, montadas, lançadas e otimizadas por dados." },
  { icon: Star, titulo: "Avaliações", texto: "Gestão de reviews com respostas humanas que protegem a reputação." }
];

function Card({ icon: Icon, titulo, texto }: Servico) {
  return (
    <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-accent/50 hover:bg-white/[0.04]">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-accent/10 text-accent-hi">
        <Icon size={20} />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-stone">{titulo}</h3>
      <p className="mt-2 text-sm leading-6 text-steel">{texto}</p>
    </div>
  );
}

function Grupo({ label, itens }: { label: string; itens: Servico[] }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.24em] text-accent-hi">{label}</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {itens.map((s) => (
          <Card key={s.titulo} {...s} />
        ))}
      </div>
    </div>
  );
}

export function Servicos() {
  return (
    <section id="servicos" className="scroll-mt-20 py-24">
      <div className="container-x">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-steel">O que fazemos</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-stone md:text-5xl">
            Tecnologia e marketing, sob o mesmo teto.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-steel">
            Da automação que economiza horas ao conteúdo que traz cliente — tudo
            integrado e medido dentro do KortexOS.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14">
          <Reveal>
            <Grupo label="Tecnologia" itens={tecnologia} />
          </Reveal>
          <Reveal delay={0.05}>
            <Grupo label="Marketing" itens={marketing} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
