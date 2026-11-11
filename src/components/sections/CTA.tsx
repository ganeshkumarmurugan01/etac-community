'use client'

import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to /api/join
    setSubmitted(true)
  }

  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-black/10 blur-3xl" />
      </div>

      <div className="relative max-w-[640px] mx-auto px-5 text-center text-white">
        <span className="text-xs font-bold tracking-widest uppercase text-[#6FE7C1] mb-4 block">
          Join Today
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          Asia&rsquo;s event tech community starts here.
        </h2>
        <p className="text-lg text-white/70 mb-10 leading-relaxed">
          Free for event industry professionals. No credit card, no commitment.
          Join the peer network, access the Knowledge Hub, and get invitations to
          monthly webinars and the Event Tech Asia annual conference.
        </p>

        {submitted ? (
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="text-xl font-bold mb-2">Application received!</h3>
            <p className="text-white/70">
              We&rsquo;ll review your request and get back to you within 48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#6FE7C1] transition-colors backdrop-blur-sm"
            />
            <button
              type="submit"
              className="px-8 py-3.5 rounded-full bg-white text-[#004D40] font-bold text-sm hover:bg-[#EAF8F4] transition-colors whitespace-nowrap"
            >
              Join Free →
            </button>
          </form>
        )}

        <p className="mt-6 text-xs text-white/40">
          Partner enquiries: partners@eventtechasia.com · General: hello@eventtechasia.com
        </p>
      </div>
    </section>
  )
}
