'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

const MEMBER_TYPES = [
  { value: 'event_planner',          label: 'Event Planner / PCO' },
  { value: 'corporate_events',       label: 'Corporate Events Manager' },
  { value: 'venue',                  label: 'Venue / Convention Centre' },
  { value: 'exhibition_organiser',   label: 'Exhibition / Trade Show Organiser' },
  { value: 'association',            label: 'Association / Society' },
  { value: 'government',             label: 'Government / Tourism Board' },
  { value: 'agency',                 label: 'Events Agency' },
  { value: 'event_tech_provider',    label: 'Event Technology Provider' },
  { value: 'other',                  label: 'Other' },
]

const COUNTRIES = [
  'Singapore','Malaysia','Thailand','Indonesia','Philippines',
  'Vietnam','India','Hong Kong','China','Japan','South Korea',
  'Australia','UAE','Other'
]

export default function RegisterForm() {
  const router = useRouter()
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    full_name: '', email: '', password: '',
    job_title: '', company: '', country: 'Singapore',
    member_type: '', bio: '',
    linkedin_url: '', website_url: '',
  })

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (step === 1) { setStep(2); return }

    setLoading(true)
    setError('')

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: { full_name: form.full_name },
          emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
        },
      })

      if (signUpError) throw signUpError

      if (data.user) {
        const slug = form.full_name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') + '-' + data.user.id.slice(0, 6)
        await supabase.from('profiles').upsert({
          id: data.user.id,
          email: form.email,
          full_name: form.full_name,
          job_title: form.job_title,
          company: form.company,
          country: form.country,
          member_type: form.member_type,
          bio: form.bio,
          linkedin_url: form.linkedin_url || null,
          website_url: form.website_url || null,
          slug,
          profile_complete: true,
        })
      }

      router.push('/join/confirm')
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputCls = 'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--emerald)] focus:ring-2 focus:ring-[var(--emerald)]/20 transition-all bg-white'
  const labelCls = 'block text-sm font-medium text-gray-700 mb-1.5'

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
      {/* Progress */}
      <div className="flex items-center gap-3 mb-8">
        {[1,2].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s ? 'bg-[var(--emerald)] text-white' : 'bg-gray-100 text-gray-400'}`}>{s}</div>
            <span className={`text-sm ${step >= s ? 'text-[var(--deep)] font-medium' : 'text-gray-400'}`}>
              {s === 1 ? 'Account details' : 'Professional info'}
            </span>
            {s < 2 && <div className={`w-12 h-0.5 ${step > s ? 'bg-[var(--emerald)]' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {step === 1 && (
          <>
            <div>
              <label className={labelCls}>Full name *</label>
              <input className={inputCls} required value={form.full_name} onChange={e => set('full_name', e.target.value)} placeholder="Your full name" />
            </div>
            <div>
              <label className={labelCls}>Work email *</label>
              <input className={inputCls} type="email" required value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@company.com" />
            </div>
            <div>
              <label className={labelCls}>Password *</label>
              <input className={inputCls} type="password" required minLength={8} value={form.password} onChange={e => set('password', e.target.value)} placeholder="Min. 8 characters" />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Job title *</label>
                <input className={inputCls} required value={form.job_title} onChange={e => set('job_title', e.target.value)} placeholder="e.g. Event Manager" />
              </div>
              <div>
                <label className={labelCls}>Company *</label>
                <input className={inputCls} required value={form.company} onChange={e => set('company', e.target.value)} placeholder="Your company" />
              </div>
            </div>
            <div>
              <label className={labelCls}>I am a... *</label>
              <select className={inputCls} required value={form.member_type} onChange={e => set('member_type', e.target.value)}>
                <option value="">Select your role</option>
                {MEMBER_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Country *</label>
              <select className={inputCls} required value={form.country} onChange={e => set('country', e.target.value)}>
                {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Short bio <span className="text-gray-400 font-normal">(optional)</span></label>
              <textarea className={inputCls} rows={3} value={form.bio} onChange={e => set('bio', e.target.value)} placeholder="A few lines about your work in events..." />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>LinkedIn <span className="text-gray-400 font-normal">(optional)</span></label>
                <input className={inputCls} value={form.linkedin_url} onChange={e => set('linkedin_url', e.target.value)} placeholder="linkedin.com/in/..." />
              </div>
              <div>
                <label className={labelCls}>Website <span className="text-gray-400 font-normal">(optional)</span></label>
                <input className={inputCls} value={form.website_url} onChange={e => set('website_url', e.target.value)} placeholder="yoursite.com" />
              </div>
            </div>
          </>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">{error}</div>
        )}

        <div className="flex items-center justify-between pt-2">
          {step === 2 && (
            <button type="button" onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-gray-700">← Back</button>
          )}
          <button
            type="submit"
            disabled={loading}
            className="ml-auto bg-[var(--emerald)] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[var(--deep)] transition-colors disabled:opacity-60">
            {loading ? 'Creating account…' : step === 1 ? 'Continue →' : 'Create free account'}
          </button>
        </div>

        {step === 1 && (
          <p className="text-center text-xs text-gray-400 pt-2">
            Already a member? <Link href="/login" className="text-[var(--emerald)] hover:underline">Sign in</Link>
          </p>
        )}
      </form>
    </div>
  )
}
