"use client";

import { motion } from "framer-motion";

export default function Reveal({
  children,
  duration = 0.8,
  delay = 0,
  y = 40,
  x = 0,
  scale = 1,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom ultra-premium cubic-bezier (easeOutExpo)
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
