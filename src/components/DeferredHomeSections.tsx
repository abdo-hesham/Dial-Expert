"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const Challenge = dynamic(() => import("@/components/sections/Challenge"), { ssr: false })
const WhyClientsSwitch = dynamic(() => import("@/components/sections/WhyClientsSwitch"), { ssr: false })
const WhyDialExpert = dynamic(() => import("@/components/sections/WhyDialExpert"), { ssr: false })
const Team = dynamic(() => import("@/components/sections/Team"), { ssr: false })
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: false })
const RevenueCycle = dynamic(() => import("@/components/sections/RevenueCycle"), { ssr: false })
const EngagementWays = dynamic(() => import("@/components/sections/EngagementWays"), { ssr: false })
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false })
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: false })
const CTA = dynamic(() => import("@/components/sections/CTA"), { ssr: false })
const FooterSection = dynamic(() => import("@/components/sections/FooterSection"), { ssr: false })

export default function DeferredHomeSections() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (shouldLoad) return

    const load = () => setShouldLoad(true)
    const idleTimer = window.setTimeout(load, 30000)

    window.addEventListener("wheel", load, { passive: true, once: true })
    window.addEventListener("touchstart", load, { passive: true, once: true })
    window.addEventListener("keydown", load, { once: true })
    window.addEventListener("pointerdown", load, { once: true })

    return () => {
      window.clearTimeout(idleTimer)
      window.removeEventListener("wheel", load)
      window.removeEventListener("touchstart", load)
      window.removeEventListener("keydown", load)
      window.removeEventListener("pointerdown", load)
    }
  }, [shouldLoad])

  if (!shouldLoad) {
    return <div className="deferred-sections-sentinel" aria-hidden="true" />
  }

  return (
    <>
      <Challenge />
      <WhyClientsSwitch />
      <WhyDialExpert />
      <Team />
      <Services />
      <RevenueCycle />
      <EngagementWays />
      <Testimonials />
      <FAQ />
      <CTA />
      <FooterSection />
    </>
  )
}
