# Analisi del progetto — 6 settembre 2026

> Aggiornamento: le correzioni funzionali sono state applicate localmente dopo questa analisi. Vedi `LINK-PROGETTI.md` per i link recuperati da Vercel. Il testo seguente descrive la situazione iniziale.

## Verifiche eseguite

- `npm run astro-check`: 155 file, 0 errori, 0 warning, 0 suggerimenti.
- `npm run build`: completata, 77 pagine generate. La prima esecuzione nel sandbox non riusciva a scaricare i font Google; la verifica con accesso alla rete è riuscita.
- Analisi delle 77 pagine HTML generate: destinazioni interne, ancore, immagini, script e fogli di stile referenziati tramite href/src/poster.
- Richieste HTTP GET con redirect a 31 URL esterni: 26 risposte 200, 3 risposte 404, 2 risposte 999 da LinkedIn. Il codice 999 limita la verifica automatizzata e non dimostra che il profilo sia inesistente. Una risposta 200 non certifica il contenuto o il funzionamento completo dell'app esterna.
- Ispezione dei componenti React per collegamenti e comportamenti non presenti nell'HTML iniziale.
- Nessun invio di moduli o messaggi; nessuna modifica ai sorgenti applicativi. Questa analisi non comprende una prova interattiva in browser, un audit delle vulnerabilità delle dipendenze o misurazioni Lighthouse.

## Problemi prioritari

### 1. Tre demo restituiscono HTTP 404

| URL non funzionante | Dove | Intervento suggerito |
| --- | --- | --- |
| https://demo-tornesi-immobiliare.vercel.app | `src/components/BentoShowcase.tsx:41`, `src/data/projects.ts:55` | Recuperare l'URL corretto o ripristinare il deployment; nessuna alternativa verificata nel progetto. |
| https://demo-villa-seraphina.vercel.app | `src/components/BentoShowcase.tsx:55` | Il catalogo e i pacchetti usano già https://demo-villa-seraphina-hotel.vercel.app, verificato con HTTP 200. |
| https://demo-scaleflow-saas.vercel.app | `src/components/BentoShowcase.tsx:62` | Il catalogo usa https://demo-scaleflow-landing.vercel.app, verificato con HTTP 200; allineare anche la descrizione, perché la vetrina parla di SaaS e il catalogo di landing page. |

Centralizzare gli URL delle demo: attualmente i dati duplicati tra vetrina, catalogo e pacchetti consentono queste divergenze.

### 2. La chat non recapita le richieste

`src/components/FloatingContact.tsx:54`: i messaggi sono conservati solo nello stato React e ricevono risposte predefinite tramite timer. Non esiste invio a un backend, email o WhatsApp. Il testo invita a lasciare un recapito e promette un ricontatto: il visitatore può credere di aver inviato una richiesta che il titolare non riceverà. Il contenuto si perde ricaricando la pagina.

Collegare un canale di contatto reale o rendere esplicito che si tratta di risposte automatiche e aggiungere l'accesso al contatto effettivo. Molti pulsanti commerciali aprono proprio questa chat.

### 3. Pagina cookie assente

`src/components/CookieBanner.tsx:65`: “Scopri di più” punta a `/cookie-policy`, ma questa pagina non viene generata e non esiste nei contenuti. Il banner compare solo dopo l'esecuzione JavaScript, quindi un controllo del solo HTML iniziale non rileva il collegamento.

Creare contenuti aderenti al sito oppure scegliere una destinazione esistente pertinente. Il banner salva attualmente una scelta in localStorage; il ramo di accettazione contiene solo un commento relativo all'attivazione dei tracker.

### 4. Contatti delle pagine servizi: ancora errata

Tutte le 10 pagine di dettaglio servizi contengono link a `/#contact`; in homepage la sezione effettiva è `id="contatti"` (`src/layouts/components/sections/CallToAction.astro:67`). Il click apre la homepage senza raggiungere la destinazione richiesta.

Sostituire con `/#contatti` nei contenuti interessati. Verificare anche `src/layouts/shortcodes/CardWrapper.astro`, `src/content/sections/italian/banner-three.md` e `call-to-action-widget.md`, che conservano il vecchio riferimento.

### 5. Telefono ed email generati in modo errato

`src/config/config.toml` memorizza telefono ed email come link Markdown. Footer e pannello laterale li trattano anche come stringhe semplici, generando:

- `tel:[+393804291043](tel:393804291043)`
- `mailto:[cerillimarco15@gmail.com](mailto:cerillimarco15@gmail.com)`

Riferimenti: `src/layouts/components/global/Footer.astro:68` e `:90`; `src/layouts/components/widgets/HeaderOffcanvasContent.astro:58` e `:66`.

Dentro questi collegamenti viene inoltre renderizzato il Markdown, introducendo link annidati e markup invalido. Estrarre destinazione ed etichetta o renderizzare un solo link Markdown. La sezione CTA contiene invece link diretti corretti.

## Altri problemi e miglioramenti

- **Condivisione blog:** `src/layouts/components/widgets/Social.astro:49` costruisce link social con percorsi relativi come `/blog/post-1/`; LinkedIn riceve anche `source=undefined`, Twitter un parametro letterale `amp;url`. Usare URL assoluti dal sito configurato e serializzare i parametri con URLSearchParams.
- **Contenuti residui del tema:** pagine team con profili `example-company`, articoli e pagine informative in inglese all'interno della collezione italiana. La privacy riporta una data del 2022 e contenuti generici. Rivedere ciò che deve essere pubblicato prima di promuovere il portfolio; questa è una verifica dei contenuti, non una valutazione legale.
- **SEO:** verificare che `site.baseUrl` (`https://techlo-lite-astro.pages.dev/`) sia il dominio pubblico desiderato. Le keyword sono ancora quelle del template e `ogLocale` è `en_US`. La pagina 404 dichiara una canonical `/404/`, mentre l'output effettivo è `/404.html`: anomalia dei metadati, non link di navigazione rilevato.
- **Immagini:** diverse immagini della homepage vengono servite dai file originali di `public/projects`, senza varianti responsive ottimizzate. Esempi: Lazio Vela circa 1,74 MB, Idraulico circa 1,56 MB, Quinto Polo circa 1,51 MB. La cartella pesa circa 22 MB complessivi, che non corrispondono al trasferimento iniziale della pagina. Generare WebP/AVIF e dimensioni adeguate alle card; riutilizzare le convenzioni di OptimizedImage.
- **Configurazioni form residue:** `contactFormAction` punta a un indirizzo del template; il ramo Formspree in `src/lib/utils/FormHandle.ts:267` usa un endpoint fisso. Nessun modulo ContactForm è stato trovato nell'HTML delle pagine generate, quindi è un rischio alla futura riattivazione e non un invio errato verificato oggi.
- **Fattura Elettronica App:** `src/data/projects.ts:319` contiene `link: "#"` e stato `online`. Il componente evita già di generare il link e mostra “Progetto Riservato”; non è un 404, ma il badge “Live” è incoerente con l'assenza di una destinazione visitabile.
- **Manutenibilità:** molti testi e opzioni dei componenti React sono hardcoded, contrariamente alle convenzioni AGENTS.md. Spostare progressivamente i contenuti nei file delle collezioni e riutilizzare token/componenti del tema. Evitare una riscrittura generale prima di sistemare contatti e link.

## Ordine suggerito

1. Rendere effettivo il contatto dalla chat e correggere telefono/email.
2. Sistemare le tre demo, la destinazione del banner cookie e le ancore dei servizi.
3. Correggere la condivisione social e selezionare i contenuti del tema da pubblicare.
4. Ottimizzare immagini, metadati e gestione centralizzata dei contenuti.


## Interventi applicati

- Ripristinati i link delle tre demo; aggiunti il collegamento di Fattura Elettronica e il dominio di produzione di English Teacher.
- Centralizzati i collegamenti della vetrina e dei pacchetti nel catalogo progetti.
- Sostituita la chat simulata con un dialogo accessibile per contatti reali WhatsApp/email/telefono, con contenuti Markdown e pulsanti del tema.
- Corretti link di telefono/email, ancore dei servizi e URL assoluti di condivisione social. Rimossi dalla resa dei widget i profili social del template.
- Creata la pagina cookie e sostituito il consenso fittizio con un avviso sulle preferenze effettivamente salvate nel browser.
- Aggiornati dominio, keyword, locale OpenGraph, metadati 404 e script di build Vercel.
- Blog e team rimangono accessibili con noindex e fuori dalla sitemap, come richiesto.
- Create versioni WebP delle 25 immagini del catalogo: circa 16,82 MB di originali contro 1,08 MB delle versioni utilizzate. Gli originali restano disponibili.
- Configurato il destinatario dei moduli sul contatto del sito e rimosso l'endpoint Formspree fisso. Nessun messaggio è stato inviato durante le prove.
- Aggiunto `npm run check:links` per prevenire regressioni nei collegamenti interni.

Restano attività editoriali: personalizzare testi di blog/team, privacy e termini del template. La migrazione di tutti i testi React nei contenuti Markdown non è stata estesa all'intera homepage; i nuovi contenuti del pannello contatti e dell'avviso sono editabili nei file di contenuto.

## Verifica finale delle modifiche

- `npm run astro-check`: 156 file, zero errori, warning o suggerimenti.
- `npm run build`: 78 pagine, completata.
- `npm run check:links`: 5.471 riferimenti interni, zero errori.
- Chromium desktop/mobile: apertura contatti da pulsante fisso e hero, chiusura con Escape, destinazioni contatti, navigazione cookie, persistenza dell'avviso, filtro applicazioni e link Fattura, meta noindex delle pagine blog/team e assenza di overflow orizzontale su mobile.
- Nessun errore JavaScript o risposta HTTP di errore per le risorse locali durante le prove.
- Ispezione visiva del pannello mobile completata dopo aver corretto il contrasto ereditato dal tema.
- Sitemap verificata: dominio www.marcocerilli.it, nessun URL blog/team.
- `git diff --check`: nessun errore.

Le modifiche sono locali: nessun commit, push o deployment eseguito.

### Correzione successiva: ZodError in sviluppo

`Base.astro` validava `cookiePage?.data.cookieNotice` anche quando la collezione caricata dal server restituiva il campo assente. Il layout e il pannello contatti ora usano come fallback il frontmatter dei rispettivi file Markdown, mantenendo la validazione dei valori presenti.

Il banner delle preferenze è stato convertito da React a `CookieNotice.astro`: rimosso l'avviso “Invalid hook call” osservato nei log di sviluppo. Contenuti e salvataggio della preferenza rimangono invariati.

Verificati server di sviluppo su homepage, cookie policy, blog, team e dettaglio servizio; controllo Astro senza errori; build di 78 pagine e controllo di 5.549 riferimenti interni senza errori.
