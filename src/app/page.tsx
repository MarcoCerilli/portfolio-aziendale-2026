// src/app/page.tsx
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import Packages from "@/components/Packages";
import AnimatedSection from "@/components/AnimatedSection";
import Projects from "@/components/Projects";
import TechSpec from "@/components/TechSpec";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-indigo-500/30 overflow-x-hidden">
      <Hero />

      {/* TechStack - Spazio ridotto per collegarsi all'Hero */}
      <section className="py-8 md:py-12">
        <AnimatedSection delay={0.2}>
          <TechStack />
        </AnimatedSection>
      </section>

      {/* Tech Specs - Integrazione cromatica e ritmica */}
      <section className="py-12 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <AnimatedSection delay={0.1}>
              <TechSpec
                color="indigo"
                label="Architecture"
                title="Headless CMS"
                description="Backend e Frontend separati per massime prestazioni e sicurezza."
                tag="01"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <TechSpec
                color="cyan"
                label="Performance"
                title="100/100"
                description="Ottimizzazione maniacale dei Core Web Vitals per la SEO."
                tag="99"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <TechSpec
                color="rose"
                label="E-Commerce"
                title="Shopify Custom"
                description="Store custom ad alte conversioni senza i limiti dei temi pronti."
                tag="cart"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Progetti - Attaccato quasi subito alle Tech Specs per mostrare il risultato pratico */}
      <section id="progetti" className="pt-8 pb-16 md:pt-12 md:pb-24 bg-black">
        <AnimatedSection className="container mx-auto px-6" delay={0.4}>
          <Projects />
        </AnimatedSection>
      </section>

      {/* Pacchetti - Separazione netta con bordo per indicare l'aspetto commerciale */}
      <section
        id="pacchetti"
        className="py-20 md:py-32 bg-black border-t border-white/5"
      >
        <AnimatedSection className="container mx-auto px-6" delay={0.5}>
          <Packages />
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
}