import Link from "next/link";
import { items, categories, actions } from "@/lib/items-data";

export default function Home() {
  const featuredItems = items.slice(0, 6);
  const stats = {
    totalItems: items.length,
    arcParts: items.filter(i => i.category === 'arc_parts').length,
    questItems: items.filter(i => i.category === 'quest_items').length,
    craftingMaterials: items.filter(i => i.category === 'crafting_materials').length,
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-zinc-900 to-black py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Arc Raiders Cheat Sheet
              </span>
              <br />
              <span className="text-white text-3xl md:text-5xl">
                Ultimate Loot & Crafting Guide
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto">
              Master Arc Raiders with our comprehensive cheat sheet. Discover what items to keep, sell, or recycle for optimal progression. Complete quest guides, crafting recipes, and hideout upgrade strategies all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/items"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Browse Item Database
              </Link>
              <Link
                href="/quests"
                className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                View Quest Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500">{stats.totalItems}+</div>
              <div className="text-zinc-400 mt-2">Total Items</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500">{stats.arcParts}</div>
              <div className="text-zinc-400 mt-2">ARC Parts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-500">{stats.questItems}</div>
              <div className="text-zinc-400 mt-2">Quest Items</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500">{stats.craftingMaterials}</div>
              <div className="text-zinc-400 mt-2">Crafting Materials</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - SEO Optimized */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6">
              Complete Arc Raiders Cheat Sheet for Loot Management
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Welcome to the most comprehensive Arc Raiders cheat sheet available online. Our Arc Raiders guide helps players make informed decisions about every item they encounter in the game. Whether you're a beginner learning the basics or an experienced raider optimizing your hideout, this Arc Raiders cheat sheet provides essential information for successful gameplay.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Understanding Arc Raiders Loot System
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              The Arc Raiders loot system revolves around three critical decisions: keep, sell, or recycle. Every item you find in Arc Raiders serves a specific purpose, and knowing which action to take can significantly impact your progression. Our Arc Raiders cheat sheet categorizes all items based on their optimal use, helping you maximize your inventory efficiency and resource management.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Arc Raiders Quest Items and Hideout Upgrades
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Quest items in Arc Raiders are essential for hideout progression and unlocking advanced crafting stations. Our Arc Raiders guide identifies all quest-specific items, including rare ARC parts like the Leaper Pulse Unit, Rocketeer Driver, and Surveyor Vault. These Arc Raiders items should always be kept until you complete their associated quests. The cheat sheet also details which items are needed for workshop upgrades, medical station construction, and power system installations.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Crafting Materials and Workshop Guide
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Crafting in Arc Raiders requires specific materials that can be found, purchased, or obtained through recycling. Our Arc Raiders cheat sheet lists all crafting materials, from common items like wires and batteries to rare components like ARC Alloy and Exodus Modules. Understanding which Arc Raiders crafting materials to stockpile ensures you're always prepared for weapon modifications, armor upgrades, and hideout construction projects.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Recycling Strategy for Maximum Efficiency
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Recycling is a core mechanic in Arc Raiders that converts unwanted items into valuable crafting materials. Our Arc Raiders recycling guide shows exactly what each item breaks down into, helping you decide whether to recycle or sell. Items like broken electronics, damaged ARC components, and household objects can be recycled for essential materials. The Arc Raiders cheat sheet includes detailed recycling chains, showing you the most efficient paths to obtain specific crafting components.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              ARC Parts: The Most Valuable Loot
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              ARC parts are the most sought-after items in Arc Raiders, dropped by defeated ARC units. These Arc Raiders items include specialized components like Hornet Drivers, Wasp Drivers, Snitch Scanners, and Spotter Relays. Each ARC part serves specific purposes in hideout upgrades and advanced crafting. Our Arc Raiders cheat sheet provides complete information on where to find these parts, their value, and their uses in the workshop and crafting system.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Selling vs. Keeping: Making the Right Choice
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Not every item in Arc Raiders needs to be kept or recycled. Some items are best sold for immediate credits, which can be used to purchase essential supplies or upgrade your equipment. Our Arc Raiders guide identifies vendor trash items, consumables with low utility, and duplicate materials that can safely be sold. The cheat sheet helps you maintain optimal inventory space while maximizing your credit income for important purchases.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Advanced Tips for Arc Raiders Players
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Experienced Arc Raiders players know that efficient loot management is key to success. Our Arc Raiders cheat sheet includes advanced strategies for inventory optimization, priority item lists for different playstyles, and farming routes for specific materials. Whether you're focusing on PvP combat, PvE missions, or hideout development, this Arc Raiders guide provides tailored recommendations to support your gameplay objectives.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Stay Updated with Arc Raiders Meta
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              The Arc Raiders meta evolves with each update, introducing new items, quests, and crafting recipes. Our Arc Raiders cheat sheet is regularly updated to reflect the latest game changes, ensuring you always have accurate information. Bookmark this Arc Raiders guide and check back frequently for new content, updated item values, and fresh strategies to stay ahead of the competition.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {actions.filter(a => a.id !== 'all').map((action) => (
              <div
                key={action.id}
                className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-zinc-600 transition-colors"
              >
                <div className="text-4xl mb-4">{action.icon}</div>
                <h3 className="text-xl font-bold mb-2">{action.name}</h3>
                <p className="text-zinc-400 mb-4">
                  {action.id === 'keep' && 'Essential items for quests, crafting, and hideout upgrades'}
                  {action.id === 'sell' && 'Vendor trash and items best sold for quick credits'}
                  {action.id === 'recycle' && 'Break down items into valuable crafting materials'}
                </p>
                <Link
                  href={`/items?action=${action.id}`}
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  View {action.name} Items →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.filter(c => c.id !== 'all').map((category) => (
              <Link
                key={category.id}
                href={`/items?category=${category.id}`}
                className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-blue-500 transition-all hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-zinc-400 text-sm mb-4">{category.count} items</p>
                <div className="text-blue-400 font-medium">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master Arc Raiders?
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Explore our complete item database, quest guides, and crafting recipes to optimize your Arc Raiders gameplay.
          </p>
          <Link
            href="/items"
            className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-lg"
          >
            Start Exploring
          </Link>
        </div>
      </section>
    </div>
  );
}
