import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Arc Raiders Cheat Sheet 2025 - Items, Quests & Crafting",
  description: "Complete Arc Raiders loot guide: 70+ items, location spawns, priority loot, quest tracker & crafting recipes. Know what to keep, sell or recycle!",
  keywords: [
    'arc raiders cheat sheet',
    'arc raiders cheat sheet loot',
    'arc raiders loot guide',
    'arc raiders guide',
    'arc raiders items',
    'arc raiders loot',
    'arc raiders location spawns',
    'arc raiders crafting',
    'arc raiders quest items',
    'arc raiders recycling guide',
    'arc raiders keep sell recycle',
    'arc raiders priority items',
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
        <meta name="google-adsense-account" content="ca-pub-3347260027976502" />
        <Script
          id="perf-measure-guard"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (typeof window !== 'undefined' && typeof performance !== 'undefined' && typeof performance.measure === 'function') {
                  performance.measure = () => undefined;
                }
              } catch (e) {}
            `,
          }}
        />
        <Script
          id="adsense-script"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3347260027976502"
          crossOrigin="anonymous"
        />
        <Script
          id="ms-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "u5vt5hzz9c");
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Arc Raiders Cheat Sheet",
              "url": "https://arcraiderscheatsheet.org",
              "description": "Complete Arc Raiders database with 70+ items, quest tracker, and crafting recipes",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://arcraiderscheatsheet.org/?search={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Arc Raiders Cheat Sheet",
                "url": "https://arcraiderscheatsheet.org"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoGame",
              "name": "Arc Raiders",
              "url": "https://arcraiderscheatsheet.org",
              "description": "Complete game guide and cheat sheet for Arc Raiders including items, quests, and crafting",
              "genre": ["Action", "Shooter", "Multiplayer"],
              "gamePlatform": ["PC"],
              "applicationCategory": "Game"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Arc Raiders Cheat Sheet?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Arc Raiders Cheat Sheet is a comprehensive database with 70+ items, quest tracker, and crafting recipes to help you decide what to keep, sell, or recycle in Arc Raiders."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I know what to keep in Arc Raiders?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use our item database to check each item's action recommendation. Items marked as 'Keep' are needed for quests or crafting, while 'Sell' items are vendor trash, and 'Recycle' items provide valuable materials."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Arc Raiders Cheat Sheet include quest items?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Our database includes all quest items and clearly marks which items are needed for hideout progression and workshop upgrades."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 relative">
          <div className="absolute inset-0 bg-center bg-repeat" style={{ backgroundImage: "url('/arcraiders.jpg?v=2')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
          <div className="relative z-10">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
