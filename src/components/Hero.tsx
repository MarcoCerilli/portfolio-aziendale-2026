"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";



// --- LOGICA STELLE ---
class Star {
  x: number;
  y: number;
  z: number;
  constructor(w: number, h: number) {
    this.x = Math.random() * w - w / 2;
    this.y = Math.random() * h - h / 2;
    this.z = Math.random() * w;
  }
  update(w: number, h: number, speed: number) {
    this.z -= speed;
    if (this.z <= 0) {
      this.z = w;
      this.x = Math.random() * w - w / 2;
      this.y = Math.random() * h - h / 2;
    }
  }
  draw(ctx: CanvasRenderingContext2D, w: number, h: number) {
    const sx = (this.x / this.z) * (w / 2) + w / 2;
    const sy = (this.y / this.z) * (h / 2) + h / 2;
    const r = (1 - this.z / w) * 2;
    ctx.beginPath();
    ctx.arc(sx, sy, r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(99, 102, 241, ${1 - this.z / w})`;
    ctx.fill();
  }
}

const HeroSpace = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [speed, setSpeed] = useState(20);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let stars: Star[] = [];
    let frameId: number;
    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from(
        { length: 400 },
        () => new Star(canvas.width, canvas.height),
      );
    };
    const loop = () => {
      ctx.fillStyle = document.documentElement.classList.contains("dark") ? "#020617" : "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.update(canvas.width, canvas.height, speed);
        s.draw(ctx, canvas.width, canvas.height);
      });
      frameId = requestAnimationFrame(loop);
    };
    window.addEventListener("resize", init);
    init();
    loop();
    const timer = setTimeout(() => setSpeed(0.8), 2500);
    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(frameId);
      clearTimeout(timer);
    };
  }, [speed]);

  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 1000], [0, -250]);
  const opacity = useTransform(scrollY, [200, 950], [1, 0]);

  return (
    <>


      {/* 1. SECTION: h-auto e justify-start per controllo totale su mobile */}
      <section className="relative w-full flex flex-col items-center justify-start overflow-hidden bg-white dark:bg-slate-950 pt-6 pb-12 md:pt-0 md:pb-0 md:h-[110vh] md:justify-center transition-colors duration-300">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 pointer-events-none"
        />

        <motion.div
          style={{ y: yContent, opacity }}
          className="relative z-30 flex flex-col items-center max-w-5xl px-6 w-full text-center md:justify-center md:h-full"
        >
          {/* AVATAR */}
          <div className="relative mb-6 -mt-2 md:mt-0 md:mb-8 pointer-events-none">
            <div className="absolute -inset-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-60 animate-pulse" />
            <div className="relative w-24 h-24 md:w-36 md:h-36 rounded-4xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-2xl rotate-2 bg-white dark:bg-slate-900">
              <Image
                src="/profile.jpg"
                alt="Marco"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* TITOLO PRINCIPALE */}
          <div className="space-y-3 md:space-y-4 pointer-events-none">
            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600/70">
              Mission: Digital Excellence
            </p>
            <h1 className="text-5xl md:text-[9.5rem] font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9] md:leading-[0.8] uppercase">
              Web <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-indigo-500 to-purple-600 italic">
                Architect
              </span>
            </h1>
          </div>

          {/* NUOVO SOTTOTITOLO STRATEGICO */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 md:mt-8 max-w-2xl text-slate-500 dark:text-slate-400 text-[11px] md:text-lg font-medium leading-relaxed uppercase tracking-wider md:normal-case md:tracking-normal"
          >
            Specialista in{" "}
            <span className="text-slate-900 dark:text-slate-100 font-bold">
              Integrazioni Headless
            </span>
            , E-commerce <span className="text-slate-900 dark:text-slate-100 font-bold">B2B</span> e
            architetture scalabili su
            <span className="text-indigo-600 dark:text-indigo-400 font-bold"> Shopify Plus</span>.
          </motion.p>

          {/* PULSANTE CON SFUMATURA INDIGO */}
          <div className="mt-14 md:mt-14 relative z-50">
            <motion.a
              href="#progetti"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(79, 70, 229, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 md:px-14 md:py-6 bg-linear-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white font-black text-[10px] md:text-[12px] uppercase tracking-[0.2em] rounded-2xl shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] inline-block transition-all"
            >
              Esplora i Progetti
            </motion.a>
          </div>
        </motion.div>

        {/* GRADIENTE FINALE */}
        <div className="absolute bottom-0 left-0 w-full h-12 md:h-64 bg-linear-to-t from-white dark:from-slate-950 via-white/80 dark:via-slate-950/80 to-transparent z-20 pointer-events-none" />
      </section>
    </>
  );
};

export default HeroSpace;
