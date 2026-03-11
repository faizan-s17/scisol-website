import React from 'react'

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className="text-brand-cyan font-semibold mb-2 uppercase tracking-wider text-sm">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">{title}</h2>
      <div className={`mt-4 h-1 w-20 bg-brand-blue ${centered ? 'mx-auto' : ''} rounded`}></div>
    </div>
  )
}

export default SectionTitle
