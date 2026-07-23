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

export async function getDemoProducts(): Promise<DemoProduct[]> {
  const projects = await getVercelProjects();
  const demoProducts: DemoProduct[] = [];

  // Fetch env vars for all projects in parallel
  await Promise.all(
    projects.map(async (project) => {
      const envs = await getProjectEnvVars(project);
      
      // Look for DEMO_CATEGORY to identify if it's a demo product intended for the portfolio
      const categoryEnv = envs.find((e) => e.key === 'DEMO_CATEGORY');
      let category = categoryEnv ? categoryEnv.value : null;

      // Fallback: se non c'è la variabile d'ambiente, proviamo a prendere la categoria generata dall'AI
      const aiProject = categorizedProjects.find(p => p.name === project.name);
      if (!category && aiProject && aiProject.categoryAndReason) {
        // Es: "Siti Aziendali & SEO - Semplice sito..." -> prendiamo solo la prima parte
        category = aiProject.categoryAndReason.split(' - ')[0].trim();
      }
      
      if (category) {
        const priceEnv = envs.find((e) => e.key === 'DEMO_PRICE');
        const imageEnv = envs.find((e) => e.key === 'DEMO_IMAGE');
        const featuresEnv = envs.find((e) => e.key === 'DEMO_FEATURES');

        // Fallback per l'immagine dal file json
        let finalImage = imageEnv && imageEnv.value ? imageEnv.value : null;
        if (!finalImage && aiProject && 'image' in aiProject) {
          finalImage = (aiProject as { image?: string }).image || null;
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
          // Format the name nicely if possible (e.g. "my-project" -> "My Project")
          name: project.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
          url,
          category: category,
          price: priceEnv && priceEnv.value ? parseFloat(priceEnv.value) : null,
          image: finalImage,
          features: featuresEnv && featuresEnv.value ? featuresEnv.value.split(',').map(f => f.trim()) : [],
        });
      }
    })
  );

  // Sort alphabetically by name
  return demoProducts.sort((a, b) => a.name.localeCompare(b.name));
}
