"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    projectType: "E-Commerce Research / Operations",
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
        setFormData({ name: "", email: "", projectType: "E-Commerce Research / Operations", message: "" });
      } else {
        const data = await response.json().catch(() => null);
        setStatus("error");
        setStatusMessage(data?.error || "Failed to send message. Please reach out via direct email.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please use direct email (balbuena.dexter.va@gmail.com).");
    }
  }

  return (
    <div className="workspace-card rounded-2xl p-6 sm:p-8 space-y-6 bg-white border border-[#e8ded3]">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-stone-900">
          Send a Message
        </h2>
        <p className="text-xs text-stone-500">
          Fill out the form below or message me directly via WhatsApp or Email.
        </p>
      </div>

      {status === "success" ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-6 text-center space-y-3">
          <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-600" />
          <h3 className="font-bold text-emerald-900">
            Message Sent Successfully!
          </h3>
          <p className="text-xs text-emerald-700">
            Thank you! I will review your requirements and respond within 12 hours.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatus("idle")}
            className="mt-2 text-xs"
          >
            Send Another Message
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

          <div className="space-y-1.5">
            <label htmlFor="name" className="block text-xs font-mono font-medium text-stone-700">
              Your Name / Company
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Jane Doe (Store Founder)"
              className="w-full rounded-lg border border-[#dcd1c4] bg-white px-3.5 py-2 text-sm text-stone-900 shadow-2xs placeholder:text-stone-400 focus:border-[#8c532b] focus:outline-hidden focus:ring-2 focus:ring-[#8c532b]/20"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-xs font-mono font-medium text-stone-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="jane@yourbrand.com"
              className="w-full rounded-lg border border-[#dcd1c4] bg-white px-3.5 py-2 text-sm text-stone-900 shadow-2xs placeholder:text-stone-400 focus:border-[#8c532b] focus:outline-hidden focus:ring-2 focus:ring-[#8c532b]/20"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="projectType" className="block text-xs font-mono font-medium text-stone-700">
              Service Needed
            </label>
            <select
              id="projectType"
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full rounded-lg border border-[#dcd1c4] bg-white px-3.5 py-2 text-sm text-stone-900 shadow-2xs focus:border-[#8c532b] focus:outline-hidden focus:ring-2 focus:ring-[#8c532b]/20"
            >
              <option value="E-Commerce Research / Operations">E-Commerce Research &amp; Operations</option>
              <option value="Excel / Google Sheets Ledger & Modeling">Excel &amp; Google Sheets Modeling</option>
              <option value="Administrative / Executive VA">Administrative / Executive Assistant</option>
              <option value="Web System / Internal Tool Prototype">Web System / Custom Tracker</option>
              <option value="Canva Graphics & Pinterest Marketing">Canva Graphics &amp; Pinterest</option>
              <option value="Paid Test Task / Trial Week">Paid Test Task / 1-Week Trial</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-mono font-medium text-stone-700">
              Project Details &amp; Timeline
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your product niche, sheet requirements, or weekly hours..."
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
                Submit Message <Send className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
