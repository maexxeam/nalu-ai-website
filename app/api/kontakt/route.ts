import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const FROM = 'Nalu AI <hello@nalu-ai.com>'
const TO = process.env.DEMO_NOTIFY_EMAIL ?? 'max@nalu-ai.com'

interface KontaktRequest {
  name?: string
  email?: string
  message?: string
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
  let body: KontaktRequest
  try {
    body = (await req.json()) as KontaktRequest
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, email, message } = body

  if (!email || typeof email !== 'string' || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    console.warn('[kontakt] RESEND_API_KEY missing — payload received but not sent', { email })
    return NextResponse.json({ error: 'Mail-Service nicht konfiguriert' }, { status: 503 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const safe = {
    name: name ? escapeHtml(String(name)) : '—',
    email: escapeHtml(String(email)),
    message: message ? escapeHtml(String(message)) : '—',
  }

  const notifyHtml = `
    <h2 style="font-family: -apple-system, sans-serif;">Neue Kontaktanfrage</h2>
    <table style="font-family: -apple-system, sans-serif; font-size: 14px; line-height: 1.6;">
      <tr><td><strong>Name</strong></td><td>${safe.name}</td></tr>
      <tr><td><strong>E-Mail</strong></td><td>${safe.email}</td></tr>
    </table>
    <p style="font-family: -apple-system, sans-serif; font-size: 14px; line-height: 1.6;">
      <strong>Nachricht:</strong><br>${safe.message.replaceAll('\n', '<br>')}
    </p>
  `

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: String(email),
      subject: `Kontaktanfrage von ${safe.name} (${safe.email})`,
      html: notifyHtml,
    })
  } catch (err) {
    console.error('[kontakt] resend error', err)
    return NextResponse.json({ error: 'Mail-Versand fehlgeschlagen' }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
