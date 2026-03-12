import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import Container from '../ui/Container'
import Button from '../ui/Button'

const Hero = () => {
  const navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Preload background image
    const img = new Image()
    img.src = '/hero-bg-optimized.webp'
    img.onload = () => setIsLoaded(true)
  }, [])

  // Animation variants - OPTIMIZED
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  return (
    <section
      id="main-content"
      className={`relative bg-navy text-white min-h-screen flex items-center overflow-hidden transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        backgroundImage: "url('/hero-bg-optimized.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-brand-blue/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(56,189,248,0.15),_transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(45,212,191,0.1),_transparent_60%)]"></div>
      
      {/* Simplified background particles - reduced from 6 to 3 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-cyan/30 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-64 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,1) 100%)' }}
      ></div>

      <div className="relative z-10 pt-20 pb-16 md:pb-24 w-full">
        <Container>
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Left Column - Content */}
            <motion.div variants={fadeInUp} className="space-y-6 md:space-y-8">
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-brand-blue/20 border border-brand-cyan/30 rounded-full text-brand-cyan text-xs md:text-sm font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <FaCheckCircle className="text-xs" />
                <span>Trusted by 750+ Pharmaceutical Leaders</span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                  <span className="block text-white">Sci‑Sol Consultants</span>
                  <span className="block bg-gradient-to-r from-brand-cyan via-brand-teal to-white bg-clip-text text-transparent mt-1">Your Regulatory Partner</span>
                </h1>
                
                <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl">
                  Expert regulatory consulting for Pakistan's pharmaceutical & medical device sectors
                </p>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-white/85 max-w-xl leading-relaxed">
                We help manufacturers and innovators achieve <span className="text-brand-cyan font-semibold">DRAP compliance</span>, 
                <span className="text-brand-teal font-semibold"> cGMP readiness</span>, dossier approvals and 
                <span className="text-brand-cyan font-semibold"> export market access</span> with pragmatic regulatory strategy and operational support.
              </p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-3 md:gap-4 items-center"
                variants={fadeInUp}
              >
                <Button 
                  onClick={() => navigate('/services')} 
                  className="group px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold bg-brand-blue hover:bg-brand-blue-dark shadow-lg shadow-brand-blue/30 transition-all duration-300 hover:shadow-brand-blue/50"
                >
                  <span className="flex items-center gap-2">
                    Explore Services
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold border-2 border-white/30 hover:border-brand-cyan hover:bg-brand-cyan/10 transition-all duration-300"
                >
                  Request Consultation
                </Button>
                <a
                  href="https://wa.me/923040888221?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20regulatory%20consulting%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all duration-300 rounded-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </motion.div>

              {/* Feature Tags */}
              <motion.div 
                className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-4"
                variants={fadeInUp}
              >
                {[
                  { text: 'DRAP Dossier Prep', icon: '📋' },
                  { text: 'GMP Compliance', icon: '✅' },
                  { text: 'Export Ready', icon: '🌍' },
                  { text: 'Fast Approvals', icon: '⚡' }
                ].map((tag, idx) => (
                  <motion.span
                    key={idx}
                    className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs md:text-sm font-medium hover:bg-white/15 transition cursor-default"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (idx * 0.1) }}
                  >
                    <span>{tag.icon}</span>
                    <span>{tag.text}</span>
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Card */}
            <motion.div 
              className="hidden lg:flex justify-end items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative w-full max-w-lg">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-cyan/20 to-brand-teal/20 rounded-2xl blur-2xl"></div>
                
                {/* Main card */}
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-cyan to-brand-teal rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-3xl">🎯</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Expert Guidance</h3>
                        <p className="text-white/70 text-sm">Navigate regulations with confidence</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        'DRAP Registration Success',
                        'International Compliance',
                        'Market Access Strategy',
                        'End-to-End Support'
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-3 text-white/90"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + (idx * 0.1) }}
                        >
                          <FaCheckCircle className="text-brand-cyan flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats mini-card */}
                    <div className="pt-4 border-t border-white/20 grid grid-cols-3 gap-4">
                      {[
                        { value: '98%', label: 'Success Rate' },
                        { value: '15+', label: 'Countries' },
                        { value: '10+', label: 'Experts' }
                      ].map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-brand-cyan">{stat.value}</div>
                          <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1], y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
