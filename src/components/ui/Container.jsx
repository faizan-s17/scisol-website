import React from 'react'

const Container = ({ children, as = 'section', className = '', ...props }) => {
  const Tag = as
  return (
    <Tag className={`section-shell max-w-6xl mx-auto px-4 sm:px-6 ${className}`} {...props}>
      {children}
    </Tag>
  )
}

export default Container
