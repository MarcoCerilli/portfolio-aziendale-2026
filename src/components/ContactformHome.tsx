"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/marco-cerilli",
    color: "hover:text-[#0077B5] hover:border-[#0077B5]/50",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    href: "https://github.com/MarcoCerilli",
    color: "hover:text-white hover:border-white/40",
  },
  {
    name: "WhatsApp",
    icon: SiWhatsapp,
    href: "https://wa.me/393804291043?text=Ciao%20M%20Solutions%20IT,%20vorrei%20ricevere%20informazioni%20per%20un%20progetto.",
    color: "hover:text-[#25D366] hover:border-[#25D366]/50",
  },
  {
    name: "Email",
    icon: EnvelopeIcon,
    href: "mailto:cerillimarco15@gmail.com",
    color: "hover:text-indigo-400 hover:border-indigo-400/50",
  },
];

const ContactFormHome = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            y: -5,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          }}
          whileTap={{ scale: 0.95 }}
          // Stesso stile: bg-gray-900/60, rounded-2xl, border-white/10
          className={`flex items-center gap-4 px-8 py-5 bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-[2rem] text-gray-400 transition-all duration-300 ${social.color} group`}
        >
          <social.icon className="w-6 h-6 transition-transform duration-500 group-hover:rotate-[15deg]" />
          <span className="font-black uppercase tracking-[0.2em] text-[10px] text-white/80 group-hover:text-white">
            {social.name}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default ContactFormHome;