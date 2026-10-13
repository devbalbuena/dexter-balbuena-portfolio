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
  return (
    <section className="w-full py-16 md:py-20 border-y border-[#3d2719] bg-[#291b11] text-white">
      <Reveal className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#c28b58]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d9a36f]">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Services Tailored for Growing Online Businesses
            </h2>
            <p className="text-base text-[#d1bfb0] leading-relaxed">
              No guesswork or vanity metrics. I combine methodical daily execution with BSIT technical 
              problem-solving to handle high-stakes operational tasks.
            </p>
          </div>
          <div className="text-xs font-mono text-[#b5a395]">
            Available 20-30 hrs/week
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-6 flex flex-col justify-between bg-[#382519] border border-[#4d3322] hover:border-[#a86e3b] transition-all hover:-translate-y-1 shadow-md text-white"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#291b11] text-[#d9a36f] shadow-2xs">
                      <Icon className="h-5 w-5" />
                    </span>
                    <Badge variant={srv.badgeVariant} size="sm">
                      {srv.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {srv.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#d1bfb0] leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#4d3322] space-y-2">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#b5a395]">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#e8dbce]">
                      {srv.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
