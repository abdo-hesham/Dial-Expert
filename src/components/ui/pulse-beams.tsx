"use client"

import { motion, type Transition } from "framer-motion"
import { cn } from "@/lib/utils"

export interface BeamPath {
  path: string
  gradientConfig: {
    initial: { x1: string; x2: string; y1: string; y2: string }
    animate: {
      x1: string | string[]
      x2: string | string[]
      y1: string | string[]
      y2: string | string[]
    }
    transition?: Transition
  }
  connectionPoints?: Array<{ cx: number; cy: number; r: number }>
}

interface PulseBeamsProps {
  children?: React.ReactNode
  className?: string
  background?: React.ReactNode
  beams: BeamPath[]
  width?: number
  height?: number
  gradientColors?: { start: string; middle: string; end: string }
}

export function PulseBeams({
  children,
  className,
  background,
  beams,
  width = 858,
  height = 434,
  gradientColors,
}: PulseBeamsProps) {
  return (
    <div
      className={cn(
        "w-full relative flex items-center justify-center antialiased overflow-hidden",
        className
      )}
    >
      {background}
      <div className="relative z-10 w-full">{children}</div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <SVGs
          beams={beams}
          width={width}
          height={height}
          gradientColors={gradientColors}
        />
      </div>
    </div>
  )
}

function SVGs({
  beams,
  width,
  height,
  gradientColors,
}: {
  beams: BeamPath[]
  width: number
  height: number
  gradientColors?: { start: string; middle: string; end: string }
}) {
  const colors = gradientColors || {
    start: "#3B82F6",
    middle: "#2563EB",
    end: "#1D4ED8",
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
      style={{ width: "100%", height: "100%", maxWidth: width, maxHeight: height }}
    >
      {beams.map((beam, index) => (
        <g key={index}>
          <path d={beam.path} stroke="rgba(59,130,246,0.08)" strokeWidth="1" />
          <path
            d={beam.path}
            stroke={`url(#grad${index})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {beam.connectionPoints?.map((point, pi) => (
            <circle
              key={`${index}-${pi}`}
              cx={point.cx}
              cy={point.cy}
              r={point.r}
              fill="rgba(59,130,246,0.15)"
              stroke="rgba(59,130,246,0.3)"
            />
          ))}
        </g>
      ))}
      <defs>
        {beams.map((beam, index) => (
          <motion.linearGradient
            key={index}
            id={`grad${index}`}
            gradientUnits="userSpaceOnUse"
            initial={beam.gradientConfig.initial}
            animate={beam.gradientConfig.animate}
            transition={beam.gradientConfig.transition}
          >
            <stop offset="0%" stopColor={colors.start} stopOpacity="0" />
            <stop offset="20%" stopColor={colors.start} stopOpacity="1" />
            <stop offset="50%" stopColor={colors.middle} stopOpacity="1" />
            <stop offset="100%" stopColor={colors.end} stopOpacity="0" />
          </motion.linearGradient>
        ))}
      </defs>
    </svg>
  )
}
