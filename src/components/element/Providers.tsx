'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem={false}>
        {children}
      </ThemeProvider >
    </NextUIProvider>
  )
}
