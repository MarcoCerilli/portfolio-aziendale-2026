"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-black text-white pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Griglia futuristica */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#374151 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">
        
        {/* Colonna Testo */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-3/5 text-center md:text-left order-2 md:order-1"
        >
          <motion.p 
            className="text-[10px] font-black text-indigo-500 uppercase mb-4 tracking-[0.4em]"
          >
            Digital Architect & Developer
          </motion.p>
          
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] tracking-tighter">
            Sviluppo Web <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-500">
              Premium
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-400 mb-10 md:mb-12 leading-relaxed max-w-xl mx-auto md:mx-0">
            Trasformo le tue idee in esperienze digitali, combinando design moderno e tecnologie robuste per creare siti web efficienti e personalizzati.
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#pacchetti"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-black uppercase tracking-widest text-[11px] py-5 px-10 rounded-2xl transition-all shadow-[0_20px_50px_rgba(79,70,229,0.3)] inline-block"
          >
            Scegli il tuo pacchetto
          </motion.a>
        </motion.div>

        {/* Colonna Immagine - RIDIMENSIONATA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-2/5 flex justify-center order-1 md:order-2"
        >
          <motion.div 
            animate={{
              y: [0, -15, 0],
              rotate: [0, 0.5, -0.5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            // Ridotto: da w-72 a w-60 su mobile, da 450px a 380px su desktop
            className="relative w-60 h-60 md:w-[380px] md:h-[380px]"
          >
            {/* Effetto Glow proporzionato */}
            <div className="absolute inset-0 bg-indigo-600/20 blur-[80px] md:blur-[100px] rounded-[3rem]"></div>
            
            {/* Contenitore Immagine */}
            <div className="relative w-full h-full overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Marco Cerilli"
                fill
                className="object-cover scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Badge flottante riposizionato */}
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-gray-900/90 backdrop-blur-xl border border-white/10 p-4 md:p-5 rounded-[1.5rem] hidden md:block shadow-2xl"
            >
              <p className="text-indigo-400 font-black text-xl tracking-tighter leading-none">Marco Cerilli</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">web developer</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;