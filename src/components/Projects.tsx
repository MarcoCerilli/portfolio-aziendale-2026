"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  category: "Siti Aziendali & SEO" | "Sistemi & App Su Misura";
  color: string;
  status: "online" | "demo" | "soon";
}

const categories = ["Tutti", "Siti Aziendali & SEO", "Sistemi & App Su Misura"];

// Badge ricolorati per sfondo chiaro (testi più scuri e bordi più definiti)
const getTagStyle = (tag: string) => {
  const t = tag.toLowerCase();
  if (t.includes("next.js"))
    return "bg-blue-50 text-blue-700 border-blue-200";
  if (t.includes("ai") || t.includes("google") || t.includes("groq"))
    return "bg-purple-50 text-purple-700 border-purple-200";
  if (t.includes("wordpress") || t.includes("seo"))
    return "bg-cyan-50 text-cyan-700 border-cyan-200";
  if (t.includes("stripe") || t.includes("fintech") || t.includes("b2b"))
    return "bg-indigo-50 text-indigo-700 border-indigo-200";
  if (t.includes("laravel") || t.includes("php"))
    return "bg-red-50 text-red-700 border-red-200";
  if (t.includes("firebase") || t.includes("saas"))
    return "bg-orange-50 text-orange-700 border-orange-200";
  return "bg-slate-50 text-slate-600 border-slate-200";
};

const projectsList: Project[] = [
  // --- NUOVI PROGETTI AGGIUNTI ---
  {
    title: "Avvocato Anna Fusco (Official)",
    description:
      "Sito istituzionale sviluppato in WordPress con CSS personalizzato e ottimizzazione per il settore legale. Focus su autorevolezza e accessibilità.",
    tags: ["WordPress", "Custom CSS", "Legal Tech"],
    link: "https://avvocatoannafusco.it",
    image: "/projects/avvocato.jpg",
    category: "Siti Aziendali & SEO",
    color: "from-slate-700/10",
    status: "online",
  },
  {
    title: "Anna Fusco Legal Demo",
    description:
      "Re-design sperimentale della piattaforma legale utilizzando Next.js 14. Performance estreme, animazioni fluide e architettura component-based.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://studio-legale-mu.vercel.app/", // Inserisci qui il link vercel se lo hai
    image: "/projects/legale.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-indigo-500/10",
    status: "soon",
  },
  {
    title: "Next.js Admin Dashboard",
    description:
      "Dashboard di gestione finanziaria completa: autenticazione, database PostgreSQL integrato e gestione dinamica delle fatture in tempo reale.",
    tags: ["Next.js", "PostgreSQL", "Auth.js", "Server Components"],
    link: "https://nextjs-dashboard-zeta-sooty-93.vercel.app/",
    image: "/projects/dashboard.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-blue-600/10",
    status: "demo",
  },
  // --- PROGETTI PRECEDENTI ---
  {
    title: "Vivaio Paola Bartoli",
    description:
      "Digital identity per vivaio d'eccellenza. Catalogo botanico dinamico, gestione asset con UploadThing e assistente virtuale Groq.",
    tags: ["Next.js", "Prisma", "Groq AI", "UploadThing"],
    link: "https://vivaiopaolabartoliterracina.it",
    image: "/projects/vivaio.jpg",
    category: "Siti Aziendali & SEO",
    color: "from-green-600/10",
    status: "online",
  },
  {
    title: "Il Quinto Polo Srls",
    description:
      "Piattaforma B2B personalizzata per l'ingrosso florovivaistico. Catalogo dinamico con listini riservati e integrazione WhatsApp Business.",
    tags: ["WordPress", "ACF Pro", "B2B E-commerce", "WhatsApp API"],
    link: "https://ilquintopolosrls.it",
    image: "/projects/quintopolo.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-green-700/10",
    status: "online",
  },
  {
    title: "ModernStore E-commerce",
    description:
      "Piattaforma e-commerce full-stack con Stripe. Gestione totale dello stock e pagamenti sicuri.",
    tags: ["Next.js", "Stripe", "Prisma"],
    link: "https://modern-store-nine.vercel.app/",
    image: "/projects/ecommerce-clothing.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-blue-600/10",
    status: "demo",
  },
  {
    title: "La Casetta nelle Mura",
    description:
      "Sito hospitality a Terracina. Ottimizzazione SEO per il posizionamento turistico e sistema di contatto diretto.",
    tags: ["WordPress", "SEO", "Hospitality"],
    link: "https://lacasettanellemura.it",
    image: "/projects/casetta.jpg",
    category: "Siti Aziendali & SEO",
    color: "from-amber-500/10",
    status: "online",
  },
  {
    title: "Real-time Shift Planner",
    description:
      "Sistema cloud per la gestione dei turni aziendali con sincronizzazione istantanea tra i dipendenti.",
    tags: ["React", "Firebase", "Real-time"],
    link: "https://gestioneturni-b1b21.web.app/",
    image: "/projects/turni.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-orange-500/10",
    status: "demo",
  },
  {
    title: "Idraulico Iona Bros",
    description:
      "Web App Next.js ottimizzata per il pronto intervento. Integra l'AI per gestire le richieste dei clienti in tempo reale.",
    tags: ["Next.js", "AI Integration", "Local SEO"],
    link: "#",
    image: "/projects/idraulico.jpg",
    category: "Siti Aziendali & SEO",
    color: "from-blue-500/10",
    status: "soon",
  },
  {
    title: "Studio Contabile Cittarelli",
    description:
      "Piattaforma per consulenza fiscale. Design moderno focalizzato sulla conversione e l'analisi smart dei documenti.",
    tags: ["Next.js", "Tailwind", "FinTech"],
    link: "#",
    image: "/projects/contabile.jpg",
    category: "Siti Aziendali & SEO",
    color: "from-emerald-500/10",
    status: "soon",
  },
  {
    title: "Gym Management SaaS",
    description:
      "Software gestionale cloud per centri sportivi. Automazione della segreteria e gestione abbonamenti (SaaS).",
    tags: ["Laravel", "Docker", "SaaS"],
    link: "#",
    image: "/projects/gym.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-purple-500/10",
    status: "demo",
  },
];

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<string>("Tutti");

  const filteredProjects = projectsList.filter((p) =>
    filter === "Tutti" ? true : p.category === filter,
  );

  return (
    // Aggiunto cursor-none per coerenza con la Hero
    <section className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto cursor-none [&_*]:cursor-none">
      
      {/* Header - Ridotto leggermente il margine inferiore */}
      <div className="flex flex-col items-center text-center mb-10 md:mb-16 space-y-4">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
          Portfolio <span className="text-indigo-600">Progetti</span>
        </h2>
        <p className="text-slate-500 text-xs md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
          Soluzioni digitali su misura focalizzate su performance e conversione.
        </p>

        {/* Filtri - Ottimizzati per il touch e il cursore personalizzato */}
        <div className="w-full flex justify-center pt-6">
          <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat
                    ? "bg-white text-indigo-600 shadow-md ring-1 ring-black/5"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid - Layout e animazioni */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="group relative bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden flex flex-col hover:border-indigo-400/50 transition-all duration-500 h-full shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* AREA FOTO - Migliorato l'hover */}
              <div className="relative aspect-video w-full bg-slate-50 flex items-center justify-center p-4">
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-sm bg-white border border-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradiente all'hover */}
                  <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors duration-500" />
                </div>
              </div>

              {/* CONTENUTO */}
              <div className="p-7 md:p-9 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <span className="text-indigo-600 text-[9px] font-black uppercase tracking-[0.2em] block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Bottone Link Esterno */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-slate-900 text-white rounded-xl shadow-lg hover:bg-indigo-600 transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </motion.a>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium line-clamp-3">
                  {project.description}
                </p>

                {/* Tags con stile dinamico */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 border rounded-lg text-[9px] font-bold uppercase tracking-wider shadow-sm ${getTagStyle(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}