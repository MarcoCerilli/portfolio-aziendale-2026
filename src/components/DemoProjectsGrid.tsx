"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { FiCheck, FiPlay } from "react-icons/fi";
import { DemoProduct } from "@/types/vercel";

function DemoProjectCard({ product }: { product: DemoProduct }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, ease: "circOut" }}
      className="group relative w-[85vw] md:w-[450px] lg:w-[560px] shrink-0 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-colors duration-500 shadow-lg shadow-slate-200/60 dark:shadow-black/20"
    >
      {/* FOTO E OVERLAY PER NUOVA SCHEDA */}
      <div className="relative w-full p-3 bg-slate-50/50 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-800">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 dark:border-slate-700/50 z-0 bg-slate-100 dark:bg-slate-900">
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 cursor-pointer group/preview block"
          >
            <Image
              src={product.image || `https://image.thum.io/get/width/1024/crop/768/noanimate/${product.url}`}
              alt={`Screenshot di ${product.name}`}
              fill
              unoptimized
              className="object-cover object-top transition-transform duration-700 group-hover/preview:scale-105"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col items-center transform translate-y-4 group-hover/preview:translate-y-0 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center mb-3 shadow-lg shadow-indigo-600/30">
                  <FiPlay className="w-6 h-6 text-white ml-1" />
                </div>
                <span className="text-white font-bold tracking-widest uppercase text-sm text-center">Esplora Demo Live</span>
                <span className="text-indigo-200 text-xs mt-1">Apri in una nuova scheda</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* CONTENUTO */}
      <div className="p-4 md:p-5 flex flex-col grow">
        <div className="mb-3">
          <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-tight mb-1">
            {product.name}
          </h3>
          <span className="text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-[0.1em]">
            {product.category}
          </span>
        </div>

        {/* Features List instead of Description */}
        <div className="mb-4 grow">
          {product.features && product.features.length > 0 ? (
            <ul className="space-y-1.5">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                  <FiCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          ) : (
             <p className="text-slate-600 dark:text-slate-400 text-xs font-medium">Demo interattiva del template {product.category}</p>
          )}
        </div>

        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-end gap-2">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              A partire da
            </span>
            <span className="text-lg font-black text-slate-900 dark:text-white">
              {product.price ? `€${product.price.toFixed(2)}` : 'Su preventivo'}
            </span>
          </div>

          <motion.a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Vedi progetto ${product.name}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-slate-900 dark:bg-slate-800 text-white rounded-lg shadow-md hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors shrink-0"
            title="Apri in un'altra finestra"
          >
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

interface DemoProjectsGridProps {
  products: DemoProduct[];
}

export default function DemoProjectsGrid({ products }: DemoProjectsGridProps) {
  const [filter, setFilter] = useState<string>("Tutti");
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Extract unique categories from the products
  const categories = ["Tutti", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter((p) =>
    filter === "Tutti" ? true : p.category === filter
  );

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setCarouselWidth(
          Math.max(0, carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
        );
      }
    };
    
    updateWidth();
    const timeoutId = setTimeout(updateWidth, 100);
    window.addEventListener("resize", updateWidth);
    
    return () => {
      window.removeEventListener("resize", updateWidth);
      clearTimeout(timeoutId);
    };
  }, [filter, filteredProducts.length]);

  if (products.length === 0) return null;

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto transition-colors duration-300">
      <div className="flex flex-col items-center text-center mb-10 md:mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-tight">
          Esplora i <span className="text-indigo-600 dark:text-indigo-400">Progetti Demo</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
          Sfoglia e naviga in tempo reale i nostri template live, divisi per categoria.
        </p>

        <div className="w-full flex justify-center pt-6">
          <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-2 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat
                    ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md ring-1 ring-black/5 dark:ring-white/5"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        ref={carouselRef}
        className="cursor-grab active:cursor-grabbing overflow-hidden w-full py-4"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag={carouselWidth > 0 ? "x" : false}
          dragConstraints={{ right: 0, left: -carouselWidth }}
          animate={{ x: carouselWidth > 0 ? [0, -carouselWidth] : 0 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 180, repeatType: "reverse" }}
          className="flex gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <DemoProjectCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
