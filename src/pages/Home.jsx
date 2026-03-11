import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import AdditionalServices from '../components/sections/AdditionalServices'
import WhyChoose from '../components/sections/WhyChoose'
import CTA from '../components/sections/CTA'
import RegulatoryExpertise from '../components/sections/RegulatoryExpertise'
import Process from '../components/sections/Process'
import ExportMarkets from '../components/sections/ExportMarkets'
import Testimonials from '../components/sections/Testimonials'
import Statistics from '../components/sections/Statistics'
import CaseStudies from '../components/sections/CaseStudies'

const Home = () => {
 return (
   <div className="pt-20" role="main">
     <Navbar />
     <Hero />
     <Statistics />
     <Services />
     <AdditionalServices />
     <WhyChoose />
     <RegulatoryExpertise />
     <Process />
     <ExportMarkets />
     <CaseStudies />
     <Testimonials />
     <CTA />
     <Footer />
   </div>
 )
}

export default Home
