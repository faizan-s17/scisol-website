import React from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'

const Statistics = () => (
  <motion.section className="py-16 bg-off-white" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <Container>
      <SectionTitle title="By the Numbers" subtitle="Proven Results" centered={true} />
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
        {[
          {value: '750+', label: 'Pharma Manufacturers Supported'},
          {value: '15+', label: 'Export Markets'},
          {value: '98%', label: 'Approval Success'},
          {value: '10+', label: 'Regulatory Experts'}
        ].map((s, i) => (
          <div key={i} className="card p-6">
            <div className="text-3xl font-bold text-brand-cyan">{s.value}</div>
            <div className="text-sm text-muted-slate">{s.label}</div>
          </div>
        ))}
      </div>
    </Container>
  </motion.section>
)

export default Statistics
