import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dial Expert",
  description:
    "Outsourced sales, support, and revenue teams that keep campaigns moving.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="https://framerusercontent.com/images/aSGF5PBvDXfvTirXeZzxaND6bcg.png?width=4027&height=848" />
        <link rel="preload" as="video" href="https://framerusercontent.com/assets/hyfo5PQ53wvNBdlUY8WqoWyo41I.mp4" />
        <link rel="preconnect" href="https://framerusercontent.com" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/satoshi" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  )
}
