import { getFeaturedProjects, getAllCertificates } from "@/lib/content";
import { HeroBento } from "@/components/home/HeroBento";
import { FeaturedWork } from "@/components/home/FeaturedWork";
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

      {/* 2. PROOF OF WORK SHOWCASE (Moved UP! Clickable case studies with screenshots) */}
      <FeaturedWork projects={featuredProjects} />

      {/* 3. CORE SERVICES GRID (E-Commerce, Executive Admin, Spreadsheet Systems) */}
      <ServicesSection />

      {/* 4. LOGISTICS & BACKGROUND (Timezones Overlap, Certifications with Image Modal, BSIT Advantage) */}
      <LogisticsBackground certificates={certificates} />

      {/* 5. HIGH-TRUST FAQ (Short questions on onboarding, security, and trial tasks) */}
      <FaqSection />

      {/* 6. CONVERSION CTA (Button to contact form / direct email) */}
      <ContactCta />
    </div>
  );
}
