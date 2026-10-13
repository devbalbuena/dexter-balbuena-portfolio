"use client";

import * as React from "react";
import Link from "next/link";
import { Certificate } from "@/types/certificate";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { CertificateModal } from "@/components/certificates/CertificateModal";
import { 
  Clock, 
  Award, 
  GraduationCap, 
  ArrowRight, 
  Eye, 
  CheckCircle2,
  Calendar
} from "lucide-react";

interface LogisticsBackgroundProps {
  certificates: Certificate[];
}

export function LogisticsBackground({ certificates }: LogisticsBackgroundProps) {
  const [selectedCert, setSelectedCert] = React.useState<Certificate | null>(null);

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <Reveal className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#8c532b]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
                Reliability &amp; Verification
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
              Logistics &amp; Professional Background
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              Transparent operational hours aligned for Western handoffs, formally accredited skills, and 
              formal computer science coursework.
            </p>
          </div>
          <div>
            <Link
              href="/certificates"
              className="text-xs font-mono font-bold text-[#8c532b] hover:text-[#734320] inline-flex items-center gap-1"
            >
              All credential details <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 3-Column Utility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Timezone Availability */}
          <div className="workspace-card rounded-2xl p-6 flex flex-col justify-between bg-white border border-[#e8ded3] shadow-xs hover:border-[#8c532b] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Clock className="h-5 w-5" />
                </span>
                <Badge variant="success" size="sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Direct Coverage
                </Badge>
              </div>

              <div>
                <h3 className="text-base font-bold text-stone-900 leading-snug">
                  Timezone Availability: Nocturnal Expertise
                </h3>
                <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                  Dedicated nocturnal schedule (11 PM – 6 AM PHT) aligned for seamless real-time handoffs during your active business day.
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100 space-y-2">
                <span className="text-[11px] font-mono text-stone-500 uppercase block font-semibold">
                  Working Overlaps:
                </span>
                <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[11px]">
                  <div className="rounded-lg bg-[#f7efe6] border border-[#ebdccb] p-2">
                    <span className="block text-[10px] text-stone-500">US EST</span>
                    <span className="font-bold text-stone-900 text-xs">10 AM–5 PM</span>
                  </div>
                  <div className="rounded-lg bg-[#f7efe6] border border-[#ebdccb] p-2">
                    <span className="block text-[10px] text-stone-500">UK GMT</span>
                    <span className="font-bold text-stone-900 text-xs">3 PM–10 PM</span>
                  </div>
                  <div className="rounded-lg bg-[#f7efe6] border border-[#ebdccb] p-2">
                    <span className="block text-[10px] text-stone-500">AU AEST</span>
                    <span className="font-bold text-stone-900 text-xs">1 AM–8 AM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] font-mono text-stone-500 flex items-center justify-between">
              <span>Shift: 11 PM – 6 AM PHT</span>
              <span className="text-emerald-700 font-semibold">Ready to cover</span>
            </div>
          </div>

          {/* Card 2: Industry Certifications with View Image Support */}
          <div className="workspace-card rounded-2xl p-6 flex flex-col justify-between bg-white border border-[#e8ded3] shadow-xs hover:border-[#8c532b] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                  <Award className="h-5 w-5" />
                </span>
                <span className="text-xl font-black font-mono text-amber-800">
                  {certificates.length} Verified
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-stone-900 leading-snug">
                  Industry Certifications
                </h3>
                <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                  Click any credential to inspect the certificate image preview:
                </p>
              </div>

              {/* Certificate Quick List with View Image Trigger */}
              <div className="space-y-2 pt-1">
                {certificates.slice(0, 4).map((cert, cIdx) => (
                  <button
                    key={cIdx}
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="w-full text-left rounded-lg bg-[#f9f6f2] hover:bg-[#ebdccb] border border-[#eee6dc] p-2.5 transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <div className="space-y-0.5">
                      <span className="block text-xs font-bold text-stone-900 group-hover:text-[#8c532b] transition-colors line-clamp-1">
                        {cert.name}
                      </span>
                      <span className="block text-[10px] font-mono text-stone-500">
                        {cert.issuer} • {cert.issued}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#8c532b] bg-white px-2 py-0.5 rounded border border-[#e8ded3] shrink-0">
                      <Eye className="h-3 w-3" /> View
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono">
              <Link 
                href="/certificates" 
                className="text-[#8c532b] hover:text-[#734320] font-semibold inline-flex items-center gap-1"
              >
                Inspect credentials ↗
              </Link>
              <span className="text-stone-400">Formal Verification</span>
            </div>
          </div>

          {/* Card 3: BSIT 2027 Student Advantage */}
          <div className="workspace-card rounded-2xl p-6 flex flex-col justify-between bg-white border border-[#e8ded3] shadow-xs hover:border-[#8c532b] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-stone-100 text-stone-700">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="text-xs font-mono font-semibold text-stone-500">
                  BSIT • April 2027
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-stone-900 leading-snug">
                  BSIT 2027 Student Advantage
                </h3>
                <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                  Coursework in database architecture, software workflows, and structured schemas gives me an inherent technical advantage.
                </p>
              </div>

              <div className="rounded-xl bg-[#f9f6f2] border border-[#eee6dc] p-3 space-y-2 text-xs">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-stone-600 block">
                  Technical Core:
                </span>
                <ul className="space-y-1.5 text-stone-700">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Relational database thinking (no duplicate SKU/inventory errors)</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Rapid adaptation to custom SaaS, portals, &amp; spreadsheets</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Autonomous troubleshooting without babysitting</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-500">
              <span>Caraga State University / Butuan</span>
              <span className="text-[#8c532b] font-bold">Quick Learner</span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Certificate Image Preview Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
