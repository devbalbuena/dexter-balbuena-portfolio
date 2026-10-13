"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project, ProjectCategory, CATEGORY_LABELS } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, ExternalLink, AlertCircle, FolderGit2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface WorkFilterHubProps {
  projects: Project[];
}

const CATEGORIES: { key: "all" | ProjectCategory; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "ecommerce-research", label: "E-Commerce Research" },
  { key: "excel-sheets", label: "Excel & Sheets" },
  { key: "web-system", label: "Web Systems" },
  { key: "admin-docs", label: "Admin & SOPs" },
  { key: "graphic-design", label: "Graphic Design" },
  { key: "social-media", label: "Social Media" },
];

export function WorkFilterHub({ projects }: WorkFilterHubProps) {
  const [activeCategory, setActiveCategory] = React.useState<"all" | ProjectCategory>("all");

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  if (projects.length === 0) {
    return (
      <div className="workspace-card rounded-2xl p-12 text-center max-w-lg mx-auto my-12 space-y-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 text-stone-500 dark:bg-stone-850 dark:text-stone-400">
          <FolderGit2 className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
          Projects coming soon
        </h3>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Real case studies and sanitized deliverables are currently being prepared for display.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 pb-2" role="tablist" aria-label="Project category filters">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              role="tab"
              aria-selected={isActive}
              className={cn(
                "relative rounded-lg px-3.5 py-1.5 text-xs font-mono font-medium transition-all cursor-pointer",
                isActive
                  ? "bg-[#8c532b] text-white font-semibold shadow-xs"
                  : "bg-white text-stone-600 hover:text-stone-900 border border-[#e8ded3] hover:bg-[#f7efe6]"
              )}
            >
              {cat.label}
              {cat.key !== "all" && (
                <span className="ml-1.5 opacity-60 text-[10px]">
                  ({projects.filter((p) => p.category === cat.key).length})
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Filtered Grid */}
      {filteredProjects.length === 0 ? (
        <div className="workspace-card rounded-xl p-8 text-center text-sm text-stone-500 bg-white border border-[#e8ded3]">
          No projects found in this category yet.
        </div>
      ) : (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const previewImage = project.media[0];
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={project.slug}
                  className="workspace-card rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-[#e8ded3]"
                >
                  <div>
                    {/* Visual Preview */}
                    <div className="relative aspect-video w-full overflow-hidden bg-stone-900 border-b border-stone-100">
                      {previewImage ? (
                        <Image
                          src={previewImage.url}
                          alt={previewImage.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-103"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center font-mono text-xs text-stone-500">
                          Work Sample Preview
                        </div>
                      )}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        <Badge variant="secondary" size="sm" className="bg-white/95 shadow-xs">
                          {CATEGORY_LABELS[project.category]}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between text-[11px] font-mono text-stone-500">
                        <span>{project.date}</span>
                        <span className="capitalize">{project.projectType.replace("-", " ")}</span>
                      </div>

                      <h3 className="text-base font-bold text-stone-900 group-hover:text-[#8c532b] transition-colors">
                        <Link href={`/work/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                        {project.summary}
                      </p>

                      <div className="rounded-lg bg-[#f9f6f2] border border-[#eee6dc] p-2.5 text-xs">
                        <span className="font-semibold text-stone-900 block mb-0.5">
                          Problem &amp; Approach:
                        </span>
                        <p className="text-stone-600 line-clamp-2 text-[11px]">
                          {project.problem}
                        </p>
                      </div>

                      {/* Tool tags */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {project.tools.slice(0, 3).map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-block rounded bg-[#f5ede3] px-2 py-0.5 font-mono text-[10px] text-stone-700"
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 3 && (
                          <span className="inline-block px-1 py-0.5 font-mono text-[10px] text-stone-400">
                            +{project.tools.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card bottom */}
                  <div className="p-5 pt-0">
                    {project.resultPlaceholder && (
                      <div className="mb-3 flex items-start gap-1.5 rounded-md bg-amber-500/10 p-2 text-[11px] text-amber-800">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{project.resultPlaceholder}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between border-t border-stone-100 pt-3">
                      <Link
                        href={`/work/${project.slug}`}
                        className="text-xs font-semibold text-[#8c532b] hover:text-[#704221] inline-flex items-center gap-1"
                      >
                        Case Study Details <ArrowRight className="h-3.5 w-3.5" />
                      </Link>

                      {project.links?.githubUrl && (
                        <a
                          href={project.links.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-stone-500 hover:text-stone-900 flex items-center gap-1"
                        >
                          Code <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
