import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articoli',
  description: 'Archivio degli articoli scritti da Chiara Rossi su economia, tecnologia, sostenibilità e interviste.',
};

export default function ArticoliLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
