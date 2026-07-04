import { Logo } from "@/components/ui/logo";
import { whatsappUrl } from "@/lib/utils";

const email = process.env.CONTATO_EMAIL_TO ?? "contato.kortexia@gmail.com";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo className="text-base" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
            Estúdio de tecnologia e marketing. A gente constrói o produto e cuida
            do crescimento, tudo rodando no KortexOS.
          </p>
        </div>
        <div className="grid gap-3 text-sm uppercase tracking-[0.16em] text-white/55">
          <a href="#servicos" className="transition hover:text-white">Serviços</a>
          <a href="#kortexos" className="transition hover:text-white">KortexOS</a>
          <a href="#cases" className="transition hover:text-white">Cases</a>
          <a href="#contato" className="transition hover:text-white">Contato</a>
        </div>
        <div className="grid content-start gap-3 text-sm text-white/55">
          <a href={whatsappUrl("Olá! Quero falar com a Kortex.")} className="transition hover:text-white">
            WhatsApp
          </a>
          <a href={`mailto:${email}`} className="transition hover:text-white">
            {email}
          </a>
        </div>
      </div>
      <div className="container-x border-t border-white/8 py-6 text-xs uppercase tracking-[0.2em] text-white/35">
        © {new Date().getFullYear()} Kortex Solutions
      </div>
    </footer>
  );
}
