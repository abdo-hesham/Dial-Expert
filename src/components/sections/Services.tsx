"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

const services = [
  {
    num: "01",
    title: "Outbound Sales",
    desc: "Build a team that follows up consistently without the burden of internal hiring.",
  },
  {
    num: "02",
    title: "Lead Generation",
    desc: "Qualify opportunities and create a stronger pipeline for your business.",
  },
  {
    num: "03",
    title: "Appointment Setting",
    desc: "Keep your calendar filled while your internal team focuses on closing.",
  },
  {
    num: "04",
    title: "Inbound Sales",
    desc: "Turn incoming interest into revenue with trained representatives.",
  },
  {
    num: "05",
    title: "Customer Support",
    desc: "Deliver responsive, professional support that protects your brand.",
  },
  {
    num: "06",
    title: "Specialized Campaigns",
    desc: "Build custom teams for specific business initiatives and goals.",
  },
]

export default function WhatWeDo() {
  return (
    <section id="services" className="section section-dark services-section">
      <div className="section-head center">
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
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={service.num}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 + index * 0.06 }}
          >
            <span className="service-card-num">{service.num}</span>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-desc">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="services-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, delay: 0.45 }}
      >
        <Link className="button button-dark btn-fill-hover" href="/contact">
          <span className="btn-fill" aria-hidden="true" />
          <span className="btn-text">Book A Strategy Call</span>
        </Link>
      </motion.div>
    </section>
  )
}
