import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Events from '@/components/sections/Events'

export const metadata = { title: 'Events | Event Tech Asia Community' }

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-[var(--deep)] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold tracking-widest text-[var(--mint)] uppercase mb-4">Events</p>
            <h1 className="text-5xl font-bold text-white">ETAC Events & Engagements</h1>
            <p className="text-xl text-gray-300 mt-4 max-w-2xl">From the annual ETA Conference to closed-door roundtables — high-value engagements for Asia's event tech community.</p>
          </div>
        </div>
        <Events />
      </main>
      <Footer />
    </>
  )
}
