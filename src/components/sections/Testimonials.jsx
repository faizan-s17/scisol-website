import React from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SectionBackground from '../ui/SectionBackground'

const Testimonials = () => (
  <SectionBackground variant="odd" className="py-20">
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Container>
        <SectionTitle title="What Our Clients Say" centered={true} />
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="card card-glass p-6">
            <p className="text-gray-700 italic">“Sci‑Sol helped us secure DRAP approval quickly and prepared our export documentation for African markets.”</p>
            <p className="mt-4 font-semibold text-navy">— Pharma Company, Karachi</p>
          </div>
          <div className="card card-glass p-6">
            <p className="text-gray-700 italic">“Their CTD team delivered a submission-ready dossier on time and reduced back-and-forth with regulators.”</p>
            <p className="mt-4 font-semibold text-navy">— Exporter, Lahore</p>
          </div>
        </div>
      </Container>
    </motion.div>
  </SectionBackground>
)

export default Testimonials
