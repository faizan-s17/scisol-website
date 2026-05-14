import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SectionBackground from '../ui/SectionBackground'

const AdditionalServices = () => {
 const services = [
   {
     title: 'GMP Compliance and Quality Governance',
     desc: 'Senior practitioners applying hands-on inspection experience, remediation discipline, and operational governance to strengthen regulated environments.'
   },
   {
     title: 'Regulatory Affairs and Market Access',
     desc: 'Structured counsel across submission strategy, technical documentation, and international registration pathways for local and export markets.'
   },
   {
     title: 'Validation Sciences and Facility Design',
     desc: 'Integrated support across validation, qualification, engineering, and facility planning to align assets with GMP expectations from inception.'
   },
   {
     title: 'Clinical, Biologics, and Development Pathways',
     desc: 'Advisory support for emerging products, biological platforms, and clinical governance requirements within regulated healthcare ecosystems.'
   }
 ]

 return (
  <SectionBackground variant="odd" className="py-20">
    <Container>
      <SectionTitle title="A Convergent Platform of Pharmaceutical Professionals" subtitle="Who We Are" centered={true} />
      <p className="text-center text-muted-slate max-w-4xl mx-auto mb-8">Scientific Solutions is an independent regulatory and compliance advisory firm established to consolidate the expertise of senior professionals drawn from the disciplines of GMP compliance, quality assurance, quality control, validation sciences, pharmaceutical engineering, facility design, regulatory affairs, clinical research, and biologics development.</p>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="card card-glass p-6">
            <div className="flex items-start">
              <div className="bg-brand-blue text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">{i+1}</div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-1">{s.title}</h3>
                <p className="text-muted-slate">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </SectionBackground>
 )
}

export default AdditionalServices
