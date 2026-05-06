// GENERATED — do not edit by hand.
// Source: shared/design-tokens.json
// Regenerate: node scripts/build-tokens.mjs

type FontSizeTuple = [string, { lineHeight: string; fontWeight: string }];

const tokens = {
  colors: {
  "ocean": {
    "DEFAULT": "#0A4F7F",
    "light": "#1E7AC2",
    "dark": "#073D63"
  },
  "coral": "#FF6B4A",
  "seaglass": "#4ABFB0",
  "horizon": "#F8FAFB",
  "navy": "#0F172A",
  "wave": "#FFFFFF",
  "ui": {
    "background": {
      "primary": "#FFFFFF",
      "secondary": "#F4F6F8",
      "tertiary": "#F8FAFB",
      "info": "#E5EEF5",
      "success": "#E7F4EC",
      "warning": "#FFF1E2",
      "danger": "#FCEAEB"
    },
    "text": {
      "primary": "#0F172A",
      "secondary": "#475569",
      "tertiary": "#94A3B8",
      "info": "#0A4F7F",
      "success": "#1F7A45",
      "warning": "#B25E10",
      "danger": "#B23335"
    },
    "border": {
      "tertiary": "#E5E8EC",
      "secondary": "#CDD3DB",
      "warning": "#EF9F27",
      "danger": "#E24B4A"
    }
  }
},
  fontFamily: {
  "sans": [
    "Inter",
    "Helvetica Neue",
    "system-ui",
    "-apple-system",
    "sans-serif"
  ],
  "display": [
    "Syne",
    "Inter",
    "sans-serif"
  ],
  "mono": [
    "JetBrains Mono",
    "SFMono-Regular",
    "Menlo",
    "monospace"
  ]
},
  fontSize: {
  "micro": [
    "10px",
    {
      "lineHeight": "14px",
      "fontWeight": "500"
    }
  ],
  "small": [
    "11px",
    {
      "lineHeight": "16px",
      "fontWeight": "400"
    }
  ],
  "body": [
    "13px",
    {
      "lineHeight": "20px",
      "fontWeight": "400"
    }
  ],
  "subheading": [
    "15px",
    {
      "lineHeight": "22px",
      "fontWeight": "500"
    }
  ],
  "heading": [
    "20px",
    {
      "lineHeight": "28px",
      "fontWeight": "500"
    }
  ],
  "display-m": [
    "28px",
    {
      "lineHeight": "32px",
      "fontWeight": "600"
    }
  ],
  "display-l": [
    "36px",
    {
      "lineHeight": "40px",
      "fontWeight": "700"
    }
  ],
  "display-xl": [
    "48px",
    {
      "lineHeight": "52px",
      "fontWeight": "700"
    }
  ]
} as Record<string, FontSizeTuple>,
  boxShadow: {
  "brand-sm": "0 1px 2px rgba(10, 79, 127, 0.06)",
  "brand-md": "0 4px 12px rgba(10, 79, 127, 0.10)",
  "brand-lg": "0 8px 24px rgba(10, 79, 127, 0.14)"
},
};

export default tokens;
