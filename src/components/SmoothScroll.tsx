"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reduceMotion.matches) return

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.15,
      easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.15,
      overscroll: false,
      prevent: (node) =>
        node instanceof HTMLElement &&
        Boolean(node.closest("[data-lenis-prevent], .mobile-nav-shell")),
    })

    const scrollToTarget = (target: Element, hash: string) => {
      lenis.scrollTo(target as HTMLElement)
      window.history.pushState(null, "", hash)
    }

    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"], a[href^="/#"]'
      )

      if (!link) return

      const href = link.getAttribute("href")
      if (!href) return

      const hash = href.startsWith("/#") ? href.slice(1) : href
      if (!hash || hash === "#") return

      const targetId = decodeURIComponent(hash.slice(1))
      const target = document.getElementById(targetId)
      if (!target) return

      event.preventDefault()
      scrollToTarget(target, hash)
    }

    document.addEventListener("click", onClick)

    const syncMenuLock = () => {
      if (document.body.classList.contains("nav-menu-open")) {
        lenis.stop()
      } else {
        lenis.start()
      }
    }

    const observer = new MutationObserver(syncMenuLock)
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] })
    syncMenuLock()

    return () => {
      document.removeEventListener("click", onClick)
      observer.disconnect()
      lenis.destroy()
    }
  }, [])

  return null
}
