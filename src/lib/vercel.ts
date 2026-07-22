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
    // Add a cache buster and explicitly request decrypted values
    let url = `https://api.vercel.com/v9/projects/${project.id}/env?target=production&decrypted=1`;
    if (project.teamId || project.accountId) {
      url += `&teamId=${project.teamId || project.accountId}`;
    }

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${VERCEL_API_TOKEN}`,
      },
      next: { revalidate: process.env.NODE_ENV === 'development' ? 0 : 3600 },
    });

    if (!res.ok) {
      console.error(`Error fetching envs for ${project.name}:`, await res.text());
      return [];
    }

    const data = await res.json();
    console.log(`[Vercel API] ${project.name} Env Vars Count:`, data.envs?.length);
    return data.envs || [];
  } catch (error) {
    console.error(`Error fetching env vars for project ${project.name}:`, error);
    return [];
  }
}

export async function getDemoProducts(): Promise<DemoProduct[]> {
  const projects = await getVercelProjects();
  const demoProducts: DemoProduct[] = [];

  // Fetch env vars for all projects in parallel
  await Promise.all(
    projects.map(async (project) => {
      const envs = await getProjectEnvVars(project);
      
      // Look for DEMO_CATEGORY to identify if it's a demo product intended for the portfolio
      const categoryEnv = envs.find((e) => e.key === 'DEMO_CATEGORY');
      
      if (categoryEnv && categoryEnv.value) {
        const priceEnv = envs.find((e) => e.key === 'DEMO_PRICE');
        const imageEnv = envs.find((e) => e.key === 'DEMO_IMAGE');
        const featuresEnv = envs.find((e) => e.key === 'DEMO_FEATURES');

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
          category: categoryEnv.value,
          price: priceEnv && priceEnv.value ? parseFloat(priceEnv.value) : null,
          image: imageEnv && imageEnv.value ? imageEnv.value : null,
          features: featuresEnv && featuresEnv.value ? featuresEnv.value.split(',').map(f => f.trim()) : [],
        });
      }
    })
  );

  // Sort alphabetically by name
  return demoProducts.sort((a, b) => a.name.localeCompare(b.name));
}
