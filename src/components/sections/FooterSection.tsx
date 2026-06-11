import Link from "next/link"
import Image from "next/image"
import { Phone, Mail } from "lucide-react"

const navLinks = [
  { label: "About Us", href: "/#who-we-are" },
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact Us", href: "/contact" },
]

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "TikTok", href: "https://www.tiktok.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "Facebook", href: "https://www.facebook.com" },
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
            preload="auto"
          />
        </div>

        <div className="footer-top">
          <div className="footer-branding">
            <Link className="footer-logo" href="/" aria-label="Dial Expert home">
              <Image
                src="https://framerusercontent.com/images/1r9bp6mMWQMRoDFpl4dGOCznagw.png?width=473&height=256"
                alt="Dial Expert"
                width={473}
                height={256}
                loading="lazy"
              />
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

            <div className="footer-column">
              <strong>Social Media</strong>
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
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
              <a href="mailto:contact@dialexpertsolutions.com">
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
