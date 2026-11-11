import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = { title: 'Board | Event Tech Asia Community' }

const BOARD = [
  { name: 'Advisory Board Member', role: 'Event Technology', region: 'Singapore' },
  { name: 'Advisory Board Member', role: 'Corporate Events', region: 'Thailand' },
  { name: 'Advisory Board Member', role: 'MICE & Associations', region: 'Malaysia' },
  { name: 'Advisory Board Member', role: 'Venue Technology', region: 'Indonesia' },
  { name: 'Advisory Board Member', role: 'Event Marketing', region: 'Philippines' },
  { name: 'Advisory Board Member', role: 'Trade Exhibitions', region: 'Hong Kong' },
]

export default function BoardPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-[var(--deep)] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold tracking-widest text-[var(--mint)] uppercase mb-4">Leadership</p>
            <h1 className="text-5xl font-bold text-white">Advisory Board</h1>
            <p className="text-xl text-gray-300 mt-4 max-w-2xl">Senior practitioners from across Asia's event industry who guide ETAC's direction, programming, and community standards.</p>
          </div>
        </div>

        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16 max-w-2xl">
              <h2 className="text-3xl font-bold text-[var(--deep)] mb-4">Our Advisory Board</h2>
              <p className="text-gray-600 leading-relaxed">ETAC is guided by senior practitioners from across Asia's event and technology landscape. Board members represent the diversity of Asia's event ecosystem — from corporate planners and PCOs to venue operators and tech founders.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {BOARD.map((m, i) => (
                <div key={i} className="bg-[var(--light)] rounded-2xl p-8 border border-[var(--mint)]/30">
                  <div className="w-16 h-16 rounded-full bg-[var(--emerald)]/20 flex items-center justify-center mb-4">
                    <span className="text-[var(--deep)] font-bold text-xl">?</span>
                  </div>
                  <p className="text-xs font-semibold text-[var(--emerald)] uppercase tracking-widest mb-1">{m.region}</p>
                  <h3 className="font-bold text-[var(--deep)] text-lg mb-1">{m.name}</h3>
                  <p className="text-sm text-gray-500">{m.role}</p>
                </div>
              ))}
            </div>

            <div className="bg-[var(--deep)] rounded-2xl p-10 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Join the Advisory Board</h3>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">We are building out ETAC's advisory board with senior practitioners from across Asia's event industry. If you are interested in shaping the community, we'd love to hear from you.</p>
              <a href="mailto:hello@eventtechasia.com" className="inline-block bg-[var(--emerald)] text-white font-semibold px-8 py-3 rounded-full hover:bg-[var(--mint)] hover:text-[var(--deep)] transition-colors">
                Express Interest
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
