"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel, 
  SiPhp, SiLaravel, SiSymfony, SiFirebase, SiSupabase,
  SiWordpress, SiDocker, SiGithub 
} from 'react-icons/si'; 

const technologies = [
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400', glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.3)]' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400', glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]' },
  { name: 'Laravel', icon: SiLaravel, color: 'text-red-500', glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]' },
  { name: 'Symfony', icon: SiSymfony, color: 'text-white', glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]' }, 
  { name: 'Supabase', icon: SiSupabase, color: 'text-emerald-500', glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500', glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]' },
  { name: 'PHP', icon: SiPhp, color: 'text-purple-400', glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(167,139,250,0.3)]' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500', glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]' },
  { name: 'GitHub', icon: SiGithub, color: 'text-white', glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]' },
  { name: 'Vercel', icon: SiVercel, color: 'text-white', glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]' },
  { name: 'WordPress', icon: SiWordpress, color: 'text-sky-500', glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.3)]' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 80, damping: 15 } 
  }
};

const TechStack = () => {
  return (
    <section id="tecnologie" className="py-24 bg-black relative">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[11px] font-black text-gray-500 uppercase tracking-[0.5em]"
        >
          Tech-Stack Expertise
        </motion.h3>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {technologies.map((tech, index) => (
          <motion.div 
            key={tech.name} 
            variants={itemVariants}
            className="group relative"
          >
            <motion.div
              // Animazione continua di ondeggiamento più complessa
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 5 + (index % 4), // Asincronia tra le icone
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2 // Ognuna parte in un momento diverso
              }}
              whileHover={{ 
                scale: 1.1,
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className={`relative flex flex-col items-center justify-center p-10 bg-gray-900/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 transition-all duration-500 cursor-default overflow-hidden ${tech.glow}`}
            >
              {/* Background Glow al passaggio del mouse */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-700" />
              
              <tech.icon className={`w-12 h-12 mb-5 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] z-10 ${tech.color}`} />
              
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300 z-10 text-center">
                {tech.name}
              </p>

              {/* Decorazione orbitale che appare al hover */}
              <div className="absolute inset-0 border border-indigo-500/0 group-hover:border-indigo-500/20 rounded-[2.5rem] transition-all duration-700 scale-90 group-hover:scale-100" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;