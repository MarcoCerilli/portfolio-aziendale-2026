import { useState, useRef } from "react";
import {
  ArrowTopRightOnSquareIcon,
  EyeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import { projectsList, categories, type Project } from "@/data/projects";

const getCategoryBadgeClass = (cat: string) => {
  if (cat.includes("E-Commerce") || cat.includes("Shop")) {
    return "bg-emerald-100 text-emerald-800 border-emerald-300";
  }
  if (cat.includes("SaaS") || cat.includes("App") || cat.includes("Software")) {
    return "bg-cyan-100 text-cyan-800 border-cyan-300";
  }
  if (cat.includes("Booking") || cat.includes("Ristoranti") || cat.includes("Food") || cat.includes("B&B")) {
    return "bg-amber-100 text-amber-800 border-amber-300";
  }
  if (cat.includes("Immobiliare") || cat.includes("Luxury") || cat.includes("Hotel")) {
    return "bg-purple-100 text-purple-800 border-purple-300";
  }
  if (cat.includes("Landing") || cat.includes("Vetrina") || cat.includes("Corporate")) {
    return "bg-sky-100 text-sky-800 border-sky-300";
  }
  return "bg-zinc-100 text-zinc-800 border-zinc-300";
};

const getTechBadgeClass = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes("astro")) return "bg-orange-100 text-orange-800 border-orange-300";
  if (t.includes("react")) return "bg-cyan-100 text-cyan-800 border-cyan-300";
  if (t.includes("next")) return "bg-zinc-100 text-zinc-800 border-zinc-300";
  if (t.includes("tailwind") || t.includes("css")) return "bg-teal-100 text-teal-800 border-teal-300";
  if (t.includes("type") || t.includes("ts") || t.includes("docker")) return "bg-blue-100 text-blue-800 border-blue-300";
  if (t.includes("php")) return "bg-indigo-100 text-indigo-800 border-indigo-300";
  if (t.includes("stripe") || t.includes("framer")) return "bg-purple-100 text-purple-800 border-purple-300";
  if (t.includes("supabase") || t.includes("neon") || t.includes("postgres") || t.includes("node")) return "bg-emerald-100 text-emerald-800 border-emerald-300";
  if (t.includes("shopify")) return "bg-lime-100 text-lime-800 border-lime-300";
  if (t.includes("word") || t.includes("wp")) return "bg-sky-100 text-sky-800 border-sky-300";
  return "bg-zinc-100 text-zinc-700 border-zinc-300";
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasLiveLink = project.link && project.link !== "#";

  return (
    <article
      aria-label={project.title}
      className="relative w-[calc(100vw-56px)] sm:w-[380px] md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start bg-white text-zinc-900 rounded-3xl border border-zinc-200 hover:border-zinc-400 flex flex-col hover:-translate-y-1 transition-all duration-300 group select-none shadow-2xl shadow-black/50 overflow-hidden"
    >
      {/* PREVIEW SCREENSHOT */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-100 border-b border-zinc-200">
        <img
          src={project.image}
          alt={`Anteprima del progetto ${project.title}`}
          width="600"
          height="375"
          loading={index < 3 ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/projects/coming-soon.svg";
          }}
        />

        {/* Status Badge in overlay */}
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          {project.status === "online" && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              Live
            </span>
          )}
          {project.status === "demo" && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-zinc-900/90 backdrop-blur-md text-zinc-200 text-[10px] font-bold uppercase tracking-widest shadow-md">
              Demo
            </span>
          )}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-zinc-900/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {hasLiveLink ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Apri ${project.title}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-900 font-bold text-xs uppercase tracking-wider shadow-xl hover:bg-zinc-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
            >
              <EyeIcon className="w-4 h-4 text-zinc-900" aria-hidden="true" />
              Apri Progetto
            </a>
          ) : (
            <span className="inline-flex items-center px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 font-bold text-xs uppercase tracking-wider border border-zinc-700">
              Progetto Riservato
            </span>
          )}
        </div>
      </div>

      {/* BODY */}
      <div className="p-6 flex flex-col grow bg-white text-zinc-900">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border mb-3 self-start ${getCategoryBadgeClass(project.category)}`}>
          {project.category}
        </span>
        <h3 className="text-lg font-bold text-zinc-900 tracking-tight leading-snug mb-2 group-hover:text-black transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-600 text-xs leading-relaxed line-clamp-2 grow font-normal">
          {project.description}
        </p>

        {/* Footer */}
        <div className="pt-4 mt-5 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className={`px-2 py-0.5 rounded-md text-[10px] font-medium uppercase tracking-wider border ${getTechBadgeClass(tag)}`}>
                {tag}
              </span>
            ))}
          </div>
          {hasLiveLink && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-zinc-900 text-white text-xs font-bold hover:bg-black transition-all shrink-0 cursor-pointer shadow-sm"
              aria-label={`Visita ${project.title}`}
            >
              Vedi
              <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 text-white" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsCarousel() {
  const [filter, setFilter] = useState<string>("Tutti");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projectsList.filter(
    (p) => p.status !== "demo" && (filter === "Tutti" ? true : p.category === filter)
  );

  const scroll = (dir: "left" | "right") => {
    const c = scrollRef.current;
    if (!c) return;
    const firstCard = c.querySelector("article") as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : c.clientWidth;
    c.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  const filterCategories = categories.filter((c) => c !== "Sistemi & App Su Misura");

  return (
    <div aria-label="Portfolio Progetti" className="w-full py-2">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-10 space-y-3 px-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-zinc-300">
          Portfolio Lavori
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          I Miei <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400">Progetti</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal">
          Esplora le soluzioni realizzate: siti vetrina, e-commerce, web app e piattaforme ad alte prestazioni.
        </p>

        {/* Filtri Chiari ad alto contrasto — Tutti Visibili Senza Scroll */}
        <div className="w-full pt-3 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 bg-white/95 backdrop-blur-md rounded-2xl border border-zinc-200 shadow-xl max-w-full">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wide transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? "bg-zinc-900 text-white shadow-md font-black"
                    : "text-zinc-700 font-bold hover:text-zinc-950 hover:bg-zinc-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 group/carousel">
        {/* Freccia Sinistra Chiara (nascosta su mobile per evitare overlay touch) */}
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Progetto precedente"
          className="hidden sm:flex absolute -left-2 sm:left-1 lg:-left-5 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-white text-zinc-900 border border-zinc-200 shadow-2xl hover:bg-zinc-900 hover:text-white transition-all duration-200 active:scale-90 focus:outline-none cursor-pointer items-center justify-center"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        {/* Freccia Destra Chiara (nascosta su mobile per evitare overlay touch) */}
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Progetto successivo"
          className="hidden sm:flex absolute -right-2 sm:right-1 lg:-right-5 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-white text-zinc-900 border border-zinc-200 shadow-2xl hover:bg-zinc-900 hover:text-white transition-all duration-200 active:scale-90 focus:outline-none cursor-pointer items-center justify-center"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          tabIndex={0}
          aria-label="Elenco progetti"
          className="flex gap-4 sm:gap-6 overflow-x-auto overflow-y-visible py-4 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing focus:outline-none w-full scrollbar-none"
        >
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-zinc-500 text-sm">Nessun progetto in questa categoria.</p>
        </div>
      )}

      {/* Contatore centrato sotto */}
      <div className="flex justify-center mt-4">
        <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest">
          {filteredProjects.length} {filteredProjects.length === 1 ? "Progetto" : "Progetti"}
        </span>
      </div>
    </div>
  );
}
