import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const FROM_NOTIFY = 'Nalu AI <hello@nalu-ai.com>'
const TO_NOTIFY = process.env.DEMO_NOTIFY_EMAIL ?? 'max@nalu-ai.com'

interface DemoRequest {
  name?: string
  email?: string
  company?: string
  position?: string
  articles?: string
  erp?: string
  challenge?: string
  consent?: boolean
}

const escapeHtml = (input: string): string =>
  input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
  let body: DemoRequest
  try {
    body = (await req.json()) as DemoRequest
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, email, company, position, articles, erp, challenge, consent } =
    body

  if (!name || !email || !company || !articles || !erp) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 },
    )
  }

  if (typeof email !== 'string' || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  if (!consent) {
    return NextResponse.json({ error: 'Consent required' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    console.warn('[demo] RESEND_API_KEY missing — payload received but not sent', {
      name,
      email,
      company,
    })
    return NextResponse.json(
      { error: 'Mail-Service nicht konfiguriert' },
      { status: 503 },
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const safe = {
    name: escapeHtml(String(name)),
    email: escapeHtml(String(email)),
    company: escapeHtml(String(company)),
    position: escapeHtml(String(position ?? '—')),
    articles: escapeHtml(String(articles)),
    erp: escapeHtml(String(erp)),
    challenge: challenge ? escapeHtml(String(challenge)) : '—',
  }

  const notifyHtml = `
    <h2 style="font-family: -apple-system, sans-serif;">Neue Demo-Anfrage</h2>
    <table style="font-family: -apple-system, sans-serif; font-size: 14px; line-height: 1.6;">
      <tr><td><strong>Name</strong></td><td>${safe.name}</td></tr>
      <tr><td><strong>E-Mail</strong></td><td>${safe.email}</td></tr>
      <tr><td><strong>Unternehmen</strong></td><td>${safe.company}</td></tr>
      <tr><td><strong>Position</strong></td><td>${safe.position}</td></tr>
      <tr><td><strong>Artikel</strong></td><td>${safe.articles}</td></tr>
      <tr><td><strong>ERP</strong></td><td>${safe.erp}</td></tr>
    </table>
    <p style="font-family: -apple-system, sans-serif; font-size: 14px; line-height: 1.6;">
      <strong>Herausforderung:</strong><br>${safe.challenge.replaceAll('\n', '<br>')}
    </p>
  `

  const confirmHtml = `
    <div style="font-family: -apple-system, sans-serif; max-width: 560px; color: #1E293B;">
      <h2 style="color: #0A4F7F;">Danke, ${safe.name}.</h2>
      <p>Wir haben Ihre Demo-Anfrage erhalten und melden uns innerhalb von
         24 Stunden bei Ihnen.</p>
      <p>In der Zwischenzeit: falls Sie Fragen haben, schreiben Sie einfach
         direkt zurück auf diese Mail.</p>
      <p style="margin-top: 32px;">Viele Grüße,<br>Max<br>Nalu AI</p>
      <hr style="border: 0; border-top: 1px solid #E2E8F0; margin: 32px 0;">
      <p style="font-size: 12px; color: #94A3B8;">
        Nalu AI · Demand Intelligence für den Mittelstand<br>
        nalu-ai.com
      </p>
    </div>
  `

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM_NOTIFY,
        to: TO_NOTIFY,
        replyTo: String(email),
        subject: `Neue Demo-Anfrage: ${String(company)}`,
        html: notifyHtml,
      }),
      resend.emails.send({
        from: FROM_NOTIFY,
        to: String(email),
        subject: 'Ihre Demo-Anfrage bei Nalu AI',
        html: confirmHtml,
      }),
    ])
  } catch (err) {
    console.error('[demo] resend error', err)
    return NextResponse.json(
      { error: 'Mail-Versand fehlgeschlagen' },
      { status: 502 },
    )
  }

  return NextResponse.json({ success: true })
}
