export type Article = {
  id: string;
  title: string;
  testate: string;
  date: string;
  category: 'Economia' | 'Tecnologia' | 'Sostenibilità' | 'Interviste' | 'Cultura';
  abstract: string;
  url: string;
  featured?: boolean;
};

export const articles: Article[] = [
  {
    id: '1',
    title: "L'intelligenza artificiale ridisegna il volto del giornalismo economico",
    testate: 'Il Sole 24 Ore',
    date: '2024-03-15',
    category: 'Tecnologia',
    abstract:
      'Dalla generazione automatica di report finanziari alla verifica dei fatti in tempo reale: come i grandi editori italiani stanno integrando i modelli di linguaggio nelle redazioni.',
    url: '#',
    featured: true,
  },
  {
    id: '2',
    title: "Transizione energetica: chi paga il conto della decarbonizzazione",
    testate: 'Corriere della Sera',
    date: '2024-02-28',
    category: 'Sostenibilità',
    abstract:
      "Un'analisi dei costi sociali e industriali legati all'abbandono dei combustibili fossili, con focus sulle PMI italiane del Nord-Est.",
    url: '#',
    featured: true,
  },
  {
    id: '3',
    title: "«La comunicazione è un atto di fiducia». Intervista a Ferruccio de Bortoli",
    testate: 'Linkiesta',
    date: '2024-01-20',
    category: 'Interviste',
    abstract:
      "L'ex direttore del Corriere della Sera racconta come il rapporto tra media e potere economico sia cambiato negli ultimi vent'anni.",
    url: '#',
    featured: true,
  },
  {
    id: '4',
    title: "Start-up e welfare: le aziende tech che investono sul benessere dei dipendenti",
    testate: 'Wired Italia',
    date: '2023-12-10',
    category: 'Tecnologia',
    abstract:
      'Dalle settimane corte ai benefit personalizzati: il modello americano arriva nelle PMI italiane e trasforma la cultura aziendale.',
    url: '#',
  },
  {
    id: '5',
    title: "Inflazione e consumi: il crollo del ceto medio italiano",
    testate: 'La Repubblica',
    date: '2023-11-05',
    category: 'Economia',
    abstract:
      'I dati ISTAT e una serie di testimonianze dirette raccontano come due anni di alta inflazione abbiano ridisegnato le abitudini di spesa delle famiglie.',
    url: '#',
  },
  {
    id: '6',
    title: "La moda sostenibile non è un ossimoro: i brand che ci provano davvero",
    testate: 'D - La Repubblica delle Donne',
    date: '2023-10-18',
    category: 'Sostenibilità',
    abstract:
      'Dal tracciamento della filiera alla second-hand economy: un viaggio tra le aziende italiane che stanno riscrivendo le regole del fashion.',
    url: '#',
  },
  {
    id: '7',
    title: "Il ritorno del Made in Italy: lusso, export e identità culturale",
    testate: 'Forbes Italia',
    date: '2023-09-02',
    category: 'Economia',
    abstract:
      "Il brand Italia vale 571 miliardi di dollari. Un'analisi di come le eccellenze italiane stiano conquistando i mercati di Cina e Medio Oriente.",
    url: '#',
  },
  {
    id: '8',
    title: "«Il segreto è ascoltare»: dialogo con Brunello Cucinelli",
    testate: 'Vanity Fair Italia',
    date: '2023-07-14',
    category: 'Interviste',
    abstract:
      'Il re del cashmere parla di umanesimo aziendale, filosofia greca applicata al business e del perché non ha mai mandato una email di notte.',
    url: '#',
  },
  {
    id: '9',
    title: "Biblioteche come terzo spazio: il rinascimento della cultura pubblica",
    testate: 'Internazionale',
    date: '2023-05-30',
    category: 'Cultura',
    abstract:
      "In tutta Italia le biblioteche comunali si reinventano come hub creativi, spazi co-working e centri di aggregazione per combattere l'isolamento sociale.",
    url: '#',
  },
];
