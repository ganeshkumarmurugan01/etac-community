export default function About() {
  const gaps = [
    'No pan-Asian peer network for event professionals',
    'No Asia-specific event technology showcase or directory',
    'No regional research or benchmarking on event tech adoption',
    'No dedicated platform connecting buyers with event tech providers',
  ]

  const pillars = [
    { title: 'Community', desc: 'A peer network of event professionals across Asia' },
    { title: 'Intelligence', desc: 'Research, benchmarking, and editorial on event tech' },
    { title: 'Marketplace', desc: 'Connecting buyers with event technology providers' },
    { title: 'Events', desc: 'Curated engagements from roundtables to ETA Conference' },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold tracking-widest text-[var(--emerald)] uppercase mb-4">About ETAC</p>
          <h2 className="text-4xl font-bold text-[var(--deep)] mb-6">Asia's First Dedicated Event Tech Community</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Events in Asia are a multi-billion dollar industry spanning corporate conferences,
            trade expos, government summits, entertainment festivals, association congresses,
            and the broader MICE sector. Yet despite its scale, the industry has no unified
            professional home in the region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-xl font-bold text-[var(--deep)] mb-6">What Asia's Events Industry is Missing</h3>
            <ul className="space-y-4">
              {gaps.map((gap, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold flex-shrink-0">✕</span>
                  <span className="text-gray-600">{gap}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--light)] rounded-2xl p-8">
            <h3 className="text-xl font-bold text-[var(--deep)] mb-6">The ETAC Answer</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              ETAC — the Event Tech Asia Community — is the first professional network built
              exclusively for Asia's event industry. We connect event planners, tech providers,
              venues, associations, and government bodies across the region.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through community membership, curated content, and the annual ETA Conference,
              ETAC is building the infrastructure Asia's event tech ecosystem has been missing.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[var(--deep)] mb-8 text-center">The Four Pillars of ETAC</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="bg-[var(--light)] rounded-xl p-6 border border-[var(--mint)]/30">
                <div className="w-10 h-10 rounded-lg bg-[var(--emerald)] mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <h4 className="font-bold text-[var(--deep)] mb-2">{p.title}</h4>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
