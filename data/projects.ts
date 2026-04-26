export type Project = {
  id: string;
  slug: string;
  title: string;
  client: string;
  sector: string;
  year: string;
  tags: string[];
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  coverImage?: string;
};

export const projects: Project[] = [
  {
    id: '1',
    slug: 'rebranding-editoriale-gruppo-media',
    title: 'Rebranding Editoriale per un Gruppo Media Regionale',
    client: 'Gruppo Editoriale Nord-Est (nome riservato)',
    sector: 'Media & Editoria',
    year: '2023',
    tags: ['Brand Journalism', 'Content Strategy', 'Comunicazione Interna'],
    summary:
      'Ridefinizione del posizionamento editoriale e della voce del brand per un gruppo con tre testate cartacee in declino di diffusione.',
    challenge:
      'Il gruppo stava perdendo lettori under-45 e faticava a comunicare in modo coerente su carta, web e social. Le tre testate avevano toni e stili completamente differenti, creando confusione nel pubblico.',
    solution:
      'Ho sviluppato un documento di brand voice unificato, condotto workshop con i direttori editoriali e progettato una serie di newsletter verticali per segmentare il pubblico per interesse.',
    results: [
      '+38% di open rate sulle newsletter nel primo trimestre',
      'Riduzione del 60% nelle discrepanze di tono tra le testate',
      'Lancio di 3 newsletter verticali con oltre 12.000 iscritti totali',
    ],
  },
  {
    id: '2',
    slug: 'comunicazione-crisi-azienda-farmaceutica',
    title: 'Comunicazione di Crisi per Azienda Farmaceutica',
    client: 'Società farmaceutica quotata in Borsa',
    sector: 'Healthcare & Pharma',
    year: '2023',
    tags: ['Crisis Communication', 'PR', 'Media Relations'],
    summary:
      'Gestione della comunicazione esterna durante un ritiro di prodotto e successiva campagna di ricostruzione della reputazione.',
    challenge:
      "Un ritiro di lotto aveva generato copertura mediatica negativa su scala nazionale. L'azienda aveva 72 ore per controllare la narrativa prima della convocazione parlamentare.",
    solution:
      'Ho redatto il set di Q&A per il portavoce, organizzato una conferenza stampa proattiva e sviluppato una strategia di comunicazione multilivello (media, investitori, medici, pazienti).',
    results: [
      'Zero citazioni negative su media tier-1 dopo il day 3',
      'Recupero del 94% del sentiment positivo sui social in 30 giorni',
      'Premio FERPI 2023 per la Gestione della Comunicazione di Crisi',
    ],
  },
  {
    id: '3',
    slug: 'content-strategy-startup-fintech',
    title: 'Content Strategy per Start-up FinTech',
    client: 'FinStart Italia (seed stage)',
    sector: 'Finanza & Tecnologia',
    year: '2022',
    tags: ['Content Marketing', 'Copywriting', 'Brand Storytelling'],
    summary:
      'Costruzione da zero della presenza editoriale e delle linee guida di comunicazione per una start-up nel settore dei pagamenti B2B.',
    challenge:
      'La start-up aveva un prodotto solido ma zero visibilità mediatica e difficoltà a spiegare il proprio valore in modo comprensibile a investitori non tecnici.',
    solution:
      'Ho progettato un blog editoriale con cadenza bisettimanale, un kit media completo e un set di pitch narrative per diversi tipi di investitori (VC, CVC, angel).',
    results: [
      '4 feature su media finanziari tier-1 in 6 mesi',
      '2.800 follower LinkedIn organici nel primo anno',
      'Chiusura round seed da €1,2M con 3 investitori attratti dal blog',
    ],
  },
];
