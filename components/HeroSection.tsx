'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TYPEWRITER_PHRASES = ["For the few.", "24/7 Coverage.", "Multilingual Teams.", "QA-led delivery."];

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect logic
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];

    if (isTyping) {
      if (text.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // pause at end
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
          setIsTyping(true);
        }, 10);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping, phraseIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(contentRef);
      
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(bgRef.current, 
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, ease: 'power2.out' },
        0
      )
      .from(q('.hero-element'), {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
      }, 0.5);

      gsap.to(bgRef.current, {
        y: '25%', // Increased parallax offset
        opacity: 0.3,
        filter: 'blur(10px)',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
      
      gsap.to(contentRef.current, {
        y: '50%',
        opacity: 0,
        scale: 0.95,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-de-navy text-de-text-dark">
      {/* Background Video */}
      <div ref={bgRef} className="absolute -inset-[15%] z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          preload="metadata"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient + subtle noise */}
        <div className="absolute inset-0 bg-gradient-to-t from-de-navy via-de-navy/60 to-de-navy/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col pt-32">
        <div ref={contentRef} className="max-w-4xl">
          {/* Typewriter */}
          <div className="hero-element mb-6 flex items-center h-6 text-white/70 font-mono text-sm tracking-widest uppercase">
            <span>{text}</span>
            <span className="w-2 h-4 bg-white/70 ml-1 animate-pulse" />
          </div>

          <h1 className="hero-element font-display font-medium text-5xl md:text-7xl lg:text-[90px] leading-[1.05] tracking-tight mb-8 text-de-text-dark">
            Enterprise-grade customer<br className="hidden md:block"/> support operations.
          </h1>
          
          <p className="hero-element text-xl md:text-2xl font-light text-white/70 max-w-2xl mb-12 leading-relaxed">
            Inbound. Technical. Multilingual. 24/7.
          </p>

          <div className="hero-element flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="bg-de-accent text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-de-accent2 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-de-accent/50 hover:shadow-[0_0_30px_rgba(62,107,144,0.4)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-full sm:w-auto text-center relative group">
              <span className="relative z-10">Book a Demo</span>
              <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center"></div>
            </button>
            <a 
              href="#services" 
              className="text-de-text-dark-muted hover:text-de-accent transition-all duration-500 flex items-center gap-2 group text-sm tracking-wide font-light relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-de-accent after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-[600ms] after:ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              Explore Services
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
