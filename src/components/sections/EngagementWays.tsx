"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSectionHeading from "../AnimatedSectionHeading";
import EyebrowIcon from "../EyebrowIcon";

const stats = [
  ["7+ Years", "Operating in the industry."],
  ["250+", "Active, on-floor professionals."],
  ["20+", "Dedicated managers."],
  ["$300M+", "Revenue generated across client campaigns."],
];

export default function EngagementWays() {
  const ref = useRef(null);

  return (
    <section className="section section-white who-section relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="who-body" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          <EyebrowIcon variant="framer" />
          <span>By The Numbers</span>
        </motion.div>

        <AnimatedSectionHeading
          lines={["Built With Real People,", "Real Management, And", "Real Scale."]}
        />

        <div className="stats-grid">
          {stats.map(([value, label], index) => (
            <motion.div
              key={label}
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.55 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="stat-number">{value}</div>
              <span className="stat-label">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
