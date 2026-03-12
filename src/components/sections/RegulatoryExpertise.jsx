import React from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SectionBackground from '../ui/SectionBackground'

const Expertise = () => (
  <SectionBackground variant="even" className="py-20">
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Container>
        <div className="mb-6 divider-top" />
        <SectionTitle title="Our Regulatory Expertise" subtitle="Technical & Compliance" centered={false} />
        <p className="text-muted-slate max-w-3xl mb-8">Deep technical and regulatory support across DRAP, CTD dossiers, GMP readiness and export certification.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card card-glass p-6">
            <h3 className="font-semibold mb-2 text-navy">DRAP Compliance</h3>
            <p className="text-sm text-muted-slate">Registration, variations, renewals and local regulatory strategy.</p>
          </div>
          <div className="card card-glass p-6">
            <h3 className="font-semibold mb-2 text-navy">CTD Dossier Preparation</h3>
            <p className="text-sm text-muted-slate">Complete CTD modules, technical writing and submission-ready packaging.</p>
          </div>
          <div className="card card-glass p-6">
            <h3 className="font-semibold mb-2 text-navy">cGMP & Quality Systems</h3>
            <p className="text-sm text-muted-slate">Audits, gap analysis and remediation planning for export readiness.</p>
          </div>
        </div>
      </Container>
    </motion.div>
  </SectionBackground>
)

export default Expertise
