"use client";
import { motion } from "framer-motion";

interface TechSpecProps {
  label: string;
  title: string;
  description: string;
  tag?: string;
  color: "indigo" | "cyan" | "rose"; // Definiamo i colori
}

const colorMap = {
  indigo: "group-hover:border-indigo-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]",
  cyan: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]",
  rose: "group-hover:border-rose-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.3)]",
};

const barMap = {
  indigo: "bg-indigo-500",
  cyan: "bg-cyan-500",
  rose: "bg-rose-500",
};

export default function TechSpec({ label, title, description, color }: TechSpecProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`group relative p-8 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 ${colorMap[color]}`}
    >
      <div className="relative z-10">
        <span className={`text-[10px] font-black uppercase tracking-[0.3em] mb-6 block transition-colors duration-500 ${
          color === 'indigo' ? 'text-indigo-400' : color === 'cyan' ? 'text-cyan-400' : 'text-rose-400'
        }`}>
          {label}
        </span>
        
        <h3 className="text-3xl font-black text-white tracking-tighter mb-3 uppercase leading-none">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed font-medium">
          {description}
        </p>

        <div className="mt-8 w-full h-[1px] bg-white/5 relative overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "anticipate" }}
            className={`absolute inset-0 w-full ${barMap[color]}`}
          />
        </div>
      </div>

      {/* Glow d'angolo colorato */}
      <div className={`absolute -bottom-12 -right-12 w-24 h-24 blur-[40px] rounded-full opacity-0 group-hover:opacity-20 transition-all duration-700 ${barMap[color]}`} />
    </motion.div>
  );
}