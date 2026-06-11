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
        <link rel="preconnect" href="https://framerusercontent.com" />
        <link rel="preload" as="image" href="https://framerusercontent.com/images/aSGF5PBvDXfvTirXeZzxaND6bcg.png?width=4027&height=848" />
        <link rel="preload" as="video" href="https://framerusercontent.com/assets/hyfo5PQ53wvNBdlUY8WqoWyo41I.mp4" />
        <link rel="preload" as="font" href="https://fonts.cdnfonts.com/s/85546/Satoshi-Black.woff" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="https://fonts.cdnfonts.com/s/85546/Satoshi-Bold.woff" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="https://fonts.cdnfonts.com/s/85546/Satoshi-Regular.woff" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/dialexpert/hero-poster.jpg" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/satoshi" media="print" {...{ "onLoad": "this.media='all'" } as any} />
        <style dangerouslySetInnerHTML={{ __html: "@font-face{font-family:Satoshi;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.cdnfonts.com/s/85546/Satoshi-Black.woff) format('woff')}@font-face{font-family:Satoshi;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.cdnfonts.com/s/85546/Satoshi-Bold.woff) format('woff')}@font-face{font-family:Satoshi;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.cdnfonts.com/s/85546/Satoshi-Regular.woff) format('woff')}" }} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" media="print" {...{ "onLoad": "this.media='all'" } as any} />
        <noscript>
          <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/satoshi" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  )
}
