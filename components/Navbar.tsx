'use client';

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="group relative text-sm font-light text-de-text-dark-muted hover:text-de-text-dark transition-colors duration-500 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-de-text-dark after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-[600ms] after:ease-[cubic-bezier(0.16,1,0.3,1)]">
    <span className="relative inline-flex overflow-hidden">
      <span className="group-hover:-translate-y-full transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)]">{children}</span>
      <span className="absolute left-0 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] text-de-text-dark">{children}</span>
    </span>
  </a>
);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(wrapperRef.current, {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });
    });
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
      isScrolled ? 'pt-6 px-4' : 'pt-0 px-0'
    }`}>
      <div ref={wrapperRef} className="w-full flex justify-center">
        <div 
          className={`flex items-center justify-between w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled 
              ? 'max-w-3xl px-4 py-3 bg-de-navy/80 backdrop-blur-xl border border-de-line-dark rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)]'
              : 'max-w-[1600px] px-6 lg:px-12 h-24 bg-transparent border-transparent rounded-none shadow-none'
          }`}
        >
          <div className={`flex items-center transition-all duration-700 ${isScrolled ? 'gap-6 pl-2 md:pl-4' : 'gap-12 pl-0'}`}>
            <a href="#" className="flex items-center gap-2 group text-white hover:text-white transition-colors duration-500">
              <svg 
                viewBox="0 0 100 100" 
                className="w-10 h-10"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M50,15 A35,35 0 0,1 85,50 A35,35 0 0,1 50,85 L50,65 A15,15 0 0,0 65,50 A15,15 0 0,0 50,35 Z" 
                  fill="url(#logo-grad)" 
                />
                <path 
                  d="M50,55 L70,55 A20,20 0 1,0 50,75 L50,55 Z M50,35 A15,15 0 0,1 65,50 L35,50 A15,15 0 0,1 50,35 Z" 
                  fill="#006FD6" 
                />
                <circle cx="50" cy="50" r="20" fill="none" stroke="#0072CE" strokeWidth="8" strokeDasharray="63 126" strokeDashoffset="63"/>
                <path d="M 62 50 L 38 50 A 12 12 0 1 1 50 38 A 12 12 0 0 1 62 50 L 50 50 L 50 75 A 25 25 0 0 0 75 50 A 25 25 0 0 0 50 25 Z" fill="url(#logo-grad-2)"/>
                <defs>
                  <linearGradient id="logo-grad-2" x1="50" y1="25" x2="50" y2="75" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#2CD29A" />
                    <stop offset="100%" stopColor="#006FD6" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-display font-medium tracking-tight">Dial Expert</span>
            </a>
            <div className={`hidden md:flex items-center transition-all duration-700 ${isScrolled ? 'gap-5' : 'gap-8'}`}>
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">About</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#">Contact</NavLink>
            </div>
          </div>
          
          <div className={`flex items-center transition-all duration-700 ${isScrolled ? 'pr-1' : 'pr-0'}`}>
            <a 
              href="#demo" 
              className={`group flex items-center justify-center gap-2 text-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isScrolled 
                  ? 'bg-de-accent text-white px-5 py-2.5 rounded-full font-medium hover:bg-de-accent2 scale-100 hover:scale-[1.02] active:scale-[0.98]'
                  : 'bg-transparent text-de-text-dark-muted px-0 py-2 rounded-none font-light hover:text-de-text-dark relative after:content-[\'\'] after:absolute after:bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-de-text-dark after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.16,1,0.3,1)]'
              }`}
            >
              <span>Book a Demo</span>
              <span className={`transition-all duration-500 origin-center ${isScrolled ? '-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' : 'group-hover:translate-x-1'}`}>
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
