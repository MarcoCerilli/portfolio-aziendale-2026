"use client";
import { useRef, useMemo } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const generateParticles = () => {
  return [...Array(40)].map((_, i) => ({
    id: i,
    width: Math.random() * 2 + 1,
    height: Math.random() * 2 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.4,
    duration: Math.random() * 10 + 10,
  }));
};

const HeroSpace = () => {
  const containerRef = useRef(null);
  const particles = useMemo(() => generateParticles(), []);

  const { scrollY } = useScroll();

  const yText = useTransform(scrollY, [0, 800], [0, 150]);
  const yBg = useTransform(scrollY, [0, 800], [0, -100]);

  // Mantiene il focus centrale visibile più a lungo durante lo scroll
  const opacity = useTransform(scrollY, [0, 500, 900], [1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[110vh] flex items-center justify-center overflow-hidden bg-[#030304] select-none"
    >
      {/* --- BACKGROUND LAYER: BLOBS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/5 blur-[120px] rounded-full" />

        <motion.div
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute bottom-24 -right-24 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full"
        />
      </div>

      {/* --- LAYER PARTICELLE --- */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-white rounded-full"
            style={{
              width: p.width + "px",
              height: p.height + "px",
              left: p.left + "%",
              top: p.top + "%",
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* --- CONTENUTO PRINCIPALE --- */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 flex flex-col items-center max-w-5xl px-6"
      >
        {/* AVATAR: Poco arrotondato con Doppia Cornice Purple */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 relative group cursor-pointer"
        >
          {/* Prima cornice (Glow esterno) */}
          <div className="absolute -inset-3 border border-purple-500/20 rounded-[2.5rem] blur-sm group-hover:border-purple-500/40 transition duration-700"></div>
          {/* Seconda cornice (Linea netta) */}
          <div className="absolute -inset-1.5 border border-purple-500/50 rounded-[2.2rem] group-hover:scale-105 transition duration-500"></div>

          <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-3xl overflow-hidden border border-white/10 p-1 bg-[#030304] z-10 shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Marco Cerilli"
              fill
              className="object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-110"
              priority
            />
          </div>
        </motion.div>

        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-purple-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4"
          >
            Web Architect
          </motion.p>

          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight leading-[0.9] mb-8">
            CREATING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              NEXT GEN WEB
            </span>
          </h1>

          <p className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto mb-12 font-medium leading-relaxed">
            Sviluppo interfacce ad alte prestazioni con Next.js e integrazioni
            AI. Design minimale, codice solido, scalabilità garantita.
          </p>

          <div className="flex flex-wrap gap-5 justify-center">
            {/* BOTTONE PROGETTI: Sfumatura Purple */}
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }} //
              href="#progetti"
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-[11px] uppercase tracking-widest rounded-xl shadow-[0_10px_30px_rgba(147,51,234,0.3)] transition-all"
            >
              Progetti
            </motion.a>
            {/* BOTTONE CONTATTAMI: Bordo Purple Glass */}
            <motion.a
              whileHover={{
                y: -3,
                backgroundColor: "rgba(147,51,234,0.1)",
                borderColor: "rgba(147,51,234,0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }} //
              href="#contatti"
              className="px-10 py-4 border border-purple-500/30 bg-white/5 backdrop-blur-xl text-white font-bold text-[11px] uppercase tracking-widest rounded-xl transition-all"
            >
              Contattami
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSpace;
