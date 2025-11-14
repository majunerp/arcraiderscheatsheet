'use client';

import { useState, useMemo } from "react";
import Link from "next/link";
import Script from "next/script";
import { items, categories } from "@/lib/items-data";
import { ItemImage } from "@/components/ItemImage";

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

  
  // Clean action badge mapping to avoid any encoding issues
  
  // Clean action badge mapping (ASCII-only icons)
  const badgeForAction = (action: string) => {
    const badges = {
      keep: { bg: 'bg-green-900/30', text: 'text-green-400', border: 'border-green-700', icon: '*' },
      sell: { bg: 'bg-yellow-900/30', text: 'text-yellow-400', border: 'border-yellow-700', icon: '$' },
      recycle: { bg: 'bg-blue-900/30', text: 'text-blue-400', border: 'border-blue-700', icon: 'R' },
    } as const;
    return (badges as any)[action as keyof typeof badges] || badges.keep;
  };

  return (
    <div className="w-full min-h-screen bg-black">
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

      {/* Hero Section with H1 for SEO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-zinc-900 via-black to-black py-12 md:py-16 border-b border-zinc-800">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            {/* Main H1 Title - Required for SEO */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Arc Raiders Cheat Sheet
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              Master Arc Raiders with our comprehensive cheat sheet. Discover what items to keep, sell, or recycle for optimal progression.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Item Database Section - PRIMARY CONTENT */}
      <section id="items" className="py-8 md:py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-zinc-400 text-base md:text-lg mb-8 max-w-3xl mx-auto">
              Search and filter all {items.length} Arc Raiders items. Instantly discover what to keep, sell, or recycle.
            </p>

            {/* Search and Filters */}
            <div className="mb-8 space-y-4">
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search for items, materials, or components..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-5 py-4 bg-zinc-900/80 border-2 border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:bg-zinc-900 transition-all"
                />
              </div>

              {/* Quick Action Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                {actions.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => setSelectedAction(action.id)}
                    className={`px-6 py-3 rounded-xl font-bold transition-all duration-200 ${
                      selectedAction === action.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                        : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:scale-105'
                    }`}
                  >
                    {action.name}
                  </button>
                ))}
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      selectedCategory === cat.id
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30 scale-105'
                        : 'bg-zinc-800/60 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-8">
              {displayedItems.length === 0 ? (
                <div className="col-span-full text-center py-16">
                  <div className="max-w-md mx-auto">
                    <svg className="w-16 h-16 text-zinc-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xl text-zinc-400 mb-4">No items found matching your filters.</p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                        setSelectedAction('all');
                      }}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:scale-105"
                    >
                      Clear All Filters
                    </button>
                  </div>
                </div>
              ) : (
                displayedItems.map((item) => {
                  const actionBadge = badgeForAction(item.action);
                  return (
                    <div
                      key={item.id}
                      className="group bg-gradient-to-b from-zinc-900 to-zinc-900/50 border-2 rounded-xl p-4 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                      style={{
                        borderColor: item.rarity === 'epic' ? 'rgb(168, 85, 247)' :
                                   item.rarity === 'rare' ? 'rgb(59, 130, 246)' :
                                   item.rarity === 'uncommon' ? 'rgb(16, 185, 129)' :
                                   'rgb(82, 82, 91)',
                        boxShadow: `0 0 20px ${
                          item.rarity === 'epic' ? 'rgba(168, 85, 247, 0.1)' :
                          item.rarity === 'rare' ? 'rgba(59, 130, 246, 0.1)' :
                          item.rarity === 'uncommon' ? 'rgba(16, 185, 129, 0.1)' :
                          'transparent'
                        }`
                      }}
                    >
                      {/* Item Image */}
                      <div className="flex justify-center mb-3 relative">
                        <ItemImage
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          rarity={item.rarity}
                          className="rounded-lg group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex items-start justify-between mb-2 gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-white text-sm mb-1 leading-tight line-clamp-2">{item.name}</h3>
                          <p className={`text-xs font-bold uppercase tracking-wide ${getRarityColor(item.rarity)}`}>
                            {item.rarity}
                          </p>
                        </div>
                        <div className={`px-2.5 py-1 rounded-lg text-xs font-bold ${actionBadge.bg} ${actionBadge.text} border ${actionBadge.border} flex-shrink-0 shadow-sm`}>
                          {actionBadge.icon}
                        </div>
                      </div>
                      <p className="text-xs text-zinc-400 mb-3 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-center pt-3 border-t border-zinc-800/50">
                        <span className="text-yellow-400 font-bold text-sm">{new Intl.NumberFormat('en-US').format(item.value)} CR</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Results Info and Load More */}
            <div className="text-center space-y-4 pt-4">
              <p className="text-zinc-400 text-base">
                Showing <span className="text-white font-semibold">{displayedItems.length}</span> of <span className="text-white font-semibold">{filteredItems.length}</span> items
                {filteredItems.length < items.length && ` (${items.length} total)`}
              </p>

              {hasMoreItems && (
                <button
                  onClick={() => setDisplayLimit(prev => prev + 24)}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                >
                  Load More Items
                </button>
              )}

              {!hasMoreItems && filteredItems.length > 0 && (
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-900/30 border border-green-700 rounded-xl">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-400 font-semibold">All items loaded</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Moved below items */}
      <section className="py-8 bg-zinc-900/50 border-y border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">{stats.totalItems}+</div>
              <div className="text-zinc-400 mt-1 text-sm">Total Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">{stats.arcParts}</div>
              <div className="text-zinc-400 mt-1 text-sm">ARC Parts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500">{stats.questItems}</div>
              <div className="text-zinc-400 mt-1 text-sm">Quest Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">{stats.craftingMaterials}</div>
              <div className="text-zinc-400 mt-1 text-sm">Crafting Materials</div>
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
  
  
  // Actions list (ASCII-only icons to avoid encoding issues)
  const actions = [
    { id: 'all', name: 'All Actions', icon: 'ALL' },
    { id: 'keep', name: 'Keep', icon: 'KEEP', color: 'green' },
    { id: 'sell', name: 'Sell', icon: 'SELL', color: 'yellow' },
    { id: 'recycle', name: 'Recycle', icon: 'RECYCLE', color: 'blue' },
  ];


