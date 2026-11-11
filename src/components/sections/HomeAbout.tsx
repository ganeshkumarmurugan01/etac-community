import Link from 'next/link'

const PILLARS = [
  { n: '1', title: 'Community', desc: 'Pan-Asian peer network for event professionals' },
  { n: '2', title: 'Intelligence', desc: 'Research & benchmarking on event tech in Asia' },
  { n: '3', title: 'Marketplace', desc: 'Connecting buyers with event technology providers' },
  { n: '4', title: 'Events', desc: 'From roundtables to the annual ETA Conference' },
]

export default function HomeAbout() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest text-[var(--emerald)] uppercase mb-4">What is ETAC?</p>
            <h2 className="text-4xl font-bold text-[var(--deep)] mb-6">Asia's First Dedicated Event Tech Community</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The USD 12B Southeast Asia MICE industry has no unified professional home. ETAC changes that — connecting event planners, tech providers, venues, and associations across Asia through community, content, and curated events.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-[var(--emerald)] font-semibold hover:gap-3 transition-all">
              Learn about ETAC <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {PILLARS.map((p) => (
              <div key={p.n} className="bg-[var(--light)] rounded-xl p-6 border border-[var(--mint)]/30">
                <div className="w-9 h-9 rounded-lg bg-[var(--emerald)] flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-sm">{p.n}</span>
                </div>
                <h4 className="font-bold text-[var(--deep)] mb-1">{p.title}</h4>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
