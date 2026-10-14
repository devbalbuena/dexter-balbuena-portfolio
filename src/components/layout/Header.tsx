"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from "motion/react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/certificates", label: "Certificates" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Framer Motion scroll progress indicator
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 24);
  });

  // Handle escape key
  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* 1. Framer Motion Scroll-Driven Reading Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8c532b] via-[#b87333] to-[#8c532b] origin-left z-50 pointer-events-none"
        aria-hidden="true"
      />

      {/* 2. Floating Island Header with Scroll Shrink */}
      <header className="sticky top-0 z-40 w-full transition-all duration-300 pointer-events-none px-3 sm:px-6 pt-2.5 sm:pt-4">
        <motion.div
          animate={{
            y: 0,
            scale: isScrolled ? 0.985 : 1,
          }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className={cn(
            "pointer-events-auto mx-auto max-w-6xl rounded-2xl border transition-all duration-300 flex items-center justify-between",
            isScrolled
              ? "bg-white/95 backdrop-blur-md border-[#e2d5c5] shadow-md py-2.5 px-4 sm:px-6"
              : "bg-white/85 backdrop-blur-md border-[#ebdccb] shadow-xs py-3 px-4 sm:px-6"
          )}
        >
          {/* Brand Identity */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-semibold text-stone-900"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8c532b] font-mono text-xs font-bold text-white shadow-xs group-hover:bg-[#734320] transition-colors">
              DB
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-stone-900 group-hover:text-[#8c532b] transition-colors">
                Dexter E. Balbuena
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-stone-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                E-Commerce &amp; Admin VA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 font-medium text-sm" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-3.5 py-1.5 transition-colors text-sm",
                    isActive
                      ? "text-[#8c532b] font-bold bg-[#fbf7f2]"
                      : "text-stone-600 hover:text-stone-900 hover:bg-[#f7efe6]/70"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-[#8c532b]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Hire me Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="/contact"
              size="sm"
              className="font-bold bg-[#8c532b] hover:bg-[#734320] text-white shadow-xs"
            >
              Hire Me <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#e2d5c5] bg-[#fbf7f2] text-stone-800 shadow-2xs hover:bg-[#ebdccb] cursor-pointer"
              type="button"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="pointer-events-auto mx-auto mt-2 max-w-6xl md:hidden overflow-hidden rounded-2xl border border-[#e8ded3] bg-white/95 p-4 shadow-xl backdrop-blur-lg"
            >
              <nav className="flex flex-col space-y-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-[#fbf7f2] text-[#8c532b] font-bold"
                          : "text-stone-700 hover:bg-stone-50 hover:text-stone-900"
                      )}
                    >
                      {link.label}
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#8c532b]" />}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-4 pt-3 border-t border-stone-100">
                <Button
                  href="/contact"
                  size="md"
                  className="w-full justify-center bg-[#8c532b] hover:bg-[#734320] text-white font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hire Me / Contact <ArrowUpRight className="h-4 w-4 ml-1.5" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
