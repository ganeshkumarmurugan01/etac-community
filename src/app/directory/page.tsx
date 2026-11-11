import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = { title: 'Member Directory | ETAC' }

export default async function DirectoryPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('membership_tier').eq('id', user.id).single()
  const isPro = profile?.membership_tier === 'pro' || profile?.membership_tier === 'partner'

  if (!isPro) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[var(--light)] flex items-center justify-center py-20">
          <div className="max-w-lg mx-auto px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-[var(--emerald)]/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">📋</span>
            </div>
            <h1 className="text-3xl font-bold text-[var(--deep)] mb-4">Pro Members Only</h1>
            <p className="text-gray-600 mb-8">The ETAC member directory is available to Pro and Technology Partner members. Upgrade to access 500+ event professionals across Asia.</p>
            <Link href="/membership" className="inline-block bg-[var(--emerald)] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[var(--deep)] transition-colors">
              Upgrade to Pro
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const { data: members } = await supabase
    .from('profiles')
    .select('id,full_name,job_title,company,country,member_type,avatar_url,slug,is_verified')
    .eq('is_active', true)
    .eq('show_in_directory', true)
    .order('created_at', { ascending: false })
    .limit(100)

  const LABELS: Record<string, string> = {
    event_planner: 'Event Planner', corporate_events: 'Corporate Events',
    pco: 'PCO', venue: 'Venue', exhibition_organiser: 'Exhibition Organiser',
    association: 'Association', government: 'Government',
    agency: 'Agency', event_tech_provider: 'Event Tech', other: 'Other',
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--light)]">
        <div className="bg-[var(--deep)] py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-white">Member Directory</h1>
            <p className="text-gray-300 mt-2">{members?.length || 0} event professionals across Asia</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {members?.map(m => (
              <div key={m.id} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--emerald)]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--deep)] font-bold">{m.full_name?.charAt(0) || '?'}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-[var(--deep)] truncate">{m.full_name}</p>
                      {m.is_verified && <span title="Verified" className="text-[var(--emerald)] text-sm">✓</span>}
                    </div>
                    <p className="text-sm text-gray-500 truncate">{m.job_title}</p>
                    <p className="text-xs text-gray-400 truncate">{m.company} · {m.country}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs bg-[var(--light)] text-[var(--deep)] px-2.5 py-1 rounded-full font-medium">
                    {LABELS[m.member_type] || m.member_type}
                  </span>
                  {m.slug && (
                    <Link href={`/portfolio/${m.slug}`} className="text-xs text-[var(--emerald)] font-medium hover:underline">
                      View profile →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
