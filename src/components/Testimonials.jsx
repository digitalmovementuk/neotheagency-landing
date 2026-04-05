import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    quote: 'Die Ergebnisse sprechen für sich. Innerhalb von 90 Tagen standen wir auf Platz 1 – etwas, das wir uns vorher nicht vorstellen konnten. Und das ohne einen einzigen Euro mehr in Ads zu investieren.',
    author: 'Thomas R.',
    role: 'Geschäftsführer, IT-Dienstleistungen',
    initials: 'TR',
    stars: 5,
  },
  {
    quote: 'Endlich eine Agentur, die liefert was sie verspricht. Die 90-Tage-Garantie hat mich anfangs skeptisch gemacht – aber die Ergebnisse haben mich vollständig überzeugt. Wir sind jetzt dauerhaft sichtbar.',
    author: 'Sabine K.',
    role: 'Inhaberin, Steuerberatungskanzlei',
    initials: 'SK',
    stars: 5,
  },
  {
    quote: 'Durch die KI-Sichtbarkeitsoptimierung werden wir jetzt von ChatGPT empfohlen, wenn potenzielle Kunden nach unseren Leistungen suchen. Das war ein echter Gamechanger für unser Business.',
    author: 'Markus W.',
    role: 'Gründer, E-Commerce Plattform',
    initials: 'MW',
    stars: 5,
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
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
              Kundenstimmen
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title max-w-xl mx-auto"
          >
            Was unsere Kunden sagen
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="card p-7 flex flex-col"
            >
              <StarRating count={t.stars} />
              <blockquote className="flex-1 text-white/65 text-sm leading-relaxed mt-4 mb-6">
                „{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3 border-t border-white/[0.08] pt-5">
                <div className="w-10 h-10 bg-blue-600/20 border border-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.author}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
