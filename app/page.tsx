import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Servicos } from "@/components/sections/servicos";
import { KortexOS } from "@/components/sections/kortexos";
import { Cases } from "@/components/sections/cases";
import { Contato } from "@/components/sections/contato";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicos />
        <KortexOS />
        <Cases />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
