"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Play, X } from "lucide-react"

function VideoModal({ close }: { close: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current?.play()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }

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

export default function HeroVideoButton() {
  const [showModal, setShowModal] = useState(false)
  const open = useCallback(() => setShowModal(true), [])
  const close = useCallback(() => setShowModal(false), [])

  return (
    <>
      <button className="btn btn-outline" onClick={open}>
        <Play size={15} strokeWidth={2.5} />
        See How We Operate
      </button>
      {showModal && <VideoModal close={close} />}
    </>
  )
}
