import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SectionBackground from '../ui/SectionBackground'

const WhyChoose = () => {
 const features = [
    {
      title: 'Pakistan-Focused Expertise',
      description: 'Deep understanding of DRAP, PPMA dynamics and local challenges.'
    },
    {
      title: 'Global Export Acceleration',
      description: 'Pathways to overcome cGMP/SRA barriers for higher-value markets.'
    },
    {
      title: 'Speed & Zero-Rejection Focus',
      description: 'Fast DRAP turnarounds and accurate dossier preparation.'
    }
  ]

 return (
    <SectionBackground variant="odd" className="py-16">
      <Container>
        <SectionTitle title="Why Choose Sci‑Sol" subtitle="Regulatory Partner for Pakistan" centered={true} />
        <p className="text-center text-muted-slate max-w-3xl mx-auto mb-10">Leverage Pakistan's momentum with specialist regulatory support focused on approvals, compliance, and exports.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="card card-glass p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">{index +1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-navy">{feature.title}</h3>
                  <p className="text-muted-slate">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionBackground>
  )
}

export default WhyChoose