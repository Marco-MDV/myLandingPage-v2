# Marco De Vincentiis - Portfolio

Landing page personale di Marco De Vincentiis, consulente informatico e web developer. Il sito presenta il profilo professionale, i servizi e i progetti attraverso un'interfaccia responsive realizzata con Next.js e React.

## Stack

- [Next.js 16](https://nextjs.org/) con App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Vercel Analytics](https://vercel.com/analytics) e Speed Insights

## Requisiti

- Node.js 20 o superiore
- npm

## Avvio in locale

Il progetto Next.js si trova nella directory `my-landing-page-v2/`. Dal terminale, esegui:

```bash
cd my-landing-page-v2
npm install
npm run dev
```

Apri quindi [http://localhost:3000](http://localhost:3000) nel browser.

## Script disponibili

Esegui gli script dalla directory `my-landing-page-v2/`:

| Comando | Descrizione |
| --- | --- |
| `npm run dev` | Avvia il server di sviluppo con aggiornamento automatico |
| `npm run lint` | Controlla il codice con ESLint |
| `npm run build` | Crea la build di produzione |
| `npm run start` | Avvia la build di produzione |

## Struttura principale

```text
my-landing-page-v2/
├── public/                 # Asset statici
├── src/app/
│   ├── components/         # Navbar, hero, sezioni, card e componenti UI
│   ├── globals.css         # Stili globali e configurazione Tailwind
│   ├── layout.tsx          # Layout, font e metadati SEO
│   └── page.tsx            # Composizione della pagina principale
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Personalizzazione

- Modifica il contenuto delle sezioni in `src/app/components/main/sections/`.
- Aggiorna navigazione e collegamenti in `src/app/components/navbar/`.
- Personalizza titolo, descrizione e dati Open Graph in `src/app/layout.tsx`.
- Inserisci immagini e altri asset nella directory `public/`.
- Usa `src/app/globals.css` per gli stili globali e le utility condivise.

## Deploy

Il progetto è pronto per essere distribuito su [Vercel](https://vercel.com/): importa il repository, imposta `my-landing-page-v2` come root directory e lascia che Vercel rilevi automaticamente Next.js.

Per una verifica locale della build di produzione:

```bash
cd my-landing-page-v2
npm run build
npm run start
```

## Licenza

Il progetto include il file [LICENSE](LICENSE). Consulta quel file per i termini di utilizzo.

