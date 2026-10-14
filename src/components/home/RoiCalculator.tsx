"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { 
  Calculator, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function RoiCalculator() {
  const shouldReduceMotion = useReducedMotion();
  const [weeklyHours, setWeeklyHours] = React.useState(15);
  const [hourlyRate, setHourlyRate] = React.useState(65);

  // Computed values
  const monthlyHoursSaved = Math.round(weeklyHours * 4.3);
  const monthlyOpportunityCost = Math.round(monthlyHoursSaved * hourlyRate);
  const annualOpportunityCost = monthlyOpportunityCost * 12;

  return (
    <section className="w-full py-16 md:py-24 bg-white border-b border-[#eee6dc]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#8c532b]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
                Founder Time-Freedom
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 leading-[1.15]">
              Calculate How Much Time &amp; Capital You Reclaim
            </h2>

            <p className="text-base text-stone-600 leading-relaxed">
              Every hour spent manually cleaning spreadsheet rows, updating product variants, or checking supplier inventory 
              is an hour not spent closing deals or scaling customer acquisition.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-stone-900 font-semibold block">Stop Working In The Business</strong>
                  <span className="text-stone-600">Offload repetitive back-office grunt work to a disciplined technical VA.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-stone-900 font-semibold block">Zero Recruitment or Agency Overhead</strong>
                  <span className="text-stone-600">Work directly with me. No middlemen, no 40% agency markups, and no long-term lock-in.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-stone-900 font-semibold block">BSIT Integrity Guarantee</strong>
                  <span className="text-stone-600">Relational data logic prevents broken formulas, duplicate inventory, or mislabeled SKUs.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/contact" size="lg" className="font-bold">
                Reclaim These Hours <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Calculator Card */}
          <div className="lg:col-span-7">
            <div className="workspace-card rounded-3xl p-6 sm:p-8 bg-[#faf6f0] border border-[#ebdccb] shadow-md space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#ebdccb]">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#8c532b] shadow-2xs border border-[#ebdccb]">
                    <Calculator className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-900">
                      Operational Savings Estimator
                    </h3>
                    <p className="text-xs font-mono text-stone-600">
                      Drag the sliders to reflect your current workload
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#8c532b] bg-white px-2.5 py-1 rounded-lg border border-[#ebdccb]">
                  Interactive
                </span>
              </div>

              {/* Slider 1: Weekly Hours */}
              <div className="space-y-3 bg-white p-5 rounded-2xl border border-[#ebdccb] shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-700 uppercase font-mono flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#8c532b]" />
                    Weekly Hours Spent on Repetitive Tasks:
                  </span>
                  <span className="font-mono text-base font-black text-[#8c532b] bg-[#faf6f0] px-3 py-1 rounded-lg border border-[#ebdccb]">
                    {weeklyHours} hrs / week
                  </span>
                </div>

                <input
                  type="range"
                  min={5}
                  max={40}
                  step={1}
                  value={weeklyHours}
                  onChange={(e) => setWeeklyHours(parseInt(e.target.value, 10))}
                  className="w-full accent-[#8c532b] cursor-pointer h-2 bg-stone-200 rounded-lg"
                  aria-label="Weekly hours spent on repetitive tasks"
                />

                <div className="flex justify-between text-[10px] font-mono text-stone-600">
                  <span>5 hrs (Light Admin)</span>
                  <span>15 hrs (Store Operations)</span>
                  <span>40 hrs (Full-Time Bottleneck)</span>
                </div>
              </div>

              {/* Slider 2: Founder Hourly Value */}
              <div className="space-y-3 bg-white p-5 rounded-2xl border border-[#ebdccb] shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-700 uppercase font-mono flex items-center gap-1.5">
                    <DollarSign className="h-3.5 w-3.5 text-emerald-600" />
                    Your Hourly Founder / Operator Value:
                  </span>
                  <span className="font-mono text-base font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                    ${hourlyRate} / hr
                  </span>
                </div>

                <input
                  type="range"
                  min={30}
                  max={200}
                  step={5}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value, 10))}
                  className="w-full accent-emerald-600 cursor-pointer h-2 bg-stone-200 rounded-lg"
                  aria-label="Your hourly founder rate"
                />

                <div className="flex justify-between text-[10px] font-mono text-stone-600">
                  <span>$30/hr</span>
                  <span>$75/hr (Average Founder)</span>
                  <span>$200/hr (High-Growth Executive)</span>
                </div>
              </div>

              {/* Dynamic Calculation Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  key={`hours-${monthlyHoursSaved}`}
                  initial={shouldReduceMotion ? {} : { scale: 0.98 }}
                  animate={{ scale: 1 }}
                  className="rounded-2xl bg-white border border-[#ebdccb] p-5 shadow-2xs space-y-1"
                >
                  <span className="text-[11px] font-mono font-semibold uppercase text-stone-600 block">
                    Monthly Time Reclaimed
                  </span>
                  <div className="font-mono text-3xl font-black text-[#8c532b]">
                    ~{monthlyHoursSaved} <span className="text-sm font-bold text-stone-600">Hours</span>
                  </div>
                  <p className="text-xs text-stone-600 pt-1">
                    Equivalent to <strong className="text-stone-900">{Math.round(monthlyHoursSaved / 8)} full working days</strong> freed for high-leverage growth.
                  </p>
                </motion.div>

                <motion.div
                  key={`cost-${monthlyOpportunityCost}`}
                  initial={shouldReduceMotion ? {} : { scale: 0.98 }}
                  animate={{ scale: 1 }}
                  className="rounded-2xl bg-emerald-50/90 border border-emerald-200 p-5 shadow-2xs space-y-1"
                >
                  <span className="text-[11px] font-mono font-semibold uppercase text-emerald-800 block">
                    Opportunity Capital Preserved
                  </span>
                  <div className="font-mono text-3xl font-black text-emerald-700">
                    ${monthlyOpportunityCost.toLocaleString()} <span className="text-sm font-bold text-emerald-800">/mo</span>
                  </div>
                  <p className="text-xs text-emerald-800 pt-1">
                    Estimated <strong className="text-emerald-950">${annualOpportunityCost.toLocaleString()} / year</strong> in founder time redirected to revenue.
                  </p>
                </motion.div>
              </div>

              {/* Scope note */}
              <div className="text-center pt-2">
                <span className="text-[11px] font-mono text-stone-600">
                  ⚡ Ready to begin with a paid 5-hour trial task to evaluate speed and accuracy.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
