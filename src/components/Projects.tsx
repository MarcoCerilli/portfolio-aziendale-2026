"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const projectsList = [
  {
    title: "ModernStore E-commerce",
    description: "Shop high-end con Next.js, Zod e Neon DB.",
    tags: ["Next.js", "Zod", "Neon", "Shadcn"],
    link: "https://modern-store-nine.vercel.app/",
    image: "/projects/ecommerce-clothing.jpg",
    isNextJs: true,
    color: "from-blue-500/20",
  },
  {
    title: "Financial Dashboard",
    description: "Analisi dati real-time con Next.js e Tailwind.",
    tags: ["Next.js", "App", "Tailwind"],
    link: "https://nextjs-dashboard-zeta-sooty-93.vercel.app/",
    image: "/projects/dashboard.jpg",
    isNextJs: true,
    color: "from-emerald-500/20",
  },
  {
    title: "La Casetta nelle Mura",
    description: "Booking engine per casa vacanze a Terracina.",
    tags: ["WordPress", "SEO", "Hospitality"],
    link: "https://lacasettanellemura.it",
    image: "/projects/casetta.jpg",
    isNextJs: false,
    color: "from-amber-500/20",
  },
  {
    title: "Studio Legale Anna Fusco",
    description: "Sito istituzionale e gestione lead consulenza.",
    tags: ["WordPress", "Legal", "UI/UX"],
    link: "https://avvocatoannafusco.it",
    image: "/projects/legal.jpg",
    isNextJs: false,
    color: "from-slate-500/20",
  },
  {
    title: "Idraulico Iona Bros",
    description: "Landing page ottimizzata per pronto intervento.",
    tags: ["WordPress", "Ads", "Marketing"],
    link: "https://ionabros-demo.vercel.app",
    image: "/projects/idraulico.jpg",
    isNextJs: false,
    color: "from-red-500/20",
  },
];

const Projects = () => {
  return (
    <div className="mt-8 md:mt-16 max-w-7xl mx-auto px-4 md:px-6 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {projectsList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[#0d0d0f] rounded-[2rem] border border-white/10 overflow-hidden flex flex-col hover:border-indigo-500/40 transition-all duration-500 shadow-2xl"
          >
            {/* AREA FOTO: Centrata e senza zoom eccessivo */}
            <div className="relative h-64 md:h-80 w-full overflow-hidden bg-black/40">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-b ${project.color} to-transparent opacity-30`} />
              
              {project.isNextJs && (
                <div className="absolute top-5 right-5 z-20">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-indigo-500/20 border border-indigo-500/40 backdrop-blur-md rounded-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="text-[9px] font-bold text-indigo-300 uppercase tracking-tighter">Next.js</span>
                  </span>
                </div>
              )}
            </div>

            {/* AREA TESTO: Iconcine e descrizione pulita */}
            <div className="p-6 md:p-8 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
                  {project.title}
                </h3>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ rotate: 45 }}
                  className="p-2 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all"
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                </motion.a>
              </div>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-medium">
                {project.description}
              </p>

              {/* Iconcine/Tags (Il tocco che ti piaceva) */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <div 
                    key={tag} 
                    className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/5 rounded-md group-hover:border-indigo-500/20 transition-colors"
                  >
                    <div className="w-1 h-1 rounded-full bg-gray-500 group-hover:bg-indigo-400" />
                    <span className="text-[10px] font-bold text-gray-500 group-hover:text-gray-300 uppercase tracking-wider">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;