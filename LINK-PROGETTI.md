# Collegamenti del portfolio

Associazione verificata il 6 settembre 2026 tramite `vercel project ls` nell'account autenticato e `gh repo list`. I domini personalizzati già funzionanti sono conservati. Nessun deployment è stato pubblicato durante la manutenzione.

## URL corretti o recuperati

| Scheda | Progetto Vercel | Link live inserito nel portfolio |
| --- | --- | --- |
| Dimora Prestige Real Estate | demo-tornesi-immobiliare | [Apri Dimora](https://demo-dimora-immobiliare.vercel.app) |
| Villa Seraphina Resort & SPA | demo-villa-seraphina-hotel | [Apri Villa Seraphina](https://demo-villa-seraphina-hotel.vercel.app) |
| ScaleFlow | demo-scaleflow-landing | [Apri ScaleFlow](https://demo-scaleflow-landing.vercel.app) |
| Fattura Elettronica App | fattura-elettronica | [Apri Fattura Elettronica](https://sdi-invoice-generator.vercel.app) |
| English Teacher Website | english-teacher-website | [Apri English Teacher](https://english-teacher-website-lemon.vercel.app) |

Tutti questi URL hanno restituito HTTP 200 durante le verifiche di questa sessione. L'URL di Fattura Elettronica proviene dal progetto Vercel `fattura-elettronica`, mentre il repository associabile per nome è `sdi-invoice-generator`. Non sono stati pubblicati link al codice sorgente dei repository.

## Altre associazioni Vercel presenti nel catalogo

| Scheda | Progetto Vercel | Link del catalogo |
| --- | --- | --- |
| Aura Osteria | demo-aura-osteria | [Apri](https://demo-aura-osteria.vercel.app) |
| Montecarlo Specialty Coffee | demo-montecarlo-coffee | [Apri](https://demo-montecarlo-coffee.vercel.app) |
| QuickQuote | demo-quickquote-app | [Apri](https://demo-quickquote-app.vercel.app) |
| Lazio Vela | lazio-vela | [Apri](https://laziovela.it) |
| Studio Legale Fusco | studio-legale | [Apri](https://avvocatoannafusco.it) |
| Mave Arredamenti | falegnameria-artigiana | [Apri](https://mavearredamenti.it) |
| Next.js Admin Dashboard | nextjs-dashboard | [Apri](https://nextjs-dashboard-zeta-sooty-93.vercel.app/) |
| Vivaio Paola Bartoli | vivaio-bartoli | [Apri](https://vivaiopaolabartoliterracina.it) |
| ModernStore | modern-store | [Apri](https://modern-store-nine.vercel.app/) |
| La Casetta nelle Mura | lacasetta | [Apri](https://lacasettanellemura.it) |
| Idraulico Iona Bros | iona-bros-idraulica | [Apri](https://iona-bros-idraulica.vercel.app/) |
| Zecchi MultiServizi | azienda-multiservizi | [Apri](https://zecchimultiservizi.it) |
| LI Costruzioni | li-costruzioni | [Apri](https://li-costruzionisrl.it) |
| Ermannotech | ermannotech-frontend-shopify | [Apri](https://ermannotech.com) |
| Big Mama Terracina | bnb-vestoso | [Apri](https://bigmamaterracina.it) |
| Casa Vacanze Porta Maggio | porta-maggio-next | [Apri](https://portamaggioterracina.it) |
| Onoranze Funebri AMA | onoranze-ama | [Apri](https://onoranze-ama.vercel.app) |
| Experience App | experience-app | [Apri](https://experience-app-pi.vercel.app/) |

Il Quinto Polo e Real-time Shift Planner mantengono i rispettivi URL verificati nell'analisi iniziale: non risultano nell'elenco Vercel consultato.

## Manutenzione

- Link, stato e immagini originali del catalogo: `src/data/projects.ts`.
- Le demo in evidenza usano `featured: true`; URL, titoli e immagini vengono letti dal catalogo centrale.
- I pacchetti recuperano dal catalogo l'URL delle demo correlate.
- Dopo aver cambiato le immagini originali: `npm run optimize-project-images`.
- Dopo ogni build: `npm run check:links` controlla riferimenti interni, ancore, contatti e URL di condivisione.
- Il dominio del portfolio configurato è [www.marcocerilli.it](https://www.marcocerilli.it), confermato dal progetto Vercel `portfolio-aziendale-2026`.
