"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

const faqData = [
  {
    q: "What does DialExpert actually do?",
    a: "We build and manage sales, support, and lead gen teams. You provide the strategy and targets — we provide the people, management, and daily execution.",
  },
  {
    q: "Where are your agents located?",
    a: "Our team is based in a physical office in Egypt. Not a work-from-home setup — a real floor with infrastructure, security, and on-site management.",
  },
  {
    q: "How do you hire?",
    a: "We screen for self-motivated individuals who already have discipline. Every agent is vetted, tested, and proven before they touch a live campaign.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Yes. We can operate as a full external team or support your internal operations — whatever structure fits your business best.",
  },
  {
    q: "How is performance managed?",
    a: "Our managers oversee quality and execution daily. Real-time reporting, continuous coaching, and weekly reviews keep every campaign on track.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)

  return (
    <section id="faqs" className="section section-white faq-section">
      <div ref={ref} className="faq-shell">
        <div className="faq-head">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.55 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <EyebrowIcon variant="framer" />
            <span>FAQs</span>
          </motion.div>
          <AnimatedSectionHeading
            lines={["Questions Worth Asking", "Before You Build Your", "Next Team."]}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.55 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-lead"
          >
            If you&apos;re evaluating an outsourced team, these are the questions
            worth answering first.
          </motion.p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
            >
              <button
                className="faq-item"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                type="button"
              >
                <span className={openIndex === index ? "faq-question-open" : ""}>{item.q}</span>
                <span className={`faq-toggle${openIndex === index ? " faq-toggle-open" : ""}`}>
                  <span className="faq-toggle-bar" />
                  <span className="faq-toggle-bar" />
                </span>
              </button>
              <div
                className={`faq-answer${openIndex === index ? " open" : ""}`}
              >
                <p>{item.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
