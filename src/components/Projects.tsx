import { useState, useRef } from "react";
import {
  ArrowTopRightOnSquareIcon,
  EyeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import { projectsList, categories, getTagStyle, type Project } from "@/data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasLiveLink = project.link && project.link !== "#";

  return (
    <article
      aria-label={project.title}
      className="relative w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start bg-white dark:bg-slate-800/95 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 flex flex-col hover:border-indigo-500/60 dark:hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/15 dark:shadow-2xl dark:shadow-black/40 hover:-translate-y-1 transition-all duration-300 group select-none"
      style={{ boxShadow: "0 8px 32px 0 rgba(80,80,160,0.08), 0 1.5px 6px 0 rgba(0,0,0,0.06)" }}
    >
      {/* PREVIEW */}
      <div className="relative w-full p-3 rounded-t-3xl bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-700/70">
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center p-1.5 border border-slate-200/40 dark:border-slate-700/80">
          <img
            src={project.image}
            alt={`Anteprima del progetto ${project.title}`}
            width="420"
            height="263"
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
            className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/projects/coming-soon.svg";
            }}
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {hasLiveLink ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Apri ${project.title}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-indigo-600/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              >
                <EyeIcon className="w-4 h-4" aria-hidden="true" />
                Apri Progetto
              </a>
            ) : (
              <span className="inline-flex items-center px-4 py-2 rounded-xl bg-slate-800/90 text-slate-300 font-bold text-xs uppercase tracking-wider border border-slate-700">
                Progetto Riservato
              </span>
            )}
          </div>

          {/* Status Badge */}
          <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
            {project.status === "online" && (
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/90 text-white text-[10px] font-extrabold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
                Live
              </span>
            )}
            {project.status === "demo" && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-500/90 text-white text-[10px] font-extrabold uppercase tracking-widest">Demo</span>
            )}
            {project.status === "soon" && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-700/90 text-white text-[10px] font-extrabold uppercase tracking-widest">In Arrivo</span>
            )}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="p-5 flex flex-col grow">
        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60 mb-3 self-start">
          {project.category}
        </span>
        <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight leading-snug mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-300 text-xs leading-relaxed line-clamp-3 grow">
          {project.description}
        </p>

        {/* Footer */}
        <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/70 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${getTagStyle(tag)}`}>
                {tag}
              </span>
            ))}
          </div>
          {hasLiveLink && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 text-xs font-bold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-colors shrink-0"
              aria-label={`Visita ${project.title}`}
            >
              Vedi
              <ArrowTopRightOnSquareIcon className="w-3 h-3" aria-hidden="true" />
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
    const scrollAmount = c.clientWidth;
    c.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  const filterCategories = categories.filter((c) => c !== "Sistemi & App Su Misura");

  return (
    <div aria-label="Portfolio Progetti" className="w-full py-2">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-8 space-y-3 px-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300">
          Portfolio Lavori
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          I Miei <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Progetti</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Esplora le soluzioni realizzate: siti vetrina, e-commerce, web app e piattaforme ad alte prestazioni.
        </p>

        {/* Filtri — una riga compatta */}
        <div className="pt-3">
          <div
            className="inline-flex items-center gap-1.5 p-1.5 bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto max-w-full"
            style={{ scrollbarWidth: "none" }}
          >
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                  filter === cat
                    ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
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
        {/* Freccia Sinistra */}
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Progetto precedente"
          className="absolute -left-2 sm:left-1 lg:-left-5 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 shadow-2xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-200 active:scale-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        {/* Freccia Destra */}
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Progetto successivo"
          className="absolute -right-2 sm:right-1 lg:-right-5 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 shadow-2xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-200 active:scale-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          tabIndex={0}
          aria-label="Elenco progetti"
          className="flex gap-6 overflow-x-auto overflow-y-visible py-6 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing focus:outline-none w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-slate-500 dark:text-slate-400 text-sm">Nessun progetto in questa categoria.</p>
        </div>
      )}

      {/* Contatore centrato sotto */}
      <div className="flex justify-center mt-2">
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          {filteredProjects.length} {filteredProjects.length === 1 ? "Progetto" : "Progetti"}
        </span>
      </div>
    </div>
  );
}
