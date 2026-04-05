export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xs">N</span>
            </div>
            <span className="font-bold text-white text-base tracking-tight">
              Neo <span className="text-white/40 font-normal">The Agency</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { label: 'Impressum', href: '/impressum' },
              { label: 'Datenschutz', href: '/datenschutz' },
              { label: 'AGB', href: '/agb' },
              { label: 'Kontakt', href: '#kontakt' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/35 hover:text-white/70 text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-white/25 text-sm">
            © {year} Neo The Agency. Alle Rechte vorbehalten.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.04] text-center">
          <p className="text-white/20 text-xs leading-relaxed max-w-2xl mx-auto">
            Die dargestellten Fallstudien sind repräsentative Beispiele. Individuelle Ergebnisse können variieren.
            Rankinggarantien beziehen sich auf vereinbarte Ziel-Keywords und -positionen gemäß Projektvertrag.
          </p>
        </div>
      </div>
    </footer>
  )
}
