import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const faqs = [
  {
    q: 'Wie garantieren Sie ein Ranking auf Seite 1 bei Google?',
    a: 'Unsere Garantie basiert auf einer datengetriebenen Strategie: Wir analysieren zunächst realistische Keywords, bei denen ein Top-Ranking in 90 Tagen erreichbar ist – und optimieren dann systematisch alle technischen, inhaltlichen und strukturellen Faktoren. Falls das Ranking nach 90 Tagen nicht erreicht wird, arbeiten wir kostenlos weiter, bis das Ziel erreicht ist. Keine Ausreden, keine versteckten Klauseln.',
  },
  {
    q: 'Was passiert konkret, wenn das Ranking nach 90 Tagen nicht erreicht wird?',
    a: 'In diesem Fall verlängern wir die Zusammenarbeit ohne zusätzliche Kosten – so lange, bis Ihre Website für die vereinbarten Ziel-Keywords auf Seite 1 erscheint. Dieses Versprechen ist verbindlicher Bestandteil unseres Angebots. Wir haben ein wirtschaftliches Eigeninteresse daran, schnell Ergebnisse zu liefern – das ist unser bestes Qualitätsmerkmal.',
  },
  {
    q: 'Was ist KI-Suchoptimierung und warum ist sie jetzt wichtig?',
    a: 'KI-Tools wie ChatGPT, Google AI Mode und Perplexity beantworten immer mehr Suchanfragen direkt – und empfehlen dabei bestimmte Anbieter. Unternehmen, die heute nicht für KI-Sichtbarkeit optimiert sind, verlieren morgen Kunden, die nie auf ihrer Website landen. Wir optimieren Ihre Marke gezielt für diese neue Suchrealität und sorgen dafür, dass Sie in diesen Empfehlungen erscheinen.',
  },
  {
    q: 'Für welche Branchen ist SEO am wirkungsvollsten?',
    a: 'SEO entfaltet den größten Effekt bei Unternehmen mit hohem Kundenwert pro Abschluss – etwa Anwälte, Ärzte, Immobilienmakler, Unternehmensberater, Coaches und B2B-Dienstleister. Genau dort, wo ein einziger neuer Kunde die gesamte SEO-Investition mehrfach rechtfertigt. Wenn Ihre Marge pro Neukunde hoch ist, ist SEO Ihre effizienteste Wachstumsstrategie.',
  },
  {
    q: 'Wie lange dauert es, bis ich die ersten Ergebnisse sehe?',
    a: 'In den meisten Fällen sind erste Verbesserungen in der Sichtbarkeit nach 30–45 Tagen messbar. Das garantierte Ranking auf Seite 1 für Ihre Ziel-Keywords erreichen wir innerhalb von 90 Tagen. Erste ChatGPT-Erwähnungen können bereits nach 30–60 Tagen auftreten, abhängig von Ihrer Ausgangssituation.',
  },
  {
    q: 'Was unterscheidet Neo The Agency von anderen SEO-Agenturen?',
    a: 'Drei Dinge: Erstens geben wir eine schriftliche Ranking-Garantie – das tun die wenigsten. Zweitens kombinieren wir klassisches Google-SEO mit KI-Suchoptimierung für ChatGPT und Google AI Mode als Standard. Drittens arbeiten wir ohne Mindestlaufzeiten – weil wir auf unsere Ergebnisse vertrauen, nicht auf Vertragsbindungen.',
  },
  {
    q: 'Gibt es Mindestlaufzeiten oder Vertragsbindungen?',
    a: 'Nein. Unsere Zusammenarbeit basiert auf monatlich kündbaren Konditionen. Wir vertrauen darauf, dass unsere Ergebnisse für sich sprechen. Die einzige Ausnahme: Während der laufenden 90-Tage-Garantiephase bitten wir Sie, den Prozess nicht zu unterbrechen, damit wir das garantierte Ergebnis auch liefern können.',
  },
  {
    q: 'Was beinhaltet die kostenlose SEO-Seite, die ich anfordern kann?',
    a: 'Sie erhalten eine individuell erstellte, vollständig SEO-optimierte Landingpage für Ihr Unternehmen – inklusive technischer Optimierung, Keyword-Integration und Conversion-Elementen. Kein Template, keine Massenware. Diese Seite zeigt Ihnen konkret, wie eine professionelle SEO-Strategie für Ihr Business aussieht – und ist sofort einsatzbereit.',
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-white/[0.08] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-white/85 font-medium text-sm md:text-base pr-6 group-hover:text-white transition-colors">
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-6 h-6 bg-white/[0.06] border border-white/[0.12] rounded-full flex items-center justify-center text-white/50"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-white/55 text-sm leading-relaxed pb-5 pr-8">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="faq" ref={ref} className="py-28 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">
              <span className="w-4 h-px bg-blue-400" />
              FAQ
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Häufig gestellte Fragen
          </motion.h2>
        </div>

        {inView && (
          <div className="card p-6 md:p-8">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} item={faq} index={i} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-white/40 text-sm">
            Weitere Fragen?{' '}
            <a href="#kontakt" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">
              Kontaktieren Sie uns direkt.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
