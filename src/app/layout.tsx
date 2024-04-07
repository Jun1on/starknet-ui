import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { StarknetProvider } from '@/context/starknet-provider'
import './globals.css'
import { cn } from "@/lib/utils";
import Header from '@/components/layout/header';
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FYND',
  description: 'FYND your community',
  icons: {
    icon: '/logo.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("h-screen", inter.className)}>
        <StarknetProvider>
          <ThemeProvider attribute="class" defaultTheme="light"
            disableTransitionOnChange
          >
            <Header>
              {children}
            </Header>
          </ThemeProvider>
        </StarknetProvider>
      </body>
    </html >
  )
}
