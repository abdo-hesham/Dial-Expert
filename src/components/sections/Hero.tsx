"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import type { CSSProperties } from "react"
import Link from "next/link"
import Image from "next/image"
import { Play, X } from "lucide-react"

const heroLines = [
  ["Build", "a", "Revenue", "Team"],
  ["Without", "Building", "a", "Call", "Center."],
]

const heroLineStarts = heroLines.map((_, index) =>
  heroLines.slice(0, index).reduce((total, line) => total + line.length, 0)
)

const metrics = [
  { value: "7+", label: "Years\nOperating" },
  { value: "250+", label: "Team\nMembers" },
  { value: "20+", label: "Managers" },
  { value: "$300M+", label: "Revenue\nGenerated" },
]

function VideoModal({ close }: { close: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current?.play()
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [close])

  return (
    <div className="hero-modal-overlay" onClick={close}>
      <div className="hero-modal" onClick={(e) => e.stopPropagation()}>
        <button className="hero-modal-close" onClick={close} aria-label="Close">
          <X size={24} strokeWidth={2} />
        </button>
        <video
          ref={videoRef}
          src="https://framerusercontent.com/assets/hyfo5PQ53wvNBdlUY8WqoWyo41I.mp4"
          controls
          playsInline
          className="hero-modal-video"
        />
      </div>
    </div>
  )
}

export default function Hero() {
  const [showModal, setShowModal] = useState(false)
  const open = useCallback(() => setShowModal(true), [])
  const close = useCallback(() => setShowModal(false), [])

  return (
    <section id="top" className="hero">
      <div className="hero-frame">
        <div className="hero-panel">
          <Image
            src="https://framerusercontent.com/images/eySk8pJlPyuhtdhXTU7FZFdCs0.jpg?width=5472&height=3648"
            alt=""
            fill
            className="hero-bg"
            sizes="100vw"
            priority
          />
          <div className="hero-bg-blend" />
          <div className="hero-content">
            <div className="hero-main">
              <h1 className="hero-title">
                {heroLines.map((line, lineIndex) => (
                  <span className="hero-title-line" key={line.join(" ")}>
                    {line.map((word, wordIndex) => (
                      <span
                        className="hero-title-word"
                        key={`${lineIndex}-${wordIndex}-${word}`}
                        style={
                          {
                            "--word-delay": `${(heroLineStarts[lineIndex] + wordIndex) * 90}ms`,
                          } as CSSProperties
                        }
                      >
                        {word}
                      </span>
                    ))}
                  </span>
                ))}
              </h1>
              <p className="hero-sub">
                Sales, customer support, appointment setting, and lead generation
                teams recruited, trained, and managed by DialExpert so you can
                scale without the hiring headaches.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/contact">
                  Book A Strategy Call
                </Link>
                <button className="btn btn-outline" onClick={open}>
                  <Play size={15} strokeWidth={2.5} />
                  See How We Operate
                </button>
              </div>
            </div>
            <div className="hero-metrics">
              {metrics.map((m) => (
                <div key={m.value} className="hero-metric">
                  <span className="hero-metric-value">{m.value}</span>
                  <span className="hero-metric-label">
                    {m.label.split("\n").map((line, i) => (
                      <span key={i}>{line}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showModal && <VideoModal close={close} />}
    </section>
  )
}
