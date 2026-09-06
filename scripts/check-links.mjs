import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { parseHTML } from 'linkedom';

const root = path.resolve('dist');
const config = JSON.parse(await readFile('.astro/config.generated.json', 'utf8'));
const origin = new URL(config.site.baseUrl).origin;
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? walk(path.join(dir, entry.name)) : path.join(dir, entry.name)))).flat();
}
const pages = new Map();
for (const file of (await walk(root)).filter(file => file.endsWith('.html'))) {
  pages.set(file, parseHTML(await readFile(file, 'utf8')).document);
}
if (pages.size === 0) throw new Error("Nessuna pagina generata: completa npm run build prima del controllo.");
const failures = new Set();
let checked = 0;
for (const [file, document] of pages) {
  const route = '/' + path.relative(root, file).replace(/index\.html$/, '');
  for (const node of document.querySelectorAll('[href], [src], [poster]')) {
    for (const attr of ['href', 'src', 'poster']) {
      const ref = node.getAttribute(attr);
      if (!ref || ref === '#' || /^(data:|javascript:)/.test(ref)) continue;
      if (/^(tel:|mailto:)/.test(ref)) {
        if (/[\[\]()]/.test(ref)) failures.add(`${route}: contatto malformato ${ref}`);
        continue;
      }
      const url = new URL(ref, origin + route);
      if (url.origin !== origin) continue;
      checked++;
      let dest = path.join(root, decodeURIComponent(url.pathname));
      try {
        if ((await stat(dest)).isDirectory()) dest = path.join(dest, 'index.html');
        await stat(dest);
      } catch {
        failures.add(`${route}: destinazione assente ${ref}`);
        continue;
      }
      if (url.hash && pages.has(dest) && !pages.get(dest).getElementById(decodeURIComponent(url.hash.slice(1)))) {
        failures.add(`${route}: ancora assente ${ref}`);
      }
    }
  }
  for (const node of document.querySelectorAll('a[href*="sharer.php"], a[href*="intent/tweet"], a[href*="share-offsite"]')) {
    const url = new URL(node.getAttribute('href'));
    const destination = url.searchParams.get('u') ?? url.searchParams.get('url');
    if (!destination?.startsWith(origin + '/')) failures.add(`${route}: condivisione non assoluta ${url}`);
  }
}
for (const failure of failures) console.error(failure);
console.log(`${pages.size} pagine, ${checked} riferimenti interni, ${failures.size} errori.`);
process.exitCode = failures.size ? 1 : 0;
