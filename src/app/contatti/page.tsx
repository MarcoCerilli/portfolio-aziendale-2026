"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-12">
      <div className="container mx-auto px-4">
        {/* Intestazione animata */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Parliamo del tuo <span className="text-indigo-600">Prossimo Progetto</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Dalla consulenza tecnica allo sviluppo completo. Compila il form e trasforma la tua idea in realtà digitale.
          </p>
        </motion.div>

        {/* Contenitore Form con effetto Glow */}
        <div className="relative z-10">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 -z-10 blur-[120px] opacity-30 bg-indigo-500 rounded-full w-80 h-80"></div>
          
          <ContactForm />
        </div>

        {/* Info Box */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 dark:border-gray-800 pt-12 text-center"
        >
          <div className="p-4">
            <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-2">Email</h3>
            <p className="text-xl font-medium text-gray-900 dark:text-white">cerillimarco15@gmail.com</p>
          </div>
          <div className="p-4">
            <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-2">Location</h3>
            <p className="text-xl font-medium text-gray-900 dark:text-white">Remoto / Italia</p>
          </div>
          <div className="p-4">
            <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-2">Social</h3>
            <div className="flex justify-center gap-4 text-indigo-600 font-bold">
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">GitHub</a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}