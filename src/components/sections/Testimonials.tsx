"use client"

import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { motion } from "framer-motion"
import EyebrowIcon from "../EyebrowIcon"
import AnimatedSectionHeading from "../AnimatedSectionHeading"

const headingLines = [
  "Forget The Testimonials.",
  "We'd Rather Have Skin In The Game.",
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section testimonials-framer">
      <motion.div
        className="testimonials-framer-inner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.55 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <motion.div
          className="eyebrow testimonials-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
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
          <span>PROOF OVER PRAISE</span>
        </motion.div>

        <AnimatedSectionHeading
          className="testimonials-framer-heading"
          lines={headingLines}
          delay={0.12}
        />

        <motion.p
          className="testimonials-framer-copy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          Anyone can paste a wall of five-star quotes from people you&apos;ll
          never meet. We&apos;d rather make you a promise we have to keep: a
          revenue share model where{" "}
          <span className="sparkle-text sparkle-text-dark">
            what we earn depends on what you earn.
          </span>
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-6 mt-10 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="flex flex-row max-md:flex-col items-center justify-center gap-5 max-md:gap-3 w-full max-w-md mx-auto">
            {[
              "Our pay is tied to your results",
              "You run the account",
              "We run the floor",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <Check size={14} strokeWidth={3.5} className="text-[var(--blue)] shrink-0" />
                <span className="text-white/80 text-[15px] font-medium leading-snug whitespace-nowrap">
                  {text}
                </span>
              </div>
            ))}
          </div>
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
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            Available to qualifying clients &middot; Discussed on the 30-min call
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
