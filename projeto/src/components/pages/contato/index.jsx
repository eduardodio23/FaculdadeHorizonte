import { useState } from 'react'
import './style.css'

const channels = [
  {
    symbol: '⌂',
    label: 'Endereço',
    lines: ['Av. das Palmeiras, 1500 — Jardim Horizonte', 'São Paulo – SP · CEP 01234-000'],
  },
  {
    symbol: '☏',
    label: 'Telefone',
    lines: ['(11) 3000-2026', 'WhatsApp: (11) 99000-2026'],
    href: 'tel:+551130002026',
  },
  {
    symbol: '@',
    label: 'E-mail',
    lines: ['contato@faculdadehorizonte.edu.br', 'ingresso@faculdadehorizonte.edu.br'],
    href: 'mailto:contato@faculdadehorizonte.edu.br',
  },
]

const hours = [
  { day: 'Segunda a sexta', time: '8h às 21h' },
  { day: 'Sábado', time: '8h às 12h' },
  { day: 'Domingo e feriados', time: 'Fechado' },
]

const subjects = ['Vestibular e ingresso', 'Transferência', 'Bolsas e financiamento', 'Secretaria acadêmica', 'Outros assuntos']

const emptyForm = { name: '', email: '', phone: '', subject: '', message: '', consent: false }

function Contato() {
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  function handleReset() {
    setForm(emptyForm)
    setSent(false)
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container contact-hero-inner">
          <div>
            <span className="eyebrow">Fale com a Horizonte</span>
            <h1>Toda boa jornada começa com uma <span>conversa.</span></h1>
            <p>
              Tire dúvidas sobre cursos, ingresso, bolsas ou a vida no campus. Nossa
              equipe responde em até um dia útil.
            </p>
          </div>
          <div className="contact-hero-note">
            <span aria-hidden="true">✳</span>
            <p>Prefere vir pessoalmente? O campus está aberto para visitas de segunda a sábado.</p>
          </div>
        </div>
      </section>

      <section className="contact-channels container">
        {channels.map(({ symbol, label, lines, href }) => (
          <article className="channel-card" key={label}>
            <span className="channel-symbol" aria-hidden="true">{symbol}</span>
            <h2>{label}</h2>
            {lines.map((line, index) =>
              href && index === 0 ? (
                <a key={line} href={href}>{line}</a>
              ) : (
                <p key={line}>{line}</p>
              ),
            )}
          </article>
        ))}
      </section>

      <section className="contact-main container">
        <div className="contact-form-area">
          <span className="eyebrow">Envie uma mensagem</span>
          <h2 className="section-heading">Como podemos ajudar?</h2>

          {sent ? (
            <div className="form-success" role="status">
              <span className="form-success-icon" aria-hidden="true">✓</span>
              <h3>Mensagem enviada, {form.name.split(' ')[0]}!</h3>
              <p>
                Recebemos seu contato sobre <strong>{form.subject.toLowerCase()}</strong> e
                vamos responder no e-mail {form.email} em até um dia útil.
              </p>
              <button className="button" type="button" onClick={handleReset}>
                Enviar outra mensagem <span className="button-arrow" aria-hidden="true">↺</span>
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="contact-name">Nome completo</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Como podemos chamar você?"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="contact-email">E-mail</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="voce@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-phone">
                    Telefone <span className="form-optional">(opcional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(11) 90000-0000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-subject">Assunto</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Selecione um assunto</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Mensagem</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Conte um pouco sobre o que você precisa."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <label className="form-consent">
                <input
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={handleChange}
                  required
                />
                <span>Autorizo a Faculdade Horizonte a usar meus dados para responder a este contato.</span>
              </label>

              <button className="button button--yellow" type="submit">
                Enviar mensagem <span className="button-arrow" aria-hidden="true">↗</span>
              </button>
            </form>
          )}
        </div>

        <aside className="contact-side">
          <div className="contact-map" aria-label="Mapa ilustrativo da localização do campus">
            <div className="map-road map-road-one" />
            <div className="map-road map-road-two" />
            <div className="map-road map-road-three" />
            <div className="map-block map-block-one" />
            <div className="map-block map-block-two" />
            <div className="map-pin">
              <span aria-hidden="true">✳</span>
            </div>
            <span className="map-caption">Campus Horizonte</span>
          </div>

          <div className="contact-hours">
            <span className="footer-label">Horário de atendimento</span>
            <ul>
              {hours.map(({ day, time }) => (
                <li key={day}>
                  <span>{day}</span>
                  <strong>{time}</strong>
                </li>
              ))}
            </ul>
            <p>Durante o recesso (21 dez a 4 jan), o atendimento acontece apenas por e-mail.</p>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default Contato
