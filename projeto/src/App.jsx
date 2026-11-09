import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Contato from './components/pages/contato'
import Cursos from './components/pages/cursos'
import Inicio from './components/pages/inicio'
import Ingresso from './components/pages/ingresso'
import Noticias from './components/pages/noticias'
import Sobre from './components/pages/sobre'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Header />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/cursos/:slug" element={<Cursos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/ingresso" element={<Ingresso />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
