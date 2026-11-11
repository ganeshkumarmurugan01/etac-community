'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const NAV = [
  { label: 'About',      href: '/about' },
  { label: 'Board',      href: '/board' },
  { label: 'Membership', href: '/membership' },
  { label: 'Insights',   href: '/insights' },
  { label: 'Events',     href: '/events' },
  { label: 'Partners',   href: '/partners' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 h-28 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/images/eta-logo.png" alt="Event Technology Asia" width={320} height={96} className="h-24 w-auto object-contain" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map(n => (
            <Link key={n.href} href={n.href}
              className={`text-sm font-medium transition-colors ${pathname === n.href ? 'text-[var(--emerald)]' : 'text-gray-600 hover:text-[var(--deep)]'}`}>
              {n.label}
            </Link>
          ))}
          <Link href="/join"
            className="ml-2 bg-[var(--emerald)] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[var(--deep)] transition-colors">
            Join Free
          </Link>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <span className="block w-6 h-0.5 bg-gray-700 mb-1.5" />
          <span className="block w-6 h-0.5 bg-gray-700 mb-1.5" />
          <span className="block w-6 h-0.5 bg-gray-700" />
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-28 left-0 right-0 bg-white border-b border-gray-100 px-6 py-4 space-y-3">
          {NAV.map(n => (
            <Link key={n.href} href={n.href} className="block text-sm font-medium text-gray-700 py-2" onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link href="/join" className="block text-center bg-[var(--emerald)] text-white text-sm font-semibold px-5 py-2.5 rounded-full mt-2" onClick={() => setOpen(false)}>
            Join Free
          </Link>
        </div>
      )}
    </header>
  )
}
