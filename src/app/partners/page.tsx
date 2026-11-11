import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Partners from '@/components/sections/Partners'

export const metadata = { title: 'Partners | Event Tech Asia Community' }

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-[var(--deep)] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold tracking-widest text-[var(--mint)] uppercase mb-4">Partners</p>
            <h1 className="text-5xl font-bold text-white">Community Partners</h1>
            <p className="text-xl text-gray-300 mt-4 max-w-2xl">Event tech companies, venues, and organisations that power the ETAC ecosystem.</p>
          </div>
        </div>
        <Partners />
      </main>
      <Footer />
    </>
  )
}
