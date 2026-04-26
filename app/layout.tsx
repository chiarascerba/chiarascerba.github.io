import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Chiara Scerba – Giornalista & Consulente di Comunicazione',
    template: '%s | Chiara Scerba',
  },
  description:
    'Portfolio professionale di Chiara Scerba, giornalista e consulente di comunicazione aziendale. Articoli su economia, tecnologia, sostenibilità e case study di comunicazione strategica.',
  keywords: ['Affari europei', 'giornalista', 'comunicazione aziendale', 'consulente', 'content strategy'],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Chiara Scerba',
    title: 'Chiara Scerba – Giornalista & Content Strategist',
    description:
      'Portfolio professionale di Chiara Scerba, giornalista e content strategist.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@chiarascerba',
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
