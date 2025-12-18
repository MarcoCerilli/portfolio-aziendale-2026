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
    color: "from-blue-400 to-indigo-600",
  },
  {
    value: 99,
    label: "Soddisfazione Cliente",
    suffix: "%",
    color: "from-emerald-400 to-teal-500",
  },
  {
    value: 100,
    label: "Codice Ottimizzato",
    suffix: "%",
    color: "from-rose-400 to-orange-500",
  },
];

const TrustSection = () => {
  return (
    // RIDOTTO: py-24 -> py-8 per compattare il layout
    <section id="risultati" className="py-8 bg-black relative">
      {/* Intestazione Sezione - RIDOTTO mb-16 -> mb-8 */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]"
        >
          Affidabilità & Performance
        </motion.h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
            // COMPATTATO: p-12 -> p-8 per mobile e desktop
            className="group relative p-8 bg-gray-900/40 backdrop-blur-2xl rounded-[2rem] border border-white/5 flex flex-col items-center text-center transition-all duration-500"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700 rounded-[2rem]`}
            />

            <div className="relative z-10">
              {/* RIDOTTO: text-6xl -> text-5xl per un look più elegante e meno ingombrante */}
              <p
                className={`text-5xl md:text-6xl font-black mb-2 tracking-tighter bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>

              <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[10px]">
                {stat.label}
              </p>
            </div>

            <div className="absolute top-4 right-6 w-1 h-1 rounded-full bg-white/10 group-hover:scale-[2] group-hover:bg-indigo-500 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
