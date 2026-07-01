"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay so it doesn't pop up instantly on page load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    // Here you would initialize Google Analytics or other trackers
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:max-w-sm z-50 bg-slate-900/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-700 p-6 rounded-3xl shadow-2xl"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="text-3xl">🍪</div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1 tracking-tight">Rispettiamo la tua privacy</h4>
              <p className="text-slate-300 text-xs leading-relaxed font-medium">
                Utilizziamo i cookie per migliorare la tua esperienza di navigazione, analizzare il traffico del sito e per scopi di marketing. Cliccando su &quot;Accetta Tutti&quot;, acconsenti all&apos;uso dei cookie.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <button
              onClick={handleAccept}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded-xl transition-colors text-sm"
            >
              Accetta Tutti
            </button>
            <div className="flex gap-2">
              <button
                onClick={handleDecline}
                className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-300 font-bold py-2 rounded-xl transition-colors text-xs"
              >
                Rifiuta
              </button>
              <Link
                href="/cookie-policy"
                className="flex-1 flex justify-center items-center bg-transparent hover:bg-slate-800 text-slate-400 hover:text-white font-bold py-2 rounded-xl transition-colors text-xs"
              >
                Scopri di più
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
