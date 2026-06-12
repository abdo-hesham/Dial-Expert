"use client"

import Link from "next/link"
import { ArrowRight, Hand } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import EyebrowIcon from "../EyebrowIcon"

const headingLines = [
  "We're not going to ask you",
  "to trust a quote from a name you can't verify.",
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [introActive, setIntroActive] = useState(false)
  const [introComplete, setIntroComplete] = useState(false)
  const contentDelay = 3.15
  const wordsBeforeLine = headingLines.map((_, index) =>
    headingLines
      .slice(0, index)
      .reduce((total, line) => total + line.split(/\s+/).filter(Boolean).length, 0)
  )

  useEffect(() => {
    let completeTimer = 0
    let frame = 0
    let pollTimer = 0

    const startIntro = () => {
      window.clearTimeout(completeTimer)
      setIntroActive(true)
      setIntroComplete(false)
      completeTimer = window.setTimeout(() => setIntroComplete(true), 3150)
    }

    const checkSection = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const entersViewport =
        rect.top < window.innerHeight &&
        rect.bottom > 0

      if (entersViewport) {
        setIntroActive((wasActive) => {
          if (!wasActive) {
            startIntro()
          }

          return true
        })
      } else {
        window.clearTimeout(completeTimer)
        setIntroActive(false)
        setIntroComplete(false)
      }
    }

    const scheduleCheck = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(checkSection)
    }

    scheduleCheck()
    pollTimer = window.setInterval(scheduleCheck, 120)
    window.setTimeout(() => window.clearInterval(pollTimer), 2400)
    window.addEventListener("scroll", scheduleCheck, { passive: true })
    window.addEventListener("resize", scheduleCheck)

    return () => {
      window.clearTimeout(completeTimer)
      window.clearInterval(pollTimer)
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", scheduleCheck)
      window.removeEventListener("resize", scheduleCheck)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={`section testimonials-section testimonials-framer${
        introActive ? " testimonial-intro-active" : ""
      }${
        introComplete ? " testimonial-intro-complete" : ""
      }`}
    >
      <div
        className="testimonial-intro-stage"
        aria-hidden="true"
      >
        <div className="testimonial-intro-lockup">
          <div className="testimonial-intro-word">
            <span>Testimonials?</span>
            <span className="testimonial-intro-wipe" />
          </div>

          <div className="testimonial-hand-orb">
            <span className="testimonial-orb-no">
              No
            </span>
            <span className="testimonial-hand-wave">
              <Hand size={34} strokeWidth={2.6} />
            </span>
          </div>
        </div>
      </div>

      <motion.div
        className="testimonials-framer-inner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.55 }}
        transition={{ duration: 0.2, delay: contentDelay }}
      >
        <motion.div
          className="eyebrow testimonials-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 0.55, delay: contentDelay, ease: "easeOut" }}
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

        <motion.h2
          className="testimonials-framer-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.55 }}
          variants={{
            hidden: {},
            show: {
              transition: { delayChildren: contentDelay + 0.12, staggerChildren: 0.055 },
            },
          }}
        >
          {headingLines.map((line, lineIndex) => (
            <span className="section-heading-line" key={line}>
              {line.split(/\s+/).filter(Boolean).map((word, wordIndex) => (
                <motion.span
                  className="section-heading-word"
                  key={`${lineIndex}-${word}-${wordIndex}`}
                  variants={{
                    hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.82,
                        delay: (wordsBeforeLine[lineIndex] + wordIndex) * 0.018,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h2>

        <motion.p
          className="testimonials-framer-copy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.65, delay: contentDelay + 0.7, ease: "easeOut" }}
        >
          Instead, through our{" "}
          <span className="sparkle-text sparkle-text-dark">
            revenue share program
          </span>
          , our pay is tied to your results.
          <br />
          You run the account, we run the floor, and the economics reflect what
          actually happens.
        </motion.p>

        <motion.div
          className="testimonials-actions"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.65, delay: contentDelay + 0.92, ease: "easeOut" }}
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
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.55, delay: contentDelay + 1.1, ease: "easeOut" }}
          >
            Available to qualifying clients &middot; Discussed on the 30-min call
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
