"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeading from "../AnimatedSectionHeading";
import EyebrowIcon from "../EyebrowIcon";

const stats = [
  ["7+", "Years Operating"],
  ["250+", "Active Professionals"],
  ["20+", "Dedicated Managers"],
  ["$300M+", "Revenue Generated"],
];

export default function Stats() {
  const ref = useRef(null);

  return (
    <section id="who-we-are" className="section section-white who-section">
      <div className="who-body" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          <EyebrowIcon variant="framer" />
          <span>Why DialExpert</span>
        </motion.div>

        <AnimatedSectionHeading
          lines={["Most Outsourcing Companies", "Sell Headcount. We Build", "Teams People Can Rely On."]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="who-copy"
        >
          <p>
            Anyone can fill seats. Very few can build a team that is trained, managed, accountable, and consistently improving. DialExpert was built for businesses that need more than headcount.
          </p>
          <p>
            <strong>Rigorous recruiting process</strong> &mdash; We screen for self-motivated individuals who already have discipline.
          </p>
          <p>
            <strong>Performance-based culture</strong> &mdash; Every agent is held to measurable standards that improve over time.
          </p>
          <p>
            <strong>Continuous training and coaching</strong> &mdash; Structured onboarding and ongoing development, not one-and-done training.
          </p>
          <p>
            <strong>20+ managers overseeing execution</strong> &mdash; Real management structure with leaders who came up through the floor.
          </p>
          <p>
            <strong>Real office operation in Egypt</strong> &mdash; A physical office with real infrastructure, not a remote-at-home model.
          </p>
        </motion.div>

        <div className="stats-grid">
          {stats.map(([value, label], index) => (
            <motion.div
              key={label}
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="stat-number">{value}</div>
              <span className="stat-label">
                {label.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
