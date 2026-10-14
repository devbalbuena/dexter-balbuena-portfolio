"use client";

import * as React from "react";
import { Certificate } from "@/types/certificate";
import { Badge } from "@/components/ui/Badge";
import { CertificateModal } from "./CertificateModal";
import { IssuerLogo } from "@/components/ui/BrandLogos";
import { 
  CheckCircle, 
  ExternalLink, 
  Calendar, 
  Building2, 
  Eye 
} from "lucide-react";

interface CertificatesGridProps {
  certificates: Certificate[];
}

export function CertificatesGrid({ certificates }: CertificatesGridProps) {
  const [selectedCert, setSelectedCert] = React.useState<Certificate | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="workspace-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 bg-white border border-[#e8ded3]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#faf6f0] border border-[#f0e4d5] shadow-2xs">
                  <IssuerLogo issuer={cert.issuer} size={24} />
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

            <div className="pt-4 border-t border-[#e8ded3] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> Issued: {cert.issued}
              </span>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#f7efe6] px-3 py-1.5 text-xs font-bold text-[#8c532b] hover:bg-[#ebdccb] transition-colors cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5" /> View Certificate
                </button>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8c532b] hover:text-[#704221] flex items-center gap-1 font-semibold"
                  >
                    Verify <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal View */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </>
  );
}
