import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { FiCheck, FiPlay } from "react-icons/fi";
import type { DemoProduct } from "@/types/vercel";

function DemoProjectCard({ product }: { product: DemoProduct }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start bg-white dark:bg-slate-800/95 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 flex flex-col hover:border-indigo-500/50 dark:hover:border-indigo-400 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 dark:shadow-2xl dark:shadow-black/40 transition-all duration-300 select-none"
      style={{ boxShadow: "0 8px 32px 0 rgba(80,80,160,0.08), 0 1.5px 6px 0 rgba(0,0,0,0.06)" }}
    >
      {/* PREVIEW */}
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full aspect-[16/10] bg-slate-950 rounded-t-3xl overflow-hidden block group/preview"
      >
        <img
          src={product.image || "/projects/coming-soon.svg"}
          alt={`Screenshot di ${product.name}`}
          width="420"
          height="263"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/projects/coming-soon.svg";
          }}
          className="absolute inset-0 w-full h-full object-contain object-center p-2 transition-transform duration-700 group-hover/preview:scale-105"
        />
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex flex-col items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center mb-2 shadow-xl translate-y-4 group-hover/preview:translate-y-0 transition-transform duration-300">
            <FiPlay className="w-5 h-5 text-white ml-0.5" />
          </div>
          <span className="text-white font-bold text-xs uppercase tracking-widest translate-y-4 group-hover/preview:translate-y-0 transition-transform duration-300 delay-75">Esplora Live</span>
        </div>
      </a>

      {/* BODY */}
      <div className="p-5 flex flex-col grow">
        <div className="mb-3">
          <h3 className="text-base font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-0.5">
            {product.name}
          </h3>
          <span className="text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-[0.1em]">
            {product.category}
          </span>
        </div>

        {product.features && product.features.length > 0 && (
          <ul className="space-y-1.5 grow">
            {product.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-300">
                <FiCheck className="mt-0.5 h-3 w-3 shrink-0 text-indigo-500" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/70 flex justify-end">
          <motion.a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Apri ${product.name}`}
            whileHover={{ scale: 1.12, rotate: 6 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-colors"
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const filterCategories = ["Tutti", ...Array.from(new Set(products.map((p) => p.category)))];

  const filtered = products.filter((p) => filter === "Tutti" ? true : p.category === filter);

  const scroll = (dir: "left" | "right") => {
    const c = scrollRef.current;
    if (!c) return;
    const scrollAmount = c.clientWidth;
    c.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  if (products.length === 0) return null;

  return (
    <div aria-label="Progetti Demo Live" className="w-full py-2">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-8 space-y-3 px-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300">
          Template Live
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Esplora i <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Progetti Demo</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Naviga in tempo reale i nostri template live, divisi per categoria.
        </p>

        {/* Filtri */}
        <div className="pt-3">
          <div
            className="inline-flex items-center gap-1.5 p-1.5 bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto max-w-full"
            style={{ scrollbarWidth: "none" }}
          >
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                  filter === cat
                    ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel wrapper */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 group/carousel">
        {/* Freccia Sinistra */}
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Demo precedente"
          className="absolute -left-2 sm:left-1 lg:-left-5 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 shadow-2xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-200 active:scale-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        {/* Freccia Destra */}
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Demo successiva"
          className="absolute -right-2 sm:right-1 lg:-right-5 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 shadow-2xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-200 active:scale-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          tabIndex={0}
          aria-label="Elenco demo live"
          className="flex gap-6 overflow-x-auto overflow-y-visible py-6 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing focus:outline-none w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filtered.map((product, i) => (
            <DemoProjectCard key={`${product.id}-${i}`} product={product} />
          ))}
        </div>
      </div>

      {/* Contatore */}
      <div className="flex justify-center mt-2">
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          {filtered.length} {filtered.length === 1 ? "Demo" : "Demo Disponibili"}
        </span>
      </div>
    </div>
  );
}
