import dynamic from "next/dynamic"
import Navbar from "@/components/Navbar"
import SmoothScroll from "@/components/SmoothScroll"
import DialExpertOrbitLoader from "@/components/DialExpertOrbitLoader"
import Hero from "@/components/sections/Hero"

const Revenue = dynamic(() => import("@/components/sections/Revenue"), { ssr: true })
const EngagementWays = dynamic(() => import("@/components/sections/EngagementWays"), { ssr: true })
const Stats = dynamic(() => import("@/components/sections/Stats"), { ssr: true })
const Team = dynamic(() => import("@/components/sections/Team"), { ssr: true })
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: true })
const RevenueCycle = dynamic(() => import("@/components/sections/RevenueCycle"), { ssr: true })
const ByTheNumbers = dynamic(() => import("@/components/sections/ByTheNumbers"), { ssr: true })
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: true })
const CTA = dynamic(() => import("@/components/sections/CTA"), { ssr: true })
const ContactForm = dynamic(() => import("@/components/sections/ContactForm"), { ssr: true })
const FooterSection = dynamic(() => import("@/components/sections/FooterSection"), { ssr: true })

export default function Home() {
  return (
    <main className="page">
      <DialExpertOrbitLoader />
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Revenue />
      <EngagementWays />
      <Stats />
      <Team />
      <Services />
      <RevenueCycle />
      <ByTheNumbers />
      <FAQ />
      <CTA />
      <ContactForm />
      <FooterSection />
    </main>
  )
}
