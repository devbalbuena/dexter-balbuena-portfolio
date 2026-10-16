import Link from "next/link";
import { Mail, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#2c2017] bg-[#18120d] text-stone-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Identity & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8c532b] font-mono text-xs font-bold text-white shadow-xs">
                DB
              </span>
              <span className="font-bold text-lg text-white tracking-tight">
                Dexter E. Balbuena
              </span>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 max-w-md">
              E-Commerce, Administrative, &amp; Executive Assistant Virtual Assistant. 
              BSIT student (Class of 2027) pairing technical systems proficiency with meticulous operational rigor.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-2 text-stone-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#b87333]" /> Butuan City, Philippines
              </span>
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                11 PM – 6 AM PHT (US/UK/AU)
              </span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-stone-200">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="inline-block text-stone-400 hover:text-[#d4976a] hover:translate-x-1 transition-all duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="inline-block text-stone-400 hover:text-[#d4976a] hover:translate-x-1 transition-all duration-200"
                >
                  Work Samples &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/certificates"
                  className="inline-block text-stone-400 hover:text-[#d4976a] hover:translate-x-1 transition-all duration-200"
                >
                  Verified Certifications
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="inline-block text-stone-400 hover:text-[#d4976a] hover:translate-x-1 transition-all duration-200"
                >
                  About &amp; Coverage Logistics
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block text-stone-400 hover:text-[#d4976a] hover:translate-x-1 transition-all duration-200"
                >
                  Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Channels & Availability (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-stone-200">
              Direct Channels
            </h4>
            <div className="space-y-2.5 text-sm font-mono">
              <a
                href="mailto:balbuena.dexter.va@gmail.com"
                className="flex items-center justify-between py-1.5 text-xs text-stone-400 hover:text-[#d4976a] transition-colors group"
              >
                <span className="flex items-center gap-2.5 truncate">
                  <Mail className="h-4 w-4 text-[#d4976a] group-hover:text-[#e8a878] transition-colors shrink-0" />
                  <span className="truncate text-stone-300 group-hover:text-white transition-colors">
                    balbuena.dexter.va@gmail.com
                  </span>
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-stone-500 group-hover:text-[#d4976a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>

              <a
                href="https://wa.me/639912131795"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-1.5 text-xs text-stone-400 hover:text-emerald-400 transition-colors group"
              >
                <span className="flex items-center gap-2.5">
                  <MessageSquare className="h-4 w-4 text-emerald-400 group-hover:text-emerald-300 transition-colors shrink-0" />
                  <span className="text-stone-300 group-hover:text-white transition-colors">
                    WhatsApp (+63 9912131795)
                  </span>
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-stone-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>

              <a
                href="https://www.linkedin.com/in/dexterbalbuena"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-1.5 text-xs text-stone-400 hover:text-[#0077b5] transition-colors group"
              >
                <span className="flex items-center gap-2.5">
                  <svg
                    className="h-4 w-4 fill-current text-[#0077b5] group-hover:text-[#38a0dc] transition-colors shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span className="text-stone-300 group-hover:text-white transition-colors">
                    LinkedIn Profile
                  </span>
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-stone-500 group-hover:text-[#0077b5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>

              <div className="pt-3">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-mono font-semibold text-emerald-300 shadow-sm shadow-emerald-950/60">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                  </span>
                  Open for Full-Time &amp; Part-Time Contracts
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#261c14] pt-6 text-xs text-stone-500">
          <p>© 2026 Dexter E. Balbuena. Built with Next.js &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
