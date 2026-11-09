import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/horizonte.png'
import './style.css'

const links = [
  { to: '/', label: 'Início', end: true },
  { to: '/cursos', label: 'Cursos' },
  { to: '/sobre', label: 'Sobre nós' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link className="brand" to="/" aria-label="Faculdade Horizonte — início" onClick={closeMenu}>
          <img className="brand-logo" src={logo} alt="" />
          <span className="brand-name">
            faculdade
            <strong>horizonte</strong>
          </span>
        </Link>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Navegação principal"
        >
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={closeMenu}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
          <Link className="header-cta" to="/cursos" onClick={closeMenu}>
            Encontre seu curso <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
