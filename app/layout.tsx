import type { Metadata } from "next";
import { Syncopate, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Syncopate({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kortex · Estúdio de tecnologia e marketing",
    template: "%s · Kortex"
  },
  description:
    "A Kortex constrói e divulga. Sites, automações, atendimento e marketing que dão resultado. A gente escreve o código e cuida do crescimento.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Kortex",
    title: "Kortex · Estúdio de tecnologia e marketing",
    description: "A gente constrói o produto e cuida do marketing. Sites, automações, atendimento e conteúdo que vendem."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
