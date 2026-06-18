"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import EyebrowIcon from "@/components/EyebrowIcon"
import AnimatedSectionHeading from "@/components/AnimatedSectionHeading"
import { BeamsBackground } from "@/components/ui/beams-background"

export default function CTA() {
  return (
    <section className="cta-beam-section">
      <BeamsBackground className="cta-beam-bg">
        <div className="cta-beam-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.6 }}
          >
            <EyebrowIcon variant="framer" />
          </motion.div>

          <AnimatedSectionHeading lines={["Let\u2019s Talk."]} />

          <motion.h3
            className="cta-beam-subhead"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Ready To Build A Team That Performs?
          </motion.h3>

          <motion.p
            className="cta-beam-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you are scaling your internal team, replacing an underperforming provider, or looking for a better way to handle sales and support, DialExpert can help you build the operation behind your growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link className="cta-beam-btn btn-fill-hover" href="/contact">
              <span className="btn-fill" aria-hidden="true" />
              <span className="btn-text">Book A Strategy Call</span>
              <span className="cta-beam-btn-arrow">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </span>
            </Link>
          </motion.div>
        </div>
      </BeamsBackground>
    </section>
  )
}
