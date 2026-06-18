"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion } from "framer-motion"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

const MotionLink = motion.create(Link)

const services = [
  {
    num: "01",
    title: "Cold Calling & Lead Generation",
    desc: "We qualify before we connect. By the time a lead reaches your closer, the conversation has already started - we've done the groundwork so your team doesn't have to.",
    image:
      "https://framerusercontent.com/images/2OMzQEYtFsMJe9R4TdqOcQE208k.png?width=3360&height=1440",
  },
  {
    num: "02",
    title: "Debt Settlement & Collection",
    desc: "FDCPA-compliant and built for sensitivity. Our agents know the compliance lines, the emotional weight of these calls, and how to close without cutting corners.",
    image:
      "https://framerusercontent.com/images/4pVjOHJLM9w4iDTb5BQ2G1orSo.png?width=1680&height=720",
  },
  {
    num: "03",
    title: "Financial Relief & Insurance",
    desc: "Tax relief, health and auto insurance, personal loans - agents trained in the language and qualification criteria of each vertical, not running a generic script on a sensitive conversation.",
    image:
      "https://framerusercontent.com/images/5kTnXZDLQEOHHQwz8HysG8hzB0.png?width=3360&height=1440",
  },
  {
    num: "04",
    title: "Sales & Revenue",
    desc: "First cold dial to signed agreement. Closing floor, appointment pipeline, or live transfers - we set it up and run it. You direct the output.",
    image:
      "https://framerusercontent.com/images/cIQiz350DxCswpNIm51NlgSBfIk.png?width=1680&height=720",
  },
  {
    num: "05",
    title: "Customer Service & Technical Support",
    desc: "Inbound support, ticket resolution, retention and save calls, and helpdesk - across phone, email, and chat. Every interaction gets QA'd, not sampled.",
    image:
      "https://framerusercontent.com/images/CTEEEg6HAZ6NFgnZ3T0KMzlnh74.png?width=1680&height=720",
  },
  {
    num: "06",
    title: "Real Estate & Wholesaling",
    desc: "Motivated-seller outreach and deal sourcing for wholesale operations. US-market focused. Agents who understand the pace and directness real estate conversations require.",
    image:
      "https://framerusercontent.com/images/II45yOtnPWRqsj3oAfIVoimV9hM.png?width=1680&height=720",
  },
  {
    num: "07",
    title: "B2B Sales & SDR",
    desc: "A dedicated sales-development function for B2B businesses - prospecting, qualifying, and booking meetings with decision-makers.",
    image:
      "https://framerusercontent.com/images/lcCYMERhTpq01sdJBbWoEhGJZI.png?width=1680&height=720",
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
            <span>Services</span>
          </motion.div>
          <AnimatedSectionHeading lines={["Seven services. One standard."]} />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.55 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-lead lead-dark"
          >
            Most clients start with one and add a second within 90 days. A
            30-minute call is enough to figure out which one makes sense for you
            first.
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
                  <span className="service-index">{service.num}</span>
                  <h3>{service.title}</h3>
                </div>
              </div>
              <div className="service-content">
                <div className="service-title">
                  <span className="service-index">{service.num}</span>
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
