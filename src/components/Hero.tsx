
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
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-36 sm:pt-40 md:pt-44 lg:pt-36 pb-16 md:pb-24 min-h-[85vh]">
      {/* Sottilissimo riflesso argentato/vetro */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-bold uppercase tracking-wider text-zinc-300 mb-6 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
            Consulenza Tecnica & Sviluppo Web Senior
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6">
            Sviluppo Web su Misura & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400">
              Architetture Digitali ad Alte Prestazioni.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl font-normal"
          >
            Realizzo siti aziendali, e-commerce e piattaforme web con codice moderno (Astro, Next.js, React). Velocità istantanea, zero intermediari e massima conversione per la tua attività.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("open-chat"));
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-zinc-200 text-black font-black text-xs uppercase tracking-widest rounded-xl shadow-xl shadow-white/10 hover:scale-[1.02] transition-all cursor-pointer"
            >
              Richiedi Consulenza
              <ArrowRightIcon className="w-4 h-4 text-black" />
            </button>
            <a
              href="#progetti"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-zinc-900/90 border border-zinc-800 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-800 hover:scale-[1.02] transition-all"
            >
              Esplora i Lavori
            </a>
          </motion.div>

          {/* Metriche di Performance e Garanzie Aziendali */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-zinc-800/80 w-full max-w-lg">
            <div className="text-center lg:text-left">
              <div className="text-xl sm:text-2xl font-black text-white">&lt; 0.8s</div>
              <div className="text-[10px] sm:text-xs text-zinc-500 font-medium">Caricamento Istantaneo</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-xl sm:text-2xl font-black text-white">100/100</div>
              <div className="text-[10px] sm:text-xs text-zinc-500 font-medium">Core Web Vitals</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-xl sm:text-2xl font-black text-white">1:1</div>
              <div className="text-[10px] sm:text-xs text-zinc-500 font-medium">Supporto Diretto</div>
            </div>
          </motion.div>
        </div>

        {/* LATO DESTRO: Showcase Mockup Pulito (Senza pallini Mac) */}
        <motion.div variants={itemVariants} className="flex-1 w-full max-w-xl lg:max-w-none relative mt-6 lg:mt-0">
          <div className="relative w-full">
            {/* Mockup Frame in Vetro Scuro */}
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950/80 shadow-2xl shadow-black/90 z-10 group">
              <div className="relative aspect-[16/10] w-full bg-zinc-950 overflow-hidden">
                <img
                  src="/projects/ermannotech.png"
                  alt="Anteprima E-Commerce Ermanno Tech"
                  width="700"
                  height="437"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/templates/landingpage.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Status Pill in basso a destra */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-zinc-800 text-white shadow-xl pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold text-zinc-200">Live Production</span>
                </div>
              </div>
            </div>

            {/* Badge Fluttuante 1 (In alto a destra): Notifica Ordine compatto */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 sm:-top-6 -right-1 sm:-right-2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 shadow-2xl text-xs select-none"
            >
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-black text-white uppercase tracking-wider">
                Nuovo Ordine
              </span>
              <span className="text-zinc-600 font-normal">•</span>
              <span className="text-[11px] font-black text-white">
                +€39,90
              </span>
            </motion.div>

            {/* Badge Fluttuante 2 (In basso a sinistra): Avatar Professionista + Disponibilità */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute -bottom-4 -left-1.5 sm:-left-3 z-20 flex items-center gap-2.5 pl-1.5 pr-3.5 py-1.5 rounded-full bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 shadow-2xl select-none"
            >
              <div className="relative shrink-0">
                <img
                  src="/profile.jpg"
                  alt="Marco Cerilli"
                  width="26"
                  height="26"
                  className="w-7 h-7 rounded-full object-cover border border-zinc-700"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-zinc-900" />
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <span className="font-bold text-white">Marco Cerilli</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400 font-medium text-[11px]">Disponibile</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
