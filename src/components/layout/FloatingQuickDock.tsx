"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { 
  MessageSquare, 
  ArrowUpRight, 
  Check, 
  Copy, 
  X, 
  ChevronUp
} from "lucide-react";

const emptySubscribe = () => () => {};

export function FloatingQuickDock() {
  const shouldReduceMotion = useReducedMotion();
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [copied, setCopied] = React.useState(false);
  const [minimized, setMinimized] = React.useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("balbuena.dexter.va@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch {
      // Fallback
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 select-none pointer-events-auto">
      {/* Toast Notification upon copying */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.95 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 mb-2 whitespace-nowrap rounded-xl bg-stone-900 text-white px-3.5 py-2 text-xs font-mono shadow-xl flex items-center gap-2 border border-stone-800"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="h-3 w-3" />
            </span>
            <span>balbuena.dexter.va@gmail.com copied!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Pill / Widget */}
      <AnimatePresence mode="wait">
        {minimized ? (
          <motion.button
            key="minimized"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            type="button"
            onClick={() => setMinimized(false)}
            aria-label="Open Quick Connect dock"
            className="flex items-center gap-2 rounded-full bg-[#8c532b] text-white px-4 py-2.5 text-xs font-bold shadow-xl hover:bg-[#734320] transition-colors cursor-pointer border border-[#a86e3b]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>Quick Connect</span>
            <ChevronUp className="h-3.5 w-3.5" />
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15, scale: 0.95 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#ebdccb] p-1.5 shadow-2xl ring-1 ring-stone-900/5"
          >
            {/* Status Beacon indicator */}
            <div className="pl-3 pr-1 flex items-center gap-2 hidden sm:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] font-mono font-bold text-stone-800">
                Direct Line
              </span>
            </div>

            {/* Copy Email Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 rounded-full bg-[#faf6f0] hover:bg-[#ebdccb] px-3 py-1.5 text-xs font-mono font-medium text-stone-800 transition-colors cursor-pointer border border-[#ebdccb]"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span className="hidden sm:inline">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-[#8c532b]" />
                  <span className="hidden sm:inline">Copy Email</span>
                </>
              )}
            </button>

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/639912131795"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-3 py-1.5 text-xs font-mono font-medium transition-colors border border-emerald-200"
              title="Message on WhatsApp"
            >
              <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Hire Me CTA Button */}
            <Link
              href="/contact"
              className="flex items-center gap-1 rounded-full bg-[#8c532b] hover:bg-[#734320] text-white px-3.5 py-1.5 text-xs font-bold shadow-xs transition-colors"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>

            {/* Minimize button */}
            <button
              type="button"
              onClick={() => setMinimized(true)}
              aria-label="Minimize Quick Connect dock"
              className="h-7 w-7 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
