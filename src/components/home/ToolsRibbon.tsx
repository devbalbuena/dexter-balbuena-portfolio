"use client";

import * as React from "react";
import { motion } from "motion/react";
import { 
  FileSpreadsheet, 
  Code2, 
  Palette, 
  Pin, 
  BookOpen, 
  Search 
} from "lucide-react";

interface ToolItem {
  name: string;
  category: string;
  icon: React.ElementType;
  badgeBg: string;
  badgeColor: string;
}

const TOOLS: ToolItem[] = [
  {
    name: "Excel / Sheets",
    category: "MOS Certified",
    icon: FileSpreadsheet,
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    badgeColor: "#10b981",
  },
  {
    name: "Next.js & TypeScript",
    category: "Web Systems",
    icon: Code2,
    badgeBg: "bg-stone-100 text-stone-800 border-stone-200/80",
    badgeColor: "#1c1917",
  },
  {
    name: "Canva Pro",
    category: "Store Graphics",
    icon: Palette,
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200/80",
    badgeColor: "#0284c7",
  },
  {
    name: "Pinterest",
    category: "Visual Search",
    icon: Pin,
    badgeBg: "bg-red-50 text-red-700 border-red-200/80",
    badgeColor: "#e11d48",
  },
  {
    name: "Notion & SOPs",
    category: "Operations",
    icon: BookOpen,
    badgeBg: "bg-amber-50 text-amber-800 border-amber-200/80",
    badgeColor: "#d97706",
  },
  {
    name: "Semrush",
    category: "SEO & Keyword Research",
    icon: Search,
    badgeBg: "bg-orange-50 text-orange-700 border-orange-200/80",
    badgeColor: "#ea580c",
  },
];

export function ToolsRibbon() {
  return (
    <div className="w-full pt-4 pb-12 sm:pb-16 border-b border-[#eee6dc]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8c532b]">
            Technologies &amp; Systems I Operate Daily
          </span>

          {/* Horizontal Grid / Ribbon of Tool Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
            {TOOLS.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-[#e8ded3] bg-white p-3.5 flex flex-col items-center justify-center text-center shadow-2xs hover:shadow-md hover:border-[#8c532b] transition-all group cursor-default"
                >
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl border mb-2 group-hover:scale-105 transition-transform ${tool.badgeBg}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-bold text-stone-900 group-hover:text-[#8c532b] transition-colors leading-tight">
                    {tool.name}
                  </span>
                  <span className="text-[10px] font-mono text-stone-500 mt-0.5">
                    {tool.category}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
