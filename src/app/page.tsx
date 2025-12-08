import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkillPulse',
  description: 'SkillPulse is an AI-driven platform that helps professionals find the best educational technology and health & wellness resources to upskill in niche areas, while also promoting a healthier lifestyle. Our unique subscription service curates personalized learning paths based on users' career goals and personal preferences.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">SkillPulse</h1>
      <p className="mt-4 text-lg">SkillPulse is an AI-driven platform that helps professionals find the best educational technology and health & wellness resources to upskill in niche areas, while also promoting a healthier lifestyle. Our unique subscription service curates personalized learning paths based on users' career goals and personal preferences.</p>
    </main>
  )
}
