import { Link } from 'react-router-dom'
import './servicio-social.css'

import logo from './assets/skillmatch-simbolo-tres-personas.png'
import portada from './assets/servicio-social.jpg'
import banner from './assets/oportunidades-banner.jpg'
import estudiantes from './assets/practicas-profesionales.jpg'
import egresados from './assets/modalidad-egresados.jpg'
import empresas from './assets/modalidad-empresas.jpg'

const tareas = [
  ['▤', 'Apoyo administrativo', 'Copias, escaneo y archivo de documentos.'],
  ['✿', 'Atención a usuarios', 'Orientación y apoyo a la comunidad.'],
  ['▧', 'Registro y control', 'Organización de información y formatos.'],
  ['▱', 'Apoyo en eventos', 'Participación en actividades institucionales.'],
  ['⚙', 'Otras tareas', 'Actividades según las necesidades de la institución.'],
]

const oportunidades = [
  ['Institución de salud', 'Salud · Administración', '1 año', egresados],
  ['Centro educativo', 'Educación · Apoyo académico', '1 año', estudiantes],
  ['Proyecto comunitario', 'Social · Comunitario', 'Según el proyecto', empresas],
  ['Dependencia pública', 'Administración · Atención', 'Según la institución', banner],
]

const preguntas = [
  [
    '¿Es obligatorio el servicio social?',
    'En muchos planes de estudio es un requisito. Confirma las condiciones con tu plantel.',
  ],
  [
    '¿Puedo elegir la institución?',
    'Puedes revisar las opciones disponibles y elegir una que coincida con tus intereses y horarios.',
  ],
  [
    '¿Cuánto tiempo dura?',
    'Depende de tu programa académico y de la institución receptora.',
  ],
  [
    '¿El servicio social es remunerado?',
    'Por lo general no es remunerado. Revisa las condiciones de cada oportunidad.',
  ],
]

function ServicioSocial() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" to="/">
            <img src={logo} alt="Símbolo de SkillMatch" />
            <span>
              <strong>SkillMatch</strong>
              <small>¿Qué sabes hacer?</small>
            </span>
          </Link>

          <nav aria-label="Navegación principal">
            <Link to="/">Inicio</Link>
            <Link className="nav-active" to="/modalidades">Modalidades</Link>
            <a href="/#como-funciona">Cómo funciona</a>
            <a href="/#contacto">Contacto</a>
          </nav>

          <div className="header-buttons">
            <a className="button button-outline" href="/#contacto">Iniciar sesión</a>
            <a className="button button-gold" href="/#contacto">Regístrate</a>
          </div>
        </div>
      </header>

      <main className="ss-page">
        <section
          className="ss-hero"
          style={{ backgroundImage: `url(${portada})` }}
        >
          <div className="ss-hero-inner">
            <div className="ss-breadcrumbs">
              <Link to="/">Inicio</Link><span>›</span>
              <Link to="/modalidades">Modalidades</Link><span>›</span>
              <span>Servicio Social</span>
            </div>

            <div className="ss-hero-copy">
              <span className="ss-emblem" aria-hidden="true">✿</span>
              <div>
                <p className="eyebrow">Modalidad</p>
                <h1>Servicio Social</h1>
                <p>
                  Contribuye a tu comunidad y gana experiencia profesional
                  mientras desarrollas tus habilidades.
                </p>
              </div>
            </div>

            <div className="ss-facts">
              <p><strong>◷ Duración</strong><br />1 a 2 años*</p>
              <p><strong>♧ Dirigido a</strong><br />Estudiantes de nivel medio superior y superior</p>
              <p><strong>▦ Áreas</strong><br />Múltiples</p>
            </div>

            <p className="ss-quote">“Tu tiempo también es una forma de ayudar”</p>
          </div>
        </section>

        <section className="ss-container ss-intro">
          <div>
            <p className="eyebrow">Conoce la modalidad</p>
            <h2>¿Qué es?</h2>
            <p>
              El servicio social es una actividad temporal que permite apoyar
              a la comunidad y aplicar los conocimientos adquiridos durante tu
              formación académica. Puedes encontrar oportunidades en
              instituciones y asociaciones con distintas áreas y horarios.
            </p>
            <div className="ss-note">
              No es un trabajo remunerado, pero es una oportunidad para adquirir
              experiencia, fortalecer tu perfil y generar un impacto positivo.
            </div>
            <small>*La duración y los requisitos dependen de tu plantel y de la institución.</small>
          </div>

          <aside className="ss-requirements" id="requisitos">
            <p className="eyebrow">Antes de postularte</p>
            <h2>Requisitos principales</h2>
            <ul>
              <li>Ser estudiante activo de nivel medio superior o superior.</li>
              <li>Cumplir el promedio mínimo que solicite la institución.</li>
              <li>Tener disponibilidad de tiempo.</li>
              <li>Presentar la documentación requerida.</li>
            </ul>
            <a className="button button-gold" href="/#contacto">
              Consultar requisitos →
            </a>
          </aside>
        </section>

        <section className="ss-container ss-tasks">
          <p className="eyebrow">Tu experiencia cuenta</p>
          <h2>¿Qué haces?</h2>
          <p>Las tareas dependen de la institución, pero normalmente incluyen:</p>

          <div className="ss-task-grid">
            {tareas.map(([icono, titulo, texto]) => (
              <article className="ss-task-card" key={titulo}>
                <span aria-hidden="true">{icono}</span>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ss-opportunities" id="oportunidades">
          <div className="ss-container">
            <p className="eyebrow">Da el siguiente paso</p>
            <h2>Oportunidades destacadas</h2>
            <p>Ejemplos de áreas donde podrías colaborar.</p>

            <div className="ss-opportunity-grid">
              {oportunidades.map(([nombre, area, duracion, imagen]) => (
                <article className="ss-opportunity-card" key={nombre}>
                  <img src={imagen} alt="" />
                  <div>
                    <h3>{nombre}</h3>
                    <p>{area}</p>
                    <small>Duración: {duracion}</small>
                    <a className="button button-gold" href="/#contacto">
                      Ver detalles →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ss-container ss-faq-help">
          <div>
            <p className="eyebrow">Resolvemos tus dudas</p>
            <h2>Preguntas frecuentes</h2>
            {preguntas.map(([pregunta, respuesta]) => (
              <details className="ss-question" key={pregunta}>
                <summary>{pregunta}</summary>
                <p>{respuesta}</p>
              </details>
            ))}
          </div>

          <aside className="ss-help">
            <p className="eyebrow">Estamos para ayudarte</p>
            <h2>¿Necesitas ayuda?</h2>
            <p>
              Si tienes dudas sobre el proceso o necesitas orientación,
              nuestro equipo está listo para apoyarte.
            </p>
            <a className="button button-gold" href="/#contacto">Contactar equipo →</a>
          </aside>
        </section>
      </main>

      <section className="ss-final">
        <div className="ss-container">
          <div>
            <p className="eyebrow">SkillMatch · CBTis 286</p>
            <h2>Tu talento merece la oportunidad correcta.</h2>
            <p>Conecta con organizaciones y comienza a construir tu futuro.</p>
          </div>
          <a className="button button-gold" href="/#contacto">Regístrate ahora →</a>
        </div>
      </section>

      <footer className="site-footer">
        <Link className="brand" to="/">
          <img src={logo} alt="" />
          <span><strong>SkillMatch</strong><small>¿Qué sabes hacer?</small></span>
        </Link>
        <nav aria-label="Enlaces del pie de página">
          <Link to="/">Inicio</Link>
          <Link to="/modalidades">Modalidades</Link>
          <a href="/#como-funciona">Cómo funciona</a>
          <a href="/#contacto">Contacto</a>
        </nav>
        <p>© 2026 SkillMatch · CBTis 286 · Conecta, aprende, crece.</p>
      </footer>
    </>
  )
}

export default ServicioSocial