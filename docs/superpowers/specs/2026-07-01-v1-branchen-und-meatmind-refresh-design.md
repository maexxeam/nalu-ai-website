# V1 Auffrischung: MeatMind-Refresh + Branchen (Bäckerei & Getränkemarkt)

**Datum:** 2026-07-01
**Branch:** `v1` (Deploy-Ziel: nalu-ai-v1.vercel.app)
**Status:** Freigegeben (Brainstorming abgeschlossen)

## 1. Ziel & Kontext

Die V1-Marketingseite (Nalu-AI-Firmenseite) inhaltlich auffrischen: den aktuellen MeatMind-Stand abbilden und die Plattform als **branchenagnostische, config-getriebene Demand-Intelligence-Lösung** positionieren, die neben der Fleischbranche jetzt auch **Bäckerei** und **Getränkemarkt** bedient — dargestellt als Info + produktnahe Mockups (Hybrid, hohe Fidelität).

Quellen der Fakten: `/Users/max/Python/meatmind` (produktive Referenz) und `/Users/max/Python/nalu-ai` (Gen2-Plattform mit `bakery_demo`- und `demo`/Beverage-Konfiguration).

## 2. Positionierung & Ehrlichkeits-Leitplanken

- Kernbotschaft: *bewährt in der Fleischbranche, einsatzbereit für Bäckerei & Getränkemarkt — ein Produkt, mehrere Branchen.*
- **MeatMind (Fleisch)** = produktive Referenz mit **echten Kennzahlen**.
- **Bäckerei & Getränkemarkt** = **einsatzbereite Branchen-Ausprägungen** (real konfiguriert, aber Demo-/Musterdaten). Formulierung: „einsatzbereit für …", nicht „live bei Kunde X".
- **Keine** erfundenen Kundennamen, **keine** erfundenen Ergebnis-Zahlen für Bäckerei/Getränke. „Müller Fleisch" bleibt anonymisiert (wie bereits im Repo umgesetzt).
- Erlaubte belegte Zahlen: Forecast-Genauigkeit **8,1 % WMAPE** (MeatMind), Horizonte (12 Wochen Fleisch / 14 Tage Bäckerei / 4 Wochen Getränke), Struktur-Zahlen der Demo-Konfigurationen (z. B. 94 SKUs Getränke, 3 Filialen / 16 Produkte Bäckerei) — als Ausstattungs-/Fähigkeitsmerkmale, nicht als Kundenergebnis.

## 3. Umfang

**In Scope**
- Auffrischung der MeatMind-Inhalte auf der **Leistungen-Seite** (Kennzahlen + Feature-Text).
- Neue **Branchen-Sektion** auf der Leistungen-Seite (3 Cards, Info + produktnahes Mockup).
- **Landing-Teaser** (Variante C): kompakte 3-Branchen-Leiste, verlinkt per Anchor auf die Branchen-Sektion.
- i18n in `messages/de.json` + `messages/en.json`.

**Out of Scope (YAGNI)**
- Keine neue Route/Seite (`/branchen` entfällt), keine Nav-Änderung.
- Keine Chart-Bibliothek, keine echten Screenshots, keine Kundenlogos.
- Kein Hero-Rewrite; nur minimale Anpassung der Referenz-/Header-Intros.
- Keine Änderungen an V2 (`main`).

## 4. Seitenänderungen

### 4.1 Leistungen-Seite (`app/[locale]/leistungen/page.tsx`)
- **Sektion 2 (Hauptprodukt, navy):** 4 Kennzahlen aktualisieren →
  1. **8,1 % WMAPE** — Forecast-Genauigkeit
  2. **12 Wochen** — Prognosehorizont (wöchentlich, P10–P90)
  3. **End-to-End** — Forecast → Einkauf → Produktion
  4. **Täglich** — automatische Aktualisierung + KI-Briefing
- **Sektion 3 (MeatMind-Referenz):** Feature-Text ergänzen um Produktionsplanung (Schlacht-/Linienplanung), Einkaufsmatrix, **Supply-Chain Control Tower**, Anomalieerkennung, lokale KI-Erklärungen (Ollama, on-premise). Kundenname bleibt anonym.
- **Neue Sektion „Branchen"** direkt nach der MeatMind-Referenz, vor „Weitere Leistungen": `id="branchen"` (Anchor-Ziel des Landing-Teasers). Enthält `BranchenSection` mit 3 Cards.

### 4.2 Landing-Seite (`app/[locale]/page.tsx`)
- Neue Komponente `BranchenTeaser` nahe der `Module`-Sektion: 3 kompakte Einträge (Icon + Branchenname + Einzeiler), Link `#branchen` auf Leistungen (`/{locale}/leistungen#branchen`).
- Rein additiv; leicht entfernbar, falls redundant.

## 5. Neue Komponenten

Alle in `components/sections/` bzw. `components/ui/`, im bestehenden Design-System (Coral-Akzent `text-coral`, Navy `#0F172A`, `font-mono`-Labels, `Reveal`/`LabelReveal`-Animationen, Card-Stil wie „Weitere Leistungen").

- `BranchenSection.tsx` — Grid mit 3 `BrancheCard`.
- `BrancheCard.tsx` — Kopf (Branchenname, Kurzbeschreibung, Feature-Punkte) + Slot für Mockup.
- `BranchenTeaser.tsx` — Landing-Leiste.
- Mockup-Komponenten (reine CSS/SVG, keine echten Daten, keine Lib):
  - `MockForecastChart.tsx` (Fleisch) — Liniendiagramm Ist + gestrichelter Forecast + P10–P90-Band, Feiertags-Marker.
  - `MockBakeryPanel.tsx` (Bäckerei) — KPI-Zeile (1 Tag Vorlauf · 3 Filialen · Frische) + kleiner Wochen-Bar-Chart mit Wochenend-Peak + Filial-Umschalter-Andeutung.
  - `MockBeveragePanel.tsx` (Getränkemarkt) — Kacheln (94 SKUs · B2B-Kunden · Churn-Ampel) + Saison-Kurve (Sommer/Oktoberfest/Q4).

**Produktnähe (hohe Fidelität):** Die Mockups sollen echten Produkt-Screens ähneln. Bei der Umsetzung die tatsächlichen UI-Layouts/Labels/Farb-Anmutung aus den Repos referenzieren:
- MeatMind-Frontend: TrendChart mit Ist/Vorjahr/gestricheltem ML-Forecast + P10/P90-Band; KPI-Kacheln; Sidebar-Anmutung.
- Nalu-AI-Frontend: Dashboard (Volumen-Trend + Alerts), Filiale-Selector (Bäckerei), Customer/RFM/Churn-Ansichten (Getränke), Control-Tower-Ampeln.
Die Mockups bleiben **statisch/illustrativ** (Marketing), übernehmen aber Struktur, Beschriftungssprache (DE) und Farbcodes glaubwürdig.

## 6. Inhalt je Branche (belegte Fakten)

**Fleisch (MeatMind, Referenz):** Top-Down-ML-Forecast (LightGBM), 8,1 % WMAPE, 12-Wochen-Horizont mit P10–P90; branchenspezifisch (Tierarten, Saison wie Grillsaison/Weihnachten, Schulferien, Oster-Alignment); End-to-End: Schlacht-/Produktionsplanung, Einkaufsmatrix + Lieferanten-Ranking, Produktionsboard; Anomalieerkennung + lokale KI-Erklärungen; mehrere Standorte (mandantenfähig).

**Bäckerei (einsatzbereit):** tägliche Prognose, 14-Tage-Horizont, **1 Tag Vorlauf** (frisch backen), Filial-Heterogenität (z. B. Innenstadt vs. Wohngebiet, Sonntag geschlossen), Wochenend-/Feiertags-Muster, saisonale Peaks (Stollen Q4, Brezeln zu Oktoberfest); Produktion über Rezepte (BOM) + Ofen-/Work-Center-Kapazität; Material-Frühwarnung (z. B. Mehl-Engpass).

**Getränkemarkt (einsatzbereit):** wöchentliche Prognose, 4-Wochen-Horizont, ~94 SKUs / 9 Kategorien; B2B-Kundenintelligenz (RFM, Churn-Risiko, Umsatz-Forecast pro Kunde, Next-Best-Product); ausgeprägte Saison (Sommer, Oktoberfest, Q4); Produkt-Lifecycle (Neueinführung/Auslauf); Lieferanten-Scorecard (OTIF, MOQ, Lead-Time-Drift).

**Plattform-übergreifend:** config-getrieben (branchenfrei im Core), on-premise (Daten bleiben beim Kunden), lokale LLM (Ollama), ML (LightGBM + PyTorch/TFT), Supply-Chain Control Tower (Demand/Supply-Balance, Engpass-Ampeln).

## 7. i18n

Neue Keys in `messages/de.json` + `messages/en.json`, gruppiert unter `branchen` (Section-Titel/Intro, je Branche: name, tagline, features[]) und `branchenTeaser`. Bestehende MeatMind-Keys (`referenz.stat*`, Feature-Texte) aktualisieren. DE ist führend, EN gleichwertig gepflegt.

## 8. Testing / Verifikation

- `npm run build` im Worktree grün (alle de/en-Routen).
- Sicht-Check lokal (`next dev`) für Leistungen (Branchen-Sektion + Mockups) und Landing-Teaser inkl. Anchor-Sprung `#branchen`.
- Responsiv (Cards stapeln mobil), keine Layout-Brüche.
- Nach Merge/Push auf `v1`: Auto-Deploy → Sicht-Check auf nalu-ai-v1.vercel.app.

## 9. Offene Punkte

- Exakte Icon-Wahl je Branche (Tabler-Icons, bereits im Projekt).
- Feintuning der Mockup-Zahlen (illustrativ, nicht als Kundenergebnis deklariert).
