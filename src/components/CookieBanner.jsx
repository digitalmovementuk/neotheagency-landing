import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner({ onAccept, onDecline }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('neo_cookie_consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('neo_cookie_consent', 'accepted')
    setVisible(false)
    onAccept()
  }

  const handleDecline = () => {
    localStorage.setItem('neo_cookie_consent', 'declined')
    setVisible(false)
    onDecline()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
          role="dialog"
          aria-label="Cookie-Einstellungen"
        >
          <div className="bg-navy-800 border border-white/[0.12] rounded-2xl p-5 shadow-2xl shadow-black/50 backdrop-blur-sm">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-xl mt-0.5">🍪</span>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">Cookie-Einstellungen</h3>
                <p className="text-white/55 text-xs leading-relaxed">
                  Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unsere Website zu analysieren.
                  Weitere Informationen finden Sie in unserer{' '}
                  <a href="/datenschutz" className="text-blue-400 hover:text-blue-300 underline underline-offset-1">
                    Datenschutzerklärung
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleDecline}
                className="flex-1 py-2.5 px-4 border border-white/[0.15] text-white/60 hover:text-white hover:border-white/30 text-xs font-medium rounded-xl transition-colors duration-200"
              >
                Ablehnen
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-colors duration-200"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
