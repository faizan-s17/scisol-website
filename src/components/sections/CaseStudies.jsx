import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SectionBackground from '../ui/SectionBackground'

const CaseStudies = () => (
  <SectionBackground variant="even" className="py-20">
    <Container>
      <SectionTitle title="Guided by Decades of Distinction" subtitle="Leadership in practice" centered={false} />
      <p className="text-muted-slate max-w-4xl mb-8 leading-relaxed">Our leadership model combines senior pharmaceutical judgment, regulatory authority familiarity, and GMP inspection experience to support organisations that require disciplined, executive-level advisory input.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card card-glass p-6">
          <h3 className="font-semibold text-navy">Regulatory Authority Experience</h3>
          <p className="text-sm text-muted-slate mt-2">Our advisory perspective is shaped by direct engagement with regulatory environments, enabling counsel that anticipates authority expectations and reduces avoidable friction.</p>
        </div>
        <div className="card card-glass p-6">
          <h3 className="font-semibold text-navy">PIC/S and WHO GMP Harmonisation</h3>
          <p className="text-sm text-muted-slate mt-2">We align technical and quality programmes to internationally recognised standards, supporting inspection readiness, governance maturity, and credible market positioning.</p>
        </div>
      </div>
    </Container>
  </SectionBackground>
)

export default CaseStudies
