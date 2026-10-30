"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, Layers } from "lucide-react";
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
  const isPortraitGallery = hasMultiple || current.url.includes("/images/designs/");

  const handleNext = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % media.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  // Split caption into a bold label and description if formatted as "Label: Description"
  const captionParts = React.useMemo(() => {
    if (!current.caption) return null;
    const colonIdx = current.caption.indexOf(":");
    if (colonIdx !== -1 && colonIdx < 48) {
      return {
        badge: current.caption.slice(0, colonIdx).trim(),
        text: current.caption.slice(colonIdx + 1).trim(),
      };
    }
    return { badge: null, text: current.caption };
  }, [current.caption]);

  const lightboxItem: LightboxItem = {
    imageUrl: current.url,
    alt: current.alt,
    title: captionParts?.badge || title,
    subtitle: `Asset ${activeIndex + 1} of ${media.length}`,
    description: captionParts?.text || current.caption,
  };

  return (
    <div className="space-y-4">
      {/* Main Studio Display Card */}
      <div className="overflow-hidden rounded-2xl border border-[#e8ded3] bg-white shadow-md select-none">
        {/* Top Studio Bar for Multi-Asset Galleries */}
        {hasMultiple && (
          <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 bg-[#faf6f0] border-b border-[#ebdccb]">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#8c532b] text-white">
                <Layers className="h-3.5 w-3.5" />
              </span>
              <span className="text-xs font-mono font-bold text-stone-800">
                {captionParts?.badge || current.alt}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#ebdccb] text-[11px] font-mono font-bold text-stone-700">
                {activeIndex + 1} of {media.length}
              </span>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#8c532b] text-white text-xs font-mono font-semibold hover:bg-[#704221] transition-all cursor-pointer shadow-2xs"
                title="Expand Fullscreen Lightbox"
              >
                <Maximize2 className="h-3 w-3" />
                <span className="hidden sm:inline">Full Size</span>
              </button>
            </div>
          </div>
        )}

        {/* Visual Presentation Stage */}
        <div
          className={cn(
            "relative w-full overflow-hidden bg-[#140e0a] group flex items-center justify-center",
            isPortraitGallery ? "h-[460px] sm:h-[560px] p-4 sm:p-8" : "aspect-video"
          )}
        >
          {/* Subtle Ambient Studio Glow */}
          <div
            className="pointer-events-none absolute inset-0 bg-radial from-[#8c532b]/20 via-transparent to-transparent opacity-60"
            aria-hidden="true"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.url}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: direction === "right" ? 24 : -24, scale: 0.98 }
              }
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: direction === "right" ? -24 : 24, scale: 0.98 }
              }
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full w-full cursor-zoom-in flex items-center justify-center"
              onClick={() => setIsLightboxOpen(true)}
            >
              <Image
                src={current.url}
                alt={current.alt}
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className={cn(
                  "transition-transform duration-500",
                  isPortraitGallery
                    ? "object-contain p-1 sm:p-2 filter drop-shadow-2xl group-hover:scale-[1.02]"
                    : "object-cover"
                )}
              />
            </motion.div>
          </AnimatePresence>

          {/* Single-Image Top Right Zoom Control */}
          {!hasMultiple && (
            <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white hover:bg-black/85 transition-colors backdrop-blur-xs cursor-pointer shadow-xs"
                title="Expand Fullscreen Lightbox"
              >
                <Maximize2 className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          {/* Always-Visible Multi-Slide Navigation Arrows */}
          {hasMultiple && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 border border-white/15 text-white hover:bg-[#8c532b] hover:border-[#8c532b] active:scale-95 transition-all cursor-pointer backdrop-blur-xs shadow-md"
                aria-label="Previous design"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 border border-white/15 text-white hover:bg-[#8c532b] hover:border-[#8c532b] active:scale-95 transition-all cursor-pointer backdrop-blur-xs shadow-md"
                aria-label="Next design"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* Dedicated Full-Text Caption Bar Below Stage (Never Overlaps Image or Truncates) */}
        {current.caption && (
          <div className="bg-[#fbf9f6] border-t border-[#ebdccb] px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {captionParts?.badge ? (
                <>
                  <strong className="font-bold text-stone-900 mr-1.5">
                    {captionParts.badge}:
                  </strong>
                  <span>{captionParts.text}</span>
                </>
              ) : (
                <span>{current.caption}</span>
              )}
            </div>
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="text-[11px] font-mono font-semibold text-[#8c532b] hover:underline shrink-0 self-start sm:self-center cursor-pointer"
            >
              Click image to zoom 🔍
            </button>
          </div>
        )}

        {/* Portrait Thumbnail Dock (Fits All 9 Cleanly with No Ugly Scrollbar) */}
        {hasMultiple && (
          <div className="p-3 sm:p-4 bg-[#faf5ee] border-t border-[#ebdccb]">
            <div className="grid grid-cols-5 sm:grid-cols-9 gap-2 sm:gap-2.5">
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
                      "group relative aspect-[4/5] w-full rounded-xl overflow-hidden border-2 transition-all bg-[#140e0a] cursor-pointer",
                      isActive
                        ? "border-[#8c532b] ring-2 ring-[#8c532b]/25 shadow-sm scale-[1.03]"
                        : "border-[#dfd3c3] opacity-65 hover:opacity-100 hover:border-[#8c532b]/60"
                    )}
                    title={item.alt}
                  >
                    <Image
                      src={item.url}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 18vw, 96px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

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
