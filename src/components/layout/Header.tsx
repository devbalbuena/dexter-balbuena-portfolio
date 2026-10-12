"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand / Name */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-semibold text-slate-900 dark:text-slate-100"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-mono text-xs font-bold text-white shadow-2xs group-hover:bg-blue-500 transition-colors">
            DB
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight">Dexter E. Balbuena</span>
            <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
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
                  "rounded-md px-3 py-1.5 transition-colors",
                  isActive
                    ? "bg-slate-100 text-blue-600 font-semibold dark:bg-slate-850 dark:text-blue-400"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-900"
                )}
              >
                {link.label}
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
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white/70 text-slate-700 shadow-2xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            type="button"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 px-4 pt-2 pb-4 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium",
                    isActive
                      ? "bg-blue-50 text-blue-600 font-semibold dark:bg-blue-950/50 dark:text-blue-400"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                  )}
                >
                  {link.label}
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800">
            <Button
              href="/contact"
              size="md"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hire Me / Contact <ArrowUpRight className="h-4 w-4 ml-1.5" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
