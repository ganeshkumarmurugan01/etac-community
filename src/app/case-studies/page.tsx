import { createClient } from '@/lib/supabase/server'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = { title: 'Case Studies | ETAC' }

export default async function CaseStudiesPage() {
  const supabase = await createClient()
  const { data: studies } = await supabase
    .from('case_studies')
    .select('*, profiles(full_name,job_title,company)')
    .eq('published', true)
    .order('created_at', { ascending: false })

  const CATEGORIES: Record<string, string> = {
    event_tech: 'Event Tech', registration: 'Registration', av_production: 'AV Production',
    matchmaking: 'Matchmaking', venue_tech: 'Venue Tech', event_marketing: 'Event Marketing',
    ai_automation: 'AI & Automation', sustainability: 'Sustainability', other: 'Other',
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="bg-[var(--deep)] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-semibold tracking-widest text-[var(--mint)] uppercase mb-4">Case Studies</p>
            <h1 className="text-5xl font-bold text-white">Real Stories from Asia's Event Tech Community</h1>
            <p className="text-xl text-gray-300 mt-4 max-w-2xl">How event professionals across Asia are using technology to transform their operations, engage audiences, and drive results.</p>
          </div>
        </div>

        <section className="py-16 bg-[var(--light)]">
          <div className="max-w-6xl mx-auto px-6">
            {(!studies || studies.length === 0) ? (
              <div className="text-center py-20">
                <p className="text-5xl mb-4">📖</p>
                <h3 className="text-xl font-bold text-[var(--deep)] mb-2">Case studies coming soon</h3>
                <p className="text-gray-500 mb-6">We're collecting real stories from Asia's event tech community.</p>
                <Link href="/join" className="inline-block bg-[var(--emerald)] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[var(--deep)] transition-colors">
                  Share your story
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {studies.map((s: any) => (
                  <Link key={s.id} href={`/case-studies/${s.slug}`} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
                    <div className="h-48 bg-gradient-to-br from-[var(--deep)] to-[var(--emerald)] relative">
                      {s.cover_image_url
                        ? <img src={s.cover_image_url} alt={s.title} className="w-full h-full object-cover" />
                        : <div className="w-full h-full flex items-center justify-center"><span className="text-white/30 text-6xl">📖</span></div>
                      }
                      {s.category && (
                        <span className="absolute top-4 left-4 text-xs font-semibold text-white bg-black/30 backdrop-blur px-3 py-1 rounded-full">
                          {CATEGORIES[s.category]}
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-[var(--deep)] text-lg mb-2 group-hover:text-[var(--emerald)] transition-colors line-clamp-2">{s.title}</h3>
                      {s.summary && <p className="text-sm text-gray-500 line-clamp-3 mb-4">{s.summary}</p>}
                      {s.profiles && (
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[var(--emerald)]/20 flex items-center justify-center">
                            <span className="text-xs font-bold text-[var(--deep)]">{s.profiles.full_name?.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-700">{s.profiles.full_name}</p>
                            <p className="text-xs text-gray-400">{s.profiles.company}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
