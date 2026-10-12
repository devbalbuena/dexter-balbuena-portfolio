import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Award, 
  Wrench, 
  GraduationCap, 
  MapPin, 
  ShoppingCart
} from "lucide-react";

export function HeroBento() {
  return (
    <section className="relative w-full pt-8 pb-16 md:pt-14 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Pitch */}
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2">
            <Badge variant="success" size="md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for Part-Time Hire (11 PM - 6 AM PHT)
            </Badge>
            <Badge variant="outline" size="md" className="hidden sm:inline-flex">
              <MapPin className="h-3 w-3 mr-1 text-slate-500" /> Butuan City, PH
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.1]">
            Virtual Assistant with <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Technical Precision.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            Hi, I&apos;m <strong>Dexter E. Balbuena</strong>. I help e-commerce founders and busy operators streamline 
            product research, catalog listings, inventory tracking, and spreadsheet systems without babysitting.
          </p>

          {/* 2 CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button href="#featured-work" size="lg" className="font-semibold shadow-md">
              View My Work <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="font-semibold">
              Contact Me
            </Button>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 pl-2">
              US • UK • AU Timezones
            </span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
          {/* Card 1: Core E-Commerce Niche (lg:col-span-6) */}
          <div className="workspace-card rounded-2xl p-6 lg:col-span-6 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                  <ShoppingCart className="h-5 w-5" />
                </span>
                <Badge variant="default" size="sm">Primary Niche</Badge>
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                E-Commerce Operations VA
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Hands-on execution for online retailers: structured ASIN &amp; supplier research, bulk catalog entry, price monitoring, and stock depletion tracking.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-2 gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" /> Product Research
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" /> Listing Creation
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" /> Inventory Tracking
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" /> Data Entry Quality
              </div>
            </div>
          </div>

          {/* Card 2: Hours & Timezone Coverage (lg:col-span-6) */}
          <div className="workspace-card rounded-2xl p-6 lg:col-span-6 flex flex-col justify-between bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                  <Clock className="h-5 w-5" />
                </span>
                <Badge variant="success" size="sm">Direct Coverage</Badge>
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Timezone Availability: 11 PM – 6 AM PHT
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Dedicated nocturnal schedule aligned for seamless real-time handoffs with Western teams during core operational hours.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-3 gap-2 text-xs font-mono">
              <div className="rounded-lg bg-slate-50 p-2 dark:bg-slate-800/50">
                <span className="block text-[10px] text-slate-500 dark:text-slate-400">US EST</span>
                <span className="font-semibold text-slate-900 dark:text-slate-200">10 AM – 5 PM</span>
              </div>
              <div className="rounded-lg bg-slate-50 p-2 dark:bg-slate-800/50">
                <span className="block text-[10px] text-slate-500 dark:text-slate-400">UK GMT</span>
                <span className="font-semibold text-slate-900 dark:text-slate-200">3 PM – 10 PM</span>
              </div>
              <div className="rounded-lg bg-slate-50 p-2 dark:bg-slate-800/50">
                <span className="block text-[10px] text-slate-500 dark:text-slate-400">AU AEST</span>
                <span className="font-semibold text-slate-900 dark:text-slate-200">1 AM – 8 AM</span>
              </div>
            </div>
          </div>

          {/* Card 3: Certifications Count & Proof (lg:col-span-4) */}
          <div className="workspace-card rounded-2xl p-6 lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">
                  <Award className="h-5 w-5" />
                </span>
                <span className="text-2xl font-black font-mono text-amber-600 dark:text-amber-400">4</span>
              </div>
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Industry Certifications
              </h2>
              <ul className="text-xs space-y-1.5 text-slate-600 dark:text-slate-400">
                <li>• MOS: Excel Associate</li>
                <li>• Semrush SEO Crash Course</li>
                <li>• HubSpot Email Marketing</li>
                <li>• Google Analytics (GA4 - 2026)</li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
              <Link 
                href="/certificates" 
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 inline-flex items-center gap-1"
              >
                Inspect credentials ↗
              </Link>
            </div>
          </div>

          {/* Card 4: Tools & Bonus Technical Edge (lg:col-span-4) */}
          <div className="workspace-card rounded-2xl p-6 lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
                  <Wrench className="h-5 w-5" />
                </span>
                <Badge variant="accent" size="sm">Tools</Badge>
              </div>
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Bonus Services &amp; Tech Stack
              </h2>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <Badge variant="secondary" size="sm">Excel / Sheets</Badge>
                <Badge variant="secondary" size="sm">Next.js</Badge>
                <Badge variant="secondary" size="sm">Canva Pro</Badge>
                <Badge variant="secondary" size="sm">Pinterest</Badge>
                <Badge variant="secondary" size="sm">Notion</Badge>
                <Badge variant="secondary" size="sm">Semrush</Badge>
              </div>
            </div>

            <p className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400">
              Able to build internal automations &amp; customized tracker sheets.
            </p>
          </div>

          {/* Card 5: BSIT Degree Status (lg:col-span-4) */}
          <div className="workspace-card rounded-2xl p-6 lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="text-xs font-mono font-semibold text-slate-500">BSIT 2027</span>
              </div>
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                IT Student Advantage
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Graduating BSIT in April 2027. Fast to adapt to proprietary SaaS, database structures, web portals, and API-driven tools.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Caraga State / Butuan</span>
              <span className="text-blue-600 dark:text-blue-400">Quick Learner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
