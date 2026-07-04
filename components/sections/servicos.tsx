import { Bot, Globe, Workflow, LayoutGrid, Search, Megaphone, Star, Cpu, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type Item = { icon: LucideIcon; titulo: string; texto: string };

const tecnologia: Item[] = [
  { icon: Workflow, titulo: "Automações", texto: "Tarefa repetitiva vira fluxo automático." },
  { icon: Globe, titulo: "Sites", texto: "Rápidos, bonitos e que transformam visita em cliente." },
  { icon: Bot, titulo: "Atendimento", texto: "Responde na hora, qualifica e agenda. De madrugada também." }
];

const marketing: Item[] = [
  { icon: LayoutGrid, titulo: "Conteúdo", texto: "Carrosséis e posts com a cara da sua marca, toda semana." },
  { icon: Search, titulo: "SEO", texto: "Seu negócio aparecendo no Google na hora certa." },
  { icon: Megaphone, titulo: "Anúncios", texto: "Campanhas que trazem contato, não só curtida." },
  { icon: Star, titulo: "Avaliações", texto: "Resposta pra cada review, cuidando da reputação." }
];

function Row({ icon: Icon, titulo, texto }: Item) {
  return (
    <div className="group flex gap-4 border-t border-white/10 py-5 first:border-t-0">
      <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-neon/10 text-neon transition group-hover:bg-neon/20">
        <Icon size={17} />
      </div>
      <div>
        <h4 className="font-display text-sm font-bold uppercase tracking-wide text-stone">{titulo}</h4>
        <p className="mt-1 text-sm leading-6 text-white/50">{texto}</p>
      </div>
    </div>
  );
}

function Painel({ tag, icon: Icon, titulo, itens }: { tag: string; icon: LucideIcon; titulo: string; itens: Item[] }) {
  return (
    <div className="glass h-full p-8 md:p-10">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neon/30 bg-neon/10 text-neon">
          <Icon size={20} />
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-neon">{tag}</p>
          <h3 className="font-display text-2xl font-bold uppercase text-stone">{titulo}</h3>
        </div>
      </div>
      <div className="mt-6">
        {itens.map((s) => (
          <Row key={s.titulo} {...s} />
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
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neon">{`// serviços`}</p>
            <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-stone md:text-6xl">
              Constrói e divulga
            </h2>
            <p className="mt-6 text-base leading-7 text-white/55">
              Você não precisa de uma empresa pra criar e outra pra fazer aparecer.
              A Kortex cuida das duas pontas, conectadas.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Painel tag="tecnologia" icon={Cpu} titulo="Tecnologia" itens={tecnologia} />
          </Reveal>
          <Reveal delay={0.06}>
            <Painel tag="marketing" icon={Sparkles} titulo="Marketing" itens={marketing} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
