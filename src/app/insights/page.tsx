import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Insights from '@/components/sections/Insights'

export const metadata = { title: 'Insights | Event Tech Asia Community' }

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-[var(--deep)] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold tracking-widest text-[var(--mint)] uppercase mb-4">Insights</p>
            <h1 className="text-5xl font-bold text-white">Event Tech Intelligence</h1>
            <p className="text-xl text-gray-300 mt-4 max-w-2xl">Research, editorial, and knowledge resources built for Asia's event industry.</p>
          </div>
        </div>
        <Insights />
      </main>
      <Footer />
    </>
  )
}
