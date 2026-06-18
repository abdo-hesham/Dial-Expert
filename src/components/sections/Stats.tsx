"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Search, TrendingUp, GraduationCap, Users, Building2 } from "lucide-react"
import AnimatedSectionHeading from "../AnimatedSectionHeading";
import EyebrowIcon from "../EyebrowIcon";

const points = [
  { icon: Search, text: "Rigorous recruiting process" },
  { icon: TrendingUp, text: "Performance-based culture" },
  { icon: GraduationCap, text: "Continuous training and coaching" },
  { icon: Users, text: "20+ managers overseeing execution" },
  { icon: Building2, text: "Real office operation in Egypt" },
];

export default function WhyDialExpert() {
  const ref = useRef(null);

  return (
    <section id="who-we-are" className="section section-dark why-section">
      <div className="why-body" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.6 }}
          className="eyebrow eyebrow-dark"
        >
          <EyebrowIcon variant="framer" />
          <span>Why DialExpert</span>
        </motion.div>

        <AnimatedSectionHeading
          lines={["Most Outsourcing Companies", "Sell Headcount. We Build", "Teams People Can Rely On."]}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="why-lead"
        >
          Anyone can fill seats. Very few can build a team that is trained, managed, accountable, and consistently improving. DialExpert was built for businesses that need more than headcount.
        </motion.p>

        <div className="why-points">
          {points.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.text}
                className="why-point"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <span className="why-point-icon">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <span>{item.text}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
