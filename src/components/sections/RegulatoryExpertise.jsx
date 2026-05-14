import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SectionBackground from '../ui/SectionBackground'

const Expertise = () => (
  <SectionBackground variant="even" className="py-20">
    <Container>
      <div className="mb-6 divider-top" />
      <SectionTitle title="International Compliance Frameworks" subtitle="Standards and regulations" centered={false} />
      <p className="text-muted-slate max-w-4xl mb-8">We align advisory work to the principal international and local frameworks that govern pharmaceutical, biological, device, and clinical operations, ensuring client decisions are grounded in current compliance expectations.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'PIC/S GMP', desc: 'Globally recognised manufacturing standards used to assess inspection readiness, quality governance, and production discipline.' },
          { title: 'WHO GMP', desc: 'Guidance underpinning manufacturing quality, system maturity, and prequalification-oriented compliance expectations.' },
          { title: 'ICH Q8–Q12', desc: 'Integrated quality and lifecycle framework for development, control strategy, change management, and continual improvement.' },
          { title: 'EU GMP Annex', desc: 'Annex-specific requirements applied to advanced manufacturing settings, cleanroom environments, and specialised control measures.' },
          { title: 'US FDA 21 CFR', desc: 'Regulatory provisions governing quality, records, electronic systems, and controlled manufacturing practice in FDA-aligned markets.' },
          { title: 'ISO 13485', desc: 'Quality management standard for medical devices supporting design control, production control, and regulatory consistency.' },
          { title: 'DRAP', desc: 'Pakistan’s national regulatory authority framework covering registration, licensing, variations, and market compliance.' },
          { title: 'ICH E6 GCP', desc: 'Good Clinical Practice framework for ethical, scientific, and compliant conduct of clinical trials.' }
        ].map((framework) => (
          <div key={framework.title} className="card card-glass p-6">
            <h3 className="font-semibold mb-2 text-navy">{framework.title}</h3>
            <p className="text-sm text-muted-slate leading-relaxed">{framework.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </SectionBackground>
)

export default Expertise
