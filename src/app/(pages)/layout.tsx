
import { Inter } from 'next/font/google'
import { inter } from '@/assets/fonts';
import '@/styles/globals.css'
import { Providers, Header } from "@/components";

const interOnline = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const htmlClass = `light ${inter.variable} `
  // ${interOnline.className}`


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
