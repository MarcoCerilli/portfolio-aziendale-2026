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
    <div id="risultati" className="w-full relative">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl bg-zinc-950/80 border border-zinc-800/80 shadow-2xl shadow-black/80 overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-evenly p-8 md:p-12 gap-8 md:gap-4">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="text-5xl md:text-6xl font-black tracking-tight text-white mb-2 transition-transform duration-300">
                <Counter value={15} suffix="+" />
              </div>
              <p className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                Progetti Conclusi
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />
            <div className="block md:hidden w-20 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

            {/* Central Badge */}
            <div className="flex flex-col items-center justify-center group cursor-default">
              <div className="relative w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-xl text-white mb-3">
                <ShieldCheckIcon className="w-7 h-7" />
              </div>
              <p className="text-white font-bold text-xs uppercase tracking-[0.15em] text-center leading-tight">
                Qualità &<br/>Garanzia 100%
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />
            <div className="block md:hidden w-20 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="text-5xl md:text-6xl font-black tracking-tight text-white mb-2 transition-transform duration-300">
                <Counter value={100} suffix="%" />
              </div>
              <p className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px]">
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