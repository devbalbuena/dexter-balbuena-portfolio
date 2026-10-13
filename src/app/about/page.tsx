import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { 
  MapPin, 
  Clock, 
  GraduationCap, 
  Wrench, 
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Dexter E. Balbuena | E-Commerce & Operations VA",
  description:
    "Learn about Dexter E. Balbuena: BSIT student, nocturnal working shift (11 PM - 6 AM PHT), tools, and client philosophy.",
};

const TOOLS_STACK = [
  { category: "Spreadsheets & Data", tools: ["Microsoft Excel (MOS Certified)", "Google Sheets", "Dynamic Formulas (XLOOKUP, LET)", "Data Validation", "Pivot Tables"] },
  { category: "E-Commerce & Market Research", tools: ["Amazon BSR Research", "Pinterest Trends", "Helium 10 (Demo)", "Shopify Catalog Entry", "Supplier Margin Ledger"] },
  { category: "Web Systems & Technical", tools: ["Next.js", "TypeScript", "Tailwind CSS", "Relational Databases", "REST APIs", "Git / GitHub"] },
  { category: "Creative & Documentation", tools: ["Canva Pro", "Standard Operating Procedures (SOPs)", "Notion", "Google Docs / Workspace"] },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16 space-y-12">
      {/* Title */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#8c532b]" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
            Background &amp; Workstyle
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900">
          About Dexter E. Balbuena
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed">
          E-Commerce, Administrative, and Executive Virtual Assistant based in Butuan City, Philippines.
        </p>
      </div>

      {/* Main Narrative & Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6 text-base text-stone-600 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-stone-900">
              The IT Student Advantage
            </h2>
            <p>
              I am currently pursuing a <strong>Bachelor of Science in Information Technology (BSIT)</strong>, 
              with graduation expected in <strong>April 2027</strong>. 
            </p>
            <p>
              While many virtual assistants treat data entry as simple transcription, my coursework gives me a 
              fundamental understanding of how data flows through software: relational tables, foreign keys, 
              formula dependencies, and user experience. When I build an inventory spreadsheet or enter product variants, 
              I design for data integrity so mistakes never cascade into fulfillment errors.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-stone-900">
              My Core Niches
            </h2>
            <p>
              My primary focus is <strong>E-Commerce Operations</strong>: product hunting, ASIN analysis, competitor price scraping, 
              and catalog administration. Secondarily, I act as an <strong>Administrative &amp; Executive Assistant</strong>, 
              handling inbox triage, calendar scheduling across international time zones, and creating comprehensive SOP documents.
            </p>
            <p>
              Additionally, I provide high-value bonus skills: advanced Excel formula engineering (MOS Certified), 
              lightweight web systems and order trackers, Canva promotional graphic batches, and organic Pinterest visual search curation.
            </p>
          </div>

          <div className="rounded-xl border border-[#e8ded3] bg-[#f9f6f2] p-4 text-xs font-mono text-stone-600 space-y-1">
            <p className="font-bold text-[#8c532b]">
              [TRANSPARENCY GUARANTEE]
            </p>
            <p>
              I have no paying clients yet. I believe in earning client trust through verified test tasks rather than 
              inflating claims or faking metrics.
            </p>
          </div>
        </div>

        {/* Operational Snapshot Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="workspace-card rounded-2xl p-6 space-y-5 bg-white border border-[#e8ded3]">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-stone-900 pb-3 border-b border-[#e8ded3]">
              Operational Snapshot
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#8c532b] mt-1 shrink-0" />
                <div>
                  <span className="block font-semibold text-stone-900">Location</span>
                  <span className="text-xs text-stone-500">Butuan City, Caraga, Philippines</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-emerald-600 mt-1 shrink-0" />
                <div>
                  <span className="block font-semibold text-stone-900">Working Shift</span>
                  <span className="text-xs text-stone-500">
                    11:00 PM – 6:00 AM PHT (Dedicated nocturnal shift)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="h-4 w-4 text-[#8c532b] mt-1 shrink-0" />
                <div>
                  <span className="block font-semibold text-stone-900">Education</span>
                  <span className="text-xs text-stone-500">BS Information Technology (Expected April 2027)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e8ded3] space-y-2">
              <span className="text-xs font-mono font-semibold uppercase text-stone-500 block">
                Timezone Overlaps:
              </span>
              <div className="grid grid-cols-3 gap-2 text-center font-mono text-[11px]">
                <div className="rounded bg-[#f9f6f2] border border-[#eee6dc] p-2">
                  <span className="block text-[10px] text-stone-500">US EST</span>
                  <span className="font-bold text-stone-900">10 AM - 5 PM</span>
                </div>
                <div className="rounded bg-[#f9f6f2] border border-[#eee6dc] p-2">
                  <span className="block text-[10px] text-stone-500">UK GMT</span>
                  <span className="font-bold text-stone-900">3 PM - 10 PM</span>
                </div>
                <div className="rounded bg-[#f9f6f2] border border-[#eee6dc] p-2">
                  <span className="block text-[10px] text-stone-500">AU AEST</span>
                  <span className="font-bold text-stone-900">1 AM - 8 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Tech Stack Matrix */}
      <div className="space-y-6 pt-6 border-t border-[#e8ded3]">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900">
            Tools &amp; Technical Capabilities
          </h2>
          <p className="text-sm text-stone-600">
            Software and workflows I utilize daily for store administration and client support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TOOLS_STACK.map((group, idx) => (
            <div key={idx} className="workspace-card rounded-xl p-5 space-y-3 bg-white border border-[#e8ded3]">
              <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <Wrench className="h-4 w-4 text-[#8c532b]" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.tools.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded-md bg-[#f9f6f2] border border-[#eee6dc] px-2.5 py-1 font-mono text-xs text-stone-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next step callout */}
      <div className="pt-6 border-t border-[#e8ded3] flex flex-wrap items-center justify-between gap-4">
        <Link href="/work" className="text-xs font-mono text-stone-500 hover:text-stone-900">
          ← Inspect verified work samples
        </Link>
        <Button href="/contact" size="md">
          Start a Conversation <ArrowRight className="h-4 w-4 ml-1.5" />
        </Button>
      </div>
    </div>
  );
}
