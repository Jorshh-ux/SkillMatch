import simbolo from './assets/skillmatch-simbolo-tres-personas.png'
import portada from './assets/portada-estudiantes.jpg'
import banner from './assets/oportunidades-banner.jpg'
import servicioSocial from './assets/servicio-social.jpg'
import practicas from './assets/practicas-profesionales.jpg'
import modalidadDual from './assets/modalidad-dual.jpg'
import './App.css'

const beneficios = [
  { icono: '♡', titulo: 'Servicio Social', texto: 'Participa en proyectos que generan impacto en tu comunidad.' },
  { icono: '▣', titulo: 'Prácticas Profesionales', texto: 'Aplica tus conocimientos y fortalece tu perfil.' },
  { icono: '↔', titulo: 'Modalidad Dual', texto: 'Combina tu formación con experiencia laboral.' },
  { icono: '✦', titulo: 'Egresados', texto: 'Encuentra oportunidades para continuar tu camino.' },
  { icono: '⌂', titulo: 'Empresas', texto: 'Publica vacantes y encuentra talento joven.' },
]

const pasos = [
  { numero: '01', titulo: 'Regístrate', texto: 'Crea tu cuenta y completa tu perfil.' },
  { numero: '02', titulo: 'Explora', texto: 'Busca oportunidades que coincidan con tus intereses.' },
  { numero: '03', titulo: 'Postúlate', texto: 'Envía tu solicitud a la oportunidad que te interesa.' },
  { numero: '04', titulo: 'Conecta', texto: 'Comunícate con la empresa y da el siguiente paso.' },
]

const modalidades = [
  {
    titulo: 'Servicio Social',
    texto: 'Contribuye a tu comunidad y gana experiencia.',
    imagen: servicioSocial,
  },
  {
    titulo: 'Prácticas Profesionales',
    texto: 'Aplica tus conocimientos en el mundo real.',
    imagen: practicas,
  },
  {
    titulo: 'Modalidad Dual',
    texto: 'Estudia y trabaja al mismo tiempo.',
    imagen: modalidadDual,
  },
]

function App() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio">
            <img src={simbolo} alt="Símbolo de SkillMatch: tres personas" />
            <span>
              <strong>SkillMatch</strong>
              <small>¿Qué sabes hacer?</small>
            </span>
          </a>

          <nav aria-label="Navegación principal">
            <a href="#inicio">Inicio</a>
            <a href="/modalidades">Modalidades</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className="header-buttons">
            <a className="button button-outline" href="#contacto">Iniciar sesión</a>
            <a className="button button-gold" href="#contacto">Regístrate</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div
            className="hero-photo"
            style={{ backgroundImage: `url(${portada})` }}
            aria-hidden="true"
          />
          <div className="hero-content">
            <p className="eyebrow">Tu talento tiene un lugar · CBTis 286</p>
            <h1>
              Conecta tus habilidades con <span>grandes oportunidades</span>
            </h1>
            <p className="hero-text">
              SkillMatch conecta a estudiantes y egresados con empresas,
              proyectos y oportunidades que valoran su talento.
            </p>
            <a className="button button-gold" href="#modalidades">Comienza ahora →</a>
            <a className="button button-outline" href="#como-funciona">¿Cómo funciona?</a>
          </div>
        </section>

        <section className="benefits section">
          <p className="eyebrow">¿Por qué elegir SkillMatch?</p>
          <h2>Un puente entre tu talento y el futuro</h2>
          <div className="benefit-grid">
            {beneficios.map((beneficio) => (
              <article className="benefit" key={beneficio.titulo}>
                <span className="benefit-icon" aria-hidden="true">{beneficio.icono}</span>
                <h3>{beneficio.titulo}</h3>
                <p>{beneficio.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="opportunity-banner"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="banner-copy">
            <p className="eyebrow">Grandes oportunidades</p>
            <h2>Comienzan aquí</h2>
            <p>Encuentra una experiencia que te ayude a crecer.</p>
            <a className="button button-gold" href="#modalidades">Explora las modalidades →</a>
          </div>
          <div className="banner-points">
            <span>Servicio Social</span>
            <span>Prácticas</span>
            <span>Modalidad Dual</span>
          </div>
        </section>

        <section className="how section" id="como-funciona">
          <p className="eyebrow">Proceso simple</p>
          <h2>¿Cómo funciona?</h2>
          <p className="section-intro">En cuatro pasos puedes acercarte a tu próxima oportunidad.</p>

          <div className="step-grid">
            {pasos.map((paso) => (
              <article className="step" key={paso.numero}>
                <span className="step-number">{paso.numero}</span>
                <h3>{paso.titulo}</h3>
                <p>{paso.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="modalities" id="modalidades">
          <div className="section modalities-inner">
            <p className="eyebrow">Explora nuestras modalidades</p>
            <h2>Encuentra la oportunidad perfecta para ti</h2>

            <div className="modality-grid">
              {modalidades.map((modalidad) => (
                <article className="modality-card" key={modalidad.titulo}>
                  <img src={modalidad.imagen} alt="" />
                  <div className="modality-copy">
                    <h3>{modalidad.titulo}</h3>
                    <p>{modalidad.texto}</p>
                    <a href="/modalidades">Ver más →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="final-cta"
          style={{ backgroundImage: `url(${banner})` }}
          id="contacto"
        >
          <div>
            <p className="eyebrow">SkillMatch · CBTis 286</p>
            <h2>Tu talento merece la oportunidad correcta.</h2>
            <p>Conecta con empresas y comienza a construir tu futuro.</p>
          </div>
          <a className="button button-gold" href="mailto:contacto@skillmatch.mx">
            Regístrate ahora →
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#inicio">
          <img src={simbolo} alt="" />
          <span>
            <strong>SkillMatch</strong>
            <small>¿Qué sabes hacer?</small>
          </span>
        </a>
        <nav aria-label="Enlaces del pie de página">
          <a href="#inicio">Inicio</a>
          <a href="#modalidades">Modalidades</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <p>© 2026 SkillMatch · CBTis 286 · Conecta, aprende, crece.</p>
      </footer>
    </>
  )
}

export default App