"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/solid";

const packageList = [
  {
    name: "Starter Landing",
    target: "Professionisti & Artigiani",
    description: "Presenza online veloce, moderna e d'impatto con tecnologia Next.js.",
    features: [
      "Pagina Singola (Next.js)",
      "Mobile-First & Performance",
      "WhatsApp Direct Integration",
      "SEO Setup Base",
    ],
    color: "from-emerald-400 to-teal-500",
    // Link diretto a WhatsApp
    link: "https://wa.me/393804291043?text=Ciao!%20Vorrei%20informazioni%20per%20una%20Starter%20Landing.",
    cta: "Chatta su WhatsApp",
  },
  {
    name: "Business Suite",
    target: "Startup & Aziende",
    description: "Sito aziendale completo con chatbot e intelligenza artificiale.",
    features: [
      "Fino a 5 Pagine Custom",
      "Chatbot AI Integrato (Gemini/Groq)",
      "SEO Avanzata & Copywriting",
      "Premium Dark UI",
    ],
    color: "from-indigo-500 to-purple-500",
    popular: true,
    // Link mailto professionale
    link: "mailto:cerillimarco15@gmail.com?subject=Richiesta%20Info%20Business%20Suite",
    cta: "Invia una Email",
  },
  {
    name: "E-commerce Pro",
    target: "Business & Store",
    description: "Store pronto alla vendita con sistemi di pagamento sicuri.",
    features: [
      "Setup Store Professionale",
      "Gateway Stripe & PayPal",
      "Gestione Inventario Cloud",
      "Formazione gestione ordini",
    ],
    color: "from-rose-500 to-red-600",
    // Rimanda al footer dove hai tutti i social/contatti
    link: "#contatti",
    cta: "Tutti i contatti",
  },
];

const Packages = () => {
  return (
    <section id="pacchetti" className="py-20 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {packageList.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 ${
              pkg.popular
                ? "border-indigo-500 shadow-[0_0_40px_rgba(99,102,241,0.1)] bg-indigo-500/10"
                : "border-white/10 bg-gray-900/50"
            } backdrop-blur-2xl`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-indigo-500 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.4)] z-20">
                <SparklesIcon className="w-3 h-3 text-white" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">
                  Più Richiesto
                </span>
              </div>
            )}

            <div className="mb-8">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-2 block">
                {pkg.target}
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">{pkg.name}</h3>
              <p className="text-gray-400 text-[13px] leading-relaxed">
                {pkg.description}
              </p>
            </div>

            <ul className="space-y-4 mb-10 flex-grow text-left">
              {pkg.features.map((feat) => (
                <li
                  key={feat}
                  className="flex items-center text-gray-300 text-[13px]"
                >
                  <CheckCircleIcon className="w-4 h-4 mr-3 text-indigo-500/50" />
                  {feat}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/5 mb-8 text-[11px] font-medium text-gray-500 italic">
              Preventivo personalizzato in base alle specifiche tecniche.
            </div>

            <motion.a
              href={pkg.link}
              target={pkg.link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative overflow-hidden group w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] text-white text-center transition-all bg-gradient-to-r ${pkg.color} shadow-lg shadow-black/20`}
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
              <span className="relative z-10">{pkg.cta}</span>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Packages;