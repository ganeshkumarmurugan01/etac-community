'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import DashboardNav from '@/components/dashboard/DashboardNav'

export default function DashboardPage() {
  const [profile, setProfile] = useState<{ full_name: string; membership_tier: string; email: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        window.location.href = '/login'
        return
      }
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single()
      setProfile(data)
      setLoading(false)
    }
    load()
  }, [])

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fafb' }}>
        <p style={{ color: '#6b7280' }}>Loading...</p>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9fafb' }}>
      <DashboardNav />
      <main style={{ marginLeft: '256px', flex: 1, padding: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#004D40', marginBottom: '0.5rem' }}>
          Welcome back, {profile?.full_name?.split(' ')[0]} 👋
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          {profile?.membership_tier === 'free' ? 'Free Member' : 'Pro Member'} · {profile?.email}
        </p>

        {profile?.membership_tier === 'free' && (
          <div style={{ background: 'linear-gradient(135deg, #004D40, #00A76F)', color: 'white', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '2rem' }}>
            <h2 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Upgrade to Pro</h2>
            <p style={{ opacity: 0.9, marginBottom: '1rem', fontSize: '0.9rem' }}>Get access to the member directory, meeting scheduler, and portfolio showcase.</p>
            <a href="/membership" style={{ background: 'white', color: '#004D40', padding: '0.5rem 1.25rem', borderRadius: '0.5rem', fontWeight: '600', textDecoration: 'none', fontSize: '0.875rem' }}>
              View Plans →
            </a>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[
            { label: 'Member Directory', desc: 'Connect with peers', href: '/directory', pro: true },
            { label: 'Case Studies', desc: 'Share your work', href: '/case-studies', pro: false },
            { label: 'Events', desc: 'Upcoming gatherings', href: '/events', pro: false },
            { label: 'Your Profile', desc: 'Edit your listing', href: '/dashboard/profile', pro: false },
          ].map(item => (
            <a key={item.label} href={item.href} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '0.75rem', padding: '1.25rem', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>{item.label} {item.pro && profile?.membership_tier === 'free' ? '🔒' : ''}</div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{item.desc}</div>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
