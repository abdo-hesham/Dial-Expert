"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import EyebrowIcon from "../EyebrowIcon";

const items = [
  {
    id: "01",
    title: "Internal teams are expensive to hire and manage.",
    description:
      "Salaries, benefits, training, and infrastructure add up fast. Building in-house means months of recruiting before your team can even start working.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Cheap outsourcing often creates poor results.",
    description:
      "Low-cost providers cut corners on training, quality control, and accountability. You save on paper but lose on performance and client experience.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Growth slows when execution becomes inconsistent.",
    description:
      "When your sales and support teams can't deliver predictably, pipeline dries up and revenue stagnates. Inconsistent execution kills momentum.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "04",
    title:
      "Leaders lose time managing problems they should not have to manage.",
    description:
      "Instead of focusing on strategy and growth, leaders get pulled into fixing operational issues. The job becomes firefighting, not building.",
    image:
      "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=1200&auto=format&fit=crop",
  },
];

const AUTOPLAY_DURATION = 5000;

export default function Challenge() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % items.length),
      AUTOPLAY_DURATION,
    );
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="w-full bg-[--bg] py-[120px] max-md:py-20">
      <div className="mx-auto w-full max-w-[1728px] px-[96px] max-xl:px-8 max-md:px-[18px]">
        <div className="mb-5 flex items-center gap-2">
          <EyebrowIcon variant="framer" />
          <span className="text-[18px] max-md:text-[14px] font-medium text-[var(--muted)]">
            The Challenge
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-md:gap-10 items-start">
          <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
            <div>
              <h3 className="font-['Satoshi',sans-serif] text-[40px] max-md:text-[clamp(28px,7vw,34px)] font-black leading-[1.2] tracking-tight text-[--ink]">
                Scaling A Team Gets Expensive Fast.
              </h3>
              <p className="mt-4 text-[var(--muted)] text-base max-md:text-sm font-medium leading-relaxed">
                Hiring in-house becomes expensive, slow, and hard to manage.
                Outsourcing often creates new problems: weak communication, poor
                accountability, and high turnover.
              </p>
            </div>

            <div className="flex flex-col">
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(index)}
                    className="group relative flex items-start gap-5 py-7 text-left border-t border-[var(--line)] first:border-t-0"
                  >
                    <div className="relative w-[2px] self-stretch bg-[var(--line)] shrink-0">
                      <div
                        className="absolute top-0 left-0 w-full bg-[#3B82F6] origin-top"
                        style={{
                          height: isActive && !isPaused ? "100%" : "0%",
                          transition: "height 5s linear",
                        }}
                      />
                    </div>

                    <span className="text-[10px] max-md:text-[9px] font-medium mt-1 text-[var(--muted)]/50 tabular-nums shrink-0">
                      /{item.id}
                    </span>

                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span
                        className={
                          isActive
                            ? "text-[--ink] text-2xl max-md:text-lg font-normal tracking-tight"
                            : "text-[var(--muted)]/60 text-2xl max-md:text-lg font-normal tracking-tight"
                        }
                      >
                        {item.title}
                      </span>

                      {isActive && (
                        <p className="text-[var(--muted)] text-sm max-md:text-xs font-normal leading-relaxed max-w-sm pb-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
            <div
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative aspect-[4/3] max-md:aspect-[16/10] rounded-[2.5rem] max-md:rounded-2xl overflow-hidden bg-[var(--gray)] border border-[var(--line)]/40">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-[400ms] ease-in-out ${
                      index === activeIndex
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                ))}

                <div className="absolute bottom-6 right-6 flex gap-3 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-[var(--line)]/50 flex items-center justify-center text-[--ink] hover:bg-white transition-all active:scale-90 cursor-pointer"
                    aria-label="Previous"
                  >
                    <ArrowLeft size={18} strokeWidth={2} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-[var(--line)]/50 flex items-center justify-center text-[--ink] hover:bg-white transition-all active:scale-90 cursor-pointer"
                    aria-label="Next"
                  >
                    <ArrowRight size={18} strokeWidth={2} />
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
