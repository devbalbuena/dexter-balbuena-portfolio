"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

interface HeroPortraitProps {
  hasPhoto: boolean;
}

export function HeroPortrait({ hasPhoto }: HeroPortraitProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto flex w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px] items-center justify-center">
      {/* Static soft spotlight glow behind portrait (Task 3) */}
      <div
        className="pointer-events-none absolute -inset-4 sm:-inset-8 z-0 rounded-full bg-blue-600/10 dark:bg-blue-500/15 blur-3xl opacity-80"
        aria-hidden="true"
      />

      {/* Portrait card frame with motion entrance (Task 4) */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full aspect-[4/5] overflow-hidden rounded-2xl border border-stone-200/90 bg-stone-100/60 shadow-lg dark:border-stone-800/90 dark:bg-stone-900/70"
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
              <span className="inline-flex items-center gap-1 rounded-md bg-stone-200/70 px-2 py-0.5 font-mono text-[10px] text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Verified Identity
              </span>
            </div>

            <div className="space-y-3">
              <div className="mx-auto flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-2xl bg-blue-600 font-mono text-3xl sm:text-4xl font-extrabold text-white shadow-md">
                DB
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                  Dexter E. Balbuena
                </h3>
                <p className="text-xs font-mono text-stone-500 dark:text-stone-400">
                  E-Commerce &amp; Admin VA
                </p>
              </div>
            </div>

            <div className="w-full rounded-lg border border-dashed border-stone-300/80 bg-stone-50/80 p-2.5 dark:border-stone-700/80 dark:bg-stone-850/60 text-[11px] font-mono text-stone-500 dark:text-stone-400">
              [Photo placeholder: save as public/images/portrait.png]
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
