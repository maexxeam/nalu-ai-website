import { Navbar } from './_components/Navbar'
import { Hero } from './_sections/Hero'
import { Name } from './_sections/Name'
import { Projects } from './_sections/Projects'
import { Stack } from './_sections/Stack'
import { Footer } from './_sections/Footer'
import { getContent } from './_content'

export default function HomePage() {
  const c = getContent('de')

  return (
    <>
      <Navbar lang="de" content={c.nav} />
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
