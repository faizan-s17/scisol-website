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
      <SectionTitle title="About Sci‑Sol" subtitle="REGULATORY CONSULTING" centered={true} />

      <p className="text-lg text-muted-slate text-center max-w-3xl mx-auto mb-12">Your dedicated regulatory solutions provider focused on Pakistan’s pharmaceutical growth, DRAP compliance, and export readiness.</p>

      {/* About cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="card p-6">
          <h3 className="text-xl font-semibold text-navy mb-2">Pakistan Pharma Focus</h3>
          <p className="text-muted-slate mb-3">We specialize in Pakistan's regulatory environment, working directly with manufacturers to navigate local policy and DRAP requirements.</p>
          <ul className="list-disc list-inside text-muted-slate space-y-2">
            <li>DRAP product registration & local licensing</li>
            <li>Regulatory gap analysis for exports</li>
            <li>Labeling & packaging compliance</li>
          </ul>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-semibold text-navy mb-2">Regulatory Expertise</h3>
          <p className="text-muted-slate mb-3">Technical regulatory support across CTD dossier preparation, submission quality, and regulatory strategy.</p>
          <ul className="list-disc list-inside text-muted-slate space-y-2">
            <li>CTD module assembly & technical writing</li>
            <li>Submission readiness & review</li>
            <li>Pharmacovigilance advisory</li>
          </ul>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-semibold text-navy mb-2">Global Market Access</h3>
          <p className="text-muted-slate mb-3">We support market entry and export certification across MENA, Africa, and ASEAN markets.</p>
          <ul className="list-disc list-inside text-muted-slate space-y-2">
            <li>Export documentation & certificates</li>
            <li>Country-specific regulatory intelligence</li>
            <li>cGMP alignment for target markets</li>
          </ul>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-semibold text-navy mb-2">Lifecycle Regulatory Support</h3>
          <p className="text-muted-slate mb-3">Ongoing compliance and lifecycle management to keep products market-fit and inspection-ready.</p>
          <ul className="list-disc list-inside text-muted-slate space-y-2">
            <li>Change control & variations</li>
            <li>Renewals & post-approval support</li>
            <li>Quality systems & CAPA planning</li>
          </ul>
        </div>
      </div>
    </Container>

    {/* Why Sci-Sol strengths */}
    <section className="py-20 bg-off-white">
      <Container>
        <SectionTitle title="Why Sci‑Sol" subtitle="Company Strengths" centered={true} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card p-6">
            <h4 className="font-semibold text-navy mb-2">Deep Pakistan Pharma Expertise</h4>
            <p className="text-muted-slate">Understanding DRAP, PPMA, and local regulatory dynamics to reduce approval friction.</p>
          </div>
          <div className="card p-6">
            <h4 className="font-semibold text-navy mb-2">Global Compliance Support</h4>
            <p className="text-muted-slate">Helping manufacturers meet WHO, PIC/S and international expectations for export markets.</p>
          </div>
          <div className="card p-6">
            <h4 className="font-semibold text-navy mb-2">Export Market Strategy</h4>
            <p className="text-muted-slate">Practical guidance for Africa, Middle East, and emerging market access.</p>
          </div>
        </div>
      </Container>
    </section>

    <Footer />
  </div>
 )
}

export default AboutPage
