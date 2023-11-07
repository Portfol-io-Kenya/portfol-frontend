import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import clsx from 'clsx'
import QueryProvider from '@/rest-api/query-provider'

// Assets
import '@/assets/globals.css'
import '@/assets/iconly/css/style.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfol.io',
  description: 'Find online jobs targeted for Africans',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx('flex min-h-screen flex-col justify-between', montserrat.className)}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
