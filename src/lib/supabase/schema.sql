-- =====================================================
-- ETA Community — Supabase Schema
-- Run this in your Supabase SQL Editor
-- =====================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- =====================================================
-- MEMBERS
-- =====================================================
create table if not exists public.members (
  id            uuid primary key default uuid_generate_v4(),
  user_id       uuid references auth.users(id) on delete cascade,
  email         text not null unique,
  full_name     text not null,
  company       text,
  job_title     text,
  country       text,
  membership_tier text not null default 'free' check (membership_tier in ('free','professional','corporate')),
  linkedin_url  text,
  bio           text,
  avatar_url    text,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

alter table public.members enable row level security;

create policy "Members can view own profile"
  on public.members for select
  using (auth.uid() = user_id);

create policy "Members can update own profile"
  on public.members for update
  using (auth.uid() = user_id);

-- =====================================================
-- BOARD MEMBERS (public)
-- =====================================================
create table if not exists public.board_members (
  id            uuid primary key default uuid_generate_v4(),
  name          text not null,
  role          text not null,
  company       text not null,
  bio           text,
  avatar_url    text,
  linkedin_url  text,
  display_order int default 0,
  active        boolean default true,
  created_at    timestamptz default now()
);

alter table public.board_members enable row level security;

create policy "Board members are publicly readable"
  on public.board_members for select
  using (true);

-- =====================================================
-- EVENTS
-- =====================================================
create table if not exists public.events (
  id                uuid primary key default uuid_generate_v4(),
  title             text not null,
  slug              text unique,
  description       text,
  event_date        date not null,
  event_time        text,
  location          text not null,
  location_type     text not null default 'virtual' check (location_type in ('virtual','in-person','hybrid')),
  category          text,
  registration_url  text,
  cover_url         text,
  status            text not null default 'upcoming' check (status in ('upcoming','past','cancelled')),
  created_at        timestamptz default now()
);

alter table public.events enable row level security;

create policy "Events are publicly readable"
  on public.events for select
  using (true);

-- =====================================================
-- INSIGHTS (articles / content)
-- =====================================================
create table if not exists public.insights (
  id                uuid primary key default uuid_generate_v4(),
  title             text not null,
  slug              text unique,
  excerpt           text,
  body              text,
  category          text,
  author_name       text,
  author_avatar_url text,
  cover_url         text,
  read_time_minutes int default 5,
  featured          boolean default false,
  published_at      timestamptz default now(),
  created_at        timestamptz default now()
);

alter table public.insights enable row level security;

create policy "Insights are publicly readable"
  on public.insights for select
  using (true);

-- =====================================================
-- MEMBERSHIP APPLICATIONS (Fasttrack integration hook)
-- =====================================================
create table if not exists public.membership_applications (
  id              uuid primary key default uuid_generate_v4(),
  email           text not null,
  full_name       text not null,
  company         text,
  job_title       text,
  country         text,
  tier            text not null check (tier in ('free','professional','corporate')),
  fasttrack_ref   text,           -- Fasttrack payment / registration reference
  status          text default 'pending' check (status in ('pending','approved','rejected')),
  created_at      timestamptz default now()
);

alter table public.membership_applications enable row level security;

create policy "Anyone can submit an application"
  on public.membership_applications for insert
  with check (true);

-- =====================================================
-- SEED: Board members
-- =====================================================
insert into public.board_members (name, role, company, bio, display_order) values
  ('Priya Menon',      'Chairperson',        'EventsIO Asia',         'Event technology veteran with 15+ years across APAC markets, specialising in large-scale conference technology.', 1),
  ('Marcus Tan',       'Vice Chair',         'StageRight Productions','AV and staging specialist who has delivered 500+ events across Southeast and East Asia.', 2),
  ('Lena Park',        'Secretary General',  'Konvex Technologies',   'Software architect and event-tech entrepreneur, building registration and attendee-intelligence platforms since 2015.', 3),
  ('Raj Subramaniam',  'Treasurer',          'ExperienceWorks',       'Experiential marketing executive with deep expertise in immersive event design and vendor ecosystems across Asia.', 4),
  ('Yuki Tanaka',      'Board Member',       'NexEvent Japan',        'Pioneer in hybrid event formats and streaming infrastructure, representing the North Asian perspective.', 5),
  ('Amara Siddiqui',   'Board Member',       'FieldOps South Asia',   'Event operations leader driving operational technology adoption across South and Southeast Asia.', 6);
