// src/components/HomeCTA.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const HomeCTA = () => {
  return (
    <AnimatedSection className="container mx-auto px-4 py-20 text-center" delay={0.6}>
      <div className="bg-indigo-600 dark:bg-indigo-900 rounded-3xl p-10 shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Hai un progetto in mente?
        </h2>
        <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
          Dalla consulenza tecnica allo sviluppo completo: trasformiamo la tua visione in codice ad alte prestazioni.
        </p>
        <Link href="/contatti">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-gray-100 transition"
          >
            Richiedi un Preventivo Gratis
          </motion.button>
        </Link>
      </div>
    </AnimatedSection>
  );
};

export default HomeCTA;