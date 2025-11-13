import { generateMetadata as genMeta } from '@/lib/seo';
import Link from 'next/link';

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

const guides = [
  {
    id: 'beginner',
    title: 'Beginner\'s Guide to Arc Raiders',
    description: 'Essential tips and strategies for new players. Learn the basics of loot management, combat, and hideout progression.',
    category: 'Beginner',
    readTime: '10 min',
    topics: ['Loot Management', 'Combat Basics', 'Hideout Setup', 'First Quests'],
  },
  {
    id: 'advanced',
    title: 'Advanced Combat Strategies',
    description: 'Master advanced tactics, weapon loadouts, and team coordination for experienced players.',
    category: 'Advanced',
    readTime: '15 min',
    topics: ['Weapon Meta', 'Team Tactics', 'PvP Strategies', 'Advanced Movement'],
  },
  {
    id: 'farming',
    title: 'Efficient Farming Routes',
    description: 'Optimize your resource collection with proven farming routes for materials, ARC parts, and quest items.',
    category: 'Farming',
    readTime: '12 min',
    topics: ['Material Farming', 'ARC Part Locations', 'Quest Item Routes', 'Credit Farming'],
  },
  {
    id: 'meta',
    title: 'Current Meta Analysis',
    description: 'Stay updated with the latest meta trends, weapon tier lists, and optimal builds for competitive play.',
    category: 'Meta',
    readTime: '8 min',
    topics: ['Weapon Tier List', 'Best Builds', 'Meta Shifts', 'Competitive Tips'],
  },
];

export default function GuidesPage() {
  return (
    <div className="w-full min-h-screen bg-black">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-black py-12 border-b border-zinc-800">
        <div className="container mx-auto px-4">
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

      {/* Guides Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.id}
                href={`/guides/${guide.id}`}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-blue-500 transition-all hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium">
                    {guide.category}
                  </span>
                  <span className="text-zinc-500 text-sm">{guide.readTime} read</span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3">{guide.title}</h2>
                <p className="text-zinc-300 mb-4">{guide.description}</p>

                <div className="flex flex-wrap gap-2">
                  {guide.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-zinc-800 text-zinc-400 rounded text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-blue-400 font-medium">
                  Read Guide →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 bg-zinc-900/30 border-t border-zinc-800">
        <div className="container mx-auto px-4 max-w-4xl">
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
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
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
  );
}
