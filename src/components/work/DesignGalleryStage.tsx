"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Play, 
  Pause, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { GRAPHIC_DESIGNS, GraphicDesignItem } from "@/data/graphicDesigns";
import { LightboxModal } from "@/components/ui/LightboxModal";
import { cn } from "@/lib/utils";

interface DesignGalleryStageProps {
  initialIndex?: number;
  className?: string;
}

export function DesignGalleryStage({ initialIndex = 0, className = "" }: DesignGalleryStageProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = React.useState(initialIndex);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const [direction, setDirection] = React.useState<"left" | "right">("right");

  const total = GRAPHIC_DESIGNS.length;
  const current = GRAPHIC_DESIGNS[activeIndex];

  const handleNext = React.useCallback(() => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = React.useCallback(() => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay ticker (5 seconds per slide)
  React.useEffect(() => {
    if (!isPlaying || isLightboxOpen) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, isLightboxOpen, handleNext]);

  return (
    <div className={cn("space-y-4", className)}>
      {/* Theatrical Card Container */}
      <div className="workspace-card rounded-2xl overflow-hidden bg-white border border-[#e8ded3] shadow-md">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-[#ebdccb] bg-[#faf6f0]">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#8c532b] text-white">
              <Layers className="h-4 w-4" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
                Interactive Slideshow Gallery
              </span>
              <h3 className="text-sm font-bold text-stone-900">
                Canva Pro &amp; Figma Creative Assets
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xs font-mono font-bold text-stone-600 bg-white px-2.5 py-1 rounded-full border border-[#ebdccb]">
              {activeIndex + 1} of {total}
            </span>

            {/* Play/Pause Toggle */}
            <button
              onClick={() => setIsPlaying((p) => !p)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-[#ebdccb] text-xs font-mono text-stone-700 hover:text-stone-900 transition-colors cursor-pointer"
              title={isPlaying ? "Pause autoplay" : "Start autoplay"}
            >
              {isPlaying ? (
                <>
                  <Pause className="h-3 w-3 text-amber-700" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="h-3 w-3 text-emerald-700" />
                  <span className="hidden sm:inline">Play</span>
                </>
              )}
            </button>

            {/* Full-screen Zoom trigger */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#8c532b] text-white text-xs font-mono font-semibold hover:bg-[#704221] transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <Maximize2 className="h-3.5 w-3.5" />
              <span>Full View</span>
            </button>
          </div>
        </div>

        {/* Main Stage Grid: Left Stage Screen + Right Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[500px]">
          {/* Visual Presentation Stage (Dark contrast theatre) */}
          <div className="lg:col-span-7 bg-[#15100c] relative flex items-center justify-center p-4 sm:p-8 overflow-hidden select-none group">
            {/* Ambient Background Warmth */}
            <div 
              className="pointer-events-none absolute inset-0 bg-radial from-[#8c532b]/20 via-transparent to-transparent opacity-60"
              aria-hidden="true" 
            />

            {/* Active Slide Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: direction === "right" ? 30 : -30, scale: 0.98 }
                }
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: direction === "right" ? -30 : 30, scale: 0.98 }
                }
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setIsLightboxOpen(true)}
                className="relative z-10 w-full h-[360px] sm:h-[420px] flex items-center justify-center cursor-zoom-in"
              >
                <Image
                  src={current.imageUrl}
                  alt={current.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain filter drop-shadow-2xl transition-transform duration-500 group-hover:scale-102"
                />

                {/* Hover overlay hint */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to Expand 🔍
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Slide Category Badge Pill */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <Badge variant="accent" size="sm" className="bg-[#8c532b] text-white border-none shadow-sm">
                {current.categoryLabel}
              </Badge>
              <span className="text-[11px] font-mono text-stone-300 bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
                {current.format}
              </span>
            </div>
          </div>

          {/* Right Detail Panel: Context, Specs & Strategic Value */}
          <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between space-y-5 bg-[#fbf9f6] border-t lg:border-t-0 lg:border-l border-[#ebdccb]">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8c532b]">
                    {current.format} • {current.dimensions}
                  </span>
                </div>
                <h4 className="text-xl font-extrabold tracking-tight text-stone-900 leading-snug">
                  {current.title}
                </h4>
                <p className="mt-1 text-xs font-mono text-stone-500">
                  {current.subtitle}
                </p>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                {current.description}
              </p>

              {/* Strategic Highlights */}
              <div className="rounded-xl p-3.5 bg-white border border-[#ebdccb] space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-500 block">
                  Design Strategy &amp; Execution
                </span>
                <ul className="space-y-1.5 text-xs text-stone-700">
                  {current.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tooling & Result Callout */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs font-mono">
                <span className="text-stone-500">
                  Tool: <strong className="text-stone-900">{current.tool}</strong>
                </span>
                {current.resultMetric && (
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    {current.resultMetric}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Case Study Link Button */}
            <div className="pt-4 border-t border-[#ebdccb]">
              {current.caseStudySlug ? (
                <Link
                  href={`/work/${current.caseStudySlug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-[#8c532b] transition-colors shadow-xs"
                >
                  <span>View Case Study Context</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ) : (
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#8c532b] text-white text-xs font-semibold hover:bg-[#704221] transition-colors shadow-xs cursor-pointer"
                >
                  <span>Inspect High-Resolution Asset</span>
                  <Maximize2 className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Interactive Thumbnail Strip */}
        <div className="p-3 sm:p-4 bg-[#faf5ee] border-t border-[#ebdccb] overflow-x-auto">
          <div className="flex items-center gap-2.5 min-w-max">
            {GRAPHIC_DESIGNS.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setDirection(idx > activeIndex ? "right" : "left");
                    setActiveIndex(idx);
                  }}
                  className={cn(
                    "relative rounded-xl overflow-hidden border-2 transition-all p-1 bg-white cursor-pointer group flex items-center gap-2.5",
                    isActive
                      ? "border-[#8c532b] shadow-xs scale-102 bg-[#fdfaf7]"
                      : "border-[#e8ded3] hover:border-[#8c532b]/50 opacity-70 hover:opacity-100"
                  )}
                >
                  <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-lg overflow-hidden bg-stone-900 shrink-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.alt}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="text-left pr-2 hidden sm:block">
                    <span className="block text-[11px] font-bold text-stone-900 truncate max-w-[130px]">
                      {item.title}
                    </span>
                    <span className="block text-[10px] font-mono text-stone-500">
                      {item.format}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        item={current}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={total > 1}
        hasNext={total > 1}
        currentIndex={activeIndex}
        totalItems={total}
      />
    </div>
  );
}

