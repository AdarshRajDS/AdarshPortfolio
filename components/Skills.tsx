'use client'

import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiDatabase, FiTool, FiGlobe, FiUsers } from 'react-icons/fi'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: FiCode,
    skills: ['Python', 'MATLAB', 'SQL', 'C++', 'Bash'],
  },
  {
    title: 'Machine Learning & AI',
    icon: FiCpu,
    skills: [
      'Supervised/Unsupervised ML',
      'Anomaly Detection',
      'ML Pipelines',
      'Neural Networks',
      'Feature Extraction',
    ],
  },
  {
    title: 'AI/NLP',
    icon: FiDatabase,
    skills: ['LLMs', 'RAG', 'Prompt Engineering', 'HuggingFace', 'LangChain'],
  },
  {
    title: 'Tools & Frameworks',
    icon: FiTool,
    skills: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Plotly',
      'PowerBI',
      'MLFlow',
      'Docker',
      'CI/CD',
    ],
  },
  {
    title: 'Languages',
    icon: FiGlobe,
    skills: ['English (C1)', 'German (A2)'],
  },
  {
    title: 'Soft Skills',
    icon: FiUsers,
    skills: ['Problem-solving', 'Collaboration', 'Communication'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}


