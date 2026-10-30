"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "none";
  distance?: number;
  duration?: number;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 38,
  duration = 0.65,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const initialY =
    shouldReduceMotion || direction === "none"
      ? 0
      : direction === "down"
      ? -distance
      : distance;

  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: shouldReduceMotion ? 0.15 : duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
