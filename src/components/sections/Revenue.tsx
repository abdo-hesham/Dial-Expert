"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

const cycleSteps = [
  [
    "01",
    "Your pipeline starts moving",
    "We handle the outreach. You get qualified appointments and more closed deals.",
  ],
  [
    "02",
    "Less Overhead, More Growth",
    "Building a sales floor takes years and major investment. We did that work, you get the floor, not the buildout.",
  ],
  [
    "03",
    "No Slips. No Leaks.",
    "We automate the repetitive work, protect the data, and keep your team focused on what humans do best.",
  ],
]

const orbitStops = [
  {
    key: "appointments",
    label: "Appointments",
    sideLabel: "Appointments",
    headline: "Appointments",
    description: "About one in ten cold conversations turns into an appointment.",
    tone: "blue",
  },
  {
    key: "closes",
    label: "Closes",
    sideLabel: "Closes",
    headline: "Closes",
    description: "About 3 in 100 close. The floor that booked it is the floor that closes it.",
    tone: "blue",
  },
  {
    key: "csat",
    label: "CSAT",
    sideLabel: "CSAT",
    headline: "CSAT",
    description: "The sale is not the end. Retention and service keep the loop healthy.",
    tone: "gray",
  },
  {
    key: "leads",
    label: "Leads",
    sideLabel: "Leads",
    headline: "Leads",
    description: "We keep the top of the pipe moving so the floor never goes cold.",
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
          viewport={{ once: false, amount: 0.55 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          <EyebrowIcon variant="framer" />
          <span>The Floor Problem</span>
        </motion.div>

        <AnimatedSectionHeading
          lines={[
            "Your pipeline isn't dry because the market dried up.",
            "It's dry because no one's working it.",
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-lead problem-lead"
        >
          <p>
            Closers sitting on dead leads. An appointment rate that hasn&apos;t
            moved in two quarters. You, doing the dialing yourself at 7pm.
            That&apos;s not a market problem, it&apos;s a floor problem. We&apos;ve
            been fixing it for seven years across debt settlement, insurance,
            financial programs, real estate, and cold outreach.
          </p>
          <p>
            About one in ten cold conversations turns into an appointment.
            About three in a hundred close. Those aren&apos;t targets on a slide,
            they&apos;re what our floors are averaging right now, on live campaigns.
            We don&apos;t hand you a list and call it lead gen. We hand your closer
            a conversation that&apos;s already warm.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="orbit-wrap"
      >
        <div className={`orbit-label top ${activeStop.key === "appointments" ? "is-active" : ""}`}>Appointments</div>
        <div className={`orbit-label left ${activeStop.key === "leads" ? "is-active" : ""}`}>Leads</div>
        <div className={`orbit-label right ${activeStop.key === "closes" ? "is-active" : ""}`}>Closes</div>
        <div className={`orbit-label bottom ${activeStop.key === "csat" ? "is-active" : ""}`}>CSAT</div>
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
          <h3>The Full Revenue Cycle</h3>
          <p>
            Leads, appointments, closes, and the CSAT that keeps them. We keep
            the cycle moving.
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
