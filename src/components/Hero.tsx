
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
        {/* LATO SINISTRO: Testo */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 mb-6 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
            Siti Web & Negozi Online per la Tua Attività
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6">
            Il Tuo Sito o Negozio Online, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-400 dark:to-indigo-300">
              Semplice e Senza Stress.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl"
          >
            Non ti servono paroloni tecnici: che tu sia un <strong className="text-slate-900 dark:text-white font-bold">artigiano, commerciante o professionista</strong>, realizzo il tuo sito o e-commerce chiavi in mano. Facile da usare, pronto a <strong className="text-indigo-600 dark:text-indigo-400 font-bold">farti trovare nuovi clienti</strong> e senza complicazioni.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-6">
            <a
              href="#progetti"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm uppercase tracking-widest rounded-xl shadow-lg shadow-slate-900/20 hover:scale-105 transition-all"
            >
              Guarda i Lavori
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("open-chat"));
              }}
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 transition-all cursor-pointer"
            >
              Parla Con Me
            </button>
          </motion.div>

          {/* Micro-punti di rassicurazione */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> Nessuna competenza richiesta
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> Supporto diretto con me
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> Prezzi chiari e senza sorprese
            </span>
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

                {/* Banner di anteprima in basso a destra dello schermo */}
                <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold">Ermanno Tech • Negozio Online</span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-300">100% Mobile Ready <span aria-hidden="true">📱</span></span>
                </div>
              </div>
            </div>

            {/* Badge Fluttuante 1 (In alto a destra): Notifica Nuovo Ordine / Richiesta */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 sm:-right-4 z-20 flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-emerald-200 dark:border-emerald-800/60 shadow-xl shadow-emerald-500/10"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white text-lg shadow-md shadow-emerald-500/30 shrink-0" aria-hidden="true">
                🛍️
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Nuovo Ordine Ricevuto</p>
                <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">+€ 39,90 <span className="text-[10px] font-normal text-slate-400">• Adesso</span></p>
              </div>
            </motion.div>

            {/* Badge Fluttuante 2 (In basso a sinistra): Avatar Professionista + Contatto Diretto */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -left-2 sm:-left-4 z-20 flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl shadow-indigo-500/10"
            >
              <div className="relative">
                <img
                  src="/profile.jpg"
                  alt="Marco Cerilli Sviluppatore"
                  width="44"
                  height="44"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-indigo-500 shadow-sm"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-800" title="Online" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">Marco Cerilli</p>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">● Online</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Ti seguo passo dopo passo</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
