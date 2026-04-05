import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const problems = [
  {
    icon: '💸',
    title: 'Paid Ads fressen Ihr Budget – ohne nachhaltige Wirkung',
    desc: 'Monat für Monat fließt Budget in Google Ads. Hören Sie einen Tag auf zu zahlen, verschwinden Sie sofort aus den Suchergebnissen. Kein dauerhafter Wert, keine Unabhängigkeit.',
  },
  {
    icon: '📉',
    title: 'Ihre Konkurrenten wachsen organisch – ohne Werbekosten',
    desc: 'Während Sie für jeden Klick bezahlen, erscheinen Ihre Mitbewerber organisch auf Seite 1 und gewinnen Kunden kostenlos. Der Abstand wächst jeden Monat.',
  },
  {
    icon: '🤖',
    title: 'ChatGPT & Google AI Mode empfehlen Ihre Konkurrenten – nicht Sie',
    desc: 'KI-Tools übernehmen immer mehr Suchanfragen. Sie liefern direkte Empfehlungen – und Ihre Marke ist nicht dabei. Das kostet Sie Kunden, ohne dass Sie es merken.',
  },
  {
    icon: '📊',
    title: 'Hohe Akquisekosten, sinkende Margen',
    desc: 'Der Preis pro Neukunde steigt kontinuierlich. Was früher funktioniert hat, wird teurer – und das Ergebnis bleibt unberechenbar. Ihr ROI leidet.',
  },
]

export default function ProblemSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-28 relative">
      <div className="absolute inset-0 bg-section-gradient pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">
              <span className="w-4 h-px bg-blue-400" />
              Das Problem
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title max-w-3xl mx-auto"
          >
            Paid Ads funktionieren.{' '}
            <span className="text-white/40">Aber sind sie wirklich die Antwort?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto mt-5"
          >
            Viele Unternehmer mit hohem Kundenwert verbrennen ihr Budget in Paid Ads –
            und übersehen dabei die deutlich profitablere Alternative: organische Sichtbarkeit,
            die dauerhaft Kunden bringt.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="card p-7 group hover:border-white/[0.15] transition-colors duration-300"
            >
              <div className="text-3xl mb-4">{problem.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">{problem.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{problem.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Transition statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block card px-8 py-6 max-w-2xl">
            <p className="text-white/70 text-lg leading-relaxed">
              <span className="text-white font-semibold">Die Lösung ist keine neue Ads-Strategie.</span>{' '}
              Sie ist eine fundamentale Veränderung: raus aus der Abhängigkeit von Klickpreisen,
              rein in eine nachhaltige Sichtbarkeit, die Ihnen gehört.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
