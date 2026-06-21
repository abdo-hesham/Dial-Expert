"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import BrandLockup from "./BrandLockup"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/#who-we-are" },
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [overHero, setOverHero] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const THRESHOLD = 60
    let lastScrollY = window.scrollY

    const onScroll = () => {
      const currentScrollY = window.scrollY
      const hero = document.querySelector<HTMLElement>(".hero")
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 0
      const isOverHero = hero ? currentScrollY < heroBottom - 96 : currentScrollY <= THRESHOLD

      setOverHero(isOverHero)
      setScrolled(!isOverHero)

      if (isOverHero) {
        setHidden(false)
      } else if (currentScrollY > lastScrollY) {
        setHidden(true)
      } else if (currentScrollY < lastScrollY) {
        setHidden(false)
      }

      lastScrollY = currentScrollY
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", menuOpen)
    return () => document.body.classList.remove("nav-menu-open")
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`topbar${overHero ? " over-hero" : ""}${scrolled ? " scrolled" : ""}${hidden && !menuOpen ? " hidden" : ""}${menuOpen ? " menu-open" : ""}`}>
      <div className="topbar-inner">
        <Link className="brand" href="/" aria-label="Dial Expert home" onClick={closeMenu}>
          <BrandLockup />
        </Link>

        <nav className="topnav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-light topbar-cta" href="/contact" onClick={closeMenu}>
          <span>Let&apos;s Talk</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Open navigation menu"
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-hidden={menuOpen}
          tabIndex={menuOpen ? -1 : 0}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="mobile-nav-shell" id="mobile-navigation" aria-hidden={!menuOpen}>
        <button
          className="mobile-menu-close"
          type="button"
          aria-label="Close navigation menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        >
          <span />
          <span />
        </button>

        <Link className="mobile-menu-brand" href="/" aria-label="Dial Expert home" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>
          <BrandLockup />
        </Link>

        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-light mobile-menu-cta" href="/contact" tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>
          <span>Let&apos;s Talk</span>
        </Link>
      </div>
    </header>
  )
}
