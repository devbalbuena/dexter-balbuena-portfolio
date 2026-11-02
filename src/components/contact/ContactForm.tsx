"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Mail, 
  MessageSquare, 
  Copy, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";

const WEB3FORMS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
  "475fbf03-5600-432c-baec-1fd5ea11ea0f";

// Known common email domain typos mapped to correct domain
const COMMON_EMAIL_TYPOS: Record<string, string> = {
  "gmai.com": "gmail.com",
  "gamil.com": "gmail.com",
  "gmial.com": "gmail.com",
  "gmaill.com": "gmail.com",
  "gmaio.com": "gmail.com",
  "hotmial.com": "hotmail.com",
  "hotmaill.com": "hotmail.com",
  "yaho.com": "yahoo.com",
  "yahooo.com": "yahoo.com",
  "outlok.com": "outlook.com",
  "outloo.com": "outlook.com",
  "iclod.com": "icloud.com",
  "icoud.com": "icloud.com",
};

// Disposable & fake email domains blocked from wasting inbox space
const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "trashmail.com",
  "yopmail.com",
  "sharklasers.com",
  "dispostable.com",
  "getnada.com",
  "inboxkitten.com",
  "fake.com",
  "test.com",
  "example.com",
]);

// Strip potentially malicious HTML tags
function sanitizeInput(val: string): string {
  return val.replace(/<[^>]*>?/gm, "").trim();
}

export function ContactForm() {
  const toast = useToast();
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
  const [emailSuggestion, setEmailSuggestion] = React.useState<string | null>(null);
  const [validationErrors, setValidationErrors] = React.useState<{
    email?: string;
    whatsapp?: string;
    message?: string;
  }>({});

  // Bot speed trap timer: track when the form mounted
  const mountTimeRef = React.useRef<number>(Date.now());
  const [cooldownRemaining, setCooldownRemaining] = React.useState<number>(0);

  // Check rate limiting cooldown on mount and tick down
  React.useEffect(() => {
    mountTimeRef.current = Date.now();
    try {
      const lastSubmit = localStorage.getItem("dexter_portfolio_last_submit");
      if (lastSubmit) {
        const elapsed = Math.floor((Date.now() - parseInt(lastSubmit, 10)) / 1000);
        if (elapsed < 45) {
          setCooldownRemaining(45 - elapsed);
        }
      }
    } catch {
      // LocalStorage access safe
    }
  }, []);

  React.useEffect(() => {
    if (cooldownRemaining <= 0) return;
    const interval = setInterval(() => {
      setCooldownRemaining((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [cooldownRemaining]);

  // Real-time Email Validator
  const handleEmailChange = (val: string) => {
    setFormData((prev) => ({ ...prev, email: val }));
    setEmailSuggestion(null);

    const trimmed = val.trim().toLowerCase();
    if (!trimmed) {
      setValidationErrors((prev) => ({ ...prev, email: undefined }));
      return;
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (trimmed.includes("@") && !emailRegex.test(trimmed)) {
      setValidationErrors((prev) => ({ ...prev, email: "Please enter a valid email format (e.g. name@brand.com)" }));
    } else {
      setValidationErrors((prev) => ({ ...prev, email: undefined }));
    }

    // Check for common typo suggestions
    const parts = trimmed.split("@");
    if (parts.length === 2) {
      const domain = parts[1];
      if (COMMON_EMAIL_TYPOS[domain]) {
        setEmailSuggestion(`${parts[0]}@${COMMON_EMAIL_TYPOS[domain]}`);
      }
    }
  };

  // Real-time WhatsApp/Phone Validator
  const handleWhatsAppChange = (val: string) => {
    setFormData((prev) => ({ ...prev, whatsapp: val }));
    const trimmed = val.trim();
    if (!trimmed) {
      setValidationErrors((prev) => ({ ...prev, whatsapp: undefined }));
      return;
    }

    if (/[a-zA-Z]/.test(trimmed)) {
      setValidationErrors((prev) => ({
        ...prev,
        whatsapp: "Phone should only contain digits and country code (e.g. +1 555-0199 or +63 912...).",
      }));
      return;
    }

    const digits = trimmed.replace(/\D/g, "");
    if (digits.length > 0 && digits.length < 8) {
      setValidationErrors((prev) => ({
        ...prev,
        whatsapp: "Include full number with country code (at least 8 digits).",
      }));
    } else if (digits.length > 15) {
      setValidationErrors((prev) => ({
        ...prev,
        whatsapp: "International phone numbers cannot exceed 15 digits.",
      }));
    } else {
      setValidationErrors((prev) => ({ ...prev, whatsapp: undefined }));
    }
  };

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
      toast.copied("Inquiry details copied!", "Summary ready to paste into any messaging app.");
      setTimeout(() => setCopied(false), 2400);
    } catch {
      toast.error("Failed to copy", "Please select and copy the text manually.");
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // 1. Anti-spam honeypot check (hidden field filled by bots)
    if (honeypot) {
      setStatus("success");
      toast.success("Inquiry sent successfully!", "Dexter will review and reply within a few hours.");
      return;
    }

    // 2. Bot speed trap: If submitted under 1.8 seconds from page load, treat as automated bot
    const elapsedSinceMount = Date.now() - mountTimeRef.current;
    if (elapsedSinceMount < 1800) {
      setStatus("success");
      return;
    }

    // 3. Rate limiting cooldown check
    if (cooldownRemaining > 0) {
      toast.error("Please wait", `Please wait ${cooldownRemaining}s before submitting another message.`);
      return;
    }

    // 4. Strict Validation: Email
    const cleanEmail = formData.email.trim().toLowerCase();
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(cleanEmail)) {
      setValidationErrors((prev) => ({ ...prev, email: "Please enter a valid email address (e.g. name@brand.com)." }));
      toast.error("Invalid Email", "Please enter a valid email address.");
      return;
    }

    const emailDomain = cleanEmail.split("@")[1];
    if (DISPOSABLE_EMAIL_DOMAINS.has(emailDomain)) {
      setValidationErrors((prev) => ({ ...prev, email: "Please provide a genuine business or personal email address." }));
      toast.error("Disposable Email Blocked", "Please use a genuine email address.");
      return;
    }

    // 5. Strict Validation: WhatsApp (if provided)
    const cleanWhatsApp = formData.whatsapp.trim();
    if (cleanWhatsApp) {
      if (/[a-zA-Z]/.test(cleanWhatsApp)) {
        setValidationErrors((prev) => ({ ...prev, whatsapp: "Please enter numbers and country code only." }));
        toast.error("Invalid Phone Number", "Letters are not allowed in the WhatsApp field.");
        return;
      }
      const digits = cleanWhatsApp.replace(/\D/g, "");
      if (digits.length < 8 || digits.length > 15) {
        setValidationErrors((prev) => ({ ...prev, whatsapp: "Please enter a valid phone number with country code." }));
        toast.error("Phone Number Error", "Please provide a valid dialable international number.");
        return;
      }
    }

    // 6. Strict Validation: Message
    const cleanMessage = sanitizeInput(formData.message);
    if (cleanMessage.length < 10) {
      setValidationErrors((prev) => ({ ...prev, message: "Please provide at least a brief description of your needs (min 10 characters)." }));
      toast.error("Message Too Brief", "Please include a few details about your project.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const formPayload = new FormData();
      formPayload.append("access_key", WEB3FORMS_PUBLIC_KEY);
      formPayload.append("name", sanitizeInput(formData.name));
      formPayload.append("email", cleanEmail);
      formPayload.append("whatsapp", cleanWhatsApp || "Not provided");
      formPayload.append("message", cleanMessage);
      formPayload.append("from_name", "Dexter Balbuena Portfolio");
      formPayload.append(
        "subject",
        `New Portfolio Inquiry from ${sanitizeInput(formData.name)} (E-Commerce VA)`
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", whatsapp: "", message: "" });
        setValidationErrors({});
        setEmailSuggestion(null);
        toast.success("Inquiry sent successfully!", "Dexter will review and reply within a few hours.");

        // Record cooldown timestamp
        try {
          localStorage.setItem("dexter_portfolio_last_submit", Date.now().toString());
          setCooldownRemaining(45);
        } catch {
          // LocalStorage safe
        }
        return;
      }

      // If Web3Forms reported an issue, fallback gracefully to dispatch hub
      setStatus("dispatched");
      toast.info("Inquiry ready to dispatch!", "Choose WhatsApp or Gmail below to send directly.");
    } catch {
      // Graceful fallback to 1-click dispatch hub so client's inquiry is never lost
      setStatus("dispatched");
      toast.info("Inquiry ready to dispatch!", "Choose WhatsApp or Gmail below to send directly.");
    }
  }

  return (
    <div className="workspace-card rounded-2xl p-6 sm:p-8 space-y-6 bg-white border border-[#e8ded3]">
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-stone-900">
            Quick Inquiry Form
          </h2>
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#8c532b] bg-[#faf6f0] px-2.5 py-0.5 rounded-full border border-[#ebdccb]">
            <ShieldCheck className="h-3 w-3 text-emerald-600" /> Verified Delivery
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
            Thank you! Your inquiry has been delivered straight to Dexter&apos;s primary inbox. I will review your requirements and respond promptly.
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

      {/* Case 2: Multi-Channel 1-Click Dispatch Hub (Fallback) */}
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
              <ArrowRight className="h-3.5 w-3.5 opacity-80 group-hover:opacity-100 transition-opacity" />
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
              <ArrowRight className="h-3.5 w-3.5 opacity-80 group-hover:opacity-100 transition-opacity" />
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
              maxLength={80}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Alex (Store Founder)"
              className="w-full rounded-lg border border-[#dcd1c4] bg-white px-3.5 py-2 text-sm text-stone-900 shadow-2xs placeholder:text-stone-400 focus:border-[#8c532b] focus:outline-hidden focus:ring-2 focus:ring-[#8c532b]/20"
            />
          </div>

          {/* Two-Column Split: Required Email Address & Verified WhatsApp */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Email Address with Typo Guard */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-xs font-mono font-medium text-stone-700">
                  Email Address <span className="text-[#8c532b]">*</span>
                </label>
                {formData.email && !validationErrors.email && (
                  <span className="text-[10px] font-mono text-emerald-600 flex items-center gap-0.5">
                    <Check className="h-3 w-3" /> Valid
                  </span>
                )}
              </div>
              <input
                id="email"
                type="email"
                required
                maxLength={90}
                value={formData.email}
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder="alex@brand.com"
                className={`w-full rounded-lg border bg-white px-3.5 py-2 text-sm text-stone-900 shadow-2xs placeholder:text-stone-400 focus:outline-hidden focus:ring-2 transition-colors ${
                  validationErrors.email
                    ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                    : "border-[#dcd1c4] focus:border-[#8c532b] focus:ring-[#8c532b]/20"
                }`}
              />

              {/* Typo Suggestion Pill */}
              {emailSuggestion && (
                <button
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, email: emailSuggestion }));
                    setEmailSuggestion(null);
                    setValidationErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  className="inline-flex items-center gap-1.5 rounded-md bg-[#faf4ec] border border-[#ebd7c2] px-2.5 py-1 text-[11px] font-mono text-[#8c532b] hover:bg-[#f5e8d8] transition-colors cursor-pointer text-left"
                >
                  <Sparkles className="h-3 w-3 text-[#8c532b] shrink-0" />
                  <span>Did you mean <strong>{emailSuggestion}</strong>? Click to use</span>
                </button>
              )}

              {validationErrors.email && (
                <p className="text-[11px] font-mono text-red-600">
                  {validationErrors.email}
                </p>
              )}
            </div>

            {/* WhatsApp / Phone with Country Code Helper */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="whatsapp" className="block text-xs font-mono font-medium text-stone-700">
                  WhatsApp / Phone <span className="text-stone-400 text-[10px] font-normal">(Optional)</span>
                </label>
                {formData.whatsapp && !validationErrors.whatsapp && (
                  <span className="text-[10px] font-mono text-emerald-600 flex items-center gap-0.5">
                    <Check className="h-3 w-3" /> Valid
                  </span>
                )}
              </div>
              <input
                id="whatsapp"
                type="tel"
                maxLength={25}
                value={formData.whatsapp}
                onChange={(e) => handleWhatsAppChange(e.target.value)}
                placeholder="+1 555-0199 or +63 912..."
                className={`w-full rounded-lg border bg-white px-3.5 py-2 text-sm text-stone-900 shadow-2xs placeholder:text-stone-400 focus:outline-hidden focus:ring-2 transition-colors ${
                  validationErrors.whatsapp
                    ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                    : "border-[#dcd1c4] focus:border-[#8c532b] focus:ring-[#8c532b]/20"
                }`}
              />
              {validationErrors.whatsapp ? (
                <p className="text-[11px] font-mono text-red-600">
                  {validationErrors.whatsapp}
                </p>
              ) : (
                <p className="text-[10px] font-mono text-stone-400">
                  Include country code (e.g. +1 US, +44 UK, +61 AU, +63 PH)
                </p>
              )}
            </div>
          </div>

          {/* How Can I Help You? */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="message" className="block text-xs font-mono font-medium text-stone-700">
                How Can I Help You? <span className="text-[#8c532b]">*</span>
              </label>
              <span className={`text-[10px] font-mono ${
                formData.message.length > 1900 ? "text-amber-600" : "text-stone-400"
              }`}>
                {formData.message.length} / 2000
              </span>
            </div>
            <textarea
              id="message"
              required
              rows={4}
              maxLength={2000}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (e.target.value.trim().length >= 10) {
                  setValidationErrors((prev) => ({ ...prev, message: undefined }));
                }
              }}
              placeholder="Briefly describe your store, spreadsheet needs, or weekly task requirements..."
              className={`w-full rounded-lg border bg-white px-3.5 py-2 text-sm text-stone-900 shadow-2xs placeholder:text-stone-400 focus:outline-hidden focus:ring-2 resize-none transition-colors ${
                validationErrors.message
                  ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                  : "border-[#dcd1c4] focus:border-[#8c532b] focus:ring-[#8c532b]/20"
              }`}
            />
            {validationErrors.message && (
              <p className="text-[11px] font-mono text-red-600">
                {validationErrors.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            size="md"
            disabled={status === "submitting" || cooldownRemaining > 0}
            className="w-full justify-center font-semibold bg-[#8c532b] hover:bg-[#734320] text-white disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Delivering to Inbox...
              </>
            ) : cooldownRemaining > 0 ? (
              <>
                Please wait {cooldownRemaining}s before resending
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
