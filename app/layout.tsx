import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Kathie Huang',
  description: 'Kathie Huang is a third-year college student at Duke University studying computer science. Currently interning at Warner Bros. Discovery.',
  keywords: ['Kathie Huang', 'Software Engineer', 'Portfolio', 'Duke University', 'Warner Bros. Discovery', 'Ford Motor Company', 'Computer Science Student'],
  twitter: {
    card: 'summary_large_image',
    title: 'Kathie Huang',
    description: 'Kathie Huang is a third-year college student at Duke University studying computer science. Currently interning at Warner Bros. Discovery.',
    creator: '@KathieHuang',
    images: {
      url: 'icon.jpeg',
      alt: 'Kathie Huang Photo'
    },
  },
  appleWebApp: {
    title: 'Kathie Huang',
    statusBarStyle: 'black-translucent',
  },
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <body className={inter.className}>
          {children}
          <Analytics />
        </body>
      </head>
    </html>
  )
}
