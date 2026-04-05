import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Google Ranking – Seite 1 in 90 Tagen',
    desc: 'Wir positionieren Ihre Website mit datengetriebener On-Page- und Off-Page-Optimierung dauerhaft auf Seite 1 – für die Keywords, die echte Kunden bringen.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Google AI Mode Sichtbarkeit',
    desc: 'Google generiert zunehmend KI-Antworten direkt in den Suchergebnissen. Wir optimieren Ihre Inhalte so, dass Sie in diesen generierten Antworten erscheinen.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'ChatGPT & KI-Tool-Erwähnungen',
    desc: 'ChatGPT, Perplexity und Co. empfehlen täglich Unternehmen. Wir sorgen dafür, dass Ihre Marke in diesen Empfehlungen auftaucht – nachweisbar und dokumentiert.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Technisches SEO & Website-Performance',
    desc: 'Core Web Vitals, Ladezeit, Crawlability, Strukturierung – wir optimieren die technischen Grundlagen, auf denen jedes gute Ranking aufbaut.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Content-Strategie & SEO-Texte',
    desc: 'Wir erstellen Inhalte, die sowohl Google als auch KI-Systeme als autoritäre Quellen erkennen – und Ihre Zielkunden überzeugen, Kontakt aufzunehmen.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Lokales SEO & Google Business',
    desc: 'Dominieren Sie lokale Suchanfragen in Ihrer Region – mit optimiertem Google Business Profil, lokalem Content und Verzeichnis-Einträgen.',
  },
]

export default function SolutionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="leistungen" ref={ref} className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">
              <span className="w-4 h-px bg-blue-400" />
              Unsere Leistungen
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title max-w-3xl mx-auto"
          >
            SEO + KI-Sichtbarkeit:{' '}
            <span className="gradient-text">Die neue Formel</span> für planbare Kundengewinnung
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto mt-5"
          >
            Neo The Agency kombiniert klassisches Google-SEO mit moderner KI-Suchoptimierung –
            damit Sie überall gefunden werden, wo Ihre Kunden suchen: auf Google, in KI-Antworten
            und in ChatGPT-Empfehlungen.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="card p-6 group hover:border-blue-500/20 transition-all duration-300 hover:bg-blue-600/[0.04]"
            >
              <div className="w-10 h-10 bg-blue-600/15 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-5 group-hover:bg-blue-600/25 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-bold text-white mb-3 leading-snug">{service.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
