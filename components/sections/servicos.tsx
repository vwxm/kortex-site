import { Bot, Globe, Workflow, LayoutGrid, Search, Megaphone, Star, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type Servico = { icon: LucideIcon; titulo: string; texto: string };

const tecnologia: Servico[] = [
  { icon: Workflow, titulo: "Automações", texto: "Tarefa repetitiva vira fluxo automático. Sua equipe para de perder tempo com o operacional." },
  { icon: Globe, titulo: "Sites", texto: "Sites rápidos e bonitos, que carregam em segundos e transformam visita em cliente." },
  { icon: Bot, titulo: "Atendimento", texto: "Um assistente que responde na hora, qualifica e agenda. De madrugada também." }
];

const marketing: Servico[] = [
  { icon: LayoutGrid, titulo: "Conteúdo", texto: "Carrosséis e posts prontos, com a cara da sua marca, toda semana." },
  { icon: Search, titulo: "SEO", texto: "Seu negócio aparecendo no Google na hora que o cliente procura." },
  { icon: Megaphone, titulo: "Anúncios", texto: "Campanhas no Google e Instagram que trazem contato de verdade, não curtida." },
  { icon: Star, titulo: "Avaliações", texto: "Resposta pra cada review, protegendo e melhorando a sua reputação." }
];

function Card({ icon: Icon, titulo, texto }: Servico) {
  return (
    <div className="glass h-full p-6">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-neon/10 text-neon">
        <Icon size={20} />
      </div>
      <h3 className="mt-5 font-display text-base font-bold uppercase tracking-wide text-stone">{titulo}</h3>
      <p className="mt-3 text-sm leading-6 text-white/55">{texto}</p>
    </div>
  );
}

function Grupo({ label, itens }: { label: string; itens: Servico[] }) {
  return (
    <div>
      <p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-neon">{`// ${label}`}</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {itens.map((s) => (
          <Card key={s.titulo} {...s} />
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
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-neon">01 / serviços</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-bold uppercase leading-tight text-stone md:text-6xl">
            Duas frentes, um time só
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/55">
            A Kortex constrói a tecnologia e cuida do marketing. Você não precisa
            de uma agência pra criar e outra pra divulgar.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-14">
          <Reveal>
            <Grupo label="tecnologia" itens={tecnologia} />
          </Reveal>
          <Reveal delay={0.05}>
            <Grupo label="marketing" itens={marketing} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
