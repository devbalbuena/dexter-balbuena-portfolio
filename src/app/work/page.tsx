import type { Metadata } from "next";
import { getAllProjects } from "@/lib/content";
import { WorkFilterHub } from "@/components/work/WorkFilterHub";

export const metadata: Metadata = {
  title: "Work Samples & Case Studies | Dexter E. Balbuena",
  description:
    "Explore e-commerce product research samples, Excel inventory ledgers, and web system prototypes by Dexter E. Balbuena.",
};

export default async function WorkPage() {
  const projects = await getAllProjects();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 space-y-10">
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Portfolio Hub
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
          Work Samples &amp; Case Studies
        </h1>
        <p className="text-base text-stone-600 dark:text-stone-400 leading-relaxed">
          Filter by niche or browse my deliverables. Every sample is transparently tagged to distinguish 
          personal research, family store systems, and academic prototypes.
        </p>
      </div>

      <WorkFilterHub projects={projects} />
    </div>
  );
}
