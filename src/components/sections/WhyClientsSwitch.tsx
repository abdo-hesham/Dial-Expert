"use client"

import {
  DollarSign,
  Handshake,
  AlertTriangle,
  MessageSquareX,
  UserMinus,
  TrendingDown,
} from "lucide-react"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

const features = [
  {
    title: "Expensive internal teams",
    description: "Salaries, benefits, and overhead drain budgets before a single deal closes.",
    icon: DollarSign,
  },
  {
    title: "Underperforming outsourcing partners",
    description: "Cheap providers deliver cheap results. You save pennies and lose clients.",
    icon: Handshake,
  },
  {
    title: "Constant management headaches",
    description: "Micromanaging a remote team was never part of the job description.",
    icon: AlertTriangle,
  },
  {
    title: "Poor communication",
    description: "Time zones, language barriers, and unclear expectations stall everything.",
    icon: MessageSquareX,
  },
  {
    title: "High turnover",
    description: "Replacing agents every few months means starting over. Again.",
    icon: UserMinus,
  },
  {
    title: "Inconsistent execution",
    description: "Good weeks and bad weeks — but your pipeline needs every week to count.",
    icon: TrendingDown,
  },
]

function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10 [mask-image:linear-gradient(white,transparent,white)]">
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--line)" strokeWidth="1" strokeOpacity="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  )
}

function FeatureCard({
  feature,
}: {
  feature: (typeof features)[number]
}) {
  const Icon = feature.icon

  return (
    <div className="relative overflow-hidden p-6 max-md:p-4 bg-white/80 backdrop-blur-sm border-r border-b border-[var(--line)]/30">
      <Icon
        className="text-[var(--muted)] size-6 max-md:size-5"
        strokeWidth={1}
        aria-hidden
      />
      <h3 className="mt-10 max-md:mt-6 text-sm md:text-base text-[--ink]">
        {feature.title}
      </h3>
      <p className="text-[var(--muted)] relative z-20 mt-2 text-xs font-light">
        {feature.description}
      </p>
    </div>
  )
}

export default function WhyClientsSwitch() {
  return (
    <section className="relative w-full bg-[--bg] py-[120px] max-md:py-20 overflow-hidden">
      <GridBackground />
      <div className="mx-auto w-full relative z-10 max-w-[1728px] px-[96px] max-xl:px-8 max-md:px-[18px]">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <EyebrowIcon variant="framer" />
            <span className="text-[18px] max-md:text-[14px] font-medium text-[var(--muted)]">
              Why Clients Switch
            </span>
          </div>

          <AnimatedSectionHeading
            lines={["They Are Looking For", "Fewer Problems."]}
          />

          <div className="mx-auto mt-16 max-md:mt-10 max-w-5xl">
            <p className="text-[var(--muted)] text-sm md:text-base tracking-wide text-balance max-w-3xl mx-auto">
              Most clients come to us because something is already costing them
              time, money, or momentum. They are tired of inconsistent quality and
              constant management headaches.
            </p>
          </div>
        </div>

        <div
          className="mx-auto mt-12 max-md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t border-l border-[var(--line)]/30 rounded-xl max-md:rounded-lg overflow-hidden"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
