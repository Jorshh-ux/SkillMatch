import { useState } from 'react'
import { Link } from 'react-router-dom'
import './modalidades.css'
import logo from './assets/skillmatch-simbolo-tres-personas.png'
import portada from './assets/portada-estudiantes.jpg'
import banner from './assets/oportunidades-banner.jpg'
import servicioImg from './assets/servicio-social.jpg'
import practicasImg from './assets/practicas-profesionales.jpg'
import dualImg from './assets/modalidad-dual.jpg'
import egresadosImg from './assets/modalidad-egresados.jpg'
import empresasImg from './assets/modalidad-empresas.jpg'

type Categoria =
  | 'Servicio Social'
  | 'Prácticas Profesionales'
  | 'Modalidad Dual'
  | 'Egresados'
  | 'Empresas'

type Filtro = 'Todos' | Categoria

const filtros: Filtro[] = [
  'Todos',
  'Servicio Social',
  'Prácticas Profesionales',
  'Modalidad Dual',
  'Egresados',
  'Empresas',
]

const tarjetas: {
  categoria: Categoria
  descripcion: string
  imagen: string
}[] = [
  {
    categoria: 'Servicio Social',
    descripcion: 'Contribuye a tu comunidad y participa en proyectos sociales.',
    imagen: servicioImg,
  },
  {
    categoria: 'Prácticas Profesionales',
    descripcion: 'Aplica tus conocimientos en empresas y fortalece tu perfil.',
    imagen: practicasImg,
  },
  {
    categoria: 'Modalidad Dual',
    descripcion: 'Combina tu formación académica con experiencia laboral.',
    imagen: dualImg,
  },
  {
    categoria: 'Egresados',
    descripcion: 'Mantén contacto con empresas y encuentra oportunidades laborales.',
    imagen: egresadosImg,
  },
  {
    categoria: 'Empresas',
    descripcion: 'Publica vacantes y encuentra talento joven para tu equipo.',
    imagen: empresasImg,
  },
]

function Modalidades() {
  const [filtroActivo, setFiltroActivo] = useState<Filtro>('Todos')

  const tarjetasVisibles =
    filtroActivo === 'Todos'
      ? tarjetas
      : tarjetas.filter((tarjeta) => tarjeta.categoria === filtroActivo)

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

      <main>
        <section
          className="modalidades-hero"
          style={{ backgroundImage: `url(${portada})` }}
        >
          <div className="modalidades-hero-copy">
            <p className="eyebrow">Encuentra tu camino</p>
            <h1>Modalidades</h1>
            <p>Elige la opción que mejor se adapte a tus metas y da el primer paso hacia tu futuro profesional.</p>
          </div>
          <p className="modalidades-frase">Tu talento también es una oportunidad.</p>
        </section>

        <section className="catalogo">
          <div className="filtros" aria-label="Filtrar modalidades">
            {filtros.map((filtro) => (
              <button
                key={filtro}
                className={filtroActivo === filtro ? 'filtro filtro-activo' : 'filtro'}
                type="button"
                aria-pressed={filtroActivo === filtro}
                onClick={() => setFiltroActivo(filtro)}
              >
                {filtro}
              </button>
            ))}
          </div>

          <div className="catalogo-grid">
            {tarjetasVisibles.map((tarjeta) => (
              <article className="modalidad-card" key={tarjeta.categoria}>
                <img src={tarjeta.imagen} alt="" />
                <div className="modalidad-card-copy">
                  <h2>{tarjeta.categoria}</h2>
                  <p>{tarjeta.descripcion}</p>
                  {tarjeta.categoria === 'Servicio Social' ? (<Link to="/modalidades/servicio-social">Más información →</Link>) : (<a href="/#contacto">Más información →</a>)}
                </div>
              </article>
            ))}

            {(filtroActivo === 'Todos' || filtroActivo === 'Empresas') && (
              <article
                className="empresa-card"
                style={{ backgroundImage: `url(${banner})` }}
              >
                <div>
                  <p className="eyebrow">Para empresas</p>
                  <h2>¿Eres una empresa?</h2>
                  <p>Únete a SkillMatch y encuentra talento joven con grandes habilidades.</p>
                  <a className="button button-gold" href="/#contacto">Publicar vacante →</a>
                </div>
              </article>
            )}
          </div>
        </section>

        <section
          className="modalidades-banner"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div>
            <p className="eyebrow">SkillMatch · CBTis 286</p>
            <h2>Tu talento, en el lugar correcto.</h2>
            <p>Explora tus opciones y encuentra el siguiente paso para tu futuro.</p>
            <Link className="button button-gold" to="/">Volver a inicio →</Link>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <Link className="brand" to="/">
          <img src={logo} alt="" />
          <span>
            <strong>SkillMatch</strong>
            <small>¿Qué sabes hacer?</small>
          </span>
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

export default Modalidades