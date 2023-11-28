import { Providers, ThemeSwitcher } from '@/components'
import { inter, kanit } from '@/assets/fonts'
import '@/styles/globals.css'



export default function RootLayout({ children }:
  { children: React.ReactNode }) {
  const htmlClass = `light ${inter.variable} ${kanit.variable}`
  // const htmlClass = `light ${interOnline.className} ${kanitOnline.className}`

  return (
    <html lang="en" className={htmlClass} suppressHydrationWarning>
      <body>
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  )
}
