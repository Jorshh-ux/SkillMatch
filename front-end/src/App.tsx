import simbolo from './assets/skillmatch-simbolo-tres-personas.png'
import './App.css'

const modalidades = [
  {
    titulo: 'Servicio Social',
    descripcion: 'Contribuye a tu comunidad y adquiere experiencia.',
  },
  {
    titulo: 'Prácticas Profesionales',
    descripcion: 'Aplica tus conocimientos en empresas reales.',
  },
  {
    titulo: 'Modalidad Dual',
    descripcion: 'Estudia y gana experiencia laboral al mismo tiempo.',
  },
]

function App() {
  return (
    <>
      <header className="encabezado">
        <a className="marca" href="#inicio">
          <img src={simbolo} alt="Símbolo de SkillMatch: tres personas" />
          <span>
            <strong>SkillMatch</strong>
            <small>¿Qué sabes hacer?</small>
          </span>
        </a>

        <nav aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#modalidades">Modalidades</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="boton boton-borde" href="#contacto">Iniciar sesión</a>
        <a className="boton boton-dorado" href="#contacto">Regístrate</a>
      </header>

      <main>
        <section className="portada" id="inicio">
          <div className="portada-texto">
            <p className="etiqueta">CBTis 286</p>
            <h1>
              Tu talento conecta con <span>oportunidades</span>
            </h1>
            <p className="descripcion">
              SkillMatch conecta a estudiantes y egresados con empresas,
              servicio social, prácticas profesionales y modalidad dual.
            </p>
            <a className="boton boton-dorado" href="#modalidades">
              Comienza ahora
            </a>
            <a className="boton boton-borde" href="#como-funciona">
              ¿Cómo funciona?
            </a>
          </div>

          <div className="portada-visual" aria-label="Ejemplo de oportunidad y compatibilidad">
            <div className="circulo">SM</div>
            <article className="tarjeta-oportunidad">
              <small>OPORTUNIDAD</small>
              <strong>Prácticas profesionales</strong>
              <span>Desarrollo de software</span>
            </article>
            <div className="compatibilidad">
              <strong>92%</strong>
              <span>Compatibilidad con tu perfil</span>
            </div>
          </div>
        </section>

        <section className="seccion" id="modalidades">
          <p className="etiqueta">Encuentra tu camino</p>
          <h2>Nuestras modalidades</h2>
          <p className="introduccion">
            Elige la opción que se adapte a tus objetivos y comienza a crecer.
          </p>

          <div className="modalidades">
            {modalidades.map((modalidad) => (
              <article className="modalidad" key={modalidad.titulo}>
                <h3>{modalidad.titulo}</h3>
                <p>{modalidad.descripcion}</p>
                <a href="#contacto">Conocer más →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="como-funciona" id="como-funciona">
          <p className="etiqueta">Conecta, aprende, crece</p>
          <h2>Tu siguiente oportunidad comienza con tu perfil.</h2>
          <a className="boton boton-dorado" href="#contacto">Comienza ahora</a>
        </section>
      </main>

      <footer id="contacto">
        SkillMatch <span>·</span> CBTis 286
        <span>·</span> Conectando talento, construyendo futuro
      </footer>
    </>
  )
}

export default App