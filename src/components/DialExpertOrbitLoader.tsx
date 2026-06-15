"use client"

import { useEffect, useMemo, useRef, useState } from "react"

const PHOTOS = Array.from(
  { length: 16 },
  (_, i) => `/loader/assets/employees/s${String(i + 1).padStart(2, "0")}.jpg`
)

const ORBIT_MS = 1500
const CONV_MS = 700
const HOLD_MS = 1000
const FADE_MS = 720
const CONV_END = ORBIT_MS + CONV_MS
const HOLD_END = CONV_END + HOLD_MS
const TOTAL_MS = HOLD_END + FADE_MS

export default function DialExpertOrbitLoader() {
  const [ms, setMs] = useState(0)
  const [done, setDone] = useState(false)
  const [mounted, setMounted] = useState(false)
  const rafRef = useRef(0)
  const t1Ref = useRef(0)
  const t2Ref = useRef(0)
  const mountedRef = useRef(true)

  useEffect(() => {
    setMounted(true)
    PHOTOS.forEach((src) => { const img = new Image(); img.src = src })

    document.body.classList.add("loader-active")
    mountedRef.current = true

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (isReduced) {
      setMs(CONV_END)
      t1Ref.current = window.setTimeout(() => {
        setMs(HOLD_END)
      }, 1200)
      t2Ref.current = window.setTimeout(() => {
        if (mountedRef.current) {
          setDone(true)
          document.body.classList.remove("loader-active")
        }
      }, 1400)
    } else {
      const start = performance.now()

      const tick = (now: number) => {
        if (!mountedRef.current) return
        const elapsed = Math.min(now - start, TOTAL_MS)
        setMs(elapsed)
        if (elapsed >= TOTAL_MS) {
          setDone(true)
          document.body.classList.remove("loader-active")
          return
        }
        rafRef.current = requestAnimationFrame(tick)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    return () => {
      mountedRef.current = false
      cancelAnimationFrame(rafRef.current)
      clearTimeout(t1Ref.current)
      clearTimeout(t2Ref.current)
      document.body.classList.remove("loader-active")
    }
  }, [])

  const orbitItems = useMemo(() => {
    const clamp = (x: number, a = 0, b = 1) => Math.max(a, Math.min(b, x))

    const angVel = (1.5 * Math.PI * 2) / ORBIT_MS
    const ang = angVel * ms

    const convP = clamp((ms - ORBIT_MS) / CONV_MS)
    const easeIn = convP * convP
    const radiusF = 1 - easeIn

    const minVp = mounted
      ? Math.min(window.innerWidth, window.innerHeight)
      : 800
    const R = clamp(minVp * 0.24, 90, 240)
    const N = PHOTOS.length
    const spacing = (2 * Math.PI * R) / N
    const sz = Math.min(72, spacing * 0.72, Math.max(34, minVp * 0.07))

    return PHOTOS.map((src, i) => {
      const a = (i / N) * Math.PI * 2 + ang
      const r = R * radiusF
      const x = Math.cos(a) * r
      const y = Math.sin(a) * r
      const sc = 1 - easeIn * 0.84
      const op = 1 - easeIn
      const depth = (Math.sin(a) + 1) / 2
      const z = 10 + Math.round(depth * 60)

      return {
        src,
        x: x.toFixed(2),
        y: y.toFixed(2),
        sc: sc.toFixed(3),
        op: op.toFixed(3),
        sz: sz.toFixed(1),
        z,
      }
    })
  }, [ms, mounted])

  const fading = ms >= HOLD_END
  const logoOn = ms >= CONV_END

  const pulseWin = 420
  const pulseStart = HOLD_END - pulseWin
  let pulseScale = 1
  if (ms >= pulseStart && ms < HOLD_END) {
    const p = (ms - pulseStart) / pulseWin
    pulseScale = 1 + 0.09 * Math.sin(p * Math.PI)
  }

  const loadP = Math.min(ms / CONV_END, 1)
  const loadPct = Math.round(loadP * 100)

  if (done) return null

  return (
    <div
      className={"dial-loader" + (fading ? " is-fading" : "")}
      aria-label="Loading Dial Expert"
      role="status"
    >
      <div className="dial-loader-ambient" />
      <div className={"dial-loader-core-glow" + (logoOn ? " is-visible" : "")} />

      <div className="dial-loader-orbit" aria-hidden="true">
        {orbitItems.map((item) => (
          <div
            key={item.src}
            className="dial-loader-avatar"
            style={{
              width: item.sz + "px",
              height: item.sz + "px",
              marginTop: (-parseFloat(item.sz) / 2).toFixed(1) + "px",
              marginLeft: (-parseFloat(item.sz) / 2).toFixed(1) + "px",
              transform: "translate(" + item.x + "px," + item.y + "px) scale(" + item.sc + ")",
              opacity: item.op,
              zIndex: item.z,
              backgroundImage: 'url("' + item.src + '")',
            }}
          />
        ))}
      </div>

      <div
        className={"dial-loader-lockup" + (logoOn ? " is-visible" : "")}
        style={{ transform: "translate(-50%,-50%) scale(" + pulseScale.toFixed(3) + ")" }}
      >
        <svg className="dial-loader-mark" viewBox="0 0 321.5 403.77" aria-hidden="true">
          <defs>
            <linearGradient id="dial-loader-mark-gradient" x1="0" y1="0" x2="0.3" y2="1">
              <stop offset="0" stopColor="#5DCAA5" />
              <stop offset="0.45" stopColor="#1D9E75" />
              <stop offset="1" stopColor="#0052CC" />
            </linearGradient>
          </defs>
          <path
            d="M321.5,201.88c0,27.25-5.34,53.69-15.88,78.59-10.17,24.04-24.72,45.63-43.25,64.17-18.54,18.53-40.12,33.09-64.17,43.25-11.67,4.93-23.68,8.73-35.95,11.38-13.91,2.99-28.16,4.5-42.64,4.5h-.77v-83.32c-31.74,0-61.59-12.36-84.03-34.81C12.36,263.2,0,233.35,0,201.61s12.36-61.59,34.81-84.03c22.45-22.45,52.29-34.81,84.03-34.81s61.59,12.36,84.03,34.81c17.18,17.18,28.46,38.7,32.8,62.08,1.33,7.16,2.01,14.5,2.01,21.95v21.46h-118.83v-43.41h72.16c-9.42-30.92-38.21-53.48-72.18-53.48-41.59,0-75.43,33.84-75.43,75.43s33.84,75.43,75.43,75.43h43.41v77.49c66.74-18.67,115.84-80.03,115.84-152.65,0-87.38-71.1-158.48-158.48-158.48V0c27.25,0,53.69,5.34,78.59,15.87,24.04,10.17,45.63,24.72,64.17,43.26,18.53,18.54,33.09,40.12,43.25,64.17,10.53,24.9,15.88,51.34,15.88,78.59Z"
            fill="url(#dial-loader-mark-gradient)"
          />
        </svg>
        <div className="dial-loader-wordmark">Dial Expert</div>
        <div className="dial-loader-tagline">For The Few</div>
      </div>

      <div className={"dial-loader-progress" + (logoOn ? " is-hidden" : "")}>
        <div className="dial-loader-track">
          <div
            className="dial-loader-fill"
            style={{ width: (loadP * 100).toFixed(1) + "%" }}
          />
        </div>
        <div className="dial-loader-percent">Loading {loadPct}%</div>
      </div>
    </div>
  )
}
