"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

const cycleSteps = [
  [
    "01",
    "High cost of in-house hiring",
    "Internal teams are expensive to hire, train, and manage at scale.",
  ],
  [
    "02",
    "Cheap outsourcing backfires",
    "Low-cost outsourcing often creates poor results, weak communication, and low accountability.",
  ],
  [
    "03",
    "Growth hits a wall",
    "Execution becomes inconsistent and leaders lose time managing problems they shouldn't have to manage.",
  ],
]

const orbitStops = [
  {
    key: "cost",
    label: "Cost",
    sideLabel: "Cost",
    headline: "Cost",
    description: "Hiring in-house becomes expensive, slow, and hard to manage.",
    tone: "blue",
  },
  {
    key: "quality",
    label: "Quality",
    sideLabel: "Quality",
    headline: "Quality",
    description: "Cheap outsourcing often creates poor accountability and high turnover.",
    tone: "blue",
  },
  {
    key: "consistency",
    label: "Consistency",
    sideLabel: "Consistency",
    headline: "Consistency",
    description: "Growth slows when execution becomes inconsistent.",
    tone: "gray",
  },
  {
    key: "focus",
    label: "Focus",
    sideLabel: "Focus",
    headline: "Focus",
    description: "Leaders lose time managing problems they should not have to manage.",
    tone: "gray",
  },
]

export default function Revenue() {
  const shouldReduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [cycleId, setCycleId] = useState(0)
  const [isResetting, setIsResetting] = useState(false)
  const activeStop = orbitStops[activeIndex]
  const orbitRadius = 220
  const progress = isResetting ? 0 : (activeIndex + 1) / orbitStops.length

  useEffect(() => {
    if (shouldReduceMotion) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        if (current === orbitStops.length - 1) {
          setCycleId((value) => value + 1)
          setIsResetting(true)
          window.setTimeout(() => setIsResetting(false), 0)
          return 0
        }

        return current + 1
      })
    }, 1000)

    return () => window.clearInterval(timer)
  }, [shouldReduceMotion])

  return (
    <section className="section section-white problem-section">
      <div className="problem-head">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          <EyebrowIcon variant="framer" />
          <span>The Challenge</span>
        </motion.div>

        <AnimatedSectionHeading
          lines={[
            "Scaling A Team Gets",
            "Expensive Fast.",
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-lead problem-lead"
        >
          <p>
            Hiring in-house becomes expensive, slow, and hard to manage.
            Outsourcing often creates new problems: weak communication, poor accountability, and high turnover.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="orbit-wrap"
      >
        <div className={`orbit-label top ${activeStop.key === "appointments" ? "is-active" : ""}`}>Appointments</div>
        <div className={`orbit-label left ${activeStop.key === "leads" ? "is-active" : ""}`}>Leads</div>
        <div className={`orbit-label right ${activeStop.key === "quality" ? "is-active" : ""}`}>Quality</div>
        <div className={`orbit-label bottom ${activeStop.key === "consistency" ? "is-active" : ""}`}>Consistency</div>
        <div className="orbit-ring">
          <svg
            className="orbit-svg"
            viewBox="0 0 520 520"
            role="presentation"
            aria-hidden="true"
          >
            <circle
              cx="260"
              cy="260"
              r={orbitRadius}
              className="orbit-base"
            />
            <motion.circle
              key={cycleId}
              cx="260"
              cy="260"
              r={orbitRadius}
              className="orbit-progress"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.95, ease: [0.22, 1, 0.36, 1] }
              }
            />
            {orbitStops.map((stop, index) => {
              const coords = [
                { cx: 260, cy: 40 },
                { cx: 480, cy: 260 },
                { cx: 260, cy: 480 },
                { cx: 40, cy: 260 },
              ][index]

              return (
                <motion.circle
                  key={stop.key}
                  cx={coords.cx}
                  cy={coords.cy}
                  r="8"
                  className={`orbit-dot ${index === activeIndex && !isResetting ? "orbit-dot-active" : ""}`}
                  animate={
                    index === activeIndex
                      ? shouldReduceMotion
                        ? { scale: 1.15 }
                        : { scale: 1.45 }
                      : { scale: 1 }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.35, ease: "easeOut" }
                  }
                  style={{ transformOrigin: "center" }}
                />
              )
            })}
          </svg>
          <div className="orbit-core">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStop.key}
                className="orbit-copy"
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <strong>{activeStop.headline}</strong>
                <span>{activeStop.description}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <div className="cycle-grid">
        <div className="cycle-intro">
          <h3>The Core Challenges</h3>
          <p>
            Cost, quality, consistency, and leadership focus. These four problems drive most businesses to look for a better way.
          </p>
        </div>

        <div className="cycle-steps">
          {cycleSteps.map(([num, title, copy], index) => (
            <motion.article
              className="cycle-card"
              key={num}
              initial={
                shouldReduceMotion ? false : { opacity: 0, x: 150 }
              }
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
              }
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.4,
                delay: shouldReduceMotion ? 0 : index * 0.2,
                ease: [0, 0, 1, 1],
                type: "tween",
              }}
            >
              <strong>{num}</strong>
              <div className="cycle-info">
                <h4>{title}</h4>
                <p>{copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
