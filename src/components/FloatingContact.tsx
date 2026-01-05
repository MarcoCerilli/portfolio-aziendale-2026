"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
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
  const [showChat, setShowChat] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [geminiHistory, setGeminiHistory] = useState<GeminiHistoryItem[]>([]);

  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Ciao! Come posso aiutarti?",
      sender: "bot",
    },
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
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, history: geminiHistory }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { text: data.text, sender: "bot" }]);
      setGeminiHistory((prev) => [...prev, 
        { role: "user" as const, parts: [{ text: userMsg }] },
        { role: "model" as const, parts: [{ text: data.text }] }
      ].slice(-10));
    } catch (err) {
      setMessages((prev) => [...prev, { text: "Errore. Usa Whatsapp!", sender: "bot" }]);
    } finally {
      setLoading(false);
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
            // FINESTRA PIÙ LARGA (w-80) E PIÙ BASSA (h-[300px])
            className="mb-3 bg-gray-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 w-72 md:w-80 overflow-hidden flex flex-col h-[300px]"
          >
            {/* Header con testi leggibili */}
            <div className="bg-indigo-600 px-4 py-2 text-white flex justify-between items-center">
              <div className="leading-tight">
                <p className="font-bold uppercase tracking-tight text-[11px]">M Solutions AI</p>
                <p className="text-[10px] opacity-90 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online
                </p>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-md">
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {!showChat ? (
              /* Menu Rapido Schiacciato */
              <div className="p-4 flex flex-col justify-center h-full space-y-3">
                <a href="https://wa.me/393804291043" target="_blank"
                   className={`${shimmerEffect} flex items-center justify-center gap-3 bg-[#25D366] text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg shadow-green-500/20`}>
                  <SiWhatsapp className="w-4 h-4" /> WhatsApp
                </a>

                <button onClick={() => setShowChat(true)}
                  className={`${shimmerEffect} bg-indigo-600 text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20`}>
                  Inizia Chat IA
                </button>
              </div>
            ) : (
              /* Chat Area con font più grandi (text-sm/text-xs) */
              <>
                <div ref={scrollRef} className="flex-grow p-3 overflow-y-auto space-y-2.5 bg-transparent">
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[85%] px-3 py-2 rounded-2xl text-[13px] leading-snug ${m.sender === "user" ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-100 border border-gray-700"}`}>
                        {m.text}
                      </div>
                    </div>
                  ))}
                  {loading && <div className="text-[10px] text-indigo-400 font-bold animate-pulse">Scrivendo...</div>}
                </div>
                
                <form onSubmit={handleSendMessage} className="p-2 bg-gray-950/50 border-t border-white/10 flex gap-2">
                  <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Scrivi qui..."
                    className="flex-grow bg-gray-900 border border-white/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 placeholder:text-gray-500" />
                  <button type="submit" disabled={loading} className="bg-indigo-600 p-2.5 rounded-xl text-white disabled:opacity-50 hover:bg-indigo-500">
                    <PaperAirplaneIcon className="w-5 h-5" />
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
        onClick={() => { setIsOpen(!isOpen); if (isOpen) setShowChat(false); }}
        className="bg-indigo-600 p-3.5 rounded-full shadow-2xl text-white flex items-center justify-center border border-white/20"
      >
        {isOpen ? <XMarkIcon className="w-6 h-6" /> : <ChatBubbleLeftRightIcon className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};

export default FloatingContact;