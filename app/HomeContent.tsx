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
    desc: 'Reportage, interviste e analisi. Specializzata in Politica internazionale, Affari Europei e Cronaca.',
  },
  {
    icon: <Building2 size={28} />,
    title: 'Comunicazione Aziendale',
    desc: 'Strategie di brand, gestione delle relazioni con i media e comunicazione per aziende che vogliono costruire una solida reputazione.',
  },
  {
    icon: <Megaphone size={28} />,
    title: 'Content Strategy',
    desc: 'Progettazione di piani editoriali: blog, newsletter, social media e contenuti per raccontare il business aziendale.',
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
      <section className="hero-section" style={{
        minHeight: 'calc(100vh - 72px)',
        background: 'linear-gradient(135deg, #1e4d3b 0%, #2a6b52 60%, #163a2c 100%)',
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

        <div className="container hero-grid">
          {/* Text */}
          <div className="hero-text">
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
              Giornalista · Consulente · Content Strategist
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
              Giornalista con esperienza e consulente di comunicazione strategica per aziende e startup.
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
            className="hero-image-container"
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
                alt="Chiara Scerba"
                width={380}
                height={480}
                sizes="(max-width: 768px) 100vw, 380px"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  position: 'relative',
                  zIndex: 2,
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
          className="stats-bar"
        >
          <div className="container stats-container">
            {[
              { value: '3+', label: 'Anni di esperienza' },
              { value: '200+', label: 'Articoli pubblicati' },
              { value: '2+', label: 'Testate collaborate' },
              { value: '2+', label: 'Aziende clienti' },
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

      {/* ── SERVIZI ── */}
      <section id="servizi" className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              marginBottom: '0.75rem',
            }}>
              Come posso aiutarti
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '1.5rem' }}>Aree di Competenza</h2>
            <div className="divider" style={{ margin: '0 auto' }} />
          </div>

          <div className="services-grid">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  padding: '2.5rem',
                  border: '1px solid var(--border)',
                  background: 'white',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                }}
              >
                <div style={{ color: 'var(--gold)', marginBottom: '1.5rem' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.desc}</p>
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

      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          padding: 6rem 1.5rem;
        }
        .stats-container {
          display: flex;
          justify-content: center;
          gap: 4rem;
          flex-wrap: wrap;
          padding: 1.5rem;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
        }
        .stats-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.25);
          backdrop-filter: blur(8px);
          border-top: 1px solid rgba(201,169,110,0.2);
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
            padding: 4rem 1.5rem 8rem;
          }
          .hero-text {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-image-container {
            order: -1;
          }
          .stats-bar {
            position: relative;
          }
          .stats-container {
            gap: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
             min-height: auto !important;
          }
          .stats-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
