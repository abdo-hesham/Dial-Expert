"use client"

import { useRef, useState } from "react"
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

const steps = [
  {
    num: "1- The Call",
    heading: "30 minutes. We listen first.",
    detail:
      "No deck, no pitch. You tell us what's broken and what good looks like. By the end you'll know whether we can help, what it would cost, and what comes next. If we're not the right fit, we say so.",
    image: "https://framerusercontent.com/images/uRnAJVoOX4O4uUxyzAa1VVP32Go.jpg",
    rot: -3,
  },
  {
    num: "2- Setup",
    heading: "10 days. Then you're live.",
    detail:
      "We build the team, train on your product, and get the floor ready. The average outsourcing operation takes 4-6 weeks. We've absorbed that setup cost. You just show up to the launch.",
    image: "https://framerusercontent.com/images/GBpay3B8HObfTUqnBW7uHWQV7rs.jpg",
    rot: 3,
  },
  {
    num: "3- Month One",
    heading: "Numbers in. We refine.",
    detail:
      "Real-time reporting. You give feedback. We sharpen the script, tighten the qualification criteria, fix whatever isn't converting. Active, not passive.",
    image: "https://framerusercontent.com/images/FyzSrMXLccPvtlrtS0kHTWyNlcU.jpg",
    rot: -3,
  },
  {
    num: "4- Month Two Onward",
    heading: "Your pipeline never stops.",
    detail:
      "The floor knows your campaign. Appointments land. Deals close. Your team stops doing the volume work that was never the right job for them.",
    image: "https://framerusercontent.com/images/xxhQ666ZyQDc0tmEw1IPm1E9Qr4.webp",
    rot: 3,
  },
]

export default function RevenueCycle() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const timelineRef = useRef<HTMLDivElement | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const [scrollProgress, setScrollProgress] = useState(0)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  })
  const progress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 34,
    mass: 0.18,
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest)
  })

  return (
    <section className="section section-white process-section" ref={sectionRef}>
      <div className="process-head">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          <EyebrowIcon variant="framer" />
          <span>What To Expect</span>
        </motion.div>

        <AnimatedSectionHeading
          lines={["From first call to", "live campaign."]}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-lead"
          style={{ maxWidth: 558 }}
        >
          No mystery. No long sales process. The sequence is short because
          we&apos;ve already built everything that usually takes months.
        </motion.p>
      </div>

      <div className="timeline" ref={timelineRef}>
        {steps.map((step, index) => (
          <motion.div
            className="timeline-row"
            key={step.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              ease: "easeOut",
              delay: shouldReduceMotion ? 0 : index * 0.2,
            }}
          >
            <div className="timeline-side">
              {index % 2 === 1 && (
                <TimelineStepContent
                  step={step}
                  isLast={index === steps.length - 1}
                />
              )}
            </div>
            <div className="timeline-center">
              <span
                className={`timeline-dot ${
                  scrollProgress >= index / steps.length
                    ? "timeline-dot-active"
                    : ""
                }`}
              />
              <TimelineRailSegment
                progress={shouldReduceMotion ? scrollYProgress : progress}
                start={index / steps.length}
                end={(index + 1) / steps.length}
              />
            </div>
            <div className="timeline-side">
              {index % 2 === 0 && (
                <TimelineStepContent
                  step={step}
                  isLast={index === steps.length - 1}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function TimelineRailSegment({
  progress,
  start,
  end,
}: {
  progress: ReturnType<typeof useSpring>
  start: number
  end: number
}) {
  const fill = useTransform(progress, [start, end], [0, 1], { clamp: true })

  return (
    <div className="timeline-segment" aria-hidden="true">
      <div className="timeline-segment-track" />
      <motion.div className="timeline-segment-fill" style={{ scaleY: fill }} />
    </div>
  )
}

function TimelineStepContent({
  step,
}: {
  step: (typeof steps)[number]
  isLast: boolean
}) {
  return (
    <div className="timeline-content">
      <div className="timeline-copy">
        <p className="step-label">{step.num}</p>
        <h3 className="timeline-heading">{step.heading}</h3>
      </div>
      <p className="detail">{step.detail}</p>
      <div className="timeline-image-wrap" style={{ transform: `rotate(${step.rot}deg)` }}>
        <div className="timeline-image-inner">
          <img
            src={step.image}
            alt=""
            className="timeline-image"
          />
        </div>
      </div>
    </div>
  )
}
