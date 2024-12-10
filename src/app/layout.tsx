import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import clsx from 'clsx'
import { QueryProvider } from '@/rest-api/query-provider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Assets
import '@/assets/globals.css'
import '@/assets/iconly/css/style.css'
import { NextAuthProvider } from './Provider';

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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <NextAuthProvider>
          <QueryProvider>
            {children}
            <ToastContainer />
          </QueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
