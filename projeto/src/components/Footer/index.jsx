import { Link } from 'react-router-dom'
import './style.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-main container">
        <div className="footer-about">
          <Link className="brand footer-brand" to="/" aria-label="Faculdade Horizonte — início">
            <span className="brand-name">
              faculdade
              <strong>horizonte</strong>
            </span>
          </Link>
          <p>Seu próximo horizonte começa com uma escolha.</p>
        </div>

        <div className="footer-links">
          <span className="footer-label">Explore</span>
          <Link to="/">Início</Link>
          <Link to="/cursos">Cursos</Link>
          <Link to="/sobre">Sobre nós</Link>
          <Link to="/ingresso">Ingresso</Link>
          <Link to="/noticias">Notícias</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div className="footer-contact">
          <span className="footer-label">Vamos conversar?</span>
          <a href="mailto:contato@faculdadehorizonte.edu.br">
            contato@faculdadehorizonte.edu.br
          </a>
          <a href="tel:+551130002026">(11) 3000-2026</a>
          <Link to="/contato">Envie uma mensagem</Link>
          <span>Atendimento de segunda a sábado</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {currentYear} Faculdade Horizonte. Todos os direitos reservados.</span>
          <span>Feita para quem olha para frente <span aria-hidden="true">↗</span></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
