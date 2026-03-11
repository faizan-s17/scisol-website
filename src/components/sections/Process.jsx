import React from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'

const Process = () => (
  <motion.section className="py-20 bg-off-white" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <Container>
      <SectionTitle title="Our Process" subtitle="How we work" centered={false} />
      <div className="grid md:grid-cols-5 gap-6 items-start">
        {[
          'Regulatory Assessment',
          'Documentation Preparation',
          'DRAP Submission',
          'Compliance & Audit Support',
          'Export Market Approval'
        ].map((step, i) => (
          <div key={step} className="card p-6 text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-brand-blue text-white flex items-center justify-center font-semibold mb-3">{i+1}</div>
            <h4 className="font-semibold mb-2 text-navy">{step}</h4>
          </div>
        ))}
      </div>
    </Container>
  </motion.section>
)

export default Process
