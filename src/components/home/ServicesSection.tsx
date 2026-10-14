"use client";

import { 
  ShoppingCart, 
  Briefcase, 
  FileSpreadsheet, 
  Code2, 
  Palette, 
  Share2,
  CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { motion, useReducedMotion } from "motion/react";

const SERVICES = [
  {
    icon: ShoppingCart,
    badge: "Main Niche",
    badgeVariant: "default" as const,
    title: "E-Commerce Virtual Assistant",
    description:
      "Reliable back-office and listing operations for Amazon, Shopify, and multichannel stores.",
    deliverables: [
      "Product & competitor market research",
      "Listing creation & SKU optimization",
      "Inventory tracking & stock reorder alerts",
      "High-accuracy catalog data entry",
    ],
  },
  {
    icon: Briefcase,
    badge: "Secondary Niche",
    badgeVariant: "accent" as const,
    title: "Administrative & Executive VA",
    description:
      "High-trust operational support to keep remote executives, founders, and teams unblocked.",
    deliverables: [
      "Inbox zero filtering & communication triage",
      "Calendar scheduling across time zones",
      "Standard Operating Procedure (SOP) documentation",
      "Daily operational summaries & follow-ups",
    ],
  },
  {
    icon: FileSpreadsheet,
    badge: "MOS Certified",
    badgeVariant: "success" as const,
    title: "Advanced Excel & Google Sheets",
    description:
      "Certified formula wizardry transforming messy records into self-updating operational hubs.",
    deliverables: [
      "Dynamic formulas (XLOOKUP, LET, INDEX/MATCH)",
      "Daily cash balance & sales ledger workbooks",
      "Automated low-inventory warning triggers",
      "Data cleanup, validation & pivot modeling",
    ],
  },
  {
    icon: Code2,
    badge: "BSIT Advantage",
    badgeVariant: "secondary" as const,
    title: "Web Systems & Internal Tooling",
    description:
      "Ability to conceptualize, build, and maintain internal web apps and custom databases.",
    deliverables: [
      "Lightweight custom order & task trackers",
      "Internal catalog browsing prototypes",
      "Database data extraction & QA testing",
      "SaaS tool integration & workflow testing",
    ],
  },
  {
    icon: Palette,
    badge: "Bonus Service",
    badgeVariant: "secondary" as const,
    title: "Canva Graphic Design",
    description:
      "Fast, on-brand promotional creative generation without high agency retainers.",
    deliverables: [
      "E-commerce promotional banners & discount cards",
      "Social media carousel posts & feed templates",
      "Brand color palettes & visual styling kits",
      "Customer review highlight assets",
    ],
  },
  {
    icon: Share2,
    badge: "Bonus Service",
    badgeVariant: "secondary" as const,
    title: "Pinterest & Social Discovery",
    description:
      "Organic visual search traffic generation optimized for e-commerce purchase intent.",
    deliverables: [
      "Keyword-researched board curation",
      "2:3 High-converting vertical pin batches",
      "Pin SEO titles & searchable description copy",
      "Weekly analytics review & performance tracking",
    ],
  },
];

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-16 md:py-20 border-y border-[#e5d7c7] bg-[#f6efe6] text-stone-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#8c532b]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
                  Core Capabilities
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
                Services Tailored for Growing Online Businesses
              </h2>
              <p className="text-base text-stone-600 leading-relaxed">
                No guesswork or vanity metrics. I combine methodical daily execution with BSIT technical 
                problem-solving to handle high-stakes operational tasks.
              </p>
            </div>
            <div className="text-xs font-mono text-stone-500">
              Available 20-30 hrs/week
            </div>
          </div>
        </Reveal>

        {/* 6 Cards with Choreographed Scroll-Stagger and Hover Checkmark Bounce */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: shouldReduceMotion ? 0.15 : 0.4,
                  delay: shouldReduceMotion ? 0 : idx * 0.06,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="group rounded-2xl p-6 flex flex-col justify-between bg-white border border-[#e5d7c7] hover:border-[#8c532b] transition-all hover:-translate-y-1 shadow-xs hover:shadow-md text-stone-900"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#f4ebe1] text-[#8c532b] shadow-2xs group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </span>
                    <Badge variant={srv.badgeVariant} size="sm">
                      {srv.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-stone-900 group-hover:text-[#8c532b] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-stone-600 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#f0e4d7] space-y-2">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-stone-500">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      {srv.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2
                            style={{ transitionDelay: `${dIdx * 40}ms` }}
                            className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-125 group-hover:text-emerald-500"
                          />
                          <span className="transition-colors duration-200 group-hover:text-stone-900">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
