import Link from 'next/link'

const PARTNERS = [
  { name: 'Singapore Tourism Board', category: 'Government' },
  { name: 'Marina Bay Sands', category: 'Venue' },
  { name: 'Pico Group', category: 'Events' },
  { name: 'Gevme', category: 'Technology' },
  { name: 'Accor MICE', category: 'Hospitality' },
  { name: 'Reed Exhibitions', category: 'Organiser' },
  { name: 'CWT Meetings', category: 'Technology' },
  { name: 'Suntec Singapore', category: 'Venue' },
]

export default function HomePartners() {
  return (
    <section className="py-14 bg-[var(--light)] border-y border-[var(--mint)]/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm font-semibold tracking-widest text-[var(--emerald)] uppercase">Community Partners & Members</p>
          <Link href="/partners" className="text-sm font-medium text-[var(--deep)] hover:text-[var(--emerald)] transition-colors">
            View all partners →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {PARTNERS.map((p, i) => (
            <div key={i} className="bg-white rounded-xl p-4 flex flex-col items-center justify-center text-center border border-gray-100 hover:border-[var(--mint)] hover:shadow-sm transition-all min-h-[80px]">
              <div className="w-8 h-8 rounded-lg bg-[var(--emerald)]/10 flex items-center justify-center mb-2">
                <span className="text-[var(--emerald)] font-bold text-xs">{p.name.charAt(0)}</span>
              </div>
              <p className="text-xs font-semibold text-[var(--deep)] leading-tight">{p.name}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{p.category}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
          Partner logos are illustrative — <Link href="/partners" className="text-[var(--emerald)] hover:underline">become a partner</Link> to feature here
        </p>
      </div>
    </section>
  )
}
