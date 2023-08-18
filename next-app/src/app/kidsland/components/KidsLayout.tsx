import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gradient-to-br from-green-400 via-blue-200 to-green-500 min-h-screen lg:w-[70%] mx-auto"}>{children}</body>
    </html>
  )
}