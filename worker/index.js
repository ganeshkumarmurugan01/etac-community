// Railway background worker
// Handles: welcome emails, payment webhooks, scheduled reminders
const express = require('express')
const app = express()
app.use(express.json())

app.get('/health', (_, res) => res.json({ status: 'ok', service: 'etac-worker' }))

// Webhook: new member registered (called from Supabase webhook)
app.post('/webhooks/new-member', async (req, res) => {
  const { record } = req.body
  console.log('New member registered:', record?.email)
  // TODO: send welcome email via Resend
  res.json({ ok: true })
})

// Webhook: membership upgraded
app.post('/webhooks/membership-upgraded', async (req, res) => {
  const { record } = req.body
  console.log('Membership upgraded:', record?.email, '→', record?.membership_tier)
  res.json({ ok: true })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`ETAC worker running on port ${PORT}`))
