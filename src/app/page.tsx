import Navbar from "@/components/Navbar"
import Hero from "@/components/sections/Hero"
import DeferredHomeSections from "@/components/DeferredHomeSections"

export default function Home() {
  return (
    <main className="page overflow-x-hidden w-full max-w-full">
      <Navbar />
      <Hero />
      <DeferredHomeSections />
    </main>
  )
}
