import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { registerMember } from '@/lib/fasttrack/client'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, full_name, company, job_title, country, tier = 'free' } = body

    if (!email || !full_name) {
      return NextResponse.json({ error: 'email and full_name are required' }, { status: 400 })
    }

    // 1. Register in Fasttrack (payment / registration flow)
    let fasttrack_ref: string | undefined
    try {
      const ft = await registerMember({ email, full_name, company, job_title, country, tier })
      fasttrack_ref = ft.ref

      // For paid tiers, redirect to Fasttrack payment page
      if (ft.payment_url) {
        return NextResponse.json({ redirect: ft.payment_url, ref: ft.ref })
      }
    } catch (ftErr) {
      // Non-fatal: still create the Supabase record but flag it
      console.error('Fasttrack error:', ftErr)
    }

    // 2. Persist application in Supabase
    const supabase = await createClient()
    const { error: dbErr } = await supabase
      .from('membership_applications')
      .insert({ email, full_name, company, job_title, country, tier, fasttrack_ref })

    if (dbErr) {
      console.error('Supabase error:', dbErr)
      return NextResponse.json({ error: 'Failed to save application' }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'Application received' })
  } catch (err) {
    console.error('Join API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
