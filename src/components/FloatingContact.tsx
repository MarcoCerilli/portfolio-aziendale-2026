import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";
import { XMarkIcon, PaperAirplaneIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
}

const quickOptions = [
  { label: "🚀 Richiedi Preventivo Gratuito", text: "Vorrei richiedere un preventivo gratuito per un nuovo sito web." },
  { label: "⚡ Tempi di Consegna & Prezzi", text: "Quali sono i tempi di consegna e i costi medi dei progetti?" },
  { label: "🛒 E-Commerce & Pagamenti", text: "Vorrei creare un negozio e-commerce con pagamenti Stripe/carte." },
  { label: "📞 Lascia un recapito per contatto", text: "Vorrei essere ricontattato via WhatsApp o email." },
];

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Ciao! 👋 Sono Marco, sviluppatore web. Come posso aiutarti per la tua attività o il tuo nuovo progetto?",
      time: "Adesso",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
      setTimeout(() => inputRef.current?.focus(), 250);
    };
    window.addEventListener("open-chat", handleOpenChat);
    return () => window.removeEventListener("open-chat", handleOpenChat);
  }, []);

  const handleSendMessage = (userText: string) => {
    if (!userText.trim()) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setIsTyping(true);

    // Risposta automatica contestuale in-app
    setTimeout(() => {
      let botReply = "Grazie per il messaggio! Per darti una stima immediata: che tipo di attività hai e quali funzionalità ti servono (sito vetrina, e-commerce o prenotazioni)?";
      
      const lower = userText.toLowerCase();
      if (lower.includes("preventivo") || lower.includes("costo") || lower.includes("prezzi")) {
        botReply = "I progetti partono da €490 (Landing / Vetrina Express) fino a soluzioni complete su misura. Tutti includono proprietà totale 100%, velocità sotto 0.8s e pannello di gestione autonomo. Scrivimi pure il tuo settore o lascia il tuo numero WhatsApp per ricevere la proposta dettagliata!";
      } else if (lower.includes("tempi") || lower.includes("consegna")) {
        botReply = "I tempi standard di consegna certificata sono tra i 5 e i 14 giorni lavorativi. Lavoriamo con roadmap chiara e revisioni incluse.";
      } else if (lower.includes("e-commerce") || lower.includes("shop") || lower.includes("negozio")) {
        botReply = "Realizziamo e-commerce ad altissime prestazioni con carrello veloce, sincronizzazione magazzino e checkout diretto Stripe senza canoni di agenzia mensili. Quali prodotti vorresti vendere?";
      } else if (lower.includes("recapito") || lower.includes("numero") || lower.includes("email") || lower.includes("contattato")) {
        botReply = "Perfetto! Lascia qui sotto il tuo numero di telefono o la tua email e ti ricontatterò entro poche ore con tutte le informazioni.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: botReply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 700);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  return (
    <aside aria-label="Chat di supporto in-app" className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-16 right-0 w-[calc(100vw-32px)] sm:w-[380px] max-w-[380px] rounded-3xl bg-white border border-zinc-200 shadow-2xl shadow-black/30 overflow-hidden flex flex-col z-50 text-zinc-900 select-none"
          >
            {/* Header Chat — Stile WhatsApp Ufficiale */}
            <div className="bg-[#008069] px-4 py-3.5 flex items-center justify-between text-white shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30 shrink-0">
                  <SiWhatsapp className="w-5 h-5 text-white" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#008069]" />
                </div>
                <div className="leading-tight">
                  <h4 className="font-bold text-sm text-white tracking-tight">Marco • Supporto Diretto</h4>
                  <p className="text-[11px] text-emerald-100 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Online • Risposta immediata
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Chiudi finestra chat"
                className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body — TEMA CHIARO INTERNO */}
            <div
              className="p-3.5 space-y-2.5 h-[280px] sm:h-[300px] overflow-y-auto bg-[#efeae2]"
              style={{
                backgroundImage: "radial-gradient(#d1d7db 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl p-3 text-[13px] leading-relaxed shadow-sm ${
                      m.sender === "user"
                        ? "bg-[#d9fdd3] text-[#111b21] rounded-tr-none"
                        : "bg-white text-[#111b21] rounded-tl-none border border-zinc-200/80"
                    }`}
                  >
                    <p className="font-normal">{m.text}</p>
                    <p className="text-[10px] text-zinc-400 mt-1 text-right font-medium">
                      {m.time}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm border border-zinc-200/80 flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
                    <ArrowPathIcon className="w-3.5 h-3.5 animate-spin text-emerald-600" />
                    <span>Sto scrivendo...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Pulsanti Rapidi di Scelta — Grid 2 Colonne Pulita e Spaziosa */}
            <div className="px-3 py-2 bg-slate-50 border-t border-zinc-200">
              <div className="grid grid-cols-2 gap-1.5">
                {quickOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(opt.text)}
                    className="text-left px-2.5 py-1.5 rounded-xl bg-white hover:bg-zinc-100 border border-zinc-200 text-[11px] font-semibold text-zinc-800 transition-all shadow-xs truncate hover:border-emerald-500 cursor-pointer"
                    title={opt.label}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Bar — TEMA CHIARO */}
            <form
              onSubmit={handleSubmit}
              className="p-2.5 bg-white border-t border-zinc-200 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Scrivi qui la tua richiesta..."
                className="flex-1 rounded-full bg-zinc-100 text-zinc-900 placeholder:text-zinc-500 text-xs sm:text-sm px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#008069] transition-all border border-zinc-200"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Invia messaggio"
                className="w-10 h-10 rounded-full bg-[#008069] hover:bg-[#006e5a] disabled:opacity-40 disabled:hover:bg-[#008069] text-white flex items-center justify-center shrink-0 transition-all shadow-md cursor-pointer disabled:cursor-not-allowed"
              >
                <PaperAirplaneIcon className="w-4 h-4 -rotate-45 ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button (Angolo in basso a destra) */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Chiudi chat" : "Apri chat"}
        className="relative w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-[#25D366]/40 border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        )}
        {isOpen ? (
          <XMarkIcon className="w-6 h-6 text-white" />
        ) : (
          <SiWhatsapp className="w-6 h-6 text-white" />
        )}
      </motion.button>
    </aside>
  );
};

export default FloatingContact;