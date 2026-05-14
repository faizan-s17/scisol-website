import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const IndustriesPage = () => {
  return (
    <div className="pt-16">
      <Navbar />

      <header className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Serving Diverse Healthcare Product Sectors</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Scientific Solutions provides advisory support across the healthcare product landscape with discipline, technical depth, and an internationally oriented regulatory perspective.
          </p>
        </div>
      </header>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Pharmaceutical Manufacturing</h3>
            <p className="text-gray-600">Support for formulation, production, quality governance, registration strategy, and market readiness across conventional dosage forms and complex product lines.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Biological Products & Biosimilars</h3>
            <p className="text-gray-600">Advisory support spanning regulatory science, manufacturing requirements, clinical pathways, and operational readiness for biological development programmes.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Medical Devices</h3>
            <p className="text-gray-600">Regulatory and quality systems support for device classification, technical documentation, conformity planning, and post-market compliance obligations.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Alternative Medicines & Nutraceuticals</h3>
            <p className="text-gray-600">Professional guidance for product positioning, label and claims review, and market entry expectations across wellness-oriented product categories.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Clinical Research Organisations</h3>
            <p className="text-gray-600">Regulatory governance support for protocol design, compliance planning, documentation discipline, and trial oversight within applicable clinical frameworks.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Public Health & Government Institutions</h3>
            <p className="text-gray-600">Advisory collaboration for institutions seeking internationally aligned regulatory capability, structured governance, and sustainable compliance performance.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default IndustriesPage
