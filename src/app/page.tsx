import { getFeaturedProjects, getAllCertificates } from "@/lib/content";
import { HeroBento } from "@/components/home/HeroBento";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { CertificatesStrip } from "@/components/home/CertificatesStrip";
import { QuickAbout } from "@/components/home/QuickAbout";
import { ContactCta } from "@/components/home/ContactCta";

export default async function Home() {
  const [featuredProjects, certificates] = await Promise.all([
    getFeaturedProjects(),
    getAllCertificates(),
  ]);

  return (
    <div className="flex flex-col w-full">
      <HeroBento />
      <ServicesSection />
      <FeaturedWork projects={featuredProjects} />
      <CertificatesStrip certificates={certificates} />
      <QuickAbout />
      <ContactCta />
    </div>
  );
}
