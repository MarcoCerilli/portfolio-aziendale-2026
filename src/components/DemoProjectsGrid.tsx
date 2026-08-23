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
      className="group relative w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start bg-white text-slate-900 rounded-3xl border border-slate-200 hover:border-slate-400 flex flex-col hover:-translate-y-1 transition-all duration-300 select-none shadow-2xl shadow-black/80 overflow-hidden"
    >
      {/* PREVIEW SCREENSHOT */}
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Esplora la demo di ${product.name}`}
        className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden block group/preview border-b border-slate-200"
      >
        <img
          src={product.image || "/projects/coming-soon.svg"}
          alt={`Screenshot di ${product.name}`}
          width="600"
          height="375"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/projects/coming-soon.svg";
          }}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/preview:scale-105"
        />

        {/* Demo badge in alto a destra */}
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest shadow-xl">
            Demo Live
          </span>
        </div>

        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex flex-col items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-1.5 shadow-xl translate-y-4 group-hover/preview:translate-y-0 transition-transform duration-300">
            <FiPlay className="w-4 h-4 text-slate-900 ml-0.5" />
          </div>
          <span className="text-white font-bold text-[11px] uppercase tracking-widest translate-y-4 group-hover/preview:translate-y-0 transition-transform duration-300 delay-75">Esplora Live</span>
        </div>
      </a>

      {/* BODY (Inverted Clean Light) */}
      <div className="p-6 flex flex-col grow bg-white text-slate-900">
        <div className="mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-2">
            {product.category}
          </span>
          <h3 className="text-base font-black text-slate-900 tracking-tight leading-tight">
            {product.name}
          </h3>
        </div>

        {product.features && product.features.length > 0 && (
          <ul className="space-y-1.5 grow">
            {product.features.slice(0, 3).map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-normal">
                <FiCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-900" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 pt-4 border-t border-slate-100 flex justify-end">
          <motion.a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Apri ${product.name}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl shadow-md hover:bg-black transition-all"
          >
            Esplora
            <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 text-white" />
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
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-10 space-y-3 px-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-zinc-300">
          Template Live
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Esplora i <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">Progetti Demo</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Naviga in tempo reale i nostri template live, divisi per categoria.
        </p>

        {/* Filtri */}
        <div className="pt-4">
          <div
            className="inline-flex items-center gap-1.5 p-1.5 bg-zinc-900/90 backdrop-blur-md rounded-2xl border border-zinc-800 shadow-sm overflow-x-auto max-w-full"
            style={{ scrollbarWidth: "none" }}
          >
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                  filter === cat
                    ? "bg-white text-black shadow-md font-black"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
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
          className="absolute -left-2 sm:left-1 lg:-left-5 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-zinc-900/90 text-white border border-zinc-800 shadow-2xl hover:bg-white hover:text-black transition-all duration-200 active:scale-90 focus:outline-none cursor-pointer"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        {/* Freccia Destra */}
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Demo successiva"
          className="absolute -right-2 sm:right-1 lg:-right-5 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-zinc-900/90 text-white border border-zinc-800 shadow-2xl hover:bg-white hover:text-black transition-all duration-200 active:scale-90 focus:outline-none cursor-pointer"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          tabIndex={0}
          aria-label="Elenco demo live"
          className="flex gap-6 overflow-x-auto overflow-y-visible py-4 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing focus:outline-none w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filtered.map((product, i) => (
            <DemoProjectCard key={`${product.id}-${i}`} product={product} />
          ))}
        </div>
      </div>

      {/* Contatore */}
      <div className="flex justify-center mt-4">
        <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest">
          {filtered.length} {filtered.length === 1 ? "Demo" : "Demo"}
        </span>
      </div>
    </div>
  );
}
