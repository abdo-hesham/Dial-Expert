"use client"

import {
  type LucideIcon,
  UserCheck,
  Award,
  BookOpen,
  Building2,
} from "lucide-react"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

const featuresLeft = [
  {
    title: "Rigorous recruiting process",
    description: "We don't hire anyone who hasn't been vetted, tested, and proven before they touch your campaign.",
    icon: UserCheck,
  },
  {
    title: "Performance-based culture",
    description: "Every agent is measured, every campaign is tracked. What gets measured gets done.",
    icon: Award,
  },
]

const featuresRight = [
  {
    title: "Continuous training and coaching",
    description: "Weekly sessions, live feedback loops, and skill upgrades keep the floor sharp.",
    icon: BookOpen,
  },
  {
    title: "Real office operation in Egypt",
    description: "Not a work-from-home setup. A physical floor with infrastructure, security, and culture.",
    icon: Building2,
  },
]

function FeatureCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <div className="flex flex-col p-6 max-md:p-4 rounded-2xl border border-white/10 bg-white/[0.03] h-full">
      <div className="flex items-center justify-center w-11 h-11 max-md:w-10 max-md:h-10 rounded-xl bg-white/5 border border-white/10 shrink-0 mb-4 max-md:mb-3">
        <Icon className="text-white/80 size-5 max-md:size-4" strokeWidth={1.5} />
      </div>
      <h3 className="text-white font-bold text-sm max-md:text-xs mb-1">{title}</h3>
      <p className="text-white/50 text-sm max-md:text-xs leading-relaxed">{description}</p>
    </div>
  )
}

export default function WhyDialExpert() {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-[120px] max-md:py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1728px] px-[96px] max-xl:px-8 max-md:px-[18px]">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <EyebrowIcon variant="framer" />
            <span className="text-[18px] max-md:text-[14px] font-medium text-white/60">
              Why DialExpert
            </span>
          </div>

          <AnimatedSectionHeading
            className="section-heading text-white"
            lines={["Most Outsourcing Companies", "Sell Headcount. We Build", "Teams People Can Rely On."]}
          />

          <p className="mx-auto mt-6 max-md:mt-4 max-w-3xl text-white/50 text-[17px] max-md:text-[15px] font-medium leading-relaxed">
            Anyone can fill seats. Very few can build a team that is trained,
            managed, accountable, and consistently improving. DialExpert was
            built for businesses that need more than headcount.
          </p>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="mx-auto mt-16 max-md:mt-10 max-w-6xl hidden lg:grid grid-cols-[1fr_auto_1fr] gap-6">
          {/* Left column: 2 rows */}
          <div className="grid grid-rows-2 gap-6 h-[420px]">
            {featuresLeft.map((feat) => (
              <FeatureCard key={feat.title} {...feat} />
            ))}
          </div>

          {/* Center image */}
          <div className="h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
              alt="DialExpert team"
              loading="lazy"
              decoding="async"
              className="rounded-2xl w-[320px] h-full object-cover shadow-lg"
            />
          </div>

          {/* Right column: 2 rows */}
          <div className="grid grid-rows-2 gap-6 h-[420px]">
            {featuresRight.map((feat) => (
              <FeatureCard key={feat.title} {...feat} />
            ))}
          </div>
        </div>

        {/* Mobile: stacked */}
        <div className="mx-auto mt-10 max-w-6xl lg:hidden flex flex-col gap-6">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
            alt="DialExpert team"
            loading="lazy"
            decoding="async"
            className="rounded-2xl w-full h-[300px] object-cover shadow-lg"
          />
          {[...featuresLeft, ...featuresRight].map((feat) => (
            <FeatureCard key={feat.title} {...feat} />
          ))}
        </div>
      </div>
    </section>
  )
}
