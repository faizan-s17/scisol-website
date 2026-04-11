import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../ui/Container'
import Button from '../ui/Button'

const CTA = () => {
 const navigate = useNavigate()

  return (
    <section className="py-12 md:py-20 bg-navy text-white relative overflow-hidden">
      {/* MOBILE: Simplified gradient overlay - remove complex radial gradients on mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-brand-blue/30 md:hidden" aria-hidden="true" />
      <div className="hidden md:block absolute inset-0 pointer-events-none -z-10" style={{ background: 'radial-gradient(60% 40% at 10% 20%, rgba(56,189,248,0.06), transparent 20%), radial-gradient(50% 40% at 90% 80%, rgba(11,102,209,0.04), transparent 25%)' }} />
      <Container>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3">Ready to Start Your Project?</h2>
          <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">Let's collaborate to ensure regulatory compliance, accelerate approvals, and open export pathways for your products.</p>
          <div className="flex justify-center">
            <Button onClick={() => navigate('/contact')} className="min-h-[44px] px-6 py-2.5 md:px-8 md:py-3">Contact Us Now</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CTA
