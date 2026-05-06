import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'

export const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-syne',
  display: 'swap',
})

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains',
  display: 'swap',
})
