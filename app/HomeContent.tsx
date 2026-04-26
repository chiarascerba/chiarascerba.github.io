'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Feather, Building2, Megaphone } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const services = [
  {
    icon: <Feather size={28} />,
    title: 'Giornalismo',
    desc: 'Reportage, interviste e analisi per le principali testate italiane. Economia, tecnologia, sostenibilità, cultura d\'impresa.',
  },
  {
    icon: <Building2 size={28} />,
    title: 'Comunicazione Aziendale',
    desc: 'Brand voice, crisis communication e media relations per aziende che vogliono costruire una reputazione solida.',
  },
  {
    icon: <Megaphone size={28} />,
    title: 'Content Strategy',
    desc: 'Progettazione di ecosistemi editoriali: blog, newsletter, white paper e contenuti thought leadership.',
  },
];

interface Article {
  id: string;
  title: string;
  testate: string;
  date: string;
  category: string;
  abstract: string;
  url: string;
  featured: boolean;
}

export default function HomeContent({ featuredArticles }: { featuredArticles: Article[] }) {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        minHeight: 'calc(100vh - 72px)',
        background: 'linear-gradient(135deg, var(--navy) 0%, #243a62 60%, #1a2c4e 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative lines */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(201,169,110,0.05) 0px, rgba(201,169,110,0.05) 1px, transparent 1px, transparent 100px)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          padding: '6rem 1.5rem',
        }}>
          {/* Text */}
          <div>
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                marginBottom: '1.5rem',
              }}
            >
              Giornalista · Consulente · Storyteller
            </motion.p>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 700,
                color: 'white',
                lineHeight: 1.12,
                marginBottom: '1.5rem',
              }}
            >
              Raccontare il business
              <span style={{ color: 'var(--gold)' }}> attraverso</span>
              <br />
              le parole.
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              style={{
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.75,
                maxWidth: '480px',
                marginBottom: '2.5rem',
              }}
            >
              Giornalista con oltre 10 anni di esperienza nelle principali testate
              italiane e consulente di comunicazione strategica per aziende e startup.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <Link href="/articoli" className="btn-gold">
                Leggi gli articoli <ArrowRight size={16} />
              </Link>
              <Link href="/contatti" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.75rem',
                border: '2px solid rgba(255,255,255,0.4)',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                fontFamily: "'Inter', sans-serif",
                transition: 'all 0.25s ease',
              }}>
                Collabora con me
              </Link>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div style={{
              position: 'relative',
              width: '380px',
              maxWidth: '100%',
            }}>
              {/* Gold border decoration */}
              <div style={{
                position: 'absolute',
                top: '-16px',
                left: '-16px',
                right: '16px',
                bottom: '16px',
                border: '2px solid var(--gold)',
                opacity: 0.4,
                pointerEvents: 'none',
                zIndex: 1,
              }} />
              <Image
                src="/chiara-portrait.png"
                alt="Chiara Scerba – Giornalista e Consulente di Comunicazione"
                width={380}
                height={480}
                sizes="(max-width: 768px) 100vw, 380px"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  position: 'relative',
                  zIndex: 2,
                  filter: 'grayscale(10%)',
                }}
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(0,0,0,0.25)',
            backdropFilter: 'blur(8px)',
            borderTop: '1px solid rgba(201,169,110,0.2)',
          }}
        >
          <div className="container" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4rem',
            flexWrap: 'wrap',
            padding: '1.5rem',
          }}>
            {[
              { value: '10+', label: 'Anni di esperienza' },
              { value: '200+', label: 'Articoli pubblicati' },
              { value: '15+', label: 'Testate collaborate' },
              { value: '30+', label: 'Aziende clienti' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--gold)',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.6)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FEATURED ARTICLES ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
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
              In Evidenza
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
              Gli ultimi articoli
            </h2>
            <div className="divider" style={{ margin: '1rem auto' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}>
            {featuredArticles.map((article, i) => (
              <motion.a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card"
                style={{
                  display: 'block',
                  padding: '2rem',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                <div className="badge" style={{ marginBottom: '1rem' }}>{article.category}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: 'var(--navy)',
                  lineHeight: 1.4,
                  marginBottom: '0.75rem',
                }}>
                  {article.title}
                </h3>
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.65,
                  marginBottom: '1.25rem',
                }}>
                  {article.abstract}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid var(--border)',
                  paddingTop: '1rem',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  fontFamily: "'Inter', sans-serif",
                }}>
                  <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{article.testate}</span>
                  <span>{new Date(article.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/articoli" className="btn-outline">
              Tutti gli articoli <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
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
              Cosa faccio
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>Servizi</h2>
            <div className="divider" style={{ margin: '1rem auto' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
          }}>
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{
                  padding: '2.5rem 2rem',
                  borderTop: '3px solid var(--gold)',
                  background: 'var(--bg)',
                  transition: 'box-shadow 0.25s ease',
                }}
              >
                <div style={{ color: 'var(--gold)', marginBottom: '1.25rem' }}>{s.icon}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.3rem',
                  marginBottom: '0.75rem',
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section style={{
        background: 'var(--gold)',
        padding: '4rem 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            color: 'var(--navy)',
            marginBottom: '1rem',
          }}>
            Hai un progetto in mente?
          </h2>
          <p style={{
            color: 'var(--navy)',
            opacity: 0.8,
            fontSize: '1rem',
            marginBottom: '2rem',
          }}>
            Parliamone. Costruiamo insieme la narrativa giusta per il tuo brand.
          </p>
          <Link href="/contatti" className="btn-primary">
            Scrivimi ora <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
