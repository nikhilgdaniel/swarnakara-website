import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SWARNAKARA | Finance & Gold Loan - Kollam, Kerala',
  description: 'Trusted gold loan services in Kollam, Kerala. Instant approvals, lowest interest rates, and transparent process. SWARNAKARA - Your trusted gold loan partner.',
  keywords: 'gold loan, finance, Kollam, Kerala, Swarnakara, gold loan Kollam, instant loan, pledge gold',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0e1a] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
