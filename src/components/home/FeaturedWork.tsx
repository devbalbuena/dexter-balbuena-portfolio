import Link from "next/link";
import Image from "next/image";
import { Project, CATEGORY_LABELS } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ExternalLink, AlertCircle } from "lucide-react";

interface FeaturedWorkProps {
  projects: Project[];
}

export function FeaturedWork({ projects }: FeaturedWorkProps) {
  return (
    <section id="featured-work" className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Proof of Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
              Featured Projects &amp; Work Samples
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Real deliverables demonstrating product research methodology, advanced spreadsheet modeling, 
              and system implementations. Every sample is transparently labeled.
            </p>
          </div>
          <div>
            <Button href="/work" variant="outline" size="md">
              View All Work ({projects.length}) <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </div>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const previewImage = project.media[0];
            return (
              <div
                key={project.slug}
                className="workspace-card rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Preview */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                    {previewImage ? (
                      <Image
                        src={previewImage.url}
                        alt={previewImage.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center font-mono text-xs text-slate-500">
                        Work Sample Preview
                      </div>
                    )}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <Badge variant="secondary" size="sm" className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs">
                        {CATEGORY_LABELS[project.category]}
                      </Badge>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span>{project.date}</span>
                      <span className="capitalize">{project.projectType.replace("-", " ")}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <Link href={`/work/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>

                    {/* Problem / What I did snippet */}
                    <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-850/60 text-xs">
                      <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                        What I Did:
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 line-clamp-2 text-[11px]">
                        {project.whatIDid[0]}
                      </p>
                    </div>

                    {/* Tools badges */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.tools.slice(0, 3).map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="inline-block rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="inline-block px-1 py-0.5 font-mono text-[10px] text-slate-400">
                          +{project.tools.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5 pt-0">
                  {project.resultPlaceholder && (
                    <div className="mb-3 flex items-start gap-1.5 rounded-md bg-amber-500/10 p-2 text-[11px] text-amber-700 dark:text-amber-300">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{project.resultPlaceholder}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-3">
                    <Link
                      href={`/work/${project.slug}`}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 inline-flex items-center gap-1"
                    >
                      Case Study Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    {project.links?.githubUrl && (
                      <a
                        href={project.links.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 flex items-center gap-1"
                      >
                        Code <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
