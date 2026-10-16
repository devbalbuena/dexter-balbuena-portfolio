import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  MapPin, 
  Clock, 
  GraduationCap, 
  ArrowRight,
  ShoppingCart,
  ClipboardList,
  Sparkles,
  ShieldCheck,
  FileSpreadsheet,
  Code2,
  Palette,
  Database,
  CheckCircle2
} from "lucide-react";
import { 
  ExcelLogo, 
  GoogleSheetsLogo, 
  ShopifyLogo, 
  AmazonLogo, 
  PinterestLogo, 
  CanvaLogo, 
  NotionLogo, 
  NextjsLogo 
} from "@/components/ui/BrandLogos";
import { WorkflowSimulator } from "@/components/home/WorkflowSimulator";

export const metadata: Metadata = {
  title: "About Dexter E. Balbuena | E-Commerce & Operations VA",
  description:
    "Learn about Dexter E. Balbuena: BSIT student, nocturnal working shift (11 PM - 6 AM PHT), tools, and client philosophy.",
};

interface ToolPlatform {
  name: string;
  tag?: string;
  logo: React.ElementType;
}

interface ToolCategory {
  title: string;
  subtitle: string;
  badge: string;
  badgeVariant: "default" | "secondary" | "outline" | "success" | "accent" | "warning";
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  platforms: ToolPlatform[];
  capabilities: string[];
}

const TOOLS_CATEGORIES: ToolCategory[] = [
  { 
    title: "Spreadsheets & Data Systems",
    subtitle: "Advanced formula modeling, inventory tracking & cash balance ledgers",
    badge: "MOS Certified",
    badgeVariant: "success",
    icon: FileSpreadsheet,
    iconBg: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-700",
    platforms: [
      { name: "Microsoft Excel", tag: "MOS Associate", logo: ExcelLogo },
      { name: "Google Sheets", tag: "Cloud Live", logo: GoogleSheetsLogo },
    ],
    capabilities: [
      "Dynamic Formulas (XLOOKUP, LET, INDEX/MATCH)",
      "Automated Reorder Velocity & Stock Triggers",
      "Daily Sales, Credit & Cashflow Ledgers",
      "Pivot Tables & Executive Summary Modeling",
      "Data Validation, Dropdowns & Schema Design",
      "Margin, Markup & Supplier Cost Calculations",
    ],
  },
  { 
    title: "E-Commerce & Market Research",
    subtitle: "Catalog variant setup, competitor ASIN scraping & organic discovery",
    badge: "Primary Niche",
    badgeVariant: "warning",
    icon: ShoppingCart,
    iconBg: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-800",
    platforms: [
      { name: "Amazon", tag: "ASIN & Affiliate", logo: AmazonLogo },
      { name: "Shopify", tag: "Catalog & SKU", logo: ShopifyLogo },
      { name: "Pinterest", tag: "24.3K Views", logo: PinterestLogo },
    ],
    capabilities: [
      "Competitor ASIN Scraping & Price Mapping",
      "Shopify Catalog & Multi-Variant Entry",
      "Pinterest SEO Titles & High-CTR Pinning",
      "Wholesale Supplier Margin Calculations",
      "Amazon BSR & Velocity Tracking",
      "Shopee & Lazada Cross-Platform Price Comparison",
    ],
  },
  { 
    title: "Web Systems & Technical Tooling",
    subtitle: "Computer science coursework, database models & custom internal tools",
    badge: "BSIT Advantage",
    badgeVariant: "accent",
    icon: Code2,
    iconBg: "bg-[#f5ece1] border-[#e2cbaf]",
    iconColor: "text-[#8c532b]",
    platforms: [
      { name: "Next.js & React", tag: "Web Portals", logo: NextjsLogo },
      { name: "Relational SQL", tag: "Data Integrity", logo: Database },
    ],
    capabilities: [
      "Relational Databases & SQL Schema Modeling",
      "RESTful APIs & Webhook Automation",
      "Git Version Control & GitHub Repository Actions",
      "Lightweight Custom Internal Order Portals",
      "Data Normalization & Input Validation",
      "Clean TypeScript & Modern UI Styling",
    ],
  },
  { 
    title: "Creative & Operational Documentation",
    subtitle: "High-converting visual assets, asynchronous SOPs & team wikis",
    badge: "SOP & Media",
    badgeVariant: "default",
    icon: Palette,
    iconBg: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-700",
    platforms: [
      { name: "Canva Pro", tag: "High-CTR Visuals", logo: CanvaLogo },
      { name: "Notion", tag: "SOPs & Wikis", logo: NotionLogo },
    ],
    capabilities: [
      "Canva Pro 2:3 Pinterest Pin & Ad Batching",
      "Standard Operating Procedures (SOPs) Authoring",
      "Notion Workspaces & Cross-Functional Team Wikis",
      "Asynchronous Loom Video Task Handoffs",
      "Google Workspace & Cloud Administration",
      "Markdown Documentation for Technical SOPs",
    ],
  },
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

      {/* Row 1: Equalized Narrative & Operational Snapshot Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: IT Student Advantage (Constrained max-w-2xl for optimal reading line length) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              The IT Student Advantage
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              I am currently pursuing a <strong>Bachelor of Science in Information Technology (BSIT)</strong> at 
              Caraga State University, with expected graduation in <strong>April 2027</strong>.
            </p>
            <p className="text-base text-stone-600 leading-relaxed">
              While many virtual assistants treat data entry as simple transcription, my computer science 
              coursework gives me a fundamental understanding of how data flows through software: 
              relational tables, foreign keys, formula dependencies, and user experience. When I build 
              an inventory spreadsheet or enter product variants, I design for data integrity so mistakes 
              never cascade into fulfillment errors or broken records.
            </p>
          </div>

          {/* Transparency Guarantee Callout Card */}
          <div className="rounded-xl border border-[#e8ded3] bg-[#f9f6f2] p-4 text-xs font-mono text-stone-600 space-y-1 max-w-2xl shadow-2xs">
            <p className="font-bold text-[#8c532b] flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4" /> [TRANSPARENCY GUARANTEE]
            </p>
            <p className="leading-relaxed">
              I have no paying clients yet. I believe in earning client trust through verified work samples, 
              disciplined execution, and transparent capabilities rather than inflating claims or faking metrics.
            </p>
          </div>
        </div>

        {/* Right Column: Operational Snapshot Card (Heights Equalized) */}
        <div className="lg:col-span-5 h-full">
          <div className="workspace-card rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between space-y-6 bg-white border border-[#e8ded3] shadow-xs">
            <div className="space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-stone-900 pb-3 border-b border-[#e8ded3]">
                Operational Snapshot
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#8c532b] mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-stone-900">Base Location</span>
                    <span className="text-xs text-stone-500">Butuan City, Caraga, Philippines</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-emerald-600 mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-stone-900">Working Shift</span>
                    <span className="text-xs text-stone-600">
                      11:00 PM – 6:00 AM PHT (Dedicated nocturnal schedule)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap className="h-4 w-4 text-[#8c532b] mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-stone-900">Education</span>
                    <span className="text-xs text-stone-500">BS Information Technology (April 2027)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e8ded3] space-y-2">
              <span className="text-xs font-mono font-semibold uppercase text-stone-500 block">
                Direct Working Overlaps:
              </span>
              <div className="grid grid-cols-3 gap-2 text-center font-mono text-[11px]">
                <div className="rounded-lg bg-[#f9f6f2] border border-[#eee6dc] p-2">
                  <span className="block text-[10px] text-stone-500">US EST</span>
                  <span className="font-bold text-stone-900 text-xs">10 AM–5 PM</span>
                </div>
                <div className="rounded-lg bg-[#f9f6f2] border border-[#eee6dc] p-2">
                  <span className="block text-[10px] text-stone-500">UK GMT</span>
                  <span className="font-bold text-stone-900 text-xs">3 PM–10 PM</span>
                </div>
                <div className="rounded-lg bg-[#f9f6f2] border border-[#eee6dc] p-2">
                  <span className="block text-[10px] text-stone-500">AU AEST</span>
                  <span className="font-bold text-stone-900 text-xs">1 AM–8 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Core Niches Visual Mini-Grid */}
      <div className="space-y-4 pt-4 border-t border-[#e8ded3]">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8c532b]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
              Specialized Competencies
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-stone-900">
            My Core Operational Niches
          </h2>
          <p className="text-sm text-stone-600 max-w-2xl">
            Focused execution domains combining disciplined daily store tasks, asynchronous admin protocols, and technical problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Card 1: E-Commerce Operations */}
          <div className="workspace-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between bg-white border border-[#e8ded3] hover:border-[#8c532b] shadow-2xs hover:shadow-xs transition-all space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="h-9 w-9 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center">
                  <ShoppingCart className="h-4.5 w-4.5" />
                </span>
                <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-full">
                  Primary Focus
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900">
                  E-Commerce Operations
                </h3>
                <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                  Product hunting, ASIN analysis, competitor price scraping, supplier margin ledgers, and Shopify variant catalog administration.
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-stone-100 text-[11px] font-mono text-stone-500">
              Amazon • Shopify • Pinterest
            </div>
          </div>

          {/* Card 2: Administrative & Executive Support */}
          <div className="workspace-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between bg-white border border-[#e8ded3] hover:border-[#8c532b] shadow-2xs hover:shadow-xs transition-all space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="h-9 w-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 flex items-center justify-center">
                  <ClipboardList className="h-4.5 w-4.5" />
                </span>
                <span className="text-[10px] font-mono font-bold text-blue-800 bg-blue-100/70 px-2 py-0.5 rounded-full">
                  Core Operations
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900">
                  Administrative &amp; Executive Support
                </h3>
                <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                  Daily inbox triage, international calendar management across timezones, and creating comprehensive SOP documents for asynchronous delegation.
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-stone-100 text-[11px] font-mono text-stone-500">
              Notion • Trello • Google Workspace
            </div>
          </div>

          {/* Card 3: Technical Edge & Automation Multipliers */}
          <div className="workspace-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between bg-white border border-[#e8ded3] hover:border-[#8c532b] shadow-2xs hover:shadow-xs transition-all space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="h-9 w-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center">
                  <Sparkles className="h-4.5 w-4.5" />
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                  BSIT Advantage
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900">
                  Technical &amp; Systems Multipliers
                </h3>
                <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                  MOS Excel formula engineering, dynamic stock alerts, custom web order trackers, and Canva &amp; Pinterest creative asset batching.
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-stone-100 text-[11px] font-mono text-stone-500">
              MOS Excel • Next.js • Canva Pro
            </div>
          </div>
        </div>
      </div>

      {/* Standard Operating Procedure (SOP) Flowchart Pipeline */}
      <div className="pt-6 border-t border-[#e8ded3]">
        <WorkflowSimulator 
          className="w-full py-4 bg-transparent"
          containerClassName="w-full space-y-6"
        />
      </div>

      {/* Tools & Tech Stack Matrix (Equalized Heights Across All 4 Cards) */}
      <div className="space-y-6 pt-6 border-t border-[#e8ded3]">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8c532b]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
              Toolkit &amp; Software
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-stone-900">
            Tools &amp; Technical Capabilities
          </h2>
          <p className="text-sm text-stone-600 max-w-2xl">
            Software, formula suites, and frameworks utilized daily for store administration and client support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          {TOOLS_CATEGORIES.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div 
                key={idx} 
                className="workspace-card rounded-2xl p-6 flex flex-col justify-between bg-white border border-[#e8ded3] h-full shadow-2xs hover:border-[#8c532b] transition-all space-y-5"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#f0e6dc]">
                    <div className="flex items-center gap-3">
                      <span className={`h-10 w-10 rounded-xl flex items-center justify-center border shadow-2xs shrink-0 ${group.iconBg}`}>
                        <Icon className={`h-5 w-5 ${group.iconColor}`} />
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-stone-900 leading-snug">
                          {group.title}
                        </h3>
                        <p className="text-[11px] text-stone-500 leading-tight mt-0.5">
                          {group.subtitle}
                        </p>
                      </div>
                    </div>
                    <Badge variant={group.badgeVariant} size="sm" className="shrink-0">
                      {group.badge}
                    </Badge>
                  </div>

                  {/* Primary Platforms / Software Badges */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-stone-500 block">
                      Daily Software &amp; Ecosystem:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.platforms.map((platform, pIdx) => {
                        const Logo = platform.logo;
                        return (
                          <div
                            key={pIdx}
                            className="inline-flex items-center gap-2 rounded-xl border border-[#e8ded3] bg-[#faf6f0] px-3 py-1.5 shadow-2xs hover:border-[#8c532b]/50 transition-colors"
                          >
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white shadow-2xs">
                              <Logo size={16} className="h-4 w-4" />
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold text-stone-900">{platform.name}</span>
                              {platform.tag && (
                                <span className="text-[10px] font-mono font-medium text-[#8c532b] bg-white px-1.5 py-0.5 rounded border border-[#ebdccb]">
                                  {platform.tag}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2-Column Applied Capabilities Checklist */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-stone-500 block">
                      Applied Capabilities &amp; Workflows:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-stone-700">
                      {group.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-tight text-stone-700">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Next Step Twin-Button Action Suite */}
      <div className="pt-8 border-t border-[#e8ded3]">
        <div className="workspace-card rounded-2xl p-6 sm:p-8 bg-[#faf6f0] border border-[#ebdccb] flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">
              Ready to evaluate deliverables or discuss your workflow?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Inspect verified case studies or message me directly to schedule a paid trial task.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 shrink-0">
            {/* Button 1: Secondary Outlined */}
            <Button 
              href="/work" 
              variant="outline" 
              size="md"
              className="border-[#8c532b]/40 bg-white text-[#8c532b] hover:bg-[#faf5ee] hover:border-[#8c532b] font-semibold text-xs shadow-2xs"
            >
              View Full Work Catalog
            </Button>
            {/* Button 2: Primary Filled */}
            <Button 
              href="/contact" 
              size="md"
              className="bg-[#8c532b] hover:bg-[#734320] text-white font-semibold text-xs shadow-xs"
            >
              Let&apos;s Start a Conversation <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
