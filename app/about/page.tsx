'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const timelineItems = [
  {
    year: '2024',
    role: 'Consulente Senior di Comunicazione',
    company: 'Freelance / Studio Rossi Comunicazione',
    desc: 'Consulenza strategica per aziende quotate e startup in ambito media relations, brand voice e crisis communication.',
  },
  {
    year: '2021',
    role: 'Redattrice Economica',
    company: 'Il Sole 24 Ore',
    desc: 'Responsabile della copertura del settore manifatturiero e dell\'economia circolare. Autrice di inchieste premiate a livello nazionale.',
  },
  {
    year: '2019',
    role: 'Giornalista',
    company: 'Corriere della Sera – Economia',
    desc: 'Reportage e interviste ai CEO delle principali aziende italiane. Focus su finanza d\'impresa e mercati internazionali.',
  },
];

const skills = [
  'Brand Journalism', 'Content Strategy', 'Crisis Communication',
  'Media Relations', 'Copywriting', 'Storytelling d\'Impresa',
  'SEO Editoriale', 'Newsletter Marketing', 'Interviste Professionali',
  'Fact-Checking', 'Data Journalism', 'Comunicazione ESG',
];

const values = [
  {
    title: 'Rigore',
    desc: 'Ogni parola è verificata. La credibilità non si negozia, né in un articolo né in una campagna di comunicazione.',
  },
  {
    title: 'Chiarezza',
    desc: 'Il linguaggio tecnico non deve essere una barriera. Il mio lavoro è rendere il complesso accessibile senza banalizzarlo.',
  },
  {
    title: 'Prospettiva',
    desc: 'La comunicazione efficace nasce da una profonda conoscenza del contesto: settore, mercato, pubblico di riferimento.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section style={{
        background: 'linear-gradient(180deg, var(--navy) 0%, var(--navy-light) 100%)',
        padding: '5rem 0 6rem',
        textAlign: 'center',
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
            Chi sono
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'white',
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            Una carriera costruita sulla forza delle storie.
          </motion.h1>
        </div>
      </section>

      {/* ── BIO ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container bio-grid">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              top: '-12px',
              left: '-12px',
              right: '12px',
              bottom: '12px',
              border: '2px solid var(--gold)',
              opacity: 0.3,
            }} />
            <Image
              src="/chiara-portrait.png"
              alt="Chiara Scerba"
              width={440}
              height={540}
              sizes="(max-width: 768px) 100vw, 440px"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                position: 'relative',
                zIndex: 1
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              Chiara Scerba
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#374151', marginBottom: '1.25rem' }}>
              Sono una giornalista e consulente di comunicazione con esperienza nelle principali testate economiche italiane — dal <em>Corriere della Sera</em> a <em>Il Sole 24 Ore</em> — e in alcuni dei brand più rilevanti del panorama nazionale.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#374151', marginBottom: '1.25rem' }}>
              Ho raccontato l&apos;evoluzione del tessuto industriale italiano, intervistato CEO e imprenditori di prima fila, coperto crisi aziendali e trasformazioni di mercato con la stessa attenzione che riservo a ogni virgola.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#374151', marginBottom: '2rem' }}>
              Oggi affianco aziende e startup nella costruzione della loro presenza editoriale e reputazionale. Perché la comunicazione, fatta bene, non è un costo: è un investimento.
            </p>

            {/* Competenze */}
            <h3 style={{ fontSize: '1rem', fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '1.25rem' }}>
              Competenze Core
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}>
              {skills.map((s) => (
                <span key={s} className="badge">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              marginBottom: '0.75rem',
            }}>
              Percorso
            </p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Esperienze Professionali</h2>
            <div className="divider" style={{ margin: '1rem auto' }} />
          </div>

          <div className="timeline-wrapper">
            {/* vertical line */}
            <div className="timeline-line" />

            {timelineItems.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="timeline-item"
              >
                <div className="timeline-year">
                  {item.year}
                </div>
                <div className="timeline-content">
                  {/* dot */}
                  <div className="timeline-dot" />
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>{item.role}</h3>
                  <p style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: '0.75rem',
                  }}>
                    {item.company}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              marginBottom: '0.75rem',
            }}>
              Principi
            </p>
            <h2 style={{ color: 'white', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
              I valori che guidano il mio lavoro
            </h2>
            <div className="divider" style={{ margin: '1rem auto' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{
                  padding: '2rem',
                  border: '1px solid rgba(201,169,110,0.2)',
                  background: 'rgba(255,255,255,0.04)',
                }}
              >
                <CheckCircle2 size={24} style={{ color: 'var(--gold)', marginBottom: '1rem' }} />
                <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.75rem' }}>{v.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .bio-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 5rem;
          align-items: start;
        }
        .timeline-wrapper {
          max-width: 700px;
          margin: 0 auto;
          position: relative;
        }
        .timeline-line {
          position: absolute;
          left: 80px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: var(--border);
        }
        .timeline-item {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 2rem;
          marginBottom: 3rem;
          align-items: start;
        }
        .timeline-year {
          font-family: 'Playfair Display', serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--gold);
          text-align: right;
          padding-top: 0.25rem;
        }
        .timeline-content {
          padding-left: 2rem;
          position: relative;
        }
        .timeline-dot {
          position: absolute;
          left: -0.5rem;
          top: 0.4rem;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--gold);
          border: 2px solid var(--surface);
          box-shadow: 0 0 0 2px var(--gold);
        }

        @media (max-width: 992px) {
          .bio-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 640px) {
          .timeline-line {
            left: 20px;
          }
          .timeline-item {
            grid-template-columns: 1fr;
            gap: 0.5rem;
            margin-bottom: 2.5rem;
          }
          .timeline-year {
            text-align: left;
            padding-left: 3.5rem;
          }
          .timeline-content {
            padding-left: 3.5rem;
          }
          .timeline-dot {
            left: -1rem;
          }
        }
      `}</style>
    </>
  );
}
