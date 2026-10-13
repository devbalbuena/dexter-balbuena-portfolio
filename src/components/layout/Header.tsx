"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
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
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand / Name */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-semibold text-foreground"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#a86e3b] dark:bg-[#c28b58] font-mono text-xs font-bold text-white dark:text-[#110f0d] shadow-2xs group-hover:opacity-90 transition-opacity">
            DB
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight">Dexter E. Balbuena</span>
            <span className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              E-Commerce &amp; Admin VA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (5 items max) */}
        <nav className="hidden md:flex items-center gap-1 font-medium text-sm" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3 py-1.5 transition-colors",
                  isActive
                    ? "text-[#a86e3b] dark:text-[#c28b58] font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-x-2 -bottom-2 h-0.5 rounded-full bg-[#a86e3b] dark:bg-[#c28b58]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions: Theme Toggle + Hire me Button */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button
            href="/contact"
            size="sm"
            className="font-medium shadow-2xs"
          >
            Hire Me <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 bg-white/80 text-stone-700 shadow-2xs dark:border-stone-800 dark:bg-stone-900 dark:text-stone-200 cursor-pointer"
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
            className="overflow-hidden md:hidden border-b border-border bg-background/98 px-4 pt-2 pb-5 backdrop-blur-lg"
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
                        ? "bg-[#a86e3b]/10 text-[#a86e3b] font-semibold dark:bg-[#c28b58]/15 dark:text-[#c28b58]"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#a86e3b] dark:bg-[#c28b58]" />}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800">
              <Button
                href="/contact"
                size="md"
                className="w-full justify-center"
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
