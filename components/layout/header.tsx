"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { whatsappUrl } from "@/lib/utils";

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#marketing", label: "Marketing" },
  { href: "#kortexos", label: "Kortex OS" },
  { href: "#contato", label: "Contato" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-ink/60 backdrop-blur-md">
      <div className="container-x flex h-20 items-center justify-between md:grid md:grid-cols-3">
        <Link href="#top" className="focus-ring md:justify-self-start" aria-label="Kortex">
          <Logo className="text-sm md:text-base" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex md:justify-self-center">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.24em] text-white/70 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl("Olá! Quero conhecer as soluções da Kortex.")}
          className="focus-ring hidden border-b border-white/40 pb-2 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white md:inline-block md:justify-self-end"
        >
          WhatsApp
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center border border-white/20 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/8 bg-ink md:hidden">
          <div className="container-x grid gap-1 py-5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring border-b border-white/8 py-4 text-sm uppercase tracking-[0.24em] text-white/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl("Olá! Quero conhecer as soluções da Kortex.")}
              onClick={() => setOpen(false)}
              className="focus-ring mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-white"
            >
              WhatsApp →
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
