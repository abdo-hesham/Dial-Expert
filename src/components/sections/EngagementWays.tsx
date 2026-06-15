"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

const engagementWays = [
  {
    num: "01",
    title: "Revenue Share",
    copy:
      "Best when you want our pay tied to your results. We carry more of the risk; the upside is indexed to what the floor actually produces.",
    image:
      "https://framerusercontent.com/images/USdkaFsd9cz1KsNBgFTMErZtIA.jpg?width=6240&height=4160",
    alt: "Market trading chart with candlesticks and moving average lines",
  },
  {
    num: "02",
    title: "Dedicated seats",
    copy:
      "Best when you want a fixed team trained on your offer. You get predictable capacity, reporting, and a floor that stays close to your playbook.",
    image:
      "https://framerusercontent.com/images/eySk8pJlPyuhtdhXTU7FZFdCs0.jpg?width=5472&height=3648",
    alt: "Open office sales floor with teams working at rows of desks",
  },
]

export default function EngagementWays() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="section section-white engage-section">
      <div className="engage-head">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          <EyebrowIcon variant="framer" />
          <span>How We Engage</span>
        </motion.div>

        <AnimatedSectionHeading
          lines={["Three ways to run this.", "Pick the one that fits."]}
        />

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-lead engage-lead"
        >
          We sort out which on the call. Most clients know where they land
          before they sign, figure out yours now.
        </motion.p>
      </div>

      <div className="engage-card-grid">
        {engagementWays.map((way, index) => (
          <motion.div
            key={way.num}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.28 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.72,
              delay: shouldReduceMotion ? 0 : index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="engage-card-motion"
          >
            <Link className="engage-card" href="/contact">
              <figure className="engage-card-media">
                <Image
                  src={way.image}
                  alt={way.alt}
                  fill
                  sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1200px) calc((100vw - 96px) / 2), 624px"
                  className="engage-card-image"
                />
                <span className="engage-card-crop engage-card-crop-left" />
                <span className="engage-card-crop engage-card-crop-right" />
              </figure>
              <div className="engage-card-copy">
                <div className="engage-card-title">
                  <span>{way.num}</span>
                  <h3>{way.title}</h3>
                </div>
                <p>{way.copy}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
