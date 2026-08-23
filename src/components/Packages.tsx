import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const packageList = [
  {
    name: "Sito Vetrina Corporate",
    price: "Su preventivo",
    description: "Presenza online autorevole, ultra-veloce e responsive.",
    features: ["Next.js / Astro Speed", "100/100 Core Web Vitals", "WhatsApp & Contatto Diretto", "Hosting Cloud Incluso"],
    color: "from-slate-900 to-indigo-950",
    popular: false,
  },
  {
    name: "Piattaforma Business Pro",
    price: "Su preventivo",
    description: "Sito aziendale multi-pagina con CMS e motore di conversione.",
    features: ["Architettura Custom", "CMS Autonomo & Intuitivo", "SEO Tecnico Avanzato", "Design Titanium Studio"],
    color: "from-indigo-900 to-slate-900",
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
    gradientClass: "from-slate-900 to-slate-950",
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
    gradientClass: "from-slate-900 via-slate-900 to-indigo-950",
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
    gradientClass: "from-slate-900 to-slate-950",
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
    name: "Full Custom Enterprise",
    tagline: "Infrastruttura Next.js · TypeScript · Vercel",
    price: "Su preventivo",
    monthlyExtra: "Infrastruttura su misura",
    gradientClass: "from-slate-900 to-black",
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
  demoUrl?: string;
  demoLabel?: string;
};

const bookingPlans: BookingPlan[] = [
  {
    id: "booking-restaurant",
    name: "Ristorante & Table Booking",
    tagline: "Prenotazioni tavoli & Menù Digitale",
    price: "Su preventivo",
    monthlyExtra: "Hosting incluso 1° anno",
    gradientClass: "from-slate-900 to-slate-950",
    icon: "🍽️",
    demoUrl: "https://demo-aura-osteria.vercel.app",
    demoLabel: "Vedi Demo Aura Osteria",
    features: [
      "Prenotazione tavoli 24/7 con fasce e turni",
      "Menù digitale allergeni & abbinamento vini",
      "Conferma automatica istantanea WhatsApp & Email",
      "Gestione capienza sala e lista d'attesa",
      "Zero commissioni e zero costi a coperto",
      "QR Code tavolo ad alta risoluzione",
    ],
    idealFor: "Ristoranti, bistrot, pizzerie ed enoteche con prenotazione tavoli",
    techStack: ["Next.js", "Resend Email", "WhatsApp Webhook", "QR Engine"],
  },
  {
    id: "booking-rental",
    name: "Smart Rental & Case Vacanza",
    tagline: "Per B&B, Appartamenti e Ville",
    price: "Su preventivo",
    monthlyExtra: "Hosting incluso 1° anno",
    gradientClass: "from-slate-900 via-slate-900 to-indigo-950",
    popular: true,
    icon: "🏡",
    features: [
      "Booking Engine proprietario integrato",
      "Sincronizzazione iCal (Airbnb, Booking.com, VRBO)",
      "Zero overbooking con calendario unificato",
      "Incasso diretto della caparra con Stripe",
      "Calcolo automatico pulizie e tassa di soggiorno",
      "Zero commissioni del 15-20% trattenute dalle OTA",
    ],
    idealFor: "Proprietari di case vacanza, affitti brevi e B&B che vogliono prenotazioni dirette",
    techStack: ["Next.js", "iCal Sync", "Stripe Checkout", "Neon/Supabase"],
  },
  {
    id: "booking-resort",
    name: "Boutique Resort & Multi-Room",
    tagline: "Per hotel e strutture ricettive 4-10 camere",
    price: "Su preventivo",
    monthlyExtra: "~20–40€/mese manutenzione",
    gradientClass: "from-slate-900 to-slate-950",
    icon: "🏨",
    demoUrl: "https://demo-villa-seraphina-hotel.vercel.app",
    demoLabel: "Vedi Demo Villa Seraphina",
    features: [
      "Selezione tipologia suite/camere con galleria HD",
      "Preventivatore dinamico date, notti e ospiti",
      "Vendita extra (SPA, esperienze, degustazioni)",
      "Pannello proprietario per bloccare date e tariffe",
      "Email transazionali e voucher di benvenuto",
      "Integrazione pagamenti sicuri Stripe",
    ],
    idealFor: "Boutique hotel, resort e agriturismi con camere e SPA",
    techStack: ["Next.js", "PostgreSQL", "Stripe Elements", "Resend"],
  },
  {
    id: "booking-enterprise",
    name: "Enterprise & Connessione PMS",
    tagline: "Integrazione con gestionali esistenti",
    price: "Su preventivo",
    monthlyExtra: "Variabile su progetto",
    gradientClass: "from-slate-900 to-black",
    icon: "⚙️",
    features: [
      "Frontend ultra-veloce (100/100 Core Web Vitals)",
      "Integrazione con PMS esistente (Octorate, Zak, ecc.)",
      "Supporto multilingua completo (IT, EN, DE, FR)",
      "Ottimizzazione tasso di conversione disintermediata",
      "Tracciamento conversioni e Pixel GA4 / Meta",
      "Assistenza prioritaria e SLA garantito",
    ],
    idealFor: "Hotel con gestionale attivo, catene e strutture ricettive enterprise",
    techStack: ["Next.js", "PMS APIs / Embed", "i18n", "PostgreSQL"],
  },
];

// Componente riusabile per le card e-commerce
function EcommerceCard({ plan, index }: { plan: EcommerceTier; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={`relative flex flex-col rounded-3xl border overflow-hidden transition-all duration-300 ${
        plan.popular
          ? "border-zinc-700 bg-zinc-950/90 shadow-2xl shadow-black/80"
          : "border-zinc-800/80 bg-zinc-950/80 shadow-xl shadow-black/60"
      }`}
    >
      {/* Header */}
      <div className="bg-zinc-900/90 p-5 relative overflow-hidden border-b border-zinc-800/80">
        {plan.popular && (
          <div className="absolute top-3.5 right-3.5 px-2.5 py-0.5 bg-white text-black rounded-full shadow-md">
            <span className="text-[9px] font-black uppercase tracking-widest">Più Scelto</span>
          </div>
        )}
        <div className="relative z-10">
          <span className="text-2xl mb-1.5 block">{plan.icon}</span>
          <h3 className="text-lg font-black text-white uppercase tracking-tight leading-tight">
            {plan.name}
          </h3>
          <p className="text-zinc-400 text-xs font-normal mt-0.5">{plan.tagline}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow bg-zinc-950/80">
        {/* Ideal for */}
        <div className="mb-3.5 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider block mb-0.5">
            Ideale per
          </span>
          <p className="text-zinc-300 text-xs font-medium leading-snug">
            {plan.idealFor}
          </p>
        </div>

        {/* Pros */}
        <div className="mb-3.5">
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider block mb-1.5">
            Punti di forza
          </span>
          <ul className="space-y-1">
            {plan.pros.slice(0, 3).map((pro) => (
              <li key={pro} className="flex items-start gap-1.5 text-zinc-300 text-xs font-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                {pro}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="mt-auto pt-3 border-t border-zinc-800/80">
          <div className="flex flex-wrap gap-1">
            {plan.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[9px] font-medium uppercase tracking-wider bg-zinc-900 text-zinc-400 border border-zinc-800/80"
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
          className="relative overflow-hidden group w-full py-3 mt-4 rounded-xl font-black uppercase tracking-widest text-[10px] text-black text-center bg-white hover:bg-zinc-200 shadow-xl shadow-white/10 transition-all cursor-pointer"
        >
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={`relative flex flex-col rounded-3xl border overflow-hidden transition-all duration-300 ${
        plan.popular
          ? "border-zinc-700 bg-zinc-950/90 shadow-2xl shadow-black/80"
          : "border-zinc-800/80 bg-zinc-950/80 shadow-xl shadow-black/60"
      }`}
    >
      {/* Header */}
      <div className="bg-zinc-900/90 p-5 relative overflow-hidden border-b border-zinc-800/80">
        {plan.popular && (
          <div className="absolute top-3.5 right-3.5 px-2.5 py-0.5 bg-white text-black rounded-full shadow-md">
            <span className="text-[9px] font-black uppercase tracking-widest">Più Scelto</span>
          </div>
        )}
        <div className="relative z-10">
          <span className="text-2xl mb-1.5 block">{plan.icon}</span>
          <h3 className="text-lg font-black text-white uppercase tracking-tight leading-tight">
            {plan.name}
          </h3>
          <p className="text-zinc-400 text-xs font-normal mt-0.5">{plan.tagline}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow bg-zinc-950/80">
        {/* Ideal for */}
        <div className="mb-3.5 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider block mb-0.5">
            Ideale per
          </span>
          <p className="text-zinc-300 text-xs font-medium leading-snug">
            {plan.idealFor}
          </p>
        </div>

        {/* Features */}
        <div className="mb-3.5">
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider block mb-1.5">
            Incluso
          </span>
          <ul className="space-y-1">
            {plan.features.slice(0, 3).map((feat) => (
              <li key={feat} className="flex items-start gap-1.5 text-zinc-300 text-xs font-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="mt-auto pt-3 border-t border-zinc-800/80">
          <div className="flex flex-wrap gap-1">
            {plan.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[9px] font-medium uppercase tracking-wider bg-zinc-900 text-zinc-400 border border-zinc-800/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Demo Link if available */}
        {plan.demoUrl && (
          <a
            href={plan.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 mt-3 rounded-xl text-[10px] font-bold uppercase tracking-wider text-white bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-all shadow-sm"
          >
            <span>{plan.demoLabel || "Vedi Demo Live"}</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        )}

        {/* CTA */}
        <motion.button
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new Event("open-chat"));
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className={`relative overflow-hidden group w-full py-3 ${plan.demoUrl ? "mt-2" : "mt-4"} rounded-xl font-black uppercase tracking-widest text-[10px] text-black text-center bg-white hover:bg-zinc-200 shadow-xl shadow-white/10 transition-all cursor-pointer`}
        >
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
    <section className="relative w-full bg-black py-4 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-zinc-300 shadow-xs">
            Tariffe &amp; Soluzioni
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Scegli il{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400">
              Pacchetto
            </span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-normal">
            Soluzioni chiare e trasparenti. Nessun costo nascosto, solo risultati concreti.
          </p>

          {/* Tab Switcher Pills */}
          <div className="inline-flex p-1.5 bg-zinc-900/90 backdrop-blur-md rounded-2xl border border-zinc-800 shadow-sm overflow-x-auto max-w-full">
            <div className="flex items-center gap-1.5">
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
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer focus:outline-none select-none ${
                      isSelected
                        ? "bg-white text-black shadow-md font-black"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
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
                  <h3 className="text-2xl font-black text-center text-white uppercase tracking-tight">
                    Siti Web
                  </h3>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                  {packageList.map((pkg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                      className={`relative flex flex-col p-6 rounded-3xl border transition-all duration-300 ${
                        pkg.popular
                          ? "border-zinc-700 bg-zinc-950/90 shadow-2xl shadow-black/80"
                          : "border-zinc-800/80 bg-zinc-950/80 shadow-xl shadow-black/60 hover:border-zinc-700"
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-white text-black rounded-full shadow-lg z-20">
                          <span className="text-[10px] font-black uppercase tracking-widest">Più Richiesto</span>
                        </div>
                      )}
                      <div className="mb-4">
                        <h3 className="text-lg font-black text-white mb-0.5 uppercase tracking-tight">
                          {pkg.name}
                        </h3>
                        <p className="text-zinc-400 text-xs font-normal">{pkg.description}</p>
                      </div>
                      <ul className="space-y-2 mb-6 flex-grow">
                        {pkg.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2.5 text-zinc-300 text-xs font-normal">
                            <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-white" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                      <motion.button
                        onClick={(e) => {
                          e.preventDefault();
                          window.dispatchEvent(new Event("open-chat"));
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="relative overflow-hidden group w-full py-3 rounded-xl font-black uppercase tracking-widest text-[10px] text-black text-center bg-white hover:bg-zinc-200 shadow-xl shadow-white/10 transition-all cursor-pointer"
                      >
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
                  <h3 className="text-2xl font-black text-center text-white uppercase tracking-tight">
                    E-Commerce
                  </h3>
                )}
                {/* Info banner */}
                <div className="p-4 md:p-5 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="text-2xl shrink-0">💡</div>
                    <div>
                      <p className="text-white font-bold text-sm uppercase tracking-tight">
                        Quale piattaforma fa per te?
                      </p>
                      <p className="text-zinc-400 text-xs mt-0.5 leading-relaxed font-normal">
                        Il prezzo indicato è il <strong className="text-white font-bold">costo di setup una-tantum</strong>.
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
                  <h3 className="text-2xl font-black text-center text-white uppercase tracking-tight">
                    Booking Engine
                  </h3>
                )}
                {/* Info banner */}
                <div className="p-4 md:p-5 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="text-2xl shrink-0">📅</div>
                    <div>
                      <p className="text-white font-bold text-sm uppercase tracking-tight">
                        Disintermediazione &amp; Zero Commissioni
                      </p>
                      <p className="text-zinc-400 text-xs mt-0.5 leading-relaxed font-normal">
                        Sistemi di prenotazione proprietari per ristoranti, B&amp;B e boutique hotel. <strong className="text-white font-bold">Risparmia fino al 20% di commissioni</strong> rispetto alle OTA (Booking.com, Airbnb, TheFork), con sincronizzazione iCal e incassi diretti su Stripe.
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
