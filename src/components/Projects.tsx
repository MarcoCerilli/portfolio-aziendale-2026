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
}

const categories = ["Tutti", "Siti Aziendali & SEO", "Sistemi & App Su Misura"];

const getTagStyle = (tag: string) => {
  const t = tag.toLowerCase();
  if (t.includes("next.js")) return "bg-blue-500/10 text-blue-400 border-blue-500/20";
  if (t.includes("ai") || t.includes("google")) return "bg-purple-500/10 text-purple-400 border-purple-500/20";
  if (t.includes("wordpress") || t.includes("seo")) return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
  if (t.includes("stripe") || t.includes("fintech")) return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
  if (t.includes("laravel") || t.includes("php")) return "bg-red-500/10 text-red-400 border-red-500/20";
  if (t.includes("firebase") || t.includes("saas")) return "bg-orange-500/10 text-orange-400 border-orange-500/20";
  return "bg-white/5 text-gray-400 border-white/10";
};

const projectsList: Project[] = [
  {
    title: "Idraulico Iona Bros",
    description: "Web App Next.js ottimizzata per il pronto intervento. Integra l'AI per gestire le richieste dei clienti in tempo reale.",
    tags: ["Next.js", "AI Integration", "Local SEO"],
    link: "https://iona-bros-idraulica.vercel.app/",
    image: "/projects/idraulico.jpg",
    category: "Siti Aziendali & SEO",
    color: "from-blue-500/20",
  },
  {
    title: "Studio Contabile Cittarelli",
    description: "Piattaforma per consulenza fiscale. Design moderno focalizzato sulla conversione e l'analisi smart dei documenti.",
    tags: ["Next.js", "Tailwind", "FinTech"],
    link: "https://studio-contabile.vercel.app/",
    image: "/projects/contabile.jpg",
    category: "Siti Aziendali & SEO",
    color: "from-emerald-500/20",
  },
  {
    title: "ModernStore E-commerce",
    description: "Piattaforma e-commerce full-stack con Stripe. Gestione totale dello stock e pagamenti sicuri.",
    tags: ["Next.js", "Stripe", "Prisma"],
    link: "https://modern-store-nine.vercel.app/",
    image: "/projects/ecommerce-clothing.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-blue-600/20",
  },
  {
    title: "La Casetta nelle Mura",
    description: "Sito hospitality a Terracina. Ottimizzazione SEO per il posizionamento turistico e sistema di contatto diretto.",
    tags: ["WordPress", "SEO", "Hospitality"],
    link: "https://lacasettanellemura.it",
    image: "/projects/casetta.jpg",
    category: "Siti Aziendali & SEO",
    color: "from-amber-500/20",
  },
  {
    title: "Gym Management SaaS",
    description: "Software gestionale cloud per centri sportivi. Automazione della segreteria e gestione abbonamenti (SaaS).",
    tags: ["Laravel", "Docker", "SaaS"],
    link: "#",
    image: "/projects/gym.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-purple-500/20",
  },
  {
    title: "Real-time Shift Planner",
    description: "Sistema cloud per la gestione dei turni aziendali con sincronizzazione istantanea tra i dipendenti.",
    tags: ["React", "Firebase", "Real-time"],
    link: "https://gestioneturni-b1b21.web.app/",
    image: "/projects/turni.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-orange-500/20",
  },
];

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<string>("Tutti");

  const filteredProjects = projectsList.filter((p) =>
    filter === "Tutti" ? true : p.category === filter
  );

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header Centrato - Titolo Ridimensionato */}
      <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
          Portfolio <span className="text-indigo-500">Progetti</span>
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto font-medium">
          Soluzioni digitali su misura focalizzate su performance e conversione.
        </p>

        {/* Barra Filtri: Forzata su una riga con scroll */}
        <div className="w-full flex justify-center pt-6">
          <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md max-w-full sm:max-w-max px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/40"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="group relative bg-[#0a0a0b] rounded-[2rem] border border-white/5 overflow-hidden flex flex-col hover:border-indigo-500/30 transition-all duration-500 h-full"
            >
              {/* AREA FOTO: Object-contain per vedere tutto, zoom quasi impercettibile */}
              <div className="relative aspect-video w-full bg-white/[0.02] flex items-center justify-center p-4">
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>
                {/* Overlay Brand color molto soffuso */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-10 pointer-events-none`} />
              </div>

              {/* CONTENUTO */}
              <div className="p-7 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3 gap-4">
                  <div>
                    <span className="text-indigo-500 text-[8px] font-bold uppercase tracking-[0.2em] block mb-1">
                        {project.category}
                    </span>
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-tight">
                        {project.title}
                    </h3>
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="shrink-0 p-2 bg-white/5 rounded-full text-white/30 hover:text-white transition-all border border-white/5"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </motion.a>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed mb-6 font-medium line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-0.5 border rounded-md text-[8px] font-bold uppercase tracking-wider transition-all ${getTagStyle(tag)}`}
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