import Navbar from "@/components/Navbar"
import SmoothScroll from "@/components/SmoothScroll"
import DialExpertOrbitLoader from "@/components/DialExpertOrbitLoader"
import Hero from "@/components/sections/Hero"
import Stats from "@/components/sections/Stats"
import Team from "@/components/sections/Team"
import Revenue from "@/components/sections/Revenue"
import Services from "@/components/sections/Services"
import RevenueCycle from "@/components/sections/RevenueCycle"
import EngagementWays from "@/components/sections/EngagementWays"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import CTA from "@/components/sections/CTA"
import FooterSection from "@/components/sections/FooterSection"

export default function Home() {
  return (
    <main className="page">
      <DialExpertOrbitLoader />
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Stats />
      <Team />
      <Revenue />
      <Services />
      <RevenueCycle />
      <EngagementWays />
      <Testimonials />
      <FAQ />
      <CTA />
      <FooterSection />
    </main>
  )
}
