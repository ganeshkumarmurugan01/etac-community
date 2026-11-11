import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import HomePartners from '@/components/sections/HomePartners'
import HomeAbout from '@/components/sections/HomeAbout'
import HomeInsight from '@/components/sections/HomeInsight'
import HomeEvent from '@/components/sections/HomeEvent'
import HomeMembership from '@/components/sections/HomeMembership'
import CTA from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomePartners />
        <HomeAbout />
        <HomeInsight />
        <HomeEvent />
        <HomeMembership />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
