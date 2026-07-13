"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

import { projectsList, categories, getTagStyle } from "@/data/projects";

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<string>("Tutti");
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projectsList.filter((p) =>
    filter === "Tutti" ? true : p.category === filter,
  );

  // Ricalcola i limiti del drag ogni volta che cambia il filtro o la finestra
  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setCarouselWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        );
      }
    };
    
    updateWidth();
    // Piccolo ritardo per permettere a framer-motion di renderizzare le nuove card
    const timeoutId = setTimeout(updateWidth, 100);
    window.addEventListener("resize", updateWidth);
    
    return () => {
      window.removeEventListener("resize", updateWidth);
      clearTimeout(timeoutId);
    };
  }, [filter, filteredProjects.length]);

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto transition-colors duration-300">
      {/* Header - Ridotto leggermente il margine inferiore */}
      <div className="flex flex-col items-center text-center mb-10 md:mb-16 space-y-4">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-tight">
          Portfolio <span className="text-indigo-600 dark:text-indigo-400">Progetti</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
          Soluzioni digitali su misura focalizzate su performance e conversione.
        </p>

        {/* Filtri - Ottimizzati per il touch e il cursore personalizzato */}
        <div className="w-full flex justify-center pt-6">
          <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-2 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat
                    ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md ring-1 ring-black/5 dark:ring-white/5"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Carosello Draggable */}
      <motion.div
        ref={carouselRef}
        className="cursor-grab active:cursor-grabbing overflow-hidden w-full py-4"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -carouselWidth }}
          animate={{ x: [0, -carouselWidth] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 180, repeatType: "reverse" }}
          className="flex gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="group relative w-[85vw] md:w-[450px] lg:w-[560px] shrink-0 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-colors duration-500 shadow-lg shadow-slate-200/60 dark:shadow-black/20"
              >
              {/* AREA FOTO - Ottimizzata per screenshot Desktop orizzontali (16:9) */}
              <div className="relative w-full p-3 bg-slate-50/50 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-800">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 dark:border-slate-700/50 z-0 bg-slate-100 dark:bg-slate-900">
                  
                  {/* Immagine Principale in Cover ma allineata in alto */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors duration-500 pointer-events-none" />
                </div>
              </div>

              {/* CONTENUTO - Layout rinnovato e più elegante */}
              <div className="p-4 md:p-5 flex flex-col grow">
                {/* Header Card: Titolo e Categoria su righe separate */}
                <div className="mb-3">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-tight mb-1">
                    {project.title}
                  </h3>
                  <span className="text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-[0.1em]">
                    {project.category}
                  </span>
                </div>

                {/* Descrizione */}
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4 font-medium line-clamp-3">
                  {project.description}
                </p>

                {/* Footer Card: Tags a sinistra, Bottone a destra, separati da un bordino leggero */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-end gap-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest ${getTagStyle(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Bottone Link Esterno - Spostato in basso */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Vedi progetto ${project.title}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-slate-900 dark:bg-slate-800 text-white rounded-lg shadow-md hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors shrink-0"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
