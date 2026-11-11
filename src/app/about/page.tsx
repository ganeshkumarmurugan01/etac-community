import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import About from '@/components/sections/About'

export const metadata = { title: 'About ETAC | Event Tech Asia Community' }

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-[var(--deep)] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold tracking-widest text-[var(--mint)] uppercase mb-4">About</p>
            <h1 className="text-5xl font-bold text-white">About ETAC</h1>
          </div>
        </div>
        <About />
      </main>
      <Footer />
    </>
  )
}
