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
  indigo: "group-hover:border-indigo-200 dark:group-hover:border-indigo-500/30 group-hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)] dark:group-hover:shadow-indigo-900/20",
  cyan: "group-hover:border-cyan-200 dark:group-hover:border-cyan-500/30 group-hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)] dark:group-hover:shadow-cyan-900/20",
  rose: "group-hover:border-rose-200 dark:group-hover:border-rose-500/30 group-hover:shadow-[0_20px_40px_-15px_rgba(244,63,94,0.15)] dark:group-hover:shadow-rose-900/20",
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
      className={`group relative p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden transition-all duration-500 shadow-xl shadow-slate-100 dark:shadow-black/20 flex flex-col justify-between ${colorMap[color]}`}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <span className={`text-[10px] font-black uppercase tracking-[0.3em] block transition-colors duration-500 ${
            color === 'indigo' ? 'text-indigo-600 dark:text-indigo-400' : color === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' : 'text-rose-600 dark:text-rose-400'
          }`}>
            {label}
          </span>
          
          {/* Icona dinamica in base al colore */}
          <div className={`p-2 rounded-xl bg-slate-50 dark:bg-slate-800 ${
            color === 'indigo' ? 'text-indigo-500' : color === 'cyan' ? 'text-cyan-500' : 'text-rose-500'
          }`}>
            {color === 'indigo' && (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
            {color === 'cyan' && (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )}
            {color === 'rose' && (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            )}
          </div>
        </div>
        
        
        <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter mb-4 uppercase leading-none">
          {title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium flex-grow">
          {description}
        </p>

        {/* Progress Bar */}
        <div className="mt-8 w-full h-[3px] bg-slate-100 dark:bg-slate-800 relative overflow-hidden rounded-full">
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