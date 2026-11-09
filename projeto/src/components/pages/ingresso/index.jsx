import { Link } from 'react-router-dom'
import './style.css'

const paths = [
  {
    number: '01',
    tag: 'Primeira graduação',
    title: 'Vestibular',
    text: 'Para quem está começando. Escolha entre a prova on-line agendada ou use sua nota do ENEM.',
    items: [
      'Prova on-line com redação, no dia e horário que preferir',
      'Nota do ENEM (de 2016 a 2025) sem precisar fazer prova',
      'Resultado em até 3 dias úteis',
    ],
  },
  {
    number: '02',
    tag: 'Já estuda em outra instituição',
    title: 'Transferência',
    text: 'Traga sua trajetória para a Horizonte e aproveite as disciplinas que você já cursou.',
    items: [
      'Análise gratuita do histórico escolar',
      'Aproveitamento de disciplinas compatíveis',
      'Também para portadores de diploma (segunda graduação)',
    ],
  },
  {
    number: '03',
    tag: 'Apoio financeiro',
    title: 'Bolsas e descontos',
    text: 'Programas próprios e governamentais para que o investimento caiba no seu planejamento.',
    items: [
      'ProUni e FIES',
      'Bolsa Mérito Horizonte de até 50% pelo desempenho no vestibular',
      'Descontos para ex-alunos e grupos familiares',
    ],
  },
]

const scholarships = [
  { value: 'até 100%', title: 'ProUni', text: 'Bolsas integrais e parciais do Governo Federal, conforme renda familiar e nota do ENEM.' },
  { value: 'financiamento', title: 'FIES', text: 'Financiamento estudantil com juros reduzidos e pagamento após a formatura.' },
  { value: 'até 50%', title: 'Bolsa Mérito', text: 'Concedida automaticamente a partir da sua nota no vestibular ou no ENEM.' },
  { value: '15%', title: 'Desconto Família', text: 'Para irmãos, cônjuges, pais e filhos matriculados ao mesmo tempo.' },
]

const steps = [
  { number: '01', title: 'Inscreva-se', text: 'Escolha o curso e a forma de ingresso que combina com você.' },
  { number: '02', title: 'Faça a avaliação', text: 'Prova on-line, nota do ENEM ou análise do seu histórico.' },
  { number: '03', title: 'Confira o resultado', text: 'Você recebe a aprovação por e-mail em poucos dias.' },
  { number: '04', title: 'Faça sua matrícula', text: 'Envie os documentos e garanta sua vaga para 2027.1.' },
]

const faq = [
  {
    question: 'Quando começam as aulas do próximo semestre?',
    answer: 'As aulas de 2027.1 começam em 8 de fevereiro de 2027. A semana de acolhimento dos calouros acontece de 1º a 5 de fevereiro.',
  },
  {
    question: 'Quais documentos preciso para a matrícula?',
    answer: 'RG, CPF, comprovante de residência, certificado e histórico do ensino médio. Para transferência, também o histórico da graduação e as ementas das disciplinas cursadas.',
  },
  {
    question: 'A inscrição no vestibular é paga?',
    answer: 'Não. A inscrição no vestibular, o uso da nota do ENEM e a análise de transferência são gratuitos.',
  },
  {
    question: 'Posso acumular bolsas e descontos?',
    answer: 'Os descontos não são cumulativos entre si; sempre aplicamos o benefício mais vantajoso para você. ProUni e FIES seguem as regras próprias de cada programa.',
  },
]

function Ingresso() {
  return (
    <div className="admission-page">
      <section className="admission-hero">
        <div className="container admission-hero-inner">
          <div>
            <span className="eyebrow">Vestibular 2027.1 · inscrições abertas</span>
            <h1>Escolha como você quer <span>começar.</span></h1>
            <p>
              Existem vários caminhos para entrar na Faculdade Horizonte. Conheça cada
              um deles e encontre o que faz mais sentido para o seu momento.
            </p>
          </div>
          <div className="admission-hero-note">
            <span className="admission-note-label">Próxima data</span>
            <strong>12 dez</strong>
            <p>Último dia para a prova com Bolsa Mérito de até 50% para 2027.1.</p>
          </div>
        </div>
      </section>

      <section className="admission-paths container">
        <div className="admission-heading">
          <div>
            <span className="eyebrow">Formas de ingresso</span>
            <h2 className="section-heading">Três caminhos, um mesmo destino.</h2>
          </div>
          <p>Todas as formas de ingresso são gratuitas e podem ser feitas on-line.</p>
        </div>
        <div className="path-grid">
          {paths.map(({ number, tag, title, text, items }) => (
            <article className="path-card" key={number}>
              <div className="path-card-top">
                <span className="path-tag">{tag}</span>
                <span className="path-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="admission-scholarships">
        <div className="container">
          <span className="eyebrow">Bolsas e financiamento</span>
          <h2 className="section-heading">Seu talento merece apoio.</h2>
          <div className="scholarship-grid">
            {scholarships.map(({ value, title, text }) => (
              <article className="scholarship-card" key={title}>
                <span className="scholarship-value">{value}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="admission-steps container">
        <div className="admission-heading">
          <div>
            <span className="eyebrow">Passo a passo</span>
            <h2 className="section-heading">Do interesse à matrícula.</h2>
          </div>
        </div>
        <ol className="steps-list">
          {steps.map(({ number, title, text }) => (
            <li className="step-item" key={number}>
              <span className="step-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="admission-faq container">
        <div className="admission-faq-label">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2 className="section-heading">Perguntas que sempre chegam até nós.</h2>
        </div>
        <div className="faq-list">
          {faq.map(({ question, answer }) => (
            <details className="faq-item" key={question}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="admission-cta">
        <div className="container admission-cta-inner">
          <div>
            <span className="eyebrow">Ficou com alguma dúvida?</span>
            <h2>Nossa equipe ajuda você a escolher o melhor caminho.</h2>
          </div>
          <Link className="button button--yellow" to="/contato">
            Fale com a gente <span className="button-arrow" aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Ingresso
