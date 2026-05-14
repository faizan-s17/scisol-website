import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SectionBackground from '../ui/SectionBackground'

const Process = () => (
  <SectionBackground variant="odd" className="py-20">
    <Container>
      <SectionTitle title="A Structured, Evidence-Based Engagement Model" subtitle="Process" centered={false} />
      <p className="text-muted-slate max-w-4xl mb-8 leading-relaxed">Our engagements follow a disciplined advisory sequence designed to convert complex regulatory requirements into clear, auditable, and executable action plans that are aligned with the client’s strategic objectives.</p>
      <div className="grid md:grid-cols-5 gap-6 items-start">
        {[
          {
            title: 'Situational Assessment',
            desc: 'A rigorous review of the client’s current regulatory, technical, and operational position to identify constraints, exposures, and strategic priorities.'
          },
          {
            title: 'Strategic Design',
            desc: 'Development of a tailored advisory roadmap that aligns compliance requirements with business objectives, timelines, and market ambitions.'
          },
          {
            title: 'Implementation',
            desc: 'Execution support across documentation, systems, remediation measures, training, and stakeholder coordination to move the plan into practice.'
          },
          {
            title: 'Verification & Audit Readiness',
            desc: 'Independent review of outputs, inspection preparedness, and evidence completeness to ensure the organisation can withstand regulatory scrutiny.'
          },
          {
            title: 'Continuous Optimisation',
            desc: 'Ongoing monitoring and refinement to sustain compliance performance, improve process maturity, and support long-term operational excellence.'
          }
        ].map((step, i) => (
          <div key={step.title} className="card card-glass p-6 text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-brand-blue text-white flex items-center justify-center font-semibold mb-3">{i+1}</div>
            <h4 className="font-semibold mb-2 text-navy">{step.title}</h4>
            <p className="text-sm text-muted-slate leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </SectionBackground>
)

export default Process
