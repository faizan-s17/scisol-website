import React from 'react'
import { useNavigate } from 'react-router-dom'
import heroImage from '../../assets/images/heroimage.jpg'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Button from '../ui/Button'

const Hero = () => {
 const navigate = useNavigate()

  return (
    <section id="main-content" className="relative bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(11,102,209,0.12),_transparent)] opacity-80"></div>
      <div className="relative pt-24 pb-20">
        <Container className="text-left">
          <motion.div className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">Sci‑Sol</h1>
              <p className="text-xl md:text-2xl font-light text-brand-cyan mb-4">Regulatory consulting for Pakistan’s pharmaceutical & medical device sectors</p>

              <p className="text-base md:text-lg text-white/90 max-w-xl mb-6 leading-relaxed">We help manufacturers and innovators achieve DRAP compliance, cGMP readiness, dossier approvals and export market access with pragmatic regulatory strategy and operational support.</p>

              <div className="flex flex-wrap gap-3 items-center">
                <Button onClick={() => navigate('/services')} className="mr-2" >Explore Services</Button>
                <Button variant="secondary" onClick={() => navigate('/contact')}>Request Consultation</Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="bg-white/6 px-3 py-1 rounded-full">DRAP Dossier Preparation</span>
                <span className="bg-white/6 px-3 py-1 rounded-full">GMP Readiness</span>
                <span className="bg-white/6 px-3 py-1 rounded-full">Export Pathways</span>
              </div>
            </div>

            <div className="hidden md:flex justify-end">
              <div className="w-full max-w-md bg-white/5 p-6 rounded-xl">
                <img src={heroImage} alt="Sci-Sol hero" className="rounded-md object-cover w-full h-56" />
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  )
}

export default Hero
