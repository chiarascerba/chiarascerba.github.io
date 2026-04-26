'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { articles } from '@/data/articles';

const categories = ['Tutti', 'Economia', 'Tecnologia', 'Sostenibilità', 'Interviste', 'Cultura'];

export default function ArticoliPage() {
  const [activeCategory, setActiveCategory] = useState('Tutti');

  const filteredArticles = activeCategory === 'Tutti' 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

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
          
          {/* Filters */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '4rem',
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '99px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: activeCategory === cat 
                    ? '1px solid var(--navy)' 
                    : '1px solid var(--border)',
                  background: activeCategory === cat ? 'var(--navy)' : 'transparent',
                  color: activeCategory === cat ? 'white' : 'var(--navy)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <motion.a
                  layout
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '2rem',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div className="badge">{article.category}</div>
                    <ArrowUpRight size={18} style={{ color: 'var(--text-muted)' }} />
                  </div>
                  
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--navy)',
                    lineHeight: 1.4,
                    marginBottom: '1rem',
                    flexGrow: 0,
                  }}>
                    {article.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                    flexGrow: 1,
                  }}>
                    {article.abstract}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid var(--border)',
                    paddingTop: '1.25rem',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{article.testate}</span>
                    <span>{new Date(article.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredArticles.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
              Nessun articolo trovato per questa categoria.
            </div>
          )}
          
        </div>
      </section>
    </>
  );
}
