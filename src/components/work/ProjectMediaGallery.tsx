"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ProjectMedia } from "@/types/project";
import { LightboxModal, LightboxItem } from "@/components/ui/LightboxModal";
import { cn } from "@/lib/utils";

interface ProjectMediaGalleryProps {
  media: ProjectMedia[];
  title: string;
}

export function ProjectMediaGallery({ media, title }: ProjectMediaGalleryProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const [direction, setDirection] = React.useState<"left" | "right">("right");

  if (!media || media.length === 0) return null;

  const current = media[activeIndex];
  const hasMultiple = media.length > 1;

  const handleNext = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % media.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const lightboxItem: LightboxItem = {
    imageUrl: current.url,
    alt: current.alt,
    title,
    subtitle: current.caption || `Image ${activeIndex + 1} of ${media.length}`,
    description: current.caption,
  };

  return (
    <div className="space-y-3">
      {/* Main Display Stage */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#e8ded3] bg-stone-900 shadow-md group select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.url}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: direction === "right" ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: direction === "right" ? -20 : 20 }}
            transition={{ duration: 0.25 }}
            className="relative h-full w-full cursor-zoom-in"
            onClick={() => setIsLightboxOpen(true)}
          >
            <Image
              src={current.url}
              alt={current.alt}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Caption Bar */}
        {current.caption && (
          <div className="absolute inset-x-0 bottom-0 bg-[#18120d]/85 px-4 py-2.5 text-xs font-mono text-[#f2e7dc] backdrop-blur-xs flex items-center justify-between gap-3">
            <span className="truncate">{current.caption}</span>
            {hasMultiple && (
              <span className="shrink-0 px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-stone-300">
                {activeIndex + 1} / {media.length}
              </span>
            )}
          </div>
        )}

        {/* Top Floating Controls */}
        <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white hover:bg-black/85 transition-colors backdrop-blur-xs cursor-pointer shadow-xs"
            title="Expand Fullscreen Lightbox"
          >
            <Maximize2 className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Multi-Slide Navigation Arrows */}
        {hasMultiple && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 active:scale-95 transition-all cursor-pointer backdrop-blur-xs opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 active:scale-95 transition-all cursor-pointer backdrop-blur-xs opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* Multi-image Filmstrip Strip */}
      {hasMultiple && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {media.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? "right" : "left");
                  setActiveIndex(idx);
                }}
                className={cn(
                  "relative h-14 w-24 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer",
                  isActive
                    ? "border-[#8c532b] shadow-xs scale-102"
                    : "border-[#e8ded3] opacity-60 hover:opacity-100"
                )}
              >
                <Image
                  src={item.url}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        item={lightboxItem}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={hasMultiple}
        hasNext={hasMultiple}
        currentIndex={activeIndex}
        totalItems={media.length}
      />
    </div>
  );
}
