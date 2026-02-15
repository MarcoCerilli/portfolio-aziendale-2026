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
    description: "Presenza online veloce, moderna e d&apos;impatto con tecnologia Next.js. Ideale per chi vuole iniziare a farsi notare.",
    features: [
      "Pagina Singola (Next.js)",
      "Mobile-First & Performance",
      "WhatsApp Direct Integration",
      "SEO Setup Base",
    ],
    color: "from-emerald-500 to-teal-600",
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
      "Interfaccia Utente Premium",
    ],
    color: "from-indigo-600 to-purple-600",
    popular: true,
    link: "mailto:cerillimarco15@gmail.com?subject=Richiesta%20Info%20Business%20Suite",
    cta: "Invia una Email",
  },
  {
    name: "E-commerce Pro",
    target: "Business & Store",
    description: "Store pronto alla vendita con sistemi di pagamento sicuri e gestione semplificata dell&apos;inventario.",
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
    <section id="pacchetti" className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Background Decor - Gradiente molto leggero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-slate-50/50 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100/50 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
            Scegli la tua <span className="text-indigo-600">Soluzione</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium text-xs md:text-base leading-relaxed">
            Offerte chiare e trasparenti per far crescere il tuo business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {packageList.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 ${
                pkg.popular
                  ? "border-indigo-200 bg-white shadow-[0_20px_50px_rgba(79,70,229,0.1)] ring-4 ring-indigo-50"
                  : "border-slate-200 bg-white shadow-xl shadow-slate-200/40"
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
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase mb-3 tracking-tight">
                  {pkg.name}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                  {pkg.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start text-slate-600 text-xs md:text-sm leading-snug">
                    <CheckCircleIcon className="w-5 h-5 mr-3 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-slate-100 mb-6 text-[10px] font-bold text-slate-400 italic uppercase tracking-widest text-center">
                Preventivo Personalizzato
              </div>

              <motion.a
                href={pkg.link}
                whileTap={{ scale: 0.97 }}
                className={`relative overflow-hidden group w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] text-white text-center shadow-lg transition-all bg-gradient-to-r ${pkg.color} hover:brightness-110`}
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