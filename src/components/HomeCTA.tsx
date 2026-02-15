"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const HomeCTA = () => {
  return (
    <section className="py-20 bg-white">
      <AnimatedSection className="max-w-7xl mx-auto px-6 text-center" delay={0.2}>
        {/* Card principale con gradiente moderno e ombre morbide */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 shadow-[0_25px_50px_-12px_rgba(79,70,229,0.3)]">
          
          {/* Decorazioni di sfondo (Blur Circles) */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400/20 blur-[80px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
              Hai un progetto <br /> in mente?
            </h2>
            
            <p className="text-indigo-50 text-base md:text-xl mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Dalla consulenza tecnica allo sviluppo completo: trasformiamo la tua visione in codice ad alte prestazioni.
            </p>

            <Link href="/contatti">
              <motion.button 
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Richiedi un Preventivo Gratis
              </motion.button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default HomeCTA;