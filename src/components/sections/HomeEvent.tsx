import Link from 'next/link'

export default function HomeEvent() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-br from-[var(--deep)] to-[var(--emerald)] rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-10 -translate-x-10" />
            <div className="relative">
              <span className="inline-block text-xs font-semibold text-[var(--mint)] bg-[var(--mint)]/20 px-3 py-1 rounded-full mb-6">Flagship Event</span>
              <h3 className="text-3xl font-bold mb-3">Event Technology Asia 2025</h3>
              <p className="text-[var(--mint)] font-semibold mb-6">Singapore · Q4 2025</p>
              <div className="grid grid-cols-3 gap-4 mb-8 border-t border-white/20 pt-6">
                {[['500+', 'Attendees'], ['40+', 'Speakers'], ['30+', 'Exhibitors']].map(([v, l]) => (
                  <div key={l}>
                    <p className="text-2xl font-bold">{v}</p>
                    <p className="text-xs text-gray-300">{l}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                Asia's premier conference bringing together event planners, tech innovators, and industry leaders for two days of keynotes, demos, and high-value networking.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-[var(--emerald)] uppercase mb-4">Events & Engagements</p>
            <h2 className="text-4xl font-bold text-[var(--deep)] mb-6">Beyond the Conference</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              ETAC curates intimate, high-value engagements throughout the year — from closed-door pitch sessions between planners and tech vendors to buyer-defined use case challenges and partnership roundtables.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Closed-Door Pitch Sessions',
                'Buyer-Defined Use Case Challenges',
                'Intimate Partnership Roundtables',
                'Regional Chapter Meetups',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[var(--emerald)] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/events" className="inline-flex items-center gap-2 text-[var(--emerald)] font-semibold hover:gap-3 transition-all">
              View all events →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
