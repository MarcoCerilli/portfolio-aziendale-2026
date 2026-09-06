import { motion } from "framer-motion";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

const TrustSection = () => {
  return (
    <div id="risultati" className="w-full relative">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative rounded-3xl bg-zinc-900/50 border border-zinc-800/60 shadow-xl overflow-hidden backdrop-blur-sm"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-evenly p-8 md:p-12 gap-8 md:gap-4">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
                &lt; 0.8s
              </div>
              <p className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                Velocità &amp; Core Web Vitals
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />
            <div className="block md:hidden w-16 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

            {/* Central Badge */}
            <div className="flex flex-col items-center justify-center group cursor-default">
              <div className="relative w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg mb-3">
                <ShieldCheckIcon className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-white font-bold text-xs uppercase tracking-[0.15em] text-center leading-tight">
                Sviluppo Sartoriale &amp;<br />Garanzia 100%
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />
            <div className="block md:hidden w-16 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
                100%
              </div>
              <p className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                Codice Proprietario &amp; Zero Canoni
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustSection;