"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { SiWhatsapp } from "react-icons/si";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Ciao! Sono l'assistente IA di M Solutions IT. Come posso aiutarti?",
      sender: "bot",
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, showChat]);

 const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages((prev) => [...prev, { text: userMsg, sender: "user" }]);
    setInput("");

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { text: data.text, sender: "bot" }]);
    } catch (err) {
      setMessages((prev) => [...prev, { 
        text: "Ops, qualcosa è andato storto con Gemini. Scrivimi su Whatsapp!", 
        sender: "bot" 
      }]);
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
            <div className="bg-indigo-600 p-4 text-white flex justify-between items-center">
              <div>
                <p className="font-black uppercase tracking-widest text-xs">
                  M Solutions AI
                </p>
                <p className="text-[10px] opacity-80">Sempre online</p>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {!showChat ? (
              /* Menu Scelte Rapide */
              <div className="p-6 flex flex-col justify-center h-full space-y-4">
                <p className="text-sm text-gray-300 text-center mb-2">
                  Come preferisci procedere?
                </p>
                <a
                  href="https://wa.me/393804291043"
                  target="_blank"
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition"
                >
                  <SiWhatsapp className="w-5 h-5" /> WhatsApp Rapido
                </a>
                <button
                  onClick={() => setShowChat(true)}
                  className="w-full bg-indigo-500 text-white py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-indigo-400 transition"
                >
                  Parla con l'IA ora
                </button>
              </div>
            ) : (
              /* Interfaccia Chat Funzionante */
              <>
                <div
                  ref={scrollRef}
                  className="flex-grow p-4 overflow-y-auto space-y-4 custom-scrollbar"
                >
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`flex ${
                        m.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                          m.sender === "user"
                            ? "bg-indigo-600 text-white rounded-tr-none"
                            : "bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700"
                        }`}
                      >
                        {m.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Field */}
                <form
                  onSubmit={handleSendMessage}
                  className="p-4 bg-gray-950 border-t border-gray-800 flex gap-2"
                >
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Scrivi qui..."
                    className="flex-grow bg-gray-900 border border-gray-700 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 p-2 rounded-xl text-white hover:bg-indigo-500"
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