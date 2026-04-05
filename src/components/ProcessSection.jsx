import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    number: '01',
    title: 'Kostenlose Analyse & Strategie',
    desc: 'Wir analysieren Ihre Website, Ihre Branche und Ihre stärksten Mitbewerber – kostenlos und unverbindlich. Sie erhalten eine klare Übersicht Ihres aktuellen SEO-Status und des Potenzials.',
    duration: 'Woche 1',
  },
  {
    number: '02',
    title: 'Individuelle SEO-Strategie',
    desc: 'Basierend auf der Analyse entwickeln wir eine maßgeschneiderte Strategie mit konkreten Ziel-Keywords, klaren KPIs und einem realistischen Ranking-Plan für die nächsten 90 Tage.',
    duration: 'Woche 1–2',
  },
  {
    number: '03',
    title: 'Umsetzung & Optimierung',
    desc: 'Unser Team übernimmt die vollständige technische und inhaltliche Optimierung: On-Page-SEO, Backlinkaufbau, Content-Erstellung und KI-Sichtbarkeitsoptimierung.',
    duration: 'Woche 2–10',
  },
  {
    number: '04',
    title: 'Garantiertes Ranking & Wachstum',
    desc: 'Nach spätestens 90 Tagen erscheinen Ihre Ziel-Keywords auf Seite 1. Mit laufendem Monitoring, monatlichen Reports und kontinuierlicher Optimierung sichern wir Ihr Ranking langfristig.',
    duration: 'Ab Woche 10',
  },
]

export default function ProcessSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">
              <span className="w-4 h-px bg-blue-400" />
              Unser Prozess
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title max-w-2xl mx-auto"
          >
            In 4 Schritten zu Ihrem{' '}
            <span className="gradient-text">garantierten Ranking</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/40 via-blue-600/20 to-transparent -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 md:items-center mb-12 md:mb-20 ${
                  i % 2 === 1 ? 'md:direction-rtl' : ''
                }`}
              >
                {/* Content */}
                <div className={`${i % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="card p-7 md:p-8 hover:border-white/[0.15] transition-colors duration-300">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <span className="text-4xl font-black text-blue-600/30 leading-none">{step.number}</span>
                      </div>
                      <div>
                        <div className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-2">{step.duration}</div>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-navy-900 border-2 border-blue-600 rounded-full items-center justify-center z-10">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                </div>

                {/* Empty column for alternating layout */}
                <div className={`hidden md:block ${i % 2 === 1 ? 'md:order-1' : 'md:order-2'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
