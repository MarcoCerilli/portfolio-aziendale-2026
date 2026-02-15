"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// --- CURSORE RAZZO (Solo Desktop) ---
const RocketCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Media query precisa: controlla larghezza e capacità touch
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
          window.matchMedia("(pointer: coarse)").matches,
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && !isMobile) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isMobile]);

  // Se è mobile, non renderizziamo il razzo per liberare il cursore di sistema
  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{ willChange: "transform", left: 0, top: 0 }}
    >
      <div className="relative -top-1 -left-1 flex flex-col items-center rotate-[-45deg]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C12 2 7 5.5 7 12.5V16.5L4.5 19V21H19.5V19L17 16.5V12.5C17 5.5 12 2 12 2Z"
            className="fill-indigo-600 stroke-indigo-400"
            strokeWidth="1"
          />
          <circle cx="12" cy="10" r="1.5" fill="white" fillOpacity="0.8" />
        </svg>
        <motion.div
          animate={{ scaleY: [1, 1.8, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 0.15, repeat: Infinity }}
          className="w-2 h-4 bg-gradient-to-t from-orange-600 via-yellow-400 to-transparent rounded-full blur-[1px] -mt-1"
        />
      </div>
    </div>
  );
};

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
      ctx.fillStyle = "white";
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
      <RocketCursor />

      {/* 1. SECTION: h-auto e justify-start per controllo totale su mobile */}
      <section className="relative w-full flex flex-col items-center justify-start overflow-hidden bg-white pt-6 pb-12 md:pt-0 md:pb-0 md:h-[110vh] md:justify-center">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 pointer-events-none"
        />

        <motion.div
          style={{ y: yContent, opacity }}
          className="relative z-30 flex flex-col items-center max-w-5xl px-6 w-full text-center md:justify-center md:h-full"
        >
          {/* 3. AVATAR: Se la foto è ancora lontana dall'header, aumenta questo valore a -mt-10 */}
          <div className="relative mb-6 -mt-2 md:mt-0 md:mb-8 pointer-events-none">
            <div className="absolute -inset-8 bg-indigo-50 rounded-full blur-3xl opacity-60 animate-pulse" />
            <div className="relative w-24 h-24 md:w-36 md:h-36 rounded-[2rem] overflow-hidden border-2 border-white shadow-2xl rotate-2 bg-white">
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

          <div className="space-y-3 md:space-y-4 pointer-events-none">
            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600/70">
              Mission: Digital Excellence
            </p>
            <h1 className="text-5xl md:text-[9.5rem] font-black text-slate-900 tracking-tighter leading-[0.9] md:leading-[0.8] uppercase">
              Web <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 italic">
                Architect
              </span>
            </h1>
          </div>

          <div className="mt-8 md:mt-14 relative z-50">
            <motion.a
              href="#progetti"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 md:px-12 md:py-5 bg-slate-900 text-white font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] rounded-2xl shadow-2xl inline-block hover:bg-indigo-600"
            >
              Inizia il Viaggio
            </motion.a>
          </div>
        </motion.div>

        {/* 4. GRADIENTE: Ridotto a h-12 su mobile per non creare un "buco" bianco sotto il bottone */}
        <div className="absolute bottom-0 left-0 w-full h-12 md:h-64 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />
      </section>
    </>
  );
};

export default HeroSpace;
