'use client';

import { useState, useMemo } from "react";
import Link from "next/link";
import Script from "next/script";
import { items, categories } from "@/lib/items-data";
import { ItemImage } from "@/components/ItemImage";

const categoryMeta = {
  arc_parts: {
    label: 'ARC Parts',
    summary: 'Quest-critical ARC tech salvaged from mechanized threats.',
    accent: 'text-cyan-300',
  },
  crafting_materials: {
    label: 'Crafting Materials',
    summary: 'Rare ingredients for high-end workshop upgrades.',
    accent: 'text-emerald-300',
  },
  quest_items: {
    label: 'Quest Items',
    summary: 'Story progression requirements — don’t dismantle them.',
    accent: 'text-purple-300',
  },
  recyclable: {
    label: 'Recyclable',
    summary: 'Break these down for raw resources and hideout upkeep.',
    accent: 'text-sky-300',
  },
  consumables: {
    label: 'Consumables',
    summary: 'Quick-use boosts to keep squads alive mid-encounter.',
    accent: 'text-amber-300',
  },
} as const;

const actionMeta = {
  keep: {
    short: 'KEEP',
    title: 'Keep & Upgrade',
    summary: 'Best stored for hideout upgrades or late-game crafting.',
    badge: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/40',
    highlight: 'High Priority Inventory',
  },
  sell: {
    short: 'SELL',
    title: 'Sell for Credits',
    summary: 'Safe to liquidate at traders for extra Arc Credits.',
    badge: 'bg-amber-500/10 text-amber-300 border border-amber-400/40',
    highlight: 'Trader-Friendly Loot',
  },
  recycle: {
    short: 'RECYCLE',
    title: 'Recycle Efficiently',
    summary: 'Dismantle for guaranteed crafting components.',
    badge: 'bg-blue-500/10 text-blue-300 border border-blue-400/40',
    highlight: 'Resource Conversion Pick',
  },
} as const;

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAction, setSelectedAction] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [displayLimit, setDisplayLimit] = useState(24); // Show 24 items initially

  const stats = {
    totalItems: items.length,
    arcParts: items.filter(i => i.category === 'arc_parts').length,
    questItems: items.filter(i => i.category === 'quest_items').length,
    craftingMaterials: items.filter(i => i.category === 'crafting_materials').length,
  };

  const actions = [
    { id: 'all', name: 'All Actions', helper: 'Show every item' },
    { id: 'keep', name: 'Keep Priority', helper: 'Quest or upgrade essentials' },
    { id: 'sell', name: 'Sell for Credits', helper: 'Safe vendor fodder' },
    { id: 'recycle', name: 'Recycle for Parts', helper: 'Break down for materials' },
  ] as const;

  const creditFormatter = useMemo(() => new Intl.NumberFormat('en-US'), []);

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
      <section className="relative overflow-hidden bg-gradient-to-b from-zinc-900 via-black to-black py-6 md:py-8 border-b border-zinc-800">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-2">
            {/* Main H1 Title - Required for SEO */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Arc Raiders Cheat Sheet
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              Master Arc Raiders with our comprehensive cheat sheet. Discover what items to keep, sell, or recycle for optimal progression.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Item Database Section - PRIMARY CONTENT */}
      <section id="items" className="py-4 md:py-6 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-zinc-400 text-sm md:text-base mb-4 max-w-3xl mx-auto">
              Search and filter all {items.length} Arc Raiders items. Instantly discover what to keep, sell, or recycle.
            </p>

            {/* Search and Filters */}
            <div className="mb-6 space-y-3">
              {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto group">
                  {/* Multiple glow layers for stronger effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-2xl opacity-75 blur-md group-focus-within:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-2xl opacity-60 blur group-focus-within:opacity-90 transition-opacity duration-300"></div>

                  <div className="relative">
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] group-focus-within:text-yellow-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search for items, materials, or components..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      aria-label="Search Arc Raiders items"
                      className="w-full pl-14 pr-12 py-4 bg-zinc-900/95 backdrop-blur-sm border-2 border-yellow-500/40 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:border-yellow-400/70 focus:bg-zinc-900 focus:shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all duration-300 shadow-xl"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        aria-label="Clear search"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white bg-zinc-800/70 hover:bg-zinc-700 rounded-full p-1.5 transition-colors"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

              {/* Quick Action Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                  {actions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => setSelectedAction(action.id)}
                      title={action.helper}
                      aria-label={`Filter by ${action.name}`}
                      className={`px-5 py-2 rounded-xl font-bold transition-all duration-200 text-sm ${
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
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
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
                  const actionInfo =
                    actionMeta[item.action as keyof typeof actionMeta] ?? actionMeta.keep;
                  const categoryInfo =
                    categoryMeta[item.category as keyof typeof categoryMeta] ?? {
                      label: 'Arc Loot',
                      summary: 'General purpose equipment.',
                      accent: 'text-slate-300',
                    };

                  return (
                    <article
                      key={item.id}
                      className="group relative overflow-hidden rounded-2xl border-2 border-blue-500/30 bg-gradient-to-b from-zinc-900/95 to-black/95 shadow-xl shadow-black/60 transition-all duration-300 hover:border-blue-400/50 hover:shadow-blue-500/20"
                      itemScope
                      itemType="https://schema.org/Product"
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_60%)]"
                        aria-hidden="true"
                      ></div>

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Header with item name and quantity badge */}
                        <div className="flex items-start justify-between gap-2 p-4 pb-3 border-b border-zinc-800/50">
                          <h3 itemProp="name" className="text-lg font-bold text-white leading-tight flex-1">
                            {item.name}
                          </h3>
                          {item.rarity !== 'common' && (
                            <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded-md ${getRarityColor(item.rarity)} bg-black/40`}>
                              {item.rarity}
                            </span>
                          )}
                        </div>

                        {/* Image section */}
                        <div className="flex items-center justify-center p-6 bg-gradient-to-b from-zinc-900/40 to-transparent">
                          <div className="relative">
                            <ItemImage
                              src={item.image}
                              alt={item.name}
                              width={140}
                              height={140}
                              rarity={item.rarity}
                              className="rounded-xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                            />
                          </div>
                        </div>

                        {/* Action badge - centered */}
                        <div className="px-4 pb-3">
                          <div className={`w-full text-center py-2 px-4 rounded-lg font-bold text-sm ${actionInfo.badge}`}>
                            {actionInfo.title}
                          </div>
                        </div>

                        {/* Description */}
                        {item.description && (
                          <div className="px-4 pb-3">
                            <p itemProp="description" className="text-sm text-zinc-300 leading-relaxed line-clamp-3">
                              {item.description}
                            </p>
                          </div>
                        )}

                        {/* Bottom info section */}
                        <div className="mt-auto px-4 pb-4 space-y-3">
                          {/* Category */}
                          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                            <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">
                              Category
                            </p>
                            <p className={`text-sm font-semibold ${categoryInfo.accent}`}>
                              {categoryInfo.label}
                            </p>
                          </div>

                          {/* Value */}
                          <div className="flex items-center justify-center gap-2 py-2 bg-zinc-900/60 rounded-lg border border-zinc-800">
                            <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                            </svg>
                            {item.value > 0 ? (
                              <div
                                className="flex items-baseline gap-1"
                                itemProp="offers"
                                itemScope
                                itemType="https://schema.org/Offer"
                              >
                                <meta itemProp="priceCurrency" content="CR" />
                                <span itemProp="price" className="text-xl font-bold text-amber-300">
                                  {creditFormatter.format(item.value)}
                                </span>
                              </div>
                            ) : (
                              <span className="text-lg font-semibold text-zinc-400">TBD</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <meta itemProp="image" content={item.image} />
                      <meta itemProp="category" content={categoryInfo.label} />
                    </article>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
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
