import type { Metadata } from "next"
import "@fontsource-variable/inter"
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
      <body>{children}</body>
    </html>
  )
}
