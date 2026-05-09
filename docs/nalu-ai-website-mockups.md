# Nalu AI Website – Zwei neue Mockups
> Claude Code Implementation Guide
> Add two product mockups to landing page and /leistungen

---

## Overview

Currently the website has two mockups:
1. Dashboard (KPIs + Chart + ABC/XYZ) — landing page
2. Reorder Alerts (SCM) — landing page

Add two more:
3. Forecasting Detail — landing page, after Feature cards
4. Kunden-Intelligenz — /leistungen, in MeatMind section

---

## Mockup 3: Forecasting Detail

**Location:** app/page.tsx — new section after the 6 Feature cards
**Label:** "LIVE-BLICK"
**Headline:** "Artikel-Forecast mit Konfidenz."
**Layout:** Text left, mockup right (reverse of Reorder Alerts)

### Text (left side)

```
LightGBM und Temporal Fusion Transformer
trainiert auf den realen Daten des Kunden —
nicht auf generischen Templates.

Jeder Forecast zeigt Konfidenzintervalle (P10/P50/P90),
SHAP-Erklärungen und den empfohlenen Bestellzeitpunkt.
```

### Mockup (right side) — browser frame style

```
•• •  app.naluai.com/forecasting
─────────────────────────────────────────────

ARTIKEL
Nordpils Premium 20×0,5L
BIE-001 · 8-Wochen Forecast

[Modell · LightGBM]    [MAPE · 8.4 %]    [Accuracy · 91.6 %]

Chart — dual line chart:
  X-axis: KW 38 ... HEUTE ... KW 46 (8 weeks ahead)
  Solid navy line: Historie (past weeks)
  Dashed coral line: Forecast (future weeks)  
  Light blue shaded area: 90% Konfidenzband
  Vertical dashed line at "HEUTE" label

Three metric pills below chart:
  P10 (pessimistisch)    P50 (erwartet)    P90 (optimistisch)
       312                    387                 463
       Einheiten/Woche

Bottom row:
  ⚡ Empfohlene Bestellung: KW 41  ·  Menge: ~1.550 Einheiten
  (coral left border, light background)

Footer:
  Letztes Training: heute 04:12 Uhr  ·  
  Nächstes Retraining: Montag 04:00 Uhr
```

### Implementation notes

```tsx
// Use Recharts ComposedChart
// History bars: fill="#0A4F7F" (navy)
// Forecast bars: fill="#FF6B4A" (coral) with opacity 0.8
// Confidence band: Area with fill="#0A4F7F" opacity 0.08
// "HEUTE" reference line: stroke="#94A3B8" strokeDasharray="4 4"
// 
// Browser frame: same style as existing mockups
// - Gray top bar with 3 dots (red/yellow/green)
// - URL bar showing app.naluai.com/forecasting
// - White content area with subtle border-radius
// - Drop shadow: 0 20px 60px rgba(0,0,0,0.08)
```

---

## Mockup 4: Kunden-Intelligenz

**Location:** app/leistungen/page.tsx — in the MeatMind section
**Position:** Right side, next to MeatMind description text
**Style:** Same browser frame as other mockups

### Mockup content — browser frame

```
•• •  app.naluai.com/kunden
─────────────────────────────────────────────

KUNDEN-INTELLIGENZ
Wer kauft wann — und was.

[Kaufbereit (30T): 143]  [Erw. Umsatz: €184k]  [Churn-Risiko: 12]

Table:
KUNDE                  KAUFWAHRSCH.    ERW. TERMIN    STATUS
─────────────────────────────────────────────────────────────
REWE Group             [████████░] 92%    KW 20      [Kaufbereit]
KD-001 · Champion

Edeka Südbayern        [██████░░░] 78%    KW 21      [Kaufbereit]  
KD-002 · Loyal

Gastro Service Nord    [███░░░░░░] 34%    —          [Churn-Risiko]
KD-047 · At Risk

Metzgerei Huber        [█████░░░░] 61%    KW 22      [Bald kont.]
KD-089 · Loyal

Footer:
770 Kunden · aktualisiert täglich 06:00 · Modell: Survival Analysis
```

### Color coding

```
Progress bars:
  > 70%:  #0A4F7F (navy)
  40-70%: #F59E0B (amber)
  < 40%:  #E24B4A (red)

Status badges:
  Kaufbereit:     green background, green text
  Bald kontakt.:  amber background, amber text  
  Churn-Risiko:   red background, red text

KPI numbers above table:
  143:   navy (#0A4F7F)
  €184k: navy
  12:    red (#E24B4A)
```

### Layout on /leistungen

```
MeatMind section — two column layout:

Left (50%):
  REFERENZPROJEKT label
  "MeatMind" headline
  Description text
  Coral number pills (770, 900+, 450.000+, 6 Wochen)
  Tech stack line
  Quote card (navy background)

Right (50%):
  Kunden-Intelligenz mockup (browser frame)
  Positioned to overlap slightly with the navy section above
  for visual continuity
```

---

## Section Structure After Changes

### Landing page (/)

```
Hero (navy + waves)
Das Produkt — Dashboard mockup        ← existing
Ansatz (Ihre Daten / Ihr ERP / Ihr Tempo)
Referenz (navy — Frey quote + numbers)
Alles in einem System — 6 Feature cards
Forecasting Detail mockup             ← NEW (Mockup 3)
Reorder Alerts mockup                 ← existing
Kontakt CTA (navy + waves)
```

### /leistungen

```
Header — white (Nalu AI. Und mehr.)
Hauptprodukt — navy (Nalu AI + numbers)
MeatMind — white
  Left: description + quote
  Right: Kunden-Intelligenz mockup    ← NEW (Mockup 4)
Was sonst entsteht — light gray
Kontakt CTA — navy
```

---

## Forecasting Mockup — Section Text

```tsx
// Left side text for Mockup 3 section on landing page:

sectionLabel: "LIVE-BLICK"

headline: "Artikel-Forecast mit Konfidenz."

body: `LightGBM und Temporal Fusion Transformer —
trainiert auf den realen Artikeldaten des Kunden, 
nicht auf generischen Templates.

Jeder Forecast zeigt P10/P50/P90 Konfidenzintervalle,
SHAP-Erklärungen und den empfohlenen Bestellzeitpunkt —
automatisch berechnet aus Forecast und Lead Time.`

// No CTA button in this section
// Let the content speak
```

---

## Implementation Order

```
1. Build Mockup 3 (Forecasting Detail):
   - Create component: components/mockups/ForecastingMockup.tsx
   - Use Recharts ComposedChart
   - Add to app/page.tsx after Feature cards section

2. Build Mockup 4 (Kunden-Intelligenz):
   - Create component: components/mockups/KundenMockup.tsx
   - Static HTML table with progress bars (no Recharts needed)
   - Add to app/leistungen/page.tsx in MeatMind section
   - Two-column layout: text left, mockup right

3. Ensure both mockups:
   - Use same browser frame style as existing mockups
   - Have scroll-in animation (fade-up, same as other sections)
   - Are responsive (stack vertically on mobile)
   - Match brand colors exactly
```

---

## Definition of Done

- [ ] Forecasting mockup shows: article name, chart with
      history/forecast/confidence, P10/P50/P90 pills,
      recommended order alert
- [ ] Kunden mockup shows: 3 KPI cards, table with 4 customers,
      progress bars, status badges, footer line
- [ ] Both use browser frame (dots + URL bar)
- [ ] Both have scroll-in animation
- [ ] Landing page: Forecasting mockup between Feature cards
      and Reorder Alerts section
- [ ] /leistungen: Kunden mockup in MeatMind section, right side
- [ ] Mobile: mockups stack below text on small screens
- [ ] Colors match brand exactly (navy #0A4F7F, coral #FF6B4A)
```
