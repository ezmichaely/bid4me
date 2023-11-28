import { inter, kanit } from '@/assets/fonts';
import { Header } from "@/components";
import { NextThemeProvider } from '@/components/providers/NextThemeProvider';
import '@/styles/globals.css'



export default function UserLayout({ children }:
  { children: React.ReactNode }) {
  const htmlClass = `light ${inter.variable} ${kanit.variable}`
  // const htmlClass = `light ${interOnline.className} ${kanitOnline.className}`

  return (
    <html lang="en" className={htmlClass}
      suppressHydrationWarning>
      <body>
        <NextThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={false}
        >
          <Header />
          {children}
        </NextThemeProvider>
      </body>
    </html>
  )
}
