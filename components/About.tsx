'use client'

import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'

export default function About() {
  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I am a passionate MSc student in AI and Data Science at Hochschule Furtwangen, 
              with a strong foundation in machine learning, data analysis, and software development. 
              My journey in data science has equipped me with hands-on experience in building end-to-end 
              ML pipelines, developing anomaly detection systems, and working with modern AI technologies 
              including LLMs and RAG implementations.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              With professional experience as a Software Developer at Cognizant and as a Student Assistant 
              at Hochschule Furtwangen, I have developed expertise in Python-based data processing workflows, 
              ETL pipelines, and creating reproducible analytical dashboards. My work spans from traditional 
              machine learning to cutting-edge generative AI applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am particularly interested in solving complex data problems, building scalable ML systems, 
              and leveraging AI to create impactful solutions. My technical skills are complemented by strong 
              problem-solving abilities and effective communication in both English and German.
            </p>
          </div>

          {/* Core Skills Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Technical Expertise</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Python, MATLAB, SQL, C++, Bash</li>
                <li>• Supervised/Unsupervised ML, Anomaly Detection</li>
                <li>• Neural Networks, Feature Extraction</li>
                <li>• LLMs, RAG, Prompt Engineering</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Tools & Frameworks</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Pandas, NumPy, Matplotlib, Seaborn, Plotly</li>
                <li>• HuggingFace, LangChain</li>
                <li>• MLFlow, Docker, CI/CD</li>
                <li>• PowerBI, SQL Databases</li>
              </ul>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="text-center">
            <a
              href="/resume.pdf"
              download
              className="btn-primary inline-flex items-center gap-2"
            >
              <FiDownload className="w-5 h-5" />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}


