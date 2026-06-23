import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dial Expert",
  description:
    "Outsourced sales, support, and revenue teams that keep campaigns moving.",
  icons: {
    icon: [
      { url: "/favicon-dial/favicon.ico", sizes: "any" },
      { url: "/favicon-dial/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-dial/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon-dial/apple-touch-icon.png",
  },
  manifest: "/favicon-dial/site.webmanifest",
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
