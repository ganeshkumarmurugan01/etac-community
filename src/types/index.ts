export interface BoardMember {
  id: string
  name: string
  role: string
  company: string
  bio: string
  avatar_url?: string
  linkedin_url?: string
}

export interface Event {
  id: string
  title: string
  date: string
  time?: string
  location: string
  type: 'virtual' | 'in-person' | 'hybrid'
  status: 'upcoming' | 'past'
  category: string
  registration_url?: string
  summary?: string
}

export interface Insight {
  id: string
  title: string
  excerpt: string
  category: string
  author: string
  published_at: string
  read_time_minutes: number
  slug: string
  cover_url?: string
  featured: boolean
}

export interface MembershipTier {
  id: 'free' | 'professional' | 'corporate'
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}

export interface Member {
  id: string
  email: string
  full_name: string
  company?: string
  role?: string
  membership_tier: MembershipTier['id']
  created_at: string
}
