'use client'

import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiDownload } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <span className="text-6xl font-bold text-primary-600 dark:text-primary-400">
                  AR
                </span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Adarsh Raj
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-400 mb-4">
              <FiMapPin className="w-5 h-5" />
              <span>Furtwangen, Germany</span>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              MSc student in AI and Data Science with hands-on experience in Python, ML pipeline development, anomaly detection, and data analysis. Skilled in feature engineering, signal processing, and end-to-end data pipelines.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
              <Link
                href="mailto:adarshrajapplication@gmail.com"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:bg-primary-50 dark:hover:bg-gray-700 transition-all text-primary-600 dark:text-primary-400"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/adarsh-raj-ds/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:bg-primary-50 dark:hover:bg-gray-700 transition-all text-primary-600 dark:text-primary-400"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/adarshrajds"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:bg-primary-50 dark:hover:bg-gray-700 transition-all text-primary-600 dark:text-primary-400"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/AdarshRajResume.pdf"
                download
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <FiDownload className="w-5 h-5" />
                Download Resume
              </a>
              <button
                onClick={scrollToContact}
                className="btn-secondary inline-flex items-center justify-center"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


