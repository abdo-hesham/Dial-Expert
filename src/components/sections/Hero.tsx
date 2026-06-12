import type { CSSProperties } from "react"
import Link from "next/link"

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
  return (
    <section id="top" className="hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src="https://framerusercontent.com/assets/hyfo5PQ53wvNBdlUY8WqoWyo41I.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-copy">
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
          <div className="hero-body">
            <p className="hero-sub">
              Outsourcing usually means starting over every few months. With us,
              you start once.
            </p>
            <div className="hero-actions">
              <Link className="button button-light" href="/contact">
                <span>Let&apos;s Talk</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
