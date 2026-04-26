import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Contatta Chiara Rossi per collaborazioni editoriali, consulenza di comunicazione o richieste stampa.',
};

export default function ContattiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
