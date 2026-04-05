import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const cases = [
  {
    industry: 'Zahnarztpraxis',
    location: 'München',
    headline: 'Platz 1 in 67 Tagen – und 62% weniger Akquisekosten',
    challenge: 'Die Praxis investierte monatlich über €3.800 in Google Ads ohne planbare Ergebnisse. Neue Patienten kamen sporadisch, die Abhängigkeit vom Werbebudget wuchs.',
    result: 'Nach 67 Tagen: Platz 1 für 8 lokale Keywords, darunter „Zahnarzt München Innenstadt". Die monatlichen Ads-Ausgaben wurden um 62% reduziert.',
    stats: [
      { value: '+340%', label: 'Organische Anfragen' },
      { value: '–62%', label: 'Kosten pro Neukunde' },
      { value: '67', suffix: ' Tage', label: 'Bis Platz 1' },
    ],
    quote: 'Früher haben wir über €3.800 monatlich für Ads ausgegeben. Heute kommen die Patienten von selbst – und wir schlafen besser.',
    author: 'Dr. S. Maier',
    role: 'Praxisinhaberin, München',
    tag: 'Lokales SEO',
  },
  {
    industry: 'Immobilienmakler',
    location: 'Hamburg',
    headline: '12 Keywords auf Seite 1 – ohne einen Euro Werbebudget',
    challenge: 'Ein Immobilienmakler mit hohem Provisionspotenzial war online kaum sichtbar. Die Website generierte trotz gutem Ruf keine Anfragen über Google.',
    result: 'Nach 81 Tagen: 12 relevante Keywords auf Seite 1, darunter stark umkämpfte Begriffe wie „Immobilienmakler Hamburg Nord". Der Traffic verdreifachte sich.',
    stats: [
      { value: '+280%', label: 'Website-Traffic' },
      { value: '3×', label: 'Mehr Anfragen' },
      { value: '12', suffix: '', label: 'Keywords auf Seite 1' },
    ],
    quote: 'Neo The Agency hat unser Unternehmen digital neu aufgestellt. Wir sind heute die meistgefundene Maklerfirma in unserem Segment.',
    author: 'K. Hoffmann',
    role: 'Geschäftsführer, Immobilien Hamburg',
    tag: 'SEO + Content',
  },
  {
    industry: 'Unternehmensberatung',
    location: 'Berlin',
    headline: 'Von 0 auf ChatGPT-Empfehlung – in 45 Tagen',
    challenge: 'Ein Unternehmensberater mit Nischen-Expertise war online vollständig unsichtbar. Weder Google noch KI-Tools kannten seinen Namen.',
    result: 'Nach 45 Tagen erste ChatGPT-Erwähnung. Nach 90 Tagen: Seite 1 für 6 Keywords, Ersterwähnung in Google AI Mode und 190% mehr qualifizierte Anfragen.',
    stats: [
      { value: '+190%', label: 'Qualifizierte Leads' },
      { value: '45', suffix: ' Tage', label: 'Bis ChatGPT-Erwähnung' },
      { value: '6', suffix: '', label: 'Keywords auf Seite 1' },
    ],
    quote: 'Ich wusste nicht mal, dass ChatGPT meine Mitbewerber empfiehlt. Neo hat das analysiert, geändert – und jetzt bin ich dabei.',
    author: 'M. Wagner',
    role: 'Gründer, Unternehmensberatung Berlin',
    tag: 'KI-Sichtbarkeit',
  },
]

export default function CaseStudies() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="ergebnisse" ref={ref} className="py-28 relative">
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
              Fallstudien
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title max-w-2xl mx-auto"
          >
            Echte <span className="gradient-text">Ergebnisse</span> für echte Unternehmen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto mt-5"
          >
            Repräsentative Beispiele aus unserer Arbeit – für Unternehmen, die von Paid-Ads-Abhängigkeit
            zur organischen Dominanz gewechselt haben.
          </motion.p>
        </div>

        <div className="space-y-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.headline}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              className="card p-7 md:p-9"
            >
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                {/* Left content */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-600/15 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full">
                      {c.tag}
                    </span>
                    <span className="text-white/35 text-sm">{c.industry} · {c.location}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">{c.headline}</h3>
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">Ausgangssituation</span>
                      <p className="text-white/60 text-sm leading-relaxed mt-1">{c.challenge}</p>
                    </div>
                    <div>
                      <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">Ergebnis</span>
                      <p className="text-white/60 text-sm leading-relaxed mt-1">{c.result}</p>
                    </div>
                  </div>
                  {/* Quote */}
                  <div className="border-l-2 border-blue-600/50 pl-4">
                    <p className="text-white/70 text-sm italic leading-relaxed mb-2">„{c.quote}"</p>
                    <p className="text-white/40 text-xs">{c.author} · {c.role}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="lg:col-span-2 grid grid-cols-3 lg:grid-cols-1 gap-4">
                  {c.stats.map((stat) => (
                    <div key={stat.label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-center lg:text-left">
                      <div className="text-2xl lg:text-3xl font-black text-white mb-1">
                        {stat.value}<span className="text-blue-400">{stat.suffix || ''}</span>
                      </div>
                      <div className="text-white/40 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-white/25 text-xs mt-8"
        >
          * Repräsentative Fallstudien auf Basis typischer Projektergebnisse. Individuelle Ergebnisse können variieren.
        </motion.p>
      </div>
    </section>
  )
}
