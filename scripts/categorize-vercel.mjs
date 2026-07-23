import fs from 'fs';

const VERCEL_TOKEN = process.env.VERCEL_API_TOKEN || '';
const GROQ_TOKEN = process.env.GROQ_API_KEY || '';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ''; // Se impostato in .env.local, permette di leggere i repo privati

async function main() {
  console.log('🔄 Recupero dei progetti da Vercel...');
  
  const vercelRes = await fetch('https://api.vercel.com/v9/projects', {
    headers: { 'Authorization': `Bearer ${VERCEL_TOKEN}` }
  });
  
  if (!vercelRes.ok) {
    console.error('❌ Errore durante il recupero dei progetti Vercel', await vercelRes.text());
    return;
  }
  
  const { projects } = await vercelRes.json();
  console.log(`✅ Trovati ${projects.length} progetti su Vercel.\n`);
  
  const results = [];
  
  for (const p of projects) {
    const name = p.name;
    const repo = p.link?.repo;
    const framework = p.framework;
    
    if (!repo) {
      console.log(`⏭️  Progetto "${name}" ignorato (nessuna repository GitHub collegata).`);
      continue;
    }
    
    console.log(`\n🔍 Analisi del progetto: ${name} (Repo: ${repo})`);
    
    // Fetch README from GitHub
    const headers = {
      'User-Agent': 'Node.js Script',
      'Accept': 'application/vnd.github.v3.raw'
    };
    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }
    
    const readmeRes = await fetch(`https://api.github.com/repos/${repo}/readme`, { headers });
    
    let readmeText = '';
    if (!readmeRes.ok) {
      console.log(`   ⚠️ Impossibile recuperare il README. Status: ${readmeRes.status}. (Se il repo è privato, aggiungi GITHUB_TOKEN)`);
      readmeText = `Progetto chiamato "${name}" sviluppato in ${framework || 'sconosciuto'}.`;
    } else {
      readmeText = await readmeRes.text();
      console.log(`   📄 README recuperato (${readmeText.length} bytes).`);
    }
    
    // Trim README to avoid exceeding context limits
    readmeText = readmeText.substring(0, 4000);
    
    // Call Groq LLM
    const prompt = `Analizza questo README (o nome del progetto se README assente) e decidi in quale delle quattro categorie rientra:
1) "Landing Page Custom" (landing page singole, squeeze page, opt-in)
2) "Mini Sito Express" (siti essenziali 1-3 pagine, portfolio, freelance)
3) "Sito Vetrina Pro" (siti multipagina, attività locali, menu, servizi)
4) "E-commerce Pro" (store online, carrelli, vendita prodotti)

Rispondi SOLO con il nome esatto della categoria, seguito da un trattino e una brevissima motivazione (max 10 parole).
Esempio: Landing Page Custom - È una singola pagina promozionale.

Testo da analizzare:
${readmeText}`;

    const llmRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.2
      })
    });
    
    if (!llmRes.ok) {
      console.log(`   ❌ Errore con Groq AI:`, await llmRes.text());
    } else {
      const llmData = await llmRes.json();
      const answer = llmData.choices?.[0]?.message?.content || 'Nessuna risposta';
      console.log(`   🧠 Categoria assegnata: ${answer}`);
      results.push({ name, repo, categoryAndReason: answer });
    }
    
    // Piccolo ritardo per evitare rate limit
    await new Promise(r => setTimeout(r, 500));
  }
  
  fs.writeFileSync('progetti_categorizzati.json', JSON.stringify(results, null, 2));
  console.log('\n🎉 Fatto! Risultati salvati in "progetti_categorizzati.json".');
}

main().catch(console.error);
