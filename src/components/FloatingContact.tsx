import { useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";

const FloatingContact = () => {
  useEffect(() => {
    const handleOpenChat = () => {
      window.open(
        "https://wa.me/393804291043?text=Ciao%20Marco,%20vorrei%20informazioni%20per%20un%20progetto%20web",
        "_blank",
        "noopener,noreferrer"
      );
    };
    window.addEventListener("open-chat", handleOpenChat);
    return () => window.removeEventListener("open-chat", handleOpenChat);
  }, []);

  return (
    <aside aria-label="Contatto rapido WhatsApp">
      <a
        href="https://wa.me/393804291043?text=Ciao%20Marco,%20vorrei%20informazioni%20per%20un%20progetto%20web"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattami direttamente su WhatsApp"
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[9999] w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-[#25D366]/40 border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        <SiWhatsapp className="w-6 h-6 text-white" />
      </a>
    </aside>
  );
};

export default FloatingContact;