import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GreenWorkHub',
  description: 'GreenWorkHub is a SaaS platform that helps small businesses track and reduce their carbon footprint through sustainable office practices and remote work solutions. It combines personal finance management with climate tech to provide a holistic approach to sustainability.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">GreenWorkHub</h1>
      <p className="mt-4 text-lg">GreenWorkHub is a SaaS platform that helps small businesses track and reduce their carbon footprint through sustainable office practices and remote work solutions. It combines personal finance management with climate tech to provide a holistic approach to sustainability.</p>
    </main>
  )
}
