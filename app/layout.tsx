import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Chiara Rossi – Giornalista & Consulente di Comunicazione',
    template: '%s | Chiara Rossi',
  },
  description:
    'Portfolio professionale di Chiara Rossi, giornalista e consulente di comunicazione aziendale. Articoli su economia, tecnologia, sostenibilità e case study di comunicazione strategica.',
  keywords: ['giornalista', 'comunicazione aziendale', 'consulente', 'brand journalism', 'content strategy'],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Chiara Rossi',
    title: 'Chiara Rossi – Giornalista & Consulente di Comunicazione',
    description:
      'Portfolio professionale di Chiara Rossi, giornalista e consulente di comunicazione aziendale.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@chiaraROSSI',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <Navbar />
        <main style={{ paddingTop: '72px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
