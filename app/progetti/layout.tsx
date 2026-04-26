import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Progetti',
  description: 'Case studies e progetti di consulenza strategica in comunicazione aziendale curati da Chiara Rossi.',
};

export default function ProgettiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
