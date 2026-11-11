import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Event Tech Asia Community',
  description:
    'Uniting everyone who shapes event technology across Asia — from AV and experiential vendors to operations, marketing, sales, and beyond.',
  openGraph: {
    title: 'Event Tech Asia Community',
    description: 'Shaping the future of event technology across Asia.',
    url: 'https://community.eventtechasia.com',
    siteName: 'Event Tech Asia Community',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
