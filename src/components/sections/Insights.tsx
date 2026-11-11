const OFFERINGS = [
  {
    icon: '✍️',
    title: 'Custom Content & Editorial',
    body: 'Asia-specific content on event technology trends, tools, and case studies. Deep-dive guides, how-to playbooks, tool comparison reports, and member spotlights — written for practitioners in the Asian market context.',
  },
  {
    icon: '📊',
    title: 'Research & Industry Intelligence',
    body: 'Annual and quarterly research on the state of event technology in Asia — benchmarking adoption rates, spend patterns, buyer preferences, and emerging vendor categories. Proprietary data unavailable anywhere else in the region.',
  },
  {
    icon: '🗂️',
    title: 'The ETAC Knowledge Hub',
    body: 'A searchable, curated library of event tech resources: vendor directories, product reviews, implementation guides, procurement templates, and RFP frameworks — all validated by community members.',
  },
  {
    icon: '💬',
    title: 'Community Platform & Peer Network',
    body: 'A dedicated digital space where members connect, ask questions, share learnings, recommend vendors, and support each other. Organised by role, geography, and topic.',
  },
  {
    icon: '🎙️',
    title: 'Webinars, Roundtables & Virtual Events',
    body: 'Monthly online sessions covering live product demos, expert panels, member Q&As, and regional spotlights. Free for community members, with premium deep-dive sessions for upgraded tiers.',
  },
  {
    icon: '🎪',
    title: 'Event Tech Asia — Annual Conference',
    body: 'ETAC\'s flagship event, held annually in Singapore. Two days of keynotes, case studies, workshops, and an exhibition featuring 50+ technology vendors. ETAC members receive priority access and discounted delegate passes.',
  },
]

export default function Insights() {
  return (
    <section id="insights" className="py-24 bg-white">
      <div className="max-w-[1180px] mx-auto px-5">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#00A76F] mb-3 block">
            What ETAC Offers
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#004D40] mb-4 leading-tight">
            More Than a Membership Card
          </h2>
          <p className="text-[#3A5C52] leading-relaxed">
            ETAC is an active, content-rich, professionally curated community that delivers
            real value to its members year-round — not just at annual events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFERINGS.map((o) => (
            <div key={o.title} className="p-7 rounded-2xl border border-[#C8E8DF] bg-white card-hover">
              <div className="text-3xl mb-4">{o.icon}</div>
              <h3 className="font-extrabold text-[#004D40] mb-3">{o.title}</h3>
              <p className="text-sm text-[#3A5C52] leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
