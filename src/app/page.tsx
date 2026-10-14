import { getFeaturedProjects, getAllCertificates } from "@/lib/content";
import { HeroBento } from "@/components/home/HeroBento";
import { StatsCounterRibbon } from "@/components/home/StatsCounterRibbon";
import { LiveTimezoneRadar } from "@/components/home/LiveTimezoneRadar";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WorkflowSimulator } from "@/components/home/WorkflowSimulator";
import { LiveExcelSandbox } from "@/components/home/LiveExcelSandbox";
import { RoiCalculator } from "@/components/home/RoiCalculator";
import { LogisticsBackground } from "@/components/home/LogisticsBackground";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { FaqSection } from "@/components/home/FaqSection";
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

      {/* 2. Animated Proof & Metric Counters Ribbon */}
      <StatsCounterRibbon />

      {/* 3. Real-Time Timezone Radar & Interactive Overlap Simulator */}
      <LiveTimezoneRadar />

      {/* 4. Core Capabilities & Services */}
      <ServicesSection />

      {/* 5. 4-Step Interactive Client SOP & Handoff Pipeline */}
      <WorkflowSimulator />

      {/* 6. Live Interactive MOS Excel & Inventory Sandbox */}
      <LiveExcelSandbox />

      {/* 7. Founder Time-Freedom & Operational ROI Calculator */}
      <RoiCalculator />

      {/* 8. Logistics & Formal Accreditations (Certificates modal & BSIT advantage) */}
      <LogisticsBackground certificates={certificates} />

      {/* 9. Selected Projects & 3D Tilt Deliverables Gallery */}
      <FeaturedWork projects={featuredProjects} />

      {/* 10. Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* 11. Contact Call-to-Action */}
      <ContactCta />
    </div>
  );
}
