'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TILES = [
  { id: 1, title: "Inbound Support", sub: "Enterprise scale", img: "https://picsum.photos/seed/dial-inbound/800/1000" },
  { id: 2, title: "Technical Support", sub: "Tier 1-3 helpdesk", img: "https://picsum.photos/seed/dial-tech/800/1000" },
  { id: 3, title: "Multilingual Teams", sub: "Global reach", img: "https://picsum.photos/seed/dial-lang/800/1000" },
  { id: 4, title: "24/7 Coverage", sub: "Always on", img: "https://picsum.photos/seed/dial-247/800/1000" },
  { id: 5, title: "QA & Training", sub: "Continuous coaching", img: "https://picsum.photos/seed/dial-qa/800/1000" },
  { id: 6, title: "Onboarding", sub: "Fast deployment", img: "https://picsum.photos/seed/dial-onboard/800/1000" },
];

export function ServicesGrid() {
  const containerRef = useRef<HTMLElement>(null);
  const tilesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(tilesRef.current, {
        y: 60,
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-de-navy text-de-text-dark py-32 px-4 md:px-8" id="services">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase tracking-tight max-w-xl leading-none">
            Comprehensive<br/>Solutions
          </h2>
          <p className="text-de-text-dark-muted max-w-md text-lg font-light pb-2">
            Explore our specialized areas designed to adapt to your operational needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TILES.map((tile, i) => (
            <div
              key={tile.id}
              ref={(el) => {
                tilesRef.current[i] = el;
              }}
              className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer bg-white/5"
            >
              <Image
                src={tile.img}
                alt={tile.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-de-navy/90 via-de-navy/30 to-transparent group-hover:from-de-navy/90 transition-colors duration-500" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-de-text-dark-muted mb-2">{tile.sub}</p>
                  <h3 className="text-2xl font-medium tracking-tight">{tile.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-de-accent text-white flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
