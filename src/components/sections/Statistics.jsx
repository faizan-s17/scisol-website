import React, { useEffect, useState } from 'react'
import { FaIndustry, FaGlobe, FaCheckDouble, FaUsers } from 'react-icons/fa'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SectionBackground from '../ui/SectionBackground'

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [countUpLoaded, setCountUpLoaded] = useState(false)
  const [CountUp, setCountUp] = useState(null)

  // Lazy load react-countup and use IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
          
          // Lazy load CountUp component
          import('react-countup').then((mod) => {
            setCountUp(() => mod.default)
            setCountUpLoaded(true)
          })
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('statistics-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { 
      value: 750, 
      suffix: '+', 
      label: 'Pharma Manufacturers Supported', 
      icon: FaIndustry,
      color: 'text-brand-cyan'
    },
    { 
      value: 15, 
      suffix: '+', 
      label: 'Export Markets', 
      icon: FaGlobe,
      color: 'text-brand-teal'
    },
    { 
      value: 98, 
      suffix: '%', 
      label: 'Approval Success Rate', 
      icon: FaCheckDouble,
      color: 'text-green-400'
    },
    { 
      value: 10, 
      suffix: '+', 
      label: 'Regulatory Experts', 
      icon: FaUsers,
      color: 'text-purple-400'
    }
  ]

  return (
    <SectionBackground id="statistics-section" variant="odd" className="py-12 md:py-20 relative overflow-hidden">
      {/* MOBILE: Disable heavy blur effects on small screens */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="hidden md:block absolute top-10 left-10 w-72 h-72 bg-brand-blue rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute bottom-10 right-10 w-96 h-96 bg-brand-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Container>
          <SectionTitle title="By the Numbers" subtitle="Proven Results & Impact" centered={true} />
          
          <p className="text-center text-muted-slate max-w-2xl mx-auto mb-12">
            Our track record speaks for itself. We've helped hundreds of pharmaceutical companies navigate complex regulatory landscapes successfully.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* MOBILE: Disable gradient border effect on hover (touch devices don't hover) */}
                <div className="hidden md:block absolute -inset-0.5 bg-gradient-to-r from-brand-cyan to-brand-teal rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" aria-hidden="true"></div>
                
                {/* Card content - Smaller padding on mobile */}
                <div className="relative card card-glass p-4 md:p-8 h-full flex flex-col items-center text-center">
                  {/* Icon - Smaller on mobile */}
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.color.replace('text-', 'from-').replace('400', '500')} to-navy flex items-center justify-center mb-3 md:mb-4 shadow-lg`}>
                    <stat.icon className={`text-2xl md:text-3xl ${stat.color}`} />
                  </div>

                  {/* Animated counter or static fallback - Smaller on mobile */}
                  <div className={`text-3xl md:text-5xl font-extrabold ${stat.color} mb-1 md:mb-2`}>
                    {countUpLoaded && CountUp ? (
                      <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} start={isVisible ? 0 : stat.value} />
                    ) : (
                      <span>{isVisible ? `${stat.value}${stat.suffix}` : `${stat.value}${stat.suffix}`}</span>
                    )}
                  </div>

                  {/* Label - Smaller text on mobile */}
                  <p className="text-xs md:text-sm text-muted-slate font-medium leading-relaxed">
                    {stat.label}
                  </p>

                  {/* MOBILE: Hide hover effect line (touch devices) */}
                  <div className="hidden md:block w-0 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-teal mt-4 group-hover:w-full transition-all duration-500 rounded-full" aria-hidden="true"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA - Smaller on mobile */}
          <div className="mt-8 md:mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-navy/90 border border-brand-cyan/30 rounded-full text-white text-xs md:text-sm shadow-lg">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
              <span className="font-medium">Trusted by industry leaders across Pakistan and beyond</span>
            </div>
          </div>
        </Container>
      </div>
    </SectionBackground>
  )
}

export default Statistics
