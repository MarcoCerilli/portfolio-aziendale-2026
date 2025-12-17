"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-black text-white pt-32 pb-24 relative overflow-hidden">
      {/* Griglia futuristica più sottile */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#374151 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* Colonna Testo */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-3/5 text-center md:text-left"
        >
          <motion.p 
            className="text-[10px] font-black text-indigo-500 uppercase mb-4 tracking-[0.4em]"
          >
            Digital Architect & Developer
          </motion.p>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
            Sviluppo Web <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-500">
              Premium
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-xl">
            Trasformo le tue idee in esperienze digitali, combinando design moderno e tecnologie robuste per creare siti web efficienti e personalizzati.
          </p>
          
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#pacchetti"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-black uppercase tracking-widest text-xs py-5 px-12 rounded-2xl transition-all shadow-[0_20px_50px_rgba(79,70,229,0.3)] inline-block"
          >
            Scegli il tuo pacchetto
          </motion.a>
        </motion.div>

        {/* Colonna Immagine - ORA QUADRATA E FLUTTUANTE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="md:w-2/5 flex justify-center"
        >
          <motion.div 
            // Animazione di fluttuazione (floating)
            animate={{
              y: [0, -20, 0],
              rotate: [0, 1, -1, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-72 h-72 md:w-[450px] md:h-[450px]"
          >
            {/* Effetto Glow morbido dietro */}
            <div className="absolute inset-0 bg-indigo-600/20 blur-[120px] rounded-[3rem]"></div>
            
            {/* Contenitore Immagine Quadrato (Squircle) */}
            <div className="relative w-full h-full overflow-hidden rounded-[3.5rem] border border-white/10 shadow-2xl transition-all duration-500 hover:border-indigo-500/50">
              <Image
                src="/profile.jpg"
                alt="Marco Cerilli"
                fill
                className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                priority
              />
              
              {/* Overlay per dare un tocco lucido/vetro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Badge flottante opzionale */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-gray-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] hidden md:block"
            >
              <p className="text-indigo-400 font-black text-2xl tracking-tighter">Marco Cerilli</p>
              <p className="text-[12px] text-gray-500 uppercase tracking-widest font-bold">web developer</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;