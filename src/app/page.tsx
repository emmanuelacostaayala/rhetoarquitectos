"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import './globals.css';

const TIMELINE_PROJECTS = [
  { title: 'Larimar City & Resort', year: '2018 →', location: 'Punta Cana, RD', src: '/larimar.jpg' },
  { title: 'Torre Omnia Lux', year: '2014', location: 'Santa Cruz, Bolivia', src: '/torre-omnia-lux.jpg' },
  { title: 'Torre Riviera', year: '2012', location: 'Santa Cruz, Bolivia', src: '/torre-riviera.jpg' },
  { title: 'Edificio Jardines de Isuto', year: '2010', location: 'Bolivia', src: '/cimientos.jpg' },
  { title: 'Villas de Lujo (Mazarrón)', year: '2008', location: 'Murcia, España', src: '/larimar.jpg' },
  { title: 'Residencial El Alcolar', year: '2006', location: 'Murcia, España', src: '/torre-riviera.jpg' },
];

function TimelineProjectRow({ project }: { project: typeof TIMELINE_PROJECTS[0] }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="timeline-item draw-border-b"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.closest('.timeline-section')!.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      <span className="timeline-year tech-text">{project.year}</span>
      <span className="timeline-title">{project.title}</span>
      <span className="timeline-location tech-text">{project.location}</span>

      {hovered && (
        <div
          className="timeline-floating-img"
          style={{ left: mousePos.x + 24, top: mousePos.y - 80 }}
        >
          <Image src={project.src} alt={project.title} fill sizes="300px" />
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [splitOffset, setSplitOffset] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const normX = (e.clientX - centerX) / centerX;
      const normY = (e.clientY - centerY) / centerY;

      setSplitOffset({ x: normX * 40, y: normY * 10 });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <main style={{ position: 'relative' }}>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 9999,
          background: 'var(--text-primary)',
          color: 'var(--bg-primary)',
          border: 'none',
          padding: '8px 16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          cursor: 'pointer',
          textTransform: 'uppercase'
        }}
        className="tech-text"
      >
        [ THEME: {theme} ]
      </button>

      {/* Floating Blueprint Coordinates */}
      <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999, pointerEvents: 'none' }} className="tech-text">
        [ X: {coords.x.toString().padStart(4, '0')} Y: {coords.y.toString().padStart(4, '0')} ]
      </div>

      {/* Marquee Slogan */}
      <div className="marquee-container">
        <div className="marquee-content">
          INGENIERÍA SOCIAL DEL FUTURO +++ EST. 2006 +++ ARCHITECTURAL BLUEPRINT 01 +++ CREADORES DE LARIMAR CITY +++ DISEÑO ESTRUCTURAL +++ INGENIERÍA SOCIAL DEL FUTURO +++ EST. 2006 +++ ARCHITECTURAL BLUEPRINT 01 +++ CREADORES DE LARIMAR CITY +++ DISEÑO ESTRUCTURAL
        </div>
      </div>

      {/* Top Nav */}
      <nav className="top-nav draw-border-b">
        <div className="tech-text">BUILT FOR DESIGNERS <br />&amp; VISUAL THINKERS</div>
        <div className="top-nav-items tech-text" style={{ textAlign: 'right' }}>
          <div>SEC. 001 <br /> RHETO</div>
          <div>REV. A <br /> EST. 2006</div>
          <div>LOC. <br /> MADRID / STA CRUZ / P.CANA</div>
        </div>
      </nav>

      {/* Mega Hero */}
      <section
        className="hero-mega draw-border-b"
        style={{
          position: 'relative',
          '--split-x': `${splitOffset.x}px`,
          '--split-y': `${splitOffset.y}px`
        } as React.CSSProperties}
      >
        <div style={{ position: 'absolute', top: 20, right: 20 }} className="tech-text">[ DWG-01 ]</div>
        <div style={{ position: 'absolute', bottom: 20, left: 20 }} className="tech-text">[ SCALE: 1:100 ]</div>

        <p className="hero-mega-sub tech-text" style={{ maxWidth: '400px', lineHeight: 1.6 }}>
          ESTUDIO TÉCNICO // La arquitectura no es solo el diseño de espacios; es la ingeniería social del futuro. El crisol donde se forjó la filosofía de los megaproyectos.
        </p>
        <h1 className="hero-mega-text" style={{ marginTop: '2rem' }}>
          <span className="split-text" data-text="RHETO">RHETO</span>
          <span className="split-text" data-text="ARQTS">ARQTS</span>
        </h1>
      </section>

      {/* Split Section: Clients List + Image Grid */}
      <section className="split-section draw-border-b">
        <div className="split-left draw-border-r">
          <div className="split-left-content">
            <h2 className="tech-text pb-4 mb-4 draw-border-b">Selected Projects &amp; Legacy</h2>
            <div className="client-list">
              <p>Larimar City &amp; Resort</p>
              <p>Torre Omnia Lux</p>
              <p>Torre Riviera</p>
              <p>Edificio Jardines de Isuto</p>
              <p>Villas de Lujo (Mazarrón)</p>
              <p>Residencial El Alcolar</p>
            </div>
            <div className="mt-12 text-sm text-muted">
              <p className="mb-4">Antes de consolidar el liderazgo internacional de CLERHP Estructuras en 2011, los cimientos nacieron en Rheto Arquitectos.</p>
              <p>Fundado por Juan Andrés Romero, este estudio es el entorno creativo donde se forjó la filosofía que hoy rige proyectos a escala global.</p>
            </div>
          </div>
        </div>

        <div className="split-right">
          <div className="image-cell draw-border-b draw-border-r">
            <div style={{ position: 'absolute', top: 8, left: 8, zIndex: 10 }} className="tech-text">[ FIG. 1A ]</div>
            <Image className="zoom-img keep-color" src="/larimar.jpg" alt="Larimar City &amp; Resort" fill sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="image-caption">Larimar City &amp; Resort (Punta Cana)</div>
          </div>
          <div className="image-cell draw-border-b">
            <div style={{ position: 'absolute', top: 8, left: 8, zIndex: 10 }} className="tech-text">[ FIG. 1B ]</div>
            <Image className="zoom-img" src="/torre-omnia-lux.jpg" alt="Torre Omnia Lux" fill sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="image-caption">Torre Omnia Lux (Bolivia)</div>
          </div>
          <div className="image-cell draw-border-r">
            <div style={{ position: 'absolute', top: 8, left: 8, zIndex: 10 }} className="tech-text">[ FIG. 2A ]</div>
            <Image className="zoom-img" src="/torre-riviera.jpg" alt="Torre Riviera" fill sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="image-caption">Torre Riviera (Bolivia)</div>
          </div>
          <div className="image-cell">
            <div style={{ position: 'absolute', top: 8, left: 8, zIndex: 10 }} className="tech-text">[ FIG. 2B ]</div>
            <Image className="zoom-img" src="/cimientos.jpg" alt="Cimientos de Rheto" fill sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="image-caption">Nuestros Cimientos</div>
          </div>
        </div>
      </section>

      {/* Chronological Timeline */}
      <section className="timeline-section draw-border-b">
        <div className="projects-header tech-text draw-border-b">
          <div>(CRONOLOGÍA TÉCNICA)</div>
          <div className="top-nav-items">
            <span>RHETO ARQTS</span>
            <span>DATA-LOG 06-26</span>
          </div>
        </div>
        {TIMELINE_PROJECTS.map((project) => (
          <TimelineProjectRow key={project.title} project={project} />
        ))}
      </section>

      {/* Tablet-style Project Showcase */}
      <section className="draw-border-b">
        <div className="projects-header tech-text draw-border-b">
          <div>(DETALLES DE OBRA)</div>
          <div className="top-nav-items">
            <span>RHETO ARQTS</span>
            <span>+ EXPANDIR</span>
          </div>
        </div>

        <div className="project-row draw-border-b">
          <div className="project-image-large draw-border-r">
            <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 10 }} className="tech-text">[ ELEV. OMNIA ]</div>
            <Image className="zoom-img" src="/torre-omnia-lux.jpg" alt="Omnia Lux" fill sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="project-details">
            <h3 className="project-title">Torre Omnia Lux</h3>
            <p className="project-desc">Un referente fundamental en nuestro portafolio. Este edificio residencial de lujo en Santa Cruz destaca por sus icónicos balcones curvos y su excelencia técnica.</p>
            <div className="publication-list text-xs">
              <div className="publication-item"><span>Premio Nacional</span><span>Arquitectura</span></div>
              <div className="publication-item"><span>Domus</span><span>ArchDaily</span></div>
              <div className="publication-item"><span>Diseño Conceptual</span><span>Estructura 100% Rheto</span></div>
            </div>
          </div>
        </div>

        <div className="project-row">
          <div className="project-details draw-border-r">
            <h3 className="project-title">Torre Riviera</h3>
            <p className="project-desc">Reconocida por su imponente altura y fachada verdaderamente moderna, combina espacios comerciales y residenciales, consolidando el impacto del estudio.</p>
            <div className="publication-list text-xs">
              <div className="publication-item"><span>Uso Mixto</span><span>Arquitectura Comercial</span></div>
              <div className="publication-item"><span>Santa Cruz</span><span>Bolivia</span></div>
            </div>
          </div>
          <div className="project-image-large">
            <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 10 }} className="tech-text">[ ELEV. RIVIERA ]</div>
            <Image className="zoom-img" src="/torre-riviera.jpg" alt="Torre Riviera" fill sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="news-section draw-border-b">
        <div className="section-label tech-text">(REGISTRO DE NOTICIAS)</div>
        <div className="news-grid">
          <article className="news-item">
            <div className="news-meta tech-text">/// 07 MAR 2026 // MASTER PLAN</div>
            <h3 className="news-title">Larimar City &amp; Resort: Rethinking Urban Living in Punta Cana</h3>
            <div className="news-image">
              <Image className="zoom-img" src="/larimar.jpg" alt="Larimar City" fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="draw-border-b mt-4"></div>
          </article>
          <article className="news-item">
            <div className="news-meta tech-text">/// 24 FEB 2026 // PUBLICACIÓN</div>
            <h3 className="news-title">Torre Riviera en Santa Cruz: Un hito de diseño moderno mixto</h3>
            <div className="news-image">
              <Image className="zoom-img" src="/torre-riviera.jpg" alt="Torre Riviera" fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="draw-border-b mt-4"></div>
          </article>
          <article className="news-item">
            <div className="news-meta tech-text">/// 21 JAN 2026 // ENTREVISTA</div>
            <h3 className="news-title">Juan Andrés Romero: La visión detrás de Rheto y CLERHP</h3>
            <div className="news-image">
              <Image className="zoom-img" src="/cimientos.jpg" alt="Cimientos de Rheto" fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="draw-border-b mt-4"></div>
          </article>
        </div>
      </section>

      {/* Mega Footer */}
      <footer className="mega-footer">
        <div className="tech-text">ÍNDICE PRINCIPAL</div>
        <nav className="footer-nav">
          <a href="#" className="footer-link">Home</a>
          <a href="#" className="footer-link">Works</a>
          <a href="#" className="footer-link">Studio</a>
          <a href="#" className="footer-link">Cronología</a>
          <a href="#" className="footer-link">News</a>
          <a href="#" className="footer-link">Contacts</a>
        </nav>
        <div>
          <p className="footer-mission text-sm">Innovación, diseño y desarrollo estructural para las ciudades del mañana. Construyendo desde 2006.</p>
        </div>
      </footer>
      <div style={{ fontSize: '0.65rem', padding: '1rem 2rem', borderTop: '1px solid var(--border-light)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
        SYS.INFO: HTTPS://RHETO-ARQUITECTOS.COM // {new Date().getFullYear()} RHETO ARQUITECTOS. ALL RIGHTS RESERVED. [END OF FILE]
      </div>
    </main>
  );
}
