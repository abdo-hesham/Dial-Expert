"use client"

import { motion, useReducedMotion } from "framer-motion"

type AnimatedSectionHeadingProps = {
  lines: string[]
  className?: string
  as?: "h1" | "h2" | "h3"
  delay?: number
}

export default function AnimatedSectionHeading({
  lines,
  className = "section-heading",
  as = "h2",
  delay = 0,
}: AnimatedSectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion[as]
  const lineStarts = lines.map((_, index) =>
    lines
      .slice(0, index)
      .reduce((total, line) => total + line.split(/\s+/).filter(Boolean).length, 0)
  )

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.55 }}
      variants={{
        hidden: {},
        show: {
          transition: shouldReduceMotion
            ? { duration: 0 }
            : { delayChildren: delay, staggerChildren: 0.16 },
        },
      }}
    >
      {lines.map((line, lineIndex) => {
        const words = line.split(/\s+/).filter(Boolean)

        return (
          <span className="section-heading-line" key={`${line}-${lineIndex}`}>
            {words.map((word, wordIndex) => (
              <motion.span
                className="section-heading-word"
                key={`${lineIndex}-${word}-${wordIndex}`}
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
                          delay: (lineStarts[lineIndex] + wordIndex) * 0.09,
                          ease: [0.22, 1, 0.36, 1],
                        },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        )
      })}
    </MotionTag>
  )
}
