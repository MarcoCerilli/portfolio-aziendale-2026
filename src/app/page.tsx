// src/app/page.tsx
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import Packages from "@/components/Packages";
import AnimatedSection from "@/components/AnimatedSection";
import Projects from "@/components/Projects";
import TechSpec from "@/components/TechSpec";
import TrustSection from "@/components/TrustSection"; // Assicurati di averlo creato o rinominato così

export default function Home() {
  return (
    // CAMBIO RADICALE: Da bg-black a bg-white. 
    // La selection ora è un azzurro delicato, molto più "clean".
    <main className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-700 overflow-x-hidden">
      
      {/* 1. HERO - Sfondo Bianco */}
      <Hero />

      {/* 2. TECH STACK - Sfondo leggermente grigio per staccare dall'Hero */}
      <section className="py-12 md:py-16 bg-slate-50/50 border-y border-slate-100">
        <AnimatedSection delay={0.2}>
          <TechStack />
        </AnimatedSection>
      </section>

      {/* 3. TECH SPECS - Sfondo Bianco */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <TechSpec
                color="indigo"
                label="Architecture"
                title="Headless CMS"
                description="Backend e Frontend separati per massime prestazioni e sicurezza."
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <TechSpec
                color="cyan"
                label="Performance"
                title="100/100"
                description="Ottimizzazione maniacale dei Core Web Vitals per la SEO."
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <TechSpec
                color="rose"
                label="E-Commerce"
                title="Shopify Custom"
                description="Store custom ad alte conversioni senza i limiti dei temi pronti."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. TRUST SECTION (CONTATORI) - Inserita qui per dare autorità prima dei lavori */}
      <section className="bg-white">
        <AnimatedSection delay={0.4}>
          <TrustSection />
        </AnimatedSection>
      </section>

      {/* 5. PROGETTI - Sfondo Slate per far risaltare le card bianche del portfolio */}
      <section id="progetti" className="py-16 md:py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection delay={0.5}>
            <Projects />
          </AnimatedSection>
        </div>
      </section>

      {/* 6. PACCHETTI - Sfondo Bianco per la chiusura commerciale */}
      <section id="pacchetti" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection delay={0.6}>
            <Packages />
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}