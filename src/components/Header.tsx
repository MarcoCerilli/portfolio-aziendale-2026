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
      className="sticky top-0 z-[100] bg-gray-950/70 backdrop-blur-xl border-b border-gray-800/50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-sm font-black text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]"
          >
            M
          </motion.div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white transition-colors duration-300 group-hover:text-indigo-400">
            SOLUTIONS{" "}
            <span className="text-indigo-500 group-hover:text-purple-400 transition-colors duration-300 italic">
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
              className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="/#contatti"
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all"
          >
            Lavoriamo Insieme
          </Link>
        </nav>

        {/* MOBILE TOGGLE CON SCINTILLE */}
        <button
          className="md:hidden p-2 z-[110] cursor-pointer text-indigo-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <SparklesIcon className="w-7 h-7 animate-pulse" />
          )}
        </button>

        {/* Mobile Menu Overlay - VOCI PIÙ PICCOLE */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="fixed inset-0 h-screen w-full bg-gray-950/98 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 z-[105]"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold uppercase tracking-[0.4em] text-gray-400 hover:text-indigo-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={linkVariants} className="pt-4">
                <Link
                  href="/#contatti"
                  onClick={() => setIsOpen(false)}
                  className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-black uppercase tracking-widest text-[10px] shadow-xl shadow-indigo-500/20"
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
