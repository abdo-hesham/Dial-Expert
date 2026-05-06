'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { num: "01", title: "Discovery & Scope", desc: "We analyze your support volume, channels, and specific requirements to architect a tailored operational model.", img: "https://picsum.photos/seed/hw1x/800/1000" },
  { num: "02", title: "Onboarding & Training", desc: "Agents undergo rigorous brand immersion and product training to ensure they mirror your internal culture perfectly.", img: "https://picsum.photos/seed/hw2x/800/1000" },
  { num: "03", title: "Go-live & Coverage", desc: "A phased rollout into live channels ensures stable adoption and immediate value generation.", img: "https://picsum.photos/seed/hw3x/800/1000" },
  { num: "04", title: "QA & Optimization", desc: "Continuous monitoring, feedback loops, and performance reviews to maintain and elevate quality standards.", img: "https://picsum.photos/seed/hw4x/800/1000" },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(imagesRef.current[0], { opacity: 1 });
      gsap.set(stepsRef.current[0], { opacity: 1, x: 20 });
      gsap.set(dotsRef.current[0], { backgroundColor: '#0B1220', borderColor: '#0B1220', scale: 1.5 });

      // Progress line animation
      gsap.to(progressLineRef.current, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: timelineContainerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        }
      });

      stepsRef.current.forEach((step, i) => {
        if (!step) return;
        
        ScrollTrigger.create({
          trigger: step,
          start: 'top 60%',
          end: 'bottom 40%',
          onToggle: (self) => {
            if (self.isActive) {
              // Image crossfade
              imagesRef.current.forEach((img, index) => {
                if (index === i) {
                  gsap.to(img, { opacity: 1, duration: 0.8, ease: 'power2.inOut', zIndex: 10 });
                  const innerImg = img?.querySelector('img');
                  if (innerImg) {
                    gsap.fromTo(innerImg, 
                      { scale: 1.15 },
                      { scale: 1, duration: 1.5, ease: 'power3.out' }
                    );
                  }
                } else {
                  gsap.to(img, { opacity: 0, duration: 0.8, ease: 'power2.inOut', zIndex: 1 });
                }
              });
              
              // Text active state
              gsap.to(step, { 
                opacity: 1, 
                x: 20, 
                scale: 1.05,
                transformOrigin: 'left center',
                filter: 'drop-shadow(0px 15px 25px rgba(0,0,0,0.06))',
                duration: 0.5, 
                ease: 'power2.out' 
              });

              // Dot active state
              if (dotsRef.current[i]) {
                gsap.to(dotsRef.current[i], {
                  borderColor: '#0B1220',
                  backgroundColor: '#0B1220',
                  scale: 1.5,
                  duration: 0.5,
                  ease: 'power2.out'
                });
              }
            } else {
              // Inactive state
              gsap.to(step, { 
                opacity: 0.2, 
                x: 0, 
                scale: 1,
                filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))',
                duration: 0.5, 
                ease: 'power2.out' 
              });

              // Dot inactive state
              if (dotsRef.current[i]) {
                gsap.to(dotsRef.current[i], {
                  borderColor: 'rgba(11,18,32,0.2)',
                  backgroundColor: '#F6F8FB',
                  scale: 1,
                  duration: 0.5,
                  ease: 'power2.out'
                });
              }
            }
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-de-paper text-de-ink">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative py-32">
        
        {/* Left Side: Content */}
        <div className="flex flex-col">
          <div className="mb-32 md:mb-48">
            <h3 className="text-sm font-mono tracking-widest uppercase text-de-ink/50 mb-6">Process</h3>
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight leading-none">
              How We<br/>Work
            </h2>
          </div>
          
          <div ref={timelineContainerRef} className="relative flex flex-col gap-[30vh] pb-[30vh]">
            {/* Timeline base line */}
            <div className="absolute left-0 top-6 bottom-0 w-[1px] bg-de-line-light hidden md:block" />
            {/* Timeline progress line */}
            <div ref={progressLineRef} className="absolute left-[-0.5px] top-6 bottom-0 w-[2px] bg-de-ink origin-top transform scale-y-0 hidden md:block" />
            
            {STEPS.map((step, i) => (
              <div 
                key={i} 
                ref={el => { stepsRef.current[i] = el; }}
                className="opacity-20 w-full relative pl-0 md:pl-16"
              >
                {/* Timeline dot */}
                <div 
                  ref={el => { dotsRef.current[i] = el; }} 
                  className="absolute left-[-5px] top-[14px] w-3 h-3 rounded-full border-2 border-de-ink/20 bg-de-paper transition-colors duration-300 z-10 hidden md:block" 
                />

                {/* Mobile Image (inline) */}
                <div className="block lg:hidden w-full aspect-[4/5] rounded-3xl overflow-hidden mb-12 relative bg-black/5">
                  <Image src={step.img} alt={step.title} fill className="object-cover" sizes="100vw" />
                </div>

                <div className="text-sm font-mono tracking-widest text-de-ink mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-de-line-light"></span>
                  {step.num}
                </div>
                <h4 className="text-3xl md:text-5xl font-display uppercase tracking-tight mb-8 text-de-ink">
                  {step.title}
                </h4>
                <p className="text-lg md:text-xl font-light text-de-ink/70 leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Sticky Images (Desktop Only) */}
        <div className="hidden lg:block relative h-full">
          <div className="sticky top-0 h-screen flex flex-col justify-center">
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              {STEPS.map((step, i) => (
                <div
                  key={i}
                  ref={el => { imagesRef.current[i] = el; }}
                  className="absolute inset-0 opacity-0 bg-de-paper"
                >
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                    priority={i === 0}
                  />
                  {/* Subtle vignette/overlay for cinematic feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
