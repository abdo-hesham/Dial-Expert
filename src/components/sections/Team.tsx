"use client";

import type { CSSProperties } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSectionHeading from "../AnimatedSectionHeading";

const team = [
  {
    name: "Mohamed Ibrahim",
    role: "Floor Manager",
    desc: "Started as an agent. Now leads daily execution, quality, and performance for client campaigns.",
    accent: "oklch(70% 0.18 250)",
    src: "https://framerusercontent.com/images/66EFnJbatkwuOs6n4IRhhS2IkY.jpg",
  },
  {
    name: "Nour Hassan",
    role: "Floor Manager",
    desc: "Started as an agent. Now leads daily execution, quality, and performance for client campaigns.",
    accent: "oklch(76% 0.16 165)",
    src: "https://framerusercontent.com/images/DJ3UKJV5DCaNNBAd5jmi55IMHeM.jpg",
  },
  {
    name: "Omar Adel",
    role: "Floor Manager",
    desc: "Started as an agent. Now leads daily execution, quality, and performance for client campaigns.",
    accent: "oklch(74% 0.2 35)",
    src: "https://framerusercontent.com/images/g5lE8Lew6aKsf3kL0tzdeISurgk.jpg",
  },
  {
    name: "Youssef Samir",
    role: "Floor Manager",
    desc: "Started as an agent. Now leads daily execution, quality, and performance for client campaigns.",
    accent: "oklch(72% 0.18 285)",
    src: "https://framerusercontent.com/images/9bbCQsHfnRIEWwTsJpj76ZeifHs.jpg",
  },
  {
    name: "Karim Nabil",
    role: "Floor Manager",
    desc: "Started as an agent. Now leads daily execution, quality, and performance for client campaigns.",
    accent: "oklch(78% 0.14 205)",
    src: "https://framerusercontent.com/images/ro7AK6m42H5HBn1YHWlRN89ihm8.jpg",
  },
  {
    name: "Nour Elsaid",
    role: "Floor Manager",
    desc: "Started as an agent. Now leads daily execution, quality, and performance for client campaigns.",
    accent: "oklch(73% 0.2 255)",
    src: "https://framerusercontent.com/images/J5KVtq4fCjd95XXrqJjMQivoJ4.jpg",
  },
  {
    name: "Mona Adel",
    role: "Floor Manager",
    desc: "Started as an agent. Now leads daily execution, quality, and performance for client campaigns.",
    accent: "oklch(78% 0.16 95)",
    src: "https://framerusercontent.com/images/lXPGKJKNeVfM1KEgAmuakvdnQw.jpg",
  },
  {
    name: "Sara Mahmoud",
    role: "Floor Manager",
    desc: "Started as an agent. Now leads daily execution, quality, and performance for client campaigns.",
    accent: "oklch(76% 0.18 330)",
    src: "https://framerusercontent.com/images/C139n8lAoJLOIVsVVe99V4fEDvU.jpg",
  },
];

export default function Team() {
  const ref = useRef(null);
  const loopedTeam = [...team, ...team];

  return (
    <section className="section section-white floor-section">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          <span>Meet The Team</span>
        </motion.div>
        <AnimatedSectionHeading lines={["The People Behind", "The Performance"]} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="floor-body"
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
          viewport={{ once: true, amount: 0.25 }}
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
                  quality={80}
                  loading="lazy"
                />
                <div className="gallery-info">
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                  <span className="gallery-desc">{member.desc}</span>
                </div>
              </article>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}
