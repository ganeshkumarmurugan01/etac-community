import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Membership from '@/components/sections/Membership'

export const metadata = { title: 'Membership | Event Tech Asia Community' }

export default function MembershipPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-[var(--deep)] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold tracking-widest text-[var(--mint)] uppercase mb-4">Membership</p>
            <h1 className="text-5xl font-bold text-white">Join ETAC</h1>
            <p className="text-xl text-gray-300 mt-4 max-w-2xl">Free for event professionals. Paid tiers for deeper access, matchmaking, and the annual ETA Conference.</p>
          </div>
        </div>
        <Membership />
      </main>
      <Footer />
    </>
  )
}
