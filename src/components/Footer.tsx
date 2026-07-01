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
    <footer id="contatti" className="py-12 md:py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        {/* BLOCCO UNICO ACCATTIVANTE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-5xl bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[2rem] p-8 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Riflesso interno al blocco */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">
              Pronto a fare il <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Level Up?</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-xl mx-auto text-sm md:text-base">
              Scegli la piattaforma che preferisci. Rispondo solitamente entro poche ore.
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 md:mb-20">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  
                  // EFFETTO HOVER
                  whileHover={{ 
                    scale: 1.1, 
                    y: -10, 
                    color: link.brandColor,
                  }}
                  
                  // EFFETTO CLICK
                  whileTap={{ 
                    scale: 0.9,
                    rotate: index % 2 === 0 ? -3 : 3,
                  }}
                  
                  className="group flex flex-col items-center gap-3 text-slate-400 dark:text-slate-500 transition-colors relative"
                >
                  {/* Bagliore dietro l'icona */}
                  <motion.div 
                    className="absolute inset-0 bg-current blur-2xl opacity-0 group-hover:opacity-20 transition-opacity rounded-full"
                    style={{ color: link.brandColor }}
                  />

                  <link.icon className="w-10 h-10 md:w-12 md:h-12 relative z-10 transition-transform duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" />
                  
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] relative z-10 group-hover:text-slate-800 dark:group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* SEZIONE INFERIORE DEL BLOCCO: COPYRIGHT, PARTITA IVA E LEGALI */}
            <div className="pt-8 border-t border-slate-100 dark:border-slate-800/60 flex flex-col md:flex-row justify-between items-center text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium gap-4">
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                <span>© {new Date().getFullYear()} M SOLUTIONS WEB.</span>
                <div className="flex items-center gap-4 text-xs">
                  <a href="/privacy-policy" className="hover:text-indigo-500 transition-colors">Privacy Policy</a>
                  <a href="/cookie-policy" className="hover:text-indigo-500 transition-colors">Cookie Policy</a>
                </div>
              </div>
              <div className="text-center md:text-right bg-slate-50 dark:bg-slate-800/50 px-4 py-2 rounded-full border border-slate-100 dark:border-slate-700">
                P. IVA: <span className="font-bold text-slate-700 dark:text-slate-200">03378710598</span> - Marco Cerilli
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;