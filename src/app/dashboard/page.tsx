import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const isPro = profile?.membership_tier === 'pro' || profile?.membership_tier === 'partner'

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--deep)]">
          Welcome back, {profile?.full_name?.split(' ')[0] || 'member'} 👋
        </h1>
        <p className="text-gray-500 mt-1">
          {profile?.membership_tier === 'free' ? 'Free member' : profile?.membership_tier === 'pro' ? 'Pro member' : 'Technology partner'} · {profile?.company}
        </p>
      </div>

      {/* Upgrade banner for free users */}
      {!isPro && (
        <div className="bg-gradient-to-r from-[var(--deep)] to-[var(--emerald)] rounded-2xl p-6 mb-8 flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-lg">Upgrade to Pro</p>
            <p className="text-gray-200 text-sm mt-1">Access the full directory, schedule meetings, and build your portfolio page.</p>
          </div>
          <Link href="/membership" className="bg-white text-[var(--deep)] font-semibold px-6 py-2.5 rounded-xl hover:bg-[var(--mint)] transition-colors whitespace-nowrap ml-4">
            See plans →
          </Link>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Profile views',  value: '—',  note: 'Complete profile to unlock' },
          { label: 'Meetings',       value: isPro ? '0' : '—', note: isPro ? 'No meetings yet' : 'Pro feature' },
          { label: 'Connections',    value: '0',  note: 'Build your network' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6">
            <p className="text-3xl font-bold text-[var(--deep)]">{s.value}</p>
            <p className="text-sm font-medium text-gray-700 mt-1">{s.label}</p>
            <p className="text-xs text-gray-400 mt-0.5">{s.note}</p>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-bold text-[var(--deep)] mb-4">Complete your profile</h3>
          <p className="text-sm text-gray-500 mb-4">A complete profile gets you into the community directory and helps others find you.</p>
          <Link href="/dashboard/profile" className="text-sm font-semibold text-[var(--emerald)] hover:underline">Edit profile →</Link>
        </div>
        <div className={`rounded-2xl border p-6 ${isPro ? 'bg-white border-gray-100' : 'bg-gray-50 border-gray-100'}`}>
          <h3 className="font-bold text-[var(--deep)] mb-4">Browse the directory</h3>
          <p className="text-sm text-gray-500 mb-4">Discover event professionals across Asia and connect with peers in your sector.</p>
          {isPro
            ? <Link href="/directory" className="text-sm font-semibold text-[var(--emerald)] hover:underline">Open directory →</Link>
            : <span className="text-xs bg-[var(--emerald)] text-white px-3 py-1 rounded-full">Pro feature</span>
          }
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-bold text-[var(--deep)] mb-4">Upcoming events</h3>
          <p className="text-sm text-gray-500 mb-4">View and register for ETAC roundtables, webinars, and the annual ETA Conference.</p>
          <Link href="/events" className="text-sm font-semibold text-[var(--emerald)] hover:underline">See events →</Link>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-bold text-[var(--deep)] mb-4">Latest case studies</h3>
          <p className="text-sm text-gray-500 mb-4">Real stories from Asia's event tech community — implementations, innovations, and outcomes.</p>
          <Link href="/case-studies" className="text-sm font-semibold text-[var(--emerald)] hover:underline">Read now →</Link>
        </div>
      </div>
    </div>
  )
}
