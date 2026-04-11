import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SectionBackground from '../ui/SectionBackground'

const CaseStudies = () => (
  <SectionBackground variant="even" className="py-20">
    <Container>
      <SectionTitle title="Case Studies" centered={false} />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card card-glass p-6">
          <h3 className="font-semibold text-navy">Pharma Company — Karachi</h3>
          <p className="text-sm text-muted-slate mt-2">Problem: DRAP registration delays. Solution: Full CTD dossier support. Result: Approval in 4 months.</p>
        </div>
        <div className="card card-glass p-6">
          <h3 className="font-semibold text-navy">Exporter — Pakistan</h3>
          <p className="text-sm text-muted-slate mt-2">Problem: cGMP gaps for MENA export. Solution: GMP remediation plan and audit support. Result: Export approvals achieved.</p>
        </div>
      </div>
    </Container>
  </SectionBackground>
)

export default CaseStudies
