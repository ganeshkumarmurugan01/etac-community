'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function LoginForm() {
  const router = useRouter()
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ email: '', password: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword(form)
    if (error) { setError(error.message); setLoading(false); return }
    router.push('/dashboard')
    router.refresh()
  }

  const inputCls = 'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--emerald)] focus:ring-2 focus:ring-[var(--emerald)]/20 bg-white'

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
          <input className={inputCls} type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="you@company.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
          <input className={inputCls} type="password" required value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} />
        </div>
        {error && <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">{error}</div>}
        <button type="submit" disabled={loading} className="w-full bg-[var(--emerald)] text-white font-semibold py-3 rounded-xl hover:bg-[var(--deep)] transition-colors disabled:opacity-60">
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
      <div className="mt-6 text-center space-y-2">
        <Link href="/forgot-password" className="block text-sm text-gray-500 hover:text-[var(--emerald)]">Forgot password?</Link>
        <p className="text-sm text-gray-400">Not a member? <Link href="/join" className="text-[var(--emerald)] font-medium hover:underline">Join free</Link></p>
      </div>
    </div>
  )
}
