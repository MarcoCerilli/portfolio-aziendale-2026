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

      {/* TechStack & Trust - Padding ridotto perché sono sezioni "di supporto" */}
      <div className="py-12 md:py-16">
        <AnimatedSection delay={0.2}>
          <TechStack />
        </AnimatedSection>
        <AnimatedSection delay={0.3} className="mt-8 md:mt-12">
          <TrustSection />
        </AnimatedSection>
      </div>

      {/* Progetti - Padding TOP generoso, padding BOTTOM ridotto */}
      <section id="progetti" className="pt-20 pb-10 md:pt-32 md:pb-16 bg-black">
        <AnimatedSection className="container mx-auto px-6" delay={0.4}>
          <Projects />
        </AnimatedSection>
      </section>

      {/* Pacchetti - Padding TOP ridotto (per eliminare il buco), BOTTOM generoso */}
      <section
        id="pacchetti"
        className="pt-10 pb-20 md:pt-16 md:pb-32 bg-black border-t border-white/5"
      >
        <AnimatedSection className="container mx-auto px-6" delay={0.5}>
          <Packages />
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
}