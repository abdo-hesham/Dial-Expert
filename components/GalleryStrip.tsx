'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MEDIA = [
  { type: 'image', title: 'The Launch', subtitle: 'New York', src: 'https://picsum.photos/seed/dial-c1/1000/1200', aspect: 'aspect-[3/4]', width: 'w-[75vw] md:w-[35vw]', align: 'items-center' },
  { type: 'image', title: 'Deep Work', subtitle: 'London Office', src: 'https://picsum.photos/seed/dial-c2/1200/800', aspect: 'aspect-[4/3]', width: 'w-[85vw] md:w-[45vw]', align: 'items-center' },
  { type: 'video', title: 'Team Retreat', subtitle: 'Alps', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', poster: 'https://picsum.photos/seed/dial-v1/1600/900', aspect: 'aspect-video', width: 'w-[90vw] md:w-[55vw]', align: 'items-center' },
  { type: 'image', title: 'Focus', subtitle: 'Studio', src: 'https://picsum.photos/seed/dial-c4/800/1000', aspect: 'aspect-[4/5]', width: 'w-[70vw] md:w-[30vw]', align: 'items-center' },
  { type: 'image', title: 'Execution', subtitle: 'Global', src: 'https://picsum.photos/seed/dial-c5/1400/800', aspect: 'aspect-[21/9]', width: 'w-[90vw] md:w-[60vw]', align: 'items-center' },
];

export function GalleryStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const wrapper = scrollWrapperRef.current;
      if (!wrapper) return;

      const totalWidth = wrapper.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;

      // Master horizontal scroll
      const scrollTween = gsap.to(wrapper, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1, // Smooth scrubbing
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          invalidateOnRefresh: true,
        }
      });

      // Huge Background Text Parallax
      gsap.to('.bg-huge-text', {
        x: -viewportWidth * 0.5, // Move left slowly
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          scrub: 1,
        }
      });

      // Cinematic animations per item based on their position in the viewport
      gsap.utils.toArray('.gallery-item-container').forEach((container: any) => {
        const item = container.querySelector('.gallery-item');
        const media = container.querySelector('.parallax-media');
        const content = container.querySelector('.item-content');

        // Scale and brightness based on center proximity (Entrance)
        gsap.fromTo(item, 
          { scale: 0.8, filter: 'grayscale(100%) brightness(0.3)' },
          {
            scale: 1,
            filter: 'grayscale(0%) brightness(1)',
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              containerAnimation: scrollTween,
              start: 'left right', // When entering the screen from right
              end: 'center center', // When fully centered
              scrub: true,
            }
          }
        );

        // Scale and brightness based on center proximity (Exit)
        gsap.to(item, {
          scale: 0.8,
          filter: 'grayscale(100%) brightness(0.3)',
          ease: 'power2.in',
          scrollTrigger: {
            trigger: container,
            containerAnimation: scrollTween,
            start: 'center center',     // When leaving center
            end: 'right left',          // When exiting screen to the left
            scrub: true,
          }
        });

        // Inner media X parallax
        if (media) {
          gsap.fromTo(media, 
            { xPercent: -15 },
            {
              xPercent: 15,
              ease: 'none',
              scrollTrigger: {
                trigger: container,
                containerAnimation: scrollTween,
                start: 'left right',
                end: 'right left',
                scrub: true,
              }
            }
          );
        }

        // Text content fade in/out
        if (content) {
          gsap.fromTo(content,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: container,
                containerAnimation: scrollTween,
                start: 'left center+=30%',
                end: 'right center-=30%',
                toggleActions: 'play reverse play reverse',
              }
            }
          );
        }
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-de-navy text-de-text-dark h-screen overflow-hidden flex flex-col justify-center relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-de-accent2/20 via-de-navy to-de-navy z-0" />
      
      {/* Background Huge Typography */}
      <div className="absolute top-1/2 -translate-y-1/2 w-max left-0 z-0 pointer-events-none whitespace-nowrap overflow-hidden">
        <h2 className="bg-huge-text text-[25vw] font-display font-medium uppercase tracking-tighter text-white/[0.04] leading-none select-none pl-[10vw]">
          Selected Works &mdash; Showcases &mdash; Masterpieces &mdash;
        </h2>
      </div>
      
      {/* Top Label */}
      <div className="absolute top-8 md:top-12 left-6 md:left-12 z-20 pointer-events-none">
        <h2 className="text-sm md:text-base font-mono tracking-widest uppercase text-de-text-dark-muted flex items-center gap-4">
          <span className="w-12 h-[1px] bg-de-line-dark"></span>
          Cinematic Gallery
        </h2>
      </div>

      <div 
        ref={scrollWrapperRef}
        className="flex h-full items-center pl-[50vw] pr-[50vw] gap-12 md:gap-32 w-max will-change-transform z-10"
      >
        {MEDIA.map((item, i) => (
          <div key={i} className={`gallery-item-container flex h-[80vh] items-center shrink-0 ${item.width}`}>
            <div 
              className={`gallery-item relative overflow-hidden w-full ${item.aspect} bg-[#111] rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)]`}
              style={{ transformOrigin: 'center center' }}
            >
              {/* Media Container with parallax sizing horizontally */}
              <div className="parallax-media absolute top-0 -left-[15%] w-[130%] h-full">
                {item.type === 'video' ? (
                  <video 
                    src={item.src} 
                    poster={item.poster}
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image 
                    src={item.src} 
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                )}
              </div>
              
              {/* Play Button for Video */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-xl flex items-center justify-center text-white border border-de-line-dark shadow-2xl">
                    <Play className="w-8 h-8 ml-1 fill-white opacity-80" />
                  </div>
                </div>
              )}

              {/* Text Overlay (Animated per item) */}
              <div className="absolute inset-0 bg-gradient-to-t from-de-navy/90 via-de-navy/20 to-transparent pointer-events-none flex flex-col justify-end p-8 md:p-12">
                <div className="item-content flex flex-col items-start">
                  <h4 className="text-3xl md:text-6xl font-display uppercase tracking-tight text-white mb-3">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-de-line-dark"></span>
                    <p className="text-xs md:text-sm font-mono tracking-widest text-de-text-dark-muted uppercase">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
