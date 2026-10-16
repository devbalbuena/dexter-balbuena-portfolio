"use client";

import * as React from "react";
import { 
  AmazonLogo,
  ExcelLogo, 
  GoogleSheetsLogo, 
  NextjsLogo, 
  CanvaLogo, 
  PinterestLogo, 
  NotionLogo, 
  ShopifyLogo 
} from "@/components/ui/BrandLogos";

interface ToolItem {
  name: string;
  category: string;
  logo: React.ElementType;
  tag: string;
  highlightTag?: boolean;
}

const TOOLS: ToolItem[] = [
  {
    name: "Amazon",
    category: "Marketplace & Affiliate",
    logo: AmazonLogo,
    tag: "ASIN Research & Listings",
  },
  {
    name: "Pinterest",
    category: "Visual Search & Traffic",
    logo: PinterestLogo,
    tag: "24.3K Monthly Views",
    highlightTag: true,
  },
  {
    name: "Microsoft Excel",
    category: "MOS Certified",
    logo: ExcelLogo,
    tag: "Dynamic Formulas (XLOOKUP/LET)",
    highlightTag: true,
  },
  {
    name: "Shopify",
    category: "E-Commerce Storefront",
    logo: ShopifyLogo,
    tag: "Catalog & Product Listings",
  },
  {
    name: "Google Sheets",
    category: "Live Cloud Operations",
    logo: GoogleSheetsLogo,
    tag: "Inventory & Reorder Dashboards",
  },
  {
    name: "Canva Pro",
    category: "E-Commerce Visuals",
    logo: CanvaLogo,
    tag: "High-CTR Pins & Ad Creatives",
  },
  {
    name: "Notion",
    category: "Operations & Systems",
    logo: NotionLogo,
    tag: "SOPs & Team Documentation",
  },
  {
    name: "Next.js & SQL",
    category: "BSIT Web Engineering",
    logo: NextjsLogo,
    tag: "Custom Portals & Data Integrity",
  },
];

export function ToolsRibbon() {
  // Duplicate items array so the ticker loops seamlessly forever
  const tickerItems = React.useMemo(() => [...TOOLS, ...TOOLS], []);

  return (
    <div className="w-full pt-4 pb-10 border-b border-[#eee6dc]">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Subtitle / Header */}
        <div className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#8c532b] animate-ping" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8c532b]">
            Technologies &amp; Systems I Operate Daily
          </span>
        </div>

        {/* Outer Carousel Container with Left/Right Fade Masks & Pause-on-Hover */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Left Gradient Mask */}
          <div 
            className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent" 
            aria-hidden="true" 
          />

          {/* Right Gradient Mask */}
          <div 
            className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent" 
            aria-hidden="true" 
          />

          {/* Scrolling Track with CSS Hardware-Accelerated Marquee + Hover Pause */}
          <div className="animate-glide-marquee gap-3.5 sm:gap-4 select-none py-1">
            {tickerItems.map((tool, idx) => {
              const Logo = tool.logo;
              return (
                <div
                  key={idx}
                  className="w-[215px] sm:w-[235px] shrink-0 rounded-2xl border border-[#e8ded3] bg-white p-3.5 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-[#8c532b] hover:-translate-y-1 transition-all group cursor-default"
                >
                  {/* Official Brand Logo */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#faf6f0] border border-[#f0e4d5] group-hover:scale-108 transition-transform shadow-xs">
                    <Logo size={26} />
                  </div>

                  {/* Tool Name & Category */}
                  <div className="flex flex-col text-left overflow-hidden">
                    <span className="text-xs font-bold text-stone-900 group-hover:text-[#8c532b] transition-colors truncate">
                      {tool.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#8c532b] font-medium truncate">
                      {tool.category}
                    </span>
                    <span className={`text-[10px] truncate mt-0.5 ${tool.highlightTag ? "text-emerald-700 font-semibold" : "text-stone-500"}`}>
                      {tool.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Continuous Gliding Track Footer */}
      </div>
    </div>
  );
}
