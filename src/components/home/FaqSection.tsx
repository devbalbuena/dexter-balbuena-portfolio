"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    category: "Platforms & Software Stack",
    question: "What e-commerce platforms and tools do you work with?",
    answer:
      "I support operations across Amazon, Shopify, Shopee, Lazada, and Pinterest. On the technical side, I specialize in advanced Microsoft Excel (formula modeling, stock replenishment logic, listing QA audits), Google Workspace, Canva Pro for visual marketing assets, and modern web systems.",
  },
  {
    category: "Spreadsheet & Inventory Automation",
    question: "Can you build or audit custom spreadsheets for our store's inventory?",
    answer:
      "Yes, absolutely. I engineer formula-driven spreadsheets—including automated reorder point models, multi-channel product comparison matrices, SKU listing quality checklists, and order SLA trackers. By utilizing functions like =ROUND(), =COUNTIF(), and nested logic, I eliminate manual calculations and prevent stockouts.",
  },
  {
    category: "Pinterest & Visual Traffic",
    question: "How do you generate organic Pinterest traffic for Amazon and store products?",
    answer:
      "I manage an active brand channel (@cozynook_finds) generating 24.3k+ organic monthly views. I research trending niches, batch high-contrast 2:3 vertical pin creatives (1000×1500px) with compelling headline hooks, optimize Pinterest visual SEO keywords, and integrate compliant affiliate tracking links with zero paid ad spend.",
  },
  {
    category: "Security & Store Access",
    question: "How do we securely grant access to our store and credentials?",
    answer:
      "Confidentiality and account security are non-negotiable. I recommend sharing credentials through encrypted password vaults like Bitwarden, 1Password, or LastPass. For platforms like Shopify, Amazon Seller Central, or Google Workspace, you can invite me as a restricted staff user with only the exact operational permissions required.",
  },
  {
    category: "Communication & Handoffs",
    question: "What is your daily communication routine and working schedule?",
    answer:
      "I adapt to your team's communication channels—Slack, Discord, WhatsApp, or email. At the end of every operational shift, I deliver a concise End-of-Day (EOD) debrief detailing completed deliverables, direct links to updated sheets, and queued priorities. Thanks to my BSIT background, I require minimal onboarding and work with high autonomy.",
  },
];

export function FaqSection() {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 md:py-16 bg-white border-b border-[#eee6dc]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Compact Header (Sticky on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#8c532b]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
                FAQ
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 leading-snug">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed max-w-md">
              Clear, upfront answers on e-commerce platforms, spreadsheet automation, organic Pinterest reach, and secure onboarding.
            </p>
          </div>

          {/* Right Column: Sleek Accordion */}
          <div className="lg:col-span-7 space-y-2.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className={`rounded-xl border transition-all ${
                    isOpen
                      ? "bg-[#faf6f0] border-[#8c532b]/40 shadow-xs"
                      : "bg-white border-[#e8ded3] hover:border-[#8c532b]/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-4 sm:p-4.5 flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <div className="space-y-0.5 pr-2">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#8c532b]">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-stone-900">
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`h-7 w-7 rounded-full border border-[#ebdccb] flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? "rotate-180 bg-[#8c532b] text-white" : "bg-white text-stone-600"
                      }`}
                    >
                      <ChevronDown className="h-3.5 w-3.5" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-4.5 pb-4 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-[#ebdccb]/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
