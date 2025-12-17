// src/components/ContactForm.tsx
"use client";
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';

// Definizione del tipo per i dati del form
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Gestione dei cambiamenti nei campi del form
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Funzione di invio (Useremo la API Route qui)
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('loading');

    // 👇 QUI INVIAMO I DATI ALLA NOSTRA API ROUTE
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' }); // Reset del form
        } else {
            setStatus('error');
        }
    } catch (e) {
        console.error(e);
        setStatus('error');
    }
  };

  // Varianti di Framer Motion per l'animazione
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2, // Ritardo per l'animazione dei campi interni
        staggerChildren: 0.1, // Spaziatura tra le animazioni dei campi
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // Usa motion.div per animare l'intero contenitore all'ingresso
    <motion.div
      className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl border dark:border-gray-700"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Animazione quando l'elemento entra nella viewport
      viewport={{ once: true }} // Animazione solo la prima volta
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campi Form: usiamo motion.div per animare ogni singolo campo */}
        
        <motion.div variants={itemVariants}>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome Azienda/Contatto</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Descrivi il tuo progetto</label>
          <textarea 
            id="message" 
            name="message" 
            rows={4} 
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
          ></textarea>
        </motion.div>
        
        {/* Stato del form e Bottone (animato) */}
        <motion.div variants={itemVariants}>
            {status === 'loading' && <p className="text-indigo-600 dark:text-indigo-400">Invio in corso...</p>}
            {status === 'success' && <p className="text-green-600 font-semibold">✅ Richiesta inviata con successo! Ti contatteremo presto.</p>}
            {status === 'error' && <p className="text-red-600 font-semibold">❌ Errore durante l'invio. Riprova più tardi.</p>}

            <motion.button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                whileHover={{ scale: 1.02 }} // Animazione al passaggio del mouse sul bottone
                whileTap={{ scale: 0.98 }} // Animazione al click
                className={`w-full py-3 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-white transition duration-150 mt-4
                  ${status === 'loading' || status === 'success' 
                    ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`
                }
            >
              {status === 'loading' ? 'Invio...' : 'Invia Richiesta di Preventivo'}
            </motion.button>
        </motion.div>

      </form>
    </motion.div>
  );
};

export default ContactForm;