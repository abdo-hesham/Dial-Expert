'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FinalCta() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Wave pulse on scroll
      gsap.to(waveRef.current, {
        opacity: 0.8,
        scale: 1.2,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });

      gsap.from(contentRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-de-navy text-de-text-dark py-32 md:py-48 px-6 border-t border-de-line-dark">
      {/* Background wave sweep */}
      <div 
        ref={waveRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-de-accent/20 via-transparent to-transparent opacity-0 pointer-events-none rounded-t-[100%]"
      />
      {/* Abstract dark gradient bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-de-accent2/30 via-de-navy to-de-navy pointer-events-none opacity-50" />
      
      <div ref={contentRef} className="relative z-10 max-w-[1600px] mx-auto flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl lg:text-[80px] font-display uppercase tracking-tighter leading-[0.95] mb-8">
          Ready to upgrade<br />customer experience?
        </h2>
        <p className="text-lg text-de-text-dark-muted font-light mb-12 max-w-md">
          Let&apos;s discuss how our tailored communication solutions can integrate into your operations.
        </p>
        <button className="group bg-de-accent text-white hover:bg-de-accent2 px-8 py-4 rounded-full text-sm font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center gap-3 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center rounded-full mix-blend-overlay"></div>
          <span className="relative z-10 flex items-center gap-3">
            Book a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </span>
        </button>
      </div>
    </section>
  );
}
