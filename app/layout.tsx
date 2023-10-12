import './globals.css'
import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
//import { Red_Hat_Display } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })
const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Code7',
  description: 'xxx',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
