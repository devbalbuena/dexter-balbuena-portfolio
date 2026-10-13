import Link from "next/link";
import { Certificate } from "@/types/certificate";
import { Badge } from "@/components/ui/Badge";
import { Award, CheckCircle, ExternalLink, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface CertificatesStripProps {
  certificates: Certificate[];
}

export function CertificatesStrip({ certificates }: CertificatesStripProps) {
  return (
    <section className="w-full py-16 border-t border-[#e8ded3] bg-[#fbf9f6]">
      <Reveal className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-600" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
                Verified Credentials
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
              Certifications &amp; Technical Accreditations
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              Formally evaluated on spreadsheet data manipulation, e-commerce search marketing, 
              lifecycle email flows, and web measurement.
            </p>
          </div>
          <div>
            <Link
              href="/certificates"
              className="text-sm font-semibold text-[#8c532b] hover:text-[#704221] inline-flex items-center gap-1.5"
            >
              All credential details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="workspace-card rounded-xl p-5 flex flex-col justify-between bg-white border border-[#e8ded3]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                    <Award className="h-4 w-4" />
                  </span>
                  <Badge variant="success" size="sm">
                    <CheckCircle className="h-3 w-3 mr-1" /> Verified
                  </Badge>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-stone-900 leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-medium text-stone-500 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 space-y-1">
                  <span className="text-[10px] font-mono text-stone-400 block uppercase">
                    Core Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 2).map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-block rounded bg-[#f5ede3] px-1.5 py-0.5 font-mono text-[10px] text-stone-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-500">
                <span>Issued {cert.issued}</span>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8c532b] flex items-center gap-1"
                  >
                    Verify <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-[10px] text-stone-400">[TODO Link]</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
