'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Anomaly Detection for Sensor and Test Bench Data',
    subtitle: 'Independent Study',
    description:
      'Built ML experiments for anomaly detection in time-series/sensor data. Simulated signal characteristics and evaluated ML models for fault identification.',
    technologies: ['Python', 'MATLAB', 'Feature Engineering', 'Time-Series Analysis', 'ML Models'],
    github: null, // Add GitHub link if available
  },
  {
    title: 'Furtwangen University Chatbot - RAG Implementation',
    subtitle: 'Generative AI Project',
    description:
      'Designed full AI pipeline with data processing, embedding generation, retrieval. Analytics and structured testing for robust evaluation.',
    technologies: ['Generative AI', 'NLP', 'RAG', 'LLMs', 'HuggingFace', 'LangChain'],
    github: null, // Add GitHub link if available
  },
  {
    title: 'Automated Text Processing Pipeline',
    subtitle: 'NLP & Data Analysis',
    description:
      'Developed pipelines for data cleaning, feature extraction, and exploratory analysis. Dashboard-style analytics for automated evaluations.',
    technologies: ['NLP', 'LLMs', 'Data Analysis', 'Python', 'Pandas', 'Visualization'],
    github: null, // Add GitHub link if available
  },
  {
    title: 'Vehicle Speed Detection using YOLO',
    subtitle: 'Computer Vision Project',
    description:
      'Created performance dashboards summarizing detection accuracy and model evaluation using YOLO for vehicle speed detection.',
    technologies: ['Computer Vision', 'Deep Learning', 'YOLO', 'Python', 'OpenCV'],
    github: null, // Add GitHub link if available
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group hover:border-primary-500"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                >
                  <FiGithub className="w-5 h-5" />
                  View on GitHub
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


