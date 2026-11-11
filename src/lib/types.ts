export type MembershipTier = 'free' | 'pro' | 'partner'

export type MemberType =
  | 'event_planner' | 'corporate_events' | 'pco'
  | 'venue' | 'exhibition_organiser' | 'association'
  | 'government' | 'agency' | 'event_tech_provider' | 'other'

export interface Profile {
  id: string
  created_at: string
  full_name: string | null
  email: string | null
  avatar_url: string | null
  slug: string | null
  job_title: string | null
  company: string | null
  country: string | null
  city: string | null
  bio: string | null
  linkedin_url: string | null
  website_url: string | null
  member_type: MemberType
  membership_tier: MembershipTier
  membership_start: string | null
  membership_end: string | null
  is_active: boolean
  is_verified: boolean
  profile_complete: boolean
  show_in_directory: boolean
  onboarding_done: boolean
}

export interface CaseStudy {
  id: string
  created_at: string
  author_id: string
  slug: string
  title: string
  summary: string | null
  content: string | null
  cover_image_url: string | null
  category: string | null
  tags: string[] | null
  published: boolean
  featured: boolean
  views: number
  profiles?: Pick<Profile, 'full_name' | 'avatar_url' | 'job_title' | 'company'>
}

export interface ETACEvent {
  id: string
  title: string
  slug: string
  description: string | null
  event_type: string
  start_date: string
  end_date: string | null
  location: string | null
  is_virtual: boolean
  cover_image_url: string | null
  registration_url: string | null
  min_tier: MembershipTier
  published: boolean
  featured: boolean
}

export interface Meeting {
  id: string
  created_at: string
  requester_id: string
  recipient_id: string
  status: 'pending' | 'accepted' | 'declined' | 'cancelled'
  message: string | null
  proposed_date: string | null
  proposed_time: string | null
  meeting_type: 'virtual' | 'in_person'
  requester?: Pick<Profile, 'full_name' | 'avatar_url' | 'job_title' | 'company'>
  recipient?: Pick<Profile, 'full_name' | 'avatar_url' | 'job_title' | 'company'>
}
