"use client";
import { motion } from 'framer-motion';
import { SiLinkedin, SiGithub, SiWhatsapp, SiTelegram } from 'react-icons/si';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const socialLinks = [
  { name: 'LinkedIn', icon: SiLinkedin, href: 'https://www.linkedin.com/in/marco-cerilli', color: 'hover:text-[#0077B5]' },
  { name: 'GitHub', icon: SiGithub, href: 'https://github.com/MarcoCerilli', color: 'hover:text-white' },
  { name: 'WhatsApp', icon: SiWhatsapp, href: 'https://wa.me/3804291043', color: 'hover:text-[#25D366]' },
  { name: 'Email', icon: EnvelopeIcon, href: 'mailto:cerillimarco15@gmail.com', color: 'hover:text-indigo-400' },
];

const Footer = () => {
  return (
    <footer id="contatti" className="py-20 border-t border-gray-800 bg-gray-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          Pronto a fare il <span className="text-indigo-500">Level Up?</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Scegli la piattaforma che preferisci. Rispondo solitamente entro poche ore.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.2, y: -5 }}
              className={`flex flex-col items-center gap-3 text-gray-500 transition-colors ${link.color}`}
            >
              <link.icon className="w-10 h-10 md:w-12 md:h-12" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{link.name}</span>
            </motion.a>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-gray-900 text-gray-600 text-sm">
          © {new Date().getFullYear()} M SOLUTIONS 2025. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
};

export default Footer;