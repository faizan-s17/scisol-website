import React, { Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-navy">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-cyan"></div>
  </div>
)

function App() {
  const [analyticsLoaded, setAnalyticsLoaded] = useState(false)

  // Defer analytics loading to improve FCP
  useEffect(() => {
    const timer = setTimeout(async () => {
      const [{ SpeedInsights }, { Analytics }] = await Promise.all([
        import('@vercel/speed-insights/react'),
        import('@vercel/analytics/react')
      ])
      // Dynamically render analytics components
      setAnalyticsLoaded(true)
    }, 3000) // Load analytics after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        {/* Vercel Speed Insights & Analytics - Deferred loading */}
        {analyticsLoaded && (
          <>
            <SpeedInsightsLazy />
            <AnalyticsLazy />
          </>
        )}
      </Suspense>
    </Router>
  )
}

// Lazy-loaded analytics components
const SpeedInsightsLazy = lazy(() => import('@vercel/speed-insights/react').then(mod => ({ default: mod.SpeedInsights })))
const AnalyticsLazy = lazy(() => import('@vercel/analytics/react').then(mod => ({ default: mod.Analytics })))

export default App
