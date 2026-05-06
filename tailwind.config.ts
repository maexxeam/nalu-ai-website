import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          DEFAULT: '#0A4F7F',
          light: '#1E7AC2',
        },
        coral: '#FF6B4A',
        seaglass: '#4ABFB0',
        horizon: '#F8FAFB',
        navy: '#0F172A',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['48px', { lineHeight: '52px', fontWeight: '700' }],
        'display-l': ['36px', { lineHeight: '40px', fontWeight: '700' }],
        'display-m': ['28px', { lineHeight: '32px', fontWeight: '600' }],
        heading: ['20px', { lineHeight: '28px', fontWeight: '600' }],
        subheading: ['16px', { lineHeight: '24px', fontWeight: '500' }],
        body: ['14px', { lineHeight: '22px', fontWeight: '400' }],
        small: ['12px', { lineHeight: '18px', fontWeight: '400' }],
        micro: ['11px', { lineHeight: '16px', fontWeight: '500' }],
      },
      maxWidth: {
        prose: '800px',
      },
      boxShadow: {
        'brand-sm': '0 1px 2px rgba(10, 79, 127, 0.06)',
        'brand-md': '0 4px 12px rgba(10, 79, 127, 0.10)',
        'brand-lg': '0 8px 24px rgba(10, 79, 127, 0.14)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
