export interface GraphicDesignItem {
  id: string;
  title: string;
  subtitle: string;
  category: "pinterest-pin" | "social-ad" | "store-banner" | "product-carousel";
  categoryLabel: string;
  format: "2:3 Vertical" | "1:1 Square" | "16:9 Banner";
  dimensions: string;
  tool: string;
  description: string;
  highlights: string[];
  resultMetric?: string;
  imageUrl: string;
  alt: string;
  badgeVariant?: "default" | "secondary" | "accent" | "outline" | "success";
  caseStudySlug?: string;
}

export const GRAPHIC_DESIGNS: GraphicDesignItem[] = [
  {
    id: "pin-streetwear-vault",
    title: "Streetwear & Sneaker Consignment Grail Vault",
    subtitle: "High-Ticket 2:3 Vertical Pinterest Pin & Mobile Poster",
    category: "pinterest-pin",
    categoryLabel: "Figma Poster",
    format: "2:3 Vertical",
    dimensions: "1000 × 1500 px",
    tool: "Figma & Canva Pro",
    description:
      "Editorial dark-gold aesthetic tailored for high-ticket streetwear & collector sneaker consignment with cryptographic handover PIN disclosures.",
    highlights: [
      "Optimized 2:3 vertical aspect ratio favored by Pinterest & mobile feeds",
      "Cryptographic PIN handover and 5-point physical authentication badges",
      "High-contrast luxury obsidian & champagne gold typography",
    ],
    resultMetric: "Zero-Dispute Handover Delivery Protection",
    imageUrl: "/images/designs/pin-streetwear-vault.svg",
    alt: "Streetwear & Sneaker Consignment Grail Vault 2:3 Poster",
    badgeVariant: "accent",
    caseStudySlug: "rarefinds-retail-erp",
  },
  {
    id: "pin-aesthetic-tech",
    title: "Clean Desk Tech That Looks 10x Pricier",
    subtitle: "Viral Product Curation Pin Batch",
    category: "pinterest-pin",
    categoryLabel: "Pinterest Pin",
    format: "2:3 Vertical",
    dimensions: "1000 × 1500 px",
    tool: "Canva Pro",
    description:
      "Targeted visual SEO design engineered for the viral home-office niche, highlighting minimalist keyboards, monitor light bars, and hidden docks.",
    highlights: [
      "Curiosity-inducing headline hook with luxury aesthetic finish",
      "Split 2-card lower grid presenting complementary bundle items",
      "Clear save pin reminder for increased algorithmic re-pin velocity",
    ],
    resultMetric: "Algorithmic Re-pin Engine for E-Commerce Traffic",
    imageUrl: "/images/designs/pin-aesthetic-tech.svg",
    alt: "Clean Desk Tech Viral 2:3 Vertical Pinterest Pin",
    badgeVariant: "accent",
    caseStudySlug: "amazon-pinterest-affiliate",
  },
  {
    id: "pin-minimalist-workspace",
    title: "How To Build A Clean Productive Workspace",
    subtitle: "Desk Setup & Cable Management Guide",
    category: "pinterest-pin",
    categoryLabel: "Canva & Figma",
    format: "2:3 Vertical",
    dimensions: "1000 × 1500 px",
    tool: "Canva Pro & Figma",
    description:
      "Educational visual pin breaking down cable management trays, 2700K ambient light bars, and hardwood shelves under $150.",
    highlights: [
      "Numbered 2-item component breakdown with direct purchase links",
      "High-contrast clean Scandinavian aesthetic with warm bronze tones",
      "Curated affiliate monetization layout for home office creators",
    ],
    resultMetric: "High-CTR Affiliate Intent Asset",
    imageUrl: "/images/designs/pin-minimalist-workspace.svg",
    alt: "Minimalist Productive Workspace 2:3 Vertical Pinterest Pin",
    badgeVariant: "success",
    caseStudySlug: "amazon-pinterest-affiliate",
  },
  {
    id: "pin-coffee-station",
    title: "Dial In Cafe Quality Espresso At Home",
    subtitle: "Specialty Home Barista Gear Guide",
    category: "pinterest-pin",
    categoryLabel: "Pinterest Pin",
    format: "2:3 Vertical",
    dimensions: "1000 × 1500 px",
    tool: "Figma",
    description:
      "Precision e-commerce product curation highlighting 58.5mm baskets, surgical steel WDT tools, and 0.1g auto-tare flow scales.",
    highlights: [
      "Rich espresso crema palette with editorial dark coffee tones",
      "3-badge spec breakdown for declumping needles, puck screens, and scales",
      "Designed for high-engagement saves in food & lifestyle boards",
    ],
    resultMetric: "Viral Niche Retention & Save Optimization",
    imageUrl: "/images/designs/pin-coffee-station.svg",
    alt: "Specialty Home Barista 2:3 Espresso Gear Guide Pin",
    badgeVariant: "default",
  },
  {
    id: "pin-desk-essentials",
    title: "5 Aesthetic Desk Essentials Under $50",
    subtitle: "High-CTR 2:3 Vertical Pinterest Pin",
    category: "pinterest-pin",
    categoryLabel: "Pinterest Pin",
    format: "2:3 Vertical",
    dimensions: "1000 × 1500 px",
    tool: "Canva Pro & Figma",
    description:
      "Engineered with visual hierarchy, bold typography hooks, and curated product groupings to drive organic affiliate clicks to Amazon.",
    highlights: [
      "Optimized 2:3 vertical aspect ratio favored by Pinterest feed algorithms",
      "High-contrast product focal points with strikethrough price savings",
      "Compliant visual branding for @cozynook_finds channel",
    ],
    resultMetric: "24.3K+ Monthly Views • $0 Ad Spend",
    imageUrl: "/images/designs/pin-desk-essentials.svg",
    alt: "5 Aesthetic Desk Essentials Under $50 Vertical Pinterest Pin",
    badgeVariant: "accent",
    caseStudySlug: "amazon-pinterest-affiliate",
  },
  {
    id: "pin-sneaker-grail",
    title: "Jordan 1 Retro High OG 'Chicago' Lost & Found",
    subtitle: "Vault Provenance & NFC Authenticated Drop",
    category: "pinterest-pin",
    categoryLabel: "Figma Poster",
    format: "2:3 Vertical",
    dimensions: "1000 × 1500 px",
    tool: "Figma",
    description:
      "Collector streetwear consignment visual showcasing 5-point physical inspection, cryptographic PIN codes, and verified provenance.",
    highlights: [
      "Bold cyber-gold & matte carbon fiber luxury contrast",
      "Clear authenticated price tag and QR/NFC security assurances",
      "Engineered for high buyer trust in resale marketplaces",
    ],
    resultMetric: "High-Ticket E-Commerce Conversion Asset",
    imageUrl: "/images/designs/pin-sneaker-grail.svg",
    alt: "Collector Grail Sneaker Consignment 2:3 Vertical Poster",
    badgeVariant: "secondary",
    caseStudySlug: "rarefinds-retail-erp",
  },
  {
    id: "ad-flash-sale-square",
    title: "RareFinds Luxury Consignment Vault Drop",
    subtitle: "High-Ticket 1:1 Social Media Ad Creative",
    category: "social-ad",
    categoryLabel: "Social Ad",
    format: "1:1 Square",
    dimensions: "1080 × 1080 px",
    tool: "Figma & Canva Pro",
    description:
      "Editorial dark-gold aesthetic tailored for high-ticket streetwear & collector sneaker consignment with cryptographic handover PIN disclosures.",
    highlights: [
      "Premium gold & obsidian contrast evoking exclusivity and trust",
      "Authenticity verification badges and serialized inventory tagging",
      "Clear, friction-free purchase intent CTA with courier security badge",
    ],
    resultMetric: "Zero-Dispute Handover Delivery Protection",
    imageUrl: "/images/designs/ad-flash-sale-square.svg",
    alt: "RareFinds Luxury 1-of-1 Consignment Instagram Ad Creative",
    badgeVariant: "default",
    caseStudySlug: "rarefinds-retail-erp",
  },
  {
    id: "banner-shopify-collection",
    title: "Autumn Collection Storefront Hero Banner",
    subtitle: "16:9 E-Commerce Shopify Store Header",
    category: "store-banner",
    categoryLabel: "Store Banner",
    format: "16:9 Banner",
    dimensions: "1920 × 1080 px",
    tool: "Figma & Canva Pro",
    description:
      "Wide responsive hero banner highlighting hardwood desk accessories with warm ambient contrast, customer social proof, and primary CTA triggers.",
    highlights: [
      "Balanced 2-column composition for desktop & mobile storefront banners",
      "Social proof callouts (4.9★ rating, free express delivery, 30-day trial)",
      "Layered 3D product card elevation over rich dark-wood background",
    ],
    resultMetric: "High-Conversion E-Commerce Storefront Asset",
    imageUrl: "/images/designs/banner-shopify-collection.svg",
    alt: "Autumn Curated Workspaces Shopify Hero Storefront Banner",
    badgeVariant: "success",
  },
  {
    id: "carousel-product-breakdown",
    title: "Ergonomic Kinetic Mesh vs. Foam Padding",
    subtitle: "Educational Product Comparison Carousel Slide",
    category: "product-carousel",
    categoryLabel: "Social Carousel",
    format: "1:1 Square",
    dimensions: "1080 × 1080 px",
    tool: "Figma",
    description:
      "Informative side-by-side comparison slide crafted for high engagement, overcoming buyer hesitation through scientific product education.",
    highlights: [
      "Side-by-side pain point vs. solution visual contrast",
      "Swipe-indicator micro-UI encouraging multi-slide carousel retention",
      "Clear value proposition emphasizing posture health & productivity",
    ],
    resultMetric: "High-Retention Instagram & LinkedIn Educational Asset",
    imageUrl: "/images/designs/carousel-product-breakdown.svg",
    alt: "Ergonomic Chair vs Traditional Foam Product Comparison Carousel Slide",
    badgeVariant: "secondary",
  },
  {
    id: "banner-luxury-consignment",
    title: "RareFinds Official Vault & Authentication Standard",
    subtitle: "16:9 Brand Authority & Operational Banner",
    category: "store-banner",
    categoryLabel: "Store Banner",
    format: "16:9 Banner",
    dimensions: "1920 × 1080 px",
    tool: "Figma & Canva Pro",
    description:
      "Executive wide banner establishing brand authority and customer trust through clear 3-pillar architectural guarantees.",
    highlights: [
      "Establishes institutional confidence for high-value consignment sales",
      "Visualizes concurrency safety, cryptographic PINs, and 5-step QC",
      "Editorial gold monogram branding with dark luxury backdrop",
    ],
    resultMetric: "Enterprise Trust & Institutional Branding",
    imageUrl: "/images/designs/banner-luxury-consignment.svg",
    alt: "RareFinds 16:9 Brand Authority and Operational Storefront Header",
    badgeVariant: "outline",
    caseStudySlug: "rarefinds-retail-erp",
  },
];
