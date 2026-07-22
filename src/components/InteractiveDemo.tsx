"use client";

import { useState } from "react";
import { DemoProduct } from "@/types/vercel";
import { FiExternalLink, FiMonitor, FiSmartphone, FiPlay } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface InteractiveDemoProps {
  product: DemoProduct;
}

export default function InteractiveDemo({ product }: InteractiveDemoProps) {
  const [isInteractive, setIsInteractive] = useState(false);
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="flex flex-col h-full bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl transition-all hover:border-indigo-500/50">
      {/* Mac-like Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
        </div>
        
        {/* Device Toggles */}
        <div className="flex items-center gap-1 bg-slate-900 rounded-lg p-1 border border-slate-800">
          <button 
            onClick={() => setDevice("desktop")}
            className={`p-1.5 rounded-md transition-colors ${device === 'desktop' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-white'}`}
          >
            <FiMonitor className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setDevice("mobile")}
            className={`p-1.5 rounded-md transition-colors ${device === 'mobile' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-white'}`}
          >
            <FiSmartphone className="w-4 h-4" />
          </button>
        </div>

        <Link 
          href={product.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 text-xs font-medium bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800"
        >
          <span>Apri in nuova tab</span>
          <FiExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Frame Content */}
      <div className={`relative flex-grow bg-slate-950 overflow-hidden flex items-center justify-center transition-all duration-500 p-0 md:p-4 ${device === 'mobile' ? 'bg-slate-900/50' : ''}`}>
        
        <div className={`relative overflow-hidden shadow-2xl transition-all duration-500 ${
          device === 'mobile' 
            ? 'w-[320px] h-[600px] rounded-[2rem] border-[8px] border-slate-950 mx-auto' 
            : 'w-full aspect-video rounded-none md:rounded-xl border-0 md:border border-slate-800'
        }`}>
          
          <AnimatePresence mode="wait">
            {!isInteractive ? (
              <motion.div
                key="static"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 group cursor-pointer"
                onClick={() => setIsInteractive(true)}
              >
                {/* Fallback Image / Screenshot */}
                <img 
                  src={product.image || `https://image.thum.io/get/width/1024/crop/768/noanimate/${product.url}`}
                  alt={`Screenshot di ${product.name}`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center mb-3 shadow-lg shadow-indigo-600/30">
                      <FiPlay className="w-6 h-6 text-white ml-1" />
                    </div>
                    <span className="text-white font-bold tracking-widest uppercase text-sm">Avvia Navigazione Live</span>
                    <span className="text-indigo-200 text-xs mt-1">Interagisci direttamente qui</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="interactive"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full h-full bg-white"
              >
                <iframe 
                  src={product.url} 
                  title={`Live Demo di ${product.name}`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </div>

      {/* Info Bar */}
      <div className="bg-slate-900 p-5 border-t border-slate-800">
        <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
          {product.name}
        </h3>
        
        {product.features && product.features.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {product.features.map(f => (
              <span key={f} className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 bg-indigo-900/40 px-2 py-1 rounded border border-indigo-800/50">
                {f}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
