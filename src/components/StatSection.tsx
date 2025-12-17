"use client";
import Counter from "./Counter";

const stats = [
  { label: "Progetti Conclusi", value: 50, suffix: "+" },
  { label: "Clienti Soddisfatti", value: 99, suffix: "%" },
  { label: "Uptime Soluzioni", value: 100, suffix: "%" },
];

export default function StatsSection() {
  return (
    <section className="py-12 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="p-8 rounded-[2rem] bg-indigo-950/10 border border-indigo-500/20 text-center hover:border-indigo-500/50 transition-all group"
            >
              <h3 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-indigo-400 uppercase tracking-[0.2em] text-[10px] font-bold group-hover:text-indigo-300 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}