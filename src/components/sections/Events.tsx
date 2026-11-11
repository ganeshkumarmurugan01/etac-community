'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const ENGAGEMENTS = [
  {
    icon: '🚪',
    title: 'Closed-Door Pitch Sessions',
    body: 'Invitation-only sessions where event technology providers present directly to a curated room of senior buyers — heads of events, procurement leads, and operational decision-makers. Intimate, pre-qualified, and designed for honest evaluation.',
    tag: 'Invitation Only',
    tagColor: 'bg-purple-50 text-purple-700',
  },
  {
    icon: '🎯',
    title: 'Buyer-Defined Use Case Challenges',
    body: 'Buyers submit real problem statements and live use cases. Technology providers respond with targeted solutions, live demos, or proof-of-concept proposals. Sellers know exactly what the market needs before they walk in the room.',
    tag: 'Open to Partners',
    tagColor: 'bg-blue-50 text-blue-700',
  },
  {
    icon: '🤝',
    title: 'Intimate Partnership Meetings',
    body: 'Structured one-to-one and small-group meetings between buyers and sellers who have identified mutual interest. Curated, scheduled, and hosted in a private setting — creating conditions for real partnerships and pilot agreements to form.',
    tag: 'Pro & Partner',
    tagColor: 'bg-[#EAF8F4] text-[#00A76F]',
  },
]

type EventItem = {
  id: string
  title: string
  date: string
  time?: string
  location: string
  type: 'virtual' | 'in-person' | 'hybrid'
  status: 'upcoming' | 'past'
  category: string
  registration_url?: string
  summary?: string
}

const EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'The Future of Event Data: Privacy, AI & Evolving Regulations Across Asia',
    date: '2026-11-14',
    time: '10:00 AM SGT',
    location: 'Virtual · Open to All Asian Markets',
    type: 'virtual',
    status: 'upcoming',
    category: 'Data & Tech',
    registration_url: '#',
  },
  {
    id: '2',
    title: 'AV & Staging Innovation Summit — Asia Edition',
    date: '2026-12-05',
    time: '9:00 AM SGT',
    location: 'In-Person · Singapore',
    type: 'in-person',
    status: 'upcoming',
    category: 'AV & Production',
    registration_url: '#',
  },
  {
    id: '3',
    title: 'Event Tech Asia (ETA) — Annual Conference 2027',
    date: '2027-03-20',
    time: '8:30 AM SGT',
    location: 'In-Person · Singapore',
    type: 'in-person',
    status: 'upcoming',
    category: 'Annual Conference',
    registration_url: '#',
  },
  {
    id: '4',
    title: 'Experiential Tech Showcase',
    date: '2026-07-18',
    location: 'Virtual + In-Person Hubs',
    type: 'hybrid',
    status: 'past',
    category: 'Experiential',
    summary: '340 attendees across 8 countries explored the latest in immersive event experiences.',
  },
  {
    id: '5',
    title: 'Sustainable Events in Asia: Technology Solutions for a Net-Zero Future',
    date: '2026-05-22',
    location: 'Virtual',
    type: 'virtual',
    status: 'past',
    category: 'Sustainability',
    summary: '280 attendees debated carbon reporting tools, sustainable AV choices, and green venue tech.',
  },
]

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
}

const TYPE_COLORS: Record<EventItem['type'], string> = {
  virtual: 'bg-blue-50 text-blue-600',
  'in-person': 'bg-[#EAF8F4] text-[#00A76F]',
  hybrid: 'bg-purple-50 text-purple-600',
}

export default function Events() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming')
  const filtered = EVENTS.filter((e) => e.status === tab)

  return (
    <section id="events" className="py-24 bg-[#EAF8F4]">
      <div className="max-w-[1180px] mx-auto px-5">

        {/* Unique Engagements */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#00A76F] mb-3 block">
              Unique Engagements
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#004D40] mb-4">
              Where Real Business Gets Done
            </h2>
            <p className="text-[#3A5C52] leading-relaxed">
              Beyond content and networking, ETAC creates structured engagement formats designed
              for depth, not just exposure. These are high-value, curated moments built for
              genuine partnership and commercial commitment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ENGAGEMENTS.map((e) => (
              <div key={e.title} className="bg-white rounded-2xl p-7 border border-[#C8E8DF] card-hover flex flex-col gap-4">
                <div className="text-3xl">{e.icon}</div>
                <span className={cn('self-start text-xs font-bold px-3 py-1 rounded-full', e.tagColor)}>
                  {e.tag}
                </span>
                <h3 className="font-extrabold text-[#004D40] leading-snug">{e.title}</h3>
                <p className="text-sm text-[#3A5C52] leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Events calendar */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#00A76F] mb-3 block">
                Events Calendar
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#004D40]">
                Community Events
              </h2>
            </div>
            <div className="inline-flex rounded-full bg-white border border-[#C8E8DF] p-1">
              {(['upcoming', 'past'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={cn(
                    'px-5 py-2 rounded-full text-sm font-semibold transition-all capitalize',
                    tab === t ? 'bg-[#004D40] text-white' : 'text-[#3A5C52] hover:text-[#004D40]'
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl p-6 border border-[#C8E8DF] card-hover flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className={cn('text-xs font-bold px-3 py-1 rounded-full', TYPE_COLORS[event.type])}>
                    {event.type}
                  </span>
                  <span className="text-xs text-[#7A9E96] font-medium">{event.category}</span>
                </div>
                <h3 className="font-extrabold text-[#004D40] leading-snug">{event.title}</h3>
                <div className="text-sm text-[#3A5C52] space-y-1">
                  <p>📅 {formatDate(event.date)}{event.time ? ` · ${event.time}` : ''}</p>
                  <p>📍 {event.location}</p>
                </div>
                {event.summary && <p className="text-sm text-[#7A9E96] leading-relaxed">{event.summary}</p>}
                {event.status === 'upcoming' && event.registration_url && (
                  <a
                    href={event.registration_url}
                    className="mt-auto self-start px-5 py-2.5 rounded-full border border-[#00A76F] text-[#00A76F] text-sm font-semibold hover:bg-[#EAF8F4] transition-colors"
                  >
                    Register →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
