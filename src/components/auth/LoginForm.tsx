'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    window.location.href = '/dashboard'
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#DC2626', padding: '0.75rem 1rem', borderRadius: '0.5rem', marginBottom: '1rem', fontSize: '0.875rem' }}>
          {error}
        </div>
      )}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.375rem' }}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          style={{ width: '100%', padding: '0.625rem 0.875rem', border: '1px solid #D1D5DB', borderRadius: '0.5rem', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }}
        />
      </div>
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.375rem' }}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: '0.625rem 0.875rem', border: '1px solid #D1D5DB', borderRadius: '0.5rem', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        style={{ width: '100%', padding: '0.75rem', background: loading ? '#6B7280' : '#00A76F', color: 'white', fontWeight: '600', fontSize: '1rem', border: 'none', borderRadius: '0.5rem', cursor: loading ? 'not-allowed' : 'pointer' }}
      >
        {loading ? 'Signing in...' : 'Sign in'}
      </button>
      <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.875rem', color: '#6B7280' }}>
        Not a member? <a href="/join" style={{ color: '#00A76F', fontWeight: '600' }}>Join free</a>
      </p>
    </form>
  )
}
