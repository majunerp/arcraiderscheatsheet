import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { generateMetadata as genMeta } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = genMeta({
  title: "Arc Raiders Cheat Sheet - Loot & Crafting Guide",
  description: "Complete Arc Raiders cheat sheet with 70+ items, quest tracker, and crafting recipes. Learn what to keep, sell, or recycle for optimal progression.",
  keywords: [
    'arc raiders cheat sheet',
    'arc raiders guide',
    'arc raiders items',
    'arc raiders loot guide',
    'arc raiders crafting',
    'arc raiders quest items',
    'arc raiders recycling guide',
    'arc raiders keep sell recycle',
    'arc raiders hideout upgrades',
    'arc raiders workshop guide',
  ],
  canonical: 'https://arcraiderscheatsheet.org',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
