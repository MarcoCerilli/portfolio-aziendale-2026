import { motion, type Variants } from "framer-motion";
import {
  SiAstro,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPhp,
  SiNeon,
  SiSupabase,
  SiWordpress,
  SiDocker,
  SiShopify,
  SiFramer,
  SiVercel,
  SiGithub,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

const technologies = [
  { name: "Astro", icon: SiAstro, color: "text-orange-500", bgGlow: "group-hover:shadow-orange-500/20" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]", bgGlow: "group-hover:shadow-cyan-500/20" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900", bgGlow: "group-hover:shadow-slate-500/20" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", bgGlow: "group-hover:shadow-blue-500/20" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500", bgGlow: "group-hover:shadow-cyan-500/20" },
  { name: "PHP", icon: SiPhp, color: "text-[#777BB4]", bgGlow: "group-hover:shadow-indigo-500/20" },
  { name: "Neon DB", icon: SiNeon, color: "text-[#00E599]", bgGlow: "group-hover:shadow-emerald-500/20" },
  { name: "Vercel", icon: SiVercel, color: "text-slate-900", bgGlow: "group-hover:shadow-slate-500/20" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-500", bgGlow: "group-hover:shadow-emerald-500/20" },
  { name: "Shopify", icon: SiShopify, color: "text-emerald-600", bgGlow: "group-hover:shadow-emerald-500/20" },
  { name: "WordPress", icon: SiWordpress, color: "text-sky-600", bgGlow: "group-hover:shadow-sky-500/20" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500", bgGlow: "group-hover:shadow-blue-500/20" },
  { name: "GitHub", icon: SiGithub, color: "text-slate-900", bgGlow: "group-hover:shadow-slate-500/20" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-600", bgGlow: "group-hover:shadow-indigo-500/20" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600", bgGlow: "group-hover:shadow-blue-500/20" },
  { name: "Framer Motion", icon: SiFramer, color: "text-purple-600", bgGlow: "group-hover:shadow-purple-500/20" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 12, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

const TechStack = () => {
  return (
    <div id="tecnologie" aria-label="Stack Tecnologico e Strumenti" className="py-16 md:py-20 bg-black border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titolo Sezione */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-zinc-300 mb-3 shadow-xs">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" aria-hidden="true" />
              Stack Tecnologico
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Strumenti &amp; Architetture <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400">Core</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 font-normal">
            Architetture moderne, serverless, PHP e database ad alte performance
          </p>
        </div>

        {/* Griglia Card Tecnologie */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3.5 md:gap-4"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              tabIndex={0}
              className="group flex items-center gap-3.5 p-3.5 md:p-4 rounded-2xl border border-zinc-800/80 bg-zinc-950/80 hover:border-zinc-700 shadow-xl shadow-black/60 focus:outline-none transition-all duration-300 cursor-default"
            >
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white group-hover:scale-105 transition-transform duration-300 shrink-0" aria-hidden="true">
                <tech.icon className={`w-5 h-5 ${tech.color}`} />
              </div>
              <div className="min-w-0">
                <span className="text-sm font-bold text-white tracking-tight block truncate">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
