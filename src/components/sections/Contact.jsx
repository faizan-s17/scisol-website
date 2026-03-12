import React, { useState } from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SectionBackground from '../ui/SectionBackground'
import Button from '../ui/Button'
import { MdEmail, MdSupportAgent, MdOutlineAccessTime } from 'react-icons/md'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const whatsappMessage = `Hello, I would like to request a consultation.
    
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // WhatsApp number (923040888221)
    const whatsappUrl = `https://wa.me/923040888221?text=${encodedMessage}`
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <SectionBackground id="main-content" variant="odd" className="pt-10 pb-20">
      <Container>
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-brand-cyan uppercase tracking-wider">GET EXPERT REGULATORY SUPPORT</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy mt-3">Contact Sci‑Sol</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div>
            <div className="card p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-navy mb-2">Contact Information</h3>
              <p className="text-muted-slate mb-4">We welcome inquiries from pharmaceutical manufacturers, medical device companies, and exporters seeking DRAP compliance, dossier support, or export market guidance.</p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-white/5 text-brand-cyan">
                    <MdEmail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-slate font-medium">Email</p>
                    <a href="mailto:info@scisolreg.com" className="text-navy hover:text-brand-cyan">info@scisolreg.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-white/5 text-brand-cyan">
                    <MdSupportAgent size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-slate font-medium">Consultation</p>
                    <p className="text-navy">Free DRAP / export pathway assessment available upon request</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-white/5 text-brand-cyan">
                    <MdOutlineAccessTime size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-slate font-medium">Response Time</p>
                    <p className="text-navy">Typical response within 1-2 business days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="card p-4">
                <h4 className="text-sm font-semibold text-navy">Free Assessment</h4>
                <p className="text-sm text-muted-slate">DRAP/export pathway review</p>
              </div>
              <div className="card p-4">
                <h4 className="text-sm font-semibold text-navy">Regulatory Support</h4>
                <p className="text-sm text-muted-slate">Dossier, GMP, lifecycle</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-slate mb-1">Name</label>
                  <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan" placeholder="Your name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-slate mb-1">Email</label>
                  <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan" placeholder="you@company.com" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-slate mb-1">Subject</label>
                  <input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan" placeholder="Subject" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-slate mb-1">Message</label>
                  <textarea id="message" name="message" rows="7" required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan" placeholder="Tell us about your project or question"></textarea>
                </div>

                <div>
                  <Button type="submit" className="w-full py-3">Send Message</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </SectionBackground>
  )
}

export default Contact
