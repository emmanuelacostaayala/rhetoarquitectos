"use client";

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
      <section id="legado" className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="text-center animate-fade-in-up" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Un Legado en Expansión</h2>
            <div className="divider" style={{ margin: '1rem auto 2rem' }}></div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              La metodología de trabajo nacida en Rheto Arquitectos ha escalado para dar vida a proyectos monumentales, fusionando la excelencia arquitectónica con la ingeniería de estructuras avanzada.
            </p>
          </div>

          <div className="projects-grid animate-fade-in-up delay-200" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {/* 1. Master Plan */}
            <div className="project-card">
              <div className="badge-award">🌍 Urbanismo & Master Plan</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-dark)' }}>Larimar City & Resort (Punta Cana)</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Rheto Arquitectos es la firma responsable del Master Plan. Más que un complejo, es el diseño integral de una ciudad desde cero, incluyendo vías, parques, lagos y zonificación, bajo la dirección arquitectónica personal de Juan Andrés Romero.
              </p>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--gold-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Desarrollo Inmobiliario</span>
            </div>

            {/* 2. Edificios Autor - Bolivia */}
            <div className="project-card delay-100">
              <div className="badge-award">🏆 Premio Nacional de Arquitectura</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-dark)' }}>Torre Omnia Lux (Bolivia)</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Un referente fundamental en nuestro portafolio. Este edificio residencial de lujo en Santa Cruz destaca por sus icónicos balcones curvos y su excelencia técnica, siendo un diseño 100% de nuestro equipo.
              </p>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--gold-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Edificios de Autor</span>
            </div>

            <div className="project-card delay-200">
              <div className="badge-award">🏢 Uso Mixto</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-dark)' }}>Torre Riviera (Bolivia)</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Reconocida por su imponente altura y fachada verdaderamente moderna, esta torre combina espacios comerciales y residenciales, consolidando el impacto del estudio en Santa Cruz.
              </p>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--gold-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Edificios de Autor</span>
            </div>

            <div className="project-card delay-300">
              <div className="badge-award">🌿 Integración Natural</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-dark)' }}>Edificio Jardines de Isuto (Bolivia)</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Un proyecto residencial innovador que fusiona magistralmente la naturaleza con la arquitectura. Este concepto de integración es la semilla que hoy estamos escalando en Larimar.
              </p>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--gold-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Edificios de Autor</span>
            </div>

            {/* 3. España */}
            <div className="project-card delay-400">
              <div className="badge-award">🏡 Raíces en Murcia</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-dark)' }}>Villas de Lujo (Mazarrón, España)</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Nuestro origen y cimientos en la Costa Cálida. Hemos diseñado múltiples viviendas unifamiliares de alto standing, caracterizadas por un estilo minimalista blanco y amplios ventanales.
              </p>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--gold-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Residencial Exclusivo</span>
            </div>

            <div className="project-card delay-500">
              <div className="badge-award">🌊 Arquitectura Costera</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-dark)' }}>Residencial El Alcolar (España)</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Complejos de apartamentos ubicados junto al mar en la región de Murcia. Estos proyectos se distinguen por un diseño enfocado hacia el paisaje marino y una alta eficiencia en el uso de materiales.
              </p>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--gold-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Residencial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="section-padding">
        <div className="container">
          <div className="grid-2">
            <div className="animate-fade-in-up">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Contacta con Nosotros</h2>
              <div className="divider" style={{ margin: '1rem 0 2rem' }}></div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem', maxWidth: '400px' }}>
                ¿Tienes un proyecto en mente o deseas conocer más sobre nuestra trayectoria y visión de ingeniería social? Escríbenos.
              </p>
            </div>

            <div className="glass-card animate-fade-in-up delay-100">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Nombre Completo</label>
                  <input type="text" id="name" className="form-input" placeholder="Ej. Arquitecto García" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input type="email" id="email" className="form-input" placeholder="tu@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Mensaje</label>
                  <textarea id="message" className="form-textarea" placeholder="¿En qué podemos ayudarte?" required></textarea>
                </div>
                <button type="submit" className="btn-submit">Enviar Mensaje</button>
              </form>
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
