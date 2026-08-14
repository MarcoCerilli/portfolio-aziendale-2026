"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  SiAstro,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNeon,
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
  { name: "Astro", icon: SiAstro, color: "text-orange-500", bgGlow: "group-hover:shadow-orange-500/20" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]", bgGlow: "group-hover:shadow-cyan-500/20" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900 dark:text-white", bgGlow: "group-hover:shadow-slate-500/20" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600 dark:text-blue-400", bgGlow: "group-hover:shadow-blue-500/20" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500", bgGlow: "group-hover:shadow-cyan-500/20" },
  { name: "Neon DB", icon: SiNeon, color: "text-[#00E599]", bgGlow: "group-hover:shadow-emerald-500/20" },
  { name: "Vercel", icon: SiVercel, color: "text-slate-900 dark:text-white", bgGlow: "group-hover:shadow-slate-500/20" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-500", bgGlow: "group-hover:shadow-emerald-500/20" },
  { name: "Shopify", icon: SiShopify, color: "text-emerald-600 dark:text-emerald-400", bgGlow: "group-hover:shadow-emerald-500/20" },
  { name: "WordPress", icon: SiWordpress, color: "text-sky-600 dark:text-sky-400", bgGlow: "group-hover:shadow-sky-500/20" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500", bgGlow: "group-hover:shadow-blue-500/20" },
  { name: "GitHub", icon: SiGithub, color: "text-slate-900 dark:text-white", bgGlow: "group-hover:shadow-slate-500/20" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-600 dark:text-indigo-400", bgGlow: "group-hover:shadow-indigo-500/20" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600 dark:text-blue-400", bgGlow: "group-hover:shadow-blue-500/20" },
  { name: "Framer Motion", icon: SiFramer, color: "text-purple-600 dark:text-purple-400", bgGlow: "group-hover:shadow-purple-500/20" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 12, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

const TechStack = () => {
  return (
    <section id="tecnologie" aria-label="Stack Tecnologico e Strumenti" className="py-12 bg-white dark:bg-transparent relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titolo Sezione Accessibile */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300 mb-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" aria-hidden="true" />
              Stack Tecnologico
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Strumenti & Tecnologie <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Core</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
            Architetture moderne, serverless e database ad alte performance
          </p>
        </div>

        {/* Griglia Card Tecnologie con Icona + Nome Ben Visibili */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3.5 md:gap-4"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              tabIndex={0}
              className={`group flex items-center gap-3.5 p-3.5 md:p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 backdrop-blur-sm shadow-sm hover:shadow-lg ${tech.bgGlow} hover:border-indigo-400/60 dark:hover:border-indigo-500/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-300 cursor-default`}
            >
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 group-hover:scale-110 transition-transform duration-300 shrink-0" aria-hidden="true">
                <tech.icon className={`w-6 h-6 ${tech.color}`} />
              </div>
              <div className="min-w-0">
                <span className="text-sm font-bold text-slate-900 dark:text-slate-100 tracking-tight block truncate">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Divisore sfumato sottile per separare dalla Hero senza stacchi netti */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-100 dark:via-slate-800 to-transparent" aria-hidden="true" />
    </section>
  );
};

export default TechStack;
