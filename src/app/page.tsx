// src/app/page.tsx
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import TrustSection from "@/components/TrustSection";
import Packages from "@/components/Packages";
import AnimatedSection from "@/components/AnimatedSection";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-indigo-500/30 overflow-x-hidden">
      <Hero />

      {/* TechStack - Spaziatura più dinamica */}
      <AnimatedSection delay={0.2} className="py-12 md:py-20">
        <div className="container mx-auto px-6">
           <TechStack />
        </div>
      </AnimatedSection>

      {/* TrustSection - Ridotto il gap per non allontanare troppo il contenuto */}
      <AnimatedSection delay={0.3} className="py-8 md:py-12">
        <div className="container mx-auto px-6">
          <TrustSection />
        </div>
      </AnimatedSection>

      {/* Progetti - Aumento del respiro per dare importanza ai lavori */}
      <section id="progetti" className="py-20 md:py-32 bg-black">
        <AnimatedSection className="container mx-auto px-6" delay={0.4}>
          <Projects />
        </AnimatedSection>
      </section>

      {/* Pacchetti - Border-t sottile per separare le sezioni scure */}
      <section
        id="pacchetti"
        className="py-20 md:py-32 bg-[#050505] border-t border-white/5"
      >
        <AnimatedSection className="container mx-auto px-6" delay={0.5}>
          <Packages />
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
}