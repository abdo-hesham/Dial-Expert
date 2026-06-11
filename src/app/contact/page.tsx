import Link from "next/link"
import Navbar from "@/components/Navbar"
import SmoothScroll from "@/components/SmoothScroll"
import FooterSection from "@/components/sections/FooterSection"

export default function ContactPage() {
  return (
    <main className="contact-page">
      <SmoothScroll />
      <Navbar />

      <section className="contact-hero" aria-label="Contact Dial Expert">
        <div className="contact-hero-inner">
          <div className="contact-hero-spacer" aria-hidden="true" />

          <form className="contact-form">
            <div className="field">
              <label htmlFor="name">Full Name*</label>
              <input id="name" placeholder="Full Name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email*</label>
              <input id="email" placeholder="you@example.com" type="email" />
            </div>
            <div className="field">
              <label htmlFor="country">Country*</label>
              <select id="country" defaultValue="">
                <option value="" disabled>
                  Please Select...
                </option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Egypt</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="business">Your line of business*</label>
              <input id="business" placeholder="e.g. Real Estate, E-commerce, Call Center" />
            </div>
            <div className="field">
              <label htmlFor="message">Anything else to add? (optional)</label>
              <textarea id="message" placeholder="Type your message here..." />
            </div>
            <button className="button button-light contact-submit" type="submit">
              <span>Submit</span>
            </button>
            <p className="contact-reply-note">Human replies within 4 business hours EST.</p>
          </form>
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
            <a className="contact-action" href="mailto:contact@dialexpertsolutions.com">
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
