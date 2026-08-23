
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

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
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-950 pt-36 sm:pt-40 md:pt-44 lg:pt-36 pb-12 md:pb-16 transition-colors duration-300 min-h-[80vh]">
      {/* Sfondo animato molto sottile per dare profondità */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 dark:bg-blue-900/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
      >
        {/* LATO SINISTRO: Testo & Posizionamento B2B */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-6 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Consulenza Tecnica & Sviluppo Web Senior
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-6">
            Sviluppo Web su Misura & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 dark:from-white dark:via-slate-200 dark:to-slate-400">
              Architetture Digitali ad Alte Prestazioni.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl"
          >
            Realizzo siti aziendali, e-commerce e piattaforme web con codice moderno (Astro, Next.js, React). Velocità istantanea, zero intermediari e massima conversione per la tua attività.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("open-chat"));
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-xl shadow-indigo-600/30 hover:scale-[1.02] transition-all cursor-pointer"
            >
              Richiedi Consulenza
              <ArrowRightIcon className="w-4 h-4" />
            </button>
            <a
              href="#progetti"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-[1.02] transition-all"
            >
              Esplora i Lavori
            </a>
          </motion.div>

          {/* Metriche di Performance e Garanzie Aziendali */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full max-w-lg">
            <div className="text-center lg:text-left">
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">&lt; 0.8s</div>
              <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Caricamento Istantaneo</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">100/100</div>
              <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Core Web Vitals</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">1:1</div>
              <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Supporto Diretto</div>
            </div>
          </motion.div>
        </div>

        {/* LATO DESTRO: Showcase Mockup + Notifica Vendita + Avatar Contatto Diretto */}
        <motion.div variants={itemVariants} className="flex-1 w-full max-w-xl lg:max-w-none relative mt-6 lg:mt-0">
          <div className="relative w-full">
            {/* Glow / Effetto di profondità dietro */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-blue-500/20 dark:from-indigo-500/30 dark:via-purple-500/20 dark:to-blue-500/10 rounded-3xl blur-2xl pointer-events-none" />

            {/* Mockup Finestra Browser Web / E-Commerce */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl shadow-slate-900/10 dark:shadow-black/60 z-10">
              {/* Barra Superiore del Browser (macOS Style) */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-700/80 backdrop-blur-sm">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400/90 border border-rose-500/20" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/90 border border-amber-500/20" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/90 border border-emerald-500/20" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-slate-950/80 rounded-lg text-[11px] font-mono text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-inner">
                  <span className="text-emerald-500">🔒</span>
                  <span>https://ermannotech.com</span>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                  ONLINE
                </span>
              </div>

              {/* Contenuto Mockup: Anteprima E-Commerce Ermanno Tech (Intera, non tagliata) */}
              <div className="relative aspect-[16/10] w-full bg-slate-950 flex items-center justify-center p-2 group overflow-hidden">
                <img
                  src="/projects/ermannotech.png"
                  alt="Anteprima E-Commerce Ermanno Tech"
                  width="700"
                  height="437"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-contain object-top rounded-lg transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/templates/landingpage.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Mini bar di stato interna */}
                <div className="absolute bottom-2.5 right-2.5 flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-sm border border-white/10 text-white shadow-md pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-200">100% Mobile Ready</span>
                </div>
              </div>
            </div>

            {/* Badge Fluttuante 1 (In alto a destra): Notifica Ordine compatto */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 sm:-top-7 -right-1 sm:-right-2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-emerald-500/30 shadow-lg shadow-emerald-500/10 text-xs select-none"
            >
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Nuovo Ordine
              </span>
              <span className="text-slate-300 dark:text-slate-600 font-normal">•</span>
              <span className="text-[11px] font-black text-slate-900 dark:text-white">
                +€39,90
              </span>
            </motion.div>

            {/* Badge Fluttuante 2 (In basso a sinistra): Avatar Professionista + Disponibilità */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute -bottom-3 -left-1.5 sm:-left-3 z-20 flex items-center gap-2 pl-1.5 pr-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 shadow-lg shadow-indigo-500/10 select-none"
            >
              <div className="relative shrink-0">
                <img
                  src="/profile.jpg"
                  alt="Marco Cerilli"
                  width="26"
                  height="26"
                  className="w-6 h-6 rounded-full object-cover border border-indigo-500/50"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white dark:border-slate-900" />
              </div>
              <div className="flex items-center gap-1.5 text-[11px]">
                <span className="font-bold text-slate-900 dark:text-white">Marco Cerilli</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-[10px]">Disponibile</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
