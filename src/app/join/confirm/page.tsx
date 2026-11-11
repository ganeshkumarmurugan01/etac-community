import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export default function ConfirmPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--light)] flex items-center justify-center py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-[var(--emerald)]/20 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✉️</span>
          </div>
          <h1 className="text-3xl font-bold text-[var(--deep)] mb-4">Check your email</h1>
          <p className="text-gray-600 mb-8">We've sent a confirmation link to your email address. Click it to activate your ETAC membership.</p>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 text-left mb-8">
            <p className="text-sm font-semibold text-[var(--deep)] mb-3">What happens next?</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-[var(--emerald)]">1.</span> Confirm your email address</li>
              <li className="flex gap-2"><span className="text-[var(--emerald)]">2.</span> Sign in to your member dashboard</li>
              <li className="flex gap-2"><span className="text-[var(--emerald)]">3.</span> Complete your profile to appear in the directory</li>
              <li className="flex gap-2"><span className="text-[var(--emerald)]">4.</span> Upgrade to Pro for full directory, meetings & portfolio access</li>
            </ul>
          </div>
          <Link href="/login" className="inline-block bg-[var(--emerald)] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[var(--deep)] transition-colors">
            Go to Sign In
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
