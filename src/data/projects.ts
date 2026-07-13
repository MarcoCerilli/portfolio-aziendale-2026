export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  category: "Siti Aziendali & SEO" | "Sistemi & App Su Misura";
  color: string;
  status: "online" | "demo" | "soon";
}

export const categories = ["Tutti", "Siti Aziendali & SEO", "Sistemi & App Su Misura"];

// Badge ricolorati per sfondo chiaro (testi più scuri e bordi più definiti)
export const getTagStyle = (tag: string) => {
  const t = tag.toLowerCase();
  if (t.includes("next.js")) return "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50";
  if (t.includes("ai") || t.includes("google") || t.includes("groq"))
    return "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/50";
  if (t.includes("wordpress") || t.includes("seo"))
    return "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/50";
  if (t.includes("stripe") || t.includes("fintech") || t.includes("b2b"))
    return "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/50";
  if (t.includes("laravel") || t.includes("php"))
    return "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800/50";
  if (t.includes("firebase") || t.includes("saas"))
    return "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800/50";
  return "bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700";
};

export const projectsList: Project[] = [
  {
    title: "Lazio Vela",
    description: "Piattaforma su misura con area riservata sicura. Progettata per prestazioni estreme e un'esperienza utente fluida e professionale.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel", "NextAuth"],
    link: "#",
    image: "/projects/laziovela.png",
    category: "Sistemi & App Su Misura",
    color: "from-blue-600/10",
    status: "soon",
  },
  {
    title: "Avvocato Anna Fusco (Official)",
    description: "Sito istituzionale che trasmette massima autorevolezza e fiducia. Ottimizzato per posizionare lo studio legale su Google e attirare nuovi clienti qualificati.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "Typescript"],
    link: "https://avvocatoannafusco.it",
    image: "/projects/avvocato.png",
    category: "Siti Aziendali & SEO",
    color: "from-slate-700/10",
    status: "online",
  },
  {
    title: "Mave Arredamenti",
    description: "Vetrina digitale immersiva che esalta i prodotti d'arredo. Navigazione fulminea e design studiato per guidare il visitatore verso la richiesta di preventivo.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://mavearredamenti.it",
    image: "/projects/mave.jpg", 
    category: "Siti Aziendali & SEO",
    color: "from-blue-500/10",
    status: "online",
  },
  {
    title: "Next.js Admin Dashboard",
    description: "Dashboard di gestione finanziaria completa: autenticazione, database PostgreSQL integrato e gestione dinamica delle fatture in tempo reale.",
    tags: ["Next.js", "PostgreSQL", "Auth.js", "Server Components"],
    link: "https://nextjs-dashboard-zeta-sooty-93.vercel.app/",
    image: "/projects/dashboard.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-blue-600/10",
    status: "demo",
  },
  {
    title: "Vivaio Paola Bartoli",
    description: "Identità digitale per un vivaio d'eccellenza. Catalogo dinamico e un assistente virtuale intelligente che aiuta i clienti a scegliere le piante perfette.",
    tags: ["Next.js", "Prisma", "Groq AI", "UploadThing"],
    link: "https://vivaiopaolabartoliterracina.it",
    image: "/projects/vivaio.jpg",
    category: "Siti Aziendali & SEO",
    color: "from-green-600/10",
    status: "online",
  },
  {
    title: "Il Quinto Polo Srls",
    description: "Piattaforma B2B personalizzata per l'ingrosso. Semplifica gli ordini dei rivenditori con listini riservati e integrazione diretta per ordini via WhatsApp.",
    tags: ["WordPress", "ACF Pro", "B2B E-commerce", "WhatsApp API"],
    link: "https://ilquintopolosrls.it",
    image: "/projects/quintopolo.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-green-700/10",
    status: "online",
  },
  {
    title: "ModernStore E-commerce",
    description: "Piattaforma e-commerce full-stack con Stripe. Gestione totale dello stock e pagamenti sicuri.",
    tags: ["Next.js", "Stripe", "Prisma"],
    link: "https://modern-store-nine.vercel.app/",
    image: "/projects/ecommerce-clothing.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-blue-600/10",
    status: "demo",
  },
  {
    title: "La Casetta nelle Mura",
    description: "Sito hospitality a Terracina. Ottimizzazione SEO per il posizionamento turistico e sistema di contatto diretto.",
    tags: ["WordPress", "SEO", "Hospitality"],
    link: "https://lacasettanellemura.it",
    image: "/projects/lacasetta.png",
    category: "Siti Aziendali & SEO",
    color: "from-amber-500/10",
    status: "online",
  },
  {
    title: "Real-time Shift Planner",
    description: "Sistema cloud per la gestione dei turni aziendali con sincronizzazione istantanea tra i dipendenti.",
    tags: ["React", "Firebase", "Real-time"],
    link: "https://gestioneturni-b1b21.web.app/",
    image: "/projects/turni.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-orange-500/10",
    status: "demo",
  },
  {
    title: "Idraulico Iona Bros",
    description: "Web App Next.js ottimizzata per il pronto intervento. Integra l'AI per gestire le richieste dei clienti in tempo reale.",
    tags: ["Next.js", "AI Integration", "Local SEO"],
    link: "#",
    image: "/projects/idraulico.jpg",
    category: "Siti Aziendali & SEO",
    color: "from-blue-500/10",
    status: "soon",
  },
  {
    title: "Studio Contabile Cittarelli",
    description: "Piattaforma per consulenza fiscale. Design moderno focalizzato sulla conversione e l'analisi smart dei documenti.",
    tags: ["Next.js", "Tailwind", "FinTech"],
    link: "#",
    image: "/projects/contabile.jpg",
    category: "Siti Aziendali & SEO",
    color: "from-emerald-500/10",
    status: "soon",
  },
  {
    title: "Gym Management SaaS",
    description: "Software gestionale cloud per centri sportivi. Automazione della segreteria e gestione abbonamenti (SaaS).",
    tags: ["Laravel", "Docker", "SaaS"],
    link: "#",
    image: "/projects/gym.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-purple-500/10",
    status: "demo",
  },
  {
    title: "Zecchi MultiServizi",
    description: "Landing page ad alta conversione progettata per generare contatti (lead generation). Design pulito e struttura persuasiva che trasforma i clic in richieste.",
    tags: ["Next.js", "Firebase", "TypeScript", "Shadcn UI"],
    link: "https://zecchimultiservizi.it",
    image: "/projects/zecchi.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-purple-500/10",
    status: "online",
  },
  {
    title: "LI Costruzioni",
    description: "Sito aziendale elegante per il settore edile. Mette in risalto i cantieri e la qualità del lavoro per attirare committenti alto-spendenti e nuovi progetti.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    link: "https://li-costruzionisrl.it",
    image: "/projects/li-costruzioni.jpg",
    category: "Sistemi & App Su Misura",
    color: "from-blue-500/10",
    status: "online",
  },
  {
    title: "Ermannotech Headless E-commerce",
    description: "Negozio online ultra-veloce progettato per massimizzare le vendite. Caricamenti istantanei e un'esperienza d'acquisto fluida che azzera gli abbandoni del carrello.",
    tags: ["Next.js", "Shopify", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://ermannotech.com",
    image: "/projects/ermannotech.png",
    category: "Sistemi & App Su Misura",
    color: "from-blue-500/10",
    status: "online",
  },
  {
    title: "Big Mama Terracina",
    description: "Sito per struttura ricettiva con sistema di prenotazione diretto. Aumenta i margini disintermediando dalle OTA e sincronizza automaticamente i calendari.",
    tags: ["Next.js", "Tailwind CSS", "iCal Sync", "Nodemailer"],
    link: "https://bigmamaterracina.it",
    image: "/projects/bigmama.png",
    category: "Sistemi & App Su Misura",
    color: "from-rose-500/10",
    status: "online",
  },
  {
    title: "Casa Vacanze Porta Maggio",
    description: "Sito per casa vacanze con booking engine custom. La gestione delle disponibilità avviene in tempo reale tramite sincronizzazione iCal, con invio di conferme automatiche via Nodemailer.",
    tags: ["Next.js", "Tailwind CSS", "iCal Sync", "Nodemailer"],
    link: "https://portamaggioterracina.it",
    image: "/projects/porta-maggio.png",
    category: "Sistemi & App Su Misura",
    color: "from-amber-500/10",
    status: "online",
  },
];
