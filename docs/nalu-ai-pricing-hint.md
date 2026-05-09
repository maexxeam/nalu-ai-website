# Nalu AI Website – Pricing Hint
> Claude Code Implementation Guide
> Add investment hint to landing page and /about

---

## What to add

A single honest line about investment — visible but not dominant.
No pricing table. No tier comparison. Just a signal.

---

## Landing Page (app/page.tsx)

In the final CTA section ("Sprechen Sie mit mir"),
add ONE line below the email address:

```tsx
// After max@nalu-ai.com, add:

<p className="text-sm text-slate-500 mt-4 text-center">
  Typische Investition: ab 50.000 € einmalig, 
  ab 5.000 €/Monat — immer individuell kalkuliert.
</p>
```

Style:
- font-size: 13px
- color: #94A3B8 (muted gray)
- text-align: center
- No bold, no coral — subtle, not prominent

---

## /about page

Same line, same style, in the "Mehr erfahren" 
contact section at the bottom.

---

## /leistungen page

Same line, same style, in the contact section.

---

## What NOT to do

- No pricing table
- No tier names (Starter/Growth/Scale)
- No "ab X€/Monat" in hero or feature sections
- No pricing page
- This one line is the only pricing signal on the entire website
