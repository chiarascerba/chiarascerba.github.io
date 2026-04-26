import { client } from '@/lib/sanity.client';
import { articlesQuery } from '@/lib/sanity.queries';
import ArticlesList from './ArticlesList';

export const dynamic = 'force-static';

export default async function ArticoliPage() {
  const articles = await client.fetch(articlesQuery);

  return (
    <>
      {/* ── HEADER ── */}
      <section style={{
        background: 'var(--surface)',
        padding: '5rem 0 3rem',
        borderBottom: '1px solid var(--border)',
        textAlign: 'center',
      }}>
        <div className="container">
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            color: 'var(--navy)',
            marginBottom: '1rem',
          }}>
            Articoli e Analisi
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Una selezione di inchieste, reportage e interviste pubblicate sulle principali testate nazionali.
          </p>
        </div>
      </section>

      {/* ── FILTERS & GRID ── */}
      <section className="section" style={{ background: 'var(--bg)', minHeight: '60vh' }}>
        <div className="container">
          <ArticlesList initialArticles={articles} />
        </div>
      </section>
    </>
  );
}
