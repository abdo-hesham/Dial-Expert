"use client";

import type { CSSProperties } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSectionHeading from "../AnimatedSectionHeading";
import EyebrowIcon from "../EyebrowIcon";
import HighlightMarkerTextReveal from "../HighlightMarkerTextReveal";

const team = [
  {
    name: "Mohamed Ibrahim",
    role: "Agent - 1 yrs",
    accent: "oklch(70% 0.18 250)",
    src: "https://framerusercontent.com/images/66EFnJbatkwuOs6n4IRhhS2IkY.jpg?width=1280&height=1280",
  },
  {
    name: "Nour Hassan",
    role: "Closer - 2 yrs",
    accent: "oklch(76% 0.16 165)",
    src: "https://framerusercontent.com/images/DJ3UKJV5DCaNNBAd5jmi55IMHeM.jpg?width=3024&height=4032",
  },
  {
    name: "Omar Adel",
    role: "Campaign lead - 3 yrs",
    accent: "oklch(74% 0.2 35)",
    src: "https://framerusercontent.com/images/g5lE8Lew6aKsf3kL0tzdeISurgk.jpg?width=2316&height=3088",
  },
  {
    name: "Youssef Samir",
    role: "Floor manager - 4 yrs",
    accent: "oklch(72% 0.18 285)",
    src: "https://framerusercontent.com/images/9bbCQsHfnRIEWwTsJpj76ZeifHs.jpg?width=2252&height=4000",
  },
  {
    name: "Karim Nabil",
    role: "QA coach - 2 yrs",
    accent: "oklch(78% 0.14 205)",
    src: "https://framerusercontent.com/images/ro7AK6m42H5HBn1YHWlRN89ihm8.jpg?width=3024&height=4032",
  },
  {
    name: "Nour said",
    role: "Agent - 1 yrs",
    accent: "oklch(73% 0.2 255)",
    src: "https://framerusercontent.com/images/J5KVtq4fCjd95XXrqJjMQivoJ4.jpg?width=1257&height=1886",
  },
  {
    name: "Mona Adel",
    role: "Account manager - 7 yrs",
    accent: "oklch(78% 0.16 95)",
    src: "https://framerusercontent.com/images/lXPGKJKNeVfM1KEgAmuakvdnQw.jpg?width=1290&height=2247",
  },
  {
    name: "Sara Mahmoud",
    role: "Training lead - 5 yrs",
    accent: "oklch(76% 0.18 330)",
    src: "https://framerusercontent.com/images/C139n8lAoJLOIVsVVe99V4fEDvU.jpg?width=2048&height=2048",
  },
];

export default function Team() {
  const ref = useRef(null);
  const loopedTeam = [...team, ...team];

  return (
    <section className="section section-white floor-section">
      <div ref={ref}>
        <div className="flex items-center justify-center gap-2">
          <EyebrowIcon variant="framer" />
          <span className="text-[16px] font-medium text-[var(--muted)]">
            Meet The Team
          </span>
        </div>
        <AnimatedSectionHeading
          lines={["The People Behind", "The Performance"]}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="floor-lead"
          style={{ maxWidth: 900 }}
        >
          DialExpert is not a faceless outsourcing company. Our team operates
          from Egypt with a real management structure, real leadership, and real
          people behind the work. Many of our managers started on the floor
          themselves. They have handled the calls, dealt with objections, solved
          customer issues, and earned their way into leadership. That matters.
          Because great teams are not managed by people who only read reports.
          They are led by people who understand the work firsthand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gallery-strip"
        >
          <div className="gallery-track">
            {loopedTeam.map((member, index) => (
              <article
                className="gallery-tile"
                key={`${member.name}-${index}`}
                style={
                  {
                    "--member-accent": member.accent,
                  } as CSSProperties
                }
              >
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 389px, 242px"
                  quality={50}
                  loading="lazy"
                />
                <div className="gallery-info">
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        <div className="floor-statement">
          <HighlightMarkerTextReveal
            textBefore="Low turnover isn't a perk."
            words={[
              "It's consistency that converts.",
              "It's compounded experience.",
              "It's stability that closes.",
            ]}
            markerColor="#3B82F6"
            markerColors={["#3B82F6", "#00DEBC", "#D0FF71", "#1A55F9"]}
          />
        </div>
      </div>
    </section>
  );
}
