import { Reveal } from "@/components/ui/reveal";

const kw = "text-neon";
const str = "text-emerald-300/80";
const fn = "text-stone";
const cmt = "text-white/30";
const mut = "text-white/60";

function CodeWindow() {
  return (
    <div className="glass overflow-hidden rounded-xl">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="ml-3 font-mono text-xs text-white/40">automacoes/novo-lead.ts</span>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-neon">Kortex<span className="text-white/50">OS</span></span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
        <code className={mut}>
          <span className={cmt}>{"// quando chega um lead novo pelo site"}</span>{"\n"}
          <span className={kw}>export async function</span> <span className={fn}>onNovoLead</span>(lead: <span className={fn}>Lead</span>) {"{\n"}
          {"  "}<span className={kw}>await</span> crm.<span className={fn}>criarContato</span>(lead);{"\n"}
          {"  "}<span className={kw}>await</span> whatsapp.<span className={fn}>enviar</span>(lead.telefone, <span className={fn}>boasVindas</span>(lead));{"\n"}
          {"  "}<span className={kw}>await</span> equipe.<span className={fn}>notificar</span>(<span className={str}>{'"novo lead \\u{1F680}"'}</span>);{"\n"}
          {"  "}<span className={kw}>return</span> {"{ ok: "}<span className={kw}>true</span>{" }"};{"\n"}
          {"}"}
        </code>
      </pre>
    </div>
  );
}

export function Codigo() {
  return (
    <section className="scroll-mt-20 py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-neon">{`// feito à mão`}</p>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-stone md:text-5xl">
            A gente escreve o código
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-white/55">
            Nada de solução genérica colada no seu negócio. Cada automação, site e
            integração é construída pra resolver o seu problema, e conectada de ponta
            a ponta pra rodar sozinha.
          </p>
          <ul className="mt-8 grid gap-3 font-mono text-sm text-white/60">
            <li><span className="text-neon">✓</span> Integrações sob medida (site, CRM, WhatsApp)</li>
            <li><span className="text-neon">✓</span> Deploy próprio, no seu servidor</li>
            <li><span className="text-neon">✓</span> Código seu, versionado e documentado</li>
          </ul>
        </Reveal>
        <Reveal delay={0.05}>
          <CodeWindow />
        </Reveal>
      </div>
    </section>
  );
}
