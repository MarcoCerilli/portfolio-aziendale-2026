export type ProjectCategory =
  | "Landing Page Custom"
  | "Mini Sito Express"
  | "Sito Vetrina Pro"
  | "E-commerce Pro"
  | "Booking Engine"
  | "Sistemi & App Su Misura";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  category: ProjectCategory;
  price: string;
  color: string;
  status: "online" | "demo" | "soon";
}

export const categories: ("Tutti" | ProjectCategory)[] = [
  "Tutti",
  "Landing Page Custom",
  "Mini Sito Express",
  "Sito Vetrina Pro",
  "E-commerce Pro",
  "Booking Engine",
  "Sistemi & App Su Misura",
];

// Tag badge classes — mapped to .tag-* classes safelisted in src/styles/safe.css
// (Tailwind v4 purges dynamically-built utility strings; semantic classes are always included)
export const getTagStyle = (tag: string): string => {
  const t = tag.toLowerCase();
  if (t.includes("astro") || t.includes("firebase") || t.includes("saas") || t.includes("roi") || t.includes("margine"))
    return "tag-orange";
  if (t.includes("react") || t.includes("wordpress") || t.includes("seo") || t.includes("hospitality"))
    return "tag-cyan";
  if (t.includes("next.js") || t.includes("typescript") || t.includes("mysql") || t.includes("booking"))
    return "tag-blue";
  if (t.includes("ai") || t.includes("google") || t.includes("groq") || t.includes("spa") || t.includes("menù") || t.includes("framer") || t.includes("motion"))
    return "tag-purple";
  if (t.includes("stripe") || t.includes("fintech") || t.includes("b2b") || t.includes("filtri") || t.includes("funnel"))
    return "tag-indigo";
  if (t.includes("laravel") || t.includes("php") || t.includes("carrello"))
    return "tag-red";
  return "tag-slate";
};

export const projectsList: Project[] = [
  {
    title: "Dimora Luxury Real Estate",
    description: "Portale luxury real estate con filtri multi-parametro, mappa interattiva geolocalizzata, calcolatore rata mutuo e modulo stima immobile per acquisizione mandati.",
    tags: ["React", "Tailwind CSS", "Filtri & Mappa", "Calcolatore Mutuo", "Stima Immobile"],
    link: "https://demo-tornesi-immobiliare.vercel.app",
    image: "/projects/demo-tornesi.jpg",
    category: "Sito Vetrina Pro",
    price: "Su preventivo",
    color: "from-indigo-600/10",
    status: "demo",
  },
  {
    title: "Aura Osteria Contemporanea",
    description: "Sito web esperienziale per fine dining e cucina d'autore: menù digitale interattivo con allergeni, percorsi degustazione con wine pairing e prenotazione tavoli online.",
    tags: ["React", "Tailwind CSS", "Booking Tavoli", "Menù Digitale", "Wine Pairing"],
    link: "https://demo-aura-osteria.vercel.app",
    image: "/projects/demo-aura.jpg",
    category: "Booking Engine",
    price: "Su preventivo",
    color: "from-amber-600/10",
    status: "demo",
  },
  {
    title: "Villa Seraphina Resort & SPA",
    description: "Piattaforma hospitality di lusso con booking engine interattivo, calcolo date check-in/out, selezione suite panoramiche ed esperienze benessere SPA.",
    tags: ["React", "Tailwind CSS", "Booking Engine", "Hospitality", "SPA & Wellness"],
    link: "https://demo-villa-seraphina-hotel.vercel.app",
    image: "/projects/demo-villa-seraphina.jpg",
    category: "Booking Engine",
    price: "Su preventivo",
    color: "from-cyan-600/10",
    status: "demo",
  },
  {
    title: "Montecarlo Specialty Coffee",
    description: "Mini e-commerce D2C veloce per torrefazione artigianale con carrello slide-over interattivo, barra progresso spedizione gratuita, selezione macinatura e codici sconto.",
    tags: ["React", "Tailwind CSS", "E-commerce D2C", "Carrello Slide-over", "Fast Checkout"],
    link: "https://demo-montecarlo-coffee.vercel.app",
    image: "/projects/demo-montecarlo-coffee.jpg",
    category: "E-commerce Pro",
    price: "Su preventivo",
    color: "from-amber-700/10",
    status: "demo",
  },
  {
    title: "ScaleFlow Studio",
    description: "Landing page ad alta conversione per agenzie e B2B con calcolatore ROI dinamico in tempo reale, funnel di qualificazione lead a 3 step e piani tariffari trasparenti.",
    tags: ["React", "Tailwind CSS", "Calcolatore ROI", "Lead Funnel 3-Step", "High Conversion"],
    link: "https://demo-scaleflow-landing.vercel.app",
    image: "/projects/demo-scaleflow.jpg",
    category: "Landing Page Custom",
    price: "Su preventivo",
    color: "from-purple-600/10",
    status: "demo",
  },
  {
    title: "QuickQuote Pro",
    description: "Web app modulare per software house e agenzie digitali: calcolo ore sviluppo, tariffe orarie, moltiplicatore complessità e visualizzazione marginalità netta.",
    tags: ["React", "Tailwind CSS", "SaaS Estimator", "Margine & Costi", "Dashboard Reattiva"],
    link: "https://demo-quickquote-app.vercel.app",
    image: "/projects/demo-quickquote.jpg",
    category: "Sistemi & App Su Misura",
    price: "Su preventivo",
    color: "from-blue-600/10",
    status: "demo",
  },
  {
    title: "Lazio Vela",
    description: "Piattaforma su misura con area riservata sicura per circolo velico. Progettata per prestazioni estreme e un'esperienza utente fluida e professionale.",
    tags: ["Astro", "Next.js", "TypeScript", "Tailwind", "Vercel"],
    link: "https://laziovela.it",
    image: "/projects/laziovela.png",
    category: "Sito Vetrina Pro",
    price: "Su preventivo",
    color: "from-blue-600/10",
    status: "online",
  },
  {
    title: "Studio Legale Fusco",
    description: "Sito istituzionale che trasmette massima autorevolezza e fiducia. Ottimizzato per posizionare lo studio legale su Google e attirare nuovi clienti qualificati.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "Typescript"],
    link: "https://avvocatoannafusco.it",
    image: "/projects/avvocato.png",
    category: "Sito Vetrina Pro",
    price: "Su preventivo",
    color: "from-slate-700/10",
    status: "online",
  },
  {
    title: "Mave Arredamenti",
    description: "Vetrina digitale immersiva che esalta i prodotti d'arredo. Navigazione fulminea e design studiato per guidare il visitatore verso la richiesta di preventivo.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://mavearredamenti.it",
    image: "/projects/mave.jpg",
    category: "Sito Vetrina Pro",
    price: "Su preventivo",
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
    price: "Su preventivo",
    color: "from-blue-600/10",
    status: "demo",
  },
  {
    title: "Vivaio Paola Bartoli",
    description: "Identità digitale per un vivaio d'eccellenza. Catalogo dinamico e un assistente virtuale intelligente che aiuta i clienti a scegliere le piante perfette.",
    tags: ["Next.js", "Prisma", "Groq AI", "UploadThing"],
    link: "https://vivaiopaolabartoliterracina.it",
    image: "/projects/vivaio.jpg",
    category: "Sito Vetrina Pro",
    price: "Su preventivo",
    color: "from-green-600/10",
    status: "online",
  },
  {
    title: "Il Quinto Polo Srls",
    description: "Piattaforma B2B personalizzata per l'ingrosso. Semplifica gli ordini dei rivenditori con listini riservati e integrazione diretta per ordini via WhatsApp.",
    tags: ["WordPress", "ACF Pro", "B2B E-commerce", "WhatsApp API"],
    link: "https://ilquintopolosrls.it",
    image: "/projects/quintopolo.jpg",
    category: "E-commerce Pro",
    price: "Su preventivo",
    color: "from-green-700/10",
    status: "online",
  },
  {
    title: "ModernStore E-commerce",
    description: "Piattaforma e-commerce full-stack con Stripe. Gestione totale dello stock e pagamenti sicuri.",
    tags: ["Next.js", "Stripe", "Prisma"],
    link: "https://modern-store-nine.vercel.app/",
    image: "/projects/ecommerce-clothing.jpg",
    category: "E-commerce Pro",
    price: "Su preventivo",
    color: "from-blue-600/10",
    status: "demo",
  },
  {
    title: "La Casetta nelle Mura",
    description: "Sito hospitality a Terracina sviluppato in Astro. Ottimizzazione SEO per il posizionamento turistico e sistema di contatto diretto. Performance 100/100 su PageSpeed.",
    tags: ["Astro", "Tailwind CSS", "SEO", "Hospitality"],
    link: "https://lacasettanellemura.it",
    image: "/projects/lacasetta.png",
    category: "Sito Vetrina Pro",
    price: "Su preventivo",
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
    price: "Su preventivo",
    color: "from-orange-500/10",
    status: "demo",
  },
  {
    title: "Idraulico Iona Bros",
    description: "Web App Next.js ottimizzata per il pronto intervento. Integra l'AI per gestire le richieste dei clienti in tempo reale.",
    tags: ["Next.js", "AI Integration", "Local SEO"],
    link: "https://iona-bros-idraulica.vercel.app/",
    image: "/projects/idraulico.jpg",
    category: "Sito Vetrina Pro",
    price: "Su preventivo",
    color: "from-blue-500/10",
    status: "online",
  },
  {
    title: "Gym Management SaaS",
    description: "Software gestionale cloud per centri sportivi. Automazione della segreteria e gestione abbonamenti (SaaS).",
    tags: ["Laravel", "Docker", "SaaS"],
    link: "#",
    image: "/projects/gym.jpg",
    category: "Sistemi & App Su Misura",
    price: "Su preventivo",
    color: "from-purple-500/10",
    status: "demo",
  },
  {
    title: "Zecchi MultiServizi",
    description: "Landing page ad alta conversione progettata per generare contatti (lead generation). Design pulito e struttura persuasiva che trasforma i clic in richieste.",
    tags: ["Next.js", "Firebase", "TypeScript", "Shadcn UI"],
    link: "https://zecchimultiservizi.it",
    image: "/projects/zecchi.jpg",
    category: "Landing Page Custom",
    price: "Su preventivo",
    color: "from-purple-500/10",
    status: "online",
  },
  {
    title: "LI Costruzioni",
    description: "Sito aziendale elegante per il settore edile. Mette in risalto i cantieri e la qualità del lavoro per attirare committenti alto-spendenti e nuovi progetti.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    link: "https://li-costruzionisrl.it",
    image: "/projects/li-costruzioni.jpg",
    category: "Sito Vetrina Pro",
    price: "Su preventivo",
    color: "from-blue-500/10",
    status: "online",
  },
  {
    title: "Ermannotech Headless E-commerce",
    description: "Negozio online ultra-veloce progettato per massimizzare le vendite. Caricamenti istantanei e un'esperienza d'acquisto fluida che azzera gli abbandoni del carrello.",
    tags: ["Next.js", "Shopify", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://ermannotech.com",
    image: "/projects/ermannotech.png",
    category: "E-commerce Pro",
    price: "Su preventivo",
    color: "from-blue-500/10",
    status: "online",
  },
  {
    title: "Big Mama Terracina",
    description: "Sito hospitality a Terracina con sistema di prenotazione diretto proprietario. Zero commissioni alle OTA, sincronizzazione iCal automatica e pagamenti diretti via Stripe.",
    tags: ["Next.js", "Tailwind CSS", "iCal Sync", "Stripe"],
    link: "https://bigmamaterracina.it",
    image: "/projects/bigmama.png",
    category: "Booking Engine",
    price: "Su preventivo",
    color: "from-indigo-500/10",
    status: "online",
  },
  {
    title: "Casa Vacanze Porta Maggio",
    description: "Sito per casa vacanze con booking engine custom. Gestione delle disponibilità in tempo reale tramite sincronizzazione iCal, notifiche e pagamenti diretti.",
    tags: ["Next.js", "Tailwind CSS", "iCal Sync", "Nodemailer", "Stripe"],
    link: "https://portamaggioterracina.it",
    image: "/projects/porta-maggio.png",
    category: "Booking Engine",
    price: "Su preventivo",
    color: "from-amber-500/10",
    status: "online",
  },
  {
    title: "English Teacher Website",
    description: "Piattaforma web interattiva per corsi e lezioni private d'inglese. Include calendario per la prenotazione delle lezioni e area risorse per gli studenti.",
    tags: ["Next.js", "Tailwind CSS", "Booking", "i18n"],
    link: "https://english-teacher-website.vercel.app",
    image: "/projects/english.png",
    category: "Sito Vetrina Pro",
    price: "Su preventivo",
    color: "from-blue-600/10",
    status: "demo",
  },
  {
    title: "Onoranze Funebri AMA",
    description: "Portale istituzionale con reperibilità H24, catalogo servizi integrato e ottimizzazione SEO per ricerche locali con assistenza immediata.",
    tags: ["Next.js", "Tailwind CSS", "Local SEO", "H24"],
    link: "https://onoranze-ama.vercel.app",
    image: "/projects/onoranze.png",
    category: "Sito Vetrina Pro",
    price: "Su preventivo",
    color: "from-slate-700/10",
    status: "demo",
  },
  {
    title: "Experience App",
    description: "Applicazione interattiva per la prenotazione e gestione di esperienze esclusive. UI moderna e flussi ottimizzati per massimizzare le conversioni.",
    tags: ["React", "Tailwind CSS", "Booking"],
    link: "#",
    image: "/projects/experience.jpg",
    category: "Sistemi & App Su Misura",
    price: "Su preventivo",
    color: "from-slate-700/10",
    status: "demo",
  },
  {
    title: "Fattura Elettronica App",
    description: "Software cloud per l'emissione, gestione e archiviazione delle fatture elettroniche con dashboard analitica in tempo reale.",
    tags: ["Next.js", "PostgreSQL", "SDI API"],
    link: "#",
    image: "/templates/fattura.png",
    category: "Sistemi & App Su Misura",
    price: "Su preventivo",
    color: "from-slate-700/10",
    status: "demo",
  },
];
