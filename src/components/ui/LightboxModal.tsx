"use client";

import * as React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@/components/ui/Badge";

export interface LightboxItem {
  imageUrl: string;
  alt: string;
  title: string;
  subtitle?: string;
  categoryLabel?: string;
  format?: string;
  dimensions?: string;
  tool?: string;
  description?: string;
  resultMetric?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: LightboxItem | null;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  currentIndex?: number;
  totalItems?: number;
}

export function LightboxModal({
  isOpen,
  onClose,
  item,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
  currentIndex,
  totalItems,
}: LightboxModalProps) {
  // Lock body scroll when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle keyboard shortcuts (Escape to close, Arrows to navigate)
  React.useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && hasPrev && onPrev) {
        onPrev();
      } else if (e.key === "ArrowRight" && hasNext && onNext) {
        onNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, hasPrev, hasNext, onPrev, onNext, onClose]);

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md select-none"
          onClick={onClose}
        >
          {/* Top Control Bar */}
          <div
            className="absolute top-0 inset-x-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 bg-gradient-to-b from-black/80 to-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="h-2 w-2 rounded-full bg-[#d4976a]" />
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-white truncate">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-xs font-mono text-stone-400 truncate">
                    {item.subtitle}
                  </p>
                )}
              </div>
              {item.categoryLabel && (
                <Badge variant="accent" size="sm" className="hidden sm:inline-flex shrink-0">
                  {item.categoryLabel}
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {currentIndex !== undefined && totalItems !== undefined && (
                <span className="text-xs font-mono text-stone-400 bg-white/10 px-2.5 py-1 rounded-full">
                  {currentIndex + 1} / {totalItems}
                </span>
              )}
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          {hasPrev && onPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-3 sm:left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
              aria-label="Previous design"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {hasNext && onNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-3 sm:right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
              aria-label="Next design"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Center Image Container */}
          <motion.div
            key={item.imageUrl}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center justify-center max-w-5xl max-h-[86vh] w-full"
          >
            <div className="relative w-full h-[72vh] sm:h-[78vh] flex items-center justify-center">
              <Image
                src={item.imageUrl}
                alt={item.alt}
                fill
                priority
                sizes="(max-width: 1200px) 95vw, 1100px"
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

