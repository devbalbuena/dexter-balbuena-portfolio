"use client";

import Link from "next/link";
import Image from "next/image";
import { Project, CATEGORY_LABELS } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { motion, useReducedMotion } from "motion/react";

interface FeaturedWorkProps {
  projects: Project[];
}

export function FeaturedWork({ projects }: FeaturedWorkProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="featured-work" className="w-full py-16 md:py-24 bg-white">
      <Reveal className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#8c532b]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
                Proof of Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
              Selected Projects &amp; Actual Work
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
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
          {projects.map((project, idx) => {
            const previewImage = project.media[0];
            return (
              <motion.div
                key={project.slug}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: shouldReduceMotion ? 0.15 : 0.4,
                  delay: shouldReduceMotion ? 0 : idx * 0.06,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="h-full"
              >
                <TiltCard className="h-full">
                  <div
                    className="workspace-card h-full rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-[#e8ded3] shadow-xs hover:border-[#8c532b] hover:shadow-md transition-all"
                  >
                <div>
                  {/* Visual Preview */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[#140e0a] border-b border-stone-100">
                    {project.media.length >= 3 ? (
                      <div className="grid grid-cols-3 gap-2 p-3 h-full w-full items-center bg-gradient-to-br from-[#1c130d] via-[#120d09] to-[#1c130d]">
                        {project.media.slice(0, 3).map((item, mIdx) => (
                          <div
                            key={mIdx}
                            className="relative h-full w-full rounded-lg overflow-hidden border border-white/15 shadow-md transition-transform duration-300 group-hover:scale-[1.03]"
                          >
                            <Image
                              src={item.url}
                              alt={item.alt}
                              fill
                              sizes="130px"
                              className="object-cover"
                            />
                          </div>
                        ))}
                        <span className="absolute bottom-2.5 right-2.5 z-10 rounded-md bg-black/75 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-200 backdrop-blur-xs border border-white/10">
                          {project.media.length} Designs
                        </span>
                      </div>
                    ) : previewImage ? (
                      <Image
                        src={previewImage.url}
                        alt={previewImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center font-mono text-xs text-stone-500">
                        Work Sample Preview
                      </div>
                    )}
                    <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
                      <Badge variant="secondary" size="sm" className="bg-white/95 shadow-xs">
                        {CATEGORY_LABELS[project.category]}
                      </Badge>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-stone-500">
                      <span>{project.date}</span>
                      <span className="capitalize">{project.projectType.replace("-", " ")}</span>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 group-hover:text-[#8c532b] transition-colors">
                      <Link href={`/work/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>

                    {/* Problem & Approach Impact Box */}
                    <div className="rounded-xl bg-[#f9f6f2] border border-[#eee6dc] p-3.5 text-xs space-y-2.5">
                      <div>
                        <span className="font-semibold text-stone-900 block mb-0.5">
                          Problem:
                        </span>
                        <p className="text-stone-600 leading-relaxed line-clamp-2 text-[11.5px]">
                          {project.problem}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-[#e8ded3]/70">
                        <span className="font-semibold text-[#8c532b] block mb-0.5">
                          Approach:
                        </span>
                        <p className="text-stone-700 leading-relaxed line-clamp-2 text-[11.5px]">
                          {project.whatIDid[0]}
                        </p>
                      </div>
                    </div>

                    {/* Tools badges */}
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

                {/* Card Footer */}
                <div className="p-5 pt-0">
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
              </div>
            </TiltCard>
          </motion.div>
          );
        })}
        </div>
      </Reveal>
    </section>
  );
}
