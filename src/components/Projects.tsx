"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const projectsList = [
  {
    title: "E-commerce Headless B2B",
    description: "Piattaforma Next.js 15 + Sanity CMS. Architettura orientata alle performance con tempi di caricamento sub-secondo e gestione inventario real-time.",
    tags: ["Next.js 15", "Sanity", "Tailwind"],
    link: "https://tuolink.com",
    image: "/projects/project1.jpg", 
    status: "Live Project",
    isDemo: false,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Sito Vetrina Finanziario",
    description: "Frontend ad alte prestazioni con integrazione API legacy. Design focalizzato sulla conversione e ottimizzazione dei lead aziendali.",
    tags: ["React", "Laravel", "Figma"],
    link: "https://tuolink.com",
    image: "/projects/project2.jpg",
    status: "Completed",
    isDemo: false,
    color: "from-indigo-600 to-purple-500",
  },
  {
    title: "Next.js E-commerce Demo",
    description: "Demo tecnica avanzata: gestione carrello lato client, TypeScript strict-mode e integrazione Stripe per pagamenti sicuri.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    link: "https://tuo-demo.vercel.app",
    image: "/projects/project3.jpg",
    status: "Tech Demo",
    isDemo: true,
    color: "from-orange-500 to-yellow-400",
  },
  {
    title: "Custom CRM Web App",
    description: "Applicazione gestionale complessa in Symfony per flussi di lavoro aziendali. Ottimizzazione database Doctrine e reportistica avanzata.",
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
    <div className="mt-16 max-w-7xl mx-auto px-6">
      {/* Griglia a 2 colonne per massimo impatto visivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projectsList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              y: {
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              },
              opacity: {
                duration: 0.8,
                delay: index * 0.1,
              },
            }}
            animate={{ y: [0, -10, 0] }}
            className="group relative bg-gray-900/40 backdrop-blur-3xl rounded-[3rem] border border-white/5 overflow-hidden flex flex-col hover:border-indigo-500/50 transition-all duration-500"
          >
            {/* Contenitore Immagine con Zoom */}
            <div className="relative h-64 md:h-80 w-full overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10`} />
              
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Badge Stato posizionato sopra l'immagine */}
              <div className="absolute top-6 left-6 z-20">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 bg-black/60 backdrop-blur-md text-white rounded-full border border-white/10">
                  {project.status}
                </span>
              </div>
            </div>

            {/* Contenuto Testuale */}
            <div className="p-10 flex flex-col flex-grow">
              <h3 className="text-3xl font-black text-white mb-4 tracking-tighter group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold px-3 py-1 bg-white/5 text-white/70 rounded-lg border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="inline-flex items-center text-xs font-black uppercase tracking-[0.2em] text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                {project.isDemo ? "Esplora la Demo" : "Analisi Progetto Reale"}
                <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-3" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Call to action finale sotto i 4 progetti */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 text-center"
      >
        <p className="text-gray-500 text-sm font-medium uppercase tracking-[0.3em]">
          Il tuo progetto potrebbe essere il prossimo.
        </p>
      </motion.div>
    </div>
  );
};

export default Projects;