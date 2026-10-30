"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Mail, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink,
  ArrowRight
} from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const [honeypot, setHoneypot] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "dispatched" | "error">("idle");
  const [statusMessage, setStatusMessage] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  // Formatted message payload for email & WhatsApp
  const formattedSummary = `Name: ${formData.name}\nEmail: ${formData.email}\nWhatsApp/Phone: ${formData.whatsapp || "Not provided"}\n\nProject Details:\n${formData.message}`;

  // Gmail Web Client 1-Click Link
  const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=balbuena.dexter.va@gmail.com&su=${encodeURIComponent(
    `Inquiry from ${formData.name || "Client"} (E-Commerce VA)`
  )}&body=${encodeURIComponent(formattedSummary)}`;

  // Default Mail Client (mailto:)
  const mailToLink = `mailto:balbuena.dexter.va@gmail.com?subject=${encodeURIComponent(
    `Inquiry from ${formData.name || "Client"}`
  )}&body=${encodeURIComponent(formattedSummary)}`;

  // WhatsApp with exact pre-filled user message
  const whatsappLink = `https://wa.me/639912131795?text=${encodeURIComponent(
    `Hi Dexter! My name is ${formData.name} (${formData.email}).\n\nProject details:\n${formData.message}`
  )}`;

  const handleCopyDetails = async () => {
    try {
      await navigator.clipboard.writeText(formattedSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Anti-spam honeypot check
    if (honeypot) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          message: formData.message,
          _gotcha: honeypot,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(data?.error || "Could not process inquiry. Please message via WhatsApp or email directly.");
        return;
      }

      if (data.delivered) {
        setStatus("success");
        setFormData({ name: "", email: "", whatsapp: "", message: "" });
      } else {
        // Direct dispatch hub
        setStatus("dispatched");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network connection issue. Please use direct email or WhatsApp (+63 9912131795).");
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

      {/* Case 1: Automated Delivery Success */}
      {status === "success" && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-6 text-center space-y-3">
          <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-600" />
          <h3 className="font-bold text-emerald-900">
            Message Sent Successfully!
          </h3>
          <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
            Thank you, {formData.name || "friend"}! Your inquiry has been received. I will review your requirements and respond promptly to your email.
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
      )}

      {/* Case 2: Multi-Channel 1-Click Dispatch Hub */}
      {status === "dispatched" && (
        <div className="rounded-xl border border-[#ebdccb] bg-[#faf6f0] p-6 space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
              <CheckCircle2 className="h-4.5 w-4.5" />
            </span>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-stone-900">
                Inquiry Formatted &amp; Ready to Dispatch
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Choose your preferred method to send your formatted inquiry directly to Dexter:
              </p>
            </div>
          </div>

          {/* Action Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {/* WhatsApp Direct (with prefilled message) */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-2xs group"
            >
              <span className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>Send via WhatsApp</span>
              </span>
              <ExternalLink className="h-3.5 w-3.5 opacity-80 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Gmail Web 1-Click (Works without native mail app) */}
            <a
              href={gmailWebLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-[#8c532b] hover:bg-[#734320] text-white font-semibold text-xs transition-colors shadow-2xs group"
            >
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>Open in Gmail Web</span>
              </span>
              <ExternalLink className="h-3.5 w-3.5 opacity-80 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Copy Details to Clipboard */}
            <button
              type="button"
              onClick={handleCopyDetails}
              className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-stone-50 border border-[#ebdccb] text-stone-800 font-semibold text-xs transition-colors shadow-2xs cursor-pointer"
            >
              <span className="flex items-center gap-2">
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-600" />
                ) : (
                  <Copy className="h-4 w-4 text-[#8c532b]" />
                )}
                <span>{copied ? "Inquiry Copied!" : "Copy Full Message"}</span>
              </span>
              <span className="text-[10px] font-mono text-stone-400">Clipboard</span>
            </button>

            {/* Default Mail Client (mailto) */}
            <a
              href={mailToLink}
              className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-stone-50 border border-[#ebdccb] text-stone-800 font-semibold text-xs transition-colors shadow-2xs group"
            >
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-stone-600" />
                <span>Default Mail App</span>
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-stone-400 group-hover:text-stone-700 transition-colors" />
            </a>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-[#ebdccb]/60 text-[11px] font-mono text-stone-500">
            <span>Direct Email: balbuena.dexter.va@gmail.com</span>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="text-[#8c532b] hover:underline font-semibold cursor-pointer"
            >
              Edit Form ↺
            </button>
          </div>
        </div>
      )}

      {/* Case 3: Interactive Input Form */}
      {status !== "success" && status !== "dispatched" && (
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

          {status === "error" && (
            <div className="flex items-start gap-2 rounded-lg bg-red-500/10 p-3 text-xs text-red-800 border border-red-200">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-red-600" />
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
                <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Preparing Inquiry...
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
