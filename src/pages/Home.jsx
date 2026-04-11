import React, { lazy, Suspense } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import LazySection from '../components/ui/LazySection'

// Lazy load below-the-fold sections - loaded only when needed
const Statistics = lazy(() => import('../components/sections/Statistics'))
const Services = lazy(() => import('../components/sections/Services'))
const AdditionalServices = lazy(() => import('../components/sections/AdditionalServices'))
const WhyChoose = lazy(() => import('../components/sections/WhyChoose'))
const RegulatoryExpertise = lazy(() => import('../components/sections/RegulatoryExpertise'))
const Process = lazy(() => import('../components/sections/Process'))
const ExportMarkets = lazy(() => import('../components/sections/ExportMarkets'))
const CaseStudies = lazy(() => import('../components/sections/CaseStudies'))
const Testimonials = lazy(() => import('../components/sections/Testimonials'))
const CTA = lazy(() => import('../components/sections/CTA'))

// Loading fallback for lazy sections
const SectionLoader = () => (
  <div className="py-20 bg-off-white" aria-label="Loading section">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-48 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const Home = () => {
  return (
    <div className="pt-20" role="main">
      {/* Above the fold - Load immediately for fast LCP/FCP */}
      <Navbar />
      <Hero />
      
      {/* Below the fold - Lazy load with IntersectionObserver */}
      <LazySection rootMargin="100px">
        <Suspense fallback={<SectionLoader />}>
          <Statistics />
        </Suspense>
      </LazySection>

      <LazySection rootMargin="100px">
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
      </LazySection>

      <LazySection rootMargin="150px">
        <Suspense fallback={<SectionLoader />}>
          <AdditionalServices />
        </Suspense>
      </LazySection>

      <LazySection rootMargin="150px">
        <Suspense fallback={<SectionLoader />}>
          <WhyChoose />
        </Suspense>
      </LazySection>

      <LazySection rootMargin="150px">
        <Suspense fallback={<SectionLoader />}>
          <RegulatoryExpertise />
        </Suspense>
      </LazySection>

      <LazySection rootMargin="200px">
        <Suspense fallback={<SectionLoader />}>
          <Process />
        </Suspense>
      </LazySection>

      <LazySection rootMargin="200px">
        <Suspense fallback={<SectionLoader />}>
          <ExportMarkets />
        </Suspense>
      </LazySection>

      <LazySection rootMargin="200px">
        <Suspense fallback={<SectionLoader />}>
          <CaseStudies />
        </Suspense>
      </LazySection>

      <LazySection rootMargin="200px">
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
      </LazySection>

      <LazySection rootMargin="200px">
        <Suspense fallback={<SectionLoader />}>
          <CTA />
        </Suspense>
      </LazySection>

      <Footer />
    </div>
  )
}

export default Home
