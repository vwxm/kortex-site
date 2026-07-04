"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { whatsappUrl } from "@/lib/utils";

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#kortexos", label: "KortexOS" },
  { href: "#cases", label: "Cases" },
  { href: "#contato", label: "Contato" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-ink/70 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between md:grid md:grid-cols-3">
        <Link href="#top" className="focus-ring md:justify-self-start" aria-label="Kortex">
          <Logo className="text-base" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex md:justify-self-center">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] text-steel transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl("Olá! Quero conhecer as soluções da Kortex.")}
          className="focus-ring hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white transition hover:bg-accent-hi md:inline-flex md:justify-self-end"
        >
          <MessageCircle size={15} />
          WhatsApp
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/8 bg-ink md:hidden">
          <div className="container-x grid gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring border-b border-white/8 py-3 text-sm uppercase tracking-[0.18em] text-stone/85"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl("Olá! Quero conhecer as soluções da Kortex.")}
              onClick={() => setOpen(false)}
              className="focus-ring mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-hi"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
