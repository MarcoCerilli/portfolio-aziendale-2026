"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const packageList = [
  {
    name: "Starter Landing",
    price: "120",
    description: "Presenza online veloce, moderna e d'impatto.",
    features: ["Next.Js/Wordpress", "Mobile-First", "WhatsApp Direct", "SEO Base"],
    color: "from-emerald-400 to-teal-500",
    taxInfo: "Compenso netto + ritenuta (20%) + marca da bollo (2€)"
  },
  {
    name: "Business Suite",
    price: "350",
    description: "Sito aziendale completo con tecnologia AI Gemini.",
    features: ["4 Pagine Custom", "AI Gemini Integrata", "SEO Base", "Premium Dark UI"],
    color: "from-indigo-500 to-purple-500",
    popular: true,
    taxInfo: "Compenso netto + ritenuta (20%) + marca da bollo (2€)"
  },
  {
    name: "Shopify Store",
    price: "450",
    description: "E-commerce pronto alla vendita, sicuro e veloce.",
    features: ["Setup Shopify/Woo", "Stripe & PayPal", "Gestione Ordini", "Post-lancio 30gg"],
    color: "from-rose-500 to-red-600",
    taxInfo: "Compenso netto + ritenuta (20%) + marca da bollo (2€)"
  },
];

const Packages = () => {
  return (
    // RIDOTTO: py-20 -> py-4 (lo spazio ora è gestito dal genitore in page.tsx)
    <section id="pacchetti" className="py-4 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        {packageList.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            // RIDOTTO: p-8 -> p-6 (più compatto su mobile)
            className={`relative flex flex-col p-6 rounded-[2rem] border ${
              pkg.popular ? "border-indigo-500/50 bg-indigo-500/5" : "border-white/10 bg-gray-900/50"
            } backdrop-blur-2xl`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.4)] z-20">
                <span className="text-[10px] font-black text-white uppercase tracking-tighter">
                  Più Richiesto
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
              <div className="flex items-end gap-1">
                <span className={`text-5xl font-black bg-gradient-to-br ${pkg.color} bg-clip-text text-transparent`}>
                  €{pkg.price}
                </span>
                <span className="text-gray-500 font-bold mb-1 text-xs">/netto</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6 flex-grow">
              {pkg.features.map((feat) => (
                <li key={feat} className="flex items-center text-gray-300 text-[13px]">
                  <CheckCircleIcon className="w-4 h-4 mr-2 text-white/20" />
                  {feat}
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/5 mb-6 text-[11px] font-semibold text-gray-400 italic leading-snug">
              {pkg.taxInfo}
            </div>

            <motion.a
              href="#contactforhome"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative overflow-hidden group w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] text-white text-center transition-all bg-gradient-to-r ${pkg.color}`}
            >
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