import { getFeaturedProjects, getAllCertificates } from "@/lib/content";
import { HeroBento } from "@/components/home/HeroBento";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { GraphicDesignCarouselSection } from "@/components/home/GraphicDesignCarouselSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { LogisticsBackground } from "@/components/home/LogisticsBackground";
import { FaqSection } from "@/components/home/FaqSection";
import { ContactCta } from "@/components/home/ContactCta";

export default async function Home() {
  const [featuredProjects, certificates] = await Promise.all([
    getFeaturedProjects(),
    getAllCertificates(),
  ]);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Who you are + Tagline + Photo + CTA) & SYSTEMS RIBBON */}
      <HeroBento />

      {/* 2. PROOF OF WORK SHOWCASE (Clickable case studies with screenshots) */}
      <FeaturedWork projects={featuredProjects} />

      {/* 3. VISUAL DESIGN & AD CREATIVES CAROUSEL (Canva & Figma E-Commerce Assets) */}
      <GraphicDesignCarouselSection />

      {/* 4. CORE SERVICES GRID (E-Commerce, Executive Admin, Spreadsheet Systems) */}
      <ServicesSection />

      {/* 5. LOGISTICS & BACKGROUND (Timezones Overlap, Certifications with Image Modal, BSIT Advantage) */}
      <LogisticsBackground certificates={certificates} />

      {/* 6. HIGH-TRUST FAQ (Short questions on onboarding, security, and trial tasks) */}
      <FaqSection />

      {/* 7. CONVERSION CTA (Button to contact form / direct email) */}
      <ContactCta />
    </div>
  );
}
