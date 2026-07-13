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

      {/* 2. TECH STACK */}
      <section className="py-20 md:py-32 bg-slate-50/50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-800">
        <AnimatedSection delay={0.2}>
          <TechStack />
        </AnimatedSection>
      </section>

      {/* 3. TECH SPECS - BLOCCO A CONTRASTO */}
      <section className="py-20 md:py-32 bg-slate-900 dark:bg-indigo-[950] relative overflow-hidden">
        {/* Glow effect for the dark block */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <TechSpec
                color="indigo"
                label="Prestazioni"
                title="Next.js"
                description="Utilizziamo la stessa tecnologia di brand come Netflix e Amazon. Siti web istantanei che abbattono il tasso di abbandono."
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <TechSpec
                color="cyan"
                label="Infrastruttura"
                title="Vercel"
                description="Hosting di ultima generazione. Il tuo sito viene distribuito globalmente per caricarsi in millisecondi ovunque."
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <TechSpec
                color="rose"
                label="Autonomia"
                title="WordPress / CMS"
                description="Pannelli di controllo intuitivi. Aggiorna testi, foto e prodotti in totale autonomia senza dipendere da uno sviluppatore."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. TRUST SECTION (CONTATORI) */}
      <section className="py-12 md:py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
        <AnimatedSection delay={0.4}>
          <TrustSection />
        </AnimatedSection>
      </section>

      {/* 5. PROGETTI */}
      <section id="progetti" className="py-20 md:py-32 bg-slate-50/50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection delay={0.5}>
            <Projects />
          </AnimatedSection>
        </div>
      </section>

      {/* 6. PACCHETTI */}
      <section id="pacchetti" className="py-20 md:py-32 bg-white dark:bg-slate-950">
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