'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

const NAV = [
  { label: 'Dashboard',   href: '/dashboard',           icon: '🏠', tier: 'free' },
  { label: 'My Profile',  href: '/dashboard/profile',   icon: '👤', tier: 'free' },
  { label: 'Directory',   href: '/directory',           icon: '📋', tier: 'pro' },
  { label: 'Meetings',    href: '/meetings',            icon: '🤝', tier: 'pro' },
  { label: 'My Portfolio',href: '/portfolio/edit',      icon: '💼', tier: 'pro' },
  { label: 'Events',      href: '/events',              icon: '🗓️', tier: 'free' },
  { label: 'Case Studies',href: '/case-studies',        icon: '📖', tier: 'free' },
]

export default function DashboardNav() {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  async function signOut() {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[var(--deep)] flex flex-col z-40">
      <div className="p-5 border-b border-white/10">
        <Link href="/">
          <Image src="/images/eta-logo.png" alt="ETAC" width={140} height={42} className="h-10 w-auto object-contain brightness-0 invert" />
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {NAV.map(n => (
          <Link key={n.href} href={n.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${pathname === n.href || pathname.startsWith(n.href + '/') ? 'bg-white/15 text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}>
            <span>{n.icon}</span>
            <span>{n.label}</span>
            {n.tier === 'pro' && <span className="ml-auto text-[10px] bg-[var(--emerald)] text-white px-1.5 py-0.5 rounded-full">PRO</span>}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-white/10">
        <button onClick={signOut} className="w-full text-left text-sm text-gray-400 hover:text-white px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
          Sign out
        </button>
      </div>
    </aside>
  )
}
