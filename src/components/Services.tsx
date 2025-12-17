"use client";
import React from 'react';
import { motion } from 'framer-motion';

const servicesList = [
  { title: "Sviluppo Next.js", description: "Siti web ultra-veloci, headless e SEO-friendly." },
  { title: "Design UX/UI", description: "Interfacce coinvolgenti per massimizzare la conversione." },
  { title: "CMS Headless", description: "Gestione autonoma con Strapi, Contentful o Sanity." },
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
      {servicesList.map((service, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-b-4 border-indigo-500"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Services;