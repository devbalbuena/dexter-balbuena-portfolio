import Link from "next/link";
import { Mail, Clock, MapPin, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-stone-200/80 bg-card text-stone-600 dark:border-stone-800/80 dark:text-stone-400">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Identity & Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#a86e3b] dark:bg-[#c28b58] font-mono text-xs font-bold text-white dark:text-[#110f0d]">
                DB
              </span>
              <span className="font-bold text-stone-900 dark:text-stone-100">
                Dexter E. Balbuena
              </span>
            </div>
            <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400 max-w-md">
              E-Commerce, Administrative, &amp; Executive Assistant Virtual Assistant. 
              BSIT student (Class of 2027) pairing technical systems proficiency with meticulous operational rigor.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-1 text-stone-500 dark:text-stone-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#9e6231] dark:text-[#d4a373]" /> Butuan City, Philippines
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-emerald-500" /> 11 PM – 6 AM PHT (US/UK/AU)
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#8c532b] dark:hover:text-[#d9a36f] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#8c532b] dark:hover:text-[#d9a36f] transition-colors">
                  Work Samples &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="hover:text-[#8c532b] dark:hover:text-[#d9a36f] transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#8c532b] dark:hover:text-[#d9a36f] transition-colors">
                  About &amp; Timezone Coverage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#8c532b] dark:hover:text-[#d9a36f] transition-colors">
                  Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-200">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <a
                  href="mailto:balbuena.dexter.va@gmail.com"
                  className="flex items-center gap-2 hover:text-[#8c532b] dark:hover:text-[#d9a36f] transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-[#9e6231] dark:text-[#d4a373]" /> balbuena.dexter.va@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/639912131795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-500" /> +63 9912131795 (WhatsApp)
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-xs text-stone-400 dark:text-stone-500">
                  <svg className="h-3.5 w-3.5 fill-current text-stone-400" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  [TODO: LinkedIn URL]
                </span>
              </li>
              <li className="pt-2 text-xs text-stone-500">
                <span className="inline-block px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-850 text-[11px] text-stone-600 dark:text-stone-400">
                  Open for Part-Time Contract
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200/60 dark:border-stone-800/80 pt-6 text-xs text-stone-500">
          <p>© 2026 Dexter E. Balbuena. Built with Next.js &amp; Tailwind CSS.</p>
          <p className="font-mono text-[11px] text-stone-400 dark:text-stone-500">
            [NOTE: All work samples clearly labeled; metrics are verified or marked placeholders]
          </p>
        </div>
      </div>
    </footer>
  );
}
