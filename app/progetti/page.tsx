'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

export default function ProgettiPage() {
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
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            Case Studies
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              marginBottom: '1rem',
            }}
          >
            Dalla Strategia ai Risultati
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Progetti di consulenza in cui la comunicazione ha risolto problemi di business, ricostruito la fiducia o aperto nuovi mercati.
          </motion.p>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4rem',
          }}>
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  display: 'grid',
                  gridTemplateColumns: '1fr', // Mobile first
                  overflow: 'hidden',
                }}
                className="project-card-layout"
              >
                {/* Visual / Abstract area */}
                <div style={{
                  background: 'linear-gradient(135deg, var(--bg) 0%, #e2e8f0 100%)',
                  padding: '3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderRight: '1px solid var(--border)',
                }}>
                  <div style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--navy)',
                    marginBottom: '1rem',
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    {project.sector}
                  </div>
                  <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.8rem',
                    color: 'var(--navy)',
                    lineHeight: 1.3,
                    marginBottom: '1.5rem',
                  }}>
                    {project.title}
                  </h2>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '2rem',
                  }}>
                    {project.summary}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.tags.map(tag => (
                      <span key={tag} className="badge" style={{ borderColor: 'var(--navy)', color: 'var(--navy)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info area */}
                <div style={{
                  padding: '3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  <div>
                    <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Cliente</h3>
                    <p style={{ fontWeight: 500, marginBottom: '1.5rem' }}>{project.client}</p>
                    
                    <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Sfida</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                      {project.challenge.substring(0, 120)}...
                    </p>
                  </div>
                  
                  <div>
                    <Link href={`/progetti/${project.slug}`} className="btn-outline" style={{ width: '100%', justifyContent: 'space-between' }}>
                      Leggi il Case Study <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @media (min-width: 992px) {
          .project-card-layout {
            grid-template-columns: 1.3fr 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
