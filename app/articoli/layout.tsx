import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articoli',
  description: 'Archivio degli articoli scritti',
};

export default function ArticoliLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
