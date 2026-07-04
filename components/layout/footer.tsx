import { Logo } from "@/components/ui/logo";
import { whatsappUrl } from "@/lib/utils";

const email = process.env.CONTATO_EMAIL_TO ?? "contato.kortexia@gmail.com";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-ink">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo className="text-base" />
          <p className="mt-5 max-w-sm text-sm leading-6 text-steel">
            Tecnologia e marketing com IA. Cada projeto roda no KortexOS — nosso
            sistema operacional de inteligência artificial.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-steel">
          <a href="#servicos" className="transition hover:text-white">Serviços</a>
          <a href="#kortexos" className="transition hover:text-white">KortexOS</a>
          <a href="#cases" className="transition hover:text-white">Cases</a>
          <a href="#contato" className="transition hover:text-white">Contato</a>
        </div>
        <div className="grid gap-2 text-sm text-steel">
          <a href={whatsappUrl("Olá! Quero falar com a Kortex.")} className="transition hover:text-white">
            WhatsApp
          </a>
          <a href={`mailto:${email}`} className="transition hover:text-white">
            {email}
          </a>
        </div>
      </div>
      <div className="container-x border-t border-white/6 py-6 text-xs text-steel/70">
        © {new Date().getFullYear()} Kortex Solutions. Todos os direitos reservados.
      </div>
    </footer>
  );
}
