"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const projectsList = [
  {
    title: "E-commerce Headless B2B",
    description: "Piattaforma Next.js 15 + Sanity CMS. Architettura orientata alle performance con tempi sub-secondo.",
    tags: ["Next.js 15", "Sanity", "Tailwind"],
    link: "https://tuolink.com",
    image: "/projects/project1.jpg", 
    status: "Live Project",
    isDemo: false,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Sito Vetrina Finanziario",
    description: "Frontend ad alte prestazioni con integrazione API legacy. Design focalizzato sulla conversione lead.",
    tags: ["React", "Laravel", "Figma"],
    link: "https://tuolink.com",
    image: "/projects/project2.jpg",
    status: "Completed",
    isDemo: false,
    color: "from-indigo-600 to-purple-500",
  },
  {
    title: "Next.js E-commerce Demo",
    description: "Demo tecnica: gestione carrello lato client, TypeScript strict-mode e integrazione Stripe.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    link: "https://tuo-demo.vercel.app",
    image: "/projects/project3.jpg",
    status: "Tech Demo",
    isDemo: true,
    color: "from-orange-500 to-yellow-400",
  },
  {
    title: "Custom CRM Web App",
    description: "Applicazione gestionale complessa per flussi di lavoro aziendali. Ottimizzazione database e reportistica.",
    tags: ["Symfony", "PHP 8.3", "AWS"],
    link: "https://tuolink.com",
    image: "/projects/project4.jpg",
    status: "In Production",
    isDemo: false,
    color: "from-emerald-500 to-teal-400",
  },
];

const Projects = () => {
  return (
    // RIDOTTO: mt-16 -> mt-8 e px-6 -> px-4 su mobile
    <div className="mt-8 md:mt-16 max-w-7xl mx-auto px-4 md:px-6">
      
      {/* GRID: ridotto il gap da 12 a 6 su mobile per compattare */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {projectsList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-gray-900/40 backdrop-blur-3xl rounded-[2rem] md:rounded-[3rem] border border-white/5 overflow-hidden flex flex-col hover:border-indigo-500/50 transition-all duration-500"
          >
            {/* Immagine: Altezza ridotta su mobile h-48 vs md:h-80 */}
            <div className="relative h-48 md:h-80 w-full overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10`} />
              
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 md:px-4 md:py-2 bg-black/60 backdrop-blur-md text-white rounded-full border border-white/10">
                  {project.status}
                </span>
              </div>
            </div>

            {/* Contenuto: p-10 -> p-6 su mobile */}
            <div className="p-6 md:p-10 flex flex-col flex-grow">
              <h3 className="text-xl md:text-3xl font-black text-white mb-3 tracking-tighter group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8 flex-grow">
                {project.description}
              </p>

              {/* Tags più compatti */}
              <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] md:text-[10px] font-bold px-2 py-1 bg-white/5 text-white/70 rounded-md border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                {project.isDemo ? "Esplora la Demo" : "Dettagli Progetto"}
                <ArrowTopRightOnSquareIcon className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* CTA Finale ridotto mt-20 -> mt-12 */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-12 md:mt-20 text-center pb-8"
      >
        <p className="text-gray-500 text-[10px] md:text-sm font-medium uppercase tracking-[0.3em]">
          Il tuo progetto potrebbe essere il prossimo.
        </p>
      </motion.div>
    </div>
  );
};

export default Projects;