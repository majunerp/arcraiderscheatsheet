import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'Arc Raiders Guides - Tips & Strategy for 2025',
  description: 'Master Arc Raiders with expert guides covering beginner tips, advanced strategies, farming routes, and meta analysis. Proven tactics for optimal gameplay.',
  keywords: [
    'arc raiders guide',
    'arc raiders tips',
    'arc raiders strategy',
    'arc raiders beginner guide',
    'arc raiders farming',
    'arc raiders meta',
  ],
  canonical: 'https://arcraiderscheatsheet.org/guides',
});

export default function GuidesPage() {
  return (
    <div className="w-full min-h-screen bg-black relative">
      {/* Tiled Background with Gradient Overlay */}
      <div className="fixed inset-0 z-0" style={{
        backgroundImage: 'url(/guides.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.5
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-zinc-900/80 to-transparent border-b border-zinc-800 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Arc Raiders Guides & Tips
            </span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl">
            Master Arc Raiders with our comprehensive guides covering everything from beginner basics to advanced strategies. Learn proven tactics, optimal farming routes, and stay updated with the latest meta analysis.
          </p>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">Quick Tips for Arc Raiders</h2>
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">💡 Always Keep Quest Items</h3>
              <p className="text-zinc-300">
                Quest items in Arc Raiders are essential for hideout progression. Always keep items marked with the "Keep" action in our cheat sheet, especially ARC parts and specialized components needed for workshop upgrades.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">♻️ Recycle Smartly</h3>
              <p className="text-zinc-300">
                Recycling broken items and electronics provides valuable crafting materials. Use our item database to check what each item recycles into before deciding whether to sell or recycle it.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">🎯 Prioritize Workshop Upgrades</h3>
              <p className="text-zinc-300">
                Upgrading your workshop unlocks powerful crafting options. Focus on collecting materials for workshop upgrades early in your Arc Raiders progression to access better weapons and equipment.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">💰 Manage Inventory Space</h3>
              <p className="text-zinc-300">
                Inventory management is crucial in Arc Raiders. Sell vendor trash items for quick credits and recycle duplicates to maintain optimal inventory space while maximizing resource efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* SEO Content */}
        <section className="py-16 bg-zinc-900/30 border-t border-zinc-800">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">
                Complete Arc Raiders Strategy Guide
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Success in Arc Raiders requires understanding multiple game systems including loot management, combat mechanics, hideout progression, and crafting. Our Arc Raiders guides provide comprehensive coverage of all gameplay aspects, from beginner fundamentals to advanced competitive strategies. Whether you're just starting or looking to optimize your endgame performance, these Arc Raiders tips will help you succeed.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Beginner Progression Path
              </h3>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                New Arc Raiders players should focus on three key areas: learning the loot system, establishing a functional hideout, and completing early quests. Our Arc Raiders beginner guide walks you through the first hours of gameplay, explaining which items to prioritize, how to set up your hideout efficiently, and which quests provide the best early-game rewards. Following this Arc Raiders progression path ensures you build a strong foundation for advanced gameplay.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Advanced Player Strategies
              </h3>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Experienced Arc Raiders players need advanced strategies for PvP combat, efficient farming, and meta optimization. Our Arc Raiders advanced guide covers weapon tier lists, optimal loadouts, team coordination tactics, and competitive strategies. Learn how to maximize your combat effectiveness, farm resources efficiently, and stay ahead of the meta with proven Arc Raiders strategies used by top players.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
