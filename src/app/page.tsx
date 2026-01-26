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
    <main className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
      <Hero />

      {/* TechStack - Manteniamo py-8 per un respiro minimo */}
      <AnimatedSection delay={0.2} className="py-8">
        <TechStack />
      </AnimatedSection>

      {/* TrustSection */}
      <AnimatedSection delay={0.3} className="py-6">
        <TrustSection />
      </AnimatedSection>

      {/* Progetti */}
      <section id="progetti" className="py-16 bg-black">
        <AnimatedSection className="container mx-auto px-6" delay={0.4}>
          <div className="mb-10 text-center">
            <h2 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-2">
              Portfolio
            </h2>
          </div>
          <Projects />
        </AnimatedSection>
      </section>

      {/* Pacchetti */}
      <section
        id="pacchetti"
        className="py-16 bg-black border-t border-white/5"
      >
        <AnimatedSection className="container mx-auto px-6" delay={0.5}>
          <div className="mb-10 text-center">
            <h2 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-2">
              Pacchetti
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
              Scegli il piano <span className="text-indigo-500">per te</span>
            </h3>
          </div>
          <Packages />
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
}
