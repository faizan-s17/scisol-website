import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SectionBackground from '../ui/SectionBackground'

const ExportMarkets = () => (
  <SectionBackground variant="even" className="py-20">
    <Container>
      <SectionTitle title="Serving Diverse Healthcare Product Sectors" subtitle="Industries and sectors" centered={false} />
      <p className="text-muted-slate max-w-4xl mb-8">We engage across the pharmaceutical and healthcare product landscape, supporting organisations that require disciplined regulatory positioning, technical compliance, and market-ready governance.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Pharmaceutical Manufacturing',
            desc: 'Support for dosage-form producers seeking stronger regulatory positioning, GMP alignment, and international market access.'
          },
          {
            title: 'Biological Products & Biosimilars',
            desc: 'Guidance for biological and biosimilar programmes spanning regulatory science, facility design, and development pathways.'
          },
          {
            title: 'Medical Devices',
            desc: 'Regulatory and technical support for device classification, documentation, quality systems, and post-market obligations.'
          },
          {
            title: 'Alternative Medicines & Nutraceuticals',
            desc: 'Compliance-led market entry support for wellness products, labels, claims, and registration or notification requirements.'
          },
          {
            title: 'Clinical Research Organisations',
            desc: 'Governance support for protocol oversight, ethics-related compliance, and clinical trial regulatory execution.'
          },
          {
            title: 'Public Health & Government Institutions',
            desc: 'Advisory collaboration for public sector institutions seeking credible, internationally aligned regulatory capability.'
          }
        ].map((m, i) => (
          <div key={i} className="card card-glass p-6">
            <h4 className="font-semibold text-navy mb-2">{m.title}</h4>
            <p className="text-sm text-muted-slate leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </SectionBackground>
)

export default ExportMarkets
