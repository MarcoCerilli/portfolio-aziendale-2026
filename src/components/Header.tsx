"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { XMarkIcon, SparklesIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Servizi", href: "/#pacchetti" },
  { name: "Tecnologie", href: "/#tecnologie" },
  { name: "Risultati", href: "/#risultati" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: 10 },
    opened: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      // Passato da bg-gray-950/70 a bg-white/80 e bordi slate-200
      className="sticky top-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-200/60"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-sm font-black text-white shadow-lg shadow-indigo-500/20"
          >
            M
          </motion.div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
            SOLUTIONS{" "}
            <span className="text-indigo-500 group-hover:text-indigo-400 transition-colors duration-300 italic">
              WEB
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              // Cambiato text-gray-400 in text-slate-500
              className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="/#contatti"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-full shadow-md shadow-indigo-200 transition-all"
          >
            Lavoriamo Insieme
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden p-2 z-[110] cursor-pointer text-indigo-600 hover:text-indigo-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-slate-900" />
          ) : (
            <SparklesIcon className="w-7 h-7 animate-pulse" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              // Passato da bg-gray-950 a bg-white/95
              className="fixed inset-0 h-screen w-full bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 z-[105]"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold uppercase tracking-[0.4em] text-slate-500 hover:text-indigo-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={linkVariants} className="pt-4">
                <Link
                  href="/#contatti"
                  onClick={() => setIsOpen(false)}
                  className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-black uppercase tracking-widest text-[10px] shadow-lg shadow-indigo-200"
                >
                  Lavoriamo Insieme
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
