import fs from "fs";
import path from "path";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Magnetic } from "@/components/ui/Magnetic";
import { HeroPortrait } from "./HeroPortrait";
import { ToolsRibbon } from "./ToolsRibbon";
import { 
  ArrowRight, 
  MapPin 
} from "lucide-react";

export function HeroBento() {
  const photoPath = path.join(process.cwd(), "public", "images", "portrait.png");
  const hasPhoto = fs.existsSync(photoPath);

  return (
    <section className="relative w-full pt-8 pb-4 md:pt-14 md:pb-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top 2-Column Hero: Text on Left, Portrait on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Positioning & Headline */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex flex-wrap items-center gap-2">
              <Badge variant="success" size="md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Full-Time &amp; Part-Time Hire (11 PM - 6 AM PHT)
              </Badge>
              <Badge variant="outline" size="md" className="hidden sm:inline-flex">
                <MapPin className="h-3 w-3 mr-1 text-stone-500" /> Butuan City, PH
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.1]">
              Virtual Assistant with <br className="hidden sm:inline" />
              <span className="text-shimmer inline-block">
                Technical Precision.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl">
              Hi, I&apos;m <strong>Dexter E. Balbuena</strong>. I help e-commerce founders and busy operators streamline 
              product research, catalog listings, inventory tracking, and spreadsheet systems without babysitting.
            </p>

            {/* 2 CTA Buttons with Magnetic Spring Physics */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
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
              <span className="text-xs font-mono text-stone-500 pl-2">
                US • UK • AU Timezones
              </span>
            </div>
          </div>

          {/* Right Column: Portrait Frame with Spotlight Glow */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroPortrait hasPhoto={hasPhoto} />
          </div>
        </div>

        {/* Tools Ribbon: Clean horizontal software badges right underneath Hero */}
        <div className="mt-12 sm:mt-16">
          <ToolsRibbon />
        </div>
      </div>
    </section>
  );
}
