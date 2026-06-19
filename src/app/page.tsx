import Navbar from "@/components/Navbar"
import SmoothScroll from "@/components/SmoothScroll"
import DialExpertOrbitLoader from "@/components/DialExpertOrbitLoader"
import Hero from "@/components/sections/Hero"
import WhyDialExpert from "@/components/sections/WhyDialExpert"
import Team from "@/components/sections/Team"
import Challenge from "@/components/sections/Challenge"
import Services from "@/components/sections/Services"
import RevenueCycle from "@/components/sections/RevenueCycle"
import EngagementWays from "@/components/sections/EngagementWays"
import WhyClientsSwitch from "@/components/sections/WhyClientsSwitch"
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
      <Challenge />
      <WhyClientsSwitch />
      <WhyDialExpert />
      <Team />
      <Services />
      <RevenueCycle />
      <EngagementWays />
      <FAQ />
      <CTA />
      <FooterSection />
    </main>
  )
}
