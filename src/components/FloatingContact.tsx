"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  ArrowLeftIcon
} from "@heroicons/react/24/solid";
import { SiWhatsapp } from "react-icons/si";

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
  const [chatMode, setChatMode] = useState<"menu" | "whatsapp" | "ai">("menu");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [geminiHistory, setGeminiHistory] = useState<GeminiHistoryItem[]>([]);

  const [aiMessages, setAiMessages] = useState<Message[]>([
    { text: "Ciao! Sono l'assistente IA di M Solutions. Come posso aiutarti?", sender: "bot" },
  ]);
  
  const [waMessages, setWaMessages] = useState<Message[]>([
    { text: "Ciao! Scrivi qui il tuo messaggio e verrai reindirizzato a WhatsApp per inviarlo direttamente a Marco.", sender: "bot" },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3");
      audio.volume = 0.1;
      audio.play().catch((e) => console.log("Errore audio:", e));
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
      setChatMode("whatsapp"); // Default to WhatsApp when called from external buttons
    };
    window.addEventListener("open-chat", handleOpenChat);
    return () => window.removeEventListener("open-chat", handleOpenChat);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [aiMessages, waMessages, chatMode, loading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    
    if (chatMode === "whatsapp") {
      setWaMessages((prev) => [...prev, { text: userMsg, sender: "user" }]);
      setInput("");
      setTimeout(() => {
        window.open(`https://wa.me/393804291043?text=${encodeURIComponent(userMsg)}`, "_blank");
      }, 500);
      return;
    }

    if (chatMode === "ai") {
      setAiMessages((prev) => [...prev, { text: userMsg, sender: "user" }]);
      setInput("");
      setLoading(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMsg, history: geminiHistory }),
        });
        const data = await res.json();
        setAiMessages((prev) => [...prev, { text: data.text, sender: "bot" }]);
        setGeminiHistory((prev) => [...prev, 
          { role: "user" as const, parts: [{ text: userMsg }] },
          { role: "model" as const, parts: [{ text: data.text }] }
        ].slice(-10));
      } catch {
        setAiMessages((prev) => [...prev, { text: "Errore di connessione.", sender: "bot" }]);
      } finally {
        setLoading(false);
      }
    }
  };

  const shimmerEffect = "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent";

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999]">
      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>

      <AnimatePresence>
        {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="mb-3 bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 w-72 md:w-80 overflow-hidden flex flex-col h-[380px]"
            >
            
            {/* Header Dinamico */}
            {chatMode === "menu" && (
              <div className="bg-slate-900 px-4 py-3 text-white flex justify-between items-center shadow-md z-10">
                <div className="leading-tight">
                  <p className="font-bold tracking-tight text-[13px]">Supporto & Contatti</p>
                  <p className="text-[10px] opacity-90">Scegli come contattarci</p>
                </div>
                <button onClick={() => setIsOpen(false)} aria-label="Chiudi" className="p-1.5 hover:bg-white/20 rounded-md transition-colors">
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            )}
            
            {chatMode === "whatsapp" && (
              <div className="bg-[#075E54] px-4 py-3 text-white flex justify-between items-center shadow-md z-10">
                <div className="flex items-center gap-2">
                  <button onClick={() => setChatMode("menu")} className="p-1 hover:bg-white/20 rounded-md -ml-2">
                    <ArrowLeftIcon className="w-4 h-4" />
                  </button>
                  <SiWhatsapp className="w-5 h-5 text-green-400" />
                  <div className="leading-tight">
                    <p className="font-bold tracking-tight text-[13px]">WhatsApp</p>
                    <p className="text-[10px] opacity-90 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/20 rounded-md transition-colors">
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            )}

            {chatMode === "ai" && (
              <div className="bg-indigo-600 px-4 py-3 text-white flex justify-between items-center shadow-md z-10">
                <div className="flex items-center gap-2">
                  <button onClick={() => setChatMode("menu")} className="p-1 hover:bg-white/20 rounded-md -ml-2">
                    <ArrowLeftIcon className="w-4 h-4" />
                  </button>
                  <SparklesIcon className="w-5 h-5 text-indigo-300" />
                  <div className="leading-tight">
                    <p className="font-bold tracking-tight text-[13px]">Assistente IA</p>
                    <p className="text-[10px] opacity-90 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-indigo-300 rounded-full animate-pulse"></span> AI Gemini 
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/20 rounded-md transition-colors">
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            )}

            {chatMode === "menu" ? (
              <div className="p-6 flex flex-col justify-center h-full space-y-4 bg-slate-50 dark:bg-slate-900/50">
                <button onClick={() => setChatMode("whatsapp")}
                   className={`${shimmerEffect} flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl font-black text-[13px] uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg shadow-green-500/20`}>
                  <SiWhatsapp className="w-5 h-5" /> Invia WhatsApp
                </button>

                <button onClick={() => setChatMode("ai")}
                  className={`${shimmerEffect} flex items-center justify-center gap-3 bg-indigo-600 text-white py-4 rounded-xl font-black text-[13px] uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg shadow-indigo-500/20`}>
                  <SparklesIcon className="w-5 h-5" /> Chat con IA
                </button>
              </div>
            ) : (
              <>
                <div 
                  ref={scrollRef} 
                  className={`flex-grow p-3 overflow-y-auto space-y-2.5 relative ${chatMode === "ai" ? "bg-slate-50 dark:bg-slate-900" : ""}`}
                  style={chatMode === "whatsapp" ? { backgroundColor: "#efeae2", backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "overlay" } : {}}
                >
                  {(chatMode === "whatsapp" ? waMessages : aiMessages).map((m, i) => (
                    <div key={i} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[85%] px-3 py-2 rounded-xl text-[13px] leading-snug shadow-sm ${
                        chatMode === "whatsapp" 
                          ? m.sender === "user" ? "bg-[#d9fdd3] text-[#111b21] rounded-tr-none" : "bg-white text-[#111b21] rounded-tl-none"
                          : m.sender === "user" ? "bg-indigo-600 text-white rounded-tr-none" : "bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-tl-none border border-slate-100 dark:border-slate-700"
                      }`}>
                        {m.text}
                      </div>
                    </div>
                  ))}
                  {loading && <div className="text-[10px] text-indigo-400 font-bold animate-pulse">L&apos;IA sta scrivendo...</div>}
                </div>
                
                <form onSubmit={handleSendMessage} className={`p-2 flex gap-2 items-center ${chatMode === "whatsapp" ? "bg-[#f0f2f5] dark:bg-[#202c33]" : "bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800"}`}>
                  <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Scrivi un messaggio..."
                    className={`flex-grow rounded-full px-4 py-2.5 text-[14px] focus:outline-none placeholder:text-gray-500 shadow-sm ${
                      chatMode === "whatsapp" ? "bg-white dark:bg-[#2a3942] text-slate-900 dark:text-white" : "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white"
                    }`} />
                  <button type="submit" disabled={loading} className={`p-2.5 rounded-full text-white disabled:opacity-50 shadow-sm transition-colors flex-shrink-0 ${
                    chatMode === "whatsapp" ? "bg-[#00a884] hover:bg-[#008f6f]" : "bg-indigo-600 hover:bg-indigo-700"
                  }`}>
                    <PaperAirplaneIcon className="w-5 h-5 -rotate-45 ml-1" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => { setIsOpen(!isOpen); if (isOpen) setChatMode("menu"); }}
        aria-label={isOpen ? "Chiudi finestra" : "Apri chat e contatti"}
        className="bg-indigo-600 p-4 rounded-full shadow-2xl text-white flex items-center justify-center border border-white/20"
      >
        {isOpen ? <XMarkIcon className="w-6 h-6" /> : <ChatBubbleLeftRightIcon className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};

export default FloatingContact;