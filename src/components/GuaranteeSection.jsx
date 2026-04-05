import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function GuaranteeSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="garantie" ref={ref} className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-gradient opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">
              <span className="w-4 h-px bg-blue-400" />
              Unsere Garantie
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title max-w-3xl mx-auto"
          >
            Klar. Messbar. <span className="gradient-text">Verbindlich.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto mt-5"
          >
            Wir sind eine der wenigen Agenturen, die ein schriftliches Ranking-Versprechen geben –
            denn wir wissen, was wir tun.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Guarantee 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative card p-8 border-blue-500/20 glow-blue overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-bl-full pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                  🏆
                </div>
                <div>
                  <div className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-1">Garantie #1</div>
                  <h3 className="text-xl font-bold text-white">90-Tage-Ranking-Garantie</h3>
                </div>
              </div>
              <p className="text-white/65 leading-relaxed mb-6">
                Ihre Ziel-Keywords erscheinen nach spätestens <strong className="text-white">90 Tagen auf Seite 1 bei Google</strong>.
                Falls dieses Ziel nicht erreicht wird, optimieren wir ohne zusätzliche Kosten weiter –
                so lange, bis das Ranking steht. Keine Ausreden. Keine versteckten Klauseln.
              </p>
              <div className="space-y-2.5">
                {[
                  'Schriftlich garantiertes Ranking',
                  'Klare KPIs vom ersten Tag',
                  'Kostenlose Weiterarbeit bei Nicht-Erreichung',
                  'Monatliche Ranking-Reports',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-sm text-white/70">
                    <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Guarantee 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative card p-8 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/8 rounded-bl-full pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-600/20 border border-indigo-500/30 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                  🤖
                </div>
                <div>
                  <div className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-1">Garantie #2</div>
                  <h3 className="text-xl font-bold text-white">KI-Sichtbarkeits-Garantie</h3>
                </div>
              </div>
              <p className="text-white/65 leading-relaxed mb-6">
                Wir sorgen dafür, dass Ihre Marke in <strong className="text-white">ChatGPT, Google AI Mode und Perplexity</strong> als
                relevanter Anbieter erscheint. Nachweisbar, dokumentiert und Teil Ihrer monatlichen
                Performance-Übersicht.
              </p>
              <div className="space-y-2.5">
                {[
                  'Sichtbarkeit in ChatGPT-Empfehlungen',
                  'Google AI Mode Optimierung',
                  'Perplexity & weitere KI-Tools',
                  'Dokumentierter Nachweis der Erwähnungen',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-sm text-white/70">
                    <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a href="#kontakt" className="btn-primary">
            Jetzt kostenlose SEO-Seite sichern
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-white/35 text-sm mt-4">Kostenlos & unverbindlich · Keine Kreditkarte erforderlich</p>
        </motion.div>
      </div>
    </section>
  )
}
