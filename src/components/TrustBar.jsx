import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const industries = [
  'Immobilien', 'Rechtsanwälte', 'Zahnmedizin', 'E-Commerce', 'Unternehmensberatung',
  'Finanzdienstleister', 'Coaches & Speaker', 'Steuerberatung',
]

export default function TrustBar() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="py-16 border-y border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-white/35 text-sm font-medium tracking-widest uppercase mb-10"
        >
          Bereits vertraut von Unternehmen aus diesen Branchen
        </motion.p>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry, i) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] px-4 py-2.5 rounded-full"
            >
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-white/60 text-sm font-medium">{industry}</span>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-12 border-t border-white/[0.06]"
        >
          {[
            { number: '90', suffix: ' Tage', label: 'Garantiertes Ranking' },
            { number: '3×', suffix: '', label: 'Mehr Anfragen im Schnitt' },
            { number: '100%', suffix: '', label: 'DSGVO-konform' },
            { number: '0', suffix: ' €', label: 'Werbebudget nötig' },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">
                {stat.number}<span className="text-blue-400">{stat.suffix}</span>
              </div>
              <div className="text-white/45 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
