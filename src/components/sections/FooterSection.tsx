import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import type { ReactNode } from "react"
import BrandLockup from "../BrandLockup"

const navLinks = [
  { label: "About Us", href: "/#who-we-are" },
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact Us", href: "/contact" },
]

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6.94 8.97H3.69V20h3.25V8.97ZM5.31 4a1.88 1.88 0 1 0 0 3.76A1.88 1.88 0 0 0 5.31 4Zm14.94 9.73c0-3.18-1.7-4.65-3.96-4.65a3.41 3.41 0 0 0-3.08 1.7h-.04V8.97h-3.12V20h3.25v-5.46c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.65 1.78 2.92V20h3.25l-.13-6.27Z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M16.03 4c.28 2.36 1.6 3.77 3.97 3.92v3.02a6.84 6.84 0 0 1-3.9-1.2v5.65c0 2.86-1.72 4.98-4.95 4.98-3.02 0-5.15-1.82-5.15-4.63 0-3.07 2.36-4.8 5.47-4.54v3.09c-1.33-.2-2.35.37-2.35 1.41 0 .9.77 1.45 1.82 1.45 1.28 0 1.85-.75 1.85-2.13V4h3.24Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7.75 3h8.5A4.76 4.76 0 0 1 21 7.75v8.5A4.76 4.76 0 0 1 16.25 21h-8.5A4.76 4.76 0 0 1 3 16.25v-8.5A4.76 4.76 0 0 1 7.75 3Zm0 2A2.75 2.75 0 0 0 5 7.75v8.5A2.75 2.75 0 0 0 7.75 19h8.5A2.75 2.75 0 0 0 19 16.25v-8.5A2.75 2.75 0 0 0 16.25 5h-8.5ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4.25-2.88a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26Z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M14.15 8.33V6.78c0-.75.5-.92.85-.92h2.15V2.12L14.2 2.1c-3.28 0-4.02 2.45-4.02 4.02v2.21H7.6v3.86h2.58V22h3.97v-9.81h2.95l.39-3.86h-3.34Z" />
    </svg>
  )
}

const socialLinks: { label: string; href: string; icon: ReactNode }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: <LinkedInIcon /> },
  { label: "TikTok", href: "https://www.tiktok.com", icon: <TikTokIcon /> },
  { label: "Instagram", href: "https://www.instagram.com", icon: <InstagramIcon /> },
  { label: "Facebook", href: "https://www.facebook.com", icon: <FacebookIcon /> },
]

export default function FooterSection() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-video" aria-hidden="true">
          <video
            src="https://www.pexels.com/download/video/36999029/"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          />
        </div>

        <div className="footer-top">
          <div className="footer-branding">
            <Link className="footer-logo" href="/" aria-label="Dial Expert home">
              <BrandLockup />
            </Link>

            <p className="footer-eyebrow">Be part of the few</p>

            <Link className="footer-cta" href="/contact">
              <span className="footer-cta-fill" aria-hidden="true" />
              <span className="footer-cta-text">Join Our Team</span>
            </Link>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <strong>Navigation</strong>
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="footer-column footer-social-column">
              <strong>Social Media</strong>
              <div className="footer-social-icons">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider" />
          <div className="footer-bottom-row">
            <p>© 2026 Dial Expert. All rights reserved.</p>

            <div className="footer-contact">
              <a href="tel:+16788900526">
                <Phone size={16} strokeWidth={2.5} />
                <span>+1-678-890-0526</span>
              </a>
              <a href="mailto:leo@dialexpertsolutions.com">
                <Mail size={16} strokeWidth={2.5} />
                <span>contact@dialexpertsolutions.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-wordmark">Dial Expert&trade;</div>
      </div>
    </footer>
  )
}
