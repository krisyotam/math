import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { CommandMenu } from '@/components/command-menu'

export const metadata: Metadata = {
  title: 'Minimalist Blog',
  description: 'A minimalist blog with matte black dark mode',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
          <CommandMenu />
        </ThemeProvider>
      </body>
    </html>
  )
}

