"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

const stats = [
  ["7YRS", "In the industry"],
  ["250+", "Active professionals"],
  ["\u2193 60%", "Across Care Campaigns"],
  ["90-93%", "Continents served"],
]

export default function Stats() {
  const ref = useRef(null)

  return (
    <section id="who-we-are" className="section section-white who-section">
      <div className="who-body" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          <EyebrowIcon variant="framer" />
          <span>Who We Are</span>
        </motion.div>

        <AnimatedSectionHeading
          lines={["LET'S BUILD SOMETHING", "BIGGER TOGETHER."]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="who-copy"
        >
          <p>
            The closer working your leads in month four? Been on them since
            week one.
          </p>
          <p>That&apos;s the buy. A floor that holds.</p>
          <p>
            We built it from nothing. Founders in their twenties &mdash; no
            playbook, no safety net, one stubborn idea: you can make money over
            the phone and still change the life of the person holding it. Both
            ends of the line.
          </p>
          <p>
            So we built the floor we wished existed. Every manager here came up
            through it. Nobody walked in with a title. When your closer hits the
            wall, the one coaching them has hit it too &mdash; and already knows
            the way through.
          </p>
          <p>
            We treat your business like it&apos;s ours. The people running it
            already do. Zero to one of the fastest-growing floors in Egypt
            inside a year &mdash; and we don&apos;t stop till the name lands on
            Forbes.
          </p>
          <p>Come build it with us.</p>
        </motion.div>

        <div className="stats-grid">
          {stats.map(([value, label], index) => (
            <motion.div
              key={label}
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="stat-number">{value}</div>
              <span className="stat-label">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
