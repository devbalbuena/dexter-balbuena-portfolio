import fs from "fs";
import path from "path";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { HeroPortrait } from "./HeroPortrait";
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
  const photoPath = path.join(process.cwd(), "public", "images", "portrait.png");
  const hasPhoto = fs.existsSync(photoPath);

  return (
    <section className="relative w-full pt-8 pb-16 md:pt-14 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top 2-Column Hero: Text on Left, Portrait on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Positioning & Headline */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex flex-wrap items-center gap-2">
              <Badge variant="success" size="md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Part-Time Hire (11 PM - 6 AM PHT)
              </Badge>
              <Badge variant="outline" size="md" className="hidden sm:inline-flex">
                <MapPin className="h-3 w-3 mr-1 text-stone-500" /> Butuan City, PH
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Virtual Assistant with <br className="hidden sm:inline" />
              <span className="text-[#9e6231] dark:text-[#d4a373]">
                Technical Precision.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl">
              Hi, I&apos;m <strong>Dexter E. Balbuena</strong>. I help e-commerce founders and busy operators streamline 
              product research, catalog listings, inventory tracking, and spreadsheet systems without babysitting.
            </p>

            {/* 2 CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button href="/#featured-work" size="lg" className="font-semibold shadow-md">
                View My Work <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="font-semibold">
                Contact Me
              </Button>
              <span className="text-xs font-mono text-stone-500 dark:text-stone-400 pl-2">
                US • UK • AU Timezones
              </span>
            </div>
          </div>

          {/* Right Column: Portrait Frame with Spotlight Glow (Task 3 & 4) */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroPortrait hasPhoto={hasPhoto} />
          </div>
        </div>

        {/* Bento Grid */}
        <Reveal delay={0.1} className="mt-14 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
            {/* Card 1: Core E-Commerce Niche (lg:col-span-6) */}
            <div className="workspace-card rounded-2xl p-6 lg:col-span-6 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#f7efe6] text-[#8c532b] dark:bg-[#282017] dark:text-[#d9a36f]">
                    <ShoppingCart className="h-5 w-5" />
                  </span>
                  <Badge variant="default" size="sm">Primary Niche</Badge>
                </div>
                <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                  E-Commerce Operations VA
                </h2>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  Hands-on execution for online retailers: structured ASIN &amp; supplier research, bulk catalog entry, price monitoring, and stock depletion tracking.
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-stone-200/70 dark:border-stone-800/80 grid grid-cols-2 gap-2 text-xs font-medium text-stone-700 dark:text-stone-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#9e6231] dark:text-[#d4a373]" /> Product Research
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#9e6231] dark:text-[#d4a373]" /> Listing Creation
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#9e6231] dark:text-[#d4a373]" /> Inventory Tracking
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#9e6231] dark:text-[#d4a373]" /> Data Entry Quality
                </div>
              </div>
            </div>

            {/* Card 2: Hours & Timezone Coverage (lg:col-span-6) */}
            <div className="workspace-card rounded-2xl p-6 lg:col-span-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                    <Clock className="h-5 w-5" />
                  </span>
                  <Badge variant="success" size="sm">Direct Coverage</Badge>
                </div>
                <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                  Timezone Availability: 11 PM – 6 AM PHT
                </h2>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  Dedicated nocturnal schedule aligned for seamless real-time handoffs with Western teams during core operational hours.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/70 dark:border-stone-800/80 grid grid-cols-3 gap-2 text-xs font-mono">
                <div className="rounded-lg bg-stone-100 p-2 dark:bg-stone-800/60">
                  <span className="block text-[10px] text-stone-500 dark:text-stone-400">US EST</span>
                  <span className="font-semibold text-stone-900 dark:text-stone-200">10 AM – 5 PM</span>
                </div>
                <div className="rounded-lg bg-stone-100 p-2 dark:bg-stone-800/60">
                  <span className="block text-[10px] text-stone-500 dark:text-stone-400">UK GMT</span>
                  <span className="font-semibold text-stone-900 dark:text-stone-200">3 PM – 10 PM</span>
                </div>
                <div className="rounded-lg bg-stone-100 p-2 dark:bg-stone-800/60">
                  <span className="block text-[10px] text-stone-500 dark:text-stone-400">AU AEST</span>
                  <span className="font-semibold text-stone-900 dark:text-stone-200">1 AM – 8 AM</span>
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
                <h2 className="text-base font-bold text-stone-900 dark:text-stone-100">
                  Industry Certifications
                </h2>
                <ul className="text-xs space-y-1.5 text-stone-600 dark:text-stone-400">
                  <li>• MOS: Excel Associate</li>
                  <li>• Semrush SEO Crash Course</li>
                  <li>• HubSpot Email Marketing</li>
                  <li>• Google Analytics (GA4 - 2026)</li>
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-200/70 dark:border-stone-800/80">
                <Link 
                  href="/certificates" 
                  className="text-xs font-semibold text-[#8c532b] hover:text-[#704221] dark:text-[#d9a36f] dark:hover:text-[#ecc094] inline-flex items-center gap-1"
                >
                  Inspect credentials ↗
                </Link>
              </div>
            </div>

            {/* Card 4: Tools & Bonus Technical Edge (lg:col-span-4) */}
            <div className="workspace-card rounded-2xl p-6 lg:col-span-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#efe8df] text-[#6d5742] dark:bg-[#25201a] dark:text-[#c4b3a1]">
                    <Wrench className="h-5 w-5" />
                  </span>
                  <Badge variant="accent" size="sm">Tools</Badge>
                </div>
                <h2 className="text-base font-bold text-stone-900 dark:text-stone-100">
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

              <p className="mt-5 pt-3 border-t border-stone-200/70 dark:border-stone-800/80 text-[11px] text-stone-500 dark:text-stone-400">
                Able to build internal automations &amp; customized tracker sheets.
              </p>
            </div>

            {/* Card 5: BSIT Degree Status (lg:col-span-4) */}
            <div className="workspace-card rounded-2xl p-6 lg:col-span-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-mono font-semibold text-stone-500">BSIT 2027</span>
                </div>
                <h2 className="text-base font-bold text-stone-900 dark:text-stone-100">
                  IT Student Advantage
                </h2>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Graduating BSIT in April 2027. Fast to adapt to proprietary SaaS, database structures, web portals, and API-driven tools.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-200/70 dark:border-stone-800/80 flex items-center justify-between text-[11px] font-mono text-stone-500">
                <span>Caraga State / Butuan</span>
                <span className="text-[#8c532b] dark:text-[#d9a36f] font-semibold">Quick Learner</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
