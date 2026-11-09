import { Link } from 'react-router-dom'
import './style.css'

const values = [
  { symbol: '↗', title: 'Olhar adiante', text: 'Acreditamos que aprender é abrir espaço para novas possibilidades.' },
  { symbol: '✳', title: 'Fazer junto', text: 'Crescemos quando diferentes histórias e ideias se encontram.' },
  { symbol: '⌁', title: 'Ir além', text: 'Valorizamos a curiosidade, a prática e a coragem de tentar.' },
]

function Sobre() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container about-hero-inner">
          <span className="eyebrow">Quem somos</span>
          <h1>Educação para abrir <span>novos horizontes.</span></h1>
          <p>
            A Faculdade Horizonte nasceu da ideia de que o futuro não é um lugar onde
            chegamos — é algo que construímos, juntos, todos os dias.
          </p>
          <div className="about-hero-art" aria-hidden="true">
            <div className="about-circle about-circle-one" />
            <div className="about-circle about-circle-two" />
            <div className="about-circle about-circle-three" />
            <span>APRENDER<br />TRANSFORMA</span>
          </div>
        </div>
      </section>

      <section className="about-story container">
        <div className="about-story-label">
          <span className="eyebrow">Nossa essência</span>
          <span className="story-index">01 — 03</span>
        </div>
        <div className="about-story-copy">
          <h2 className="section-heading">Um lugar para aprender, experimentar e encontrar seu próprio caminho.</h2>
          <p>
            Acreditamos em uma educação próxima, curiosa e conectada com a vida real.
            Por isso, criamos um ambiente onde conhecimento e prática caminham juntos —
            e onde cada pessoa pode descobrir o que é capaz de realizar.
          </p>
          <p>
            Nosso compromisso é acompanhar você em cada etapa, com espaço para fazer
            perguntas, construir repertório e transformar ideias em possibilidades.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <span className="eyebrow">O que nos guia</span>
          <h2 className="section-heading">Princípios para ir mais longe.</h2>
          <div className="values-grid">
            {values.map(({ symbol, title, text }) => (
              <article className="value-card" key={title}>
                <span className="value-symbol" aria-hidden="true">{symbol}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-last container">
        <div>
          <span className="eyebrow">A próxima página é sua</span>
          <h2>Vamos descobrir até onde você pode chegar?</h2>
        </div>
        <Link className="button" to="/cursos">
          Explore nossos cursos <span className="button-arrow" aria-hidden="true">↗</span>
        </Link>
      </section>
    </div>
  )
}

export default Sobre
