import { Link } from 'react-router-dom'
import './style.css'

const highlights = [
  { number: '01', title: 'Aprenda fazendo', detail: 'Conhecimento que sai da sala de aula e chega ao mundo real.' },
  { number: '02', title: 'Cresça com apoio', detail: 'Pessoas por perto para acompanhar cada etapa da sua jornada.' },
  { number: '03', title: 'Construa seu caminho', detail: 'Formação conectada às oportunidades que vêm pela frente.' },
]

function Inicio() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-inner container">
          <div className="hero-copy">
            <span className="eyebrow">O futuro tem espaço para você</span>
            <h1>
              Seu próximo
              <br />
              <span>horizonte</span> começa aqui.
            </h1>
            <p>
              Uma faculdade para transformar curiosidade em conhecimento e planos em
              possibilidades.
            </p>
            <div className="hero-actions">
              <Link className="button button--yellow" to="/cursos">
                Descubra seu curso <span className="button-arrow" aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" to="/sobre">
                Conheça a Horizonte <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="hero-note">
              <span className="hero-note-icon" aria-hidden="true">✳</span>
              <span>Ideias que crescem. Futuros que se encontram.</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Ilustração abstrata de um sol surgindo no horizonte">
            <div className="art-sun" />
            <div className="art-orbit art-orbit-one" />
            <div className="art-orbit art-orbit-two" />
            <div className="art-hill art-hill-back" />
            <div className="art-hill art-hill-front" />
            <div className="art-stamp">VÁ<br />ALÉM</div>
            <span className="art-spark art-spark-one">✳</span>
            <span className="art-spark art-spark-two">✦</span>
            <span className="art-caption">um mundo de possibilidades</span>
          </div>
        </div>
        <div className="hero-bottom-line container">
          <span>ENSINO QUE ABRE CAMINHOS</span>
          <span>SEU FUTURO NÃO TEM UM SÓ DESTINO <span aria-hidden="true">↓</span></span>
        </div>
      </section>

      <section className="home-intro container">
        <div className="intro-heading">
          <span className="eyebrow">Mais do que um diploma</span>
          <h2 className="section-heading">A jornada também faz parte da conquista.</h2>
        </div>
        <div className="intro-content">
          <p>
            Na Faculdade Horizonte, você encontra espaço para descobrir seus talentos,
            experimentar novas ideias e preparar-se para o que ainda vai inventar.
          </p>
          <Link className="text-link" to="/sobre">
            Veja o que nos move <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="home-highlights">
        <div className="container">
          <div className="highlights-heading">
            <div>
              <span className="eyebrow">Do seu jeito, no seu tempo</span>
              <h2 className="section-heading">Um começo que combina com você.</h2>
            </div>
            <Link className="text-link" to="/cursos">
              Explore os cursos <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="highlight-grid">
            {highlights.map(({ number, title, detail }) => (
              <article className="highlight-card" key={number}>
                <span className="highlight-number">{number}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
                <span className="highlight-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Inicio
