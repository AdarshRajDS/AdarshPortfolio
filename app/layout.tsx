import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adarsh Raj | AI & Data Science Portfolio',
  description: 'MSc student in AI and Data Science with hands-on experience in Python, ML pipeline development, anomaly detection, and data analysis.',
  keywords: ['Adarsh Raj', 'AI', 'Data Science', 'Machine Learning', 'Portfolio', 'Python', 'ML Engineer'],
  authors: [{ name: 'Adarsh Raj' }],
  openGraph: {
    title: 'Adarsh Raj | AI & Data Science Portfolio',
    description: 'MSc student in AI and Data Science with hands-on experience in Python, ML pipeline development, anomaly detection, and data analysis.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


