

import { Inter, Kanit } from 'next/font/google'
import { inter, kanit } from '@/assets/fonts';
import { Providers, Header } from "@/components";
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
    <html lang="en" className={htmlClass}>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
