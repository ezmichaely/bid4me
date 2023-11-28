import { Inter, Kanit } from 'next/font/google'
// import { inter, kanit } from '@/assets/fonts';
import {
  NextAuthProvider,
  Header
} from "@/components/indexa";
import { NextThemeProvider } from '@/components/providers/NextThemeProvider';
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  style: ['normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
const kanit = Kanit({
  subsets: ['latin'],
  variable: '--font-kanit',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export default function BuyerLayout({ children }: { children: React.ReactNode }) {
  const htmlClass = `light ${inter.variable} ${kanit.variable}`
  // const htmlClass = `light ${interOnline.className} ${kanitOnline.className}`

  return (
    <html lang="en" className={htmlClass} suppressHydrationWarning>
      <body>
        <NextThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={false}
        >
          <NextAuthProvider>
            <Header />
            {children}
          </NextAuthProvider>
        </NextThemeProvider>
      </body>
    </html>
  )
}
