"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

const projectsList = [
  {
    title: "E-commerce Headless B2B",
    description:
      "Piattaforma Next.js 15 + Sanity CMS ottimizzata per transazioni B2B. Architettura basata su performance e SEO.",
    tags: ["Next.js 15", "Sanity", "Tailwind"],
    link: "#",
    status: "Live Project",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Sito Vetrina Finanziario",
    description:
      "Frontend ad alte prestazioni con integrazione API legacy e dashboard per la gestione dei lead.",
    tags: ["React", "Laravel", "Figma"],
    link: "#",
    status: "Completed",
    color: "from-indigo-600 to-purple-500",
  },
  {
    title: "Custom CRM Web App",
    description:
      "Gestore flussi aziendali complessi sviluppato in Symfony. Ottimizzazione database Doctrine.",
    tags: ["Symfony", "PHP 8.3", "AWS"],
    link: "#",
    status: "In Production",
    color: "from-emerald-500 to-teal-400",
  },
];

const Projects = () => {
  return (
    <div className="mt-16 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // Unico attributo transition che gestisce sia l'ingresso che il loop
            transition={{
              y: {
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
                // Il delay qui assicura che l'animazione inizi dopo il caricamento
                delay: index * 0.1,
              },
              opacity: {
                duration: 0.8,
                delay: index * 0.1,
              },
            }}
            // Effetto fluttuante
            animate={{ y: [0, -10, 0] }}
            className="group relative bg-gray-900/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col h-full hover:border-indigo-500/50 transition-all duration-500"
          >
            {/* Anteprima Progetto (Header colorato) */}
            <div
              className={`h-32 w-full bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 flex items-center justify-center`}
            >
              <BeakerIcon className="w-12 h-12 text-white/50" />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-white/5 text-gray-400 rounded-full border border-white/10">
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-3 tracking-tighter group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold px-2 py-1 bg-white/5 text-white/60 rounded-md border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a
                href={project.link}
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-xs font-black uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Analisi Progetto
                <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
