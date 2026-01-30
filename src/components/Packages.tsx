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
    <section id="pacchetti" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Glow decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header con margini ottimizzati */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
            Scegli la tua <span className="text-indigo-500">Soluzione</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium italic text-sm md:text-lg leading-relaxed">
            Offerte chiare e trasparenti per far crescere il tuo business con le tecnologie web più avanzate.
          </p>
        </div>

        {/* Grid con gap aumentato per mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {packageList.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative flex flex-col p-8 md:p-12 rounded-[2.5rem] border transition-all duration-500 ${
                pkg.popular
                  ? "border-indigo-500/50 shadow-[0_0_40px_rgba(99,102,241,0.15)] bg-indigo-500/5"
                  : "border-white/10 bg-gray-900/30"
              } backdrop-blur-3xl`}
            >
              {/* Badge Popolare - Ottimizzato posizionamento */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-indigo-600 rounded-full flex items-center gap-2 shadow-[0_10px_20px_rgba(99,102,241,0.3)] z-20">
                  <SparklesIcon className="w-4 h-4 text-white" />
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                    Più Richiesto
                  </span>
                </div>
              )}

              {/* Contenuto Superiore */}
              <div className="mb-10 text-center md:text-left">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em] mb-3 block">
                  {pkg.target}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-4 tracking-tight">
                  {pkg.name}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Lista Features - Spaziatura icone */}
              <ul className="space-y-5 mb-12 flex-grow">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start text-gray-300 text-sm md:text-base leading-snug">
                    <CheckCircleIcon className="w-5 h-5 mr-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Info Prezzo con border-t più visibile */}
              <div className="pt-8 border-t border-white/10 mb-8 text-[10px] md:text-[11px] font-bold text-gray-500 italic uppercase tracking-widest text-center">
                Preventivo basato sulle tue necessità
              </div>

              {/* Bottone CTA - Padding aumentato per touch targets */}
              <motion.a
                href={pkg.link}
                target={pkg.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className={`relative overflow-hidden group w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] text-white text-center transition-all bg-gradient-to-r ${pkg.color} shadow-2xl shadow-black/50`}
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
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