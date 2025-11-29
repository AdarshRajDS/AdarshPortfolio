'use client'

import { motion } from 'framer-motion'
import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi'

const education = [
  {
    degree: 'MSc, AI and Data Science for Digital Business',
    institution: 'Hochschule Furtwangen',
    location: 'Furtwangen, Germany',
    period: '03/2025 – Ongoing',
  },
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Heritage Institute of Technology',
    location: 'Kolkata, India',
    period: '06/2018 – 06/2022',
  },
]

export default function Education() {
  return (
    <section id="education" className="section-container bg-gray-50 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Education</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <FiBook className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-2">
                    <div className="flex items-center gap-1">
                      <FiMapPin className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-primary-600 dark:text-primary-400 font-semibold">
                    <FiCalendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


