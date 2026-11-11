import type { BoardMember } from '@/types'

// Static seed — replace with Supabase fetch in production
const BOARD: BoardMember[] = [
  {
    id: '1',
    name: 'Priya Menon',
    role: 'Chairperson',
    company: 'EventsIO Asia',
    bio: 'Event technology veteran with 15+ years across APAC markets, specialising in large-scale conference technology.',
  },
  {
    id: '2',
    name: 'Marcus Tan',
    role: 'Vice Chair',
    company: 'StageRight Productions',
    bio: 'AV and staging specialist who has delivered 500+ events across Southeast and East Asia.',
  },
  {
    id: '3',
    name: 'Lena Park',
    role: 'Secretary General',
    company: 'Konvex Technologies',
    bio: 'Software architect and event-tech entrepreneur, building registration and attendee-intelligence platforms since 2015.',
  },
  {
    id: '4',
    name: 'Raj Subramaniam',
    role: 'Treasurer',
    company: 'ExperienceWorks',
    bio: 'Experiential marketing executive with deep expertise in immersive event design and vendor ecosystems across Asia.',
  },
  {
    id: '5',
    name: 'Yuki Tanaka',
    role: 'Board Member',
    company: 'NexEvent Japan',
    bio: 'Pioneer in hybrid event formats and streaming infrastructure, representing the North Asian perspective.',
  },
  {
    id: '6',
    name: 'Amara Siddiqui',
    role: 'Board Member',
    company: 'FieldOps South Asia',
    bio: 'Event operations leader driving operational technology adoption across South and Southeast Asia.',
  },
]

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map((n) => n[0]).join('')
  const hue = name.charCodeAt(0) * 13 % 360
  return (
    <div
      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4"
      style={{ background: `hsl(${hue},55%,40%)` }}
    >
      {initials}
    </div>
  )
}

export default function Board() {
  return (
    <section id="board" className="py-24 bg-[#EAF8F4]">
      <div className="max-w-[1180px] mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#00A76F] mb-3 block">
            Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#004D40] mb-4">
            Board of Directors
          </h2>
          <p className="text-[#3A5C52] leading-relaxed">
            Our founding board brings together event technology leaders — vendors,
            practitioners, and innovators — representing the full breadth of
            Asia&rsquo;s event industry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BOARD.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl p-6 card-hover border border-[#C8E8DF]"
            >
              <Avatar name={member.name} />
              <h3 className="font-extrabold text-[#004D40] text-lg">{member.name}</h3>
              <p className="text-xs font-bold text-[#00A76F] uppercase tracking-wider mb-1">
                {member.role}
              </p>
              <p className="text-sm text-[#3A5C52] font-medium mb-3">{member.company}</p>
              <p className="text-sm text-[#7A9E96] leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
