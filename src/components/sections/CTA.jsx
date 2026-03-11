import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Container from '../ui/Container'
import Button from '../ui/Button'

const CTA = () => {
 const navigate = useNavigate()

  return (
    <section className="py-20 bg-navy text-white">
      <Container>
        <motion.div className="text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Ready to Start Your Project?</h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">Let's collaborate to ensure regulatory compliance, accelerate approvals, and open export pathways for your products.</p>
          <div className="flex justify-center">
            <Button onClick={() => navigate('/contact')}>Contact Us Now</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default CTA
