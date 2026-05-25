export type Lang = 'de' | 'en'

export type NavContent = {
  projekte: string
  stack: string
  kontakt: string
  logoAria: string
  menuLabel: string
  langLabel: string
}

export type HeroStat = {
  value: string
  label: string
}

export type HeroContent = {
  eyebrow: string
  titleLine1: string
  titleLine2: string
  scrollAria: string
}

export type NameContent = {
  pronunciation: string
  metaText: string
  paragraph1: string
  paragraph2: string
  authorLine1: string
  authorLine2: string
  authorLine3: string
}

export type ProjectItem = { name: string; body: string }

export type MockupType = 'dashboard' | 'forecasting' | 'scm' | 'kunden'

export type ProjectBlock =
  | { type: 'mockup'; mockup: MockupType; caption?: string; rotate?: 'left' | 'right' | 'none' }
  | { type: 'modules'; heading: string; items: ProjectItem[] }
  | { type: 'challenges'; heading: string; items: ProjectItem[] }
  | { type: 'highlights'; heading: string; items: ProjectItem[] }
  | {
      type: 'quote'
      label: string
      quote: string
      author: string
    }
  | { type: 'stats'; heading: string; items: HeroStat[] }
  | {
      type: 'beforeAfter'
      vorherLabel: string
      vorher: string
      nachherLabel: string
      nachher: string
    }
  | { type: 'stack'; heading: string; items: string[] }

export type ProjectShowcase = {
  id: string
  number: string
  title: string
  subtitle: string
  attribution: string
  paragraphs: string[]
  blocks: ProjectBlock[]
}

export type ProjectsContent = {
  sectionLabel: string
  projects: ProjectShowcase[]
}

export type StackGroup = { label: string; items: string[] }
export type StackContent = {
  sectionLabel: string
  groups: StackGroup[]
}

export type FooterContent = {
  tagline: string
  email: string
  copyright: string
}

export type Content = {
  nav: NavContent
  hero: HeroContent
  name: NameContent
  projects: ProjectsContent
  stack: StackContent
  footer: FooterContent
}
