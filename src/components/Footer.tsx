"use client";
import { motion } from 'framer-motion';
import { SiLinkedin, SiGithub, SiWhatsapp } from 'react-icons/si';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const socialLinks = [
  { 
    name: 'LinkedIn', 
    icon: SiLinkedin, 
    href: 'https://www.linkedin.com/in/marco-cerilli', 
    brandColor: '#0077B5' 
  },
  { 
    name: 'GitHub', 
    icon: SiGithub, 
    href: 'https://github.com/MarcoCerilli', 
    brandColor: '#ffffff' 
  },
  { 
    name: 'WhatsApp', 
    icon: SiWhatsapp, 
    href: 'https://wa.me/393804291043', 
    brandColor: '#25D366' 
  },
  { 
    name: 'Email', 
    icon: EnvelopeIcon, 
    href: 'mailto:cerillimarco15@gmail.com', 
    brandColor: '#818cf8' 
  },
];

const Footer = () => {
  return (
    <footer id="contatti" className="py-20 border-t border-gray-800 bg-gray-950 relative overflow-hidden">
      {/* Effetto Glow di sfondo per dare profondità */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          Pronto a fare il <span className="text-indigo-500">Level Up?</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto text-sm md:text-base">
          Scegli la piattaforma che preferisci. Rispondo solitamente entro poche ore.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              
              // EFFETTO HOVER (Desktop)
              whileHover={{ 
                scale: 1.1, 
                y: -10, 
                color: link.brandColor,
              }}
              
              // EFFETTO CLICK/TAP (Mobile & F12)
              whileTap={{ 
                scale: 0.9,
                rotate: index % 2 === 0 ? -3 : 3, // Rotazione dinamica al click
              }}
              
              className="group flex flex-col items-center gap-3 text-gray-500 transition-colors relative"
            >
              {/* Cerchio di luce che appare dietro l'icona al click/hover */}
              <motion.div 
                className="absolute inset-0 bg-current blur-2xl opacity-0 group-hover:opacity-20 group-active:opacity-40 transition-opacity rounded-full"
                style={{ color: link.brandColor }}
              />

              <link.icon className="w-10 h-10 md:w-12 md:h-12 relative z-10 transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] relative z-10">
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 text-gray-600 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} M SOLUTIONS. Crafted with Next.js & Gemini AI.
        </div>
      </div>
    </footer>
  );
};

export default Footer;