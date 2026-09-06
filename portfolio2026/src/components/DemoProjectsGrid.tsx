import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { FiPlay } from "react-icons/fi";
import type { DemoProduct } from "@/types/vercel";

const getCategoryBadgeClass = (cat: string) => {
  if (cat.includes("E-Commerce") || cat.includes("Shop")) {
    return "bg-emerald-100 text-emerald-800 border-emerald-300";
  }
  if (cat.includes("SaaS") || cat.includes("App") || cat.includes("Software")) {
    return "bg-cyan-100 text-cyan-800 border-cyan-300";
  }
  if (cat.includes("Booking") || cat.includes("Ristoranti") || cat.includes("Food") || cat.includes("B&B")) {
    return "bg-amber-100 text-amber-800 border-amber-300";
  }
  if (cat.includes("Immobiliare") || cat.includes("Luxury") || cat.includes("Hotel")) {
    return "bg-purple-100 text-purple-800 border-purple-300";
  }
  if (cat.includes("Landing") || cat.includes("Vetrina")) {
    return "bg-sky-100 text-sky-800 border-sky-300";
  }
  return "bg-zinc-100 text-zinc-800 border-zinc-300";
};

const getTechBadgeClass = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes("astro")) return "bg-orange-100 text-orange-800 border-orange-300";
  if (t.includes("react")) return "bg-cyan-100 text-cyan-800 border-cyan-300";
  if (t.includes("next")) return "bg-zinc-100 text-zinc-800 border-zinc-300";
  if (t.includes("tailwind") || t.includes("css")) return "bg-teal-100 text-teal-800 border-teal-300";
  if (t.includes("type") || t.includes("ts") || t.includes("docker")) return "bg-blue-100 text-blue-800 border-blue-300";
  if (t.includes("php")) return "bg-indigo-100 text-indigo-800 border-indigo-300";
  if (t.includes("stripe") || t.includes("framer")) return "bg-purple-100 text-purple-800 border-purple-300";
  if (t.includes("supabase") || t.includes("neon") || t.includes("postgres") || t.includes("node")) return "bg-emerald-100 text-emerald-800 border-emerald-300";
  if (t.includes("shopify")) return "bg-lime-100 text-lime-800 border-lime-300";
  if (t.includes("word") || t.includes("wp")) return "bg-sky-100 text-sky-800 border-sky-300";
  return "bg-zinc-100 text-zinc-700 border-zinc-300";
};

function DemoProjectCard({ product }: { product: DemoProduct }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative w-[calc(100vw-56px)] sm:w-[380px] md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 snap-start bg-white text-zinc-900 rounded-3xl border border-zinc-200 hover:border-zinc-400 flex flex-col hover:-translate-y-1 transition-all duration-300 select-none shadow-xl shadow-zinc-200/80 overflow-hidden"
    >
      {/* PREVIEW SCREENSHOT */}
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Esplora la demo di ${product.name}`}
        className="relative w-full aspect-[16/10] bg-zinc-950 overflow-hidden block group/preview border-b border-zinc-200 flex items-center justify-center"
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
          className="w-full h-full object-contain object-center transition-transform duration-700 group-hover/preview:scale-105"
        />

        {/* Demo badge in basso a sinistra */}
        <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Demo Live
          </span>
        </div>

        <div className="absolute inset-0 bg-zinc-900/60 backdrop-blur-[2px] flex flex-col items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-1.5 shadow-xl translate-y-4 group-hover/preview:translate-y-0 transition-transform duration-300">
            <FiPlay className="w-4 h-4 text-zinc-900 ml-0.5" />
          </div>
          <span className="text-white font-bold text-[11px] uppercase tracking-widest translate-y-4 group-hover/preview:translate-y-0 transition-transform duration-300 delay-75">Esplora Live</span>
        </div>
      </a>

      {/* BODY */}
      <div className="p-6 flex flex-col grow bg-white text-zinc-900">
        <div className="mb-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border mb-2 ${getCategoryBadgeClass(product.category)}`}>
            {product.category}
          </span>
          <h3 className="text-base font-bold text-zinc-900 tracking-tight leading-tight">
            {product.name}
          </h3>
        </div>

        {product.features && product.features.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
            {product.features.slice(0, 3).map((f, i) => (
              <span key={i} className={`px-2 py-0.5 rounded-md text-[10px] font-medium uppercase tracking-wider border ${getTechBadgeClass(f)}`}>
                {f}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 pt-4 border-t border-zinc-100 flex justify-end">
          <motion.a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Apri ${product.name}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-900 text-white font-bold text-xs rounded-xl shadow-md hover:bg-black transition-all cursor-pointer"
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
    const firstCard = c.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : c.clientWidth;
    c.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  if (products.length === 0) return null;

  return (
    <div aria-label="Progetti Demo Live" className="w-full py-2">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-10 space-y-3 px-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-300 text-xs font-bold uppercase tracking-widest text-zinc-800 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Infrastrutture &amp; Sistemi Pronti
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
          Showcase Architetturale &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-600">Demo Live</span>
        </h2>
        <p className="text-zinc-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Esplora i motori completi già collaudati per ristorazione, hospitality, real estate e SaaS: pronti per essere personalizzati sul tuo brand senza ripartire da zero.
        </p>

        {/* Filtri — Tutti Visibili Senza Scroll */}
        <div className="w-full pt-3 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 bg-zinc-200/80 backdrop-blur-md rounded-2xl border border-zinc-300 shadow-sm max-w-full">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wide transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? "bg-zinc-900 text-white shadow-md font-black"
                    : "text-zinc-700 hover:text-zinc-900 hover:bg-white font-bold"
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
          className="hidden sm:flex absolute -left-2 sm:left-1 lg:-left-5 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-white text-zinc-900 border border-zinc-300 shadow-xl hover:bg-zinc-900 hover:text-white transition-all duration-200 active:scale-90 focus:outline-none cursor-pointer items-center justify-center"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        {/* Freccia Destra */}
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Demo successiva"
          className="hidden sm:flex absolute -right-2 sm:right-1 lg:-right-5 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-white text-zinc-900 border border-zinc-300 shadow-xl hover:bg-zinc-900 hover:text-white transition-all duration-200 active:scale-90 focus:outline-none cursor-pointer items-center justify-center"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          tabIndex={0}
          aria-label="Elenco demo live"
          className="flex gap-4 sm:gap-6 overflow-x-auto overflow-y-visible py-4 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing focus:outline-none w-full scrollbar-none"
        >
          {filtered.map((product, i) => (
            <DemoProjectCard key={`${product.id}-${i}`} product={product} />
          ))}
        </div>
      </div>

      {/* Badge di autenticità e valore sotto */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-6 px-4 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-300 text-zinc-700 font-semibold tracking-wide text-xs shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Tutti i sistemi sono operativi in produzione e testabili in tempo reale
        </span>
      </div>
    </div>
  );
}
