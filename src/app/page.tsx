import './globals.css';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <div className="animate-fade-in-up">
            <div className="project-pill mb-4">Arquitectura & Ingeniería Social</div>
            <div className="mb-4">
              <h1 className="rheto-logo">
                RHETO<span>ARQUITECTOS</span>
              </h1>
            </div>
            <p style={{ maxWidth: '600px', fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-secondary)' }} className="delay-200 animate-fade-in-up">
              El crisol donde se forjó la filosofía de los megaproyectos del futuro. Más que diseño de espacios, somos la base del desarrollo urbano y humano.
            </p>
            <div className="divider delay-300 animate-fade-in-left"></div>
            <a href="#historia" className="btn-primary delay-400 animate-fade-in-up" style={{ marginTop: '2rem' }}>
              Descubrir Nuestra Esencia
            </a>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section id="historia" className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="grid-2 section-card animate-fade-in-up">
            <div style={{ position: 'relative', height: '100%', minHeight: '400px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }} className="founder-img-wrapper">
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, var(--accent-dark), var(--accent-light))', opacity: 0.1 }}></div>
              {/* Optional Placeholder for Architecture/Office Image */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>
                [ ESPACIO ARQUITECTÓNICO ]
              </div>
            </div>

            <div className="glass-card">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>Nuestros Cimientos</h2>
              <div className="divider" style={{ margin: '1rem 0 2rem' }}></div>
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  Antes de consolidar el liderazgo internacional de <strong>CLERHP Estructuras</strong> en 2011, los cimientos de nuestra visión nacieron en <strong>Rheto Arquitectos</strong>.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Fundado alrededor de 2006 por <strong>Juan Andrés Romero</strong> tras sus estudios en la ETSAM, este estudio de arquitectura fue el entorno creativo y técnico donde se forjó la filosofía que hoy rige proyectos a escala global.
                </p>
                <p>
                  Hoy en día, la esencia de Rheto Arquitectos sigue viva. Aporta el rigor de diseño, la sensibilidad espacial y la innovación técnica que respaldan estructural y operativamente a gigantes del desarrollo inmobiliario y urbano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Quote Section */}
      <section className="section-padding">
        <div className="container">
          <div className="quote-block animate-fade-in-up delay-100">
            <div className="quote-icon">&ldquo;</div>
            <p className="quote-text">
              La arquitectura no es solo el diseño de espacios; es la ingeniería social del futuro. En Rheto aprendimos que para transformar ciudades, primero debemos entender el profundo impacto del diseño urbano en el desarrollo económico y la calidad de vida de sus comunidades.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent-dark)' }}></div>
              <strong style={{ fontSize: '1.1rem', letterSpacing: '0.05em' }}>Juan Andrés Romero</strong>
              <span style={{ color: 'var(--text-secondary)' }}>— Fundador de Rheto Arquitectos & CEO de Clerhp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Impact Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="text-center animate-fade-in-up" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Un Legado en Expansión</h2>
            <div className="divider" style={{ margin: '1rem auto 2rem' }}></div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              La metodología de trabajo nacida en Rheto Arquitectos ha escalado para dar vida a proyectos monumentales, fusionando la excelencia arquitectónica con la ingeniería de estructuras avanzada.
            </p>
          </div>

          <div className="projects-grid animate-fade-in-up delay-200">
            <div className="project-card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-dark)' }}>Larimar City & Resort</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Un megaproyecto en República Dominicana que refleja nuestra visión de crear ciudades sostenibles e integradas, liderado por Clerhp con el ADN de Rheto en su concepción.
              </p>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--gold-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Desarrollo Inmobiliario</span>
            </div>

            <div className="project-card delay-100">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-dark)' }}>CLERHP Estructuras</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                La evolución natural de nuestra práctica profesional. Una multinacional que cotiza en bolsa y lidera el sector del diseño y cálculo de estructuras a nivel internacional.
              </p>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--gold-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ingeniería & Construcción</span>
            </div>

            <div className="project-card delay-200">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-dark)' }}>Innovación Constante</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Desde Rheto hasta ecosistemas como Inbentus, la visión de Juan Andrés Romero sigue impulsando la tecnología, el emprendimiento y la transformación social a través del diseño.
              </p>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--gold-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Emprendimiento Tech</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="rheto-logo" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            RHETO<span style={{ marginTop: '0' }}>ARQUITECTOS</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Innovación, diseño y desarrollo estructural para las ciudades del mañana.
          </p>
          <div style={{ fontSize: '0.85rem', color: '#888' }}>
            &copy; {new Date().getFullYear()} Rheto Arquitectos.
          </div>
        </div>
      </footer>
    </main>
  );
}
