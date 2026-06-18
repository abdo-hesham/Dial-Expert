"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion } from "framer-motion"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"
import { optimizeBgImage } from "@/lib/image-loader"

const MotionLink = motion.create(Link)

const services = [
  {
    num: "01",
    title: "Outbound Sales",
    desc: "Build a team that follows up consistently without the burden of internal hiring.",
    image:
      "https://framerusercontent.com/images/2OMzQEYtFsMJe9R4TdqOcQE208k.png",
  },
  {
    num: "02",
    title: "Lead Generation",
    desc: "Qualify opportunities and create a stronger pipeline for your business.",
    image:
      "https://framerusercontent.com/images/4pVjOHJLM9w4iDTb5BQ2G1orSo.png",
  },
  {
    num: "03",
    title: "Appointment Setting",
    desc: "Keep your calendar filled while your internal team focuses on closing.",
    image:
      "https://framerusercontent.com/images/5kTnXZDLQEOHHQwz8HysG8hzB0.png",
  },
  {
    num: "04",
    title: "Inbound Sales",
    desc: "Turn incoming interest into revenue with trained representatives.",
    image:
      "https://framerusercontent.com/images/cIQiz350DxCswpNIm51NlgSBfIk.png",
  },
  {
    num: "05",
    title: "Customer Support",
    desc: "Deliver responsive, professional support that protects your brand.",
    image:
      "https://framerusercontent.com/images/CTEEEg6HAZ6NFgnZ3T0KMzlnh74.png",
  },
  {
    num: "06",
    title: "Specialized Campaigns",
    desc: "Build custom teams for specific business initiatives and goals.",
    image:
      "https://framerusercontent.com/images/II45yOtnPWRqsj3oAfIVoimV9hM.png",
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
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.6 }}
            className="eyebrow eyebrow-dark"
          >
            <EyebrowIcon variant="framer" />
            <span>What We Do</span>
          </motion.div>
          <AnimatedSectionHeading lines={["One Partner For Sales,", "Support, And Growth."]} />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-lead lead-dark"
          >
            Most start with one service and expand within 90 days. A 30-minute call is enough to figure out which one makes sense for you first.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link className="button button-dark btn-fill-hover" href="/contact">
            <span className="btn-fill" aria-hidden="true" />
            <span className="btn-text">Book A Strategy Call</span>
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
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 + index * 0.06 }}
          >
            <div className="service-shell">
              <div
                className="service-media"
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.26)), url("${optimizeBgImage(service.image, 1090)}")`,
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
