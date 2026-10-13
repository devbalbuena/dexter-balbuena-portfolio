import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, ArrowRight, Clock, CheckCircle } from "lucide-react";

export function ContactCta() {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <Reveal className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl bg-[#291b11] border border-[#3d2719] text-white">
          <div className="max-w-2xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#3a2618] border border-[#4d3322] px-3.5 py-1 text-xs font-mono font-semibold text-[#d9a36f]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c28b58] animate-ping" />
              Ready for Hire • Part-Time (11 PM – 6 AM PHT)
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Need Reliable Execution for Your Store or Operations?
            </h2>

            <p className="text-base text-[#d1bfb0] leading-relaxed">
              Let&apos;s start with a paid test task or a 1-week trial. No guesswork, no exaggerated claims—just 
              disciplined, detail-oriented virtual assistance backed by technical skill.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" size="lg" className="font-semibold bg-[#a86e3b] hover:bg-[#935d2d] text-white shadow-md">
                Send an Inquiry / Hire Me <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
              <Button
                href="mailto:balbuena.dexter.va@gmail.com"
                variant="outline"
                size="lg"
                external
                className="font-medium bg-transparent border-white/30 text-white hover:bg-white/10"
              >
                <Mail className="h-4 w-4 mr-1.5" /> Direct Email
              </Button>
            </div>

            <div className="pt-6 border-t border-[#3d2719] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#b5a395]">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                Response within 12 hours
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#c28b58]" />
                US, UK, AU Hours Friendly
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
