import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, ArrowRight, Clock, CheckCircle } from "lucide-react";

export function ContactCta() {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <Reveal className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl bg-[#7a4e2d] border border-[#945e35] text-white">
          <div className="max-w-2xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#643e22] border border-[#7d4f2c] px-3.5 py-1 text-xs font-mono font-semibold text-[#f2e7dc]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              Ready for Hire • Part-Time (11 PM – 6 AM PHT)
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Need Reliable Execution for Your Store or Operations?
            </h2>

            <p className="text-base text-[#f0e2d3] leading-relaxed">
              Let&apos;s discuss your workflow and operational requirements. No guesswork, no exaggerated claims—just 
              disciplined, detail-oriented virtual assistance backed by technical skill.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" size="lg" className="font-bold bg-white hover:bg-[#faf5ee] text-[#7a4e2d] shadow-md">
                Send an Inquiry / Hire Me <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
              <Button
                href="mailto:balbuena.dexter.va@gmail.com"
                variant="outline"
                size="lg"
                external
                className="font-medium bg-transparent border-white/40 text-white hover:bg-white/10"
              >
                <Mail className="h-4 w-4 mr-1.5" /> Direct Email
              </Button>
            </div>

            <div className="pt-6 border-t border-[#8f5d36] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#eddccf]">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-300" />
                Direct Communication
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#f5d5b8]" />
                US, UK, AU Hours Friendly
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
