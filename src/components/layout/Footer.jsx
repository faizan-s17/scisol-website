import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-navy text-white mt-12">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-3">Sci-Sol</h4>
            <p className="text-sm text-gray-300 leading-relaxed">Regulatory consulting partner for Pakistan's pharmaceutical, medical device and nutraceutical sectors. DRAP compliance, export readiness, dossier preparation, and lifecycle support.</p>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Quick Links</h5>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><Link to="/" className="hover:text-brand-cyan">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-cyan">About</Link></li>
              <li><Link to="/services" className="hover:text-brand-cyan">Services</Link></li>
              <li><Link to="/contact" className="hover:text-brand-cyan">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Services</h5>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>DRAP Dossier Preparation</li>
              <li>Medical Device Registration</li>
              <li>GMP & cGMP Readiness</li>
              <li>Export Pathways & Certificates</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Contact</h5>
            <p className="text-sm text-gray-300">Email: <a href="mailto:info@scisol.com" className="hover:text-brand-cyan">info@scisol.com</a></p>
            <p className="text-sm text-gray-300 mt-2">Address: Karachi, Pakistan</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-sm text-gray-400 text-center">
          <p>&copy; 2026 Sci-Sol Regulatory Consulting. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
