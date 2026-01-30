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
  color: string;
  link: string;
  cta: string;
  popular?: boolean;
}

const packageList: Package[] = [
  {
    name: "Starter Landing",
    target: "Professionisti & Artigiani",
    description: "Presenza online veloce, moderna e d'impatto con tecnologia Next.js. Ideale per chi vuole iniziare a farsi notare.",
    features: [
      "Pagina Singola (Next.js)",
      "Mobile-First & Performance",
      "WhatsApp Direct Integration",
      "SEO Setup Base",
    ],
    color: "from-emerald-400 to-teal-500",
    link: "https://wa.me/393804291043?text=Ciao!%20Vorrei%20informazioni%20per%20una%20Starter%20Landing.",
    cta: "Chatta su WhatsApp",
  },
  {
    name: "Business Suite",
    target: "Startup & Aziende",
    description: "Sito aziendale completo con architettura scalabile e integrazione di intelligenza artificiale.",
    features: [
      "Fino a 5 Pagine Custom",
      "Chatbot AI Integrato (Gemini/Groq)",
      "SEO Avanzata & Copywriting",
      "Premium Dark UI Design",
    ],
    color: "from-indigo-500 to-purple-500",
    popular: true,
    link: "mailto:cerillimarco15@gmail.com?subject=Richiesta%20Info%20Business%20Suite",
    cta: "Invia una Email",
  },
  {
    name: "E-commerce Pro",
    target: "Business & Store",
    description: "Store pronto alla vendita con sistemi di pagamento sicuri e gestione semplificata dell'inventario.",
    features: [
      "Setup Store Professionale",
      "Gateway Stripe & PayPal",
      "Gestione Inventario Cloud",
      "Formazione Gestione Ordini",
    ],
    color: "from-rose-500 to-red-600",
    link: "https://wa.me/393804291043?text=Ciao!%20Vorrei%20informazioni%20per%20un%20E-commerce%20Pro.",
    cta: "Chiedi un Preventivo",
  },
];

const Packages = () => {
 return (
   // Ridotto py-20/32 a py-12/16 per compattare la sezione
    <section id="pacchetti" className="py-12 md:py-16 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Ridotto mb-16/24 a mb-10/12 */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Scegli la tua <span className="text-indigo-500">Soluzione</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-medium italic text-xs md:text-base leading-relaxed">
            Offerte chiare e trasparenti per far crescere il tuo business.
          </p>
        </div>

        {/* Grid con gap ottimizzato */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {packageList.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              // Ridotto padding interno da p-12 a p-8 md:p-10
              className={`relative flex flex-col p-8 md:p-10 rounded-[2rem] border transition-all duration-500 ${
                pkg.popular
                  ? "border-indigo-500/50 shadow-[0_0_40px_rgba(99,102,241,0.1)] bg-indigo-500/5"
                  : "border-white/10 bg-gray-900/30"
              } backdrop-blur-3xl`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-indigo-600 rounded-full flex items-center gap-2 shadow-lg z-20">
                  <SparklesIcon className="w-3 h-3 text-white" />
                  <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">
                    Popolare
                  </span>
                </div>
              )}

              {/* Header Card ridotto */}
              <div className="mb-6">
                <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-[0.3em] mb-2 block">
                  {pkg.target}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-2 tracking-tight">
                  {pkg.name}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Lista Features più compatta */}
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start text-gray-300 text-xs md:text-sm leading-snug">
                    <CheckCircleIcon className="w-4 h-4 mr-3 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/10 mb-6 text-[9px] font-bold text-gray-500 italic uppercase tracking-widest text-center">
                Custom Quote
              </div>

              <motion.a
                href={pkg.link}
                whileTap={{ scale: 0.98 }}
                className={`relative overflow-hidden group w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] text-white text-center transition-all bg-gradient-to-r ${pkg.color}`}
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