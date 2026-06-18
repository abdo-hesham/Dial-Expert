"use client"

import { motion } from "framer-motion"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

const challenges = [
  "Internal teams are expensive to hire and manage.",
  "Cheap outsourcing often creates poor results.",
  "Growth slows when execution becomes inconsistent.",
  "Leaders lose time managing problems they should not have to manage.",
]

export default function Revenue() {
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

      <div className="challenge-list">
        {challenges.map((item, index) => (
          <motion.div
            key={item}
            className="challenge-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
          >
            <span className="challenge-num">{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
