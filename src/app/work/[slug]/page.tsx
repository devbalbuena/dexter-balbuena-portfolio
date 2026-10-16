import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, getAllProjects } from "@/lib/content";
import { CATEGORY_LABELS } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle,
  Download
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study by Dexter E. Balbuena`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  return (
    <Suspense fallback={
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <div className="inline-block animate-pulse font-mono text-xs text-stone-400">
          Loading case study details...
        </div>
      </div>
    }>
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const primaryImage = project.media[0];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16 space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-stone-500 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to all projects
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default" size="md">
            {CATEGORY_LABELS[project.category]}
          </Badge>
          <Badge variant="outline" size="md" className="capitalize">
            {project.projectType.replace("-", " ")}
          </Badge>
          <span className="text-xs font-mono text-stone-500">
            {project.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
          {project.title}
        </h1>

        <p className="text-lg text-stone-600 leading-relaxed">
          {project.summary}
        </p>

        {/* Links bar if any */}
        {project.links && (
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.links.downloadUrl && (
              <a
                href={project.links.downloadUrl}
                download
                className="inline-flex items-center justify-center font-medium transition-all duration-150 select-none cursor-pointer hover:-translate-y-0.5 active:translate-y-0 bg-[#8c532b] text-white shadow-xs hover:bg-[#734320] h-8 px-3 text-xs rounded-lg gap-1.5 font-mono"
              >
                <Download className="h-3.5 w-3.5" /> Download Polished Workbook (.xlsx)
              </a>
            )}
            {project.links.githubUrl && (
              <Button href={project.links.githubUrl} variant="outline" size="sm" external>
                View Repository <ExternalLink className="h-3.5 w-3.5 ml-1" />
              </Button>
            )}
            {project.links.liveUrl && (
              <Button href={project.links.liveUrl} size="sm" external>
                Live Preview <ExternalLink className="h-3.5 w-3.5 ml-1" />
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Primary media preview */}
      {primaryImage && (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#e8ded3] bg-stone-900 shadow-md">
          <Image
            src={primaryImage.url}
            alt={primaryImage.alt}
            fill
            priority
            className="object-cover"
          />
          {primaryImage.caption && (
            <div className="absolute inset-x-0 bottom-0 bg-[#7a4e2d]/90 px-4 py-2 text-xs font-mono text-[#f2e7dc] backdrop-blur-xs">
              {primaryImage.caption}
            </div>
          )}
        </div>
      )}

      {/* Rigid Scannable 3-Part Operational Narrative Layout (Problem -> Execution -> Result) */}
      <div className="space-y-6 pt-2">
        <div className="workspace-card rounded-2xl overflow-hidden bg-white border border-[#e8ded3] shadow-xs">
          {/* Part 1: The Problem (1-2 sentences) */}
          <div className="p-6 sm:p-7 border-b border-[#ebdccb] bg-[#fbf9f6] space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-100 text-amber-800 text-xs font-mono font-bold">
                01
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800">
                The Problem
              </span>
            </div>
            <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-medium">
              {project.problem}
            </p>
          </div>

          {/* Part 2: The Execution (Punchy bullet points starting with action verbs) */}
          <div className="p-6 sm:p-7 border-b border-[#ebdccb] space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#8c532b]/10 text-[#8c532b] text-xs font-mono font-bold">
                  02
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
                  The Execution
                </span>
              </div>
              <span className="text-[11px] font-mono text-stone-500">
                Action-Verb Deliverables
              </span>
            </div>
            
            <ul className="space-y-3 text-sm text-stone-700">
              {project.whatIDid.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Part 3: The Result (Bold quantified text) */}
          <div className="p-6 sm:p-7 bg-[#fbf8f4] space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
                03
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
                The Result
              </span>
            </div>
            {project.result && (
              <p className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                {project.result}
              </p>
            )}
            {project.resultPlaceholder && (
              <div className="flex items-start gap-2 rounded-lg bg-amber-500/10 border border-amber-200/80 p-3 text-xs text-amber-900 font-mono">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-amber-700" />
                <span>{project.resultPlaceholder}</span>
              </div>
            )}
          </div>
        </div>

        {/* Tools & Tech Stack Pill Bar */}
        <div className="workspace-card rounded-xl p-5 bg-white border border-[#e8ded3] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-600">
            Tools &amp; Tech Stack:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.tools.map((tool, idx) => (
              <span
                key={idx}
                className="rounded-lg bg-[#f9f6f2] border border-[#eee6dc] px-3 py-1 font-mono text-xs text-stone-800 font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Next actions */}
      <div className="pt-6 border-t border-[#e8ded3] flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/work"
          className="text-xs font-mono text-stone-500 hover:text-stone-900"
        >
          ← Browse more projects
        </Link>
        <Button href="/contact" size="md">
          Discuss a Similar Task
        </Button>
      </div>
    </div>
  );
}
