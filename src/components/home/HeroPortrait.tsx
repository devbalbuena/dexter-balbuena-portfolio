"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Zap, Palette, ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";

interface HeroPortraitProps {
  hasPhoto: boolean;
}

export function HeroPortrait({ hasPhoto }: HeroPortraitProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  // Normalized mouse coordinates (-0.5 to 0.5) for 3D tilt & orbiting parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for buttery-smooth tilt damping
  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 24 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 24 });

  // 3D Tilt angles for central portrait (gentle, luxury depth)
  const tiltAngle = 5;
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${tiltAngle}deg`, `-${tiltAngle}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${tiltAngle}deg`, `${tiltAngle}deg`]);

  // Subtle floating parallax offsets for the 3 badges (zero overlap with photo)
  const orbit1X = useTransform(mouseXSpring, [-0.5, 0.5], [-8, 8]);
  const orbit1Y = useTransform(mouseYSpring, [-0.5, 0.5], [-6, 6]);

  const orbit2X = useTransform(mouseXSpring, [-0.5, 0.5], [-8, 8]);
  const orbit2Y = useTransform(mouseYSpring, [-0.5, 0.5], [6, -6]);

  const orbit3X = useTransform(mouseXSpring, [-0.5, 0.5], [10, -10]);
  const orbit3Y = useTransform(mouseYSpring, [-0.5, 0.5], [8, -8]);

  // Ambient spotlight spring tracking cursor movement
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], [-25, 25]), { stiffness: 140, damping: 20 });
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], [-25, 25]), { stiffness: 140, damping: 20 });

  // Specular glass sheen horizontal sweep on cursor movement
  const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ["-60%", "60%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1100px" }}
      className="relative mx-auto flex flex-col items-center justify-center w-full max-w-[500px] py-6 sm:py-8 select-none"
    >
      {/* Warm Ambient Halo Backlight */}
      <motion.div
        style={shouldReduceMotion ? {} : { x: glowX, y: glowY }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.05, 1],
                opacity: isHovered ? [0.75, 0.95, 0.75] : [0.5, 0.65, 0.5],
              }
        }
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -inset-6 sm:-inset-10 z-0 rounded-full bg-gradient-to-tr from-[#8c532b]/25 via-[#d4976a]/20 to-[#b87333]/15 blur-3xl"
        aria-hidden="true"
      />

      {/* Central Portrait Studio Wrapper */}
      <div className="relative flex items-center justify-center w-full">
        {/* MAIN PORTRAIT CARD: Big, Bold & Unobstructed */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 14 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          style={
            shouldReduceMotion
              ? {}
              : {
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }
          }
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-[310px] sm:w-[350px] md:w-[370px] aspect-[4/5] rounded-3xl p-[2.5px] bg-gradient-to-b from-[#8c532b] via-[#d4976a]/60 to-[#18120d]/40 shadow-2xl transition-shadow duration-500 hover:shadow-[#8c532b]/20"
        >
          {/* Inner Studio Frame */}
          <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-gradient-to-b from-[#faf6f0] via-[#f5ede2] to-[#ebdccb]">
            {/* Subtle Studio Ring & Warm Radial Backdrop */}
            <div
              className="pointer-events-none absolute inset-0 bg-radial from-[#8c532b]/15 via-transparent to-transparent"
              aria-hidden="true"
            />

            {hasPhoto ? (
              <>
                <Image
                  src="/images/portrait.png"
                  alt="Portrait of Dexter E. Balbuena"
                  fill
                  priority
                  sizes="(max-width: 768px) 310px, (max-width: 1200px) 350px, 370px"
                  className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.02]"
                />

                {/* Subtle Cinematic Bottom Vignette (Keeps suit & tie fully visible, no obstructive nameplate) */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16 z-10 bg-gradient-to-t from-[#18120d]/30 via-transparent to-transparent"
                  aria-hidden="true"
                />

                {/* Interactive Specular Glare/Sheen on Hover Tilt */}
                {!shouldReduceMotion && (
                  <motion.div
                    style={{
                      x: sheenX,
                      opacity: isHovered ? 0.25 : 0,
                      background:
                        "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.4) 50%, transparent 65%)",
                    }}
                    className="pointer-events-none absolute -inset-full z-20 mix-blend-overlay transition-opacity duration-300"
                    aria-hidden="true"
                  />
                )}
              </>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-[#8c532b] font-mono text-3xl font-extrabold text-white shadow-md">
                  DB
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* PROOF CARD 1 (Top-Left): Outside the photo frame, zero overlap on face */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -16, y: -8 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={shouldReduceMotion ? {} : { x: orbit1X, y: orbit1Y }}
          className="hidden sm:block absolute -left-10 lg:-left-16 -top-4 z-20"
        >
          <Link
            href="/work/amazon-pinterest-affiliate"
            className="group/card block w-[180px] rounded-2xl bg-white/95 backdrop-blur-md border border-[#ebdccb] p-3 shadow-lg hover:border-[#8c532b] hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60">
                <TrendingUp className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <span className="block font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-700">
                  Organic Traffic
                </span>
                <span className="block text-sm font-extrabold text-stone-900 leading-tight">
                  24.3K+ Views
                </span>
              </div>
            </div>
            <div className="mt-1.5 pt-1.5 border-t border-stone-100 flex items-center justify-between text-[9.5px] font-mono text-stone-500 group-hover/card:text-[#8c532b] transition-colors">
              <span>Pinterest SEO • $0 Ads</span>
              <ArrowUpRight className="h-3 w-3 shrink-0" />
            </div>
          </Link>
        </motion.div>

        {/* PROOF CARD 2 (Bottom-Left): Floating at bottom-left corner, zero overlap on chest/suit */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -16, y: 12 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={shouldReduceMotion ? {} : { x: orbit2X, y: orbit2Y }}
          className="hidden sm:block absolute -left-12 lg:-left-20 -bottom-5 z-20"
        >
          <Link
            href="/#design-gallery"
            className="group/ad block w-[205px] rounded-2xl bg-[#18120d]/95 backdrop-blur-md border border-[#8c532b]/80 p-3 shadow-xl hover:border-amber-400 transition-all duration-300"
          >
            <div className="flex items-center gap-2.5">
              {/* Miniature 3-Poster Fan */}
              <div className="relative flex items-center justify-center w-[78px] h-[48px] shrink-0">
                <div className="absolute left-0 w-8 h-11 rounded-md overflow-hidden border border-white/20 shadow-md -rotate-10 group-hover/ad:-rotate-16 group-hover/ad:-translate-x-1 transition-transform duration-300">
                  <Image
                    src="/images/designs/shoes-volt-run-kinetic.png"
                    alt="Volt Run Sneaker Ad"
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 w-8 h-11 rounded-md overflow-hidden border border-white/30 shadow-lg group-hover/ad:-translate-y-1 transition-transform duration-300">
                  <Image
                    src="/images/designs/burger-stackhouse-double-trouble.png"
                    alt="Stackhouse Burger Ad"
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute right-0 w-8 h-11 rounded-md overflow-hidden border border-white/20 shadow-md rotate-10 group-hover/ad:rotate-16 group-hover/ad:translate-x-1 transition-transform duration-300">
                  <Image
                    src="/images/designs/coffee-tala-cold-brew.png"
                    alt="Tala Coffee Ad"
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="min-w-0">
                <span className="block font-mono text-[9px] font-bold uppercase tracking-wider text-amber-400">
                  Figma &amp; Canva
                </span>
                <span className="block text-xs font-extrabold text-white leading-tight">
                  9 Ad Suites
                </span>
                <span className="block text-[9.5px] font-mono text-stone-300 mt-0.5">
                  4:5 &amp; 2:3 Formats
                </span>
              </div>
            </div>

            <div className="mt-2 rounded-lg bg-[#2a1f16] px-2.5 py-1 flex items-center justify-between text-[9.5px] font-mono text-amber-200 group-hover/ad:bg-[#8c532b] group-hover/ad:text-white transition-colors">
              <span className="inline-flex items-center gap-1">
                <Palette className="h-3 w-3" /> Inspect Designs
              </span>
              <span>→</span>
            </div>
          </Link>
        </motion.div>

        {/* PROOF CARD 3 (Right Side): Floating on the right margin, zero overlap on photo */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 16, y: 0 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={shouldReduceMotion ? {} : { x: orbit3X, y: orbit3Y }}
          className="hidden sm:block absolute -right-10 lg:-right-16 top-1/2 -translate-y-1/2 z-20"
        >
          <Link
            href="/work"
            className="group/sys block w-[175px] rounded-2xl bg-white/95 backdrop-blur-md border border-[#ebdccb] p-3 shadow-lg hover:border-[#8c532b] hover:shadow-xl transition-all duration-300"
          >
            <div className="inline-flex items-center gap-1 rounded-md bg-[#faf5ee] border border-[#ebdccb] px-2 py-0.5 text-[9px] font-mono font-bold text-[#8c532b]">
              <Zap className="h-3 w-3" /> AUTOMATED SYSTEMS
            </div>
            <p className="mt-1.5 text-xs font-extrabold text-stone-900 leading-snug">
              6 Excel Workbooks
            </p>
            <p className="text-[10px] font-medium text-stone-600">
              + Next.js Retail ERP
            </p>
            <div className="mt-1.5 pt-1.5 border-t border-stone-100 flex items-center justify-between text-[9.5px] font-mono font-bold text-emerald-700 group-hover/sys:text-[#8c532b] transition-colors">
              <span>Explore Workbooks</span>
              <ArrowUpRight className="h-3 w-3 shrink-0" />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Mobile Compact Proof Strip (Visible only on < sm screens) */}
      <div className="grid grid-cols-3 gap-2 w-full mt-5 sm:hidden">
        <Link
          href="/work/amazon-pinterest-affiliate"
          className="rounded-xl bg-white border border-[#ebdccb] p-2.5 text-center shadow-xs"
        >
          <span className="block font-mono text-[9px] font-bold text-emerald-700 uppercase">
            Pinterest SEO
          </span>
          <span className="block text-xs font-extrabold text-stone-900 mt-0.5">
            24.3K+ Views
          </span>
        </Link>
        <Link
          href="/#design-gallery"
          className="rounded-xl bg-[#18120d] border border-[#8c532b] p-2.5 text-center shadow-xs"
        >
          <span className="block font-mono text-[9px] font-bold text-amber-400 uppercase">
            Figma &amp; Canva
          </span>
          <span className="block text-xs font-extrabold text-white mt-0.5">
            9 Ad Suites
          </span>
        </Link>
        <Link
          href="/work"
          className="rounded-xl bg-white border border-[#ebdccb] p-2.5 text-center shadow-xs"
        >
          <span className="block font-mono text-[9px] font-bold text-[#8c532b] uppercase">
            Operations
          </span>
          <span className="block text-xs font-extrabold text-stone-900 mt-0.5">
            6 .XLSX + ERP
          </span>
        </Link>
      </div>
    </div>
  );
}
