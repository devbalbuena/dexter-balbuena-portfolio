"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

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
    <header className="sticky top-0 z-40 w-full border-b border-[#684124] bg-[#7a4e2d]/95 text-white shadow-xs backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand / Name */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-semibold text-white"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#96633b] font-mono text-xs font-bold text-white shadow-xs group-hover:bg-[#a66f44] transition-colors">
            DB
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white">Dexter E. Balbuena</span>
            <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#f0e2d3]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
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
                  "relative rounded-md px-3.5 py-1.5 transition-colors",
                  isActive
                    ? "text-white font-semibold"
                    : "text-[#f2e7dc] hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-x-2 -bottom-2 h-0.5 rounded-full bg-[#f5d5b8]"
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
            className="font-bold bg-white hover:bg-[#faf5ee] text-[#7a4e2d] shadow-xs"
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
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#8f5f38] bg-[#684124] text-white shadow-2xs hover:bg-[#5b371d] cursor-pointer"
            type="button"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile dropdown with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden md:hidden border-b border-[#684124] bg-[#7a4e2d] px-4 pt-2 pb-5 text-white backdrop-blur-lg"
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
                        ? "bg-[#643e22] text-white font-semibold"
                        : "text-[#f2e7dc] hover:bg-[#643e22] hover:text-white"
                    )}
                  >
                    {link.label}
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#f5d5b8]" />}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 pt-3 border-t border-[#684124]">
              <Button
                href="/contact"
                size="md"
                className="w-full justify-center bg-white hover:bg-[#faf5ee] text-[#7a4e2d] font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hire Me / Contact <ArrowUpRight className="h-4 w-4 ml-1.5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
