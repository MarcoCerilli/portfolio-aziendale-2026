"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const packageList = [
  {
    name: "Starter Landing",
    price: "120",
    description: "Presenza online veloce, moderna e d'impatto.",
    features: ["Next.js 15 Speed", "Mobile-First", "WhatsApp Direct", "Hosting Incluso"],
    color: "from-emerald-400 to-teal-500",
    taxInfo: "Prezzo netto + ritenuta d'acconto."
  },
  {
    name: "Business Suite",
    price: "350",
    description: "Sito aziendale completo con tecnologia AI Gemini.",
    features: ["5 Pagine Custom", "AI Gemini Integrata", "SEO Gold", "Premium Dark UI"],
    color: "from-indigo-500 to-purple-500",
    popular: true,
    taxInfo: "Regime prestazione occasionale."
  },
  {
    name: "Shopify Store",
    price: "450",
    description: "E-commerce pronto alla vendita, sicuro e veloce.",
    features: ["Setup Shopify/Woo", "Stripe & PayPal", "Gestione Ordini", "Post-lancio 30gg"],
    color: "from-rose-500 to-red-600",
    taxInfo: "Supporto apertura P.IVA se richiesto."
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
            className={`relative flex flex-col p-8 rounded-[2.5rem] border ${
              pkg.popular ? "border-indigo-500/50 bg-indigo-500/5" : "border-white/10 bg-gray-900/50"
            } backdrop-blur-2xl`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                <span className="text-[10px] font-black text-white uppercase tracking-tighter">Iper Richiesto</span>
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
              <div className="flex items-end gap-1">
                <span className={`text-6xl font-black bg-gradient-to-br ${pkg.color} bg-clip-text text-transparent`}>
                  €{pkg.price}
                </span>
                <span className="text-gray-500 font-bold mb-2">/netto</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {pkg.features.map((feat) => (
                <li key={feat} className="flex items-center text-gray-300 text-sm">
                  <CheckCircleIcon className="w-5 h-5 mr-3 text-white/20" />
                  {feat}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/5 mb-8 text-[10px] text-gray-500 italic">
              {pkg.taxInfo}
            </div>

            {/* BOTTONE AGGIORNATO */}
            <motion.a
              href="#contactforhome"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative overflow-hidden group w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] text-white text-center transition-all bg-gradient-to-r ${pkg.color}`}
            >
              {/* Effetto Luce che passa sopra */}
              <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
              <span className="relative z-10">Richiedi Informazioni</span>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Packages;