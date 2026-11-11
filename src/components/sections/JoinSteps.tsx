'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const STEPS = [
  {
    num: '01',
    title: 'Choose Your Membership',
    body: 'Select the membership that fits your role. Community membership is free and open to all event industry professionals. Pro membership unlocks research, roundtables, and matchmaking. Technology companies join as paying partners.',
  },
  {
    num: '02',
    title: 'Complete Registration',
    body: 'Fill in your profile with your role, company, country, and area of specialisation. The process takes under 3 minutes. For free members, access is instant.',
  },
  {
    num: '03',
    title: 'Verify Your Profile',
    body: 'Pro and Partner members go through a brief verification to maintain community quality. Our team reviews applications within 48 hours and confirms company and professional details.',
  },
  {
    num: '04',
    title: 'Start Connecting',
    body: 'Access the ETAC platform, join the peer network, explore the Knowledge Hub, register for events, and — for Pro and Partner members — engage in matchmaking and roundtables.',
  },
]

export default function JoinSteps() {
  const [active, setActive] = useState(0)

  return (
    <section id="join" className="py-24 bg-white">
      <div className="max-w-[1180px] mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#00A76F] mb-3 block">
            How to Join
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#004D40] mb-4">
            4 Steps to Membership
          </h2>
          <p className="text-[#3A5C52]">
            Free members are onboarded instantly. Sign up at{' '}
            <strong className="text-[#004D40]">eventtechasia.com/community</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Step list */}
          <div className="space-y-3">
            {STEPS.map((step, i) => (
              <button
                key={step.num}
                onClick={() => setActive(i)}
                className={cn(
                  'w-full text-left p-5 rounded-2xl border transition-all duration-200',
                  active === i
                    ? 'bg-[#004D40] border-transparent text-white'
                    : 'bg-white border-[#C8E8DF] text-[#004D40] hover:border-[#00A76F]'
                )}
              >
                <div className="flex items-center gap-4">
                  <span className={cn('text-2xl font-extrabold', active === i ? 'text-[#6FE7C1]' : 'text-[#C8E8DF]')}>
                    {step.num}
                  </span>
                  <span className="font-bold">{step.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="bg-[#EAF8F4] rounded-2xl p-8 border border-[#C8E8DF] min-h-[220px]">
            <div className="text-5xl font-extrabold text-[#C8E8DF] mb-2">{STEPS[active].num}</div>
            <h3 className="text-xl font-extrabold text-[#004D40] mb-3">{STEPS[active].title}</h3>
            <p className="text-[#3A5C52] leading-relaxed">{STEPS[active].body}</p>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-14 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-[#EAF8F4] border border-[#C8E8DF]">
            <p className="text-xs font-bold tracking-widest uppercase text-[#7A9E96] mb-2">Join Community</p>
            <a href="#" className="font-bold text-[#004D40] hover:text-[#00A76F] transition-colors">
              eventtechasia.com/community
            </a>
          </div>
          <div className="p-6 rounded-2xl bg-[#EAF8F4] border border-[#C8E8DF]">
            <p className="text-xs font-bold tracking-widest uppercase text-[#7A9E96] mb-2">Partner Enquiries</p>
            <a href="mailto:partners@eventtechasia.com" className="font-bold text-[#004D40] hover:text-[#00A76F] transition-colors">
              partners@eventtechasia.com
            </a>
          </div>
          <div className="p-6 rounded-2xl bg-[#EAF8F4] border border-[#C8E8DF]">
            <p className="text-xs font-bold tracking-widest uppercase text-[#7A9E96] mb-2">General Contact</p>
            <a href="mailto:hello@eventtechasia.com" className="font-bold text-[#004D40] hover:text-[#00A76F] transition-colors">
              hello@eventtechasia.com
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#00A76F] text-white font-bold text-base hover:bg-[#009060] transition-colors shadow-lg"
          >
            Join Free — No Credit Card Required →
          </a>
          <p className="mt-3 text-sm text-[#7A9E96]">
            Instant access for community members · Pro & Partner applications reviewed within 48 hours
          </p>
        </div>
      </div>
    </section>
  )
}
