"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

import { projectsList, categories, getTagStyle } from "@/data/projects";

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<string>("Tutti");

  const filteredProjects = projectsList.filter((p) =>
    filter === "Tutti" ? true : p.category === filter,
  );

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
              className="group relative bg-white dark:bg-slate-900 rounded-5xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-all duration-500 h-full shadow-xl shadow-slate-200/60 dark:shadow-black/20 hover:shadow-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] dark:hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]"
            >
              {/* AREA FOTO - Migliorato l'hover */}
              <div className="relative aspect-video w-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-4">
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-sm bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradiente all'hover */}
                  <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors duration-500" />
                </div>
              </div>

              {/* CONTENUTO */}
              <div className="p-7 md:p-9 flex flex-col grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <span className="text-indigo-600 dark:text-indigo-400 text-[9px] font-black uppercase tracking-[0.2em] block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
                      {project.title}
                    </h3>
                  </div>

                  {/* Bottone Link Esterno */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Vedi progetto ${project.title}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-slate-900 dark:bg-slate-800 text-white rounded-xl shadow-lg hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </motion.a>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 font-medium line-clamp-3">
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
