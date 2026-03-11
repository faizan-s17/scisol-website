import React from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'

const ExportMarkets = () => (
  <motion.section className="py-20 bg-white" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <Container>
      <SectionTitle title="Export Markets" subtitle="International pathways" centered={false} />
      <p className="text-muted-slate max-w-3xl mb-8">We support export strategies and certification for regional and international markets.</p>
      <div className="grid sm:grid-cols-3 gap-6">
        {['Middle East', 'Africa', 'ASEAN & EU Pathways'].map((m, i) => (
          <div key={i} className="card p-6">
            <h4 className="font-semibold text-navy">{m}</h4>
          </div>
        ))}
      </div>
    </Container>
  </motion.section>
)

export default ExportMarkets
