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

import categorizedProjects from '../../progetti_categorizzati.json';
import { projectsList } from '@/data/projects';

export async function getDemoProducts(): Promise<DemoProduct[]> {
  const projects = await getVercelProjects();
  const demoProducts: DemoProduct[] = [];

  const allowedDemoKeywords = ['experience', 'fatturazione', 'ama', 'modernstore', 'prostore', 'englishteacher', 'english'];

  // Fetch env vars for all projects in parallel
  await Promise.all(
    projects.map(async (project) => {
      const pNameLower = project.name.toLowerCase().replace(/[-_]/g, '');
      if (pNameLower.includes('payback')) return;

      const isAllowedDemo = allowedDemoKeywords.some(k => pNameLower.includes(k));

      // Exclude ANY project that exists in homepage projectsList unless explicitly allowed demo
      const inPortfolioList = projectsList.some((p) => {
        const pTitle = p.title.toLowerCase().replace(/[-_\s]/g, '');
        return pNameLower.includes(pTitle) || pTitle.includes(pNameLower);
      });

      const inCategorized = categorizedProjects.some((cp) => {
        const cpName = cp.name.toLowerCase().replace(/[-_]/g, '');
        const cpRepo = cp.repo.toLowerCase().replace(/[-_]/g, '');
        return pNameLower === cpName || pNameLower === cpRepo;
      });

      if ((inPortfolioList || inCategorized) && !isAllowedDemo) return;

      const envs = await getProjectEnvVars(project);
      
      let category = envs.find((e) => e.key === 'DEMO_CATEGORY')?.value || null;
      if (!category) {
        if (pNameLower.includes('experience')) category = 'Mini Sito Express';
        else if (pNameLower.includes('fatturazione')) category = 'Web App & PWA Custom';
        else if (pNameLower.includes('ama') || pNameLower.includes('english')) category = 'Sito Vetrina Pro';
        else if (pNameLower.includes('modernstore') || pNameLower.includes('prostore')) category = 'E-commerce Pro';
      }

      if (category || isAllowedDemo) {
        const priceEnv = envs.find((e) => e.key === 'DEMO_PRICE');
        const featuresEnv = envs.find((e) => e.key === 'DEMO_FEATURES');

        // Impostiamo senza foto (coming-soon.svg) per ora come richiesto
        const finalImage = '/projects/coming-soon.svg';
        
        let numericPrice: number | null = priceEnv && priceEnv.value ? parseFloat(priceEnv.value) : null;
        if (!numericPrice) {
          if (category === 'Mini Sito Express') numericPrice = 299;
          else if (category === 'Sito Vetrina Pro') numericPrice = 499;
          else if (category === 'Web App & PWA Custom') numericPrice = 799;
          else if (category === 'E-commerce Pro') numericPrice = 1199;
        }

        // Determine the live URL
        let url = '';
        if (project.targets?.production?.url) {
           url = `https://${project.targets.production.url}`;
        } else if (project.latestDeployments && project.latestDeployments.length > 0) {
           url = `https://${project.latestDeployments[0].url}`;
        } else {
           url = `https://${project.name}.vercel.app`;
        }

        demoProducts.push({
          id: project.id,
          name: project.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
          url,
          category: category || 'Sito Vetrina Pro',
          price: numericPrice,
          image: finalImage,
          features: featuresEnv && featuresEnv.value ? featuresEnv.value.split(',').map(f => f.trim()) : [],
        });
      }
    })
  );

  // Lista di fallbacks per i progetti DEMO richiesti senza foto (coming-soon.svg)
  if (demoProducts.length === 0) {
    return [
      {
        id: "demo-experience-app",
        name: "Experience App",
        url: "https://experience-app.vercel.app",
        category: "Mini Sito Express",
        price: 299,
        image: "/projects/coming-soon.svg",
        features: ["Applicazione Web Interattiva", "Interfaccia Utente Reattiva", "Design Moderno"]
      },
      {
        id: "demo-english-teacher",
        name: "English Teacher Website",
        url: "https://english-teacher-website.vercel.app",
        category: "Sito Vetrina Pro",
        price: 499,
        image: "/projects/coming-soon.svg",
        features: ["Piattaforma Corsi & Lezioni", "Prenotazione Calendario", "Sezione Testimonianze"]
      },
      {
        id: "demo-fatturazione-elettronica",
        name: "Fatturazione Elettronica",
        url: "https://fatturazione-elettronica.vercel.app",
        category: "Web App & PWA Custom",
        price: 799,
        image: "/projects/coming-soon.svg",
        features: ["Gestione Fatture e Clienti", "Esportazione Dati XML/PDF", "Dashboard Contabile"]
      },
      {
        id: "demo-onoranze-ama",
        name: "Onoranze AMA",
        url: "https://onoranze-ama.vercel.app",
        category: "Sito Vetrina Pro",
        price: 499,
        image: "/projects/coming-soon.svg",
        features: ["Catalogo Servizi Completo", "Form Contatto Inizio H24", "Ottimizzazione SEO Locale"]
      },
      {
        id: "demo-modern-store",
        name: "ModernStore E-Commerce",
        url: "https://modernstore.vercel.app",
        category: "E-commerce Pro",
        price: 1199,
        image: "/projects/coming-soon.svg",
        features: ["Carrello e Checkout Stripe", "Gestione Inventario Prodotti", "Fast Performance Next.js"]
      }
    ];
  }

  // Sort alphabetically by name
  return demoProducts.sort((a, b) => a.name.localeCompare(b.name));
}
