"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    contactInfo: "",
    category: "E-Commerce Research & Operations",
    message: "",
  });

  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error" | "no-endpoint">("idle");
  const [statusMessage, setStatusMessage] = React.useState("");

  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!endpoint) {
      // Graceful handling when endpoint env variable is not configured
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
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", contactInfo: "", category: "E-Commerce Research & Operations", message: "" });
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
            Thank you! I will review your requirements and respond promptly.
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
          {status === "no-endpoint" && (
            <div className="flex items-start gap-2 rounded-lg bg-amber-500/10 p-3 text-xs text-amber-800 border border-amber-200/50">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <div>
                <strong>[ENDPOINT PLACEHOLDER]:</strong> The contact form endpoint is not configured yet. 
                Please reach me directly at{" "}
                <a href="mailto:balbuena.dexter.va@gmail.com" className="underline font-semibold text-[#8c532b]">
                  balbuena.dexter.va@gmail.com
                </a>{" "}
                or WhatsApp at <strong>+63 9912131795</strong>.
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

          {/* Email or WhatsApp */}
          <div className="space-y-1.5">
            <label htmlFor="contactInfo" className="block text-xs font-mono font-medium text-stone-700">
              Email or WhatsApp <span className="text-[#8c532b]">*</span>
            </label>
            <input
              id="contactInfo"
              type="text"
              required
              value={formData.contactInfo}
              onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
              placeholder="alex@brand.com or +1 555-0199"
              className="w-full rounded-lg border border-[#dcd1c4] bg-white px-3.5 py-2 text-sm text-stone-900 shadow-2xs placeholder:text-stone-400 focus:border-[#8c532b] focus:outline-hidden focus:ring-2 focus:ring-[#8c532b]/20"
            />
          </div>

          {/* Project Category Dropdown */}
          <div className="space-y-1.5">
            <label htmlFor="category" className="block text-xs font-mono font-medium text-stone-700">
              Service Required <span className="text-[#8c532b]">*</span>
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full rounded-lg border border-[#dcd1c4] bg-white px-3.5 py-2 text-sm text-stone-900 shadow-2xs focus:border-[#8c532b] focus:outline-hidden focus:ring-2 focus:ring-[#8c532b]/20"
            >
              <option value="E-Commerce Research & Operations">E-Commerce Research &amp; Store Operations</option>
              <option value="Excel & Google Sheets Automation">Excel &amp; Google Sheets Automation</option>
              <option value="Administrative & Executive Support">Administrative &amp; Executive Support</option>
              <option value="Full-Time Nocturnal VA (40 hrs/wk)">Full-Time Nocturnal VA (40 hrs/wk)</option>
              <option value="Part-Time Nocturnal VA (20 hrs/wk)">Part-Time Nocturnal VA (20 hrs/wk)</option>
              <option value="Paid Trial Task / Other">Paid Trial Task / Other Custom Workflow</option>
            </select>
          </div>

          {/* How can I help you? */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-mono font-medium text-stone-700">
              How can I help you? <span className="text-[#8c532b]">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Briefly describe your store, sheet needs, or weekly task requirements..."
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
