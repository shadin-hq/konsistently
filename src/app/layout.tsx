import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Konsistently - AI-First Technology Services',
  description: 'Creative, Marketing, Tech and AI services under one subscription. Plus Rewire: consulting and forward deployment engineering for SMEs.',
  openGraph: {
    title: 'Konsistently',
    description: 'AI-First Technology Services',
    url: 'https://konsistently.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
