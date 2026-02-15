"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const Counter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 60 });
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

const stats = [
  {
    value: 10,
    label: "Progetti Conclusi",
    suffix: "+",
    // Gradienti leggermente più saturi per risaltare sul bianco
    color: "from-blue-600 to-indigo-700",
  },
  {
    value: 99,
    label: "Soddisfazione Cliente",
    suffix: "%",
    color: "from-emerald-500 to-teal-600",
  },
  {
    value: 100,
    label: "Codice Ottimizzato",
    suffix: "%",
    color: "from-rose-500 to-orange-600",
  },
];

const TrustSection = () => {
  return (
    // Passato da bg-black a bg-white
    <section id="risultati" className="py-12 md:py-20 bg-white relative">
      {/* Intestazione Sezione */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[11px] font-black text-slate-400 uppercase tracking-[0.5em]"
        >
          Affidabilità & Performance
        </motion.h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, borderColor: "rgba(79, 70, 229, 0.2)" }}
            // Card Bianca, bordo slate e ombra morbida
            className="group relative p-10 bg-white rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center transition-all duration-500 shadow-xl shadow-slate-100/50"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 rounded-[2.5rem]`}
            />

            <div className="relative z-10">
              <p
                className={`text-6xl md:text-7xl font-black mb-4 tracking-tighter bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>

              <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[11px]">
                {stat.label}
              </p>
            </div>

            {/* Puntino decorativo in alto a destra */}
            <div className="absolute top-6 right-8 w-1.5 h-1.5 rounded-full bg-slate-100 group-hover:scale-[1.5] group-hover:bg-indigo-500 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;