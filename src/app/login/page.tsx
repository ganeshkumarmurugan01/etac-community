import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LoginForm from '@/components/auth/LoginForm'

export const metadata = { title: 'Sign In | ETAC' }

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--light)] flex items-center justify-center py-20">
        <div className="max-w-md w-full mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[var(--deep)] mb-2">Welcome back</h1>
            <p className="text-gray-500">Sign in to your ETAC member account</p>
          </div>
          <LoginForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
