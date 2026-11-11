import Image from 'next/image'

const LINKS = {
  Community: [
    { label: 'About ETA',    href: '#about' },
    { label: 'Board',        href: '#board' },
    { label: 'Membership',   href: '#membership' },
    { label: 'How to Join',  href: '#join' },
  ],
  Resources: [
    { label: 'Insights',  href: '#insights' },
    { label: 'Events',    href: '#events' },
    { label: 'Partners',  href: '#partners' },
  ],
  Connect: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Contact',  href: 'mailto:hello@eventtechasia.com' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#004D40] text-white pt-16 pb-8">
      <div className="max-w-[1180px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start gap-[3px] mb-4">
              <Image
                src="/images/eta-logo.png"
                alt="Event Tech Asia"
                width={140}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <span className="text-[9px] font-bold tracking-[.28em] uppercase text-[#6FE7C1]">
                Community
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Uniting everyone who shapes event technology across Asia — from AV
              and experiential vendors to operations, marketing, sales, and beyond.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-bold tracking-widest uppercase text-[#6FE7C1] mb-4">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Event Tech Asia. Serving Asia.</span>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="/terms"   className="hover:text-white/70 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
