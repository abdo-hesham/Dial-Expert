export default function wsrvLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  if (src.startsWith("https://framerusercontent.com")) {
    const base = src.split("?")[0]
    const q = quality ?? 80
    return `https://wsrv.nl/?url=${encodeURIComponent(base)}&w=${width}&q=${q}&output=webp`
  }
  return src
}

export function optimizeBgImage(src: string, width: number, quality?: number): string {
  if (src.startsWith("https://framerusercontent.com")) {
    const base = src.split("?")[0]
    const q = quality ?? 70
    return `https://wsrv.nl/?url=${encodeURIComponent(base)}&w=${width}&q=${q}&output=webp`
  }
  return src
}
