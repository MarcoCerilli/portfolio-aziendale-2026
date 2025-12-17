"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Servizi", href: "/#pacchetti" },
  { name: "Tecnologie", href: "/#tecnologie" },
  { name: "Risultati", href: "/#risultati" },
];

const Header = () => {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-gray-950/70 backdrop-blur-xl border-b border-gray-800/50 transition-all duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/"
            className="text-xl md:text-2xl font-black tracking-tighter text-white hover:text-indigo-400 transition-colors flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-sm shadow-[0_0_15px_rgba(79,70,229,0.4)]">
              M
            </div>
            <span>SOLUTIONS <span className="text-indigo-500 uppercase"></span></span>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index + 0.5 }}
            >
              <Link
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Link
              href="/#contatti"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all active:scale-95"
            >
              Lavoriamo Insieme
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
             <div className="w-6 h-0.5 bg-white rounded-full relative after:content-[''] after:absolute after:top-2 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-full before:content-[''] before:absolute before:-top-2 before:left-0 before:w-full before:h-0.5 before:bg-white before:rounded-full"></div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;