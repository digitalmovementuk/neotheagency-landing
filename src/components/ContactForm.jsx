import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Replace this with your actual GoHighLevel webhook URL
const GHL_WEBHOOK_URL = 'YOUR_GOHIGHLEVEL_WEBHOOK_URL'

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  website: '',
  message: '',
  gdpr: false,
}

export default function ContactForm() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.gdpr) return

    setStatus('loading')
    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify({
          firstName: form.name.split(' ')[0],
          lastName: form.name.split(' ').slice(1).join(' '),
          companyName: form.company,
          email: form.email,
          phone: form.phone,
          website: form.website,
          message: form.message,
          source: 'neotheagency.de – Landing Page',
        }),
      })
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">
              <span className="w-4 h-px bg-blue-400" />
              Jetzt starten
            </span>
            <h2 className="section-title mt-2 mb-5">
              Ihre kostenlose{' '}
              <span className="gradient-text">SEO-Seite</span>{' '}
              sichern
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Fordern Sie jetzt Ihre kostenlose, individuell erstellte und vollständig
              SEO-optimierte Landingpage an. Kein Template, keine Massenware –
              eine Seite, die für Ihr Business und Ihre Zielkunden gemacht ist.
            </p>

            <div className="space-y-4">
              {[
                { icon: '🎯', text: 'Individuelle SEO-Analyse Ihres Unternehmens' },
                { icon: '📄', text: 'Kostenlose, einsatzbereite SEO-Seite' },
                { icon: '🤖', text: 'KI-Sichtbarkeitsprüfung (ChatGPT & Google AI Mode)' },
                { icon: '📞', text: 'Persönliches Strategiegespräch ohne Verpflichtung' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-white/70 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 card p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/15 border border-green-500/25 rounded-full flex items-center justify-center text-green-400 text-lg">
                  ✓
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">90-Tage-Ranking-Garantie</div>
                  <div className="text-white/45 text-xs">Wir garantieren Ihnen Platz 1 bei Google – schriftlich.</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="card p-7 md:p-9">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold text-white mb-3">Anfrage erhalten!</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Vielen Dank für Ihre Anfrage. Unser Team meldet sich innerhalb von 24 Stunden
                    bei Ihnen – mit Ihrer kostenlosen SEO-Analyse und nächsten Schritten.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="text-lg font-bold text-white mb-6">Jetzt kostenlos anfragen</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/50 text-xs font-medium mb-1.5" htmlFor="name">
                          Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Max Mustermann"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs font-medium mb-1.5" htmlFor="company">
                          Unternehmen *
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Musterfirma GmbH"
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs font-medium mb-1.5" htmlFor="email">
                        E-Mail-Adresse *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="max@musterfirma.de"
                        className="input-field"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/50 text-xs font-medium mb-1.5" htmlFor="phone">
                          Telefon
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+49 123 456789"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs font-medium mb-1.5" htmlFor="website">
                          Website
                        </label>
                        <input
                          id="website"
                          name="website"
                          type="url"
                          value={form.website}
                          onChange={handleChange}
                          placeholder="www.musterfirma.de"
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/50 text-xs font-medium mb-1.5" htmlFor="message">
                        Nachricht (optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Beschreiben Sie kurz Ihre aktuelle Situation oder Ihr Ziel..."
                        className="input-field resize-none"
                      />
                    </div>

                    {/* GDPR */}
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative mt-0.5">
                        <input
                          type="checkbox"
                          name="gdpr"
                          checked={form.gdpr}
                          onChange={handleChange}
                          required
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded border transition-colors flex items-center justify-center ${
                          form.gdpr
                            ? 'bg-blue-600 border-blue-600'
                            : 'border-white/25 bg-white/[0.04] group-hover:border-white/40'
                        }`}>
                          {form.gdpr && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-white/45 text-xs leading-relaxed">
                        Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert und genutzt werden.
                        Die Datenschutzerklärung habe ich zur Kenntnis genommen. *
                      </span>
                    </label>

                    {status === 'error' && (
                      <p className="text-red-400 text-xs">
                        Fehler beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={!form.gdpr || status === 'loading'}
                      className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          Kostenlose SEO-Seite anfordern
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-white/25 text-xs text-center mt-4">
                    Kostenlos & unverbindlich · Keine Kreditkarte · DSGVO-konform
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
