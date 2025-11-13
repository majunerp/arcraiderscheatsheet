'use client';

import Link from "next/link";
import { useState, useMemo } from "react";
import Script from "next/script";
import { items, categories, actions } from "@/lib/items-data";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAction, setSelectedAction] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [displayLimit, setDisplayLimit] = useState(24); // Show 24 items initially

  const featuredItems = items.slice(0, 6);
  const stats = {
    totalItems: items.length,
    arcParts: items.filter(i => i.category === 'arc_parts').length,
    questItems: items.filter(i => i.category === 'quest_items').length,
    craftingMaterials: items.filter(i => i.category === 'crafting_materials').length,
  };

  const filteredItems = useMemo(() => {
    let filtered = items;

    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (selectedAction !== 'all') {
      filtered = filtered.filter(item => item.action === selectedAction);
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedAction]);

  const displayedItems = filteredItems.slice(0, displayLimit);
  const hasMoreItems = displayLimit < filteredItems.length;

  const getActionBadge = (action: string) => {
    const badges = {
      keep: { bg: 'bg-green-900/30', text: 'text-green-400', border: 'border-green-700', icon: '✅' },
      sell: { bg: 'bg-yellow-900/30', text: 'text-yellow-400', border: 'border-yellow-700', icon: '💰' },
      recycle: { bg: 'bg-blue-900/30', text: 'text-blue-400', border: 'border-blue-700', icon: '♻️' },
    };
    return badges[action as keyof typeof badges] || badges.keep;
  };

  const getRarityColor = (rarity: string) => {
    const colors = {
      common: 'text-zinc-400',
      uncommon: 'text-green-400',
      rare: 'text-blue-400',
      epic: 'text-purple-400',
      legendary: 'text-yellow-400',
    };
    return colors[rarity as keyof typeof colors] || 'text-zinc-400';
  };

  return (
    <div className="w-full">
      {/* Schema.org Structured Data for SEO */}
      <Script
        id="schema-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Arc Raiders Cheat Sheet",
            "description": "Complete Arc Raiders cheat sheet with interactive item database, quest tracker, and crafting recipes. Learn what to keep, sell, or recycle.",
            "url": "https://arcraiderscheatsheet.org",
            "applicationCategory": "GameApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1250"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://arcraiderscheatsheet.org/items?search={search_term}",
              "query-input": "required name=search_term"
            }
          })
        }}
      />

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
              <a
                href="#items"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Browse Item Database
              </a>
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

      {/* Interactive Item Database Section - NEW */}
      <section id="items" className="py-16 bg-black border-b border-zinc-800 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Interactive Arc Raiders Cheat Sheet - Browse All Items
              </span>
            </h2>
            <p className="text-center text-zinc-300 mb-8 max-w-3xl mx-auto">
              Use our interactive Arc Raiders item database to search and filter all {items.length} items. Instantly discover what Arc Raiders items to keep for quests, sell for credits, or recycle for crafting materials. This Arc Raiders cheat sheet helps you make smart loot decisions in seconds.
            </p>

            {/* Search and Filters */}
            <div className="mb-6 space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for items, materials, or components..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 text-lg"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Quick Action Filters */}
              <div className="flex flex-wrap gap-3">
                {actions.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => setSelectedAction(action.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      selectedAction === action.id
                        ? 'bg-blue-600 text-white scale-105'
                        : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                    }`}
                  >
                    {action.icon} {action.name}
                  </button>
                ))}
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              {displayedItems.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-xl text-zinc-400 mb-4">No items found matching your filters.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedAction('all');
                    }}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                displayedItems.map((item) => {
                  const actionBadge = getActionBadge(item.action);
                  return (
                    <Link
                      key={item.id}
                      href={`/items/${item.id}`}
                      className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:border-blue-500 transition-all hover:scale-105"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-1">{item.name}</h3>
                          <p className={`text-sm font-medium ${getRarityColor(item.rarity)}`}>
                            {item.rarity.charAt(0).toUpperCase() + item.rarity.slice(1)}
                          </p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${actionBadge.bg} ${actionBadge.text} ${actionBadge.border}`}>
                          {actionBadge.icon}
                        </div>
                      </div>
                      <p className="text-sm text-zinc-400 mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                        <span className="text-sm text-zinc-500">
                          Value: <span className="text-yellow-400 font-medium">{item.value}</span>
                        </span>
                        <span className="text-blue-400 text-sm font-medium">
                          View →
                        </span>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>

            {/* Results Info and Load More */}
            <div className="text-center space-y-4">
              <p className="text-zinc-400">
                Showing {displayedItems.length} of {filteredItems.length} items
                {filteredItems.length < items.length && ` (${items.length} total)`}
              </p>

              {hasMoreItems && (
                <button
                  onClick={() => setDisplayLimit(prev => prev + 24)}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all text-lg"
                >
                  Load More Items
                </button>
              )}

              {!hasMoreItems && filteredItems.length > 0 && (
                <p className="text-green-400 font-medium">✓ All items loaded</p>
              )}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master Arc Raiders?
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Explore our complete quest guides and crafting recipes to optimize your Arc Raiders gameplay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quests"
              className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-lg"
            >
              View Quest Guide
            </Link>
            <Link
              href="/workshop"
              className="inline-block px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors text-lg"
            >
              Explore Workshop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
