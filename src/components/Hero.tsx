
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

        {/* LATO DESTRO: Card Commerciale & ROI di Vendita */}
        <motion.div variants={itemVariants} className="flex-1 w-full max-w-lg lg:max-w-xl relative mt-8 lg:mt-0">
          <div className="relative w-full">
            {/* Halo / Glow commerciale sottile */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/15 via-cyan-500/15 to-purple-500/15 rounded-[32px] blur-xl opacity-80 pointer-events-none" />

            {/* Main Commercial Glass Card */}
            <div className="relative rounded-3xl border border-zinc-800 bg-zinc-950/95 p-6 sm:p-8 shadow-2xl shadow-black z-10">
              
              {/* Header Card Commerciale */}
              <div className="flex items-center justify-between gap-3 mb-6 pb-5 border-b border-zinc-800/80">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Sistemi di Vendita &amp; ROI
                </div>
                <span className="text-[11px] font-bold text-zinc-400">Zero Commissioni Esterne</span>
              </div>

              {/* Titolo e Focus Commerciale */}
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-3">
                Non Solo un Sito Vetrina: Uno Strumento per <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Generare Fatturato</span>
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                Ogni secondo di caricamento in meno aumenta le vendite del 7%. Realizziamo infrastrutture proprietarie senza costi ricorrenti di agenzia.
              </p>

              {/* 3 Metric Box Commerciali ad Alto Impatto */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 text-center">
                  <div className="text-lg sm:text-xl font-black text-emerald-400">+300%</div>
                  <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-0.5">Conversione</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 text-center">
                  <div className="text-lg sm:text-xl font-black text-white">&lt; 0.8s</div>
                  <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-0.5">Zero Attesa</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 text-center">
                  <div className="text-lg sm:text-xl font-black text-cyan-400">100%</div>
                  <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-0.5">Tuo Controllo</div>
                </div>
              </div>

              {/* Simulatore Notifiche di Vendita in Tempo Reale */}
              <div className="space-y-2.5 mb-6">
                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black text-xs">
                      €
                    </span>
                    <div>
                      <div className="font-bold text-white text-[11px]">Nuovo Ordine E-Commerce</div>
                      <div className="text-[10px] text-zinc-500">Pagamento Diretto Stripe • 0% Fee</div>
                    </div>
                  </div>
                  <span className="font-black text-emerald-400 text-xs">+€149,00</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-xs">
                      📅
                    </span>
                    <div>
                      <div className="font-bold text-white text-[11px]">Prenotazione Ricevuta</div>
                      <div className="text-[10px] text-zinc-500">Booking Diretto Senza Portali</div>
                    </div>
                  </div>
                  <span className="font-bold text-zinc-300 text-[11px]">Confermata</span>
                </div>
              </div>

              {/* Pulsante di Azione Commerciale */}
              <a
                href="#pacchetti"
                className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl transition-all cursor-pointer"
              >
                Scopri le Soluzioni &amp; Tariffe
                <span className="text-sm">&rarr;</span>
              </a>
            </div>

            {/* Badge Fluttuante Garanzia */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 sm:-top-4 -right-2 sm:-right-3 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 backdrop-blur-xl border border-zinc-700 shadow-2xl text-xs select-none"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-black text-white uppercase tracking-wider">
                Garanzia 100% Soddisfatti
              </span>
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
