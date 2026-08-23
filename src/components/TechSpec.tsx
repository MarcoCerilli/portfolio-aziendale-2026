"use client";
import { motion } from "framer-motion";

interface TechSpecProps {
  label: string;
  title: string;
  description: string;
  tag?: string;
  color?: string; 
}

export default function TechSpec({ label, title, description }: TechSpecProps) {
  return (
    <motion.div 
      whileHover={{ y: -6 }}
      className="group relative p-8 bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 rounded-3xl overflow-hidden transition-all duration-300 shadow-2xl shadow-black/80 flex flex-col justify-between"
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] block text-zinc-400">
            {label}
          </span>
          
          <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
          {title}
        </h3>
        
        <p className="text-zinc-400 text-sm leading-relaxed font-normal flex-grow">
          {description}
        </p>

        {/* Progress Bar in silver */}
        <div className="mt-8 w-full h-[2px] bg-zinc-900 relative overflow-hidden rounded-full">
          <motion.div 
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "anticipate" }}
            className="absolute inset-0 w-full bg-white"
          />
        </div>
      </div>
    </motion.div>
  );
}