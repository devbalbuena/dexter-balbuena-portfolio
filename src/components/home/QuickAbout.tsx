import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { 
  MapPin, 
  Clock, 
  ShieldCheck, 
  GraduationCap,
  ArrowRight
} from "lucide-react";

export function QuickAbout() {
  return (
    <section className="w-full py-16 md:py-24 border-t border-stone-200/80 bg-white">
      <Reveal className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#8c532b]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8c532b]">
                About Dexter
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
              Technical Rigor Meets Reliable Virtual Assistance
            </h2>

            <div className="space-y-4 text-base text-stone-600 leading-relaxed">
              <p>
                I am a third-year <strong>Bachelor of Science in Information Technology (BSIT)</strong> student 
                in Butuan City, Philippines, graduating in April 2027. Unlike generalists who merely input data, 
                my IT training gives me a deeper grasp of data structures, spreadsheet logic, and web systems.
              </p>
              <p>
                As an aspiring <strong>E-Commerce, Administrative, and Executive VA</strong>, I treat every task 
                like a production deployment: documented Standard Operating Procedures (SOPs), formula validation, 
                and zero guesswork. Whether balancing a 140-item family store inventory ledger or analyzing 
                Amazon BSR keywords, I work autonomously and communicate clearly.
              </p>
              <p className="text-sm font-mono text-stone-700 bg-[#f7efe6] p-3 rounded-lg border border-[#ebdccb]">
                [TRANSPARENCY NOTE: I am actively seeking my first remote client contracts. All projects shown in this portfolio represent verified personal builds, academic capstones, and family retail operational systems.]
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/about" size="md">
                Read Full Story &amp; Workstyle <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Discuss a Trial Task
              </Button>
            </div>
          </div>

          {/* Right Column: Operational Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="workspace-card rounded-2xl p-6 sm:p-8 space-y-6 bg-white border border-[#e8ded3]">
              <div className="flex items-center justify-between pb-4 border-t-0 border-b border-stone-200/70">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500">
                  Operational Snapshot
                </span>
                <Badge variant="success" size="sm">Available Now</Badge>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#8c532b] mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-stone-900">Location</span>
                    <span className="text-xs text-stone-500">Butuan City, Caraga, Philippines</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-emerald-600 mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-stone-900">Working Shift</span>
                    <span className="text-xs text-stone-500">
                      11:00 PM – 6:00 AM PHT (Nocturnal shift covers US business day, UK afternoon, AU morning)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap className="h-4 w-4 text-[#8c532b] mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-stone-900">Education</span>
                    <span className="text-xs text-stone-500">BS Information Technology (Expected April 2027)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-4 w-4 text-amber-600 mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-stone-900">Client Guarantee</span>
                    <span className="text-xs text-stone-500">
                      Open to paid trial assignments or milestone test projects to prove accuracy before ongoing commitment.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200/70 text-xs font-mono text-center text-stone-500">
                Fast internet • Dedicated workstation • Backup power
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
