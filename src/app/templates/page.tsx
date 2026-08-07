import type { Metadata } from "next";
import React from "react";
import { CheckCircleIcon, CodeBracketIcon, SparklesIcon, PresentationChartLineIcon, ShoppingBagIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { getDemoProducts } from "@/lib/vercel";
import DemoProjectsGrid from "@/components/DemoProjectsGrid";
import ContactButton from "@/components/ContactButton";

export const metadata: Metadata = {
  title: "Soluzioni Web Su Misura & PWA | Marco Cerilli - Terracina, Latina e Provincia",
  description: "Pacchetti web e soluzioni custom sviluppate a mano a Terracina, Latina e provincia. Landing page ad alta conversione, PWA, Gestionali e E-commerce in Next.js.",
  keywords: ["sviluppatore web terracina", "realizzazione siti web latina e provincia", "pwa terracina latina", "landing page latina", "sviluppatore web provincia latina", "creazione e-commerce terracina", "web agency latina e provincia"],
};

const templates = [
  {
    id: "freelance-hub",
    title: "Freelance Hub",
    target: "Liberi professionisti, Designer, Fotografi",
    packageLink: "Starter Landing",
    price: "Su preventivo",
    description: "Un sito essenziale di 3 pagine (Home, Servizi, Contatti) con design minimale, dark mode nativa e focus sul personal branding.",
    features: [
      "Portfolio & Case Studies",
      "Pagine Servizi dettagliate",
      "Design Minimalista e Dark Mode",
      "Ottimizzazione SEO Base"
    ],
    color: "from-emerald-500 to-teal-600",
    icon: CodeBracketIcon,
    image: "/projects/idraulico.jpg",
  },
  {
    id: "local-business",
    title: "Local Business Elite (Standard)",
    target: "Ristoranti, Palestre, Artigiani & Attività Locali",
    packageLink: "Sito Vetrina Pro",
    price: "Su preventivo",
    description: "La soluzione multipagina definitiva per attività locali. Struttura solida per dominare la SEO locale, catalogo servizi e form contatti.",
    features: [
      "Menu o Catalogo Servizi",
      "Google Maps & Orari integrati",
      "Form Contatto / Richiesta Preventivo",
      "Pannello CMS per aggiornamenti"
    ],
    color: "from-indigo-600 to-purple-600",
    icon: SparklesIcon,
    image: "/projects/lacasetta.png",
  },
  {
    id: "hospitality-booking-pro",
    title: "Hospitality & Booking Pro",
    target: "B&B, Case Vacanze, Strutture Ricettive & Noleggi",
    packageLink: "Hotel Engine Pro",
    price: "Su preventivo",
    description: "Piattaforma di prenotazione avanzata per B&B e case vacanze con sincronizzazione iCal (Airbnb/Booking), mini gestionale CRM Admin e calendario in tempo reale.",
    features: [
      "Sincronizzazione iCal (Airbnb & Booking)",
      "Mini Gestionale CRM & Dashboard Admin",
      "Calendario Disponibilità Real-Time",
      "Conferme Automatiche via Email/Form"
    ],
    color: "from-teal-500 to-emerald-600",
    icon: SparklesIcon,
    image: "/projects/porta-maggio.png",
  },
  {
    id: "pwa-app-suite",
    title: "PWA & Web App Suite",
    target: "Servizi, Prenotazioni & Mobile App",
    packageLink: "Full Custom",
    price: "Su preventivo",
    description: "Applicativo web installabile come un'App (iOS/Android) con funzionamento offline, notifiche push e gestione dati in tempo reale.",
    features: [
      "Installabile come App su iOS & Android",
      "Notifiche Push & Cache Offline",
      "Area Riservata & Auth Integrata",
      "Database Real-time & API Custom"
    ],
    color: "from-amber-500 to-orange-600",
    icon: DevicePhoneMobileIcon,
    image: "/projects/dashboard.jpg",
  },
  {
    id: "leadmagnet-pro",
    title: "LeadMagnet Pro",
    target: "Coach, Consulenti, Lanci & Funnel",
    packageLink: "Landing Page Custom",
    price: "Su preventivo",
    description: "Pagina ad Alta Conversione progettata su misura insieme alla nostra strategia di marketing per trasformare il traffico in clienti.",
    features: [
      "Strategia Marketing & Copy Persuasivo",
      "Integrazione Form Lead Gen & Calendly",
      "Tracciamenti Pixel & Analytics Pronti",
      "Caricamento istantaneo (< 0.8s Next.js)"
    ],
    color: "from-sky-500 to-blue-600",
    icon: PresentationChartLineIcon,
    popular: true,
    image: "/templates/landingpage.png",
  },
  {
    id: "minimal-store",
    title: "Minimal Digital Store",
    target: "Brand emergenti, Venditori digitali",
    packageLink: "E-commerce Shopify",
    price: "Su preventivo",
    description: "Template e-commerce per 1-20 prodotti. Velocissimo, zero commissioni mensili extra e carrello slide-over ottimizzato.",
    features: [
      "Vetrina Prodotti e Carosello",
      "Carrello Slide-over custom",
      "Integrazione Stripe / PayPal",
      "Gestione Ordini Integrata"
    ],
    color: "from-rose-500 to-red-600",
    icon: ShoppingBagIcon,
    image: "/projects/ermannotech.png",
  }
];

export default async function TemplatesPage() {
  const demoProducts = await getDemoProducts();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-24 pb-12 transition-colors duration-300">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-bold uppercase tracking-widest mb-6 border border-indigo-200 dark:border-indigo-800">
          Soluzioni & Pacchetti Su Misura
        </span>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
          Architetture Web <br/>
          <span className="text-indigo-600 dark:text-indigo-400">Sviluppate Su Misura</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 font-medium">
          Ogni progetto viene realizzato custom a mano (Next.js) con sviluppatore dedicato, senza CMS generici. Scegli l&apos;architettura di partenza e richiedi una consulenza strategica immediata.
        </p>
      </section>

      {/* Grid Templates */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {templates.map((tpl, idx) => {
            return (
              <div 
                key={tpl.id}
                className={`relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 flex flex-col animate-in fade-in slide-in-from-bottom-8 fill-mode-both ${
                  tpl.popular 
                    ? "border-indigo-300 dark:border-indigo-500/40 shadow-2xl shadow-indigo-600/15 hover:shadow-[0_35px_70px_-15px_rgba(79,70,229,0.3)]" 
                    : "border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-900/5 dark:shadow-black/40 hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.2)]"
                }`}
                style={{ animationDelay: `${idx * 150}ms`, animationDuration: '700ms' }}
              >
                {tpl.popular && (
                  <div className="absolute top-4 right-4 px-4 py-1.5 bg-indigo-600 rounded-full flex items-center gap-1.5 shadow-lg z-20">
                    <SparklesIcon className="w-4 h-4 text-white" />
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                      Il più richiesto
                    </span>
                  </div>
                )}
                
                {/* Top: Cover Image (Full Width Contain No Cropping) */}
                <div className="relative w-full aspect-[16/10] bg-slate-950 border-b border-slate-100 dark:border-slate-800 group overflow-hidden flex items-center justify-center">
                  <Image
                    src={tpl.image}
                    alt={`Mockup per ${tpl.title}`}
                    fill
                    unoptimized
                    className="object-contain object-center p-2 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-4 pointer-events-none">
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/20">
                      Design Custom
                    </span>
                  </div>
                </div>

                {/* Bottom: Info */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tpl.color} flex items-center justify-center shadow-lg text-white shrink-0`}>
                      <tpl.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
                          {tpl.title}
                        </h2>
                        <div className="flex flex-col items-end">
                          <span className="text-xl font-black text-indigo-600 dark:text-indigo-400">
                            {tpl.price}
                          </span>
                        </div>
                      </div>
                      <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">
                        Ideale per: {tpl.target}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6">
                    {tpl.description}
                  </p>

                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 mb-6">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white mb-3">
                      Incluso nello Sviluppo:
                    </h4>
                    <ul className="space-y-2">
                      {tpl.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircleIcon className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                          <span className="font-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-center mt-auto pt-2">
                    <ContactButton color={tpl.color} label="Richiedi Consulenza WhatsApp" />
                    <div className="text-center sm:text-left w-full sm:w-auto">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                        Pacchetto Personalizzato
                      </span>
                      <span className="text-[11px] font-black text-slate-900 dark:text-white block mt-0.5">
                        {tpl.packageLink} — {tpl.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Vercel Demos Gallery */}
      <div className="border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950/50 pt-8 pb-16">
        <DemoProjectsGrid products={demoProducts} />
      </div>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 text-center pb-20 mt-12">
        <div className="bg-indigo-600 rounded-3xl p-10 md:p-16 shadow-2xl shadow-indigo-600/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-900/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
              Hai bisogno di una soluzione su misura?
            </h3>
            <p className="text-indigo-100 text-sm md:text-base font-medium mb-8 max-w-xl mx-auto">
              Realizziamo applicativi complessi, piattaforme custom e architetture scalabili. Raccontami il tuo progetto e progettiamo la soluzione perfetta.
            </p>
            <Link
              href="/#contatti"
              className="inline-block bg-white text-indigo-900 px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-indigo-50 transition-colors shadow-xl"
            >
              Parliamone Insieme
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
