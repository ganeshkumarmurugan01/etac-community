# ETA Community — Deployment Guide

## Stack
- **Frontend**: Next.js 14 (App Router) + Tailwind CSS
- **Database / Auth**: Supabase
- **Payments / Registration**: Fasttrack API
- **Hosting**: Vercel (region: `sin1` — Singapore)

---

## 1. Prerequisites

- Node.js ≥ 18
- A [Supabase](https://supabase.com) project
- A Fasttrack API account & key
- A [Vercel](https://vercel.com) account

---

## 2. Supabase Setup

1. Create a new Supabase project at https://app.supabase.com
2. Open **SQL Editor** and paste the contents of `src/lib/supabase/schema.sql`
3. Run the SQL — this creates all tables, RLS policies, and seed data
4. Copy your **Project URL** and **anon key** from Project Settings → API

---

## 3. Logo

Place your ETA logo PNG at:
```
public/images/eta-logo.png
```
The Navbar and Footer already reference this path.

---

## 4. Local Development

```bash
cp .env.example .env.local
# Fill in NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY,
# SUPABASE_SERVICE_ROLE_KEY, FASTTRACK_API_URL, FASTTRACK_API_KEY

npm install
npm run dev
# → http://localhost:3000
```

---

## 5. Vercel Deployment

### Option A — Vercel CLI (fastest)
```bash
npm i -g vercel
vercel login
vercel                  # follow prompts; select "Next.js" framework

# Add secrets
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add FASTTRACK_API_URL
vercel env add FASTTRACK_API_KEY

vercel --prod           # deploy to production
```

### Option B — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to https://vercel.com/new → Import your repo
3. Framework: **Next.js** (auto-detected)
4. Add the 5 environment variables in the Vercel dashboard
5. Click **Deploy**

### Custom Domain
In Vercel dashboard → Settings → Domains → add `community.eventtechasia.com`

---

## 6. Fasttrack API Integration

The Fasttrack client lives at `src/lib/fasttrack/client.ts`.

Once you have the Fasttrack API documentation:
1. Update the endpoint paths in `registerMember()` and `getRegistrationStatus()`
2. The `/api/join` route already calls `registerMember()` — for paid tiers it returns
   a `payment_url` and the frontend should redirect there
3. Set up a Fasttrack webhook pointing to `/api/fasttrack/webhook` (create that route)
   to receive payment confirmations and upgrade the member's tier in Supabase

---

## 7. Adding Real Content

All static seed data lives in the component files. To move to database-driven content:

| Section   | Component                  | Supabase table           |
|-----------|----------------------------|--------------------------|
| Board     | `Board.tsx`                | `board_members`          |
| Events    | `Events.tsx`               | `events`                 |
| Insights  | `Insights.tsx`             | `insights`               |
| Members   | `/api/join/route.ts`       | `membership_applications`|

Each component has a `// Static seed — replace with Supabase fetch` comment
marking where to swap in a `createClient().from(...).select()` call.

---

## 8. Project Structure

```
src/
  app/
    layout.tsx          ← root layout + metadata
    page.tsx            ← home page (composes all sections)
    globals.css         ← Tailwind + brand tokens
    api/
      join/route.ts     ← POST /api/join (Supabase + Fasttrack)
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      Hero.tsx
      About.tsx
      Board.tsx
      Membership.tsx
      JoinSteps.tsx
      Insights.tsx
      Events.tsx
      Partners.tsx
      CTA.tsx
  lib/
    utils.ts
    supabase/
      client.ts         ← browser client
      server.ts         ← server-side client (cookies)
      schema.sql        ← run once in Supabase SQL Editor
    fasttrack/
      client.ts         ← Fasttrack API wrapper
  types/
    index.ts            ← shared TypeScript interfaces
```
