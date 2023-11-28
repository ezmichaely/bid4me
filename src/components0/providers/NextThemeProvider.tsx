"use client"

import { ThemeProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { useState, useEffect } from 'react'

export function NextThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }


  return (
    <ThemeProvider {...props}>
      {children}
    </ThemeProvider>
  )
}