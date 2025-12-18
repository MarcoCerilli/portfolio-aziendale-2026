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
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-gray-900/95 backdrop-blur-xl p-0 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-indigo-500/30 w-80 md:w-96 overflow-hidden flex flex-col h-[450px]"
          >
            {/* Header Chat */}
            <div className="bg-indigo-600 p-4 text-white flex justify-between items-center shadow-lg">
              <div>
                <p className="font-black uppercase tracking-widest text-[10px]">
                  M Solutions AI
                </p>
                <p className="text-[9px] opacity-80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Disponibile ora (v2.5)
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:rotate-90 transition-transform"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {!showChat ? (
              /* Menu Scelte Rapide */
              <div className="p-6 flex flex-col justify-center h-full space-y-4">
                <p className="text-xs text-gray-300 text-center mb-2 font-medium">
                  Come preferisci procedere?
                </p>

                <a
                  href="https://wa.me/393804291043"
                  target="_blank"
                  className="relative group flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-all duration-300 overflow-hidden shadow-lg shadow-green-500/20"
                >
                  <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                  <SiWhatsapp className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">WhatsApp Rapido</span>
                </a>

                <button
                  onClick={() => setShowChat(true)}
                  className="relative group flex items-center justify-center gap-3 w-full bg-indigo-500 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-indigo-400 transition-all duration-300 overflow-hidden shadow-lg shadow-indigo-500/20"
                >
                  <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                  <span className="relative z-10">Parla con l'IA ora</span>
                </button>
              </div>
            ) : (
              /* Interfaccia Chat Funzionante */
              <>
                <div
                  ref={scrollRef}
                  className="flex-grow p-4 overflow-y-auto space-y-4 custom-scrollbar bg-gray-900/50"
                >
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`flex ${
                        m.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] p-3 rounded-2xl text-[11px] leading-relaxed shadow-sm ${
                          m.sender === "user"
                            ? "bg-indigo-600 text-white rounded-tr-none"
                            : "bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700"
                        }`}
                      >
                        {m.text}
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-800 text-gray-400 px-3 py-2 rounded-2xl text-[10px] animate-pulse border border-gray-700">
                        M Solutions sta scrivendo...
                      </div>
                    </div>
                  )}
                </div>

                <form
                  onSubmit={handleSendMessage}
                  className="p-3 bg-gray-950 border-t border-gray-800 flex gap-2"
                >
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Chiedimi dei servizi o prezzi..."
                    className="flex-grow bg-gray-900 border border-gray-700 rounded-xl px-4 py-2 text-[11px] text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-indigo-600 p-2.5 rounded-xl text-white hover:bg-indigo-500 disabled:opacity-50 transition-all shadow-lg shadow-indigo-500/20"
                  >
                    <PaperAirplaneIcon className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        // Animazione pulsante quando la chat è chiusa
        animate={
          !isOpen
            ? {
                boxShadow: [
                  "0px 0px 0px 0px rgba(79, 70, 229, 0)",
                  "0px 0px 0px 10px rgba(79, 70, 229, 0.2)",
                  "0px 0px 0px 0px rgba(79, 70, 229, 0)",
                ],
              }
            : {}
        }
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => {
          setIsOpen(!isOpen);
          if (isOpen) setShowChat(false);
        }}
        className="bg-indigo-600 p-4 rounded-full shadow-2xl text-white flex items-center justify-center ring-4 ring-indigo-500/20"
      >
        {isOpen ? (
          <XMarkIcon className="w-8 h-8" />
        ) : (
          <ChatBubbleLeftRightIcon className="w-8 h-8" />
        )}
      </motion.button>
    </div>
  );
};

export default FloatingContact;
