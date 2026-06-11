import Navbar from "@/components/Navbar"
import SmoothScroll from "@/components/SmoothScroll"
import Hero from "@/components/sections/Hero"
import Stats from "@/components/sections/Stats"
import Team from "@/components/sections/Team"
import Revenue from "@/components/sections/Revenue"
import Services from "@/components/sections/Services"
import RevenueCycle from "@/components/sections/RevenueCycle"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import CTA from "@/components/sections/CTA"
import FooterSection from "@/components/sections/FooterSection"

export default function Home() {
  return (
    <main className="page">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Stats />
      <Team />
      <Revenue />
      <Services />
      <RevenueCycle />
      <Testimonials />
      <FAQ />
      <CTA />
      <FooterSection />
    </main>
  )
}
