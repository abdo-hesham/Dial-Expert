"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion, useAnimationControls, useInView, useReducedMotion } from "framer-motion"

type Props = {
  textBefore: string
  words: string[]
  textColor?: string
  markerColor?: string
  markerColors?: string[]
  className?: string
}

const wait = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms))
const nextFrame = () => new Promise((resolve) => window.requestAnimationFrame(resolve))
const sweepEase = [0.65, 0, 0.35, 1] as const
const visibleDelay = 520
const coveredSwapDelay = 45
const sweepDuration = 0.52

export default function HighlightMarkerTextReveal({
  textBefore,
  words,
  textColor = "#000000",
  markerColor = "rgb(17, 172, 183)",
  markerColors,
  className = "",
}: Props) {
  const reduceMotion = useReducedMotion()
  const controls = useAnimationControls()
  const markerRef = useRef<HTMLHeadingElement | null>(null)
  const isInView = useInView(markerRef, { once: false, amount: 0.45 })
  const safeWords = useMemo(
    () => (words.length > 0 ? words : ["It's consistency that converts."]),
    [words]
  )
  const colorPalette = useMemo(
    () =>
      markerColors && markerColors.length > 0
        ? markerColors
        : [markerColor, "rgb(35, 112, 255)", "rgb(17, 172, 183)", "rgb(0, 83, 255)"],
    [markerColor, markerColors]
  )
  const [index, setIndex] = useState(0)
  const colorStep = useRef(0)

  useEffect(() => {
    if (!isInView) {
      controls.stop()
      setIndex(0)
      controls.set({
        backgroundColor: colorPalette[0],
        scaleX: 0,
        opacity: 1,
      })
      return
    }

    if (reduceMotion || safeWords.length < 2) {
      return
    }

    let cancelled = false

    async function runSequence() {
      controls.set({
        backgroundColor: colorPalette[0],
        scaleX: 0,
        opacity: 1,
      })

      let step = 1

      while (!cancelled) {
        await wait(visibleDelay)
        if (cancelled) break

        colorStep.current = step
        const nextColor = colorPalette[colorStep.current % colorPalette.length]
        controls.set({
          backgroundColor: nextColor,
          scaleX: 0,
          opacity: 1,
        })

        await controls.start({
          scaleX: 1,
          opacity: 1,
          transition: { duration: sweepDuration, ease: sweepEase },
        })
        if (cancelled) break

        setIndex((current) => (current + 1) % safeWords.length)
        await nextFrame()

        await wait(coveredSwapDelay)
        if (cancelled) break

        await controls.start({
          scaleX: 0,
          opacity: 1,
          transition: { duration: sweepDuration, ease: sweepEase },
        })
        if (cancelled) break

        controls.set({ scaleX: 0, opacity: 1 })
        step += 1
      }
    }

    runSequence()

    return () => {
      cancelled = true
      controls.stop()
    }
  }, [colorPalette, controls, isInView, reduceMotion, safeWords.length])

  const currentWord = safeWords[index]

  return (
    <h3
      ref={markerRef}
      className={`marker-reveal ${className}`.trim()}
      aria-label={`${textBefore} ${currentWord}`}
    >
      <span className="marker-reveal-line">{textBefore}</span>
      <span className="marker-reveal-word" aria-hidden="true">
        <span className="marker-reveal-word-sizer">
          {safeWords.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </span>
        <span className="marker-reveal-word-text">{currentWord}</span>
        <motion.span
          animate={controls}
          className="marker-reveal-bar"
          initial={{ scaleX: 0, opacity: 1 }}
          style={{
            backgroundColor: colorPalette[0],
            bottom: "-0.08em",
            left: "-0.16em",
            pointerEvents: "none",
            position: "absolute",
            right: "-0.16em",
            top: "-0.1em",
            transformOrigin: "left center",
            willChange: "transform",
            zIndex: 3,
          }}
        />
      </span>

      <style jsx>{`
        .marker-reveal {
          display: grid;
          justify-items: center;
          gap: 0.02em;
          margin: 0;
          color: ${textColor};
          font-family: "General Sans", "Inter", Arial, Helvetica, sans-serif;
          font-size: 64px;
          line-height: 125%;
          font-weight: 700;
          font-style: normal;
          text-align: center;
          letter-spacing: -1.8px;
        }

        .marker-reveal-line,
        .marker-reveal-word {
          display: inline-block;
        }

        .marker-reveal-word {
          position: relative;
          display: inline-grid;
          justify-items: center;
          overflow: hidden;
          white-space: nowrap;
          padding: 0.08em 0.16em 0.1em;
          margin-top: -0.01em;
          margin-bottom: -0.01em;
          vertical-align: bottom;
        }

        .marker-reveal-word-sizer {
          display: grid;
          grid-area: 1 / 1;
          opacity: 0;
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
        }

        .marker-reveal-word-sizer span {
          grid-area: 1 / 1;
          white-space: nowrap;
        }

        .marker-reveal-word-text {
          grid-area: 1 / 1;
          display: inline-block;
        }

        .marker-reveal-bar {
          display: block;
          grid-area: 1 / 1;
        }

        @media (max-width: 1200px) {
          .marker-reveal {
            font-size: clamp(34px, 5.8vw, 56px);
            line-height: 1.16;
            letter-spacing: 0;
          }
        }

        @media (max-width: 760px) {
          .marker-reveal {
            max-width: calc(100vw - 36px);
            gap: 0.08em;
            font-size: clamp(20px, 6.4vw, 28px);
            line-height: 1.16;
          }

          .marker-reveal-word {
            max-width: 100%;
            white-space: normal;
          }

          .marker-reveal-word-sizer,
          .marker-reveal-word-sizer span {
            white-space: normal;
          }

          .marker-reveal-word-text {
            max-width: 100%;
          }
        }
      `}</style>
    </h3>
  )
}
