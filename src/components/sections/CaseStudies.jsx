import React from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'

const CaseStudies = () => (
  <motion.section className="py-20 bg-off-white" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <Container>
      <SectionTitle title="Case Studies" centered={false} />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold text-navy">Pharma Company — Karachi</h3>
          <p className="text-sm text-muted-slate mt-2">Problem: DRAP registration delays. Solution: Full CTD dossier support. Result: Approval in 4 months.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-navy">Exporter — Pakistan</h3>
          <p className="text-sm text-muted-slate mt-2">Problem: cGMP gaps for MENA export. Solution: GMP remediation plan and audit support. Result: Export approvals achieved.</p>
        </div>
      </div>
    </Container>
  </motion.section>
)

export default CaseStudies
