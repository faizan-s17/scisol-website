import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
 const [isVisible, setIsVisible] = useState(true)
 const [lastScrollY, setLastScrollY] = useState(0)
 const [open, setOpen] = useState(false)
 const location = useLocation()

 useEffect(() => {
  const handleScroll= () => {
    const currentScrollY = window.scrollY
     
     if (currentScrollY > lastScrollY && currentScrollY > 100) {
       // Scrolling down - hide navbar
       setIsVisible(false)
     } else {
       // Scrolling up - show navbar
       setIsVisible(true)
     }
     
     setLastScrollY(currentScrollY)
   }

   window.addEventListener('scroll', handleScroll, { passive: true })
   
  return () => {
     window.removeEventListener('scroll', handleScroll)
   }
 }, [lastScrollY])

  return (
  <nav 
  className={`backdrop-blur-sm bg-navy/95 drop-shadow-nav fixed w-full top-0 z-50 py-2 transition-transform duration-300 ease-in-out ${
    isVisible ? 'translate-y-0' : '-translate-y-full'
   }`}
  >
    <div className="container px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={logo} alt="Sci-Sol Logo" className="h-14 w-auto hover:opacity-95 transition" />
          </Link>
          <span className="hidden md:block text-sm text-muted-slate">Regulatory Consulting — Pakistan</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`text-white transition font-medium text-sm ${location.pathname === '/' ? 'text-brand-cyan' : 'hover:text-brand-cyan'}`}>
           Home
          </Link>
          <Link to="/about" className={`text-white transition font-medium text-sm ${location.pathname === '/about' ? 'text-brand-cyan' : 'hover:text-brand-cyan'}`}>
           About
          </Link>
          <Link to="/services" className={`text-white transition font-medium text-sm ${location.pathname === '/services' ? 'text-brand-cyan' : 'hover:text-brand-cyan'}`}>
           Services
          </Link>
          <Link to="/contact" className={`text-white transition font-medium text-sm ${location.pathname === '/contact' ? 'text-brand-cyan' : 'hover:text-brand-cyan'}`}>
           Contact
          </Link>
          <Link to="/contact" className="ml-2">
            <button className="btn-primary">Request Consultation</button>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} className="p-2 rounded-md bg-white/5 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-3 space-y-2 pb-4">
          <Link to="/" onClick={() => setOpen(false)} className="block px-3 py-2 text-white rounded-md hover:bg-white/5">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block px-3 py-2 text-white rounded-md hover:bg-white/5">About</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="block px-3 py-2 text-white rounded-md hover:bg-white/5">Services</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block px-3 py-2 text-white rounded-md hover:bg-white/5">Contact</Link>
        </div>
      )}
    </div>
  </nav>
 )
}

export default Navbar
