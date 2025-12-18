"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { EnvelopeIcon, MapPinIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

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

        {/* Info Box - Ottimizzato per Mobile */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 dark:border-gray-800 pt-12"
        >
          {/* Email */}
          <motion.div 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 shadow-sm border border-transparent hover:border-indigo-500/30 transition-colors text-center"
          >
            <EnvelopeIcon className="w-6 h-6 mx-auto mb-3 text-indigo-600" />
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Email</h3>
            <p className="text-lg font-semibold text-gray-900 dark:text-white break-all">cerillimarco15@gmail.com</p>
          </motion.div>

          {/* Location */}
          <motion.div 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 shadow-sm border border-transparent hover:border-indigo-500/30 transition-colors text-center"
          >
            <MapPinIcon className="w-6 h-6 mx-auto mb-3 text-indigo-600" />
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Location</h3>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">Remoto / Italia</p>
          </motion.div>

          {/* Social */}
          <motion.div 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 shadow-sm border border-transparent hover:border-indigo-500/30 transition-colors text-center"
          >
            <GlobeAltIcon className="w-6 h-6 mx-auto mb-3 text-indigo-600" />
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Social</h3>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-sm font-bold text-indigo-600 hover:text-indigo-400 transition-colors underline decoration-2 underline-offset-4">LinkedIn</a>
              <a href="#" className="text-sm font-bold text-indigo-600 hover:text-indigo-400 transition-colors underline decoration-2 underline-offset-4">GitHub</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}