import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kortex — Tecnologia e marketing com IA",
    template: "%s · Kortex"
  },
  description:
    "A Kortex constrói soluções com IA — automações, sites, atendimento e marketing — rodando no KortexOS, nosso sistema operacional de inteligência artificial.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Kortex",
    title: "Kortex — Tecnologia e marketing com IA",
    description:
      "Automações, sites, atendimento e marketing com IA — potencializados pelo KortexOS."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
