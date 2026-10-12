import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, ArrowRight, Clock, CheckCircle } from "lucide-react";

export function ContactCta() {
  return (
    <section className="w-full py-16 md:py-20 border-t border-stone-200/80 dark:border-stone-800/80 bg-stone-100/30 dark:bg-stone-900/20">
      <Reveal className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="workspace-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-lg border-blue-200/50 dark:border-blue-900/30">
          <div className="max-w-2xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-3 py-1 text-xs font-mono font-semibold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping" />
              Ready for Hire • Part-Time (11 PM – 6 AM PHT)
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
              Need Reliable Execution for Your Store or Operations?
            </h2>

            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              Let&apos;s start with a paid test task or a 1-week trial. No guesswork, no exaggerated claims—just 
              disciplined, detail-oriented virtual assistance backed by technical skill.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" size="lg" className="font-semibold shadow-md">
                Send an Inquiry / Hire Me <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
              <Button
                href="mailto:balbuena.dexter.va@gmail.com"
                variant="outline"
                size="lg"
                external
                className="font-medium"
              >
                <Mail className="h-4 w-4 mr-1.5" /> Direct Email
              </Button>
            </div>

            <div className="pt-6 border-t border-stone-200/70 dark:border-stone-800 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-stone-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                Response within 12 hours
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-blue-500" />
                US, UK, AU Hours Friendly
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
