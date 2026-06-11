"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import AnimatedSectionHeading from "../AnimatedSectionHeading"
import EyebrowIcon from "../EyebrowIcon"

const faqData = [
  {
    q: "How does the revenue share program work?",
    a: "On qualifying engagements, we tie our pay to your numbers — not to a contract signed in advance. Most arrangements involve a base operational fee with the upside indexed to your results. We work the campaign on the line. If we don't perform, the economics reflect it. Ask us on the call — it's easier to explain than write down.",
  },
  {
    q: "What happens if results don't come in month one?",
    a: "We tell you before you have to ask. Real-time reporting means you see exactly what we see, every day. And the revenue share model means we feel the same number you feel — so if something isn't converting, fixing it costs us too. That's not a guarantee. It's the economics of how this is structured.",
  },
  {
    q: "How fast can a campaign go live?",
    a: "Ten business days from signed agreement to first live call. We've built the infrastructure, the training programs, and the systems so you're not waiting for us to get ready. Most outsourcing operations take 4-6 weeks to launch. We've already absorbed that setup cost so you don't have to.",
  },
  {
    q: "How do you handle compliance in regulated industries?",
    a: "Regulated industries are where most outsourcing firms cut corners. Our agents are trained in the specific compliance language and documentation requirements of each vertical — debt settlement, debt collection, health insurance, auto insurance, tax relief. No generic scripts running on sensitive conversations.",
  },
  {
    q: "What does your proprietary infrastructure mean for my data?",
    a: "Our CRM, sales tracker, and operational platforms were built in-house. Your client data sits inside infrastructure we own and control end-to-end — not third-party tools where most BPO breaches originate. We took that breach vector off the table entirely.",
  },
  {
    q: "Do clients typically start with one service or multiple?",
    a: "Most start with one — usually cold calling or a financial program vertical. About two-thirds expand into a second service within 90 days. A 30-minute call is enough to figure out which one makes sense for you first.",
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
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <EyebrowIcon variant="framer" />
            <span>FAQs</span>
          </motion.div>
          <AnimatedSectionHeading
            lines={["Questions we get", "before every deal."]}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-lead"
          >
            If you&apos;re evaluating us, you&apos;re probably thinking at least
            one of these.
          </motion.p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
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
