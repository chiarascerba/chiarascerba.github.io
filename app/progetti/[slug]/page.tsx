import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { client } from '@/lib/sanity.client';
import { projectsQuery, projectBySlugQuery } from '@/lib/sanity.queries';
import type { Metadata } from 'next';

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const projects = await client.fetch(projectsQuery);
    if (!projects || projects.length === 0) {
      // Ritorna un array vuoto o un placeholder se non ci sono progetti
      return [];
    }
    return projects.map((project: any) => ({
      slug: project.slug,
    }));
  } catch (error) {
    console.error("Error fetching projects for static params:", error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await params;
  const project = await client.fetch(projectBySlugQuery, { slug: p.slug });
  
  if (!project) return { title: 'Progetto Non Trovato' };
  
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const project = await client.fetch(projectBySlugQuery, { slug: p.slug });

  if (!project) {
    notFound();
  }

  return (
    <>
      <section style={{
        background: 'var(--surface)',
        padding: '4rem 0',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Link href="/progetti" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.85rem',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            color: 'var(--text-muted)',
            marginBottom: '2rem',
            textDecoration: 'none',
          }}>
            <ArrowLeft size={16} /> Torna ai progetti
          </Link>

          <div style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '1rem',
          }}>
            {project.sector}
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--navy)',
            lineHeight: 1.2,
            marginBottom: '1.5rem',
          }}>
            {project.title}
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
          }}>
            {project.summary}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
          }}>
            <div>
              <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Cliente</h3>
              <p style={{ fontWeight: 500 }}>{project.client}</p>
            </div>
            <div>
              <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Anno</h3>
              <p style={{ fontWeight: 500 }}>{project.year}</p>
            </div>
            <div>
              <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Servizi</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.tags?.map((tag: string) => (
                  <span key={tag} style={{ fontSize: '0.8rem', color: 'var(--navy)', background: 'var(--border-light)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: 'var(--navy)', marginBottom: '1.5rem' }}>
              La Sfida
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text)', marginBottom: '1rem' }}>
              {project.challenge}
            </p>
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: 'var(--navy)', marginBottom: '1.5rem' }}>
              La Soluzione
            </h2>
            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderLeft: '4px solid var(--gold)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            }}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text)' }}>
                {project.solution}
              </p>
            </div>
          </div>

          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: 'var(--navy)', marginBottom: '1.5rem' }}>
              I Risultati
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {project.results?.map((result: string, i: number) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={24} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.1rem' }} />
                  <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text)' }}>
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      
      {/* CTA Bottom */}
      <section style={{ padding: '4rem 0', background: 'var(--surface)', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '1.5rem' }}>
          Hai una sfida simile da affrontare?
        </h2>
        <Link href="/contatti" className="btn-primary">
          Parliamone
        </Link>
      </section>
    </>
  );
}
