import type { CSSProperties } from "react";
import Link from "next/link";

const heroLines = [
  ["BUILD", "A", "REVENUE", "TEAM"],
  ["WITHOUT", "BUILDING", "A"],
  ["CALL", "CENTER."],
];

const heroLineStarts = heroLines.map((_, index) =>
  heroLines.slice(0, index).reduce((total, line) => total + line.length, 0),
);

export default function Hero() {
  return (
    <section id="top" className="hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
        preload="none"
        poster="/dialexpert/hero-poster.jpg"
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
              Sales, customer support, appointment setting, and lead generation
              teams&mdash;recruited, trained, and managed by DialExpert so you
              can scale without the hiring headaches.
            </p>
            <div className="hero-actions">
              <Link className="button button-light" href="/contact">
                <span>Book A Strategy Call</span>
              </Link>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-row">
                <span>7+ Years Operating</span>
                <span className="hero-trust-dot" aria-hidden="true" />
                <span>250+ Team Members</span>
              </div>
              <div className="hero-trust-row">
                <span>20+ Managers</span>
                <span className="hero-trust-dot" aria-hidden="true" />
                <span>$300M+ Revenue Generated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
