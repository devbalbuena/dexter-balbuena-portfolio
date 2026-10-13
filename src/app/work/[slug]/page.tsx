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
            <div className="absolute inset-x-0 bottom-0 bg-[#291b11]/90 px-4 py-2 text-xs font-mono text-[#d1bfb0] backdrop-blur-xs">
              {primaryImage.caption}
            </div>
          )}
        </div>
      )}

      {/* Structured Case Study Story: Problem, What I Did, Outcome */}
      <div className="space-y-8 pt-4">
        {/* Problem */}
        <div className="workspace-card rounded-2xl p-6 sm:p-8 space-y-3 bg-white border border-[#e8ded3]">
          <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
            <span className="text-[#8c532b] font-mono text-base">01.</span>
            The Problem &amp; Context
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* What I Did */}
        <div className="workspace-card rounded-2xl p-6 sm:p-8 space-y-4 bg-white border border-[#e8ded3]">
          <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
            <span className="text-[#8c532b] font-mono text-base">02.</span>
            Execution &amp; What I Did
          </h2>
          <ul className="space-y-2.5 text-sm text-stone-600">
            {project.whatIDid.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Used */}
        <div className="workspace-card rounded-2xl p-6 sm:p-8 space-y-4 bg-white border border-[#e8ded3]">
          <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
            <span className="text-[#8c532b] font-mono text-base">03.</span>
            Tools &amp; Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, idx) => (
              <span
                key={idx}
                className="rounded-lg bg-[#f9f6f2] border border-[#eee6dc] px-3 py-1 font-mono text-xs text-stone-800"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Outcome / Result */}
        <div className="workspace-card rounded-2xl p-6 sm:p-8 space-y-3 bg-white border border-[#e8ded3]">
          <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
            <span className="text-[#8c532b] font-mono text-base">04.</span>
            Verified Outcome
          </h2>
          {project.result && (
            <p className="text-sm font-medium text-stone-700 leading-relaxed">
              {project.result}
            </p>
          )}
          {project.resultPlaceholder && (
            <div className="mt-2 flex items-start gap-2 rounded-lg bg-amber-500/10 border border-amber-200/80 p-3 text-xs text-amber-800">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{project.resultPlaceholder}</span>
            </div>
          )}
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
