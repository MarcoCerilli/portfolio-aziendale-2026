"use client";
import React, { useState, useRef, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { FiCheck, FiPlay } from "react-icons/fi";
import type { DemoProduct } from "@/types/vercel";

function DemoProjectCard({ product }: { product: DemoProduct }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, ease: "circOut" }}
      className="group relative hover:z-50 w-[90vw] md:w-[480px] lg:w-[540px] shrink-0 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden flex flex-col hover:border-indigo-500/50 transition-all duration-500 shadow-2xl shadow-slate-900/10 dark:shadow-black/50 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.25)]"
    >
      {/* FOTO E OVERLAY PER NUOVA SCHEDA (Full Width Suspended) */}
      <div className="relative w-full aspect-[16/10] bg-slate-950 border-b border-slate-100 dark:border-slate-800 group overflow-hidden">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 cursor-pointer group/preview block"
        >
          <img
            src={product.image || '/projects/coming-soon.svg'}
            alt={`Screenshot di ${product.name}`}
            className="absolute inset-0 w-full h-full object-contain object-center p-2 transition-transform duration-700 group-hover/preview:scale-105"
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col items-center transform translate-y-4 group-hover/preview:translate-y-0 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center mb-3 shadow-xl shadow-indigo-600/40">
                <FiPlay className="w-6 h-6 text-white ml-0.5" />
              </div>
              <span className="text-white font-bold tracking-widest uppercase text-xs text-center">Esplora Demo Live</span>
              <span className="text-indigo-200 text-[11px] mt-1">Apri in una nuova scheda</span>
            </div>
          </div>
        </a>
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
          {/* <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Prezzo
            </span>
            <span className="text-lg font-black text-slate-900 dark:text-white">
              Da definire
            </span>
          </div> */}

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Extract unique categories from the products
  const categories = ["Tutti", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = products.filter((p) =>
    filter === "Tutti" ? true : p.category === filter,
  );

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const card = container.querySelector(".group");
    const step = card ? card.getBoundingClientRect().width + 24 : 450;

    container.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  if (products.length === 0) return null;

  return (
    <section aria-label="Progetti Demo Live" className="py-12 md:py-16 px-4 md:px-6 max-w-7xl mx-auto transition-colors duration-300">
      <div className="flex flex-col items-center text-center mb-8 md:mb-12 space-y-3">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300">
          Template Live
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Esplora i <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Progetti Demo</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base max-w-2xl mx-auto font-normal leading-relaxed">
          Sfoglia e naviga in tempo reale i nostri template live, divisi per categoria.
        </p>

        {/* Filter bar */}
        <div className="w-full flex justify-center pt-3">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800">
            {categories.map((cat) => {
              const isSelected = filter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleFilterChange(cat);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    isSelected
                      ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-md shadow-slate-200/50 dark:shadow-black/40 ring-1 ring-black/5 dark:ring-white/10"
                      : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Controller Carosello Demo */}
      <div className="flex items-center justify-between px-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-widest">
            {filteredProducts.length} {filteredProducts.length === 1 ? "Demo" : "Demo Disponibili"}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">• Scorri o clicca per navigare</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("left");
            }}
            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white hover:border-indigo-600 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all active:scale-95 cursor-pointer"
            aria-label="Demo precedente"
          >
            ←
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("right");
            }}
            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white hover:border-indigo-600 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all active:scale-95 cursor-pointer"
            aria-label="Demo successiva"
          >
            →
          </button>
        </div>
      </div>

      {/* Contenitore Carosello Demo */}
      <div
        ref={scrollContainerRef}
        tabIndex={0}
        aria-label="Elenco demo live"
        className="flex gap-6 overflow-x-auto pb-24 pt-20 px-8 -mx-8 md:px-16 md:-mx-16 lg:px-24 lg:-mx-24 xl:px-32 xl:-mx-32 snap-x snap-mandatory scroll-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {filteredProducts.map((product) => (
          <DemoProjectCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
