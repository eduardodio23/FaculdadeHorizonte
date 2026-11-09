import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Cursos from './components/pages/cursos'
import Inicio from './components/pages/inicio'
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
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
