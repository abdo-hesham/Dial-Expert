import type { CSSProperties } from "react"
import Link from "next/link"
import HeroVideoButton from "../HeroVideoButton"

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

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-frame">
        <div className="hero-panel">
          <picture>
            <source
              srcSet="/dialexpert/hero-mobile.webp"
              media="(max-width: 760px)"
              type="image/webp"
            />
            <img
              src="/dialexpert/hero-desktop.webp"
              alt=""
              className="hero-bg"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
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
                <HeroVideoButton />
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
    </section>
  )
}
