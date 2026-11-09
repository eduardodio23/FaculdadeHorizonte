import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const categories = ['Todas', 'Eventos', 'Avisos', 'Novidades']

const featured = {
  category: 'Eventos',
  date: '2026-11-16',
  dateLabel: '16 a 19 de novembro',
  title: 'Semana Acadêmica Horizonte 2026: quatro dias para fechar o ano olhando adiante',
  text: 'Palestras, oficinas práticas, feira de projetos dos cursos e a tradicional noite de talentos no pátio central. Atividades valem horas complementares e as inscrições são feitas pelo portal do aluno.',
}

const news = [
  {
    id: 1,
    category: 'Avisos',
    date: '2026-11-20',
    dateLabel: '20 nov',
    title: 'Feriado da Consciência Negra: não haverá aulas na sexta-feira',
    text: 'A biblioteca e a secretaria também ficam fechadas. As atividades retornam normalmente na segunda, dia 23.',
  },
  {
    id: 2,
    category: 'Avisos',
    date: '2026-11-22',
    dateLabel: '22 nov',
    title: 'ENADE 2026: confira seu local de prova',
    text: 'Estudantes habilitados devem consultar o cartão de confirmação e preencher o questionário do estudante até a véspera.',
  },
  {
    id: 3,
    category: 'Eventos',
    date: '2026-11-23',
    dateLabel: '23 nov',
    title: 'Bancas de TCC abertas ao público até 4 de dezembro',
    text: 'Os calendários de apresentação de cada curso já estão no mural digital. Calouros são bem-vindos para assistir.',
  },
  {
    id: 4,
    category: 'Avisos',
    date: '2026-11-30',
    dateLabel: '30 nov',
    title: 'Provas finais do segundo semestre começam no dia 30',
    text: 'O período de avaliações vai até 11 de dezembro. Os exames de recuperação acontecem entre 14 e 18 de dezembro.',
  },
  {
    id: 5,
    category: 'Novidades',
    date: '2026-11-05',
    dateLabel: '05 nov',
    title: 'Biblioteca amplia horário durante o período de provas',
    text: 'De 23 de novembro a 18 de dezembro, o espaço funciona das 7h às 23h, inclusive aos sábados até as 17h.',
  },
  {
    id: 6,
    category: 'Novidades',
    date: '2026-11-03',
    dateLabel: '03 nov',
    title: 'Novo laboratório de inovação é inaugurado no bloco B',
    text: 'O espaço conta com impressoras 3D, kits de prototipagem e salas para projetos em grupo de todos os cursos.',
  },
  {
    id: 7,
    category: 'Avisos',
    date: '2026-12-01',
    dateLabel: '01 dez',
    title: 'Rematrícula para 2027.1 começa em dezembro',
    text: 'Garanta sua vaga entre 1º de dezembro e 15 de janeiro pelo portal do aluno, com desconto para quem renovar até o dia 19.',
  },
  {
    id: 8,
    category: 'Eventos',
    date: '2026-12-19',
    dateLabel: '19 dez',
    title: 'Colação de grau dos formandos de 2026',
    text: 'A cerimônia acontece no auditório principal às 19h. Cada formando pode levar até quatro convidados.',
  },
  {
    id: 9,
    category: 'Novidades',
    date: '2026-11-02',
    dateLabel: '02 nov',
    title: 'Vestibular 2027.1 com inscrições abertas',
    text: 'Prova on-line agendada ou nota do ENEM. Quem fizer a prova até 12 de dezembro concorre à Bolsa Mérito de até 50%.',
  },
]

const agenda = [
  { date: '16–19 nov', title: 'Semana Acadêmica' },
  { date: '20 nov', title: 'Feriado — sem aulas' },
  { date: '22 nov', title: 'ENADE 2026' },
  { date: '30 nov – 11 dez', title: 'Provas finais' },
  { date: '14–18 dez', title: 'Exames de recuperação' },
  { date: '19 dez', title: 'Colação de grau' },
  { date: '21 dez – 4 jan', title: 'Recesso de fim de ano' },
]

function Noticias() {
  const [activeCategory, setActiveCategory] = useState('Todas')

  const visibleNews = (
    activeCategory === 'Todas' ? news : news.filter((item) => item.category === activeCategory)
  ).slice().sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className="news-page">
      <section className="news-hero">
        <div className="container news-hero-inner">
          <span className="eyebrow">Novembro no campus</span>
          <h1>A reta final do semestre <span>começou.</span></h1>
          <p>
            Eventos, avisos e novidades para você acompanhar tudo o que acontece na
            Horizonte até o fim de 2026.
          </p>
        </div>
      </section>

      <section className="news-featured container">
        <article className="featured-card">
          <div className="featured-art" aria-hidden="true">
            <div className="featured-sun" />
            <span>SEMANA<br />ACADÊMICA</span>
          </div>
          <div className="featured-copy">
            <div className="news-meta">
              <span className="news-tag">{featured.category}</span>
              <time dateTime={featured.date}>{featured.dateLabel}</time>
            </div>
            <h2>{featured.title}</h2>
            <p>{featured.text}</p>
            <span className="featured-badge">Em destaque</span>
          </div>
        </article>
      </section>

      <section className="news-content container">
        <div className="news-list-area">
          <div className="news-list-heading">
            <div>
              <span className="eyebrow">Mural do campus</span>
              <h2 className="section-heading">Últimas notícias.</h2>
            </div>
            <div className="news-filters" role="group" aria-label="Filtrar notícias por categoria">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`news-filter${activeCategory === category ? ' is-active' : ''}`}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="news-grid">
            {visibleNews.map(({ id, category, date, dateLabel, title, text }) => (
              <article className="news-card" key={id}>
                <div className="news-meta">
                  <span className={`news-tag news-tag--${category.toLowerCase()}`}>{category}</span>
                  <time dateTime={date}>{dateLabel}</time>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="news-agenda" aria-labelledby="agenda-title">
          <span className="footer-label">Calendário</span>
          <h2 id="agenda-title">Próximas datas</h2>
          <ul>
            {agenda.map(({ date, title }) => (
              <li key={date}>
                <span>{date}</span>
                <strong>{title}</strong>
              </li>
            ))}
          </ul>
          <p>Aulas de 2027.1 começam em 8 de fevereiro.</p>
        </aside>
      </section>

      <section className="news-last container">
        <div>
          <span className="eyebrow">Quer fazer parte das próximas notícias?</span>
          <h2>As inscrições para 2027.1 estão abertas.</h2>
        </div>
        <Link className="button" to="/ingresso">
          Veja como entrar <span className="button-arrow" aria-hidden="true">↗</span>
        </Link>
      </section>
    </div>
  )
}

export default Noticias
