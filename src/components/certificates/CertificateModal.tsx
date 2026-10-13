"use client";

import * as React from "react";
import Image from "next/image";
import { Certificate } from "@/types/certificate";
import { Badge } from "@/components/ui/Badge";
import { 
  X, 
  Award, 
  ExternalLink, 
  Calendar, 
  Building2, 
  CheckCircle, 
  FileCheck, 
  Maximize2 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const [imageError, setImageError] = React.useState(false);

  // Reset image error state whenever selected certificate changes
  React.useEffect(() => {
    setImageError(false);
  }, [certificate]);

  // Handle ESC key to close modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (certificate) {
      window.addEventListener("keydown", handleKeyDown);
      // Lock body scroll
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  const hasImage = Boolean(certificate.certificateImage) && !imageError;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-[#e8ded3] shadow-2xl flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#e8ded3] bg-[#faf6f0] px-5 py-3.5 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f7efe6] text-[#8c532b]">
                <Award className="h-4 w-4" />
              </span>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
                  Verified Credential Preview
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close certificate modal"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-stone-500 hover:bg-stone-200/60 hover:text-stone-900 transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-7 space-y-6">
            {/* Title & Metadata */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Badge variant="success" size="sm">
                  <CheckCircle className="h-3 w-3 mr-1" /> Authenticated
                </Badge>
                <span className="flex items-center gap-1.5 text-xs font-mono text-stone-500">
                  <Calendar className="h-3.5 w-3.5 text-stone-400" /> Issued: {certificate.issued}
                </span>
              </div>

              <h2 id="cert-modal-title" className="text-xl sm:text-2xl font-extrabold tracking-tight text-stone-900 leading-snug">
                {certificate.name}
              </h2>

              <div className="flex items-center gap-2 text-xs font-medium text-stone-600">
                <Building2 className="h-3.5 w-3.5 text-[#8c532b]" />
                <span>Issuer: <strong>{certificate.issuer}</strong></span>
                {certificate.credentialId && (
                  <span className="text-stone-400 font-mono text-[11px] ml-2">
                    • ID: {certificate.credentialId}
                  </span>
                )}
              </div>
            </div>

            {/* Certificate Image or Upload Guide Placeholder */}
            <div className="relative overflow-hidden rounded-xl border border-[#e8ded3] bg-[#fbf9f6]">
              {hasImage ? (
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full bg-stone-900 flex items-center justify-center">
                  <Image
                    src={certificate.certificateImage!}
                    alt={`Certificate for ${certificate.name}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 672px"
                    priority
                    onError={() => setImageError(true)}
                  />
                  <a
                    href={certificate.certificateImage!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-lg bg-black/60 px-2.5 py-1 text-[11px] font-mono text-white backdrop-blur-xs hover:bg-black/80 transition-colors shadow-xs"
                  >
                    <Maximize2 className="h-3 w-3" /> Full Size
                  </a>
                </div>
              ) : (
                /* Instructional Placeholder when image has not been attached yet */
                <div className="p-8 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7efe6] text-[#8c532b] shadow-2xs">
                    <FileCheck className="h-7 w-7" />
                  </div>
                  <div className="space-y-1.5 max-w-md mx-auto">
                    <h3 className="text-base font-bold text-stone-900">
                      Certificate Attachment Ready
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Attach your certificate file here by saving your scanned image or PDF screenshot as:
                    </p>
                    <code className="block rounded-lg bg-[#efe7db] px-3 py-1.5 font-mono text-[11px] text-[#7a4e2d] font-semibold break-all">
                      {certificate.certificateImage || `public/images/certificates/${certificate.issuer.toLowerCase().replace(/[^a-z0-9]/g, "-")}.png`}
                    </code>
                    <p className="text-[11px] text-stone-500 pt-1">
                      Once placed in the folder, your actual certificate will display here in high-resolution automatically.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Tested Competencies */}
            <div className="rounded-xl bg-[#f9f6f2] border border-[#eee6dc] p-4 space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-600 block">
                Tested &amp; Verified Competencies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {certificate.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-md bg-white border border-[#e8ded3] px-2.5 py-1 font-mono text-xs text-stone-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#e8ded3]">
              {certificate.credentialUrl ? (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#8c532b] px-4 py-2 text-xs font-semibold text-white hover:bg-[#734320] transition-colors"
                >
                  Verify on {certificate.issuer} <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <span className="text-xs font-mono text-stone-500">
                  Formally issued credential
                </span>
              )}

              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-lg border border-[#e8ded3] bg-white px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
