import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#EAF8F4', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ background: 'white', borderRadius: '1rem', padding: '2.5rem', width: '100%', maxWidth: '420px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        <h1 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: '700', color: '#004D40', marginBottom: '0.5rem' }}>Welcome back</h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>Sign in to your ETAC member account</p>
        <LoginForm />
      </div>
    </div>
  )
}
