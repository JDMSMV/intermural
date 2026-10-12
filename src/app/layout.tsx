import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Inter Mural — Premium School Spirit Wear',
  description: 'Wear the School. Own the Story. Premium high school spirit wear and custom uniforms built for champions.',
  keywords: 'school spirit wear, custom uniforms, varsity jackets, high school apparel, athletic luxury',
  openGraph: {
    title: 'Inter Mural — Premium School Spirit Wear',
    description: 'Wear the School. Own the Story.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter bg-im-black text-im-text-light antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
