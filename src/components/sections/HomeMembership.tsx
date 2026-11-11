import Link from 'next/link'

const TIERS = [
  {
    name: 'Community',
    price: 'Free',
    desc: 'For event professionals across Asia',
    features: ['Peer network access', 'ETAC newsletter', 'Event invitations', 'Knowledge Hub (basic)'],
    cta: 'Join Free',
    href: '/join',
    highlight: false,
  },
  {
    name: 'Pro Member',
    price: 'Paid',
    desc: 'For active practitioners & leaders',
    features: ['Everything in Community', 'Full Knowledge Hub access', 'Closed-door roundtables', 'Peer matchmaking', 'ETA Conference discount'],
    cta: 'Get Pro Access',
    href: '/membership',
    highlight: true,
  },
  {
    name: 'Technology Partner',
    price: 'Custom',
    desc: 'For event tech companies',
    features: ['Directory listing', 'Pitch session slots', 'Co-branded content', 'Lead access', 'ETA Conference booth'],
    cta: 'Partner With Us',
    href: '/partners',
    highlight: false,
  },
]

export default function HomeMembership() {
  return (
    <section className="py-24 bg-[var(--light)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-[var(--emerald)] uppercase mb-4">Membership</p>
          <h2 className="text-4xl font-bold text-[var(--deep)] mb-4">Join the ETAC Community</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">Free for event professionals. Paid options for practitioners who want more.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {TIERS.map((t) => (
            <div key={t.name} className={`rounded-2xl p-8 border ${t.highlight ? 'bg-[var(--deep)] border-[var(--deep)] text-white' : 'bg-white border-gray-100'}`}>
              <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${t.highlight ? 'text-[var(--mint)]' : 'text-[var(--emerald)]'}`}>{t.name}</p>
              <p className={`text-3xl font-bold mb-1 ${t.highlight ? 'text-white' : 'text-[var(--deep)]'}`}>{t.price}</p>
              <p className={`text-sm mb-6 ${t.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{t.desc}</p>
              <ul className="space-y-2.5 mb-8">
                {t.features.map((f, i) => (
                  <li key={i} className={`flex items-start gap-2 text-sm ${t.highlight ? 'text-gray-200' : 'text-gray-600'}`}>
                    <span className={`mt-0.5 flex-shrink-0 ${t.highlight ? 'text-[var(--mint)]' : 'text-[var(--emerald)]'}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href={t.href}
                className={`block text-center text-sm font-semibold py-3 rounded-xl transition-colors ${t.highlight ? 'bg-[var(--emerald)] text-white hover:bg-[var(--mint)] hover:text-[var(--deep)]' : 'border-2 border-[var(--emerald)] text-[var(--emerald)] hover:bg-[var(--emerald)] hover:text-white'}`}>
                {t.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/membership" className="text-sm font-medium text-[var(--deep)] hover:text-[var(--emerald)] transition-colors">
            Compare all membership tiers in detail →
          </Link>
        </div>
      </div>
    </section>
  )
}
