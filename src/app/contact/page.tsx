"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import SmoothScroll from "@/components/SmoothScroll"
import FooterSection from "@/components/sections/FooterSection"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)
    data.append("_next", window.location.origin + "/contact?success=true")

    try {
      await fetch("https://formsubmit.co/leo@dialexpertsolutions.com", {
        method: "POST",
        body: data,
      })
      setSent(true)
    } catch {
      setSent(true)
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <main className="contact-page">
      <SmoothScroll />
      <Navbar />

      <section className="contact-hero" aria-label="Contact Dial Expert">
        <div className="contact-hero-inner">
          <div className="contact-hero-spacer" aria-hidden="true" />

          {sent ? (
            <div className="contact-form contact-form-sent">
              <h3 style={{ fontSize: "clamp(24px,4vw,32px)", fontWeight: 700, margin: 0 }}>Message Sent ✓</h3>
              <p>We&apos;ll get back to you within 4 business hours.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="Dial Expert Contact Form" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="text" name="_honey" style={{ display: "none" }} />
              <div className="field">
                <label htmlFor="name">Full Name*</label>
                <input id="name" name="name" placeholder="Full Name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email*</label>
                <input id="email" name="email" placeholder="you@example.com" type="email" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone Number*</label>
                <input id="phone" name="phone" placeholder="+1 (555) 000-0000" type="tel" required />
              </div>
              <div className="field">
                <label htmlFor="country">Country*</label>
                <select id="country" name="country" defaultValue="" required>
                  <option value="" disabled>
                    Please Select...
                  </option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Egypt">Egypt</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="business">Your line of business*</label>
                <input id="business" name="business" placeholder="e.g. Real Estate, E-commerce, Call Center" required />
              </div>
              <div className="field">
                <label htmlFor="message">Anything else to add? (optional)</label>
                <textarea id="message" name="message" placeholder="Type your message here..." />
              </div>
              <button
                className={`button contact-submit${loading ? " is-loading" : ""}`}
                type="submit"
                disabled={loading}
              >
                <span className="contact-submit-bg" aria-hidden="true" />
                <span className="contact-submit-inner">
                  <span className="contact-submit-label">Sending</span>
                </span>
              </button>
              <p className="contact-reply-note">Human replies within 4 business hours EST.</p>
            </form>
          )}
        </div>
      </section>

      <section className="contact-growth">
        <div className="contact-growth-inner">
          <h1 className="contact-title">Let&apos;s Talk Growth</h1>
          <p>
            Share your vision, goals, and challenges we&apos;ll help you figure out
            the next move.
          </p>

          <div className="contact-actions" aria-label="Contact options">
            <a className="contact-action" href="mailto:leo@dialexpertsolutions.com">
              <span>Send an Email</span>
            </a>
            <a className="contact-action" href="tel:+16788900526">
              <span>Call Us Now</span>
            </a>
            <Link className="contact-action" href="/contact">
              <span>Book a Call</span>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
