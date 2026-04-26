'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--navy)',
      color: 'rgba(255,255,255,0.7)',
      padding: '4rem 0 2rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem',
              color: 'white',
              marginBottom: '0.5rem',
            }}>
              Chiara Scerba
            </h3>
            <p style={{
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1rem',
              fontFamily: "'Inter', sans-serif",
            }}>
              Giornalista & Consulente di Comunicazione
            </p>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '280px' }}>
              Raccontare il business attraverso le parole. Con rigore giornalistico e sensibilità strategica.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              marginBottom: '1.25rem',
            }}>
              Esplora
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { href: '/about', label: 'Chi sono' },
                { href: '/articoli', label: 'Articoli' },
                { href: '/progetti', label: 'Progetti' },
                { href: '/contatti', label: 'Contatti' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.7)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              marginBottom: '1.25rem',
            }}>
              Contatti
            </h4>
            <a
              href="mailto:chiara.scerba@gmail.com"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}
            >
              <Mail size={16} />
              chiara.scerba@gmail.com
            </a>

            {/* Social */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[
                { href: 'https://www.linkedin.com/in/chiara-scerba/', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, label: 'LinkedIn' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'rgba(255,255,255,0.7)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--gold)';
                    e.currentTarget.style.color = 'var(--gold)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.4)',
        }}>
          <span>© {year} Chiara Scerba. Tutti i diritti riservati.</span>
          <span>Giornalismo · Comunicazione · Consulenza</span>
        </div>
      </div>
    </footer>
  );
}
