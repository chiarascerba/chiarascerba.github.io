import { motion } from 'framer-motion';
import { client } from '@/lib/sanity.client';
import { projectsQuery } from '@/lib/sanity.queries';
import ProjectsList from './ProjectsList';

export const dynamic = 'force-static';

export default async function ProgettiPage() {
  const projects = await client.fetch(projectsQuery);

  return (
    <>
      {/* ── HEADER ── */}
      <section style={{
        background: 'var(--navy)',
        padding: '6rem 0 4rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container">
          <p style={{
            fontSize: '0.75rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            marginBottom: '1rem',
          }}>
            Case Studies
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            marginBottom: '1rem',
            color: 'white',
          }}>
            Dalla Strategia ai Risultati
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.75)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Progetti di consulenza in cui la comunicazione ha risolto problemi di business, ricostruito la fiducia o aperto nuovi mercati.
          </p>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <ProjectsList projects={projects} />
        </div>
      </section>
    </>
  );
}
