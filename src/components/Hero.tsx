"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 1000], [0, -100]); // Effetto parallasse leggero, niente scomparsa

  // Varianti per l'animazione di entrata degli elementi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 pt-20 pb-24 md:min-h-screen transition-colors duration-300">
      {/* Sfondo animato professionale e minimale */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-200/40 via-transparent to-transparent dark:from-indigo-900/20 pointer-events-none" 
      />
      
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-0 left-0 w-[80%] h-[80%] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/10 pointer-events-none" 
      />

      <motion.div
        style={{ y: yContent }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 flex flex-col items-center max-w-5xl px-6 w-full text-center"
      >
        {/* AVATAR PROFESSIONALE RETTANGOLARE */}
        <motion.div variants={itemVariants} className="relative mb-8 md:mb-10 pointer-events-none">
          <div className="absolute -inset-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-3xl blur-xl opacity-60" />
          <div className="relative w-32 h-40 md:w-48 md:h-64 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-900 shadow-lg bg-white dark:bg-slate-900">
            <Image
              src="/profile.jpg"
              alt="Marco Cerilli"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </motion.div>

        {/* TITOLO PRINCIPALE */}
        <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 pointer-events-none">
          <p className="text-sm md:text-base font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Marco Cerilli
          </p>
          <h1 className="text-4xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Web & E-commerce <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-400 dark:to-indigo-300">
              Architect
            </span>
          </h1>
        </motion.div>

        {/* SOTTOTITOLO PROFESSIONALE */}
        <motion.p
          variants={itemVariants}
          className="mt-6 md:mt-8 max-w-3xl text-slate-600 dark:text-slate-400 text-base md:text-xl font-normal leading-relaxed"
        >
          Sviluppo soluzioni web ad alte prestazioni. Specialista in{" "}
          <span className="text-slate-900 dark:text-slate-100 font-medium">
            Integrazioni Headless
          </span>
          , ecosistemi <span className="text-slate-900 dark:text-slate-100 font-medium">B2B</span> e
          architetture scalabili su
          <span className="text-indigo-600 dark:text-indigo-400 font-medium"> Shopify Plus</span>.
        </motion.p>

        {/* CALL TO ACTION */}
        <motion.div variants={itemVariants} className="mt-12 md:mt-14 relative z-50 flex items-center justify-center gap-4">
          <motion.a
            href="#progetti"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 md:px-10 md:py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm md:text-base rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Esplora i Progetti
          </motion.a>
          <motion.a
            href="#contatti"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 md:px-10 md:py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold text-sm md:text-base rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            Contattami
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
