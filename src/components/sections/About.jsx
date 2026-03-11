import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-800">About Scisol</h2>
          <p className="text-lg text-gray-600 mb-6">
            SCISOL is a leading scientific solutions provider, dedicated to 
            advancing research and innovation. With years of experience in the 
            scientific community, we bridge the gap between theoretical research 
            and practical applications.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Our team of expert scientists and researchers work tirelessly to 
            deliver groundbreaking solutions that drive progress across multiple 
            disciplines.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
