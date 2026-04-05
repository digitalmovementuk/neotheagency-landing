import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import GuaranteeSection from './components/GuaranteeSection'
import ProcessSection from './components/ProcessSection'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

export default function App() {
  const [cookiesAccepted, setCookiesAccepted] = useState(null)

  return (
    <div className="min-h-screen bg-navy-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <SolutionSection />
        <GuaranteeSection />
        <ProcessSection />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <CookieBanner onAccept={() => setCookiesAccepted(true)} onDecline={() => setCookiesAccepted(false)} />
    </div>
  )
}
