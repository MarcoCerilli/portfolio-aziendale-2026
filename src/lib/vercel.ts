import { DemoProduct, VercelEnvVar, VercelProject } from '@/types/vercel';

const VERCEL_API_TOKEN = process.env.VERCEL_API_TOKEN;

export async function getVercelProjects(): Promise<VercelProject[]> {
  if (!VERCEL_API_TOKEN) {
    console.warn('VERCEL_API_TOKEN is not defined');
    return [];
  }

  try {
    const res = await fetch('https://api.vercel.com/v9/projects', {
      headers: {
        Authorization: `Bearer ${VERCEL_API_TOKEN}`,
      },
      // Cache the response for 1 hour in production, no cache in dev
      next: { revalidate: process.env.NODE_ENV === 'development' ? 0 : 3600 },
    });

    if (!res.ok) {
      console.error('Failed to fetch Vercel projects', await res.text());
      return [];
    }

    const data = await res.json();
    return data.projects || [];
  } catch (error) {
    console.error('Error fetching Vercel projects:', error);
    return [];
  }
}

export async function getProjectEnvVars(project: VercelProject): Promise<VercelEnvVar[]> {
  if (!VERCEL_API_TOKEN) return [];

  try {
    let url = `https://api.vercel.com/v9/projects/${project.id}/env?target=production&decrypted=1`;
    if (project.teamId || project.accountId) {
      url += `&teamId=${project.teamId || project.accountId}`;
    }

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${VERCEL_API_TOKEN}` },
      next: { revalidate: process.env.NODE_ENV === 'development' ? 0 : 3600 },
    });

    if (!res.ok) return [];

    const data = await res.json();
    let envs: VercelEnvVar[] = data.envs || [];

    // Decrypt specific env vars individually if they are still encrypted
    const keysToDecrypt = ['DEMO_CATEGORY', 'DEMO_PRICE', 'DEMO_IMAGE', 'DEMO_FEATURES'];

    envs = await Promise.all(envs.map(async (env) => {
      if (keysToDecrypt.includes(env.key) && env.type === 'encrypted' && env.decrypted === false) {
        let decryptUrl = `https://api.vercel.com/v1/projects/${project.id}/env/${env.id}`;
        if (project.teamId || project.accountId) {
          decryptUrl += `?teamId=${project.teamId || project.accountId}`;
        }

        const decryptRes = await fetch(decryptUrl, {
          headers: { Authorization: `Bearer ${VERCEL_API_TOKEN}` },
          next: { revalidate: process.env.NODE_ENV === 'development' ? 0 : 3600 },
        });

        if (decryptRes.ok) {
          const decryptedData = await decryptRes.json();
          return { ...env, value: decryptedData.value };
        }
      }
      return env;
    }));

    return envs;
  } catch (error) {
    console.error(`Error fetching env vars for project ${project.name}:`, error);
    return [];
  }
}

export async function getDemoProducts(): Promise<DemoProduct[]> {
  const defaultDemos: DemoProduct[] = [
    {
      id: "demo-experience-app",
      name: "Experience App PWA",
      url: "https://experience-app-pi.vercel.app/",
      category: "Web App & PWA Custom",
      price: null,
      image: "/templates/experience.png",
      features: ["PWA Installabile (iOS/Android)", "Notifiche Push & Offline Cache", "Esperienza Utente App Native"]
    },
    {
      id: "demo-english-teacher",
      name: "English Teacher Website",
      url: "https://english-teacher-website-lemon.vercel.app",
      category: "Sito Vetrina Pro",
      price: null,
      image: "/templates/english.png",
      features: ["Piattaforma Corsi & Lezioni", "Prenotazione Calendario", "Sezione Testimonianze"]
    },
    {
      id: "demo-fatturazione-elettronica",
      name: "Fatturazione Elettronica",
      url: "https://sdi-invoice-generator.vercel.app/",
      category: "Web App & PWA Custom",
      price: null,
      image: "/templates/fattura.png",
      features: ["Gestione Fatture e Clienti", "Esportazione Dati XML/PDF", "Dashboard Contabile"]
    },
    {
      id: "demo-onoranze-ama",
      name: "Onoranze AMA",
      url: "https://onoranze-ama.vercel.app",
      category: "Sito Vetrina Pro",
      price: null,
      image: "/templates/onoranze.png",
      features: ["Catalogo Servizi Completo", "Form Contatto Inizio H24", "Ottimizzazione SEO Locale"]
    },
    {
      id: "demo-modern-store",
      name: "ModernStore E-Commerce",
      url: "https://modern-store-nine.vercel.app/",
      category: "E-commerce Pro",
      price: null,
      image: "/projects/ecommerce-clothing.jpg",
      features: ["Carrello e Checkout Stripe", "Gestione Inventario Prodotti", "Fast Performance Next.js"]
    },
    {
      id: "demo-bigmama",
      name: "Booking Engine — B&B Demo",
      url: "https://bigmamaterracina.it",
      category: "Booking Engine",
      price: null,
      image: "/projects/bigmama.png",
      features: ["Booking Engine Proprietario", "iCal Sync (Zero Overbooking)", "Pagamenti Diretti Stripe"]
    }
  ];

  return defaultDemos;
}
