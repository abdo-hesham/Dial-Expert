import React from 'react';
import { Navbar } from '@/components/Navbar';
import { SmoothScroll } from '@/components/SmoothScroll';
import { HeroSection } from '@/components/HeroSection';
import { ServicesPreview } from '@/components/ServicesPreview';
import { HowItWorks } from '@/components/HowItWorks';
import { Testimonials } from '@/components/Testimonials';
import { GalleryStrip } from '@/components/GalleryStrip';
import { ComplianceTech } from '@/components/ComplianceTech';
import { FinalCta } from '@/components/FinalCta';

export default function Home() {
  return (
    <main className="min-h-screen bg-de-navy">
      <Navbar />
      <HeroSection />
      <ServicesPreview />
      <HowItWorks />
      <Testimonials />
      <GalleryStrip />
      <ComplianceTech />
      <FinalCta />
      
      <footer className="bg-de-navy text-de-text-dark-muted py-8 text-center text-sm font-mono uppercase tracking-widest border-t border-de-line-dark flex flex-col md:flex-row items-center justify-center gap-4">
        <span>&copy; {new Date().getFullYear()} DIAL Solutions. All rights reserved.</span>
        <span className="hidden md:inline">|</span>
        <a href="#" className="hover:text-de-text-dark transition-colors">Privacy Policy</a>
        <span className="hidden md:inline">|</span>
        <a href="#" className="hover:text-de-text-dark transition-colors">Terms of Service</a>
      </footer>
    </main>
  );
}
