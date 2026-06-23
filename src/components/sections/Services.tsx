"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion } from "framer-motion"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

const MotionLink = motion.create(Link)

const services = [
  {
    title: "Outbound Sales",
    desc: "Build a team that follows up consistently without the burden of internal hiring.",
    image: "/Outbound-Sales.webp",
  },
  {
    title: "Lead Generation",
    desc: "Qualify opportunities and create a stronger pipeline.",
    image: "/Lead-Generation-picture.webp",
  },
  {
    title: "Appointment Setting",
    desc: "Keep your calendar filled while your internal team focuses on closing.",
    image:
      "https://framerusercontent.com/images/5kTnXZDLQEOHHQwz8HysG8hzB0.png?width=3360&height=1440",
  },
  {
    title: "Inbound Sales",
    desc: "Turn incoming interest into revenue with trained representatives.",
    image:
      "https://framerusercontent.com/images/cIQiz350DxCswpNIm51NlgSBfIk.png?width=1680&height=720",
  },
  {
    title: "Customer Support",
    desc: "Deliver responsive, professional support that protects your brand.",
    image:
      "https://framerusercontent.com/images/CTEEEg6HAZ6NFgnZ3T0KMzlnh74.png?width=1680&height=720",
  },
  {
    title: "Specialized Campaigns",
    desc: "Build custom teams for specific business initiatives.",
    image:
      "https://framerusercontent.com/images/II45yOtnPWRqsj3oAfIVoimV9hM.png?width=1680&height=720",
  },
]

export default function Services() {
  const ref = useRef(null)

  return (
    <section id="services" className="section section-dark services-section">
      <div className="section-head row">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.55 }}
            transition={{ duration: 0.6 }}
            className="eyebrow eyebrow-dark"
          >
            <EyebrowIcon variant="framer" />
            <span>What We Do.</span>
          </motion.div>
          <AnimatedSectionHeading className="section-heading text-white" lines={["One Partner For Sales,", "Support, And Growth."]} />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.55 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-lead lead-dark"
          >
            From outbound sales to customer support, we build and manage teams
            that perform. Start with one service, add more as you grow.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link className="button button-dark" href="/contact">
            <span>Let&apos;s Talk</span>
          </Link>
        </motion.div>
      </div>

      <div className="service-list">
        {services.map((service, index) => (
          <MotionLink
            href="/contact"
            className="service-row"
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 + index * 0.06 }}
          >
            <div className="service-shell">
              <div
                className="service-media"
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.26)), url("${service.image}")`,
                }}
              >
                <div className="service-title service-title-overlay">
                  <h3>{service.title}</h3>
                </div>
              </div>
              <div className="service-content">
                <div className="service-title">
                  <h3>{service.title}</h3>
                </div>
                <p className="service-desc">{service.desc}</p>
              </div>
            </div>
          </MotionLink>
        ))}
      </div>
    </section>
  )
}
