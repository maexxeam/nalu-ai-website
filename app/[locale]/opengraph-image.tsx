import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Nalu AI – Demand Intelligence für den Mittelstand'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0F172A',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <svg
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: '320px' }}
        >
          <path
            d="M0,100 C200,160 400,40 600,100 C800,160 1000,40 1200,100 L1200,200 L0,200 Z"
            fill="#1E7AC2"
            fillOpacity="0.18"
          />
          <path
            d="M0,140 C200,80 400,180 600,140 C800,80 1000,180 1200,140 L1200,200 L0,200 Z"
            fill="#1E7AC2"
            fillOpacity="0.10"
          />
        </svg>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
            <path
              d="M2 21 Q 6.5 11.5, 11 16 T 19 14 L 27 6"
              stroke="#FFFFFF"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="27" cy="6" r="2.6" fill="#FF6B4A" />
          </svg>
          <div style={{ display: 'flex', fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em' }}>
            <span style={{ color: '#FFFFFF' }}>Nalu</span>
            <span style={{ color: '#FF6B4A', marginLeft: 8 }}>AI</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignSelf: 'flex-start',
            marginTop: 80,
            padding: '8px 16px',
            border: '1px solid rgba(255,107,74,0.4)',
            background: 'rgba(255,107,74,0.10)',
            borderRadius: 9999,
            color: '#FF6B4A',
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          ~ Demand Intelligence Platform
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 28,
            color: '#FFFFFF',
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            maxWidth: 980,
          }}
        >
          Ride the wave of demand.
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 28,
            color: 'rgba(255,255,255,0.72)',
            fontSize: 26,
            lineHeight: 1.4,
            maxWidth: 880,
          }}
        >
          ML-Forecasting, ABC/XYZ &amp; SCM — on-premise, deploybar in 4 Wochen.
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 'auto',
            color: 'rgba(255,255,255,0.42)',
            fontSize: 18,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          nalu-ai.com
        </div>
      </div>
    ),
    { ...size },
  )
}
