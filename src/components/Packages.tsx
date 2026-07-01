"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/solid";

// Definiamo l'interfaccia per i pacchetti
interface Package {
  name: string;
  target: string;
  description: string;
  features: string[];
  price: string;
  color: string;
  link: string;
  cta: string;
  popular?: boolean;
}

const packageList: Package[] = [
  {
    name: "Landing Page Pro",
    target: "Startup & Promo",
    description: "Una pagina singola ottimizzata per convertire i visitatori in clienti. Perfetta per lanciare la tua attività.",
    features: [
      "Landing Page Moderna",
      "Velocità Estrema (Next.js)",
      "Modulo Contatti & WhatsApp",
      "Responsive Design",
    ],
    price: "199€",
    color: "from-sky-500 to-blue-600",
    link: "https://wa.me/393804291043?text=Ciao!%20Vorrei%20informazioni%20per%20una%20Landing%20Page%20Pro.",
    cta: "Inizia Ora",
  },
  {
    name: "Sito Vetrina AI",
    target: "Professionisti & Artigiani",
    description: "Presenza online d'impatto con intelligenza artificiale per catturare contatti e prenotazioni h24.",
    features: [
      "Design Next.js ad alte prestazioni",
      "Assistente AI h24 sui form",
      "Gestione Automatica Lead",
      "SEO Setup Base & Copywriting",
    ],
    price: "499€",
    color: "from-emerald-500 to-teal-600",
    popular: true,
    link: "https://wa.me/393804291043?text=Ciao!%20Vorrei%20informazioni%20per%20un%20Sito%20Vetrina%20AI.",
    cta: "Chatta su WhatsApp",
  },
  {
    name: "Smart Booking Suite",
    target: "B&B e Case Vacanza",
    description: "Disintermedia e risparmia le commissioni di Booking e Airbnb. Ricevi prenotazioni dirette dal tuo sito.",
    features: [
      "Booking Engine Proprietario",
      "Sincronizzazione iCal (Zero Overbooking)",
      "Pannello Gestione Prenotazioni",
      "Assistente IA per gli ospiti",
    ],
    price: "699€",
    color: "from-indigo-600 to-purple-600",
    link: "mailto:cerillimarco15@gmail.com?subject=Richiesta%20Info%20Smart%20Booking%20Suite",
    cta: "Richiedi Informazioni",
  },
  {
    name: "E-commerce Pro",
    target: "Business & Retail",
    description: "Negozio online pronto a vendere, ottimizzato per conversioni, vendite veloci e scalabilità.",
    features: [
      "Setup Store Completo & Scalabile",
      "Pagamenti Multipli (Stripe, PayPal)",
      "Gestione Inventario Avanzata",
      "Fatturazione Automatica",
    ],
    price: "1.199€",
    color: "from-rose-500 to-red-600",
    link: "https://wa.me/393804291043?text=Ciao!%20Vorrei%20informazioni%20per%20un%20E-commerce%20Pro.",
    cta: "Chiedi un Preventivo",
  },
];

const Packages = () => {
  return (
    <section id="pacchetti" className="pt-4 pb-12 md:pt-6 md:pb-20 bg-white dark:bg-transparent relative overflow-hidden transition-colors duration-300">
      {/* Background Decor - Gradiente molto leggero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-slate-50/50 dark:bg-slate-900/10 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100/50 dark:bg-indigo-900/20 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">
            Scegli la tua <span className="text-indigo-600 dark:text-indigo-400">Soluzione</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium text-xs md:text-base leading-relaxed">
            Offerte chiare e trasparenti per far crescere il tuo business.
          </p>
        </div>

        {/* Wrapper per l'animazione di entrata */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-10"
        >
          {/* Banner Pagamento Sicuro - Enfatizzato al massimo con Pulse intenso e veloce */}
          <motion.div 
            animate={{ 
              boxShadow: [
                "0px 0px 10px 0px rgba(59, 130, 246, 0.4)", 
                "0px 0px 30px 5px rgba(59, 130, 246, 0.8)", 
                "0px 0px 10px 0px rgba(59, 130, 246, 0.4)"
              ],
              borderColor: [
                "rgba(59, 130, 246, 0.4)",
                "rgba(59, 130, 246, 0.8)",
                "rgba(59, 130, 246, 0.4)",
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border-2 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden"
          >
          {/* Sfondo luminoso dietro il banner */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-32 h-32 bg-blue-400/20 blur-3xl rounded-full" />
          
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-lg shrink-0 relative z-10 border border-blue-200 dark:border-blue-700">
            {/* Sfondo fisso leggermente azzurro senza animazioni a scomparsa */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl" />
            
            {/* Icona Sicurezza / Scudo PayPal */}
            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400 relative z-10 drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-black text-blue-900 dark:text-blue-100 mb-1 tracking-tight">
              Paga in 3 comode rate, zero rischi.
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
              Realizza il tuo progetto oggi e suddividi il costo in 3 mesi tramite <strong>PayPal</strong> o <strong>Stripe</strong>. Il tuo investimento è protetto al 100%, zero interessi e zero stress.
            </p>
          </div>
        </motion.div>
        </motion.div>

        {/* Grid a 2 Colonne (2x2) per carte più larghe e leggibili */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {packageList.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col p-8 md:p-10 rounded-3xl border transition-all duration-500 ${
                pkg.popular
                  ? "border-indigo-200 dark:border-indigo-500/30 bg-white dark:bg-slate-900 shadow-[0_20px_50px_rgba(79,70,229,0.1)] dark:shadow-indigo-900/20 ring-4 ring-indigo-50 dark:ring-indigo-900/10"
                  : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/40 dark:shadow-black/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-indigo-600 rounded-full flex items-center gap-2 shadow-lg z-20">
                  <SparklesIcon className="w-3.5 h-3.5 text-white" />
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                    Più Scelto
                  </span>
                </div>
              )}

              {/* Header Card */}
              <div className="mb-8">
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.3em] mb-3 block">
                  {pkg.target}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase mb-3 tracking-tight">
                  {pkg.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                  {pkg.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-snug">
                    <CheckCircleIcon className="w-5 h-5 mr-3 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mb-6 text-center">
                <div className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tighter mb-1">
                  {pkg.price}
                </div>
                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 italic uppercase tracking-widest leading-relaxed">
                  * Tasse escluse <br/> Pagamento dilazionato
                </div>
              </div>

              <motion.a
                href={pkg.link}
                whileTap={{ scale: 0.97 }}
                className={`relative overflow-hidden group w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] text-white text-center shadow-lg transition-all bg-linear-to-r ${pkg.color} hover:brightness-110`}
              >
                <span className="relative z-10">{pkg.cta}</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;