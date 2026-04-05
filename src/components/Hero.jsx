import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        {/* Main glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-glow-pulse" />
        {/* Secondary glows */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-800/15 rounded-full blur-[80px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-[80px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/25 text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
          Die SEO-Agentur mit garantiertem Google-Ranking
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-balance"
        >
          Garantiert auf{' '}
          <span className="gradient-text">Platz&nbsp;1&nbsp;bei&nbsp;Google</span>
          {' '}–<br className="hidden sm:block" /> in 90&nbsp;Tagen.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-white/60 text-xl leading-relaxed max-w-3xl mx-auto mb-10"
        >
          Während Ihre Mitbewerber für jeden Klick zahlen, baut Neo&nbsp;The&nbsp;Agency Ihre
          organische Präsenz bei Google, Google&nbsp;AI&nbsp;Mode und ChatGPT –
          dauerhaft, messbar und ohne monatliches Werbebudget.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a href="#kontakt" className="btn-primary text-base px-8 py-4">
            Jetzt kostenlose SEO-Seite sichern
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#garantie" className="btn-secondary text-base px-8 py-4">
            Unsere Garantie entdecken
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/45"
        >
          {[
            '✓ 90-Tage-Ranking-Garantie',
            '✓ KI-Sichtbarkeit bei ChatGPT & Google AI Mode',
            '✓ Keine Vertragsbindung',
            '✓ DSGVO-konform',
          ].map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-2xl card p-1 shadow-2xl shadow-blue-950/50">
            {/* Simulated ranking card UI */}
            <div className="bg-navy-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <div className="flex-1 bg-white/[0.06] rounded-md h-6 ml-2 flex items-center px-3">
                  <span className="text-white/30 text-xs">google.de – SEO Agentur Deutschland</span>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { rank: 1, name: 'neotheagency.de', title: 'SEO Agentur | Garantiertes Ranking in 90 Tagen', active: true },
                  { rank: 2, name: 'wettbewerber-a.de', title: 'SEO Agentur – Günstige Preise', active: false },
                  { rank: 3, name: 'wettbewerber-b.de', title: 'SEO Dienstleistungen Deutschland', active: false },
                ].map((item) => (
                  <div
                    key={item.rank}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                      item.active ? 'bg-blue-600/15 border border-blue-500/20' : 'bg-white/[0.02]'
                    }`}
                  >
                    <span className={`text-xs font-bold mt-0.5 w-4 shrink-0 ${item.active ? 'text-blue-400' : 'text-white/20'}`}>
                      {item.rank}
                    </span>
                    <div>
                      <div className={`text-xs mb-0.5 ${item.active ? 'text-green-400' : 'text-white/25'}`}>{item.name}</div>
                      <div className={`text-sm font-medium ${item.active ? 'text-white' : 'text-white/40'}`}>{item.title}</div>
                    </div>
                    {item.active && (
                      <span className="ml-auto shrink-0 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-md">
                        #1
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-900 to-transparent rounded-b-2xl pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-white/25 text-xs tracking-widest uppercase">Scrollen</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-0.5 h-8 bg-gradient-to-b from-white/20 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  )
}
