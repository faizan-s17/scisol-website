import React from 'react'
import { motion } from 'framer-motion'
import { FaIndustry, FaGlobe, FaCheckDouble, FaUsers } from 'react-icons/fa'
import CountUp from 'react-countup'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SectionBackground from '../ui/SectionBackground'

const Statistics = () => {
  const stats = [
    { 
      value: 750, 
      suffix: '+', 
      label: 'Pharma Manufacturers Supported', 
      icon: FaIndustry,
      color: 'text-brand-cyan'
    },
    { 
      value: 15, 
      suffix: '+', 
      label: 'Export Markets', 
      icon: FaGlobe,
      color: 'text-brand-teal'
    },
    { 
      value: 98, 
      suffix: '%', 
      label: 'Approval Success Rate', 
      icon: FaCheckDouble,
      color: 'text-green-400'
    },
    { 
      value: 10, 
      suffix: '+', 
      label: 'Regulatory Experts', 
      icon: FaUsers,
      color: 'text-purple-400'
    }
  ]

  return (
    <SectionBackground variant="odd" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Container>
          <SectionTitle title="By the Numbers" subtitle="Proven Results & Impact" centered={true} />
          
          <p className="text-center text-muted-slate max-w-2xl mx-auto mb-12">
            Our track record speaks for itself. We've helped hundreds of pharmaceutical companies navigate complex regulatory landscapes successfully.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-cyan to-brand-teal rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
                
                {/* Card content */}
                <div className="relative card card-glass p-8 h-full flex flex-col items-center text-center group-hover:shadow-2xl transition-all duration-500">
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color.replace('text-', 'from-').replace('400', '500')} to-navy flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <stat.icon className={`text-3xl ${stat.color}`} />
                  </motion.div>

                  {/* Animated counter */}
                  <div className={`text-5xl font-extrabold ${stat.color} mb-2`}>
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <p className="text-sm text-muted-slate font-medium leading-relaxed">
                    {stat.label}
                  </p>

                  {/* Hover effect line */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-teal mt-4 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-navy/90 border border-brand-cyan/30 rounded-full text-white text-sm shadow-lg">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="font-medium">Trusted by industry leaders across Pakistan and beyond</span>
            </div>
          </motion.div>
        </Container>
      </div>
    </SectionBackground>
  )
}

export default Statistics
