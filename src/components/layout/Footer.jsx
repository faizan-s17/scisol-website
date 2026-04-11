import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-navy text-white mt-12 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(180deg, rgba(11,102,209,0.06), rgba(15,23,42,0.06))' }} />
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
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <span className="font-medium">Phone:</span>{' '}
                <a href="tel:+923257236785" className="hover:text-brand-cyan transition-colors">0325 7236785</a>
              </p>
              <p>
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:scientificsolutionpk@gmail.com" className="hover:text-brand-cyan transition-colors">scientificsolutionpk@gmail.com</a>
              </p>
              
              {/* Social Media Icons */}
              <div className="pt-3">
                <p className="font-medium mb-2">Follow Us</p>
                <div className="flex gap-3">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61579666493471&rdid=wwd9kumEVotkdGni&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CENmcssWv%2F#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="Facebook"
                  >
                    <img 
                      src="/images/fb.svg" 
                      alt="Facebook" 
                      className="w-6 h-6"
                    />
                  </a>
                  <a 
                    href="https://www.instagram.com/scientificsolution" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <img 
                      src="/images/insta.svg" 
                      alt="Instagram" 
                      className="w-7 h-7"
                    />
                  </a>
                  <a 
                    href="https://wa.me/923257236785" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
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
