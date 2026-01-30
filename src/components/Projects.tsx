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

const getTagStyle = (tag: string) => {
  const t = tag.toLowerCase();
  if (t.includes("next.js"))
    return "bg-blue-500/10 text-blue-400 border-blue-500/20";
  if (t.includes("ai") || t.includes("google"))
    return "bg-purple-500/10 text-purple-400 border-purple-500/20";
  if (t.includes("wordpress") || t.includes("seo"))
    return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
  if (t.includes("stripe") || t.includes("fintech"))
    return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
  if (t.includes("laravel") || t.includes("php"))
    return "bg-red-500/10 text-red-400 border-red-500/20";
  if (t.includes("firebase") || t.includes("saas"))
    return "bg-orange-500/10 text-orange-400 border-orange-500/20";
  return "bg-white/5 text-gray-400 border-white/10";
};

const projectsList: Project[] = [
  {
    title: "Idraulico Iona Bros",
    description:
      "Web App Next.js ottimizzata per il pronto intervento. Integra l'AI per gestire le richieste dei clienti in tempo reale.",
    tags: ["Next.js", "AI Integration", "Local SEO"],
    link: "#",
    image: "/projects/idraulico.jpg",
    category: "Siti Aziendali & SEO",
    color: "from-blue-500/20",
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
    color: "from-emerald-500/20",
    status: "soon",
  },
  {
    title: "ModernStore E-commerce",
    description:
      "Piattaforma e-commerce full-stack con Stripe. Gestione totale dello stock e pagamenti sicuri.",
    tags: ["Next.js", "Stripe", "Prisma"],
    link: "https://modern-store-nine.vercel.app/",
    image: "/projects/ecommerce-clothing.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-blue-600/20",
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
    color: "from-amber-500/20",
    status: "online",
  },
  {
    title: "Gym Management SaaS",
    description:
      "Software gestionale cloud per centri sportivi. Automazione della segreteria e gestione abbonamenti (SaaS).",
    tags: ["Laravel", "Docker", "SaaS"],
    link: "#",
    image: "/projects/gym.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-purple-500/20",
    status: "demo",
  },
  {
    title: "Real-time Shift Planner",
    description:
      "Sistema cloud per la gestione dei turni aziendali con sincronizzazione istantanea tra i dipendenti.",
    tags: ["React", "Firebase", "Real-time"],
    link: "https://gestioneturni-b1b21.web.app/",
    image: "/projects/turni.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-orange-500/20",
    status: "demo",
  },
  {
    title: "Vivaio Paola Bartoli",
    description:
      "Digital identity per vivaio d'eccellenza. Catalogo botanico dinamico, gestione asset con UploadThing e assistente virtuale Groq per il riconoscimento piante.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Groq AI", "UploadThing"],
    link: "https://vivaiopaolabartoliterracina.it",
    image: "/projects/vivaio.jpg",
    category: "Siti Aziendali & SEO", // Spostato qui se l'obiettivo è la visibilità del brand
    color: "from-green-600/20",
    status: "soon",
  },
];

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<string>("Tutti");

  const filteredProjects = projectsList.filter((p) =>
    filter === "Tutti" ? true : p.category === filter,
  );

 return (
    <section className="py-12 md:py-24 px-6 max-w-7xl mx-auto">
      {/* Header Centrato - Ottimizzato Margini */}
      <div className="flex flex-col items-center text-center mb-12 md:mb-20 space-y-4">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
          Portfolio <span className="text-indigo-500">Progetti</span>
        </h2>
        <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          Soluzioni digitali su misura focalizzate su performance e conversione.
        </p>

        {/* Barra Filtri: Spaziatura superiore aumentata */}
        <div className="w-full flex justify-center pt-8 md:pt-10">
          <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md max-w-full sm:max-w-max px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/40"
                    : "text-gray-500 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid - Gap aumentato su Desktop per pulizia visiva */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative bg-[#0a0a0b] rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col hover:border-indigo-500/30 transition-all duration-500 h-full"
            >
              {/* AREA FOTO */}
              <div className="relative aspect-video w-full bg-white/[0.02] flex items-center justify-center p-6">
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-10 pointer-events-none`} />
              </div>

              {/* CONTENUTO - Padding aumentato per respiro interno */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <div>
                    <span className="text-indigo-500 text-[9px] font-bold uppercase tracking-[0.2em] block mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="shrink-0 p-2.5 bg-white/5 rounded-full text-white/30 hover:text-white transition-all border border-white/5"
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  </motion.a>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 border rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all ${getTagStyle(tag)}`}
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