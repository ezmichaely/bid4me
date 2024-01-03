import { nextui } from "@nextui-org/react";
import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
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
        kanit: ['var(--font-kanit)'],
      },
      backgroundImage: {
        logoBg: 'url(/brand/LogoBg.svg)',
        auth: 'linear-gradient(180deg, #4B48E5 0%, rgba(157, 103, 234, 0.00) 94.76%)',
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
          100: '#F6F6F6',
          200: '#F3F8FF',
          300: '#E7EFFA',
          400: '#D9D9D9'
        }
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    prefix: "nextui",
    addCommonColors: true,
    defaultTheme: "light",
    defaultExtendTheme: "light",
    themes: {
      mamba: {
        colors: {
          primary: {
            DEFAULT: '#260B8E',
            foreground: '#ffffff'
          },
          secondary: {
            DEFAULT: '#FFC614',
            foreground: '#0F172A'
          },
        },
      },
      light: {
        colors: {
          primary: {
            DEFAULT: '#260B8E',
            foreground: '#ffffff'
          },
          secondary: {
            DEFAULT: '#FFC614',
            foreground: '#0F172A'
          },
        },
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: '#260B8E',
            foreground: '#ffffff'
          },
          secondary: {
            DEFAULT: '#FFC614',
            foreground: '#0F172A'
          },
        },
      },
    }
  })],
}
export default config
