"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { SiWhatsapp } from "react-icons/si";

// Interfaccia per la cronologia compatibile con Gemini SDK
interface GeminiHistoryItem {
  role: "user" | "model";
  parts: { text: string }[];
}

interface Message {
  text: string;
  sender: "user" | "bot";
}

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Stato per la memoria della conversazione
  const [geminiHistory, setGeminiHistory] = useState<GeminiHistoryItem[]>([]);

  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Ciao! Sono l'assistente IA di M Solutions IT. Come posso aiutarti?",
      sender: "bot",
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  //1.Apertura Automatica Chat
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      //riproduce un leggero suono di notifica
      const audio = new Audio(
        "https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3"
      );
      audio.volume = 0.2; //volume basso
      audio.play().catch((e) => console.log("Errore riproduzione audio:", e));
    }, 4000); //4 secondi
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll all'ultimo messaggio
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, showChat, loading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setMessages((prev) => [...prev, { text: userMsg, sender: "user" }]);
    setInput("");
    setTimeout(() => setLoading(true), 400); // Ritardo di 300ms prima di mostrare il caricamento

    try {
      // Chiamata all'API del bot passando la storia
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg,
          history: geminiHistory,
        }),
      });

      const data = await res.json();

      // Aggiungiamo la risposta del bot alla vista
      setMessages((prev) => [...prev, { text: data.text, sender: "bot" }]);

      // Aggiorniamo la memoria tecnica (limitandola agli ultimi 10 scambi per performance)
      setGeminiHistory((prev) => {
        const updated = [
          ...prev,
          { role: "user" as const, parts: [{ text: userMsg }] },
          { role: "model" as const, parts: [{ text: data.text }] },
        ];
        return updated.slice(-10);
      });
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Ops, qualcosa è andato storto. Scrivimi su Whatsapp!",
          sender: "bot",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999]">
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        // PARAMETRI COMPATTEZZA: w-72 (mobile) e w-80 (desktop), h-[380px]
        className="mb-3 bg-gray-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 w-72 md:w-80 overflow-hidden flex flex-col h-[380px]"
      >
        {/* Header ridotto */}
        <div className="bg-indigo-600 px-4 py-2.5 text-white flex justify-between items-center">
          <div className="leading-tight">
            <p className="font-bold uppercase tracking-tighter text-[9px]">M Solutions AI</p>
            <p className="text-[8px] opacity-80 flex items-center gap-1">
              <span className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></span>
              Online
            </p>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-md">
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>

        {!showChat ? (
          /* Menu Rapido compattato */
          <div className="p-4 flex flex-col justify-center h-full space-y-2.5">
            <p className="text-[10px] text-gray-400 text-center mb-1">Come posso aiutarti?</p>
            <a href="https://wa.me/393804291043" target="_blank"
               className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-lg font-bold text-[9px] uppercase tracking-widest hover:scale-[1.02] transition-transform">
              <SiWhatsapp className="w-3.5 h-3.5" /> WhatsApp
            </a>
            <button onClick={() => setShowChat(true)}
              className="bg-white/5 border border-white/10 text-white py-2.5 rounded-lg font-bold text-[9px] uppercase tracking-widest hover:bg-white/10 transition-colors">
              Chat IA
            </button>
          </div>
        ) : (
          /* Chat Area */
          <>
            <div ref={scrollRef} className="flex-grow p-3 overflow-y-auto space-y-3 bg-transparent text-[10.5px]">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] px-3 py-2 rounded-xl ${m.sender === "user" ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-200 border border-gray-700"}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            {/* Input compatto */}
            <form onSubmit={handleSendMessage} className="p-2 bg-gray-950/50 border-t border-white/5 flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Scrivi..."
                className="flex-grow bg-gray-900 border border-white/10 rounded-lg px-3 py-1.5 text-[10px] text-white focus:outline-none focus:border-indigo-500" />
              <button type="submit" disabled={loading} className="bg-indigo-600 p-1.5 rounded-lg text-white disabled:opacity-50">
                <PaperAirplaneIcon className="w-3.5 h-3.5" />
              </button>
            </form>
          </>
        )}
      </motion.div>
    )}
  </AnimatePresence>

  {/* Pulsante Floating ridotto */}
  <motion.button
    whileTap={{ scale: 0.9 }}
    onClick={() => { setIsOpen(!isOpen); if (isOpen) setShowChat(false); }}
    className="bg-indigo-600 p-3 rounded-full shadow-xl text-white flex items-center justify-center border border-white/20"
  >
    {isOpen ? <XMarkIcon className="w-5 h-5" /> : <ChatBubbleLeftRightIcon className="w-5 h-5" />}
  </motion.button>
</div>
  );
};

export default FloatingContact;