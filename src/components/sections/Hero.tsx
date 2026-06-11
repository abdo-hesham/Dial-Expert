"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

const heroLines = [
  ["MOST", "OUTSOURCING", "FAILS"],
  ["BECAUSE", "THE", "PEOPLE"],
  ["DON'T", "GIVE", "A", "DAMN."],
  ["OURS", "DO."],
]

const heroLineStarts = heroLines.map((_, index) =>
  heroLines.slice(0, index).reduce((total, line) => total + line.length, 0)
)

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="top" className="hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
        poster="/dialexpert/hero-poster.jpg"
        preload="auto"
        {...({ fetchPriority: "high" } as any)}
      >
        <source
          src="https://framerusercontent.com/assets/hyfo5PQ53wvNBdlUY8WqoWyo41I.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-overlay" />
      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.55 }}
          variants={{
            hidden: {},
            show: {
              transition: shouldReduceMotion
                ? { duration: 0 }
                : { staggerChildren: 0.22, delayChildren: 0.18 },
            },
          }}
        >
          <motion.h1
            className="hero-title"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.65 }}
            variants={{
              hidden: {},
              show: {
                transition: shouldReduceMotion
                  ? { duration: 0 }
                  : { staggerChildren: 0.16 },
              },
            }}
          >
            {heroLines.map((line, lineIndex) => (
              <span className="hero-title-line" key={line.join(" ")}>
                {line.map((word, wordIndex) => (
                  <motion.span
                    className="hero-title-word"
                    key={`${lineIndex}-${word}`}
                    variants={{
                      hidden: shouldReduceMotion
                        ? { opacity: 1, y: 0, filter: "blur(0px)" }
                        : { opacity: 0, y: 28, filter: "blur(8px)" },
                      show: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: shouldReduceMotion
                          ? { duration: 0 }
                          : {
                              duration: 1.15,
                              delay: (heroLineStarts[lineIndex] + wordIndex) * 0.09,
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
          </motion.h1>
          <motion.div
            className="hero-body"
            variants={{
              hidden: shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 1, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <p className="hero-sub">
              Outsourcing usually means starting over every few months. With us,
              you start once.
            </p>
            <motion.div
              className="hero-actions"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: shouldReduceMotion ? 0 : 0.55,
              }}
            >
              <Link className="button button-light" href="/contact">
                <span>Let&apos;s Talk</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
