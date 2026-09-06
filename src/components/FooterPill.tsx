import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HomeIcon,
  FolderIcon,
  ComputerDesktopIcon,
  CurrencyEuroIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeSolid,
  FolderIcon as FolderSolid,
  ComputerDesktopIcon as DesktopSolid,
  CurrencyEuroIcon as EuroSolid,
} from "@heroicons/react/24/solid";

interface FooterItem {
  id: string;
  name: string;
  href: string;
  icon: React.ElementType;
  activeIcon: React.ElementType;
}

const items: FooterItem[] = [
  { id: "top", name: "Home", href: "#", icon: HomeIcon, activeIcon: HomeSolid },
  { id: "progetti", name: "Progetti", href: "#progetti", icon: FolderIcon, activeIcon: FolderSolid },
  { id: "demo", name: "Demo", href: "#demo", icon: ComputerDesktopIcon, activeIcon: DesktopSolid },
  { id: "pacchetti", name: "Tariffe", href: "#pacchetti", icon: CurrencyEuroIcon, activeIcon: EuroSolid },
];

export default function FooterPill() {
  const [activeSection, setActiveSection] = useState("top");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // When user has scrolled down past top of page, shrink
      setIsScrolled(currentScrollY > 60);

      // Active scroll detection
      setIsScrolling(true);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 700);

      // Detect active section
      const sections = ["pacchetti", "demo", "progetti"];
      let found = "top";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            found = sectionId;
            break;
          }
        }
      }
      setActiveSection(found);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  // When scrolling or scrolled down, it is shrunk!
  const isCollapsed = isScrolled || isScrolling;

  const handleOpenChat = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event("open-chat"));
  };

  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 flex justify-center px-2 pointer-events-none pb-[max(0.75rem,env(safe-area-inset-bottom,0.75rem))]"
      style={{
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom, 0.75rem))",
      }}
    >
      <motion.nav
        aria-label="Barra rapida inferiore"
        layout
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
        className={`pointer-events-auto relative flex items-center justify-center rounded-full border border-zinc-200/90 bg-white/95 backdrop-blur-2xl shadow-2xl shadow-black/25 text-zinc-900 transition-all duration-300 max-w-[calc(100vw-16px)] ${
          isCollapsed ? "px-1.5 py-1 gap-0.5" : "px-2.5 py-1.5 gap-1"
        }`}
      >
        {items.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = isActive ? item.activeIcon : item.icon;

          return (
            <a
              key={item.id}
              href={item.href}
              className={`relative flex items-center gap-1 rounded-full transition-all duration-200 justify-center select-none ${
                isCollapsed ? "min-w-[32px] h-8 px-1.5" : "min-w-[36px] h-8.5 px-2"
              } ${
                isActive
                  ? "text-white font-bold"
                  : "text-zinc-600 hover:text-zinc-950 active:bg-zinc-100"
              }`}
              aria-label={item.name}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFooterPill"
                  className="absolute inset-0 rounded-full bg-zinc-950 shadow-sm -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <Icon className="w-4 h-4 shrink-0" />
              {/* Only show text label for active item when NOT collapsed */}
              <AnimatePresence>
                {!isCollapsed && isActive && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.15 }}
                    className="overflow-hidden whitespace-nowrap text-[10px] font-bold tracking-tight"
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </a>
          );
        })}

        {/* Separator */}
        <div className="h-4 w-px bg-zinc-200 mx-0.5" />

        {/* Chat / WhatsApp Action Button */}
        <button
          type="button"
          onClick={handleOpenChat}
          aria-label="Apri chat di contatto rapido"
          className={`relative flex items-center justify-center gap-1 rounded-full bg-[#008069] active:bg-[#006e5a] text-white font-bold shadow-md shadow-[#008069]/30 transition-all cursor-pointer select-none ${
            isCollapsed ? "min-w-[32px] h-8 px-1.5" : "min-w-[36px] h-8.5 px-2.5"
          }`}
        >
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-200" />
          </span>
          <ChatBubbleBottomCenterTextIcon className="w-4 h-4 shrink-0" />
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.15 }}
                className="overflow-hidden whitespace-nowrap text-[10px] font-bold tracking-tight"
              >
                Chat
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </motion.nav>
    </div>
  );
}
