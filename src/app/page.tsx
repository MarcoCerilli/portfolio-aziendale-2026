import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import Packages from "@/components/Packages";
import AnimatedSection from "@/components/AnimatedSection";
import Projects from "@/components/Projects";
import TechSpec from "@/components/TechSpec";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-100 dark:selection:bg-indigo-900/30 selection:text-indigo-700 dark:selection:text-indigo-300 overflow-x-hidden transition-colors duration-300">
      
      {/* 1. HERO - Nessun padding qui, lo gestiamo dentro il componente Hero */}
      <Hero />

      {/* 2. TECH STACK - Ridotto py (padding verticale) su mobile per eliminare il gap */}
      <section className="py-8 md:py-16 bg-slate-50/50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-800">
        <AnimatedSection delay={0.2}>
          <TechStack />
        </AnimatedSection>
      </section>

      {/* 3. TECH SPECS - Sfondo Bianco */}
      <section className="py-12 md:py-24 bg-white dark:bg-slate-950 relative">
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

      {/* 4. TRUST SECTION (CONTATORI) */}
      <section className="bg-white dark:bg-slate-950">
        <AnimatedSection delay={0.4}>
          <TrustSection />
        </AnimatedSection>
      </section>

      {/* 5. PROGETTI - Ridotto py-10 su mobile per staccare meglio */}
      <section id="progetti" className="py-10 md:py-24 bg-slate-50/50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection delay={0.5}>
            <Projects />
          </AnimatedSection>
        </div>
      </section>

      {/* 6. PACCHETTI */}
      <section id="pacchetti" className="py-16 md:py-32 bg-white dark:bg-slate-950">
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