import { useState, useEffect } from "react";

import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 10 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[9999] p-3 rounded-full bg-indigo-600 text-white shadow-xl shadow-indigo-600/30 border border-white/20 flex items-center justify-center focus:outline-none"
          aria-label="Torna in cima"
        >
          <ChevronUpIcon className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
