const fs = require('fs');
const env = fs.readFileSync('.env.local', 'utf8');
const token = env.split('\n').find(line => line.startsWith('VERCEL_API_TOKEN=')).split('=')[1].trim();

async function test() {
  console.log('Fetching projects...');
  const res = await fetch('https://api.vercel.com/v9/projects', {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  const projects = data.projects || [];
  console.log(`Found ${projects.length} projects.`);

  for (const p of projects) {
    let url = `https://api.vercel.com/v9/projects/${p.id}/env?target=production&decrypted=1`;
    if (p.teamId || p.accountId) {
      url += `&teamId=${p.teamId || p.accountId}`;
    }
    const envRes = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const envData = await envRes.json();
    console.log(`\nProject: ${p.name}`);
    if (envData.envs) {
      console.log(`Envs found: ${envData.envs.length}`);
      const category = envData.envs.find(e => e.key === 'DEMO_CATEGORY');
      if (category) {
        console.log(`FOUND CATEGORY: ${category.value}`);
      } else {
        const keys = envData.envs.map(e => e.key).join(', ');
        console.log(`Keys: ${keys}`);
      }
    } else {
      console.log('No envs found or error', envData);
    }
  }
}

test();
