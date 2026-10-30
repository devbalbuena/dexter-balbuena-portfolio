export interface GraphicDesignItem {
  id: string;
  title: string;
  subtitle: string;
  category: 
    | "ecommerce-ad" 
    | "food-beverage" 
    | "lifestyle-product" 
    | "editorial-publishing" 
    | "event-workshop" 
    | "pinterest-pin" 
    | "social-ad" 
    | "store-banner" 
    | "product-carousel";
  categoryLabel: string;
  format: "4:5 Vertical" | "2:3 Vertical" | "1:1 Square" | "16:9 Banner";
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
    id: "shoes-volt-run-kinetic",
    title: "Volt Run X1 — 'Run Loud' Kinetic 3D Sneaker Drop",
    subtitle: "Dynamic High-Conversion E-Commerce Product Ad",
    category: "ecommerce-ad",
    categoryLabel: "Footwear & E-Commerce",
    format: "4:5 Vertical",
    dimensions: "1080 × 1350 px",
    tool: "Figma & Photoshop",
    description:
      "Engineered with neon speed-trail motion blur, dynamic magenta lighting, and clear price anchoring (₱3,299) designed to drive instant click-throughs on social feeds.",
    highlights: [
      "Kinetic motion blur effect evoking speed and lightweight comfort",
      "High-contrast yellow and electric magenta color balance",
      "Friction-free 'Shop Now' CTA with prominent price anchor",
    ],
    resultMetric: "High-CTR Social Ad Conversion Asset",
    imageUrl: "/images/designs/shoes-volt-run-kinetic.png",
    alt: "Volt Run X1 Run Loud Kinetic 3D Sneaker Product Ad",
    badgeVariant: "accent",
    caseStudySlug: "canva-ecommerce-visuals",
  },
  {
    id: "coffee-tala-cold-brew",
    title: "Tala Coffee Co. — 'Slow-Steeped' Swirl Callout Infographic",
    subtitle: "Aesthetic Food & Beverage Social Pin",
    category: "food-beverage",
    categoryLabel: "Cafe & Beverage",
    format: "4:5 Vertical",
    dimensions: "1080 × 1350 px",
    tool: "Canva Pro & Figma",
    description:
      "Viral Pinterest-style product curation highlighting iced cold brew layers (hand-cracked ice, oat-milk swirl, 18-hour brew) with an accessible ₱95 price trigger.",
    highlights: [
      "3-step editorial callout lines highlighting premium ingredients",
      "Warm cream and roasted espresso palette optimized for saves",
      "Clear operational hours and local ordering prompt",
    ],
    resultMetric: "Viral Niche Save & Share Optimization",
    imageUrl: "/images/designs/coffee-tala-cold-brew.png",
    alt: "Tala Coffee Co Slow Steeped Cold Brew Ingredient Callout Infographic",
    badgeVariant: "default",
    caseStudySlug: "canva-ecommerce-visuals",
  },
  {
    id: "burger-stackhouse-double-trouble",
    title: "Stackhouse Burgers — 'Double Trouble' Weekend BOGO Promo",
    subtitle: "High-Impact Commercial Restaurant Food Creative",
    category: "food-beverage",
    categoryLabel: "Food & Restaurant",
    format: "4:5 Vertical",
    dimensions: "1080 × 1350 px",
    tool: "Figma & Photoshop",
    description:
      "Appetite-inducing double smash burger visual with rising steam, studio rim lighting, and a high-urgency weekend Buy 1 Get 1 promo trigger at ₱149.",
    highlights: [
      "Warm studio lighting emphasizing melted cheddar and crispy smash patties",
      "Prominent ₱149 discount badge with weekend scarcity hook",
      "Free delivery radius callout overcoming purchase hesitation",
    ],
    resultMetric: "High-Urgency Weekend Delivery Driver",
    imageUrl: "/images/designs/burger-stackhouse-double-trouble.png",
    alt: "Stackhouse Burgers Double Trouble BOGO Weekend Ad Creative",
    badgeVariant: "accent",
    caseStudySlug: "canva-ecommerce-visuals",
  },
  {
    id: "candle-haven-wick-luxury",
    title: "Haven & Wick — 'Slow Down' Artisanal Scented Candle",
    subtitle: "Organic Luxury Lifestyle Product Creative",
    category: "lifestyle-product",
    categoryLabel: "Home & Lifestyle",
    format: "4:5 Vertical",
    dimensions: "1080 × 1350 px",
    tool: "Figma & Lightroom",
    description:
      "Warm, tactile product composition setting hand-poured soy wax on raw terracotta stone, highlighting amber, cedar, and dried fig scent profiles.",
    highlights: [
      "Sophisticated split-composition balancing editorial typography and product photography",
      "Tactile terracotta and amber glass texture evoking home relaxation",
      "Clear 60-hour burn time specification for high-ticket value perception",
    ],
    resultMetric: "High-Ticket Brand Elevation & Trust",
    imageUrl: "/images/designs/candle-haven-wick-luxury.png",
    alt: "Haven and Wick Ember Fig Luxury Scented Candle Ad Creative",
    badgeVariant: "success",
    caseStudySlug: "canva-ecommerce-visuals",
  },
  {
    id: "book-cover-door-in-oak",
    title: "The Door in the Oak — Fantasy Papercut Book Cover",
    subtitle: "Intricate Woodland Editorial Illustration",
    category: "editorial-publishing",
    categoryLabel: "Publishing & Editorial",
    format: "2:3 Vertical",
    dimensions: "1080 × 1620 px",
    tool: "Figma & Vector Illustration",
    description:
      "Atmospheric multi-layered papercut woodland tree illustration featuring an illuminated doorway and golden celestial accents for author Maren Alder.",
    highlights: [
      "Multi-plane depth effect creating a magical layered forest feel",
      "Elegant serif typography with golden foil framing accents",
      "Targeted for high BookTok and Pinterest algorithmic re-sharing",
    ],
    resultMetric: "High-Concept Visual Storytelling",
    imageUrl: "/images/designs/book-cover-door-in-oak.png",
    alt: "The Door in the Oak Fantasy Novel Papercut Forest Book Cover",
    badgeVariant: "secondary",
    caseStudySlug: "canva-ecommerce-visuals",
  },
  {
    id: "poster-golden-hour-fest",
    title: "Golden Hour Festival — Retro Sunset Music Festival Poster",
    subtitle: "Nostalgic 70s Typography & Event Promotion",
    category: "event-workshop",
    categoryLabel: "Event & Festival",
    format: "4:5 Vertical",
    dimensions: "1080 × 1350 px",
    tool: "Canva Pro & Figma",
    description:
      "Vibrant retro summer festival creative combining twilight meadow photography, warm 70s dimensional typography, and clear ticket pricing.",
    highlights: [
      "Retro puff typography paired with warm sunset photography",
      "Balanced lineup typographic grid with prominent headliners",
      "High-converting ₱799 early-bird ticket anchor",
    ],
    resultMetric: "Community Event Engagement & Ticket Conversion",
    imageUrl: "/images/designs/poster-golden-hour-fest.png",
    alt: "Golden Hour Summer Sunset Music Festival Event Poster",
    badgeVariant: "accent",
    caseStudySlug: "canva-ecommerce-visuals",
  },
  {
    id: "burger-stackhouse-deconstructed",
    title: "Stackhouse Burgers — 'Layer by Layer' Deconstructed Infographic",
    subtitle: "7-Layer Exploded Ingredient Studio Breakdown",
    category: "food-beverage",
    categoryLabel: "Product Breakdown",
    format: "4:5 Vertical",
    dimensions: "1080 × 1350 px",
    tool: "Figma & Photoshop",
    description:
      "Playful, mouthwatering studio breakdown separating each artisan ingredient from toasted butter bun to sesame top with numbered callouts.",
    highlights: [
      "Precision floating layer alignment creating dynamic visual rhythm",
      "Clear numbering (01 to 07) highlighting craft and freshness",
      "Studio mustard-yellow background engineered to stop feed scrolling",
    ],
    resultMetric: "High-Engagement Visual Educational Asset",
    imageUrl: "/images/designs/burger-stackhouse-deconstructed.png",
    alt: "Stackhouse Burgers 7 Layer Deconstructed Exploded Food Infographic",
    badgeVariant: "default",
    caseStudySlug: "canva-ecommerce-visuals",
  },
  {
    id: "workshop-focus-lab-study",
    title: "Focus Lab — 'Study Smart, Not Hard' 5-Day Free Workshop",
    subtitle: "Student Productivity & Lead-Magnet Ad Creative",
    category: "event-workshop",
    categoryLabel: "Education & Coaching",
    format: "4:5 Vertical",
    dimensions: "1080 × 1350 px",
    tool: "Canva Pro & Figma",
    description:
      "High-contrast student productivity creative pairing bold typography with a realistic study flatlay (succulent, checklist notebook, coffee) to capture workshop signups.",
    highlights: [
      "Punchy value-first headline hook ('Study Smart, Not Hard')",
      "Scarcity and free trial anchors ('5 Days Free', '40 Seats Only')",
      "Friction-free 'Save My Seat' lead capture call-to-action",
    ],
    resultMetric: "Lead Generation & Webinar Registration Driver",
    imageUrl: "/images/designs/workshop-focus-lab-study.png",
    alt: "Focus Lab Study Smart Free Workshop Lead Magnet Ad Creative",
    badgeVariant: "success",
    caseStudySlug: "canva-ecommerce-visuals",
  },
  {
    id: "burger-ember-editorial",
    title: "Ember & Co. Grill — 'The Smokehouse Stack' Framed Editorial",
    subtitle: "Gourmet Flame-Grilled Artisan Burger Creative",
    category: "food-beverage",
    categoryLabel: "Food & Restaurant",
    format: "4:5 Vertical",
    dimensions: "1080 × 1350 px",
    tool: "Figma & Photoshop",
    description:
      "Rich crimson fine-dining editorial composition showcasing flame-grilled Angus beef, melted cheddar, and crisp greens with elegant serif typography.",
    highlights: [
      "Sophisticated crimson fine-dining aesthetic with framed border",
      "High-contrast floating patty presentation emphasizing gourmet quality",
      "Accessible ₱159 introductory price point with quick delivery CTA",
    ],
    resultMetric: "Fine-Dining Brand Positioning at Casual Price",
    imageUrl: "/images/designs/burger-ember-editorial.png",
    alt: "Ember and Co Smokehouse Stack Framed Editorial Burger Ad",
    badgeVariant: "accent",
    caseStudySlug: "canva-ecommerce-visuals",
  },
];
