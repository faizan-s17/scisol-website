import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SectionBackground from '../ui/SectionBackground'

const ExportMarkets = () => (
  <SectionBackground variant="even" className="py-20">
    <Container>
      <SectionTitle title="Export Markets" subtitle="International pathways" centered={false} />
      <p className="text-muted-slate max-w-3xl mb-8">We support export strategies and certification for regional and international markets.</p>
      <div className="grid sm:grid-cols-3 gap-6">
        {['Middle East', 'Africa', 'ASEAN & EU Pathways'].map((m, i) => (
          <div key={i} className="card card-glass p-6">
            <h4 className="font-semibold text-navy">{m}</h4>
          </div>
        ))}
      </div>
    </Container>
  </SectionBackground>
)

export default ExportMarkets
