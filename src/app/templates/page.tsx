import React from "react";
import { CheckCircleIcon, CodeBracketIcon, SparklesIcon, PresentationChartLineIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { getDemoProducts } from "@/lib/vercel";
import InteractiveDemo from "@/components/InteractiveDemo";

const templates = [
  {
    id: "leadmagnet-pro",
    title: "LeadMagnet Pro",
    target: "Coach, Consulenti, Info-produttori",
    packageLink: "Landing Page Custom",
    description: "Una singola pagina con una 'Hero' accattivante, perfetta per scaricare un Ebook o prenotare una chiamata tramite Calendly.",
    features: [
      "Alta conversione (CR > 20%)",
      "Integrazione Calendly / Form",
      "Sezione Recensioni (Social Proof)",
      "Caricamento istantaneo (Next.js)"
    ],
    color: "from-sky-500 to-blue-600",
    icon: PresentationChartLineIcon,
    image: "/projects/zecchi.jpg",
  },
  {
    id: "freelance-hub",
    title: "Freelance Hub",
    target: "Liberi professionisti, Designer, Fotografi",
    packageLink: "Mini Sito Express",
    description: "Un sito essenziale di 3 pagine (Home, Servizi, Contatti) con design minimale, dark mode nativa e focus sul personal branding.",
    features: [
      "Portfolio & Case Studies",
      "Pagine Servizi dettagliate",
      "Design Minimalista e Dark Mode",
      "Ottimizzazione SEO Base"
    ],
    color: "from-emerald-500 to-teal-600",
    icon: CodeBracketIcon,
    popular: true,
    image: "/projects/avvocato.png",
  },
  {
    id: "local-business",
    title: "Local Business Elite",
    target: "Ristoranti, Palestre, Artigiani",
    packageLink: "Sito Vetrina Pro",
    description: "La soluzione multipagina definitiva per attività locali. Struttura solida per dominare la SEO locale e generare fiducia.",
    features: [
      "Menu o Catalogo Servizi",
      "Google Maps & Orari integrati",
      "Form di Prenotazione Avanzato",
      "Pannello CMS per aggiornamenti"
    ],
    color: "from-indigo-600 to-purple-600",
    icon: SparklesIcon,
    image: "/projects/bigmama.png",
  },
  {
    id: "minimal-store",
    title: "Minimal Digital Store",
    target: "Brand emergenti, Venditori digitali",
    packageLink: "E-commerce Pro",
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
          Boutique Digitale
        </span>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
          Soluzioni Sartoriali, <br/>
          <span className="text-indigo-600 dark:text-indigo-400">Pronto Uso</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 font-medium">
          Esplora le nostre soluzioni premium. Il design di un&apos;agenzia, la velocità del codice moderno (Next.js), e l&apos;affiancamento di uno sviluppatore dedicato. Scegli il tuo punto di partenza.
        </p>
      </section>

      {/* Grid Templates */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="flex flex-col gap-16 md:gap-24">
          {templates.map((tpl, idx) => {
            const templateDemos = demoProducts.filter(d => d.category.toLowerCase() === tpl.packageLink.toLowerCase());
            
            return (
              <div 
                key={tpl.id}
                className="flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Template Info Card */}
                <div className={`relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col lg:flex-row ${
                  tpl.popular 
                    ? "border-indigo-200 dark:border-indigo-500/30 shadow-[0_20px_50px_rgba(79,70,229,0.1)] dark:shadow-indigo-900/20" 
                    : "border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-black/20"
                }`}>
                  {tpl.popular && (
                    <div className="absolute top-4 right-4 px-4 py-1.5 bg-indigo-600 rounded-full flex items-center gap-1.5 shadow-lg z-20">
                      <SparklesIcon className="w-4 h-4 text-white" />
                      <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                        Il più richiesto
                      </span>
                    </div>
                  )}
                  
                  {/* Left: Info */}
                  <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${tpl.color} flex items-center justify-center shadow-lg text-white`}>
                        <tpl.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
                          {tpl.title}
                        </h2>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">
                          Ideale per: {tpl.target}
                        </p>
                      </div>
                    </div>

                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8">
                      {tpl.description}
                    </p>

                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 mb-8">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white mb-4">
                        Incluso nel Setup:
                      </h4>
                      <ul className="space-y-3 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                        {tpl.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                            <CheckCircleIcon className="w-5 h-5 text-indigo-500 shrink-0" />
                            <span className="font-medium">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center mt-auto">
                      <Link
                        href={`/#pacchetti`}
                        className={`w-full sm:w-auto text-center px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs text-white shadow-lg transition-all bg-linear-to-r ${tpl.color} hover:brightness-110`}
                      >
                        Richiedi Setup
                      </Link>
                      <div className="text-center sm:text-left w-full sm:w-auto">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                          Disponibile con pacchetto
                        </span>
                        <span className="text-xs font-black text-slate-900 dark:text-white block mt-0.5">
                          {tpl.packageLink}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Cover Image (if no demos or just as a showcase) */}
                  <div className="relative lg:w-1/2 min-h-[300px] lg:min-h-full bg-slate-100 dark:bg-slate-800 border-l border-slate-200 dark:border-slate-800 overflow-hidden">
                    <Image
                      src={tpl.image}
                      alt={`Mockup per ${tpl.title}`}
                      fill
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                      <div className="text-white">
                        <span className="text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/20">
                          Design Base
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Demos Section for this Template */}
                {templateDemos.length > 0 && (
                  <div className="mt-8 ml-4 md:ml-12 border-l-2 border-indigo-500/20 pl-6 md:pl-10 relative">
                    <div className="absolute -left-[11px] top-4 w-5 h-5 rounded-full bg-slate-50 dark:bg-slate-950 border-4 border-indigo-500"></div>
                    <h3 className="text-xl font-black uppercase tracking-widest text-slate-900 dark:text-white mb-2">
                      Demo Interattive
                    </h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-8 max-w-xl">
                      Esplora i progetti reali realizzati con questa soluzione. Naviga i siti direttamente da qui o aprili in una nuova finestra per testare la velocità.
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {templateDemos.map(demo => (
                        <div key={demo.id} className="h-[450px] md:h-[600px]">
                          <InteractiveDemo product={demo} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 text-center pb-20">
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
