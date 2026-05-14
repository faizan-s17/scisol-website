import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SectionBackground from '../ui/SectionBackground'

const WhyChoose = () => {
 const features = [
    {
      title: 'Regulatory Intelligence',
      description: 'Continuous monitoring of evolving international regulatory landscapes to keep clients ahead of compliance obligations and market entry requirements.'
    },
    {
      title: 'Technical Precision',
      description: 'Deep scientific expertise across pharmaceutical science, validation, quality systems, and engineering — applied with methodological rigour to every engagement.'
    },
    {
      title: 'Bespoke Solutions',
      description: 'No templated approaches. Every engagement is designed around the specific strategic, operational, and regulatory context of the client organisation.'
    },
    {
      title: 'Global Market Access',
      description: 'End-to-end support for international registration strategy, export market development, and representation before regulatory authorities worldwide.'
    }
  ]

 return (
    <SectionBackground variant="odd" className="py-16">
      <Container>
        <SectionTitle title="Four Pillars of Integrated Advisory" subtitle="Our Approach" centered={true} />
        <p className="text-center text-muted-slate max-w-4xl mx-auto mb-10">Scientific Solutions combines strategic foresight, technical discipline, and international perspective to deliver advisory support that is calibrated to the realities of pharmaceutical regulation and market execution.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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