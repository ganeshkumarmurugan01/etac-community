import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import RegisterForm from '@/components/auth/RegisterForm'

export const metadata = { title: 'Join Free | ETAC' }

export default function JoinPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--light)]">
        <div className="bg-[var(--deep)] py-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-sm font-semibold tracking-widest text-[var(--mint)] uppercase mb-3">Free Membership</p>
            <h1 className="text-4xl font-bold text-white mb-3">Join ETAC</h1>
            <p className="text-gray-300">Asia's first professional network for events & technology. Free for all event professionals.</p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto px-6 py-16">
          <RegisterForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
