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
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          className="fixed bottom-[74px] right-5 md:bottom-[84px] md:right-6 z-[9999] w-12 h-12 rounded-full bg-white text-zinc-900 hover:bg-zinc-100 hover:text-black border border-zinc-300 shadow-2xl transition-all duration-200 flex items-center justify-center focus:outline-none cursor-pointer"
          aria-label="Torna in cima"
        >
          <ChevronUpIcon className="w-5 h-5 text-zinc-900" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
