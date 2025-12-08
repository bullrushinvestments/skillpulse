import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SkillPulse',
  description: 'SkillPulse is an AI-driven platform that helps professionals find the best educational technology and health & wellness resources to upskill in niche areas, while also promoting a healthier lifestyle. Our unique subscription service curates personalized learning paths based on users' career goals and personal preferences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
