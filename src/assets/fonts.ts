import { Inter, Kanit } from 'next/font/google'


export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  style: ['normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const kanit = Kanit({
  subsets: ['latin'],
  variable: '--font-kanit',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})