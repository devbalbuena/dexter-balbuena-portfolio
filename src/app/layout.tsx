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
      <body className="min-h-full flex flex-col bg-workspace-grid text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
        <Providers>
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
