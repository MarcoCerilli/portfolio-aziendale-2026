"use client";
import { motion } from "framer-motion";

interface TechSpecProps {
  label: string;
  title: string;
  description: string;
  tag?: string;
  color: "indigo" | "cyan" | "rose"; 
}

// Mappa delle ombre e dei bordi ottimizzata per sfondo chiaro
const colorMap = {
  indigo: "group-hover:border-indigo-200 group-hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)]",
  cyan: "group-hover:border-cyan-200 group-hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)]",
  rose: "group-hover:border-rose-200 group-hover:shadow-[0_20px_40px_-15px_rgba(244,63,94,0.15)]",
};

const barMap = {
  indigo: "bg-indigo-600",
  cyan: "bg-cyan-500",
  rose: "bg-rose-500",
};

export default function TechSpec({ label, title, description, color }: TechSpecProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      // Passato da bg-white/[0.02] a bg-white con shadow solida
      className={`group relative p-8 bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden transition-all duration-500 shadow-xl shadow-slate-100 ${colorMap[color]}`}
    >
      <div className="relative z-10">
        <span className={`text-[10px] font-black uppercase tracking-[0.3em] mb-6 block transition-colors duration-500 ${
          color === 'indigo' ? 'text-indigo-600' : color === 'cyan' ? 'text-cyan-600' : 'text-rose-600'
        }`}>
          {label}
        </span>
        
        <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-4 uppercase leading-none">
          {title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed font-medium">
          {description}
        </p>

        {/* Progress Bar - Ora più visibile */}
        <div className="mt-8 w-full h-[2px] bg-slate-100 relative overflow-hidden rounded-full">
          <motion.div 
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "anticipate" }}
            className={`absolute inset-0 w-full ${barMap[color]}`}
          />
        </div>
      </div>

      {/* Glow d'angolo colorato (molto più tenue per non sporcare il bianco) */}
      <div className={`absolute -bottom-12 -right-12 w-32 h-32 blur-[50px] rounded-full opacity-0 group-hover:opacity-10 transition-all duration-700 ${barMap[color]}`} />
    </motion.div>
  );
}