import { Inter, Kanit } from 'next/font/google'
import { inter, kanit } from '@/assets/fonts';
import {
  NextAuthProvider,
  Header
} from "@/components";
import { NextThemeProvider } from '@/components/providers/NextThemeProvider';
import '@/styles/globals.css'

const interOnline = Inter({ subsets: ['latin'] })
const kanitOnline = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const htmlClass = `light ${inter.variable} ${kanit.variable}`
  // ${interOnline.className} ${kanitOnline.className}`


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
