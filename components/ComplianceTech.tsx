'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Target, Headset, Lock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BULLETS = [
  {
    icon: Target, 
    title: "QA Monitoring & Coaching", 
    desc: "Rigorous evaluation and continuous improvement cycles driven by AI-assisted quality assurance protocols.",
    colSpan: "md:col-span-2",
    accent: "bg-gradient-to-br from-de-accent2/40 to-de-navy"
  },
  { 
    icon: Lock, 
    title: "Privacy-first Operations", 
    desc: "Strict adherence to data handling best practices with zero-trust architecture.",
    colSpan: "md:col-span-1",
    accent: "bg-gradient-to-tr from-de-accent2/20 to-de-navy"
  },
  { 
    icon: Headset, 
    title: "CRM / Helpdesk Compatible", 
    desc: "Seamless integration with Zendesk, Intercom, Salesforce, mapping to your exact workflows natively.",
    colSpan: "md:col-span-1",
    accent: "bg-de-navy"
  },
  { 
    icon: ShieldCheck, 
    title: "Enterprise Grade Security", 
    desc: "Secure ISO-certified facility infrastructure, SOC2 compliance, and redundant network safeguards.",
    colSpan: "md:col-span-2",
    accent: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-de-accent2/20 via-de-navy to-de-navy"
  },
];

export function ComplianceTech() {
  const containerRef = useRef<HTMLElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated Title
      gsap.fromTo('.comp-title-word', 
        { y: 100, opacity: 0, rotate: 5 },
        { 
          y: 0, opacity: 1, rotate: 0, 
          duration: 1.2, 
          stagger: 0.1, 
          ease: 'power4.out',
          scrollTrigger: { 
            trigger: titleContainerRef.current, 
            start: 'top 80%' 
          }
        }
      );

      gsap.from('.comp-subtitle', {
        y: 20, opacity: 0, duration: 1, ease: 'power2.out', delay: 0.3,
        scrollTrigger: { trigger: titleContainerRef.current, start: 'top 80%' }
      });
      
      // Bento Cards Staggered fade in and translate
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-de-navy text-de-text-dark py-32 md:py-48 px-6 lg:px-12 relative overflow-hidden">
      {/* Abstract dark gradient bg elements */}
      <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none translate-x-1/2" />

      <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col">
        
        {/* Header Section */}
        <div ref={titleContainerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 md:mb-32">
          <div className="overflow-hidden">
            <h3 className="comp-subtitle text-sm font-mono tracking-widest uppercase text-de-text-dark-muted mb-8 block">Infrastucture</h3>
            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-display uppercase tracking-tighter leading-[0.85] flex flex-col">
              <div className="overflow-hidden"><span className="comp-title-word block">Security</span></div>
              <div className="overflow-hidden"><span className="comp-title-word block text-de-text-dark-muted italic pointer-events-none pr-4">& Quality</span></div>
            </h2>
          </div>
          <div className="comp-subtitle max-w-sm shrink-0">
            <p className="text-lg md:text-xl font-light text-de-text-dark-muted leading-relaxed">
              Trust is the foundation of our partnerships. We maintain rigorous standards to protect your brand and your customers at scale.
            </p>
          </div>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {BULLETS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                ref={el => { cardsRef.current[i] = el; }}
                className={`group relative rounded-[2rem] border border-de-line-dark p-8 md:p-12 overflow-hidden flex flex-col justify-between min-h-[320px] ${item.colSpan} ${item.accent} transition-colors duration-500 hover:border-white/20`}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-de-line-dark flex items-center justify-center mb-8 text-de-text-dark-muted group-hover:bg-de-accent group-hover:text-white transition-all duration-500 group-hover:scale-110">
                    <Icon className="w-6 h-6 flex-shrink-0" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="relative z-10 mt-auto">
                  <h4 className="text-2xl md:text-3xl font-display uppercase tracking-tight mb-4 text-de-text-dark group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-base md:text-lg font-light text-de-text-dark-muted leading-relaxed max-w-md group-hover:text-de-text-dark transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle corner graphic on hover */}
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-white/5 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            )
          })}
        </div>
        
      </div>
    </section>
  );
}
