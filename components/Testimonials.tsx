'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    quote: "DIAL fundamentally changed how we handle Q4 surges. The ramp-up time was a fraction of what we expected.",
    author: "Sarah Jenkins",
    role: "VP of Operations, RetailNova"
  },
  {
    quote: "Their dual-language support completely opened our capability to serve LATAM without hiring internal headcount.",
    author: "Carlos Mendez",
    role: "CX Director, StreamTech"
  },
  {
    quote: "The transparency and QA process is what sets them apart. I always know exactly how the teams are performing.",
    author: "Emily Chen",
    role: "Head of Support, FinBase"
  },
  {
    quote: "Incredible technical aptitude from the agents. They don't just read scripts, they actually solve problems.",
    author: "Mark T.",
    role: "CTO, CloudScale"
  }
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const totalWidth = wrapper.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;

      const tl = gsap.to(wrapper, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1.5,
          start: 'top top',
          end: () => `+=${scrollDistance * 1.5}`,
          invalidateOnRefresh: true,
        }
      });

      gsap.utils.toArray('.testimonial-card').forEach((card: any) => {
        gsap.fromTo(card,
          { filter: 'brightness(0.5) contrast(0.8)', scale: 0.85, opacity: 0.3 },
          {
            filter: 'brightness(1) contrast(1)',
            scale: 1,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl,
              start: 'left right',
              end: 'center center',
              scrub: true,
            }
          }
        );
        gsap.to(card, {
          filter: 'brightness(0.5) contrast(0.8)',
          scale: 0.85,
          opacity: 0.3,
          ease: 'power2.in',
          scrollTrigger: {
            trigger: card,
            containerAnimation: tl,
            start: 'center center',
            end: 'right left',
            scrub: true,
          }
        });

        const highlight = card.querySelector('.quote-highlight');
        if (highlight) {
          gsap.fromTo(highlight,
            { backgroundSize: '0% 100%' },
            {
              backgroundSize: '100% 100%',
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                containerAnimation: tl,
                start: 'left center+=20%',
                end: 'center center',
                scrub: true,
              }
            }
          );
          gsap.to(highlight, {
            backgroundSize: '0% 100%',
            ease: 'power2.in',
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl,
              start: 'center center',
              end: 'right center-=20%',
              scrub: true,
            }
          });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-de-navy text-de-text-dark h-screen overflow-hidden flex flex-col justify-center relative" id="testimonials">
      <div className="absolute top-12 left-6 lg:left-12 z-20 pointer-events-none">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none text-de-text-dark">Client Log</h2>
      </div>

      <div 
        ref={wrapperRef}
        className="flex h-full items-center mt-24 md:mt-32 lg:mt-40 pl-[10vw] md:pl-[calc(50vw-200px)] lg:pl-[calc(50vw-250px)] pr-[10vw] md:pr-[calc(50vw-200px)] lg:pr-[calc(50vw-250px)] gap-[15vw] md:gap-[20vw] lg:gap-[25vw] w-max will-change-transform z-10"
      >
        {TESTIMONIALS.map((item, i) => (
          <div
            key={i}
            className="testimonial-card flex-shrink-0 w-[80vw] md:w-[400px] lg:w-[500px] bg-white/5 backdrop-blur-3xl p-8 md:p-10 lg:p-12 rounded-[2.5rem] shadow-2xl border border-de-line-dark relative"
          >
            <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-16 h-16 md:w-20 md:h-20 bg-de-accent text-white rounded-full flex items-center justify-center shadow-xl">
              <Quote className="w-8 h-8 md:w-10 md:h-10 fill-white" />
            </div>
            
            <div className="flex gap-1 mb-8 text-de-text-dark-muted">
              {[...Array(5)].map((_, j) => (
                <div key={j} className="w-2.5 h-2.5 rounded-full bg-de-accent" />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl lg:text-3xl font-display font-medium leading-[1.25] tracking-tight mb-10 text-de-text-dark">
              <span className="text-de-text-dark-muted">&quot;</span>
              <span className="quote-highlight bg-[linear-gradient(transparent_60%,rgba(62,107,144,0.3)_60%)] bg-no-repeat bg-[length:0%_100%] py-1">
                {item.quote}
              </span>
              <span className="text-de-text-dark-muted">&quot;</span>
            </p>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-[1px] bg-de-line-dark"></div>
              <div>
                <p className="font-bold tracking-tight text-lg uppercase text-de-text-dark">{item.author}</p>
                <p className="text-sm text-de-text-dark-muted font-mono uppercase tracking-widest mt-2">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
