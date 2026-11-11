const COMMUNITY_SEGMENTS = [
  { icon: '🎪', title: 'Event Organisers & PCOs', desc: 'Professional conference organisers, independent event planners, and event management companies of all sizes.' },
  { icon: '🏢', title: 'Corporate Event Teams', desc: 'In-house event teams at corporations, banks, tech companies, and multinationals managing conferences, product launches, and roadshows.' },
  { icon: '🏨', title: 'Venue & Hotel Groups', desc: 'Convention centres, hotel event departments, stadium venues, and purpose-built event spaces.' },
  { icon: '🎭', title: 'Exhibition & Expo Teams', desc: 'Teams running trade fairs, consumer expos, and B2B exhibitions — including organiser teams and floor operations managers.' },
  { icon: '🏛️', title: 'Associations & Societies', desc: 'Professional associations, trade bodies, academic societies, and non-profits that run annual congresses and member events.' },
  { icon: '🏛️', title: 'Government & Public Sector', desc: 'Government agencies, tourism boards, economic development organisations, and national event offices.' },
  { icon: '🎨', title: 'Agencies & Experience Designers', desc: 'Creative agencies, brand experience firms, AV production houses, and event design studios.' },
]

const TECH_CATEGORIES = [
  { icon: '📱', title: 'Event Management Software', desc: 'Registration platforms, ticketing, event apps, attendee management, CRM integrations, and all-in-one suites.' },
  { icon: '🤖', title: 'AI & Automation Tools', desc: 'AI-powered recommendations, chatbots, automated marketing, matchmaking tools, and intelligent scheduling.' },
  { icon: '🎬', title: 'Audio-Visual & Production', desc: 'LED and display technology, hybrid broadcast, live streaming, VR/AR, and stage and lighting technology.' },
  { icon: '📊', title: 'Data, Analytics & Reporting', desc: 'Event analytics, footfall tracking, engagement scoring, real-time dashboards, and ROI measurement.' },
  { icon: '🏟️', title: 'Venue & Operations Technology', desc: 'Venue booking, crowd management, smart badge and access control, digital signage, and floor planning.' },
  { icon: '💻', title: 'Virtual & Hybrid Platforms', desc: 'End-to-end virtual event platforms, hybrid production studios, networking tools, and on-demand content.' },
  { icon: '💳', title: 'Payments, Finance & Procurement', desc: 'Event payment gateways, procurement platforms, group ticketing, and expense management solutions.' },
  { icon: '🌱', title: 'Sustainability & Compliance', desc: 'Carbon footprint calculators, sustainability reporting, digital-first materials, and ESG event management.' },
]

export default function Partners() {
  return (
    <section id="members" className="py-24 bg-white">
      <div className="max-w-[1180px] mx-auto px-5">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-[#00A76F] mb-3 block">
            Who ETAC is For
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#004D40] mb-4">
            Two Sides of One Ecosystem
          </h2>
          <p className="text-[#3A5C52] leading-relaxed">
            ETAC connects the full event technology value chain — practitioners who plan and
            deliver events, and the technology providers who power them.
          </p>
        </div>

        {/* Community Side */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-[#C8E8DF]" />
            <span className="px-4 py-1.5 rounded-full bg-[#EAF8F4] text-[#004D40] text-sm font-bold border border-[#C8E8DF]">
              Community Members — Free
            </span>
            <div className="h-px flex-1 bg-[#C8E8DF]" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMMUNITY_SEGMENTS.map((s) => (
              <div key={s.title} className="p-5 rounded-xl border border-[#C8E8DF] bg-white card-hover">
                <div className="text-2xl mb-2">{s.icon}</div>
                <h3 className="font-bold text-[#004D40] mb-1 text-sm">{s.title}</h3>
                <p className="text-xs text-[#3A5C52] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Partner Side */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-[#C8E8DF]" />
            <span className="px-4 py-1.5 rounded-full bg-[#004D40] text-white text-sm font-bold">
              Technology Partners — Paid
            </span>
            <div className="h-px flex-1 bg-[#C8E8DF]" />
          </div>
          <p className="text-[#3A5C52] text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            Technology and service providers join ETAC as paying partners, gaining direct access to
            the community of event buyers and decision-makers across Asia. Partner membership gives
            branded visibility, speaking opportunities, lead access, and community advertising.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TECH_CATEGORIES.map((s) => (
              <div key={s.title} className="p-5 rounded-xl border border-[#C8E8DF] bg-[#EAF8F4] card-hover">
                <div className="text-2xl mb-2">{s.icon}</div>
                <h3 className="font-bold text-[#004D40] mb-1 text-sm">{s.title}</h3>
                <p className="text-xs text-[#3A5C52] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="mailto:partners@eventtechasia.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#004D40] text-[#004D40] font-bold text-sm hover:bg-[#004D40] hover:text-white transition-colors"
            >
              Request Partner Prospectus →
            </a>
            <p className="mt-2 text-xs text-[#7A9E96]">partners@eventtechasia.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
