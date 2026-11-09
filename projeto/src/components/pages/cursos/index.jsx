import { Link, Navigate, useParams } from 'react-router-dom'
import './style.css'

const courses = [
  {
    slug: 'administracao',
    area: 'Negócios',
    title: 'Administração',
    duration: '8 semestres',
    format: 'Presencial e EAD',
    number: '01',
    description: 'Desenvolva uma visão ampla dos negócios e prepare-se para planejar, liderar equipes e tomar decisões em organizações de diferentes setores.',
    curriculum: [
      ['1º semestre', ['Fundamentos da Administração', 'Comunicação Empresarial', 'Matemática Aplicada', 'Economia']],
      ['2º semestre', ['Teoria das Organizações', 'Contabilidade Geral', 'Comportamento Organizacional', 'Estatística Aplicada']],
      ['3º semestre', ['Gestão de Pessoas', 'Marketing', 'Gestão Financeira', 'Direito Empresarial']],
      ['4º semestre', ['Gestão de Operações', 'Pesquisa de Mercado', 'Custos e Orçamento', 'Empreendedorismo']],
      ['5º semestre', ['Logística e Cadeia de Suprimentos', 'Gestão de Projetos', 'Estratégia Empresarial', 'Gestão da Qualidade']],
      ['6º semestre', ['Gestão de Vendas', 'Análise de Investimentos', 'Inovação e Negócios', 'Ética e Sustentabilidade']],
      ['7º semestre', ['Negócios Internacionais', 'Planejamento Estratégico', 'Consultoria Empresarial', 'Projeto Integrador I']],
      ['8º semestre', ['Governança Corporativa', 'Tópicos Contemporâneos', 'Projeto Integrador II', 'Estágio Supervisionado']],
    ],
  },
  {
    slug: 'analise-e-desenvolvimento-de-sistemas',
    area: 'Tecnologia',
    title: 'Análise e Desenvolvimento de Sistemas',
    duration: '5 semestres',
    format: 'Presencial e EAD',
    number: '02',
    description: 'Aprenda a projetar, desenvolver e manter sistemas e aplicações, da compreensão das necessidades de usuários à entrega de soluções digitais.',
    curriculum: [
      ['1º semestre', ['Lógica de Programação', 'Fundamentos de Sistemas', 'Matemática para Computação', 'Comunicação e Expressão']],
      ['2º semestre', ['Programação Orientada a Objetos', 'Banco de Dados', 'Desenvolvimento Web', 'Engenharia de Requisitos']],
      ['3º semestre', ['Estruturas de Dados', 'Programação para Dispositivos Móveis', 'Interação Humano-Computador', 'Análise e Projeto de Sistemas']],
      ['4º semestre', ['Arquitetura de Software', 'Testes de Software', 'Computação em Nuvem', 'Segurança da Informação']],
      ['5º semestre', ['DevOps e Integração Contínua', 'Gestão Ágil de Projetos', 'Tópicos em Inteligência Artificial', 'Projeto Integrador']],
    ],
  },
  {
    slug: 'design-grafico',
    area: 'Comunicação',
    title: 'Design Gráfico',
    duration: '4 semestres',
    format: 'Presencial',
    number: '03',
    description: 'Explore processos criativos e ferramentas visuais para criar identidades, peças gráficas e experiências de comunicação para diferentes públicos.',
    curriculum: [
      ['1º semestre', ['Fundamentos do Design', 'Desenho e Percepção Visual', 'História da Arte e do Design', 'Tipografia']],
      ['2º semestre', ['Teoria da Cor', 'Design Editorial', 'Fotografia', 'Ilustração Digital']],
      ['3º semestre', ['Identidade Visual', 'Design de Interfaces', 'Produção Gráfica', 'Comunicação e Semiótica']],
      ['4º semestre', ['Motion Design', 'Design e Experiência do Usuário', 'Empreendedorismo Criativo', 'Projeto de Conclusão']],
    ],
  },
  {
    slug: 'enfermagem',
    area: 'Saúde',
    title: 'Enfermagem',
    duration: '10 semestres',
    format: 'Presencial',
    number: '04',
    description: 'Prepare-se para atuar no cuidado integral à saúde, com formação que combina conhecimentos científicos, práticas de assistência e atenção humanizada.',
    curriculum: [
      ['1º semestre', ['Anatomia Humana', 'Biologia Celular', 'História da Enfermagem', 'Saúde e Sociedade']],
      ['2º semestre', ['Fisiologia Humana', 'Microbiologia e Imunologia', 'Bioquímica', 'Fundamentos do Cuidado']],
      ['3º semestre', ['Farmacologia', 'Semiologia e Semiotécnica', 'Epidemiologia', 'Saúde Coletiva']],
      ['4º semestre', ['Enfermagem em Saúde do Adulto', 'Processo de Enfermagem', 'Patologia Geral', 'Biossegurança']],
      ['5º semestre', ['Enfermagem em Saúde da Mulher', 'Saúde da Criança e do Adolescente', 'Nutrição Aplicada', 'Educação em Saúde']],
      ['6º semestre', ['Enfermagem em Saúde Mental', 'Enfermagem na Atenção Básica', 'Gestão em Saúde', 'Práticas Clínicas I']],
      ['7º semestre', ['Enfermagem em Urgência e Emergência', 'Enfermagem do Idoso', 'Saúde do Trabalhador', 'Práticas Clínicas II']],
      ['8º semestre', ['Enfermagem Perioperatória', 'Enfermagem em Alta Complexidade', 'Gestão de Serviços de Enfermagem', 'Práticas Clínicas III']],
      ['9º semestre', ['Estágio Supervisionado em Saúde Coletiva', 'Estágio Supervisionado Hospitalar', 'Pesquisa em Enfermagem', 'Trabalho de Conclusão I']],
      ['10º semestre', ['Estágio Supervisionado em Enfermagem', 'Ética Profissional', 'Trabalho de Conclusão II', 'Gestão e Liderança em Enfermagem']],
    ],
  },
  {
    slug: 'pedagogia',
    area: 'Educação',
    title: 'Pedagogia',
    duration: '8 semestres',
    format: 'Presencial e EAD',
    number: '05',
    description: 'Estude os processos de ensino e aprendizagem e desenvolva repertório para atuar na educação, planejar práticas pedagógicas e promover o desenvolvimento de estudantes.',
    curriculum: [
      ['1º semestre', ['História da Educação', 'Filosofia da Educação', 'Psicologia do Desenvolvimento', 'Leitura e Produção de Texto']],
      ['2º semestre', ['Sociologia da Educação', 'Didática', 'Psicologia da Aprendizagem', 'Educação e Diversidade']],
      ['3º semestre', ['Currículo e Planejamento', 'Alfabetização e Letramento', 'Educação Inclusiva', 'Políticas Educacionais']],
      ['4º semestre', ['Metodologia do Ensino de Língua Portuguesa', 'Metodologia do Ensino de Matemática', 'Literatura Infantil', 'Tecnologias na Educação']],
      ['5º semestre', ['Metodologia do Ensino de Ciências', 'Metodologia do Ensino de História e Geografia', 'Educação Infantil', 'Avaliação da Aprendizagem']],
      ['6º semestre', ['Gestão Escolar', 'Educação de Jovens e Adultos', 'Arte e Educação', 'Estágio Supervisionado I']],
      ['7º semestre', ['Coordenação Pedagógica', 'Educação e Direitos Humanos', 'Pesquisa em Educação', 'Estágio Supervisionado II']],
      ['8º semestre', ['Práticas Pedagógicas', 'Educação em Espaços Não Escolares', 'Trabalho de Conclusão de Curso', 'Estágio Supervisionado III']],
    ],
  },
  {
    slug: 'sistemas-de-informacao',
    area: 'Tecnologia',
    title: 'Sistemas de Informação',
    duration: '8 semestres',
    format: 'Presencial e EAD',
    number: '06',
    description: 'Conecte tecnologia e estratégia para analisar necessidades, projetar sistemas e apoiar a transformação digital de empresas e instituições.',
    curriculum: [
      ['1º semestre', ['Lógica de Programação', 'Fundamentos de Sistemas de Informação', 'Matemática Aplicada', 'Comunicação Empresarial']],
      ['2º semestre', ['Programação Orientada a Objetos', 'Banco de Dados I', 'Arquitetura de Computadores', 'Gestão de Processos']],
      ['3º semestre', ['Estruturas de Dados', 'Engenharia de Software', 'Redes de Computadores', 'Estatística']],
      ['4º semestre', ['Banco de Dados II', 'Análise e Projeto de Sistemas', 'Desenvolvimento Web', 'Interação Humano-Computador']],
      ['5º semestre', ['Sistemas Operacionais', 'Governança de TI', 'Segurança da Informação', 'Gestão de Projetos']],
      ['6º semestre', ['Inteligência de Negócios', 'Computação em Nuvem', 'Sistemas Integrados de Gestão', 'Empreendedorismo Digital']],
      ['7º semestre', ['Auditoria de Sistemas', 'Inteligência Artificial Aplicada', 'Gestão de Serviços de TI', 'Projeto Integrador I']],
      ['8º semestre', ['Inovação e Transformação Digital', 'Tópicos Avançados em TI', 'Projeto Integrador II', 'Trabalho de Conclusão']],
    ],
  },
]

function Cursos() {
  const { slug } = useParams()
  const selectedCourse = courses.find((course) => course.slug === slug)

  if (slug && !selectedCourse) {
    return <Navigate to="/cursos" replace />
  }

  if (selectedCourse) {
    return <CourseDetails course={selectedCourse} />
  }

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
          {courses.map(({ area, title, duration, format, number, slug }) => (
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
              <Link className="course-more" to={`/cursos/${slug}`}>
                Quero saber mais <span aria-hidden="true">↗</span>
              </Link>
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

function CourseDetails({ course }) {
  const emailSubject = encodeURIComponent(`Quero saber mais sobre ${course.title}`)

  return (
    <div className="course-detail-page">
      <section className="course-detail-hero">
        <div className="container course-detail-hero-inner">
          <Link className="course-back-link" to="/cursos">
            <span aria-hidden="true">←</span> Todos os cursos
          </Link>
          <div className="course-detail-heading">
            <div className="course-detail-meta">
              <span className="course-area">{course.area}</span>
              <span>{course.duration}</span>
              <span aria-hidden="true">·</span>
              <span>{course.format}</span>
            </div>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <a
              className="button button--yellow"
              href={`mailto:contato@faculdadehorizonte.edu.br?subject=${emailSubject}`}
            >
              Fale com a gente sobre o curso <span className="button-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="curriculum-section container">
        <div className="curriculum-heading">
          <div>
            <span className="eyebrow">Sua formação</span>
            <h2 className="section-heading">Grade curricular.</h2>
          </div>
          <p>
            Confira as principais disciplinas previstas para o curso. A grade pode
            receber atualizações acadêmicas.
          </p>
        </div>
        <div className="curriculum-grid">
          {course.curriculum.map(([semester, subjects]) => (
            <article className="semester-card" key={semester}>
              <h3>{semester}</h3>
              <ul>
                {subjects.map((subject) => <li key={subject}>{subject}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <Link className="course-back-link curriculum-back-link" to="/cursos">
          <span aria-hidden="true">←</span> Voltar para todos os cursos
        </Link>
      </section>
    </div>
  )
}

export default Cursos
