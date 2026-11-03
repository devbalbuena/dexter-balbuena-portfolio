import fs from "fs";
import path from "path";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Magnetic } from "@/components/ui/Magnetic";
import { HeroPortrait } from "./HeroPortrait";
import { ToolsRibbon } from "./ToolsRibbon";
import { 
  ArrowRight, 
  MapPin,
  Clock,
  TrendingUp,
  Palette,
  Zap,
  ArrowUpRight
} from "lucide-react";

export function HeroBento() {
  const photoPath = path.join(process.cwd(), "public", "images", "portrait.png");
  const hasPhoto = fs.existsSync(photoPath);

  return (
    <section className="relative w-full pt-8 pb-4 md:pt-12 md:pb-6 hero-gradient-shade-c border-b border-[#ebdccb]/60 overflow-hidden">
      {/* Delicate Micro-Stipple Grain Texture inspired by Shopify Partners */}
      <div className="hero-stipple-pattern" aria-hidden="true" />

      {/* Atmospheric Ambient Glow behind Portrait */}
      <div 
        className="pointer-events-none absolute right-0 top-1/4 -z-0 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[#f8dfc2]/35 via-[#fdeed9]/25 to-transparent blur-3xl" 
        aria-hidden="true" 
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top 2-Column Hero: Headline + Proof Dock on Left, Clean Studio Portrait on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Left Column: Positioning, Headline, CTAs, and 3-Card Proof Dock */}
          <div className="lg:col-span-7 space-y-5">
            {/* Top Badges (Availability + Timezone + Location) */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="success" size="md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Hire (11 PM - 6 AM PHT)
              </Badge>
              <Badge variant="outline" size="md" className="border-[#ebdccb] bg-[#fbf9f6] text-stone-700">
                <Clock className="h-3 w-3 mr-1 text-[#8c532b]" /> US • UK • AU Overlap
              </Badge>
              <Badge variant="outline" size="md" className="hidden sm:inline-flex border-[#ebdccb] text-stone-500">
                <MapPin className="h-3 w-3 mr-1 text-stone-400" /> Butuan City, PH
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-stone-900 leading-[1.08]">
              E-Commerce &amp; Operations VA with <br className="hidden sm:inline" />
              <span className="text-shimmer inline-block">
                Technical Precision.
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              Hi, I&apos;m <strong>Dexter E. Balbuena</strong>. I help e-commerce founders and busy store operators streamline 
              product research, catalog listings, high-converting ad creatives, and automated spreadsheet systems without babysitting.
            </p>

            {/* 2 CTA Buttons with Magnetic Spring Physics */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Magnetic>
                <Button href="/#featured-work" size="lg" className="font-semibold shadow-xs">
                  View My Work <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="/contact" variant="outline" size="lg" className="font-semibold">
                  Contact Me
                </Button>
              </Magnetic>
            </div>

            {/* Interactive 3-Card Proof Dock (Under CTAs with 100% breathing room) */}
            <div className="pt-2">
              <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#8c532b] mb-2.5">
                ● Verified Deliverables &amp; Output at a Glance:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* Proof Card 1: Pinterest Organic SEO */}
                <Link
                  href="/work/amazon-pinterest-affiliate"
                  className="group rounded-2xl bg-white border border-[#ebdccb] p-3 shadow-2xs hover:border-[#8c532b] hover:shadow-md transition-all block"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      <TrendingUp className="h-3.5 w-3.5" />
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-stone-400 group-hover:text-[#8c532b] transition-colors" />
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-stone-900 leading-tight">
                    39.5K+ Views
                  </div>
                  <div className="text-[10.5px] font-mono text-emerald-700 font-semibold mt-0.5">
                    Pinterest SEO • $0 Ads
                  </div>
                </Link>

                {/* Proof Card 2: 9 Figma & Canva Ad Creatives */}
                <Link
                  href="/#design-gallery"
                  className="group rounded-2xl bg-white border border-[#ebdccb] p-3 shadow-2xs hover:border-[#8c532b] hover:shadow-md transition-all block"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-700 border border-amber-200/60">
                      <Palette className="h-3.5 w-3.5" />
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-stone-400 group-hover:text-[#8c532b] transition-colors" />
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-stone-900 leading-tight">
                    9 Ad Suites
                  </div>
                  <div className="text-[10.5px] font-mono text-[#8c532b] font-semibold mt-0.5">
                    Figma &amp; Canva Posters
                  </div>
                </Link>

                {/* Proof Card 3: 6 Excel Systems & ERP */}
                <Link
                  href="/work"
                  className="group rounded-2xl bg-white border border-[#ebdccb] p-3 shadow-2xs hover:border-[#8c532b] hover:shadow-md transition-all block"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#faf5ee] text-[#8c532b] border border-[#ebdccb]">
                      <Zap className="h-3.5 w-3.5" />
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-stone-400 group-hover:text-[#8c532b] transition-colors" />
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-stone-900 leading-tight">
                    6 Workbooks + ERP
                  </div>
                  <div className="text-[10.5px] font-mono text-stone-600 font-semibold mt-0.5">
                    Inventory, QA &amp; Orders
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Unobstructed Full-Scale Studio Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroPortrait hasPhoto={hasPhoto} />
          </div>
        </div>

        {/* Tools Ribbon: Clean horizontal software badges right underneath Hero */}
        <div className="mt-6 sm:mt-8">
          <ToolsRibbon />
        </div>
      </div>
    </section>
  );
}
