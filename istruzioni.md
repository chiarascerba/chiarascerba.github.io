# Specifiche Tecniche: Sito Web Portfolio per Giornalista ed Esperta di Comunicazione

Questo documento contiene i requisiti e le istruzioni per lo sviluppo di un sito web professionale (portfolio) destinato a una giornalista ed esperta di comunicazione aziendale.

## 1. Obiettivi del Progetto
- Presentare il profilo professionale e l'autorevolezza del brand personale.
- Archiviare e categorizzare articoli scritti per diverse testate.
- Mostrare progetti di consulenza in comunicazione aziendale.
- Facilitare il contatto con potenziali clienti e testate.

## 2. Stack Tecnologico Consigliato
- **Framework:** Next.js (React) per SEO e performance.
- **Styling:** Tailwind CSS (per un design pulito e responsive).
- **Iconografia:** Lucide-React o FontAwesome.
- **Gestione Contenuti:** File Markdown/MDX locali (per Articoli e Progetti) o integrazione con un Headless CMS (es. Contentful/Sanity).
- **Animazioni:** Framer Motion (opzionale, per transizioni fluide).

## 3. Design System & UX
- **Stile:** Minimalista, tipografico, professionale.
- **Palette Colori:**
    - Primario: Un colore sobrio (es. Blu Navy #1a202c o Bordeaux scuro).
    - Sfondo: Bianco o grigio molto chiaro (#f8fafc).
    - Accento: Un colore per le call-to-action (es. Oro spento o Teal).
- **Tipografia:** - Serif per i titoli (es. Playfair Display) per trasmettere autorità giornalistica.
    - Sans-serif per il corpo del testo (es. Inter o Roboto) per la leggibilità.

## 4. Architettura delle Pagine

### A. Home Page
- **Hero Section:** Foto professionale, nome, headline chiara (es. "Raccontare il business attraverso le parole. Giornalista e Consulente di Comunicazione").
- **Sezione "In Evidenza":** Carosello o griglia con gli ultimi 3 articoli o il progetto più importante.
- **Servizi in breve:** Micro-copy su Giornalismo, Copywriting, Strategia di Comunicazione.

### B. About
- **Biografia:** Testo narrativo sulla carriera.
- **Expertise:** Elenco delle competenze core.
- **Timeline/Esperienze:** Percorso professionale sintetico.
- **Valori:** Cosa guida il suo approccio alla comunicazione.

### C. Articoli
- **Filtri:** Ricerca per categoria (es. Economia, Tecnologia, Sostenibilità, Interviste).
- **Layout:** Lista di card con: Titolo, Testata, Data, Breve abstract e link esterno/interno.
- **Paginazione:** Caricamento graduale o paginazione semplice.

### D. Progetti (Case Studies)
- **Griglia Progetti:** Focus su comunicazione aziendale, brand journalism, PR.
- **Dettaglio Progetto:** Descrizione della sfida, soluzione adottata e risultati ottenuti.

### E. Contatti
- **Form di contatto:** Campi Nome, Email, Oggetto, Messaggio.
- **Social Links:** LinkedIn (primario), X (Twitter), Instagram professionale.
- **Newsletter:** Slot per iscrizione (es. integrazione Mailchimp/Substack).

## 5. Requisiti Tecnici & SEO
- **Responsive Design:** Ottimizzazione perfetta per mobile e tablet.
- **SEO:** Meta tag dinamici per ogni articolo e progetto, Open Graph per la condivisione sui social.
- **Performance:** Immagini ottimizzate (WebP), caricamento lazy.
- **Accessibilità:** Rispetto degli standard WCAG (contrasto colori, tag alt per immagini).

## 6. Prompt per lo Sviluppo
> "Genera la struttura di un progetto Next.js utilizzando Tailwind CSS per un sito portfolio di una giornalista. Crea i seguenti componenti: 
> 1. Un layout principale con Navbar e Footer.
> 2. Una Home Page con una sezione Hero elegante.
> 3. Una pagina 'Articoli' che recupera i dati da un array di oggetti (mock data) e permette di filtrarli per categoria.
> 4. Una pagina 'Contatti' con un form validato.
> Usa una tipografia Serif per i titoli e un design pulito ispirato ai siti di informazione premium come il New York Times o Il Sole 24 Ore."