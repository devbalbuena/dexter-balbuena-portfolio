"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Palette, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Play, 
  Pause, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { GRAPHIC_DESIGNS, GraphicDesignItem } from "@/data/graphicDesigns";
import { LightboxModal } from "@/components/ui/LightboxModal";
import { cn } from "@/lib/utils";

export function GraphicDesignCarouselSection() {
  const shouldReduceMotion = useReducedMotion();
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const total = GRAPHIC_DESIGNS.length;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 340;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Autoplay ticker (subtly steps forward every 5 seconds)
  React.useEffect(() => {
    if (!isPlaying || lightboxIndex !== null) return;
    const timer = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, lightboxIndex]);

  const activeLightboxItem = lightboxIndex !== null ? GRAPHIC_DESIGNS[lightboxIndex] : null;

  return (
    <section className="w-full py-16 md:py-24 bg-[#faf6f0] border-t border-[#ebdccb]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8c532b]/15 text-[#8c532b]">
                  <Palette className="h-3 w-3" />
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
                  Visual Design &amp; Ad Creatives
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
                High-Converting E-Commerce &amp; Social Graphics
              </h2>
              <p className="text-base text-stone-600 leading-relaxed">
                No generic stock templates. I batch-design 2:3 high-CTR Pinterest pins, 1:1 product ads, 
                and storefront banners in Canva Pro &amp; Figma that capture real buyer purchase intent.
              </p>
            </div>

            {/* Navigation Controls & CTA */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => setIsPlaying((p) => !p)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white border border-[#ebdccb] text-xs font-mono text-stone-700 hover:text-stone-900 transition-colors cursor-pointer shadow-2xs"
                title={isPlaying ? "Pause carousel" : "Resume autoplay"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-3 w-3 text-amber-700" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3 text-emerald-700" />
                    <span>Auto</span>
                  </>
                )}
              </button>

              <button
                onClick={() => scroll("left")}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-[#ebdccb] text-stone-700 hover:text-stone-900 hover:border-[#8c532b] active:scale-95 transition-all cursor-pointer shadow-2xs"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                onClick={() => scroll("right")}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-[#ebdccb] text-stone-700 hover:text-stone-900 hover:border-[#8c532b] active:scale-95 transition-all cursor-pointer shadow-2xs"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <Link
                href="/work"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#8c532b] text-white text-xs font-mono font-semibold hover:bg-[#704221] transition-all shadow-xs ml-1"
              >
                <span>View All Work</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Horizontal Carousel Track with Native Scroll + Drag */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-5 overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {GRAPHIC_DESIGNS.map((design, idx) => (
            <motion.div
              key={design.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="w-[285px] sm:w-[325px] shrink-0 snap-start flex flex-col"
            >
              <TiltCard className="h-full flex flex-col">
                <div className="workspace-card h-full rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-[#ebdccb] shadow-xs hover:border-[#8c532b] hover:shadow-md transition-all">
                  <div>
                    {/* Visual Preview Container */}
                    <div 
                      className="relative h-[250px] sm:h-[270px] w-full overflow-hidden bg-[#18120d] border-b border-[#ebdccb] flex items-center justify-center p-3 cursor-zoom-in"
                      onClick={() => setLightboxIndex(idx)}
                    >
                      <Image
                        src={design.imageUrl}
                        alt={design.alt}
                        fill
                        sizes="(max-width: 768px) 285px, 325px"
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                        <Badge variant={design.badgeVariant || "accent"} size="sm" className="bg-[#8c532b] text-white border-none shadow-xs">
                          {design.categoryLabel}
                        </Badge>
                        <span className="text-[10px] font-mono text-stone-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                          {design.format}
                        </span>
                      </div>

                      {/* Zoom Trigger Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxIndex(idx);
                        }}
                        className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white hover:bg-black/90 transition-colors backdrop-blur-xs cursor-pointer opacity-80 group-hover:opacity-100 shadow-xs"
                        title="Click to Zoom Fullscreen"
                      >
                        <Maximize2 className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5 space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] font-mono text-stone-500">
                        <span>{design.dimensions}</span>
                        <span>{design.tool}</span>
                      </div>

                      <h3 className="text-base font-bold text-stone-900 group-hover:text-[#8c532b] transition-colors leading-snug">
                        {design.title}
                      </h3>

                      <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                        {design.description}
                      </p>

                      {design.resultMetric && (
                        <div className="pt-1">
                          <span className="inline-block text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            {design.resultMetric}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="p-4 sm:p-5 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between">
                    <button
                      onClick={() => setLightboxIndex(idx)}
                      className="text-xs font-semibold text-[#8c532b] hover:text-[#704221] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Full Preview</span>
                      <Maximize2 className="h-3 w-3" />
                    </button>

                    {design.caseStudySlug ? (
                      <Link
                        href={`/work/${design.caseStudySlug}`}
                        className="text-xs font-mono text-stone-500 hover:text-stone-900 inline-flex items-center gap-1"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    ) : (
                      <span className="text-[11px] font-mono text-stone-400">
                        {design.tool}
                      </span>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        item={activeLightboxItem}
        onPrev={() => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + total) % total : 0))}
        onNext={() => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % total : 0))}
        hasPrev={total > 1}
        hasNext={total > 1}
        currentIndex={lightboxIndex ?? 0}
        totalItems={total}
      />
    </section>
  );
}
