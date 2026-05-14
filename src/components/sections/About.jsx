import React from 'react'
import { motion } from 'framer-motion'
import SectionBackground from '../ui/SectionBackground'

const About = () => {
  return (
    <SectionBackground variant="odd" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-800">A Convergent Platform of Pharmaceutical Professionals</h2>
          <p className="text-lg text-gray-600 mb-6">
            Scientific Solutions is an independent regulatory and compliance advisory firm established to consolidate the expertise of senior professionals drawn from the disciplines of GMP compliance, quality assurance, quality control, validation sciences, pharmaceutical engineering, facility design, regulatory affairs, clinical research, and biologics development.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We engage directly with manufacturers, emerging pharmaceutical enterprises, healthcare product developers, and public health institutions — delivering bespoke, evidence-based advisory services aligned with the most demanding international regulatory frameworks.
          </p>
        </motion.div>
      </div>
    </SectionBackground>
  )
}

export default About
