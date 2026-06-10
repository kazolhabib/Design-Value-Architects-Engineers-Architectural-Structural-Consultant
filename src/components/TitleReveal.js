"use client";

import { motion } from "framer-motion";

export default function TitleReveal({ lines, className = "", delay = 0, as = "div" }) {
  const Component = motion[as] || motion.div;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay,
      },
    },
  };

  const lineVariants = {
    hidden: { y: "115%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1], // Custom ultra-premium cubic-bezier (easeOutExpo)
      },
    },
  };

  return (
    <Component
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {lines.map((line, idx) => (
        <span key={idx} className="overflow-hidden py-1.5 block relative">
          <motion.span
            variants={lineVariants}
            className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
