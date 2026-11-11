'use client'

import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const TIERS = [
  {
    id: 'community',
    name: 'Community',
    price: 'Free',
    period: 'forever',
    who: 'For all event industry professionals',
    description: 'Access the ETAC platform, peer network, public content library, monthly webinars, and the ETAC Vendor Directory. No fees, no commitments, no minimums.',
    features: [
      'ETAC platform & peer network',
      'Public content library access',
      'Monthly webinars',
      'ETAC Vendor Directory',
      'Member directory listing',
      'Monthly newsletter',
    ],
    cta: 'Join Free',
    href: '#join',
    highlighted: false,
    badge: null,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 'Paid',
    period: 'per year',
    who: 'For practitioners who want more',
    description: 'Unlocks the full research library, premium roundtables and workshops, ETA conference discounts, priority matchmaking with technology vendors, and a verified ETAC member badge.',
    features: [
      'Everything in Community',
      'Full research library access',
      'Premium roundtables & workshops',
      'ETA conference discounts',
      'Priority vendor matchmaking',
      'Verified ETAC member badge',
      'Peer mentoring programme',
    ],
    cta: 'Get Pro Access',
    href: '#join',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    id: 'partner',
    name: 'Technology Partner',
    price: 'Custom',
    period: 'per tier',
    who: 'For event technology providers',
    description: 'Join as a paying partner. Tiers from Exhibitor through to Headline Partner, with benefits scaling across visibility, sponsored content, speaker slots at ETA, and direct lead access.',
    features: [
      'Everything in Pro',
      'Branded community visibility',
      'Sponsored content opportunities',
      'Speaker slots at ETA conference',
      'Direct lead access to buyers',
      'Research participation',
      'Dedicated account manager',
    ],
    cta: 'Request Prospectus',
    href: 'mailto:partners@eventtechasia.com',
    highlighted: false,
    badge: 'For Vendors',
  },
]

const BENEFITS = [
  { icon: '📰', title: 'Stay Informed', body: 'ETAC curates what matters — cutting through the flood of new AI tools, vendor claims, and trend reports to surface what is actually relevant to practitioners in Asia.' },
  { icon: '🛒', title: 'Better Buying Decisions', body: 'Peer reviews, buyer guides, and unbiased community-validated vendor information before you sign a contract.' },
  { icon: '👥', title: 'Learn from Peers', body: 'Real case studies, honest assessments, and lessons from professionals who have deployed the tools themselves — not sales decks.' },
  { icon: '🏆', title: 'Build Your Profile', body: 'Active ETAC members are recognised as contributors, speakers, and experts. The community is a career platform as much as a knowledge platform.' },
  { icon: '🎪', title: 'Access ETA Conference', body: 'Priority access to Event Tech Asia, ETAC\'s annual conference in Singapore — first in the room when the industry\'s most important conversations happen.' },
  { icon: '🤝', title: 'Grow Vendor Relationships', body: 'Structured opportunities to engage with technology providers on the community\'s terms, not the vendor\'s sales cycle.' },
]

export default function Membership() {
  return (
    <section id="membership" className="py-24 bg-[#EAF8F4]">
      <div className="max-w-[1180px] mx-auto px-5">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#00A76F] mb-3 block">
            Membership
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#004D40] mb-4">
            Find Your Tier
          </h2>
          <p className="text-[#3A5C52] leading-relaxed">
            Community membership is <strong>free</strong> for all event industry professionals.
            Pro and Partner tiers unlock deeper access, research, and commercial opportunities.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                'rounded-2xl p-8 flex flex-col border card-hover',
                tier.highlighted
                  ? 'bg-[#004D40] text-white border-transparent ring-2 ring-[#00A76F] ring-offset-2 scale-[1.02]'
                  : 'bg-white border-[#C8E8DF]'
              )}
            >
              {tier.badge && (
                <span className={cn(
                  'text-xs font-bold tracking-widest uppercase mb-2',
                  tier.highlighted ? 'text-[#6FE7C1]' : 'text-[#00A76F]'
                )}>
                  {tier.badge}
                </span>
              )}
              <h3 className={cn('text-xl font-extrabold mb-1', tier.highlighted ? 'text-white' : 'text-[#004D40]')}>
                {tier.name}
              </h3>
              <div className="flex items-end gap-1 mb-1">
                <span className={cn('text-4xl font-extrabold', tier.highlighted ? 'text-white' : 'text-[#004D40]')}>
                  {tier.price}
                </span>
                <span className={cn('text-sm mb-1', tier.highlighted ? 'text-white/60' : 'text-[#7A9E96]')}>
                  {tier.period}
                </span>
              </div>
              <p className={cn('text-xs font-semibold mb-4', tier.highlighted ? 'text-[#6FE7C1]' : 'text-[#00A76F]')}>
                {tier.who}
              </p>
              <p className={cn('text-sm leading-relaxed mb-6', tier.highlighted ? 'text-white/70' : 'text-[#3A5C52]')}>
                {tier.description}
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className={cn('mt-0.5 shrink-0', tier.highlighted ? 'text-[#6FE7C1]' : 'text-[#00A76F]')} />
                    <span className={tier.highlighted ? 'text-white/80' : 'text-[#3A5C52]'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                className={cn(
                  'text-center py-3 rounded-full font-semibold text-sm transition-colors',
                  tier.highlighted
                    ? 'bg-[#00A76F] text-white hover:bg-[#009060]'
                    : 'border border-[#00A76F] text-[#00A76F] hover:bg-[#EAF8F4]'
                )}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Benefits grid */}
        <div>
          <h3 className="text-2xl font-extrabold text-[#004D40] text-center mb-10">
            How Event Professionals Benefit
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="p-6 bg-white rounded-2xl border border-[#C8E8DF] card-hover">
                <div className="text-2xl mb-3">{b.icon}</div>
                <h4 className="font-bold text-[#004D40] mb-2">{b.title}</h4>
                <p className="text-sm text-[#3A5C52] leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
