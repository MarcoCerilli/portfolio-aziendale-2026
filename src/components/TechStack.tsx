"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiWordpress,
  SiDocker,
  SiShopify,
  SiFramer,
  SiVercel,
  SiGithub,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

const technologies = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900 dark:text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Shopify", icon: SiShopify, color: "text-emerald-600" },
  { name: "WordPress", icon: SiWordpress, color: "text-sky-600" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
  { name: "Vercel", icon: SiVercel, color: "text-slate-900 dark:text-white" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "GitHub", icon: SiGithub, color: "text-slate-900 dark:text-white" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
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
    <section id="tecnologie" className="py-10 bg-white dark:bg-transparent relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titolo più piccolo e raffinato */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-4 mb-12 opacity-40 hover:opacity-100 transition-opacity"
        >
          <div className="h-px w-12 bg-slate-300 dark:bg-slate-700" />
          <h3 className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.4em]">
            Tecnologie Core
          </h3>
        </motion.div>

        {/* Griglia più compatta e orizzontale */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center gap-3 transition-all"
            >
              <div className="relative p-4 rounded-2xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md shadow-slate-200/50 dark:shadow-black/20 group-hover:shadow-xl transition-all duration-300">
                <tech.icon
                  className={`w-7 h-7 md:w-8 md:h-8 ${tech.color}`}
                />
              </div>
              <span className="text-[9px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Divisore sfumato sottile per separare dalla Hero senza stacchi netti */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-100 dark:via-slate-800 to-transparent" />
    </section>
  );
};

export default TechStack;
