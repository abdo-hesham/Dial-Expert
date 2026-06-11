"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useRef, useState } from "react"

function MarqueeRow({ className, href }: { className: string; href: string }) {
  const words = Array.from({ length: 8 }, (_, index) => (
    <span key={index}>Let&apos;s Talk</span>
  ))

  return (
    <Link className={`marquee-row ${className}`} href={href}>
      <span className="marquee-track">{words}</span>
      <span className="marquee-track" aria-hidden="true">{words}</span>
    </Link>
  )
}

export default function CTA() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null)

  function handleMouseMove(e: React.MouseEvent) {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  function handleMouseLeave() {
    setMousePos(null)
  }

  return (
    <section
      ref={sectionRef}
      className="contact-band"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <MarqueeRow className="marquee-forward" href="/contact" />
      <MarqueeRow className="marquee-reverse" href="/contact" />
      <span
        className="marquee-hover-badge"
        aria-hidden="true"
        style={
          mousePos
            ? { left: mousePos.x, top: mousePos.y, opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
            : undefined
        }
      >
        <ArrowUpRight size={24} strokeWidth={2.5} />
      </span>
    </section>
  )
}
