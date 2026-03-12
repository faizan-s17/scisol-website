import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'

const FloatingOrb = ({ className = '', delay = 0, duration = 20, style = {} }) => (
  <motion.div
    className={className}
    style={style}
    animate={{ y: [0, -12, 0] }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
  />
)

const SectionBackground = forwardRef(({ children, variant = 'odd', className = '', ...rest }, ref) => {
  const isOdd = variant === 'odd'

  return (
    <section ref={ref} {...rest} className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Base gradient for odd/even sections */}
        <div
          className="absolute inset-0"
          style={{
            background: isOdd
              ? 'linear-gradient(180deg,#ffffff 0%, #f6f9fc 100%)'
              : 'linear-gradient(180deg,#f6f9fc 0%, #eef3f8 100%)',
            opacity: 1
          }}
        />

        {/* Faint radial vignette to add depth */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at top left, rgba(15,42,68,0.04), transparent 35%)',
            opacity: 0.85
          }}
        />

        {/* subtle grid/dots */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(15,23,42,0.02) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            opacity: 0.04
          }}
        />

        {/* blurred orbs */}
        <FloatingOrb
          className="absolute left-[-6%] top-[-8%] w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle at 30% 30%, rgba(56,189,248,0.16), transparent 60%)' }}
          duration={26}
        />

        <FloatingOrb
          className="absolute right-[-6%] bottom-[-4%] w-80 h-80 rounded-full opacity-12 blur-3xl"
          style={{ background: 'radial-gradient(circle at 70% 20%, rgba(11,102,209,0.14), transparent 70%)' }}
          duration={30}
          delay={4}
        />

        {/* soft glow behind centered content */}
        <div className="absolute left-1/2 -translate-x-1/2 top-28 w-[56rem] h-56 rounded-full opacity-8 blur-3xl" style={{ background: 'radial-gradient(ellipse at center, rgba(11,102,209,0.12), transparent 35%)' }} />
      </div>

      <div className="relative z-10">{children}</div>
    </section>
  )
})

SectionBackground.displayName = 'SectionBackground'

export default SectionBackground
