import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chi sono',
  description: 'Scopri il percorso professionale di Chiara Rossi, giornalista e consulente di comunicazione aziendale con oltre 10 anni di esperienza.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
