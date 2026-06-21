type BrandLockupProps = {
  className?: string
}

export default function BrandLockup({ className = "" }: BrandLockupProps) {
  return (
    <span className={`brand-lockup ${className}`.trim()}>
      <svg className="brand-lockup-mark" viewBox="0 0 322 404" aria-hidden="true">
        <defs>
          <linearGradient id="brand-lockup-gradient" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0" stopColor="#5DCAA5" />
            <stop offset="0.45" stopColor="#1D9E75" />
            <stop offset="1" stopColor="#0052CC" />
          </linearGradient>
        </defs>
        <path
          d="M321.5 201.88c0 27.25-5.34 53.69-15.88 78.59-10.17 24.04-24.72 45.63-43.25 64.17-18.54 18.53-40.12 33.09-64.17 43.25-11.67 4.93-23.68 8.73-35.95 11.38-13.91 2.99-28.16 4.5-42.64 4.5h-.77v-83.32c-31.74 0-61.59-12.36-84.03-34.81C12.36 263.2 0 233.35 0 201.61s12.36-61.59 34.81-84.03c22.45-22.45 52.29-34.81 84.03-34.81s61.59 12.36 84.03 34.81c17.18 17.18 28.46 38.7 32.8 62.08 1.33 7.16 2.01 14.5 2.01 21.95v21.46H118.85v-43.41h72.16c-9.42-30.92-38.21-53.48-72.18-53.48-41.59 0-75.43 33.84-75.43 75.43s33.84 75.43 75.43 75.43h43.41v77.49c66.74-18.67 115.84-80.03 115.84-152.65 0-87.38-71.1-158.48-158.48-158.48V0c27.25 0 53.69 5.34 78.59 15.87 24.04 10.17 45.63 24.72 64.17 43.26 18.53 18.54 33.09 40.12 43.25 64.17 10.53 24.9 15.88 51.34 15.88 78.59Z"
          fill="url(#brand-lockup-gradient)"
        />
      </svg>
      <span className="brand-lockup-text">Dial Expert</span>
    </span>
  )
}
