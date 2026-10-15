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
          <div className="workspace-card rounded-2xl p-6 sm:p-7 space-y-5 bg-white border border-[#e8ded3]">
            {/* Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-stone-200/80">
              <div className="space-y-0.5">
                <div className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                    Direct Channels
                  </span>
                </div>
                <h2 className="text-base font-bold text-stone-900">
                  Prefer direct messaging?
                </h2>
              </div>
              <span className="text-[10px] font-mono font-semibold text-stone-500 bg-[#faf6f0] px-2 py-0.5 rounded border border-[#ebdccb]">
                Skip Form
              </span>
            </div>

            {/* 3 Cohesive Luxury Contact Channel Links */}
            <div className="space-y-2.5">
              {/* WhatsApp */}
              <a
                href="https://wa.me/639912131795"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl border border-[#ebdccb] bg-[#fbf9f6] hover:bg-white hover:border-[#8c532b]/50 hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-stone-900">WhatsApp</span>
                      <span className="text-[9px] font-mono text-emerald-700 font-bold bg-emerald-100/70 border border-emerald-200/80 px-1.5 py-0.2 rounded">Fastest</span>
                    </div>
                    <span className="block text-xs font-mono font-semibold text-stone-600 truncate">
                      +63 9912131795
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#8c532b] group-hover:translate-x-0.5 transition-transform shrink-0">
                  Chat ↗
                </span>
              </a>

              {/* Direct Email */}
              <a
                href="mailto:balbuena.dexter.va@gmail.com"
                className="group flex items-center justify-between p-3.5 rounded-xl border border-[#ebdccb] bg-[#fbf9f6] hover:bg-white hover:border-[#8c532b]/50 hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-10 w-10 rounded-xl bg-[#faf5ee] border border-[#ebdccb] text-[#8c532b] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-stone-900">Direct Email</span>
                      <span className="text-[9px] font-mono text-[#8c532b] font-bold bg-[#faf5ee] border border-[#ebdccb] px-1.5 py-0.2 rounded">Primary</span>
                    </div>
                    <span className="block text-xs font-mono font-semibold text-stone-600 truncate">
                      balbuena.dexter.va@gmail.com
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#8c532b] group-hover:translate-x-0.5 transition-transform shrink-0">
                  Email ↗
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dexterbalbuena"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl border border-[#ebdccb] bg-[#fbf9f6] hover:bg-white hover:border-[#8c532b]/50 hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-200 text-[#0077b5] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <svg className="h-4.5 w-4.5 fill-current text-[#0077b5]" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-stone-900">LinkedIn Profile</span>
                      <span className="text-[9px] font-mono text-stone-600 font-bold bg-stone-100 border border-stone-200 px-1.5 py-0.2 rounded">Network</span>
                    </div>
                    <span className="block text-xs font-mono font-semibold text-stone-600 truncate">
                      in/dexterbalbuena
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#8c532b] group-hover:translate-x-0.5 transition-transform shrink-0">
                  Connect ↗
                </span>
              </a>
            </div>

            {/* Availability details */}
            <div className="pt-3.5 border-t border-stone-200/80 space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-800 block">
                    Dedicated Nocturnal Shift: 11 PM – 6 AM PHT
                  </span>
                  <span className="text-stone-500 text-[11px] leading-relaxed">
                    Direct real-time overlap with US business days, UK afternoons, and AU mornings.
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
