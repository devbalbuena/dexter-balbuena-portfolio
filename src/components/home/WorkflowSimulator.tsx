"use client";

import * as React from "react";
import { 
  FileText, 
  Cpu, 
  ShieldCheck, 
  Send, 
  Clock, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { motion, useReducedMotion } from "motion/react";

interface WorkflowStep {
  step: string;
  phase: string;
  title: string;
  timeframe: string;
  icon: React.ElementType;
  description: string;
  deliverables: string[];
}

const FLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    phase: "Step 1",
    title: "Task Intake",
    timeframe: "Within 15 mins",
    icon: FileText,
    description: "Receive brief via Slack, WhatsApp, or Loom. Transcribe requirements and confirm turnaround ETA upfront.",
    deliverables: [
      "Loom / voice brief transcribed",
      "Delivery target timestamp locked"
    ],
  },
  {
    step: "02",
    phase: "Step 2",
    title: "Execution",
    timeframe: "11 PM – 6 AM PHT",
    icon: Cpu,
    description: "Autonomous nocturnal execution. Methodical data extraction, dynamic Excel formulas, and catalog population.",
    deliverables: [
      "Relational schema adherence",
      "Zero-duplicate inventory data"
    ],
  },
  {
    step: "03",
    phase: "Step 3",
    title: "Quality Audit",
    timeframe: "Pre-Delivery",
    icon: ShieldCheck,
    description: "Self-audit before handoff. Error-check formulas (#REF!, #N/A), pricing math, image dimensions, and format clarity.",
    deliverables: [
      "100% formula integrity check",
      "Supplier price vs. barcode audit"
    ],
  },
  {
    step: "04",
    phase: "Step 4",
    title: "Executive Debrief",
    timeframe: "Daily before 6 AM PHT",
    icon: Send,
    description: "Deliver concise End-of-Day report with live cloud links so you wake up to completed, ready-to-use assets.",
    deliverables: [
      "Cloud links & anomaly flags",
      "Next shift queue pre-aligned"
    ],
  },
];

export function WorkflowSimulator({ 
  className = "w-full py-4 bg-transparent",
  containerClassName = "w-full space-y-6"
}: { 
  className?: string;
  containerClassName?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={className}>
      <div className={containerClassName}>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#8c532b]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
                Standard Operating Procedure (SOP)
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900">
              How We Work Together: 4-Step Operational Flowchart
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              A structured, visual operational pipeline from initial brief intake to morning executive handoff.
            </p>
          </div>

          <div className="shrink-0">
            <span className="text-xs font-mono text-stone-600 bg-[#faf6f0] px-3 py-1.5 rounded-lg border border-[#e8ded3] inline-flex items-center gap-1.5 font-semibold">
              <Clock className="h-3.5 w-3.5 text-[#8c532b]" /> Nocturnal Handoff Pipeline
            </span>
          </div>
        </div>

        {/* Visual Horizontal Flowchart Component (Step 1 -> Step 2 -> Step 3 -> Step 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {FLOW_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === FLOW_STEPS.length - 1;

            return (
              <motion.div
                key={step.step}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative group"
              >
                <div className="workspace-card rounded-2xl p-5 sm:p-6 h-full flex flex-col justify-between bg-white border border-[#e8ded3] hover:border-[#8c532b] shadow-2xs hover:shadow-md transition-all space-y-4">
                  <div className="space-y-3">
                    {/* Top Step Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2">
                        <span className="h-6 px-2 rounded-md bg-[#faf5ee] border border-[#ebdccb] text-[#8c532b] font-mono text-xs font-bold inline-flex items-center justify-center">
                          {step.step}
                        </span>
                        <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider">
                          {step.phase}
                        </span>
                      </div>
                      <div className="h-9 w-9 rounded-xl bg-[#faf6f0] border border-[#f0e4d5] text-[#8c532b] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                    </div>

                    {/* Step Title & Timeframe */}
                    <div>
                      <h3 className="text-base font-bold text-stone-900 group-hover:text-[#8c532b] transition-colors">
                        {step.title}
                      </h3>
                      <span className="inline-block mt-0.5 text-[11px] font-mono font-semibold text-[#8c532b]">
                        {step.timeframe}
                      </span>
                    </div>

                    {/* Short Punchy Description */}
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Micro Deliverable Pills */}
                  <div className="pt-3 border-t border-[#f0e4d5] space-y-2">
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-[11px] font-mono text-stone-700 leading-snug">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="whitespace-normal break-words">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connecting Arrow between cards on desktop */}
                {!isLast && (
                  <div 
                    className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 h-6 w-6 rounded-full bg-white border border-[#ebdccb] text-[#8c532b] items-center justify-center shadow-xs"
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
