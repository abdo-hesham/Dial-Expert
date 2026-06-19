"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

export default function CTA() {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-24 overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/70" />
      </div>
      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Beam glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at 50% 20%, rgba(59,130,246,0.08), transparent 50%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1728px] px-[96px]">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <EyebrowIcon variant="framer" />
            <span className="text-[18px] font-medium text-white/60">
              Let&apos;s Talk
            </span>
          </div>

          <AnimatedSectionHeading
            className="section-heading text-white"
            lines={["Ready To Build A Team", "That Performs?"]}
          />

          <p className="mx-auto mt-6 max-w-3xl text-white/50 text-[17px] font-medium leading-relaxed">
            Whether you are scaling your internal team, replacing an
            underperforming provider, or looking for a better way to handle sales
            and support, DialExpert can help you build the operation behind your
            growth.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#0a0a0a] font-semibold text-base hover:bg-white/90 transition-all active:scale-95"
            >
              Book A Strategy Call
              <ArrowRight size={18} strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
