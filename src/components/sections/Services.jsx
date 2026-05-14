import React from 'react'
import { FaFileAlt, FaShieldAlt, FaFlask, FaIndustry, FaGlobe, FaMicroscope, FaNotesMedical, FaTruck, FaVials } from 'react-icons/fa'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SectionBackground from '../ui/SectionBackground'
import { servicesData } from '../../data/servicesData'

const serviceIcons = {
  regulatory: FaFileAlt,
  gmp: FaShieldAlt,
  quality: FaFlask,
  validation: FaMicroscope,
  facility: FaIndustry,
  market: FaGlobe,
  biologics: FaVials,
  clinical: FaNotesMedical,
  sourcing: FaTruck
}

const Services = () => {
 return (
  <SectionBackground id="main-content" variant="even" className="py-10 md:py-16">
    <Container>
      <SectionTitle title="Comprehensive Regulatory & Compliance Services" subtitle="Services" centered={false} />
      <p className="text-muted-slate max-w-4xl mb-8 text-sm md:text-base leading-relaxed">Our service portfolio spans the complete spectrum of pharmaceutical regulatory and operational requirements — from strategic pre-submission advisory through to post-market compliance management and international market expansion.</p>

      {/* MOBILE: Single column, desktop: 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {servicesData.map((s, idx) => (
            /* MOBILE: Smaller padding on mobile cards */
            <div key={idx} className="card card-glass p-4 md:p-6">
            <div className="flex items-start mb-3 md:mb-4 gap-3">
              <div className="bg-brand-blue w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[10px] md:text-xs font-semibold text-center px-1">
                {s.icon && React.createElement(serviceIcons[s.icon], { className: 'text-sm md:text-base', 'aria-hidden': 'true' })}
              </div>
              <div>
                <h3 className="text-base md:text-xl font-semibold text-navy">{s.title}</h3>
                <p className="text-[10px] md:text-xs uppercase tracking-wider text-muted-slate mt-1">{s.tag}</p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-muted-slate mb-3 md:mb-4 leading-relaxed">{s.description}</p>
            {s.features && (
              <ul className="text-gray-700 list-disc list-inside space-y-1.5 md:space-y-2 text-sm md:text-base">
                {s.features.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Container>
    </SectionBackground>
 )
}

export default Services
