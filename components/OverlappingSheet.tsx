'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ACCORDION_ITEMS = [
  {
    title: "Inbound Support",
    content: "Our highly trained agents handle customer inquiries efficiently, improving resolution times and boosting customer satisfaction."
  },
  {
    title: "Technical Support",
    content: "Expert tier-level technical assistance that gets your users back up and running with minimal friction."
  },
  {
    title: "Multilingual Support",
    content: "Global language capabilities allowing your brand to seamlessly support diverse markets across multiple time zones."
  },
  {
    title: "24/7 Operations",
    content: "Continuous coverage ensures your customers receive support exactly when they need it, day or night."
  }
];

export function OverlappingSheet() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sheetRef = useRef<HTMLDivElement>(null);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Scroll Entrance Animation
    const ctx = gsap.context(() => {
      // Main sheet entrance
      gsap.from(sheetRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sheetRef.current,
          start: 'top 90%',
        }
      });

      // Intro title and description
      gsap.from('.sheet-intro', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sheetRef.current,
          start: 'top 75%',
        }
      });

      // Stats row
      gsap.from('.stat-item', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.stat-row',
          start: 'top 85%',
        }
      });

      // Accordion elements
      gsap.from('.accordion-item', {
        x: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.accordion-container',
          start: 'top 80%',
        }
      });
    }, sheetRef);

    return () => ctx.revert();
  }, []);

  const handleAccordionClick = (index: number) => {
    if (openIndex === index) {
      // Close current
      gsap.to(accordionRefs.current[index], { height: 0, opacity: 0, duration: 0.3, ease: 'power2.inOut' });
      setOpenIndex(null);
    } else {
      // Close previously opened
      if (openIndex !== null) {
        gsap.to(accordionRefs.current[openIndex], { height: 0, opacity: 0, duration: 0.3, ease: 'power2.inOut' });
      }
      // Open new
      setOpenIndex(index);
      gsap.fromTo(
        accordionRefs.current[index],
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.inOut' }
      );
    }
  };

  return (
    <div
      id="sheet"
      ref={sheetRef}
      className="relative z-20 -mt-12 md:-mt-24 mx-4 lg:mx-auto max-w-[95%] lg:max-w-7xl bg-de-paper text-de-ink rounded-[2rem] p-8 md:p-16 lg:p-24 shadow-2xl"
    >
      {/* Intro */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 md:mb-32">
        <h2 className="sheet-intro text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-tight font-medium leading-none">
          Customer<br />communication,<br />engineered.
        </h2>
        <div className="flex flex-col justify-end">
          <p className="sheet-intro text-lg md:text-xl text-de-ink/80 max-w-md font-light leading-relaxed">
            We build and manage dedicated support teams that function as a seamless extension of your business.
          </p>
        </div>
      </div>

      <div className="h-[1px] w-full bg-de-line-light mb-20" />

      {/* Stats Row */}
      <div className="stat-row grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-20 md:mb-32">
        <Stat tileName="24/7" label="Continuous coverage" />
        <Stat tileName="Multi" label="Teams across languages" />
        <Stat tileName="QA" label="Monitoring & coaching" />
        <Stat tileName="Fast" label="Structured ramp-up" />
      </div>

      {/* What We Do */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <h3 className="text-xl uppercase tracking-widest font-mono text-de-ink/50 mb-4">Focus Areas</h3>
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">What we do</h2>
          <p className="mt-6 text-de-ink/70 max-w-sm">
            Scalable, high-quality operations designed to simplify your workflow.
          </p>

          <button className="mt-12 uppercase tracking-widest text-xs font-bold border-b border-de-ink pb-1 hover:text-de-accent hover:border-de-accent transition-all">
            View All Services
          </button>
        </div>

        <div className="accordion-container flex flex-col border-t border-de-line-light">
          {ACCORDION_ITEMS.map((item, i) => (
            <div key={i} className="accordion-item border-b border-de-line-light group">
              <button 
                className="w-full py-8 flex items-center justify-between text-left focus:outline-none"
                onClick={() => handleAccordionClick(i)}
              >
                <span className="text-xl md:text-2xl font-medium tracking-tight group-hover:pl-4 transition-all duration-300">
                  {item.title}
                </span>
                <span className="text-de-ink/50 group-hover:text-de-accent transition-colors">
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <div
                ref={(el) => {
                  accordionRefs.current[i] = el;
                }}
                className="overflow-hidden"
                style={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
              >
                <p className="pb-8 text-de-ink/70 pr-8 md:pr-12 text-lg">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ tileName, label }: { tileName: string, label: string }) {
  const statRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(statRef.current, { y: -5, scale: 1.02, duration: 0.2, ease: 'power2.out' });
  };

  const handleMouseLeave = () => {
    gsap.to(statRef.current, { y: 0, scale: 1, duration: 0.2, ease: 'power2.out' });
  };

  return (
    <div 
      ref={statRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="stat-item flex flex-col gap-2 p-6 rounded-2xl bg-white border border-de-line-light shadow-sm hover:shadow-md hover:border-de-accent/30 cursor-default transition-all duration-300"
    >
      <span className="text-4xl md:text-5xl font-display tracking-tight text-de-ink">{tileName}</span>
      <span className="text-sm font-medium text-de-ink/70 max-w-[120px] leading-tight">{label}</span>
    </div>
  );
}
