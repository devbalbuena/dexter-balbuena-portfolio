import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingQuickDock } from "@/components/layout/FloatingQuickDock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#faf6f0",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://devbalbuena.github.io/dexter-balbuena-portfolio"
  ),
  title: "Dexter E. Balbuena | E-Commerce & Administrative Virtual Assistant",
  description:
    "Freelance Virtual Assistant based in Butuan City, Philippines. Specializing in e-commerce product research, listing optimization, inventory tracking, and advanced Excel systems.",
  keywords: [
    "Dexter Balbuena",
    "Virtual Assistant Philippines",
    "Ecommerce VA",
    "Product Research VA",
    "Amazon VA",
    "MOS Access Expert",
    "MOS Excel Associate",
    "Administrative VA",
    "Butuan City VA",
  ],
  authors: [{ name: "Dexter E. Balbuena", url: "https://github.com/devbalbuena" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dexter VA",
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    title: "Dexter E. Balbuena | E-Commerce & Administrative Virtual Assistant",
    description:
      "Reliable e-commerce and administrative virtual assistant with technical systems rigor. Available 11 PM - 6 AM PHT for US, UK, and AU teams.",
    type: "website",
    locale: "en_US",
    siteName: "Dexter Balbuena Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dexter E. Balbuena | E-Commerce & Administrative Virtual Assistant",
    description:
      "Reliable e-commerce and administrative virtual assistant with technical systems rigor. Available 11 PM - 6 AM PHT for US, UK, and AU teams.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://devbalbuena.github.io/dexter-balbuena-portfolio";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: "Dexter E. Balbuena",
      givenName: "Dexter",
      familyName: "Balbuena",
      jobTitle: "E-Commerce & Administrative Virtual Assistant",
      description:
        "E-Commerce & Administrative Virtual Assistant specializing in Amazon and Shopify product research, dynamic Excel spreadsheets, Access relational database architecture, and Pinterest SEO.",
      url: siteUrl,
      email: "balbuena.dexter.va@gmail.com",
      telephone: "+639912131795",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Butuan City",
        addressRegion: "Agusan del Norte",
        addressCountry: "PH",
      },
      sameAs: [
        "https://github.com/devbalbuena",
        "https://wa.me/639912131795",
        "https://www.credly.com/users/dexter-balbuena",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Microsoft Office Specialist: Microsoft Access Expert (Office 2019)",
          recognizedBy: {
            "@type": "Organization",
            name: "Microsoft",
          },
          identifier: "53ba884d-9939-48ba-abfe-e5c887ee05ac",
          validFrom: "2026-10-28",
          validUntil: "2031-10-28",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Microsoft Office Specialist: Excel Associate (Office 2019)",
          recognizedBy: {
            "@type": "Organization",
            name: "Microsoft",
          },
          identifier: "wH3w-s4R7",
          validFrom: "2024-06-15",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Email Marketing Certified",
          recognizedBy: {
            "@type": "Organization",
            name: "HubSpot Academy",
          },
          validFrom: "2026-10-11",
          validUntil: "2027-11-10",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Google Analytics Certification (2026)",
          recognizedBy: {
            "@type": "Organization",
            name: "Google Skillshop",
          },
          validFrom: "2026-10-12",
          validUntil: "2027-10-12",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Semrush SEO Crash Course with Brian Dean",
          recognizedBy: {
            "@type": "Organization",
            name: "Semrush Academy",
          },
          validFrom: "2026-10-11",
          validUntil: "2027-11-10",
        },
      ],
      knowsAbout: [
        "E-Commerce Operations",
        "Amazon Product Research",
        "Shopify Catalog Management",
        "Microsoft Excel Advanced Modeling",
        "Microsoft Access Relational Database Design",
        "Pinterest SEO & Visual Marketing",
        "Inventory Reconciliation",
        "Supply Chain Logistics",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}#service`,
      name: "Dexter Balbuena Virtual Assistant Services",
      url: siteUrl,
      provider: {
        "@id": `${siteUrl}#person`,
      },
      areaServed: ["United States", "United Kingdom", "Australia", "Philippines"],
      serviceType: [
        "E-Commerce Virtual Assistant",
        "Administrative Support",
        "Spreadsheet & Database Automation",
        "Product Research",
        "Pinterest SEO Growth",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "23:00",
          closes: "06:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "Dexter E. Balbuena Portfolio",
      description:
        "Official portfolio of Dexter E. Balbuena — E-Commerce & Administrative Virtual Assistant",
      publisher: {
        "@id": `${siteUrl}#person`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-stone-900 font-sans selection:bg-[#a86e3b] selection:text-white relative"
      >
        <script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
        <Providers>
          {/* Global film grain noise overlay */}
          <div
            className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] dark:opacity-[0.055] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
            aria-hidden="true"
          />
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <FloatingQuickDock />
        </Providers>
      </body>
    </html>
  );
}
