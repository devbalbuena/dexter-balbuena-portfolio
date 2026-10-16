"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";

interface HeroPortraitProps {
  hasPhoto: boolean;
}

export function HeroPortrait({ hasPhoto }: HeroPortraitProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  // Mouse coordinate spring physics for the ambient radial spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(useTransform(mouseX, [-150, 150], [-35, 35]), { stiffness: 140, damping: 20 });
  const glowY = useSpring(useTransform(mouseY, [-200, 200], [-35, 35]), { stiffness: 140, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto flex w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px] items-center justify-center cursor-default select-none"
    >
      {/* Ambient breathing halo backlight with cursor-lag tracking */}
      <motion.div
        style={shouldReduceMotion ? {} : { x: glowX, y: glowY }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.08, 1],
                opacity: isHovered ? [0.75, 0.95, 0.75] : [0.5, 0.7, 0.5],
              }
        }
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -inset-6 sm:-inset-10 z-0 rounded-full bg-gradient-to-tr from-[#8c532b]/30 via-[#d4976a]/25 to-[#b87333]/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Secondary core warmth layer behind portrait */}
      <div
        className="pointer-events-none absolute inset-2 z-0 rounded-3xl bg-[#d4976a]/15 blur-2xl"
        aria-hidden="true"
      />

      {/* Portrait card frame with motion entrance and hover physics */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
        whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full aspect-[4/5] overflow-hidden rounded-2xl border border-[#e8ded3] bg-white shadow-xl transition-shadow hover:shadow-2xl"
      >
        {hasPhoto ? (
          <Image
            src="/images/portrait.png"
            alt="Portrait of Dexter E. Balbuena"
            fill
            priority
            sizes="(max-width: 768px) 320px, (max-width: 1200px) 360px, 380px"
            className="object-cover object-top transition-transform duration-500 hover:scale-102"
          />
        ) : (
          /* Tidy styled placeholder when portrait.png is not yet uploaded */
          <div className="flex h-full w-full flex-col items-center justify-between p-6 text-center">
            <div className="w-full flex justify-end">
              <span className="inline-flex items-center gap-1 rounded-md bg-stone-100 px-2 py-0.5 font-mono text-[10px] text-stone-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Verified Identity
              </span>
            </div>

            <div className="space-y-3">
              <div className="mx-auto flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-2xl bg-[#a86e3b] font-mono text-3xl sm:text-4xl font-extrabold text-white shadow-md">
                DB
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900">
                  Dexter E. Balbuena
                </h3>
                <p className="text-xs font-mono text-stone-500">
                  E-Commerce &amp; Admin VA
                </p>
              </div>
            </div>

            <div className="w-full rounded-lg border border-dashed border-[#e8ded3] bg-[#f9f6f2] p-2.5 text-[11px] font-mono text-stone-500">
              [Photo placeholder: save as public/images/portrait.png]
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
