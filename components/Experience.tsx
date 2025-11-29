'use client'

import { motion } from 'framer-motion'

import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'



const experiences = [
  {
    title: 'Student Assistant',
    company: 'Hochschule Furtwangen',
    location: 'Furtwangen, Germany',
    period: '06/2025 – Present',
    description: [
      'Data analysis, structured reporting, KPI tracking, cross-team collaboration.',
      'Implemented reproducible workflows and dashboards for project tracking.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Cognizant',
    location: 'Remote',
    period: '09/2022 – 03/2025',
    description: [
      'Developed Python workflows for data preprocessing, ETL pipelines, and dashboards.',
      'Worked with SQL databases, ensured data consistency, and provided insights.',
    ],
  },
  {
    title: 'React Native Developer (Freelance)',
    company: 'Humantics',
    location: 'Remote',
    period: '11/2024 – 02/2025',
    description: [
      'Developed AI-powered features for data processing and backend integration.',
      'Ensured structured data handling and reproducible workflows.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card relative pl-8 border-l-4 border-primary-500"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900"></div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-2">
                    <div className="flex items-center gap-1">
                      <FiBriefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-primary-600 dark:text-primary-400 font-semibold">
                  <FiCalendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


