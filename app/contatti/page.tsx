'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';

export default function ContattiPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate Formspree submission delay
    setTimeout(() => {
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <>
      <section style={{
        background: 'var(--bg)',
        padding: '5rem 0',
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}>
          
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p style={{
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              marginBottom: '1rem',
            }}>
              Mettiamoci in contatto
            </p>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              color: 'var(--navy)',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}>
              Lavoriamo insieme.
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginBottom: '3rem',
              maxWidth: '440px',
            }}>
              Sei una testata in cerca di una nuova firma o un&apos;azienda che vuole strutturare la propria comunicazione? Scrivimi per parlarne.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'white', border: '1px solid var(--border)', color: 'var(--gold)' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Email</h3>
                  <a href="mailto:chiara@example.com" style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--navy)', textDecoration: 'none' }}>
                    chiara@example.com
                  </a>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'white', border: '1px solid var(--border)', color: 'var(--gold)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Base Operativa</h3>
                  <p style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--navy)' }}>
                    Milano / Remote
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem' }}>Seguimi su</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" className="social-btn" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="social-btn" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="social-btn" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              background: 'var(--surface)',
              padding: '3rem',
              border: '1px solid var(--border)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.02)',
            }}
          >
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '2rem' }}>
              Invia un messaggio
            </h2>

            {formStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                style={{ padding: '2rem', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', textAlign: 'center' }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                  <div style={{ background: '#dcfce7', padding: '1rem', borderRadius: '50%' }}>
                    <Send size={24} style={{ color: '#166534' }} />
                  </div>
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>Messaggio inviato!</h3>
                <p>Grazie per avermi contattata. Ti risponderò al più presto.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="name" className="form-label">Nome Completo</label>
                  <input type="text" id="name" name="name" required className="form-input" placeholder="Es. Mario Rossi" />
                </div>
                
                <div>
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" name="email" required className="form-input" placeholder="Es. mario@azienda.it" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="form-label">Oggetto</label>
                  <select id="subject" name="subject" className="form-input" required defaultValue="">
                    <option value="" disabled>Seleziona un motivo...</option>
                    <option value="collaborazione-editoriale">Collaborazione Editoriale</option>
                    <option value="consulenza">Consulenza di Comunicazione</option>
                    <option value="intervista">Richiesta Intervista</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="form-label">Messaggio</label>
                  <textarea id="message" name="message" required className="form-input" rows={5} placeholder="Come posso aiutarti?"></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary" 
                  disabled={formStatus === 'submitting'}
                  style={{ 
                    marginTop: '0.5rem', 
                    width: '100%', 
                    justifyContent: 'center',
                    opacity: formStatus === 'submitting' ? 0.7 : 1,
                    cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer'
                  }}
                >
                  {formStatus === 'submitting' ? 'Invio in corso...' : (
                    <>Invia Messaggio <Send size={16} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>

      {/* Newsletter Strip */}
      <section style={{ background: 'var(--navy)', padding: '5rem 0', textAlign: 'center', color: 'white' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', marginBottom: '1rem' }}>
            Iscriviti alla Newsletter
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.6 }}>
            Ricevi una volta al mese le mie riflessioni sul mondo della comunicazione, brand journalism e le migliori letture che ho fatto. Nessun fronzolo, solo contenuti utili.
          </p>
          <form style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input 
              type="email" 
              placeholder="La tua email" 
              required
              style={{
                padding: '0.875rem 1.25rem',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                color: 'white',
                fontFamily: "'Inter', sans-serif",
                minWidth: '280px',
                outline: 'none',
              }}
            />
            <button type="button" className="btn-gold" onClick={(e) => {
              e.preventDefault();
              alert("L'integrazione con Substack/Mailchimp andrà inserita qui.");
            }}>
              Iscriviti
            </button>
          </form>
        </div>
      </section>

      <style jsx global>{`
        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: white;
          border: 1px solid var(--border);
          color: var(--navy);
          transition: all 0.2s ease;
        }
        .social-btn:hover {
          background: var(--navy);
          color: white;
          border-color: var(--navy);
        }
      `}</style>
    </>
  );
}
