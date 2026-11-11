import Link from 'next/link'

export default function HomeInsight() {
  return (
    <section className="py-24 bg-[var(--deep)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm font-semibold tracking-widest text-[var(--mint)] uppercase mb-2">Latest Insights</p>
            <h2 className="text-3xl font-bold text-white">Event Tech Intelligence for Asia</h2>
          </div>
          <Link href="/insights" className="hidden md:inline-flex items-center gap-2 text-[var(--mint)] font-medium hover:gap-3 transition-all text-sm">
            All insights →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: 'Research',
              title: 'The State of Event Technology in Southeast Asia 2025',
              desc: 'An ETAC survey of 200+ event professionals across Singapore, Thailand, Indonesia and Malaysia on tech adoption, budget allocation, and AI readiness.',
              time: '8 min read',
            },
            {
              tag: 'Roundtable',
              title: 'AI in Event Operations: Automation vs. Human Touch',
              desc: 'Key takeaways from ETAC\'s closed-door roundtable with corporate event heads on where AI adds value and where it falls short.',
              time: '5 min read',
            },
            {
              tag: 'Directory',
              title: 'ETAC Knowledge Hub: Event Tech Directory Now Live',
              desc: 'Browse 150+ event technology solutions categorised by registration, AV, matchmaking, venue tech, and more — exclusively for ETAC members.',
              time: 'Members only',
            },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-7 border border-white/10 hover:bg-white/15 transition-colors group cursor-pointer">
              <span className="inline-block text-xs font-semibold text-[var(--mint)] bg-[var(--mint)]/20 px-3 py-1 rounded-full mb-4">{item.tag}</span>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[var(--mint)] transition-colors leading-snug">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.desc}</p>
              <p className="text-xs text-gray-400">{item.time}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="/insights" className="text-[var(--mint)] font-medium text-sm">All insights →</Link>
        </div>
      </div>
    </section>
  )
}
