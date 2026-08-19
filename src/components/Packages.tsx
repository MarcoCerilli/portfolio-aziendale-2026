import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const packageList = [
  {
    name: "Starter Landing",
    price: "Su preventivo",
    description: "Presenza online veloce, moderna e d'impatto.",
    features: ["Next.js 15 Speed", "Mobile-First", "WhatsApp Direct", "Hosting Incluso"],
    color: "from-emerald-400 to-teal-500",
    popular: false,
  },
  {
    name: "Business Suite",
    price: "Su preventivo",
    description: "Sito aziendale completo con tecnologia AI Gemini.",
    features: ["5 Pagine Custom", "AI Gemini Integrata", "SEO Gold", "Premium Dark UI"],
    color: "from-indigo-500 to-purple-500",
    popular: true,
  },
];

type EcommerceTier = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  monthlyExtra: string;
  gradientClass: string;
  popular?: boolean;
  isCustom?: boolean;
  icon: string;
  pros: string[];
  cons: string[];
  idealFor: string;
  techStack: string[];
  coreStack?: { label: string; color: string }[];
};

const ecommercePlans: EcommerceTier[] = [
  {
    id: "woocommerce",
    name: "WooCommerce",
    tagline: "WordPress + WooCommerce",
    price: "Su preventivo",
    monthlyExtra: "~15–50€/mese hosting",
    gradientClass: "from-violet-500 to-purple-600",
    icon: "🔧",
    pros: [
      "100% personalizzabile",
      "Nessuna commissione piattaforma",
      "Plugin ecosystem enorme",
      "SEO avanzato con Yoast",
    ],
    cons: [
      "Richiede manutenzione costante",
      "Sicurezza da gestire manualmente",
      "Più lento di default",
    ],
    idealFor: "Chi vuole controllo totale e budget flessibile",
    techStack: ["WordPress", "WooCommerce", "PHP", "MySQL"],
  },
  {
    id: "shopify",
    name: "Shopify",
    tagline: "La piattaforma SaaS #1 al mondo",
    price: "Su preventivo",
    monthlyExtra: "29–299€/mese + 0–2% fee",
    gradientClass: "from-green-500 to-emerald-600",
    popular: true,
    icon: "🛍️",
    pros: [
      "Setup ultra-rapido",
      "Hosting incluso + CDN globale",
      "App store con 8.000+ integrazioni",
      "Checkout ottimizzato nativamente",
    ],
    cons: [
      "Fee mensili obbligatorie",
      "Personalizzazione limitata al tema",
      "Lock-in alla piattaforma",
    ],
    idealFor: "Chi vuole vendere subito senza pensieri tecnici",
    techStack: ["Shopify", "Liquid", "Shopify Payments"],
  },
  {
    id: "shopify-headless",
    name: "Shopify Headless",
    tagline: "Backend Shopify + Frontend Next.js",
    price: "Su preventivo",
    monthlyExtra: "29–299€/mese Shopify + hosting",
    gradientClass: "from-indigo-500 to-blue-600",
    icon: "⚡",
    pros: [
      "Performance estrema (Core Web Vitals 100)",
      "UI totalmente custom",
      "Shopify come headless CMS",
      "Multi-channel (web, app, IoT)",
    ],
    cons: [
      "Costo sviluppo più alto",
      "Richiede developer per modifiche",
      "Doppio abbonamento (Shopify + hosting)",
    ],
    idealFor: "Brand premium che vogliono esperienze uniche",
    techStack: ["Next.js", "Shopify API", "GraphQL", "Vercel"],
  },
  {
    id: "custom",
    name: "Full Custom",
    tagline: "Infrastruttura Next.js · TypeScript · Vercel",
    price: "Su preventivo",
    monthlyExtra: "Infrastruttura su misura",
    gradientClass: "from-slate-800 to-slate-950",
    isCustom: true,
    icon: "🚀",
    pros: [
      "Zero compromessi e zero commissioni",
      "Architettura Next.js App Router + TypeScript",
      "Deploy su Vercel Edge Network globale",
      "Integrazione con ERP/CRM/WMS/PIM",
      "Scalabilità illimitata e performance garantita",
    ],
    cons: [
      "Budget e tempi definiti in fase di analisi",
      "Richiede briefing tecnico dettagliato",
    ],
    idealFor: "Aziende con processi complessi o volumi enterprise",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel", "PostgreSQL", "Stripe API"],
    coreStack: [
      { label: "Next.js", color: "bg-white/15 border-white/20" },
      { label: "TypeScript", color: "bg-blue-500/30 border-blue-400/40" },
      { label: "Tailwind", color: "bg-cyan-500/30 border-cyan-400/40" },
      { label: "Vercel", color: "bg-white/15 border-white/20" },
    ],
  },
];

// ─── BOOKING PLANS ──────────────────────────────────────────────────────────

type BookingFeature = string;

type BookingPlan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  monthlyExtra: string;
  gradientClass: string;
  popular?: boolean;
  icon: string;
  features: BookingFeature[];
  idealFor: string;
  techStack: string[];
};

const bookingPlans: BookingPlan[] = [
  {
    id: "booking-starter",
    name: "Smart Booking Suite",
    tagline: "Per B&B e Case Vacanza",
    price: "Su preventivo",
    monthlyExtra: "Hosting incluso 1° anno",
    gradientClass: "from-indigo-600 to-purple-600",
    popular: true,
    icon: "🏡",
    features: [
      "Booking Engine Proprietario",
      "Sincronizzazione iCal (Zero Overbooking)",
      "Pannello Gestione Prenotazioni",
      "Assistente IA per gli ospiti",
      "Pagamenti diretti (Stripe)",
      "Zero commissioni Booking.com",
    ],
    idealFor: "B&B, case vacanza e agriturismi che vogliono prenotazioni dirette",
    techStack: ["Next.js", "Stripe", "iCal Sync", "AI Gemini"],
  },
  {
    id: "booking-hotel",
    name: "Hotel Engine Pro",
    tagline: "Per strutture ricettive medie",
    price: "Su preventivo",
    monthlyExtra: "~20–40€/mese manutenzione",
    gradientClass: "from-cyan-500 to-teal-600",
    icon: "🏨",
    features: [
      "Multi-room Booking Engine",
      "Channel Manager integrato",
      "Tariffe dinamiche e promo",
      "Dashboard analytics prenotazioni",
      "Email/SMS automatici agli ospiti",
      "Gestione extra e pacchetti",
    ],
    idealFor: "Hotel, resort e strutture con più camere o tipologie",
    techStack: ["Next.js", "PostgreSQL", "Stripe", "SendGrid"],
  },
  {
    id: "booking-restaurant",
    name: "Ristorante & Table Booking",
    tagline: "Prenotazioni tavoli online",
    price: "Su preventivo",
    monthlyExtra: "Hosting incluso 1° anno",
    gradientClass: "from-orange-500 to-amber-500",
    icon: "🍽️",
    features: [
      "Prenotazione tavoli online 24/7",
      "Mappa sala interattiva",
      "Gestione turni e coperti",
      "Conferma automatica via email",
      "Lista d'attesa digitale",
      "Menu digitale QR Code",
    ],
    idealFor: "Ristoranti, pizzerie e locali con prenotazione tavoli",
    techStack: ["Next.js", "PostgreSQL", "Resend", "QR Engine"],
  },
  {
    id: "booking-custom",
    name: "Booking Custom",
    tagline: "Soluzione su misura",
    price: "Su preventivo",
    monthlyExtra: "Variabile",
    gradientClass: "from-rose-500 to-pink-600",
    icon: "⚙️",
    features: [
      "Logiche di prenotazione custom",
      "Integrazione PMS/gestionale",
      "Multi-struttura e multi-lingua",
      "API per OTA (Booking, Airbnb)",
      "Reportistica avanzata",
      "SLA e supporto dedicato",
    ],
    idealFor: "Gruppi alberghieri, tour operator e strutture enterprise",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Custom API"],
  },
];

// Componente riusabile per le card e-commerce
function EcommerceCard({ plan, index }: { plan: EcommerceTier; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`relative flex flex-col rounded-3xl border overflow-hidden transition-all duration-300 ${
        plan.popular
          ? "border-green-300 dark:border-green-500/40 shadow-xl shadow-green-100/60 dark:shadow-green-900/20"
          : "border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-100/80 dark:shadow-black/20"
      }`}
    >
      {/* Gradient header */}
      <div className={`bg-gradient-to-br ${plan.gradientClass} p-6 pb-8 relative overflow-hidden`}>
        {plan.popular && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Più Scelto</span>
          </div>
        )}
        {/* Decorative elements — extra per custom */}
        <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute -right-4 bottom-0 w-20 h-20 rounded-full bg-white/5 pointer-events-none" />
        {plan.isCustom && (
          <>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </>
        )}
        <div className="relative z-10">
          <span className="text-3xl mb-3 block">{plan.icon}</span>
          <h3 className="text-xl font-black text-white uppercase tracking-tight leading-tight mb-0.5">
            {plan.name}
          </h3>
          <p className="text-white/70 text-xs font-medium mb-4">{plan.tagline}</p>
          {/* Core stack badges — solo per full custom */}
          {plan.isCustom && plan.coreStack && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {plan.coreStack.map((s) => (
                <span
                  key={s.label}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-black text-white uppercase tracking-wider border backdrop-blur-sm ${s.color}`}
                >
                  {s.label}
                </span>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Body */}
      <div className="bg-white dark:bg-slate-900 p-5 flex flex-col flex-grow">
        {/* Ideal for */}
        <div className="mb-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
          <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-0.5">
            Ideale per
          </span>
          <p className="text-slate-700 dark:text-slate-200 text-xs font-bold leading-snug">
            {plan.idealFor}
          </p>
        </div>

        {/* Pros */}
        <div className="mb-4">
          <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
            ✅ Punti di forza
          </span>
          <ul className="space-y-1.5">
            {plan.pros.map((pro) => (
              <li key={pro} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                {pro}
              </li>
            ))}
          </ul>
        </div>

        {/* Cons - expandable */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-between w-full text-left mb-2"
          aria-expanded={expanded}
        >
          <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            ⚠️ Limitazioni
          </span>
          <svg
            className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.ul
              key="cons"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden space-y-1.5 mb-4"
            >
              {plan.cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  {con}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Tech stack */}
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
          <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
            Stack
          </span>
          <div className="flex flex-wrap gap-1.5">
            {plan.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.button
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new Event("open-chat"));
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className={`relative overflow-hidden group w-full py-3.5 mt-5 rounded-2xl font-black uppercase tracking-widest text-[10px] text-white text-center bg-gradient-to-r ${plan.gradientClass} shadow-md`}
        >
          <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
          <span className="relative z-10">Richiedi Informazioni</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

// ─── BOOKING CARD ────────────────────────────────────────────────────────────

function BookingCard({ plan, index }: { plan: BookingPlan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`relative flex flex-col rounded-3xl border overflow-hidden transition-all duration-300 ${
        plan.popular
          ? "border-indigo-300 dark:border-indigo-500/40 shadow-xl shadow-indigo-100/60 dark:shadow-indigo-900/20"
          : "border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-100/80 dark:shadow-black/20"
      }`}
    >
      {/* Gradient header */}
      <div className={`bg-gradient-to-br ${plan.gradientClass} p-6 pb-8 relative overflow-hidden`}>
        {plan.popular && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Più Scelto</span>
          </div>
        )}
        <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute -right-4 bottom-0 w-20 h-20 rounded-full bg-white/5 pointer-events-none" />
        <div className="relative z-10">
          <span className="text-3xl mb-3 block">{plan.icon}</span>
          <h3 className="text-xl font-black text-white uppercase tracking-tight leading-tight mb-0.5">
            {plan.name}
          </h3>
          <p className="text-white/70 text-xs font-medium mb-4">{plan.tagline}</p>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white dark:bg-slate-900 p-5 flex flex-col flex-grow">
        {/* Ideal for */}
        <div className="mb-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
          <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-0.5">
            Ideale per
          </span>
          <p className="text-slate-700 dark:text-slate-200 text-xs font-bold leading-snug">
            {plan.idealFor}
          </p>
        </div>

        {/* Features */}
        <div className="mb-4">
          <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
            ✅ Incluso
          </span>
          <ul className="space-y-1.5">
            {plan.features.map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
          <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
            Stack
          </span>
          <div className="flex flex-wrap gap-1.5">
            {plan.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.button
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new Event("open-chat"));
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className={`relative overflow-hidden group w-full py-3.5 mt-5 rounded-2xl font-black uppercase tracking-widest text-[10px] text-white text-center bg-gradient-to-r ${plan.gradientClass} shadow-md`}
        >
          <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
          <span className="relative z-10">Richiedi Informazioni</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

// ─── MAIN PACKAGES COMPONENT ─────────────────────────────────────────────────

const Packages = () => {
  const [activeTab, setActiveTab] = useState<"all" | "web" | "ecommerce" | "booking">("all");

  return (
    <section id="pacchetti" className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 space-y-4"
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

          {/* Tab Switcher Pills */}
          <div className="w-full flex justify-center pt-3 px-2">
            <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner">
              {[
                { id: "all", label: "🌟 Tutti i Servizi" },
                { id: "web", label: "🌐 Siti Web" },
                { id: "ecommerce", label: "🛒 E-Commerce" },
                { id: "booking", label: "📅 Booking Engine" },
              ].map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as "all" | "web" | "ecommerce" | "booking")}
                    className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 select-none ${
                      isSelected
                        ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md shadow-slate-200/50 dark:shadow-black/40 ring-1 ring-black/5 dark:ring-white/10"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="space-y-16"
          >
            {/* WEB TAB */}
            {(activeTab === "all" || activeTab === "web") && (
              <div className="space-y-8">
                {activeTab === "all" && (
                  <h3 className="text-2xl font-black text-center text-slate-900 dark:text-white uppercase tracking-tighter">
                    Siti Web
                  </h3>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
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
                          <span className="text-[11px] font-black text-white uppercase tracking-widest">Più Richiesto</span>
                        </div>
                      )}
                      <div className="mb-8">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1 uppercase tracking-tight">
                          {pkg.name}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-5">{pkg.description}</p>
                      </div>
                      <ul className="space-y-3.5 mb-8 flex-grow">
                        {pkg.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                            <span className={`w-4 h-4 shrink-0 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center`}>
                              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            {feat}
                          </li>
                        ))}
                      </ul>
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
            )}

            {/* ECOMMERCE TAB */}
            {(activeTab === "all" || activeTab === "ecommerce") && (
              <div className="space-y-8">
                {activeTab === "all" && (
                  <h3 className="text-2xl font-black text-center text-slate-900 dark:text-white uppercase tracking-tighter">
                    E-Commerce
                  </h3>
                )}
                {/* Info banner */}
                <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100 dark:border-indigo-900/40">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="text-2xl shrink-0">💡</div>
                    <div>
                      <p className="text-slate-900 dark:text-white font-black text-sm uppercase tracking-tight">
                        Quale piattaforma fa per te?
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5 leading-relaxed">
                        Il prezzo indicato è il <strong className="text-slate-700 dark:text-slate-300">costo di setup una-tantum</strong>.
                        Considera sempre i costi ricorrenti mensili della piattaforma scelta.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                  {ecommercePlans.map((plan, index) => (
                    <EcommerceCard key={plan.id} plan={plan} index={index} />
                  ))}
                </div>
              </div>
            )}

            {/* BOOKING TAB */}
            {(activeTab === "all" || activeTab === "booking") && (
              <div className="space-y-8">
                {activeTab === "all" && (
                  <h3 className="text-2xl font-black text-center text-slate-900 dark:text-white uppercase tracking-tighter">
                    Booking Engine
                  </h3>
                )}
                {/* Info banner */}
                <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100 dark:border-indigo-900/40">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="text-2xl shrink-0">📅</div>
                    <div>
                      <p className="text-slate-900 dark:text-white font-black text-sm uppercase tracking-tight">
                        Addio commissioni Booking.com e Airbnb
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5 leading-relaxed">
                        Sistema di prenotazione proprietario integrato nel tuo sito. <strong className="text-slate-700 dark:text-slate-300">Zero commissioni</strong> alle OTA, pagamenti diretti, controllo totale.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                  {bookingPlans.map((plan, index) => (
                    <BookingCard key={plan.id} plan={plan} index={index} />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Packages;
