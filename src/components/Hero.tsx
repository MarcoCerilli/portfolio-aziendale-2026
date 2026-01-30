"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// --- TIPO PARTICELLE ---
interface Particle {
  id: number;
  width: number;
  height: number;
  left: number;
  top: number;
  opacity: number;
  duration: number;
}

// --- LOGICA GENERAZIONE ESTERNA ---
const generateParticles = (): Particle[] => {
  return [...Array(30)].map((_, i) => ({
    id: i,
    width: Math.random() * 2 + 1,
    height: Math.random() * 2 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.3,
    duration: Math.random() * 10 + 15,
  }));
};

const HeroSpace = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Evitiamo Hydration Mismatch popolando lo stato dopo il mount
  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setParticles(generateParticles());
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  // --- EFFETTI DI PARALLASSE ---
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 80]);
  const yBg = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section
      ref={containerRef}
      /* PUNTO CHIAVE: 
         - pt-20: Spazio di sicurezza per l'header.
         - items-center + -mt-10 (nel div sotto): Bilancia perfettamente la verticale su mobile.
      */
      className="relative w-full min-h-[100svh] md:min-h-screen lg:min-h-[110vh] flex items-center justify-center overflow-hidden bg-[#030304] select-none pt-20 pb-12 md:pt-0 md:pb-0"
    >
      {/* --- SFONDO: EFFETTI LUCE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[120px] rounded-full" />
      </div>

      {/* --- SFONDO: PARTICELLE FLUTTUANTI --- */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 pointer-events-none">
        {particles.length > 0 &&
          particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute bg-white rounded-full"
              style={{
                width: `${p.width}px`,
                height: `${p.height}px`,
                left: `${p.left}%`,
                top: `${p.top}%`,
                opacity: p.opacity,
              }}
              animate={{ y: [0, -30, 0], opacity: [p.opacity, 0.3, p.opacity] }}
              transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
            />
          ))}
      </motion.div>

      {/* --- BLOCCO CENTRALE --- */}
      <motion.div
        style={{ y: yText }}
        /* -mt-10 tira su il contenuto su mobile per bilanciare il "troppo giù" */
        className="relative z-10 flex flex-col items-center max-w-5xl px-6 w-full -mt-10 md:mt-0"
      >
        
        {/* --- AVATAR CON CORNICE LAYERED --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6 md:mb-10 relative group cursor-pointer"
        >
          {/* Glow esterno */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[2.8rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>

          {/* Bordo riflettente tech */}
          <div className="absolute -inset-[2px] bg-gradient-to-tr from-white/10 via-white/40 to-white/10 rounded-[2.2rem] group-hover:rotate-1 transition duration-1000"></div>

          {/* Immagine Profilo: w-24 su mobile per salvaspazio verticale */}
          <div className="relative w-24 h-24 md:w-44 md:h-44 rounded-[2rem] overflow-hidden border border-white/10 p-1.5 bg-[#0a0a0b] z-10 shadow-2xl">
            <div className="relative w-full h-full overflow-hidden rounded-[1.6rem]">
              <Image
                src="/profile.jpg"
                alt="Marco Cerilli"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none" />
            </div>
          </div>

          {/* Corner decorativo */}
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-indigo-500/50 rounded-tr-lg z-20 group-hover:scale-125 transition-transform duration-500"></div>
        </motion.div>

        {/* --- TESTI --- */}
        <div className="text-center">
          <p className="text-purple-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4">
            Web Architect
          </p>

          <h1 className="text-4xl md:text-8xl font-black text-white tracking-tight leading-[1.1] md:leading-[0.9] mb-6">
            CREATING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 italic">
              NEXT GEN WEB
            </span>
          </h1>

          <p className="text-gray-400 text-xs md:text-lg max-w-xl mx-auto mb-10 font-medium leading-relaxed px-4 md:px-0">
            Sviluppo interfacce ad alte prestazioni con Next.js e integrazioni
            AI. Design minimale, codice solido, scalabilità garantita.
          </p>

          {/* --- CTA BUTTONS --- */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#progetti"
              whileHover={{ y: -2 }}
              className="w-full sm:w-auto px-10 py-4 bg-indigo-600 text-white font-bold text-[10px] uppercase tracking-widest rounded-xl text-center shadow-[0_10px_20px_rgba(79,70,229,0.2)]"
            >
              Progetti
            </motion.a>
            <motion.a
              href="#contatti"
              whileHover={{ y: -2 }}
              className="w-full sm:w-auto px-10 py-4 border border-white/10 bg-white/5 backdrop-blur-xl text-white font-bold text-[10px] uppercase tracking-widest rounded-xl text-center"
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