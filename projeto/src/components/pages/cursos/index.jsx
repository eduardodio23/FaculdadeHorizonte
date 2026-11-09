import { Link } from 'react-router-dom'
import './style.css'

const courses = [
  { area: 'Negócios', title: 'Administração', duration: '8 semestres', format: 'Presencial e EAD', number: '01' },
  { area: 'Tecnologia', title: 'Análise e Desenvolvimento de Sistemas', duration: '5 semestres', format: 'Presencial e EAD', number: '02' },
  { area: 'Comunicação', title: 'Design Gráfico', duration: '4 semestres', format: 'Presencial', number: '03' },
  { area: 'Saúde', title: 'Enfermagem', duration: '10 semestres', format: 'Presencial', number: '04' },
  { area: 'Educação', title: 'Pedagogia', duration: '8 semestres', format: 'Presencial e EAD', number: '05' },
  { area: 'Tecnologia', title: 'Sistemas de Informação', duration: '8 semestres', format: 'Presencial e EAD', number: '06' },
]

function Cursos() {
  return (
    <div className="courses-page">
      <section className="courses-hero">
        <div className="container courses-hero-inner">
          <div>
            <span className="eyebrow">Seu futuro, suas escolhas</span>
            <h1>Encontre o caminho que faz sentido <span>para você.</span></h1>
            <p>
              Cursos pensados para aproximar o que você gosta de fazer das oportunidades
              que quer conquistar.
            </p>
          </div>
          <div className="courses-hero-note">
            <span aria-hidden="true">✳</span>
            <p>O primeiro passo para o seu próximo capítulo começa com uma boa pergunta.</p>
          </div>
        </div>
      </section>

      <section className="courses-list-section container">
        <div className="courses-list-heading">
          <div>
            <span className="eyebrow">Graduação</span>
            <h2 className="section-heading">Conheça nossas áreas.</h2>
          </div>
          <p>Escolha uma área e comece a imaginar tudo o que pode construir.</p>
        </div>
        <div className="course-grid">
          {courses.map(({ area, title, duration, format, number }) => (
            <article className="course-card" key={number}>
              <div className="course-card-top">
                <span className="course-area">{area}</span>
                <span className="course-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <div className="course-details">
                <span>{duration}</span>
                <span aria-hidden="true">·</span>
                <span>{format}</span>
              </div>
              <a className="course-more" href="mailto:contato@faculdadehorizonte.edu.br?subject=Quero%20saber%20mais%20sobre%20um%20curso">
                Quero saber mais <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="courses-cta">
        <div className="container courses-cta-inner">
          <div>
            <span className="eyebrow">Ainda em dúvida?</span>
            <h2>Descobrir também faz parte do caminho.</h2>
          </div>
          <Link className="button button--yellow" to="/sobre">
            Conheça a faculdade <span className="button-arrow" aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Cursos
