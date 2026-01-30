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
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.2)]" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.2)]" },
  { name: "Shopify", icon: SiShopify, color: "text-emerald-400", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.2)]" },
  { name: "WordPress", icon: SiWordpress, color: "text-sky-500", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.2)]" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-500", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)]" },
  { name: "Framer Motion", icon: SiFramer, color: "text-purple-400", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(167,139,250,0.2)]" },
  { name: "GitHub", icon: SiGithub, color: "text-white", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)]" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]" },
  { name: "Vercel", icon: SiVercel, color: "text-white", glow: "group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const TechStack = () => {
  return (
    <section id="tecnologie" className="py-12 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]"
        >
          Tech-Stack Expertise
        </motion.h3>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6"
      >
        {technologies.map((tech, index) => (
          <motion.div key={tech.name} variants={itemVariants} className="group relative">
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className={`relative flex flex-col items-center justify-center p-6 md:p-8 bg-white/[0.02] backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] border border-white/5 transition-all duration-500 cursor-default overflow-hidden ${tech.glow}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-transparent group-hover:from-indigo-500/5 transition-all duration-700" />

              <tech.icon
                className={`w-10 h-10 md:w-12 md:h-12 mb-4 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] z-10 ${tech.color}`}
              />

              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300 z-10 text-center">
                {tech.name}
              </p>

              <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-700" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;