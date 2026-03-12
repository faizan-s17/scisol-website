import React from 'react'
import { motion } from 'framer-motion'
import { FaPills, FaClipboardCheck, FaFileExport, FaLeaf } from 'react-icons/fa'
import { MdMedicalServices } from 'react-icons/md'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import SectionBackground from '../ui/SectionBackground'

const Services = () => {
 return (
  <SectionBackground id="main-content" variant="even" className="py-10">
    <Container>
      <SectionTitle title="Our Services" subtitle="Regulatory Consulting" centered={false} />

      <div className="grid md:grid-cols-2 gap-8">
        {[{
          icon: <FaPills className="text-white" />,
          title: 'Pharmaceuticals',
          bullets: [
            'DRAP registration (CTD & local dossiers)',
            'cGMP compliance audits & upgrades',
            'Export certificates & pathway strategy',
            'Lifecycle management & variations'
          ],
          note: 'Support for manufacturers to achieve faster approvals and export readiness.'
        },{
          icon: <MdMedicalServices className="text-white" />,
          title: 'Medical Devices & IVDs',
          bullets: [
            'Device classification & technical file preparation',
            'Local representation & post-market surveillance',
            'MDR/IVDR alignment for exports'
          ],
          note: 'Regulatory strategy for safe and compliant device market entry.'
        },{
          icon: <FaLeaf className="text-white" />,
          title: 'Nutraceuticals & Supplements',
          bullets: [
            'Registration & notification support',
            'Label/claims compliance',
            'Market access for wellness products'
          ],
          note: 'Practical support for launching compliant wellness products.'
        },{
          icon: <FaFileExport className="text-white" />,
          title: 'Export Pathways',
          bullets: [
            'Export documentation & certificates',
            'Regulatory intelligence for target markets',
            'Labeling & import readiness'
          ],
          note: 'Guidance for country-specific export requirements and certification.'
        }].map((s, idx) => (
            <motion.div key={idx} className="card card-glass p-6" whileHover={{ scale: 1.01 }} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center mb-4">
              <div className="bg-brand-blue w-12 h-12 rounded-full flex items-center justify-center mr-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-navy">{s.title}</h3>
            </div>
            <ul className="text-gray-700 list-disc list-inside space-y-2 mb-4">
              {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <p className="text-sm text-muted-slate mb-2">{s.note}</p>
          </motion.div>
        ))}
      </div>
    </Container>
    </SectionBackground>
 )
}

export default Services
