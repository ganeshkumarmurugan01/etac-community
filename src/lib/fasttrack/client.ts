/**
 * Fasttrack API client
 * Handles membership registration and payment processing.
 * Swap the endpoint paths once you have the Fasttrack API docs.
 */

const BASE_URL = process.env.FASTTRACK_API_URL ?? ''
const API_KEY  = process.env.FASTTRACK_API_KEY ?? ''

interface FasttrackRegistrationPayload {
  email: string
  full_name: string
  company?: string
  job_title?: string
  country?: string
  tier: 'free' | 'professional' | 'corporate'
  metadata?: Record<string, string>
}

interface FasttrackRegistrationResponse {
  ref: string            // Fasttrack registration reference
  payment_url?: string   // Redirect URL for paid tiers
  status: 'pending' | 'complete'
}

export async function registerMember(
  payload: FasttrackRegistrationPayload
): Promise<FasttrackRegistrationResponse> {
  const res = await fetch(`${BASE_URL}/registrations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': API_KEY,
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const error = await res.text()
    throw new Error(`Fasttrack API error ${res.status}: ${error}`)
  }

  return res.json() as Promise<FasttrackRegistrationResponse>
}

export async function getRegistrationStatus(ref: string): Promise<{ status: string }> {
  const res = await fetch(`${BASE_URL}/registrations/${ref}`, {
    headers: { 'X-Api-Key': API_KEY },
  })

  if (!res.ok) throw new Error(`Fasttrack API error ${res.status}`)
  return res.json()
}
