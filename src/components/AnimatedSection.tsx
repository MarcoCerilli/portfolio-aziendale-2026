// src/components/AnimatedSection.tsx
"use client";
import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedSectionProps {
    children: ReactNode;
    delay?: number; // Opzionale per aggiungere un ritardo
    className?: string; // Per passare classi Tailwind
}

const variants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible" // Attiva l'animazione quando l'elemento è visibile
      viewport={{ once: true, amount: 0.2 }} // Animazione solo la prima volta, quando il 20% è visibile
      transition={{ delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;