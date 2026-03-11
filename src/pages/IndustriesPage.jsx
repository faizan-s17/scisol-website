import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const IndustriesPage = () => {
  return (
    <div className="pt-16">
      <Navbar />

      <header className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sci-Sol provides regulatory and scientific support across diverse healthcare and life-science industries.
          </p>
        </div>
      </header>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Pharmaceutical Manufacturers</h3>
            <p className="text-gray-600">Registration, CTD dossiers, variations, pricing and lifecycle management.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Medical Device Companies</h3>
            <p className="text-gray-600">Device classification, technical files, MDR/IVDR alignment and post-market surveillance.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Nutraceuticals & Supplements</h3>
            <p className="text-gray-600">DRAP notifications, label compliance and market access guidance.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Exporters & Trading Firms</h3>
            <p className="text-gray-600">Export certification, free sale certificates and international market pathways.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Contract Manufacturing Organizations</h3>
            <p className="text-gray-600">GMP readiness, quality systems and supplier qualification.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Research & Development Labs</h3>
            <p className="text-gray-600">Study design, analytical method development and regulatory reporting.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default IndustriesPage
