import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '430px',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        logoBg: 'url(/brand/LogoBg.svg)',
      },
      colors: {
        primary: {
          100: '#4B48E5',
          200: '#2B23EC',
          300: '#2925CC',
          400: '#260B8E',
          500: '#02033B',
        },
        secondary: {
          100: '#F7C95F',
          200: '#FDCD45',
          300: '#FFC614',
          400: '#FDB235',
          500: '#B27822',
        },
        accent: '#0F172A',
        whites: {
          100: '#F3F8FF',
          200: '#E7EFFA',
        }
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    light: {
      colors: {
        primary: '#260B8E',
        secondary: '#FFC614',
        // accent: '#0F172A',
      },
    },
    dark: {
      colors: {
        primary: '#260B8E',
        secondary: '#FFC614',
        // accent: '#0F172A',
      },
    },
  })],
}
export default config
