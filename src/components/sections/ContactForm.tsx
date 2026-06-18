"use client"

import { motion } from "framer-motion"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

const supportOptions = ["Sales", "Support", "Lead Generation", "Appointment Setting", "Customer Support", "Specialized Campaign", "Other"]

export default function ContactForm() {
  return (
    <section id="contact" className="section section-white contact-form-section">
      <div className="contact-form-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.6 }}
          className="contact-form-head"
        >
          <div className="eyebrow">
            <EyebrowIcon variant="framer" />
            <span>Get In Touch</span>
          </div>
          <AnimatedSectionHeading
            lines={["Tell Us What", "You Need"]}
          />
        </motion.div>

        <motion.form
          className="contact-form-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-form-grid">
            <div className="field">
              <label htmlFor="form-name">Name</label>
              <input id="form-name" placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="form-email">Email</label>
              <input id="form-email" placeholder="you@example.com" type="email" />
            </div>
            <div className="field">
              <label htmlFor="form-company">Company</label>
              <input id="form-company" placeholder="Company name" />
            </div>
            <div className="field">
              <label htmlFor="form-website">Website</label>
              <input id="form-website" placeholder="yourwebsite.com" />
            </div>
          </div>

          <div className="field">
            <label htmlFor="form-support">What support do you need?</label>
            <select id="form-support" defaultValue="">
              <option value="" disabled>Select an option...</option>
              {supportOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="form-message">Tell us about your goals.</label>
            <textarea id="form-message" placeholder="Tell us about your goals..." />
          </div>

          <button className="button button-light contact-form-submit" type="submit">
            <span>Submit Request</span>
          </button>
        </motion.form>
      </div>
    </section>
  )
}
