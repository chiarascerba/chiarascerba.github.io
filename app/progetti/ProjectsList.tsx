'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  sector: string;
  year: string;
  tags: string[];
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  coverImage?: string;
}

export default function ProjectsList({ projects }: { projects: Project[] }) {
  return (
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
            background: project.coverImage ? `linear-gradient(rgba(248, 250, 252, 0.8), rgba(248, 250, 252, 0.8)), url(${project.coverImage})` : 'linear-gradient(135deg, var(--bg) 0%, #e2e8f0 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
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
              {project.tags?.map(tag => (
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
                {project.challenge?.substring(0, 120)}...
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

      <style jsx global>{`
        @media (min-width: 992px) {
          .project-card-layout {
            grid-template-columns: 1.3fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
