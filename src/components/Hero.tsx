"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-transparent pt-24 pb-20 md:pt-32 md:pb-32 transition-colors duration-300 min-h-[90vh]">
      {/* Sfondo animato molto sottile per dare profondità */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 dark:bg-blue-900/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
      >
        {/* LATO SINISTRO: Testo */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Disponibile per nuovi progetti
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
            Web & E-commerce <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-400 dark:to-indigo-300">
              Architect
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl"
          >
            Aiuto professionisti e aziende a{" "}
            <strong className="text-slate-900 dark:text-slate-100 font-bold">crescere online</strong>
            . Realizzo siti web velocissimi ed <strong className="text-slate-900 dark:text-slate-100 font-bold">e-commerce</strong> facili da gestire, 
            progettati per trasformare i semplici visitatori in
            <strong className="text-indigo-600 dark:text-indigo-400 font-bold"> clienti fedeli</strong>.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#progetti"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm uppercase tracking-widest rounded-xl shadow-lg shadow-slate-900/20 hover:scale-105 transition-all"
            >
              Vedi i Progetti
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href="#contatti"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 transition-all"
            >
              Contattami
            </a>
          </motion.div>
        </div>

        {/* LATO DESTRO: Composizione visiva */}
        <motion.div variants={itemVariants} className="flex-1 w-full max-w-lg lg:max-w-none relative mt-10 lg:mt-0">
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full">
            {/* Elemento Decorativo Dietro */}
            <div className="absolute inset-4 sm:inset-10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/30 dark:to-purple-500/10 rounded-3xl -rotate-6 transform transition-transform hover:rotate-0 duration-700 blur-sm" />
            
            {/* Card Principale Immagine */}
            <div className="absolute inset-4 sm:inset-10 rounded-3xl overflow-hidden border border-white/50 dark:border-slate-800/80 shadow-2xl bg-white dark:bg-slate-900 z-10">
              <Image
                src="/profile.jpg"
                alt="Marco Cerilli"
                fill
                className="object-cover object-top scale-105"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              
              {/* Etichetta sopra l'immagine */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-black text-2xl tracking-tight mb-1">Marco Cerilli</h3>
                <p className="text-slate-300 font-medium text-sm">Sviluppatore Full-Stack & UI Designer</p>
              </div>
            </div>

            {/* Badge Fluttuante 1 */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-1/4 z-20 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <SparklesIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Performance</p>
                <p className="text-sm font-black text-slate-900 dark:text-white">100/100</p>
              </div>
            </motion.div>

            {/* Badge Fluttuante 2 */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-4 bottom-1/4 z-20 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Stack</p>
                <p className="text-sm font-black text-slate-900 dark:text-white">Next.js + Vercel</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
