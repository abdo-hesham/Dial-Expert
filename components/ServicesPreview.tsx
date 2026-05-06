'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "Inbound Support",
    content: "Efficient, empathetic handling of customer inquiries to improve resolution times and satisfaction metrics at any scale."
  },
  {
    title: "Technical Support",
    content: "Tier 1-3 helpdesk experts ready to resolve complex user issues and minimize downtime for your products."
  },
  {
    title: "Multilingual Support",
    content: "Seamlessly expand your reach with native-level support in multiple languages across all required time zones."
  },
  {
    title: "24/7 Coverage",
    content: "Continuous operational coverage ensuring that no matter when an issue arises, an expert is ready to assist."
  }
];

export function ServicesPreview() {
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-intro', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      });

      gsap.from(itemsRef.current.filter(Boolean), {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-list',
          start: 'top 85%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      gsap.to(contentsRef.current[index], { height: 0, opacity: 0, duration: 0.4, ease: 'power2.inOut' });
      setOpenIndex(null);
    } else {
      if (openIndex !== null) {
        gsap.to(contentsRef.current[openIndex], { height: 0, opacity: 0, duration: 0.4, ease: 'power2.inOut' });
      }
      setOpenIndex(index);
      gsap.fromTo(contentsRef.current[index], 
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.inOut' }
      );
    }
  };

  return (
    <section ref={containerRef} id="services" className="bg-de-navy text-de-text-dark py-32 md:py-48 px-6 lg:px-12 relative">
      {/* Light transition overlay for cinematic feel */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-de-navy/50 to-transparent pointer-events-none" />
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-10">
        
        {/* Left Column (Intro) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h3 className="services-intro text-sm font-mono tracking-widest uppercase text-de-text-dark-muted mb-6">What We Do</h3>
            <h2 className="services-intro text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none mb-8">
              Operational<br/>Expertise
            </h2>
            <p className="services-intro text-lg text-de-text-dark-muted font-light max-w-md">
              We engineer specialized support modules designed to integrate with your existing workflows cleanly and efficiently.
            </p>
          </div>
          <div className="services-intro mt-12 lg:mt-0">
            <a href="#services" className="inline-flex items-center gap-3 text-sm font-light tracking-wide pb-1 group relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-de-accent after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-de-accent">
              View all services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </a>
          </div>
        </div>

        {/* Right Column (List) */}
        <div className="lg:col-span-1" />
        <div className="lg:col-span-6 services-list flex flex-col border-t border-de-line-dark">
          {SERVICES.map((srv, i) => (
            <div 
              key={i} 
              ref={el => { itemsRef.current[i] = el; }}
              className="border-b border-de-line-dark group cursor-pointer"
              onClick={() => handleToggle(i)}
            >
              <div className="py-8 md:py-10 flex items-center justify-between">
                <div className="relative">
                  <h4 className="text-2xl md:text-3xl font-display uppercase tracking-tight text-de-text-dark group-hover:text-de-accent transition-colors duration-500">
                    {srv.title}
                  </h4>
                  {/* Signal wave underline */}
                  <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-de-accent group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </div>
                <div className="text-de-text-dark-muted group-hover:text-de-accent transition-colors duration-300 ml-4 shrink-0">
                  {openIndex === i ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </div>
              </div>
              <div 
                ref={el => { contentsRef.current[i] = el; }}
                className="overflow-hidden"
                style={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
              >
                <p className="pb-8 text-lg font-light text-de-text-dark-muted pr-8">
                  {srv.content}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
