"use client";
import { useState } from "react";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { XMarkIcon, Bars3Icon, SparklesIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Servizi", href: "/#pacchetti" },
  { name: "Tecnologie", href: "/#tecnologie" },
  { name: "Risultati", href: "/#risultati" },
];

import ThemeToggle from "./ThemeToggle";

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
      className="sticky top-0 z-100 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <a href="/" className="group flex items-center gap-2">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            src="/images/logo.png" 
            alt="M Solutions Web" 
            className="h-8 md:h-10 object-contain" 
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
            </a>
          ))}

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="/#contatti"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-full shadow-md shadow-indigo-200 dark:shadow-indigo-900/20 transition-all"
            >
              Richiedi Consulenza
            </a>
          </div>
        </nav>

        {/* MOBILE TOGGLE + THEME TOGGLE */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            className="p-2 z-110 cursor-pointer text-indigo-600 hover:text-indigo-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6 text-slate-900 dark:text-white" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              // Passato da bg-gray-950 a bg-white/95
              className="fixed inset-0 h-screen w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 z-105"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}



              <motion.div variants={linkVariants} className="pt-2">
                <a
                  href="/#contatti"
                  onClick={() => setIsOpen(false)}
                  className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-black uppercase tracking-widest text-[10px] shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20"
                >
                  Richiedi Consulenza
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
