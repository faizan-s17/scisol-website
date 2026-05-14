import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'

const AboutPage = () => {
 return (
  <div className="pt-16">
    <Navbar />

    <Container className="pt-24 pb-8">
      <SectionTitle title="A Convergent Platform of Pharmaceutical Professionals" subtitle="Who We Are" centered={true} />

      <p className="text-lg text-muted-slate text-center max-w-4xl mx-auto mb-12">Scientific Solutions is an independent regulatory and compliance advisory firm established to consolidate the expertise of senior professionals drawn from the disciplines of GMP compliance, quality assurance, quality control, validation sciences, pharmaceutical engineering, facility design, regulatory affairs, clinical research, and biologics development.</p>

      {/* About cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="card p-6">
          <h3 className="text-xl font-semibold text-navy mb-2">Senior Expertise</h3>
          <p className="text-muted-slate mb-3">Operating under the leadership of a distinguished practitioner with decades of executive experience across both the public and private sectors of the pharmaceutical industry, our platform serves institutions seeking internationally recognised compliance certifications and sustainable operational excellence.</p>
          <ul className="list-disc list-inside text-muted-slate space-y-2">
            <li>GMP compliance and quality governance</li>
            <li>Validation, engineering, and facility design</li>
            <li>Regulatory strategy and technical documentation</li>
          </ul>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-semibold text-navy mb-2">Integrated Advisory Mandate</h3>
          <p className="text-muted-slate mb-3">We engage directly with manufacturers, emerging pharmaceutical enterprises, healthcare product developers, and public health institutions — delivering bespoke, evidence-based advisory services aligned with the most demanding international regulatory frameworks.</p>
          <ul className="list-disc list-inside text-muted-slate space-y-2">
            <li>PIC/S and WHO GMP alignment</li>
            <li>ICH and EU GMP framework compliance</li>
            <li>US FDA and DRAP regulatory support</li>
          </ul>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-semibold text-navy mb-2">International Market Access</h3>
          <p className="text-muted-slate mb-3">Our advisory model is structured to support product entry, export readiness, and regulatory representation across international markets with disciplined technical precision.</p>
          <ul className="list-disc list-inside text-muted-slate space-y-2">
            <li>International registration strategy</li>
            <li>Target market intelligence and due diligence</li>
            <li>Lifecycle and post-approval support</li>
          </ul>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-semibold text-navy mb-2">Authentic Field Experience</h3>
          <p className="text-muted-slate mb-3">Our founding premise is simple: the most effective regulatory counsel is built on authentic field experience — not theoretical frameworks alone.</p>
          <ul className="list-disc list-inside text-muted-slate space-y-2">
            <li>Public and private sector perspective</li>
            <li>Inspection-led compliance discipline</li>
            <li>Executive advisory and governance depth</li>
          </ul>
        </div>
      </div>
    </Container>

    {/* Why Sci-Sol strengths */}
    <section className="py-20 bg-off-white">
      <Container>
        <SectionTitle title="Our Founding Premise" subtitle="Perspective" centered={true} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card p-6">
            <h4 className="font-semibold text-navy mb-2">Authentic Dual-Sector Experience</h4>
            <p className="text-muted-slate">Guidance informed by experience across public institutions and private pharmaceutical operations, allowing recommendations that are both technically rigorous and operationally practical.</p>
          </div>
          <div className="card p-6">
            <h4 className="font-semibold text-navy mb-2">Internationally Calibrated Standards</h4>
            <p className="text-muted-slate">Our advisory baseline is structured around PIC/S, WHO, ICH, EU GMP, and US FDA expectations to support credibility in global regulatory settings.</p>
          </div>
          <div className="card p-6">
            <h4 className="font-semibold text-navy mb-2">Customised Business Solutions</h4>
            <p className="text-muted-slate">Each engagement is shaped to the client’s specific regulatory, scientific, and commercial context rather than forced into a generic consulting template.</p>
          </div>
        </div>
      </Container>
    </section>

    <Footer />
  </div>
 )
}

export default AboutPage
