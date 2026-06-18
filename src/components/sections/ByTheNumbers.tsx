"use client"

import { motion } from "framer-motion"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

const stats = [
  { value: "7+", label: "Years Operating", sub: "In the industry." },
  { value: "250+", label: "Active Professionals", sub: "On the floor." },
  { value: "20+", label: "Dedicated Managers", sub: "Overseeing execution." },
  { value: "$300M+", label: "Revenue Generated", sub: "Across client campaigns." },
]

export default function ByTheNumbers() {
  return (
    <section className="section section-white numbers-section">
      <div className="numbers-head">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          <EyebrowIcon variant="framer" />
          <span>By The Numbers</span>
        </motion.div>

        <AnimatedSectionHeading
          lines={["Built With Real People,", "Real Management, And", "Real Scale."]}
        />
      </div>

      <div className="numbers-grid">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            className="number-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <div className="number-value">{item.value}</div>
            <span className="number-label">{item.label}</span>
            <span className="number-sub">{item.sub}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
