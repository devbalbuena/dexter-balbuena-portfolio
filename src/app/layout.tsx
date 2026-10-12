import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dexter E. Balbuena | E-Commerce & Administrative Virtual Assistant",
  description:
    "Freelance Virtual Assistant based in Butuan City, Philippines. Specializing in e-commerce product research, listing optimization, inventory tracking, and advanced Excel systems.",
  keywords: [
    "Dexter Balbuena",
    "Virtual Assistant Philippines",
    "Ecommerce VA",
    "Product Research VA",
    "Amazon VA",
    "MOS Excel Associate",
    "Administrative VA",
    "Butuan City VA",
  ],
  authors: [{ name: "Dexter E. Balbuena", url: "https://github.com/devbalbuena" }],
  openGraph: {
    title: "Dexter E. Balbuena | E-Commerce & Administrative Virtual Assistant",
    description:
      "Reliable e-commerce and administrative virtual assistant with technical systems rigor. Available 11 PM - 6 AM PHT for US, UK, and AU teams.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-blue-600 selection:text-white relative">
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
        </Providers>
      </body>
    </html>
  );
}
