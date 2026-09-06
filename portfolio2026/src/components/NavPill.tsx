import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SparklesIcon,
  FolderIcon,
  ComputerDesktopIcon,
  CurrencyEuroIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: "Progetti", href: "#progetti", icon: FolderIcon },
  { name: "Demo Live", href: "#demo", icon: ComputerDesktopIcon },
  { name: "Tariffe", href: "#pacchetti", icon: CurrencyEuroIcon },
];

export default function NavPill() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY + 5) {
          setScrollDirection("down");
        } else if (currentScrollY < lastScrollY - 5) {
          setScrollDirection("up");
        }
      } else {
        setIsScrolled(false);
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Is collapsed when scrolled down and not hovered
  const isCollapsed = isScrolled && scrollDirection === "down" && !isHovered;

  const handleOpenChat = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event("open-chat"));
  };

  return (
    <header className="md:hidden fixed top-[max(0.75rem,env(safe-area-inset-top,0.75rem))] inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        aria-label="Navigazione principale"
        layout
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
        className={`pointer-events-auto relative flex items-center justify-between gap-2 rounded-full border border-zinc-200/90 bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/25 text-zinc-900 transition-all duration-300 ${
          isCollapsed
            ? "px-3.5 py-2 max-w-xs"
            : "px-4 py-2.5 max-w-sm w-full"
        }`}
      >
        {/* Brand / Avatar */}
        <a
          href="/"
          className="group flex items-center gap-2 shrink-0 focus:outline-none"
          aria-label="Torna all'inizio"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-zinc-950 text-white font-black text-xs shadow-md group-hover:scale-105 transition-transform">
            M
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
          </div>
          <motion.div
            layout
            className={`flex flex-col text-left transition-all ${
              isCollapsed ? "hidden" : "flex"
            }`}
          >
            <span className="text-xs font-black tracking-tight text-zinc-900 leading-none">
              M Solutions
            </span>
            <span className="text-[10px] text-zinc-500 font-medium leading-tight">
              Senior Web Dev
            </span>
          </motion.div>
        </a>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Quick Chat / Preventivo CTA */}
          <button
            type="button"
            onClick={handleOpenChat}
            className={`flex items-center gap-1.5 rounded-full bg-zinc-900 hover:bg-black text-white font-bold text-xs shadow-md transition-all cursor-pointer ${
              isCollapsed ? "px-3 py-1.5" : "px-3.5 py-1.5"
            }`}
          >
            <SparklesIcon className="w-3.5 h-3.5 text-white" />
            <span>Preventivo</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu navigazione"
            className="flex items-center justify-center h-8 w-8 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-800 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-4 h-4 text-zinc-900" />
            ) : (
              <Bars3Icon className="w-4 h-4 text-zinc-900" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-auto absolute top-full mt-2 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-zinc-200 bg-white/95 p-3 backdrop-blur-2xl shadow-2xl shadow-black/25 text-zinc-900"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold text-zinc-800 hover:bg-zinc-100 transition-colors"
                  >
                    <Icon className="h-4 w-4 text-zinc-500" />
                    {item.name}
                  </a>
                );
              })}
              <div className="border-t border-zinc-200 my-1 pt-1" />
              <button
                type="button"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleOpenChat(e);
                }}
                className="flex items-center justify-center gap-2 rounded-xl bg-zinc-900 hover:bg-black px-3 py-2.5 text-xs font-bold text-white transition-colors cursor-pointer"
              >
                <SparklesIcon className="w-4 h-4 text-white" />
                Richiedi Preventivo Gratuito
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
