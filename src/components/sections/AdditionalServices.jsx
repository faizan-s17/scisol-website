import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'

const AdditionalServices = () => {
 return (
  <section className="py-20 bg-off-white">
    <Container>
      <SectionTitle title="Additional Regulatory Support" subtitle="Pakistan-specific" centered={true} />
      <p className="text-center text-muted-slate max-w-3xl mx-auto mb-8">Our additional consulting services help pharmaceutical companies remain compliant with evolving DRAP rules and maintain operational readiness for exports.</p>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {[{
          title: 'Regulatory Intelligence',
          desc: 'Stay updated on DRAP guidelines, digital licensing and policy changes'
        },{
          title: 'Export Strategy',
          desc: 'Market assessment and pathway planning for MENA, Africa, ASEAN and beyond'
        },{
          title: 'Compliance & Training',
          desc: 'Compliance audits, pharmacovigilance setup and staff training'
        },{
          title: 'R&D Collaboration',
          desc: 'BE support, API sourcing guidance and R&D advisory'
        }].map((s, i) => (
          <div key={i} className="card p-6">
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
  </section>
 )
}

export default AdditionalServices
