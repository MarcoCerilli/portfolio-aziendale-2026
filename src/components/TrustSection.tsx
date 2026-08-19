import { useEffect, useState, useRef } from "react";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

const Counter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 50 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const TrustSection = () => {
  return (
    <div id="risultati" className="w-full relative transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-[2rem] bg-slate-50 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800 shadow-2xl shadow-indigo-500/5 dark:shadow-black/40 overflow-hidden"
        >
          {/* Animated Glow in the background */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] max-w-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-teal-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-teal-500/20 blur-3xl rounded-full pointer-events-none animate-pulse" 
            style={{ animationDuration: '4s' }} 
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-evenly p-8 md:p-12 gap-8 md:gap-4">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="text-5xl md:text-6xl font-black tracking-tighter bg-gradient-to-br from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-500">
                <Counter value={15} suffix="+" />
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                Progetti Conclusi
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
            <div className="block md:hidden w-20 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />

            {/* Central Badge */}
            <div className="flex flex-col items-center justify-center group cursor-default">
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 text-white mb-4 transform rotate-3 group-hover:rotate-12 transition-transform duration-500">
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                <ShieldCheckIcon className="w-8 h-8 relative z-10" />
              </div>
              <p className="text-slate-900 dark:text-white font-black text-xs md:text-sm uppercase tracking-[0.15em] text-center leading-tight">
                Qualità &<br/>Eccellenza
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
            <div className="block md:hidden w-20 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="text-5xl md:text-6xl font-black tracking-tighter bg-gradient-to-br from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-500">
                <Counter value={100} suffix="%" />
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                Clienti Soddisfatti
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustSection;