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
  AlertCircle 
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

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
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
          className="inline-flex items-center gap-2 text-xs font-mono text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
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
          <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
            {project.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
          {project.title}
        </h1>

        <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
          {project.summary}
        </p>

        {/* Links bar if any */}
        {project.links && (
          <div className="flex flex-wrap items-center gap-3 pt-2">
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
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-950 dark:border-stone-800 shadow-md">
          <Image
            src={primaryImage.url}
            alt={primaryImage.alt}
            fill
            priority
            className="object-cover"
          />
          {primaryImage.caption && (
            <div className="absolute inset-x-0 bottom-0 bg-stone-950/80 px-4 py-2 text-xs font-mono text-stone-300 backdrop-blur-xs">
              {primaryImage.caption}
            </div>
          )}
        </div>
      )}

      {/* Structured Case Study Story: Problem, What I Did, Outcome */}
      <div className="space-y-8 pt-4">
        {/* Problem */}
        <div className="workspace-card rounded-2xl p-6 sm:p-8 space-y-3">
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400 font-mono text-base">01.</span>
            The Problem &amp; Context
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* What I Did */}
        <div className="workspace-card rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400 font-mono text-base">02.</span>
            Execution &amp; What I Did
          </h2>
          <ul className="space-y-2.5 text-sm text-stone-600 dark:text-stone-300">
            {project.whatIDid.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Used */}
        <div className="workspace-card rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400 font-mono text-base">03.</span>
            Tools &amp; Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, idx) => (
              <span
                key={idx}
                className="rounded-lg bg-stone-100 px-3 py-1 font-mono text-xs text-stone-800 dark:bg-stone-800 dark:text-stone-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Outcome / Result */}
        <div className="workspace-card rounded-2xl p-6 sm:p-8 space-y-3">
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400 font-mono text-base">04.</span>
            Verified Outcome
          </h2>
          {project.result && (
            <p className="text-sm font-medium text-stone-700 dark:text-stone-200 leading-relaxed">
              {project.result}
            </p>
          )}
          {project.resultPlaceholder && (
            <div className="mt-2 flex items-start gap-2 rounded-lg bg-amber-500/10 p-3 text-xs text-amber-700 dark:text-amber-300">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{project.resultPlaceholder}</span>
            </div>
          )}
        </div>
      </div>

      {/* Next actions */}
      <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/work"
          className="text-xs font-mono text-stone-500 hover:text-stone-900 dark:hover:text-stone-200"
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
