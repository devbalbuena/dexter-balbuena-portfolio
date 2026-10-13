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
          <span className="h-2 w-2 rounded-full bg-[#8c532b]" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
            Formal Verification
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900">
          Certifications &amp; Accreditations
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          Industry-standard credentials evaluating operational capabilities across spreadsheet architecture, 
          search engine optimization, retention marketing, and web analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="workspace-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 bg-white border border-[#e8ded3]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f7efe6] text-[#8c532b]">
                  <Award className="h-5 w-5" />
                </span>
                <Badge variant="success" size="sm">
                  <CheckCircle className="h-3 w-3 mr-1" /> Verified
                </Badge>
              </div>

              <div>
                <h2 className="text-lg font-bold text-stone-900 leading-snug">
                  {cert.name}
                </h2>
                <div className="flex items-center gap-2 text-xs font-medium text-stone-500 mt-1">
                  <Building2 className="h-3.5 w-3.5" />
                  <span>{cert.issuer}</span>
                </div>
              </div>

              <div className="rounded-lg bg-[#f9f6f2] border border-[#eee6dc] p-3 space-y-2">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-stone-500 block">
                  Tested Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="rounded-md bg-white px-2 py-0.5 font-mono text-xs text-stone-700 border border-[#e8ded3]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e8ded3] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stone-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> Issued: {cert.issued}
              </span>

              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8c532b] hover:text-[#704221] flex items-center gap-1 font-semibold"
                >
                  Verify Online <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <span className="text-stone-400">
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
