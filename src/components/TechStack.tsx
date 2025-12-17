"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel, 
  SiPhp, SiLaravel, SiSymfony, SiFirebase, SiSupabase,
  SiWordpress, SiDocker, SiGit, SiGithub 
} from 'react-icons/si'; 

const technologies = [
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Laravel', icon: SiLaravel, color: 'text-red-500' },
  { name: 'Symfony', icon: SiSymfony, color: 'text-white' }, 
  { name: 'Supabase', icon: SiSupabase, color: 'text-emerald-500' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
  { name: 'PHP', icon: SiPhp, color: 'text-purple-400' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
  { name: 'GitHub', icon: SiGithub, color: 'text-white' },
  { name: 'Vercel', icon: SiVercel, color: 'text-white' },
  { name: 'WordPress', icon: SiWordpress, color: 'text-sky-500' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

// Varianti per l'ingresso (fade-in)
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100, damping: 12 } 
  }
};

const TechStack = () => {
  return (
    <section id="tecnologie" className="py-12 bg-black relative">
      <div className="max-w-6xl mx-auto px-6 mb-12">
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
        className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        {technologies.map((tech, index) => (
          <motion.div 
            key={tech.name} 
            variants={itemVariants}
            // --- EFFETTO ONDEGIAMENTO (FLOATING) ---
            animate={{
              y: [0, -12, 0], // Si muove su e giù (come la tua foto profilo)
              rotate: [0, 1, -1, 0] // Piccola rotazione per dare naturalezza
            }}
            transition={{
              duration: 4 + (index % 3), // Durata variabile basata sull'indice per asincronia
              repeat: Infinity,
              ease: "easeInOut"
            }}
            // ---------------------------------------
            whileHover={{ 
              scale: 1.05,
              y: -5, // Al hover si alza un po' di più
              borderColor: "rgba(99, 102, 241, 0.4)",
              backgroundColor: "rgba(17, 24, 39, 0.8)",
              transition: { duration: 0.2 } // Hover più reattivo
            }}
            className="group relative flex flex-col items-center justify-center p-8 bg-gray-900/60 backdrop-blur-2xl rounded-[2rem] border border-white/10 transition-all cursor-default overflow-hidden"
          >
            {/* Bagliore soffuso interno */}
            <div className="absolute inset-0 bg-white/[0.02] rounded-[2rem]" />
            
            <tech.icon className={`w-10 h-10 mb-4 transition-transform duration-500 group-hover:scale-110 z-10 ${tech.color}`} />
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300 z-10 text-center">
              {tech.name}
            </p>

            {/* Micro puntino decorativo */}
            <div className="absolute bottom-4 w-1 h-1 rounded-full bg-indigo-500/0 group-hover:bg-indigo-500 transition-all duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;