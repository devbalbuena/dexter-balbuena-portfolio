import type { Metadata } from "next";
import { getAllCertificates } from "@/lib/content";
import { CertificatesGrid } from "@/components/certificates/CertificatesGrid";

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
          search engine optimization, retention marketing, and web analytics. Click on any certificate to view the credential image.
        </p>
      </div>

      <CertificatesGrid certificates={certificates} />
    </div>
  );
}
