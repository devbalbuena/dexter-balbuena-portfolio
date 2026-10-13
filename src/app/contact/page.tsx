import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { 
  Mail, 
  MessageSquare, 
  Clock, 
  CheckCircle2 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Hire | Dexter E. Balbuena",
  description:
    "Get in touch with Dexter E. Balbuena for e-commerce, spreadsheet, or administrative VA contracts. Available 11 PM - 6 AM PHT.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 space-y-12">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#8c532b]" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
            Let&apos;s Connect
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900">
          Hire Dexter or Inquire About Services
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          Ready to offload e-commerce listing management, product research, or spreadsheet automation. 
          Reach out directly or submit your project details below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form on Left/Center */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Direct Channels & Availability Card on Right */}
        <div className="lg:col-span-5 space-y-6">
          <div className="workspace-card rounded-2xl p-6 sm:p-7 space-y-6 bg-white border border-[#e8ded3]">
            <div className="space-y-1 pb-3 border-b border-stone-200/80">
              <h2 className="text-base font-bold text-stone-900">
                Direct Contact Channels
              </h2>
              <p className="text-xs text-stone-500">
                Prefer immediate messaging? Reach me through any channel below:
              </p>
            </div>

            <div className="space-y-4 text-sm font-mono">
              {/* Email */}
              <div className="rounded-xl border border-stone-200/80 bg-[#f9f6f2] p-3.5 space-y-1">
                <span className="text-[11px] text-stone-500 uppercase flex items-center gap-1.5 font-sans font-semibold">
                  <Mail className="h-3.5 w-3.5 text-[#8c532b]" /> Direct Email
                </span>
                <a
                  href="mailto:balbuena.dexter.va@gmail.com"
                  className="block text-xs font-bold text-[#8c532b] hover:underline break-all"
                >
                  balbuena.dexter.va@gmail.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="rounded-xl border border-stone-200/80 bg-[#f9f6f2] p-3.5 space-y-1">
                <span className="text-[11px] text-stone-500 uppercase flex items-center gap-1.5 font-sans font-semibold">
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-600" /> WhatsApp
                </span>
                <a
                  href="https://wa.me/639912131795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs font-bold text-emerald-700 hover:underline"
                >
                  +63 9912131795 ↗
                </a>
              </div>

              {/* LinkedIn */}
              <div className="rounded-xl border border-stone-200/80 bg-[#f9f6f2] p-3.5 space-y-1">
                <span className="text-[11px] text-stone-500 uppercase flex items-center gap-1.5 font-sans font-semibold">
                  <svg className="h-3.5 w-3.5 fill-current text-[#8c532b]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/dexterbalbuena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs font-bold text-[#8c532b] hover:underline"
                >
                  linkedin.com/in/dexterbalbuena ↗
                </a>
              </div>
            </div>

            {/* Availability details */}
            <div className="pt-4 border-t border-stone-200/80 space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-800 block">
                    Working Shift: 11 PM – 6 AM PHT
                  </span>
                  <span className="text-stone-500">
                    Real-time overlap with US business days, UK afternoons, and AU mornings.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#8c532b] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-800 block">
                    Fast &amp; Reliable Communication
                  </span>
                  <span className="text-stone-500">
                    Direct communication to keep operational handoffs moving without bottlenecks.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
