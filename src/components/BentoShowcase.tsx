import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  SparklesIcon,
  BoltIcon,
  CommandLineIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import {
  SiAstro,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPhp,
  SiNeon,
  SiSupabase,
  SiPostgresql,
  SiDocker,
  SiShopify,
} from "react-icons/si";

const techPills = [
  { name: "Astro", icon: SiAstro, color: "text-[#FF5D01]", border: "border-orange-500/30", bg: "bg-orange-500/10" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]", border: "border-cyan-500/30", bg: "bg-cyan-500/10" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", border: "border-zinc-700", bg: "bg-zinc-900" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", border: "border-blue-500/30", bg: "bg-blue-500/10" },
  { name: "PHP", icon: SiPhp, color: "text-[#8892BF]", border: "border-indigo-500/30", bg: "bg-indigo-500/10" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]", border: "border-teal-500/30", bg: "bg-teal-500/10" },
  { name: "Neon DB", icon: SiNeon, color: "text-[#00E599]", border: "border-emerald-500/30", bg: "bg-emerald-500/10" },
  { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]", border: "border-emerald-500/30", bg: "bg-emerald-500/10" },
  { name: "Postgres", icon: SiPostgresql, color: "text-[#4169E1]", border: "border-blue-500/30", bg: "bg-blue-500/10" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]", border: "border-blue-500/30", bg: "bg-blue-500/10" },
  { name: "Shopify", icon: SiShopify, color: "text-[#96BF48]", border: "border-lime-500/30", bg: "bg-lime-500/10" },
];

const featuredDemos = [
  {
    title: "Dimora Luxury Real Estate",
    cat: "Luxury Real Estate",
    url: "https://demo-tornesi-immobiliare.vercel.app",
    color: "bg-purple-950/70 border-purple-800/80 text-purple-300",
    img: "/projects/demo-dimora-immobiliare.jpg",
  },
  {
    title: "Aura Osteria Moderna",
    cat: "Booking Ristorante",
    url: "https://demo-aura-osteria.vercel.app",
    color: "bg-amber-950/70 border-amber-800/80 text-amber-300",
    img: "/projects/demo-aura.jpg",
  },
  {
    title: "Villa Seraphina Relais",
    cat: "Boutique Hotel Booking",
    url: "https://demo-villa-seraphina.vercel.app",
    color: "bg-emerald-950/70 border-emerald-800/80 text-emerald-300",
    img: "/projects/demo-villa.jpg",
  },
  {
    title: "ScaleFlow Enterprise",
    cat: "SaaS & AI Platform",
    url: "https://demo-scaleflow-saas.vercel.app",
    color: "bg-cyan-950/70 border-cyan-800/80 text-cyan-300",
    img: "/projects/demo-scaleflow.jpg",
  },
];

export default function BentoShowcase() {
  return (
    <section className="w-full py-16 md:py-24 bg-black text-white relative overflow-hidden">
      {/* Sfondo con sfumature Aurora Glass sottili */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Titolo Sezione */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-zinc-300 mb-4 shadow-sm">
            <SparklesIcon className="w-4 h-4 text-emerald-400" />
            Ingegneria &amp; Portfolio Interattivo
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Un'Architettura Completa per il Tuo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              Business Digitale
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Ogni blocco è progettato con standard di altissima qualità: codice moderno, velocità istantanea e massima conversione.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          
          {/* BENTO 1: Progetto di Punta (2 Colonne su desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 rounded-3xl bg-zinc-950/90 border border-zinc-800/90 hover:border-zinc-700 p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden shadow-2xl shadow-black/80 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Progetto in Evidenza • Live Production
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Ermanno Tech — Piattaforma E-Commerce ad Alte Prestazioni
                </h3>
              </div>
              <a
                href="https://ermannotech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-black text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shrink-0 shadow-md cursor-pointer self-start sm:self-auto"
              >
                Visita Store
                <ArrowTopRightOnSquareIcon className="w-4 h-4 text-black" />
              </a>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
              Negozio online completo sviluppato su misura per massimizzare le vendite: caricamento istantaneo (&lt; 0.8s), catalogo reattivo, sincronizzazione stock e pagamenti Stripe integrati.
            </p>

            {/* Mockup Preview Interattiva */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-black border border-zinc-800">
              <img
                src="/projects/ermannotech.png"
                alt="Ermanno Tech E-Commerce Preview"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/templates/landingpage.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-zinc-800 text-[10px] font-bold text-white uppercase tracking-wider">
                  Next.js + React
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-zinc-800 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                  Stripe Checkout
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-zinc-800 text-[10px] font-bold text-zinc-300 uppercase tracking-wider">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </motion.div>

          {/* BENTO 2: Disponibilità & Supporto Diretto 1:1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl bg-zinc-950/90 border border-zinc-800/90 hover:border-zinc-700 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-black/80 transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="relative shrink-0">
                  <img
                    src="/profile.jpg"
                    alt="Marco Cerilli"
                    className="w-12 h-12 rounded-2xl object-cover border border-zinc-700"
                  />
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-zinc-950" />
                </div>
                <div>
                  <h4 className="text-base font-black text-white leading-tight">Marco Cerilli</h4>
                  <p className="text-xs text-emerald-400 font-bold flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                    Disponibile per nuovi progetti
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-black text-white tracking-tight mb-3">
                Consulenza &amp; Sviluppo Diretto
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-normal mb-6">
                Nessun account manager o intermediario. Parli direttamente con chi scrive il codice e progetta l'architettura del tuo sito.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-800/80">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-medium">Tempi Medi di Consegna</span>
                <span className="text-white font-bold">5 - 14 giorni</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-medium">Garanzia Risultato</span>
                <span className="text-emerald-400 font-bold">100% Soddisfatti</span>
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new Event("open-chat"));
                }}
                className="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-black text-xs uppercase tracking-widest shadow-xl transition-all cursor-pointer"
              >
                <ChatBubbleBottomCenterTextIcon className="w-4 h-4 text-black" />
                Richiedi Preventivo Rapido
              </button>
            </div>
          </motion.div>

          {/* BENTO 3: Stack Tecnologico & PHP Arsenal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-3xl bg-zinc-950/90 border border-zinc-800/90 hover:border-zinc-700 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-black/80 transition-all duration-300"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-bold uppercase tracking-wider text-zinc-300 mb-4">
                <CommandLineIcon className="w-3.5 h-3.5 text-cyan-400" />
                Stack Core Moderno
              </div>
              <h3 className="text-xl font-black text-white tracking-tight mb-2">
                Tecnologie &amp; Database
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-normal mb-5">
                Architetture veloci e sicure basate su Astro, Next.js, PHP, TypeScript e database Neon serverless.
              </p>

              {/* Badge Pills Griglia */}
              <div className="flex flex-wrap gap-2">
                {techPills.map((tech) => (
                  <span
                    key={tech.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${tech.border} ${tech.bg} text-xs font-bold transition-transform hover:scale-105 cursor-default`}
                  >
                    <tech.icon className={`w-3.5 h-3.5 ${tech.color}`} />
                    <span className="text-zinc-200 text-[11px]">{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-[11px] text-zinc-500 font-medium">Stack Serverless &amp; Edge</span>
              <span className="text-[11px] font-bold text-white">Vercel &amp; Cloudflare Ready</span>
            </div>
          </motion.div>

          {/* BENTO 4: Template Demo Live Pronti all'Uso (2 Colonne su Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 lg:col-span-2 rounded-3xl bg-zinc-950/90 border border-zinc-800/90 hover:border-zinc-700 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-black/80 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-950/80 text-amber-300 border border-amber-800/80 mb-2">
                    <BoltIcon className="w-3 h-3 text-amber-400" />
                    Demo Interattive Live
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Template &amp; Sistemi Già Operativi
                  </h3>
                </div>
                <a
                  href="#demo"
                  className="text-xs font-bold text-zinc-400 hover:text-white uppercase tracking-wider transition-colors hidden sm:block"
                >
                  Tutte le Demo &rarr;
                </a>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                Prova in tempo reale le demo funzionanti realizzate per ristoranti, immobiliari di lusso, boutique hotel e piattaforme SaaS.
              </p>

              {/* Griglia 4 Demo Compatte */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {featuredDemos.map((demo) => (
                  <a
                    key={demo.title}
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/demo p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 flex items-center justify-between gap-3 transition-all hover:bg-zinc-900"
                  >
                    <div className="min-w-0">
                      <span className={`inline-flex px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider border mb-1 ${demo.color}`}>
                        {demo.cat}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white group-hover/demo:text-emerald-400 transition-colors truncate">
                        {demo.title}
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover/demo:bg-white group-hover/demo:text-black transition-all shrink-0 shadow-sm">
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
              <span>Nessun mockup finto: codice reale distribuito su Vercel</span>
              <a href="#demo" className="text-white font-bold hover:underline sm:hidden">
                Vedi tutte
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
