import { useState, useRef } from "react";
import {
  ArrowTopRightOnSquareIcon,
  EyeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import { projectsList, categories, getTagStyle, type Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  const hasLiveLink = project.link && project.link !== "#";

  return (
    <article className="relative hover:z-50 w-[86vw] max-w-[340px] sm:w-[380px] md:w-[440px] shrink-0 snap-center sm:snap-start bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-visible flex flex-col hover:border-indigo-500/60 dark:hover:border-indigo-500/60 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group select-none">
      {/* AREA FOTO / PREVIEW */}
      <div className="relative w-full p-3.5 rounded-t-3xl bg-slate-50 dark:bg-slate-950/60 border-b border-slate-100 dark:border-slate-800">
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-inner border border-slate-200/60 dark:border-slate-800 bg-slate-950 flex items-center justify-center p-2">
          <img
            src={project.image}
            alt={`Anteprima del progetto ${project.title}`}
            width="440"
            height="275"
            loading="lazy"
            decoding="async"
            draggable={false}
            className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/projects/coming-soon.svg";
            }}
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
            {hasLiveLink ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Apri ${project.title} in una nuova scheda`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-indigo-600/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              >
                <EyeIcon className="w-4 h-4" aria-hidden="true" />
                <span>Apri Progetto</span>
              </a>
            ) : (
              <span className="inline-flex items-center px-4 py-2 rounded-xl bg-slate-800/90 text-slate-300 font-bold text-xs uppercase tracking-wider border border-slate-700">
                Progetto Riservato
              </span>
            )}
          </div>

          {/* Badge Stato */}
          <div className="absolute top-3 right-3 z-10 pointer-events-none">
            {project.status === "online" && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
                Live
              </span>
            )}
            {project.status === "demo" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-500/90 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                Demo
              </span>
            )}
            {project.status === "soon" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-700/90 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                In Arrivo
              </span>
            )}
          </div>
        </div>
      </div>

      {/* CONTENUTO CARD */}
      <div className="p-5 md:p-6 flex flex-col grow justify-between">
        <div>
          {/* Categoria */}
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/50 mb-3">
            {project.category}
          </span>

          {/* Titolo */}
          <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white tracking-tight leading-snug mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>

          {/* Descrizione */}
          <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-normal line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* FOOTER CARD: TAG & CTA */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Tags Tecnologici */}
          <div className="flex flex-wrap gap-1.5" aria-label="Tecnologie usate">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${getTagStyle(tag)}`}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-1 rounded-md text-[10px] font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Link Esterno se disponibile */}
          {hasLiveLink && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs font-bold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors shrink-0 self-end sm:self-auto"
              aria-label={`Visita ${project.title}`}
            >
              <span>Vedi</span>
              <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsCarousel() {
  const [filter, setFilter] = useState<string>("Tutti");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projectsList.filter((p) =>
    p.status !== "demo" && (filter === "Tutti" ? true : p.category === filter)
  );

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const card = container.querySelector("article");
    const step = card ? card.getBoundingClientRect().width + 24 : 400;
    
    container.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <section aria-label="Portfolio Progetti" className="w-full py-4 transition-colors duration-300">
      {/* Header Sezione */}
      <div className="flex flex-col items-center text-center mb-8 md:mb-12 space-y-3">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300">
          Portfolio Lavori
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          I Miei <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Progetti</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base max-w-2xl mx-auto font-normal leading-relaxed">
          Esplora le soluzioni realizzate: siti vetrina, e-commerce, web app gestionali e piattaforme ad alte prestazioni.
        </p>

        {/* Barra di Controllo Unificata (Filtri + Switch Frecce + Contatore) */}
        <div className="w-full max-w-5xl mx-auto pt-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-2.5 bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Filtri Categoria: Tutti visibili e ben spaziati */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 w-full md:w-auto">
              {categories.filter(cat => cat !== "Sistemi & App Su Misura").map((cat) => {
                const isSelected = filter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleFilterChange(cat);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 select-none ${
                      isSelected
                        ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Switch di Scorrimento + Contatore accorpati */}
            <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-3 shrink-0 pt-2.5 md:pt-0 border-t md:border-t-0 border-slate-200/60 dark:border-slate-800/60 px-2">
              <span className="text-xs font-extrabold text-slate-600 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">
                {filteredProjects.length} {filteredProjects.length === 1 ? "Progetto" : "Progetti"}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("left");
                  }}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white hover:border-indigo-600 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all active:scale-95 cursor-pointer"
                  aria-label="Scorri al progetto precedente"
                >
                  <ChevronLeftIcon className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("right");
                  }}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white hover:border-indigo-600 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all active:scale-95 cursor-pointer"
                  aria-label="Scorri al progetto successivo"
                >
                  <ChevronRightIcon className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenitore Carosello Scrollabile Orizzontalmente */}
      <div
        ref={scrollContainerRef}
        tabIndex={0}
        aria-label="Elenco carosello progetti"
        className="flex gap-6 overflow-x-auto py-4 px-4 sm:px-6 md:px-8 snap-x snap-mandatory scroll-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
            Nessun progetto trovato in questa categoria.
          </p>
        </div>
      )}
    </section>
  );
}
