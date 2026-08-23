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
  SiShopify,
  SiDocker,
  SiVercel,
  SiGithub,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";

interface Technology {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  badgeBorder: string;
  badgeBg: string;
  badgeText: string;
}

const technologies: Technology[] = [
  { name: "Astro", icon: SiAstro, color: "text-[#FF5D01]", badgeBorder: "border-orange-500/30", badgeBg: "bg-orange-500/10", badgeText: "text-orange-300" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]", badgeBorder: "border-cyan-500/30", badgeBg: "bg-cyan-500/10", badgeText: "text-cyan-300" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", badgeBorder: "border-zinc-700", badgeBg: "bg-zinc-900", badgeText: "text-zinc-200" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", badgeBorder: "border-blue-500/30", badgeBg: "bg-blue-500/10", badgeText: "text-blue-300" },
  { name: "PHP", icon: SiPhp, color: "text-[#8892BF]", badgeBorder: "border-indigo-500/30", badgeBg: "bg-indigo-500/10", badgeText: "text-indigo-300" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]", badgeBorder: "border-teal-500/30", badgeBg: "bg-teal-500/10", badgeText: "text-teal-300" },
  { name: "Neon DB", icon: SiNeon, color: "text-[#00E599]", badgeBorder: "border-emerald-500/30", badgeBg: "bg-emerald-500/10", badgeText: "text-emerald-300" },
  { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]", badgeBorder: "border-emerald-500/30", badgeBg: "bg-emerald-500/10", badgeText: "text-emerald-300" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]", badgeBorder: "border-blue-500/30", badgeBg: "bg-blue-500/10", badgeText: "text-blue-300" },
  { name: "Shopify", icon: SiShopify, color: "text-[#96BF48]", badgeBorder: "border-lime-500/30", badgeBg: "bg-lime-500/10", badgeText: "text-lime-300" },
  { name: "WordPress", icon: SiWordpress, color: "text-[#21759B]", badgeBorder: "border-sky-500/30", badgeBg: "bg-sky-500/10", badgeText: "text-sky-300" },
  { name: "Vercel", icon: SiVercel, color: "text-white", badgeBorder: "border-zinc-700", badgeBg: "bg-zinc-900", badgeText: "text-zinc-200" },
  { name: "GitHub", icon: SiGithub, color: "text-white", badgeBorder: "border-zinc-700", badgeBg: "bg-zinc-900", badgeText: "text-zinc-200" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]", badgeBorder: "border-blue-500/30", badgeBg: "bg-blue-500/10", badgeText: "text-blue-300" },
  { name: "Redis", icon: SiRedis, color: "text-[#DC382D]", badgeBorder: "border-red-500/30", badgeBg: "bg-red-500/10", badgeText: "text-red-300" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35 },
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

        {/* Griglia Card Tecnologie con Badge Colorati */}
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
              className={`group flex items-center gap-3.5 p-3.5 md:p-4 rounded-2xl border ${tech.badgeBorder} ${tech.badgeBg} hover:scale-[1.02] shadow-xl shadow-black/40 focus:outline-none transition-all duration-300 cursor-default`}
            >
              <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white group-hover:scale-110 transition-transform duration-300 shrink-0" aria-hidden="true">
                <tech.icon className={`w-5 h-5 ${tech.color}`} />
              </div>
              <div className="min-w-0">
                <span className={`text-sm font-bold ${tech.badgeText} tracking-tight block truncate`}>
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
