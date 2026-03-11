import React from 'react'

const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
