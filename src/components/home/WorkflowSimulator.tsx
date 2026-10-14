"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { 
  FileText, 
  Search, 
  CheckCircle, 
  Send, 
  Clock, 
  Sparkles 
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface WorkflowStep {
  step: string;
  title: string;
  timeframe: string;
  icon: React.ElementType;
  description: string;
  checklist: string[];
  mockType: "intake" | "execution" | "qa" | "debrief";
}

const STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "Task Intake & Scope Confirmation",
    timeframe: "Within 15 mins of receipt",
    icon: FileText,
    description:
      "You send tasks via Slack, WhatsApp, Loom, or Trello. I acknowledge receipt, review parameters, and confirm delivery estimates upfront so you are never left guessing.",
    checklist: [
      "Loom / voice brief transcribed & timestamped",
      "Notion / Trello board status updated to 'In Progress'",
      "Edge cases and variant edge rules clarified immediately",
      "Clear delivery target timestamp assigned",
    ],
    mockType: "intake",
  },
  {
    step: "02",
    title: "Methodical Research & Systems Execution",
    timeframe: "Nocturnal Shift: 11 PM – 6 AM PHT",
    icon: Search,
    description:
      "Autonomous execution during my dedicated nocturnal shift. I apply relational database thinking to product research, ASIN competitor mining, or spreadsheet data entry.",
    checklist: [
      "Verified supplier margin calculations (XLOOKUP & LET formulas)",
      "High-accuracy SKU cataloging without duplicate entries",
      "Competitor BSR, pricing, and visual trend validation",
      "Raw data sanitized and mapped to your exact store schema",
    ],
    mockType: "execution",
  },
  {
    step: "03",
    title: "Quality Assurance & Formula Auditing",
    timeframe: "Pre-Delivery Verification",
    icon: CheckCircle,
    description:
      "Every deliverable undergoes a self-audit before handoff. I check for broken cell references (#REF!, #N/A), broken image links, and Shopify variant matching.",
    checklist: [
      "100% formula integrity audit (no hardcoded calculation errors)",
      "Price & barcode verification against supplier invoices",
      "Image resolution & 2:3 vertical pin aspect ratio checks",
      "Clean formatting and clear color-coded legends",
    ],
    mockType: "qa",
  },
  {
    step: "04",
    title: "Daily EOD Executive Debrief",
    timeframe: "Delivered before 6:00 AM PHT (Your Morning)",
    icon: Send,
    description:
      "Every shift concludes with a structured End-of-Day report delivered to your inbox or Slack channel, so you wake up to completed deliverables ready for review.",
    checklist: [
      "Completed deliverables with direct cloud links",
      "Operational anomalies or low-stock flags highlighted",
      "Blockers resolved autonomously without client interruption",
      "Queue prioritization for the next operational shift",
    ],
    mockType: "debrief",
  },
];

export function WorkflowSimulator() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStepIndex, setActiveStepIndex] = React.useState(0);
  const activeStep = STEPS[activeStepIndex];

  return (
    <section className="w-full py-16 md:py-24 bg-white border-b border-[#eee6dc]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#8c532b]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
                Standard Operating Procedure (SOP)
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
              How We Work Together: Zero Babysitting
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              Remote delegation fails when communication is messy. I operate with disciplined SOP protocols 
              so you always know what was completed, where your files live, and what is queued next.
            </p>
          </div>

          <div className="shrink-0">
            <span className="text-xs font-mono text-stone-500 bg-[#faf6f0] px-3 py-1.5 rounded-lg border border-[#e8ded3] inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#8c532b]" /> Nocturnal Handoff Pipeline
            </span>
          </div>
        </div>

        {/* 4-Step Stepper Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {STEPS.map((s, idx) => {
            const isActive = activeStepIndex === idx;
            const Icon = s.icon;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                  isActive
                    ? "bg-[#faf5ee] border-[#8c532b] shadow-xs"
                    : "bg-white border-[#e8ded3] hover:border-[#8c532b]/40 hover:bg-[#fbf9f6]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeStepIndicator"
                    className="absolute top-0 left-0 right-0 h-1 bg-[#8c532b]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-black text-[#8c532b]">
                    STEP {s.step}
                  </span>
                  <div
                    className={`h-7 w-7 rounded-lg flex items-center justify-center ${
                      isActive ? "bg-[#8c532b] text-white" : "bg-[#faf6f0] text-stone-600"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                </div>
                <h4 className="text-xs font-bold text-stone-900 line-clamp-1">
                  {s.title}
                </h4>
                <span className="text-[10px] font-mono text-stone-500 block truncate mt-0.5">
                  {s.timeframe}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Interactive Showcase */}
        <div className="rounded-3xl border border-[#ebdccb] bg-[#faf6f0] p-6 sm:p-10 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepIndex}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 10 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Details & Checklist */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2">
                  <Badge variant="default" size="sm">
                    Phase {activeStep.step} / 04
                  </Badge>
                  <span className="text-xs font-mono text-stone-500">
                    {activeStep.timeframe}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                  {activeStep.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {activeStep.description}
                </p>

                <div className="space-y-2.5 pt-2 border-t border-[#ebdccb]">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-500 block">
                    Execution Checklist:
                  </span>
                  <ul className="space-y-2 text-xs text-stone-700 font-mono">
                    {activeStep.checklist.map((item, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Interactive Mock Artifact */}
              <div className="lg:col-span-6">
                {activeStep.mockType === "intake" && (
                  <div className="rounded-2xl border border-[#ebdccb] bg-white p-5 shadow-xs space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                      <span className="font-bold text-stone-800 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" /> Slack Channel #ops-handoff
                      </span>
                      <span className="text-[10px] text-stone-400">11:15 PM PHT</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#faf6f0] border border-[#eee6dc] space-y-1">
                      <span className="font-bold text-[#8c532b] text-[11px] block">Dexter Balbuena (VA)</span>
                      <p className="text-stone-700 text-[11px] font-sans">
                        &quot;Hey Alex, received the Loom brief for the Q4 Ceramic Catalog. 
                        Target: 15 SKUs with supplier cost margins. Will have Google Sheet and Shopify CSV ready 
                        by 5:00 AM EST for your morning coffee.&quot;
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                      <span>✓ Notion Task: #702 Created</span>
                      <span className="text-emerald-700 font-bold">Status: In Progress</span>
                    </div>
                  </div>
                )}

                {activeStep.mockType === "execution" && (
                  <div className="rounded-2xl border border-[#ebdccb] bg-white p-5 shadow-xs space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                      <span className="font-bold text-stone-800">Shopify_Catalog_Matrix.csv</span>
                      <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">Validation 100%</span>
                    </div>
                    <div className="space-y-1.5 text-[11px] text-stone-600">
                      <div className="p-2 rounded bg-stone-50 border border-stone-100 flex justify-between">
                        <span>SKU: AURA-VAS-01</span>
                        <span className="text-stone-900 font-bold">$24.99 (Margin 66%)</span>
                      </div>
                      <div className="p-2 rounded bg-stone-50 border border-stone-100 flex justify-between">
                        <span>SKU: MINI-LED-02</span>
                        <span className="text-stone-900 font-bold">$38.00 (Margin 68%)</span>
                      </div>
                      <div className="p-2 rounded bg-stone-50 border border-stone-100 flex justify-between">
                        <span>SKU: LINEN-THW-04</span>
                        <span className="text-stone-900 font-bold">$26.50 (Margin 73%)</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-stone-500 pt-1 flex items-center justify-between">
                      <span>Formulas verified: XLOOKUP, LET</span>
                      <span>0 duplicate barcodes</span>
                    </div>
                  </div>
                )}

                {activeStep.mockType === "qa" && (
                  <div className="rounded-2xl border border-[#ebdccb] bg-white p-5 shadow-xs space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                      <span className="font-bold text-stone-800 flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-[#8c532b]" /> Pre-Flight Audit Checklist
                      </span>
                      <span className="text-[10px] text-[#8c532b] font-bold">Passed 4/4</span>
                    </div>
                    <div className="space-y-1.5 text-[11px]">
                      <div className="p-2 rounded bg-emerald-50/70 border border-emerald-200 text-emerald-900 flex items-center justify-between">
                        <span>✓ Formula Reference Audit (#REF! / #N/A)</span>
                        <span className="font-bold text-emerald-700">0 ERRORS</span>
                      </div>
                      <div className="p-2 rounded bg-emerald-50/70 border border-emerald-200 text-emerald-900 flex items-center justify-between">
                        <span>✓ Image Media Resolution Check</span>
                        <span className="font-bold text-emerald-700">2000x2000px</span>
                      </div>
                      <div className="p-2 rounded bg-emerald-50/70 border border-emerald-200 text-emerald-900 flex items-center justify-between">
                        <span>✓ Barcode &amp; Supplier SKU Matching</span>
                        <span className="font-bold text-emerald-700">VERIFIED</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep.mockType === "debrief" && (
                  <div className="rounded-2xl border border-[#ebdccb] bg-white p-5 shadow-xs space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                      <span className="font-bold text-stone-800">EOD Summary: Dexter Balbuena</span>
                      <span className="text-[10px] text-stone-400">5:55 AM PHT</span>
                    </div>
                    <div className="space-y-2 text-[11px] font-sans text-stone-700">
                      <p><strong>1. Completed:</strong> 15 Ceramic Vase variants cataloged in Google Sheets &amp; uploaded as drafts in Shopify.</p>
                      <p><strong>2. Flagged:</strong> SKU #MINI-LED-02 supplier has 12-day lead time; reorder threshold adjusted.</p>
                      <p><strong>3. Next Shift:</strong> Pinterest 2:3 vertical pin batch research &amp; Canva banner creations.</p>
                    </div>
                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] font-mono text-stone-500">
                      <span>Delivered to Slack &amp; Email</span>
                      <span className="text-emerald-700 font-bold">Shift Complete ✓</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
