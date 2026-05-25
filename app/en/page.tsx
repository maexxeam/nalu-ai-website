import type { Metadata } from 'next'
import { defaultMetadata, localizedMetadata, SITE_URL } from '@/lib/metadata'
import { Navbar } from '../_components/Navbar'
import { Hero } from '../_sections/Hero'
import { Name } from '../_sections/Name'
import { Projects } from '../_sections/Projects'
import { Stack } from '../_sections/Stack'
import { Footer } from '../_sections/Footer'
import { getContent } from '../_content'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: {
    default: localizedMetadata.en.title,
    template: '%s | Nalu AI',
  },
  description: localizedMetadata.en.description,
  openGraph: {
    ...defaultMetadata.openGraph,
    locale: 'en_US',
    alternateLocale: ['de_DE'],
    url: `${SITE_URL}/en`,
    title: localizedMetadata.en.title,
    description: localizedMetadata.en.description,
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: localizedMetadata.en.title,
    description: localizedMetadata.en.description,
  },
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      'de-DE': SITE_URL,
      'en-US': `${SITE_URL}/en`,
      'x-default': SITE_URL,
    },
  },
}

export default function HomePageEn() {
  const c = getContent('en')

  return (
    <>
      <Navbar lang="en" content={c.nav} />
      <main className="bg-navy">
        <Hero content={c.hero} />
        <Name content={c.name} />
        <Projects content={c.projects} />
        <Stack content={c.stack} />
        <Footer content={c.footer} />
      </main>
    </>
  )
}
