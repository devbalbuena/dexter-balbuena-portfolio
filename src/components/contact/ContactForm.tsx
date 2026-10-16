"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, MessageSquare } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const [honeypot, setHoneypot] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error" | "no-endpoint">("idle");
  const [statusMessage, setStatusMessage] = React.useState("");

  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  // Pre-filled mailto link when API endpoint is not yet connected
  const mailToLink = `mailto:balbuena.dexter.va@gmail.com?subject=${encodeURIComponent(
    `Inquiry from ${formData.name || "Client"}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nWhatsApp/Phone: ${formData.whatsapp || "Not provided"}\n\nProject Details:\n${formData.message}`
  )}`;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Anti-spam honeypot check (hidden input traps automated bots without burdening real users)
    if (honeypot) {
      setStatus("success");
      return;
    }

    if (!endpoint) {
      // Graceful fallback when endpoint env variable is not configured
      setStatus("no-endpoint");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp || "Not provided",
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", whatsapp: "", message: "" });
      } else {
        const data = await response.json().catch(() => null);
        setStatus("error");
        setStatusMessage(data?.error || "Failed to send message. Please reach out via direct WhatsApp or email.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please use direct email or WhatsApp (+63 9912131795).");
    }
  }

  return (
    <div className="workspace-card rounded-2xl p-6 sm:p-8 space-y-6 bg-white border border-[#e8ded3]">
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-stone-900">
            Quick Inquiry Form
          </h2>
          <span className="text-[11px] font-mono font-semibold text-[#8c532b] bg-[#faf6f0] px-2.5 py-0.5 rounded-full border border-[#ebdccb]">
            Direct Response
          </span>
        </div>
        <p className="text-xs text-stone-500">
          Send your project details below, and I will review and reply within a few hours.
        </p>
      </div>

      {status === "success" ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-6 text-center space-y-3">
          <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-600" />
          <h3 className="font-bold text-emerald-900">
            Message Sent Successfully!
          </h3>
          <p className="text-xs text-emerald-700">
            Thank you! I will review your requirements and respond promptly to your email.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatus("idle")}
            className="mt-2 text-xs"
          >
            Send Another Inquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field (hidden from genuine users, traps automated scrapers) */}
          <input
            type="text"
            name="_gotcha"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          {status === "no-endpoint" && (
            <div className="flex flex-col gap-2 rounded-xl bg-amber-500/10 p-3.5 text-xs text-amber-900 border border-amber-200/60">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-amber-700" />
                <p className="leading-relaxed">
                  Direct API endpoint is currently being finalized. You can send your inquiry directly via your email client or WhatsApp below:
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-1 pl-6">
                <a
                  href={mailToLink}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#8c532b] px-3.5 py-1.5 font-semibold text-white hover:bg-[#734320] transition-colors shadow-2xs"
                >
                  <Mail className="h-3.5 w-3.5" /> Send via Email Draft ↗
                </a>
                <a
                  href="https://wa.me/639912131795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-1.5 font-semibold text-white hover:bg-emerald-700 transition-colors shadow-2xs"
                >
                  <MessageSquare className="h-3.5 w-3.5" /> Chat on WhatsApp ↗
                </a>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-start gap-2 rounded-lg bg-red-500/10 p-3 text-xs text-red-800">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Name */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="block text-xs font-mono font-medium text-stone-700">
              Your Name / Company <span className="text-[#8c532b]">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Alex (Store Founder)"
              className="w-full rounded-lg border border-[#dcd1c4] bg-white px-3.5 py-2 text-sm text-stone-900 shadow-2xs placeholder:text-stone-400 focus:border-[#8c532b] focus:outline-hidden focus:ring-2 focus:ring-[#8c532b]/20"
            />
          </div>

          {/* Two-Column Split: Required Email Address & Optional WhatsApp */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Email Address */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-mono font-medium text-stone-700">
                Email Address <span className="text-[#8c532b]">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@brand.com"
                className="w-full rounded-lg border border-[#dcd1c4] bg-white px-3.5 py-2 text-sm text-stone-900 shadow-2xs placeholder:text-stone-400 focus:border-[#8c532b] focus:outline-hidden focus:ring-2 focus:ring-[#8c532b]/20"
              />
            </div>

            {/* WhatsApp / Phone (Optional) */}
            <div className="space-y-1.5">
              <label htmlFor="whatsapp" className="block text-xs font-mono font-medium text-stone-700">
                WhatsApp / Phone <span className="text-stone-400 text-[10px] font-normal">(Optional)</span>
              </label>
              <input
                id="whatsapp"
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="+1 555-0199 or WhatsApp"
                className="w-full rounded-lg border border-[#dcd1c4] bg-white px-3.5 py-2 text-sm text-stone-900 shadow-2xs placeholder:text-stone-400 focus:border-[#8c532b] focus:outline-hidden focus:ring-2 focus:ring-[#8c532b]/20"
              />
            </div>
          </div>

          {/* How Can I Help You? */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-mono font-medium text-stone-700">
              How Can I Help You? <span className="text-[#8c532b]">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Briefly describe your store, spreadsheet needs, or weekly task requirements..."
              className="w-full rounded-lg border border-[#dcd1c4] bg-white px-3.5 py-2 text-sm text-stone-900 shadow-2xs placeholder:text-stone-400 focus:border-[#8c532b] focus:outline-hidden focus:ring-2 focus:ring-[#8c532b]/20 resize-none"
            />
          </div>

          <Button
            type="submit"
            size="md"
            disabled={status === "submitting"}
            className="w-full justify-center font-semibold bg-[#8c532b] hover:bg-[#734320] text-white"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending...
              </>
            ) : (
              <>
                Send Inquiry <Send className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
