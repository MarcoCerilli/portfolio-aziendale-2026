"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiSupabase,
  SiWordpress,
  SiDocker,
  SiGithub,
  SiShopify,
  SiFramer,
} from "react-icons/si";

const technologies = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Shopify", icon: SiShopify, color: "text-emerald-600" },
  { name: "WordPress", icon: SiWordpress, color: "text-sky-600" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "Framer", icon: SiFramer, color: "text-purple-600" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const TechStack = () => {
  return (
    <section id="tecnologie" className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Titolo più piccolo e raffinato */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-4 mb-12 opacity-40 hover:opacity-100 transition-opacity"
        >
          <div className="h-px w-12 bg-slate-300" />
          <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">
            Tecnologie Core
          </h3>
        </motion.div>

        {/* Griglia più compatta e orizzontale */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8"
        >
          {technologies.map((tech) => (
            <motion.div 
              key={tech.name} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center gap-3 transition-all"
            >
              <div className="relative p-4 rounded-2xl border border-slate-100 bg-slate-50/50 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-indigo-100/50 transition-all duration-300">
                <tech.icon className={`w-7 h-7 md:w-8 md:h-8 ${tech.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
              </div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-900 transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Divisore sfumato sottile per separare dalla Hero senza stacchi netti */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
    </section>
  );
};

export default TechStack;