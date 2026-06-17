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
        <link rel="preconnect" href="https://framerusercontent.com" />
        <link rel="preconnect" href="https://assets.framer.com" />
        <link rel="dns-prefetch" href="https://framerusercontent.com" />
        <link rel="dns-prefetch" href="https://assets.framer.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
