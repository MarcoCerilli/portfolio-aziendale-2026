"use client";
import React from "react";
import { motion } from "framer-motion";

// Calcola il totale cliente: netto + 4% rivalsa INPS + €2 marca da bollo
function calcolaTotaleCliente(nettoStr: string): string {
  const netto = parseFloat(nettoStr.replace(".", "").replace(",", "."));
  const inps = netto * 0.04;
  const bollo = 2.0;
  const totale = netto + inps + bollo;
  return totale.toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const packageList = [
  {
    name: "Starter Landing",
    price: "449",
    description: "Presenza online veloce, moderna e d'impatto.",
    features: ["Next.js 15 Speed", "Mobile-First", "WhatsApp Direct", "Hosting Incluso"],
    gradientFrom: "#34d399",
    gradientTo: "#14b8a6",
    color: "from-emerald-400 to-teal-500",
    popular: false,
  },
  {
    name: "Business Suite",
    price: "749",
    description: "Sito aziendale completo con tecnologia AI Gemini.",
    features: ["5 Pagine Custom", "AI Gemini Integrata", "SEO Gold", "Premium Dark UI"],
    gradientFrom: "#6366f1",
    gradientTo: "#a855f7",
    color: "from-indigo-500 to-purple-500",
    popular: true,
  },
  {
    name: "Shopify Store",
    price: "2.199",
    description: "E-commerce pronto alla vendita, sicuro e veloce.",
    features: ["Setup Shopify/Woo", "Stripe & PayPal", "Gestione Ordini", "Post-lancio 30gg"],
    gradientFrom: "#f43f5e",
    gradientTo: "#ef4444",
    color: "from-rose-500 to-red-600",
    popular: false,
  },
];

const Packages = () => {
  return (
    <section id="pacchetti" className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Sezione */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em]">
            Piani &amp; Prezzi
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-tight">
            Scegli il{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-indigo-400 dark:to-purple-400">
              Pacchetto
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Soluzioni chiare e trasparenti. Nessun costo nascosto, solo risultati concreti.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packageList.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                pkg.popular
                  ? "border-indigo-300 dark:border-indigo-500/50 bg-indigo-50/50 dark:bg-indigo-500/5 shadow-xl shadow-indigo-100 dark:shadow-indigo-900/20"
                  : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg shadow-slate-100/80 dark:shadow-black/20 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-indigo-600 rounded-full shadow-lg shadow-indigo-500/30 z-20">
                  <span className="text-[11px] font-black text-white uppercase tracking-widest">
                    Più Richiesto
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1 uppercase tracking-tight">
                  {pkg.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-5">
                  {pkg.description}
                </p>
                {/* Prezzo principale netto */}
                <div className="flex items-end gap-1.5 mb-2">
                  <span
                    className={`text-5xl font-black bg-gradient-to-br ${pkg.color} bg-clip-text text-transparent`}
                  >
                    €{pkg.price}
                  </span>
                  <span className="text-slate-400 dark:text-slate-500 font-semibold mb-1.5 text-sm">
                    /netto
                  </span>
                </div>
                {/* Totale effettivo per il cliente */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Totale cliente:
                  </span>
                  <span className="text-[13px] font-black text-slate-600 dark:text-slate-300">
                    €{calcolaTotaleCliente(pkg.price)}
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500">
                    (+ 4% INPS + €2 bollo)
                  </span>
                </div>
              </div>

              <ul className="space-y-3.5 mb-8 flex-grow">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                    <span
                      className={`w-4 h-4 shrink-0 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center`}
                    >
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Disclaimer fiscale — chiaro e legalmente corretto */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mb-6 space-y-1">
                <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 leading-snug">
                  Operazione effettuata in regime forfettario ex art. 1 c. 54-89 L. 190/2014.
                </p>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-snug">
                  Imponibile soggetto a rivalsa INPS 4% — Marca da bollo €2,00 (D.P.R. 642/72).
                </p>
              </div>

              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new Event("open-chat"));
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative overflow-hidden group w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] text-white text-center transition-all bg-gradient-to-r ${pkg.color} shadow-md`}
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                <span className="relative z-10">Parliamo del Progetto</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
