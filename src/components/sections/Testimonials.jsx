import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SectionBackground from '../ui/SectionBackground'

const Testimonials = () => (
  <SectionBackground variant="odd" className="py-20">
    <Container>
      <SectionTitle title="Distinct Advantages of a Convergent Advisory Model" subtitle="Why us" centered={true} />
      <p className="text-center text-muted-slate max-w-4xl mx-auto mb-10">Scientific Solutions is structured to deliver integrated advisory support that is authoritative, responsive, and calibrated to the realities of regulated pharmaceutical and healthcare markets.</p>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="card card-glass p-6">
          <h3 className="font-semibold text-navy mb-2">Authentic Dual-Sector Experience</h3>
          <p className="text-gray-700">Our recommendations are grounded in practical exposure to both public and private sector environments, allowing us to bridge policy expectations with operational execution.</p>
        </div>
        <div className="card card-glass p-6">
          <h3 className="font-semibold text-navy mb-2">Integrated Full-Lifecycle Coverage</h3>
          <p className="text-gray-700">From concept, design, and registration to post-market governance and market expansion, our team provides continuity across the complete product lifecycle.</p>
        </div>
      </div>
    </Container>
  </SectionBackground>
)

export default Testimonials
