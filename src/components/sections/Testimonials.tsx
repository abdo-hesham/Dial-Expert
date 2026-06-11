"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section testimonials-section testimonials-framer"
    >
      <motion.div
        className="testimonials-framer-inner"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.24 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="eyebrow testimonials-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <motion.span
            animate={{ rotate: [134, 179, 134] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="testimonials-eyebrow-icon"
          >
            <EyebrowIcon variant="framer" />
          </motion.span>
          <span>We&apos;ll keep it simple</span>
        </motion.div>

        <AnimatedSectionHeading
          className="testimonials-framer-heading"
          lines={[
            "We're not going to ask you",
            "to trust a quote from a name you can't verify.",
          ]}
        />

        <motion.p
          className="testimonials-framer-copy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, delay: 1.45, ease: "easeOut" }}
        >
          Instead, through our revenue share program, our pay is tied to your
          results.
          <br />
          You run the account, we run the floor, and the economics reflect what
          actually happens.
        </motion.p>

        <motion.div
          className="testimonials-actions"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, delay: 0.5, ease: "easeOut" }}
        >
          <Link className="revenue-share-button" href="/contact">
            <span className="revenue-share-fill" aria-hidden="true" />
            <span className="revenue-share-text">
              Talk to us about revenue share
            </span>
            <span className="revenue-share-icon" aria-hidden="true">
              <ArrowRight size={18} strokeWidth={3} />
            </span>
          </Link>

          <motion.p
            className="testimonials-note"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 1.65, ease: "easeOut" }}
          >
            Available to qualifying clients &middot; Discussed on the 30-min call
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
