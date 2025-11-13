import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-800 bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              ARC RAIDERS CHEAT SHEET
            </h3>
            <p className="text-sm text-zinc-400">
              Your ultimate guide to Arc Raiders loot management, crafting, and quest completion. Make informed decisions about what to keep, sell, or recycle.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/items" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Item Database
                </Link>
              </li>
              <li>
                <Link href="/quests" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Quest Guide
                </Link>
              </li>
              <li>
                <Link href="/workshop" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Workshop & Crafting
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Guides & Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/guides/beginner" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Beginner's Guide
                </Link>
              </li>
              <li>
                <Link href="/guides/advanced" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Advanced Strategies
                </Link>
              </li>
              <li>
                <Link href="/guides/farming" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Farming Routes
                </Link>
              </li>
              <li>
                <Link href="/guides/meta" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Meta Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Community</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.reddit.com/r/ArcRaiders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Reddit Community
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/arcraiders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Discord Server
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/arcraiders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Twitter/X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-zinc-400">
              © {currentYear} Arc Raiders Cheat Sheet. All rights reserved.
            </p>
            <p className="text-xs text-zinc-500">
              Not affiliated with Embark Studios. Arc Raiders is a trademark of Embark Studios AB.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
