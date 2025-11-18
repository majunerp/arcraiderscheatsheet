import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-2 border-cyan-300/60 bg-gradient-to-b from-[#030712] via-[#050b1b] to-[#07102c] backdrop-blur-md shadow-[0_-15px_45px_rgba(0,0,0,0.7)]">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]">
              ARC RAIDERS CHEAT SHEET
            </h3>
            <p className="text-sm text-cyan-100/95">
              Your ultimate guide to Arc Raiders loot management, crafting, and quest completion. Make informed decisions about what to keep, sell, or recycle.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-cyan-100">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#items" className="text-sm text-cyan-100 hover:text-cyan-300 transition-colors">
                  Item Database
                </Link>
              </li>
              <li>
                <Link href="/quests" className="text-sm text-cyan-100 hover:text-cyan-300 transition-colors">
                  Quest Guide
                </Link>
              </li>
              <li>
                <Link href="/workshop" className="text-sm text-cyan-100 hover:text-cyan-300 transition-colors">
                  Workshop & Crafting
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-sm text-cyan-100 hover:text-cyan-300 transition-colors">
                  Guides & Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-cyan-100">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.reddit.com/r/ArcRaiders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cyan-100 hover:text-cyan-300 transition-colors"
                >
                  Reddit Community
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/arcraiders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cyan-100 hover:text-cyan-300 transition-colors"
                >
                  Discord Server
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-cyan-100">Contact</h4>
            <a
              href="mailto:support@arcraiderscheatsheet.org"
              className="text-sm text-cyan-100 hover:text-cyan-300 transition-colors inline-block"
            >
              support@arcraiderscheatsheet.org
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cyan-400/40">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white">
              © {currentYear} Arc Raiders Cheat Sheet. All rights reserved.
            </p>
            <p className="text-xs text-cyan-100/85">
              Not affiliated with Embark Studios. Arc Raiders is a trademark of Embark Studios AB.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
