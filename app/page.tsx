import { SplashScreen } from "@/components/layout/splash-screen";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Servicos } from "@/components/sections/servicos";
import { Codigo } from "@/components/sections/codigo";
import { Carrossel } from "@/components/sections/carrossel";
import { KortexOS } from "@/components/sections/kortexos";
import { Cases } from "@/components/sections/cases";
import { Contato } from "@/components/sections/contato";

export default function HomePage() {
  return (
    <>
      <SplashScreen />
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Codigo />
        <Carrossel />
        <KortexOS />
        <Cases />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
