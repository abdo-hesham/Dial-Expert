import dynamic from "next/dynamic"
import Navbar from "@/components/Navbar"
import SmoothScroll from "@/components/SmoothScroll"
import DialExpertOrbitLoader from "@/components/DialExpertOrbitLoader"
import Hero from "@/components/sections/Hero"

const TheChallenge = dynamic(() => import("@/components/sections/Revenue"), { ssr: true })
const WhyClientsSwitch = dynamic(() => import("@/components/sections/EngagementWays"), { ssr: true })
const WhyDialExpert = dynamic(() => import("@/components/sections/Stats"), { ssr: true })
const MeetTheTeam = dynamic(() => import("@/components/sections/Team"), { ssr: true })
const WhatWeDo = dynamic(() => import("@/components/sections/Services"), { ssr: true })
const HowWeOperate = dynamic(() => import("@/components/sections/RevenueCycle"), { ssr: true })
const ByTheNumbers = dynamic(() => import("@/components/sections/ByTheNumbers"), { ssr: true })
const FAQs = dynamic(() => import("@/components/sections/FAQ"), { ssr: true })
const FinalCTA = dynamic(() => import("@/components/sections/CTA"), { ssr: true })
const ContactForm = dynamic(() => import("@/components/sections/ContactForm"), { ssr: true })
const FooterSection = dynamic(() => import("@/components/sections/FooterSection"), { ssr: true })

export default function Home() {
  return (
    <main className="page">
      <DialExpertOrbitLoader />
      <SmoothScroll />
      <Navbar />
      <Hero />
      <TheChallenge />
      <WhyClientsSwitch />
      <WhyDialExpert />
      <MeetTheTeam />
      <WhatWeDo />
      <HowWeOperate />
      <ByTheNumbers />
      <FAQs />
      <FinalCTA />
      <ContactForm />
      <FooterSection />
    </main>
  )
}
