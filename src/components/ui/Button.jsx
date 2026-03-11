import React from 'react'

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:ring-offset-2'
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-ghost',
    outline: 'inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
