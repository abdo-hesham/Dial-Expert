"use client"

type EyebrowIconProps = {
  variant?: "default" | "framer"
}

export default function EyebrowIcon({ variant = "default" }: EyebrowIconProps) {
  if (variant === "framer") {
    const framerSvgAttrs: Record<string, string> = {
      parentsize: "0",
      _constraints: "[object Object]",
      rotation: "0",
      shadows: "",
    }

    return (
      <>
        <svg width="0" height="0" aria-hidden="true" focusable="false">
          <symbol id="svg143436285_354" viewBox="0 0 20 20">
            <path
              d="M10 0L12.05 7.95L20 10L12.05 12.05L10 20L7.95 12.05L0 10L7.95 7.95L10 0Z"
              fill="currentColor"
            />
          </symbol>
        </svg>
        <div
          className="eyebrow-icon eyebrow-icon-framer framer-ykrd59"
          data-framer-name="Icon"
          style={{
            opacity: 1,
            transform: "rotate(360deg)",
            willChange: "transform",
          }}
        >
          <div
            data-framer-component-type="SVG"
            {...framerSvgAttrs}
            className="framer-11vq1ju"
            aria-hidden="true"
            style={{ imageRendering: "pixelated", flexShrink: 0 }}
          >
            <div
              className="svgContainer"
              style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}
            >
              <svg
                style={{ width: "100%", height: "100%" }}
                preserveAspectRatio="none"
                width="100%"
                height="100%"
              >
                <use href="#svg143436285_354"></use>
              </svg>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <span className="eyebrow-icon">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L13.09 8.26L18 6L14.5 10.5L20 12L14.5 13.5L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.5 13.5L4 12L9.5 10.5L6 6L10.91 8.26L12 2Z"
          fill="currentColor"
        />
      </svg>
    </span>
  )
}
