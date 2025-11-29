import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Adarsh Raj. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="https://github.com/adarshrajds"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/adarsh-raj-ds/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:adarshrajapplication@gmail.com"
              className="hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


