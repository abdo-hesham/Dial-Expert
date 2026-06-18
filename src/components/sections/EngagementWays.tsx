"use client"

import { motion } from "framer-motion"
import { Building2, Users, Headphones, MessageSquare, RefreshCw, XCircle } from "lucide-react"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

const problems = [
  { icon: Building2, text: "Expensive internal teams" },
  { icon: Users, text: "Underperforming outsourcing partners" },
  { icon: Headphones, text: "Constant management headaches" },
  { icon: MessageSquare, text: "Poor communication" },
  { icon: RefreshCw, text: "High turnover" },
  { icon: XCircle, text: "Inconsistent execution" },
]

export default function WhyClientsSwitch() {
  return (
    <section className="section section-white switch-section">
      <div className="switch-head">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          <EyebrowIcon variant="framer" />
          <span>Why Clients Switch</span>
        </motion.div>

        <AnimatedSectionHeading
          lines={["They Are Looking For", "Fewer Problems."]}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-lead switch-lead"
        >
          Most clients come to us because something is already costing them time, money, or momentum. They are tired of inconsistent quality and constant management headaches.
        </motion.p>
      </div>

      <div className="switch-grid">
        {problems.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.text}
              className="switch-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
            >
              <span className="switch-icon">
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <span>{item.text}</span>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
