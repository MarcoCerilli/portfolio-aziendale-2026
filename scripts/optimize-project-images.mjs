import sharp from "sharp";
import { readFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const source = await readFile(new URL('../src/data/projects.ts', import.meta.url), 'utf8');
const images = [...new Set([...source.matchAll(/image: "([^"]+)"/g)].map(match => match[1]))];
const publicDir = new URL('../public/', import.meta.url);
await mkdir(new URL('projects/optimized/', publicDir), { recursive: true });
let before = 0;
let after = 0;
for (const image of images) {
  const input = new URL(image.slice(1), publicDir);
  const output = new URL(`projects/optimized/${path.parse(image).name}.webp`, publicDir);
  before += (await stat(input)).size;
  await sharp(await readFile(input)).rotate().resize({ width: 960, withoutEnlargement: true }).webp({ quality: 80 }).toFile(output.pathname);
  after += (await stat(output)).size;
}
console.log(`${images.length} immagini: ${(before / 1e6).toFixed(2)} MB → ${(after / 1e6).toFixed(2)} MB`);
