"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronDown, HelpCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    category: "Security & Store Access",
    question: "How do we securely share access to our store, tools, and passwords?",
    answer:
      "Security and confidentiality are non-negotiable. I recommend sharing credentials through encrypted password managers like Bitwarden, 1Password, or LastPass. For platforms like Shopify, Amazon Seller Central, or Google Workspace, you can invite me as a restricted staff member with only the exact operational permissions needed. I never require master passwords.",
  },
  {
    category: "Hiring & Trial Tasks",
    question: "Can we start with a paid test project or trial week?",
    answer:
      "Yes, absolutely. I welcome starting with a paid 5 to 10-hour trial task (such as a 15-item competitor research sheet, SKU catalog update, or inventory ledger setup). This gives you a zero-risk way to evaluate my turnaround speed, data accuracy, and communication style before committing to an ongoing contract.",
  },
  {
    category: "Communication & Handoffs",
    question: "What is your daily communication and handoff routine?",
    answer:
      "I adapt to your team's workflow—Slack, Discord, WhatsApp, or email. At the end of every operational shift, I deliver a concise written End-of-Day (EOD) debrief detailing what was completed, direct links to updated sheets or catalog drafts, any roadblocks resolved, and what is queued next. For nuanced workflows, I record short Loom video walkthroughs.",
  },
  {
    category: "Fast Onboarding",
    question: "How quickly can we get started, and what do you need from me?",
    answer:
      "We can get started within 24 hours. All I need is a quick Loom video or bulleted brief explaining the task, access to the relevant sheet or portal, and any edge-case rules you follow. Because of my BSIT background, I require minimal ramp-up and zero babysitting.",
  },
];

export function FaqSection() {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white border-b border-[#eee6dc]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#8c532b]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
            Everything Remote Founders Ask Before Hiring
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Transparent answers regarding security, test tasks, nocturnal working hours, and communication.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "bg-[#faf6f0] border-[#8c532b]/40 shadow-xs"
                    : "bg-white border-[#e8ded3] hover:border-[#8c532b]/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#8c532b]">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-stone-900">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`h-8 w-8 rounded-full border border-[#ebdccb] flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? "rotate-180 bg-[#8c532b] text-white" : "bg-white text-stone-600"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.24, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-stone-600 leading-relaxed border-t border-[#ebdccb]/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="rounded-2xl border border-[#ebdccb] bg-[#faf6f0] p-6 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-[#8c532b]">
            <HelpCircle className="h-4 w-4" />
            Have a custom workflow or tool not listed here?
          </div>
          <p className="text-sm text-stone-600 max-w-lg mx-auto">
            I adapt quickly to custom internal dashboards, proprietary spreadsheets, or unique store setups.
          </p>
          <div className="pt-1 flex items-center justify-center gap-3">
            <Button href="/contact" size="md">
              Ask Me Directly
            </Button>
            <Button href="mailto:balbuena.dexter.va@gmail.com" variant="outline" size="md" external>
              <Mail className="h-4 w-4 mr-1.5" /> Email Inquiry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
