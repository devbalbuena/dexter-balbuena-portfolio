import type { Metadata } from "next";
import { getAllCertificates } from "@/lib/content";
import { Badge } from "@/components/ui/Badge";
import { Award, CheckCircle, ExternalLink, Calendar, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications & Accreditations | Dexter E. Balbuena",
  description:
    "Verified credentials in Microsoft Excel, Semrush SEO, HubSpot Email Marketing, and Google Analytics 4.",
};

export default async function CertificatesPage() {
  const certificates = await getAllCertificates();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 space-y-10">
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Formal Verification
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
          Certifications &amp; Accreditations
        </h1>
        <p className="text-base text-stone-600 dark:text-stone-400 leading-relaxed">
          Industry-standard credentials evaluating operational capabilities across spreadsheet architecture, 
          search engine optimization, retention marketing, and web analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="workspace-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">
                  <Award className="h-5 w-5" />
                </span>
                <Badge variant="success" size="sm">
                  <CheckCircle className="h-3 w-3 mr-1" /> Verified
                </Badge>
              </div>

              <div>
                <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug">
                  {cert.name}
                </h2>
                <div className="flex items-center gap-2 text-xs font-medium text-stone-500 dark:text-stone-400 mt-1">
                  <Building2 className="h-3.5 w-3.5" />
                  <span>{cert.issuer}</span>
                </div>
              </div>

              <div className="rounded-lg bg-stone-100/70 p-3 dark:bg-stone-850/60 space-y-2">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-stone-500 block">
                  Tested Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="rounded-md bg-card px-2 py-0.5 font-mono text-xs text-stone-700 border border-stone-200/80 dark:border-stone-800 dark:text-stone-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200/70 dark:border-stone-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stone-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> Issued: {cert.issued}
              </span>

              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1 font-semibold"
                >
                  Verify Online <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <span className="text-stone-400 dark:text-stone-500">
                  [TODO: Credential URL Verification Link]
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
