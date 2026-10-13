import { getFeaturedProjects, getAllCertificates } from "@/lib/content";
import { HeroBento } from "@/components/home/HeroBento";
import { ServicesSection } from "@/components/home/ServicesSection";
import { LogisticsBackground } from "@/components/home/LogisticsBackground";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ContactCta } from "@/components/home/ContactCta";

export default async function Home() {
  const [featuredProjects, certificates] = await Promise.all([
    getFeaturedProjects(),
    getAllCertificates(),
  ]);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section + Tools Ribbon */}
      <HeroBento />

      {/* 2. Core Capabilities & Services */}
      <ServicesSection />

      {/* 3. Logistics & Professional Background (Timezone, Certifications w/ View Image, BSIT) */}
      <LogisticsBackground certificates={certificates} />

      {/* 4. Selected Projects & Actual Work Gallery */}
      <FeaturedWork projects={featuredProjects} />

      {/* 5. Contact Call-to-Action */}
      <ContactCta />
    </div>
  );
}
