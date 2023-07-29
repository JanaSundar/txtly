import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional'
})

export const metadata: Metadata = {
  title: 'Txtly',
  description: 'A messenger style website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className='overflow-x-clip'>{children}</body>
    </html>
  )
}
