"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EyebrowIcon from "../EyebrowIcon";

const items = [
  {
    id: "01",
    title: "Internal teams are expensive to hire and manage.",
    image: "/the%20challenge.png",
  },
  {
    id: "02",
    title: "Cheap outsourcing often creates poor results.",
    image: "/the%20challenge-1.png",
  },
  {
    id: "03",
    title: "Growth slows when execution becomes inconsistent.",
    image: "/the%20challenge-2.png",
  },
  {
    id: "04",
    title:
      "Leaders lose time managing problems they should not have to manage.",
    image: "/the%20challenge-3.png",
  },
];

export default function Challenge() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index);
    setIsPaused(false);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <section className="section section-white min-h-screen">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="who-body">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          <EyebrowIcon variant="framer" />
          <span>The Challenge</span>
        </motion.div>

        <motion.h2
          className="section-heading text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Scaling A Team
          <br />
          Gets Expensive Fast.
        </motion.h2>

        <div
          className="mx-auto mt-16 max-md:mt-10 w-full flex flex-col lg:flex-row gap-12 max-md:gap-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex-[3] flex flex-col gap-0 divide-y divide-[var(--line)]/50">
            {items.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(index)}
                  className="group flex items-center gap-5 py-5 text-left transition-all duration-300 cursor-pointer"
                >

                  <span
                    className={`block text-[17px] max-md:text-[15px] leading-snug transition-all duration-300 ${
                      isActive
                        ? "text-[--ink] font-bold"
                        : "text-[var(--muted)]/50 font-medium"
                    }`}
                  >
                    {item.title}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-auto shrink-0 transition-all duration-300 ${
                      isActive
                        ? "text-[var(--blue)] opacity-100"
                        : "text-[var(--muted)]/20 opacity-0 group-hover:opacity-40"
                    }`}
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>
              );
            })}
          </div>

          <div className="flex-[4]">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--gray)] border border-[var(--line)]/30 max-w-[520px] w-full ml-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={items[activeIndex].image}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {items.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleSelect(index)}
                      className="h-1 rounded-full transition-all duration-300 cursor-pointer"
                      style={{
                        width: index === activeIndex ? "24px" : "6px",
                        background:
                          index === activeIndex
                            ? "rgba(255,255,255,0.9)"
                            : "rgba(255,255,255,0.35)",
                      }}
                      aria-label={`Challenge ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-1.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-[--ink] hover:bg-white active:scale-90 transition-all duration-200 cursor-pointer shadow-sm"
                    aria-label="Next"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
