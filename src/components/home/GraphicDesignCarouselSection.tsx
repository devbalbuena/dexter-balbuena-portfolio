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
import { GRAPHIC_DESIGNS } from "@/data/graphicDesigns";
import { LightboxModal } from "@/components/ui/LightboxModal";
import { Reveal } from "@/components/ui/Reveal";

export function GraphicDesignCarouselSection() {
  const shouldReduceMotion = useReducedMotion();
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const total = GRAPHIC_DESIGNS.length;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 330;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Autoplay ticker (subtly steps forward every 4.5 seconds)
  React.useEffect(() => {
    if (!isPlaying || lightboxIndex !== null) return;
    const timer = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 330, behavior: "smooth" });
      }
    }, 4500);
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
                  Visual Design Gallery
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
                High-Converting E-Commerce &amp; Social Graphics
              </h2>
              <p className="text-base text-stone-600 leading-relaxed">
                Clean, high-impact commercial visuals, 3D product drops, and viral social pins designed in Figma &amp; Canva Pro. 
                Click any design to inspect in high definition, or view all work for case studies.
              </p>
            </div>

            {/* Navigation Controls & CTA */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => setIsPlaying((p) => !p)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#ebdccb] text-xs font-mono text-stone-700 hover:text-stone-900 transition-colors cursor-pointer shadow-2xs"
                title={isPlaying ? "Pause autoplay" : "Resume autoplay"}
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
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8c532b] text-white text-xs font-mono font-semibold hover:bg-[#704221] transition-all shadow-xs ml-1"
              >
                <span>View All Work</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Gallery Carousel Track: Whole Picture Portrait Cards */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {GRAPHIC_DESIGNS.map((design, idx) => (
            <motion.div
              key={design.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="w-[270px] sm:w-[310px] aspect-[4/5] shrink-0 snap-start"
            >
              {/* Pure Portrait Image Container - No explanation text below */}
              <div
                onClick={() => setLightboxIndex(idx)}
                className="group relative w-full h-full overflow-hidden rounded-2xl bg-[#140e0a] border border-[#ebdccb] shadow-sm hover:shadow-xl hover:border-[#8c532b] transition-all duration-300 cursor-zoom-in"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIndex(idx);
                  }
                }}
                aria-label={`View ${design.title} full size`}
              >
                {/* Full-bleed Portrait Image */}
                <Image
                  src={design.imageUrl}
                  alt={design.alt}
                  fill
                  sizes="(max-width: 768px) 270px, 310px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />

                {/* Subtle Top-Left Category Tag */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-black/60 text-stone-200 backdrop-blur-xs border border-white/10 shadow-xs">
                    {design.categoryLabel}
                  </span>
                </div>

                {/* Hover Dark Vignette with Title & Zoom Indicator */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="space-y-1.5">
                    <p className="text-white text-sm font-bold leading-snug drop-shadow-xs line-clamp-2">
                      {design.title}
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] font-mono text-stone-300">
                        {design.tool}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-500/30">
                        <Maximize2 className="h-3 w-3" />
                        <span>Zoom</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner directing to View All Work for Case Studies */}
        <div className="pt-2">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#ebdccb] shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#8c532b]/10 text-[#8c532b]">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <h4 className="text-sm font-bold text-stone-900">
                  Looking for full case studies, metrics &amp; spreadsheet automations?
                </h4>
                <p className="text-xs text-stone-600">
                  Explore complete client breakdowns, ROI metrics, and operational workflows.
                </p>
              </div>
            </div>

            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8c532b] text-white text-xs font-mono font-bold hover:bg-[#704221] transition-all shrink-0 shadow-xs"
            >
              <span>Explore All Work &amp; Case Studies</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
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
