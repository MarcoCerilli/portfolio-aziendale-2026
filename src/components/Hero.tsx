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
    <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden bg-black pt-36 pb-16 sm:pt-40 md:pt-44 md:pb-24 lg:pt-36">
      {/* Sottilissimo riflesso argentato/vetro */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.02] blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-20"
      >
        {/* LATO SINISTRO: Testo & Posizionamento B2B */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-3.5 py-1.5 text-xs font-bold tracking-wider text-zinc-300 uppercase shadow-sm"
          >
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-white" />
            Consulenza Tecnica & Sviluppo Web Senior
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl leading-[1.12] font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Sviluppo Web su Misura & <br className="hidden sm:block" />
            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Architetture Digitali ad Alte Prestazioni.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-8 max-w-2xl text-base leading-relaxed font-normal text-zinc-400 sm:text-lg"
          >
            Realizzo siti aziendali, e-commerce e piattaforme web con codice
            moderno (Astro, Next.js, React). Velocità istantanea, zero
            intermediari e massima conversione per la tua attività.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("open-chat"));
              }}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-xs font-black tracking-widest text-black uppercase shadow-xl shadow-white/10 transition-all hover:scale-[1.02] hover:bg-zinc-200 sm:w-auto"
            >
              Richiedi Consulenza
              <ArrowRightIcon className="h-4 w-4 text-black" />
            </button>
            <a
              href="#progetti"
              className="flex w-full items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/90 px-8 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all hover:scale-[1.02] hover:bg-zinc-800 sm:w-auto"
            >
              Esplora i Lavori
            </a>
          </motion.div>

          {/* Metriche di Performance e Garanzie Aziendali */}
          <motion.div
            variants={itemVariants}
            className="grid w-full max-w-lg grid-cols-3 gap-4 border-t border-zinc-800/80 pt-6 sm:gap-8"
          >
            <div className="text-center lg:text-left">
              <div className="text-xl font-black text-white sm:text-2xl">
                &lt; 0.8s
              </div>
              <div className="text-[10px] font-medium text-zinc-500 sm:text-xs">
                Caricamento Istantaneo
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-xl font-black text-white sm:text-2xl">
                100/100
              </div>
              <div className="text-[10px] font-medium text-zinc-500 sm:text-xs">
                Core Web Vitals
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-xl font-black text-white sm:text-2xl">
                1:1
              </div>
              <div className="text-[10px] font-medium text-zinc-500 sm:text-xs">
                Supporto Diretto
              </div>
            </div>
          </motion.div>
        </div>

        {/* LATO DESTRO: Scheda Valore Commerciale & Garanzie B2B Reali */}
        <motion.div
          variants={itemVariants}
          className="relative mt-8 w-full max-w-lg flex-1 lg:mt-0 lg:max-w-xl"
        >
          <div className="relative w-full">
            {/* Halo di sfondo discreto */}
            <div className="pointer-events-none absolute -inset-1.5 rounded-[32px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 opacity-70 blur-xl" />

            {/* Main Deliverables Card */}
            <div className="relative z-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl shadow-black sm:p-8">
              {/* Header Scheda */}
              <div className="mb-5 flex items-center justify-between gap-3 border-b border-zinc-800 pb-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-bold tracking-wider text-zinc-200 uppercase">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Sviluppo Web &amp; E-Commerce B2B
                </div>
                <span className="text-[11px] font-bold text-zinc-400">
                  Tempi: 5–14 Giorni
                </span>
              </div>

              {/* Titolo Principale */}
              <h3 className="mb-2 text-xl leading-snug font-black tracking-tight text-white sm:text-2xl">
                Cosa Include Ogni Progetto:
              </h3>
              <p className="mb-6 text-xs leading-relaxed font-normal text-zinc-400 sm:text-sm">
                Soluzioni complete chiavi in mano, progettate per generare vendite e contatti qualificati.
              </p>

              {/* 4 Punti di Valore Concreti */}
              <div className="mb-6 space-y-3.5">
                <div className="flex items-start gap-3 rounded-2xl border border-zinc-800/80 bg-zinc-900/70 p-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold text-emerald-400">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold leading-tight text-white sm:text-sm">
                      Proprietà Totale al 100% (Codice &amp; Dati)
                    </h4>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-zinc-400 sm:text-xs">
                      Nessun canone obbligatorio o vincolo. Il sito e i dati restano tuoi per sempre.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-zinc-800/80 bg-zinc-900/70 p-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-xs font-bold text-cyan-400">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold leading-tight text-white sm:text-sm">
                      Velocità Estrema (&lt; 0.8s) &amp; SEO Google
                    </h4>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-zinc-400 sm:text-xs">
                      Caricamento istantaneo su mobile per non perdere clienti e posizionarti su Google.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-zinc-800/80 bg-zinc-900/70 p-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-xs font-bold text-amber-400">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold leading-tight text-white sm:text-sm">
                      Pannello di Gestione Semplice &amp; Autonomo
                    </h4>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-zinc-400 sm:text-xs">
                      Aggiorni prezzi, prodotti, foto e testi in autonomia dal tuo computer o smartphone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-zinc-800/80 bg-zinc-900/70 p-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-xs font-bold text-purple-400">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold leading-tight text-white sm:text-sm">
                      Pagamenti Diretti &amp; Moduli di Contatto
                    </h4>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-zinc-400 sm:text-xs">
                      Stripe, carte di credito, WhatsApp e richieste preventivo collegate al tuo conto.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pulsante di Azione Diretto */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new Event("open-chat"));
                }}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-4 py-3.5 text-xs font-black tracking-widest text-black uppercase shadow-xl transition-all hover:bg-zinc-200"
              >
                Richiedi Preventivo Gratuito per la Tua Attività
                <span className="text-sm">&rarr;</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
