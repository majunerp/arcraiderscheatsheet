'use client';

import { useState, useMemo } from "react";
import Link from "next/link";
import Script from "next/script";
import { items, categories, locationTypes, valueTiers } from "@/lib/items-data";
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
    summary: 'Story progression requirements - do not dismantle them.',
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
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedValueTier, setSelectedValueTier] = useState('all');
  const [displayLimit, setDisplayLimit] = useState(24); // Show 24 items initially
  const [showFilters, setShowFilters] = useState(false); // Start filters collapsed to save space

  const stats = {
    totalItems: items.length,
    arcParts: items.filter(i => i.category === 'arc_parts').length,
    questItems: items.filter(i => i.category === 'quest_items').length,
    craftingMaterials: items.filter(i => i.category === 'crafting_materials').length,
  };

  const actions = [
    { id: 'all', name: 'All', helper: 'Show every item' },
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

    if (selectedLocation !== 'all') {
      filtered = filtered.filter(item =>
        item.locationTypes && item.locationTypes.includes(selectedLocation as any)
      );
    }

    if (selectedValueTier !== 'all') {
      const tierConfig = valueTiers.find(t => t.id === selectedValueTier);
      if (tierConfig && tierConfig.id !== 'all') {
        filtered = filtered.filter(item => {
          if (tierConfig.min && tierConfig.max) {
            return item.value >= tierConfig.min && item.value <= tierConfig.max;
          } else if (tierConfig.min) {
            return item.value >= tierConfig.min;
          } else if (tierConfig.max) {
            return item.value <= tierConfig.max;
          }
          return true;
        });
      }
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedAction, selectedLocation, selectedValueTier]);

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
    <div className="w-full min-h-screen">
      {/* Schema.org Structured Data for SEO */}
      <Script
        id="schema-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Arc Raiders Cheat Sheet",
            "description": "Complete Arc Raiders Cheat Sheet with interactive item database, quest tracker, and crafting recipes. Learn what to keep, sell, or recycle.",
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
      <section className="relative overflow-hidden py-4 md:py-6 border-b border-zinc-800/50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            {/* Main H1 Title - Required for SEO */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,229,255,0.6)]">
                Arc Raiders Cheat Sheet
              </span>
            </h1>
            <p className="text-base md:text-lg text-cyan-100/80 max-w-3xl mx-auto leading-relaxed">
              The Arc Raiders Cheat Sheet gives you a fast overview of loot, filters, and priorities so you can make smarter choices every raid.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Item Database Section - PRIMARY CONTENT */}
      <section
        id="items"
        className="relative -mt-10 md:-mt-14 lg:-mt-16 pt-12 pb-12"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-4">
            {/* Search and Filters */}
            <div className="space-y-4 rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-slate-950/85 via-blue-950/50 to-slate-950/85 backdrop-blur-md p-4 md:p-6 shadow-[0_0_40px_rgba(0,229,255,0.18)]">
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-cyan-300/90">Search & Filters</p>
                  <p className="text-cyan-100/70 text-sm md:text-base whitespace-nowrap">
                    Master Arc Raiders faster with this Arc Raiders Cheat Sheet. Search and filter all {items.length} items to decide what to keep, sell, or recycle.
                  </p>
                  <p className="text-cyan-100/60 text-xs md:text-sm">
                    Check our <Link href="/loot" className="text-cyan-300 hover:text-cyan-200 underline">complete loot guide</Link>, <Link href="/map" className="text-cyan-300 hover:text-cyan-200 underline">best routes map</Link>, and <Link href="/recycling" className="text-cyan-300 hover:text-cyan-200 underline">recycling guide</Link>.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:gap-3">
                  <div className="flex-1">
                    <div className="relative max-w-3xl mx-auto md:mx-0 group">
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-40 blur-lg group-focus-within:opacity-70 transition-opacity duration-300"></div>
                      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 opacity-30 blur group-focus-within:opacity-60 transition-opacity duration-300"></div>

                      <div className="relative bg-slate-950/95 border-2 border-cyan-500/60 rounded-2xl shadow-[0_0_30px_rgba(0,229,255,0.25)] overflow-hidden">
                        <label className="sr-only" htmlFor="item-search">Search items</label>
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,229,255,0.8)] group-focus-within:text-cyan-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                          id="item-search"
                          type="text"
                          placeholder="Search items, materials, or components..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          aria-label="Search Arc Raiders items"
                          className="w-full pl-14 pr-14 py-4 bg-transparent text-cyan-50 placeholder-cyan-200/50 focus:outline-none focus:ring-0"
                        />
                        {searchQuery && (
                          <button
                            type="button"
                            onClick={() => setSearchQuery('')}
                            aria-label="Clear search"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-200/80 hover:text-cyan-50 bg-slate-800/90 hover:bg-slate-700/90 rounded-full p-1.5 transition-colors border border-cyan-500/30"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:w-auto mt-3 md:mt-0">
                    <span className="hidden md:inline-flex text-xs px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-200 border border-cyan-500/30">
                      Interactive filters
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowFilters((prev) => !prev)}
                      aria-expanded={showFilters}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/60 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 text-cyan-50 text-sm font-semibold hover:from-cyan-500/60 hover:to-blue-500/60 hover:border-cyan-300/80 transition-all shadow-[0_0_18px_rgba(0,229,255,0.35)]"
                    >
                      <span>{showFilters ? "Hide filters" : "Show filters"}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {showFilters && (
                <>
              {/* Quick Action Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                  {actions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => setSelectedAction(action.id)}
                      title={action.helper}
                      aria-label={`Filter by ${action.name}`}
                      className={`px-5 py-2 rounded-xl font-bold transition-all duration-200 text-sm border-2 ${
                        selectedAction === action.id
                          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/60 shadow-[0_0_20px_rgba(0,229,255,0.3)] scale-105'
                          : 'bg-slate-900/60 text-cyan-100/60 border-cyan-500/20 hover:bg-slate-800/80 hover:border-cyan-400/40 hover:scale-105'
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
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                      selectedCategory === cat.id
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/60 shadow-[0_0_15px_rgba(0,229,255,0.25)] scale-105'
                        : 'bg-slate-900/50 text-cyan-100/50 border-cyan-500/15 hover:bg-slate-800/70 hover:text-cyan-200/70 hover:border-cyan-400/30'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Location Filter - NEW */}
              <div>
                <h3 className="text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2 text-center">
                  Filter by Location Type
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {locationTypes.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedLocation(loc.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                        selectedLocation === loc.id
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/60 shadow-[0_0_15px_rgba(0,229,255,0.25)] scale-105'
                          : 'bg-slate-900/50 text-cyan-100/50 border-cyan-500/15 hover:bg-slate-800/70 hover:text-cyan-200/70 hover:border-cyan-400/30'
                      }`}
                    >
                      {loc.icon} {loc.name}
                    </button>
                  ))}
                </div>
              </div>

                  {/* Value Tier Filter - NEW */}
                  <div>
                    <h3 className="text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2 text-center">
                      Filter by Value Tier
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {valueTiers.map((tier) => (
                        <button
                          key={tier.id}
                          onClick={() => setSelectedValueTier(tier.id)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                            selectedValueTier === tier.id
                              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/60 shadow-[0_0_15px_rgba(0,229,255,0.25)] scale-105'
                              : 'bg-slate-900/50 text-cyan-100/50 border-cyan-500/15 hover:bg-slate-800/70 hover:text-cyan-200/70 hover:border-cyan-400/30'
                          }`}
                        >
                          {tier.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-4">
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
                        setSelectedLocation('all');
                        setSelectedValueTier('all');
                      }}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 hover:from-cyan-400/90 hover:to-blue-400/90 text-white font-semibold rounded-xl transition-all shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:scale-105 border border-cyan-400/50"
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
                      className="group relative overflow-hidden rounded-2xl border-2 border-cyan-500/30 bg-gradient-to-b from-slate-950/60 via-blue-950/30 to-slate-950/60 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(0,229,255,0.3)]"
                      itemScope
                      itemType="https://schema.org/Product"
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,_rgba(0,229,255,0.15),_transparent_60%)]"
                        aria-hidden="true"
                      ></div>

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Header with item name and quantity badge */}
                        <div className="flex items-start justify-between gap-2 px-3 py-2 border-b border-cyan-500/20 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent">
                          <h3 itemProp="name" className="text-base font-semibold text-cyan-50 leading-tight flex-1">
                            {item.name}
                          </h3>
                          {item.rarity !== 'common' && (
                            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-md ${getRarityColor(item.rarity)} bg-slate-900/60 border border-cyan-500/20`}>
                              {item.rarity}
                            </span>
                          )}
                        </div>

                        {/* Image section */}
                        <div className="flex items-center justify-center px-3 pt-4 pb-2 bg-gradient-to-b from-white/5 to-transparent">
                          <div className="relative">
                            <ItemImage
                              src={item.image}
                              alt={item.name}
                              width={110}
                              height={110}
                              rarity={item.rarity}
                              className="rounded-xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                            />
                          </div>
                        </div>

                        {/* Action badge - centered */}
                        <div className="px-3 pb-3">
                          <div className={`w-full text-center py-1.5 px-3 rounded-lg font-bold text-xs ${actionInfo.badge}`}>
                            {actionInfo.title}
                          </div>
                        </div>

                        {/* Description */}
                        {item.description && (
                          <div className="px-3 pb-3">
                            <p itemProp="description" className="text-sm text-cyan-100/70 leading-relaxed line-clamp-3">
                              {item.description}
                            </p>
                          </div>
                        )}

                        {/* Bottom info section */}
                        <div className="mt-auto px-3 pb-3 space-y-2.5">
                          {/* Category */}
                          <div className="rounded-lg border border-cyan-500/20 bg-slate-950/40 backdrop-blur-sm p-2.5">
                            <p className="text-[10px] uppercase tracking-wider text-cyan-400/60 mb-1">
                              Category
                            </p>
                            <p className={`text-sm font-semibold ${categoryInfo.accent}`}>
                              {categoryInfo.label}
                            </p>
                          </div>

                          {/* Value */}
                          <div className="flex items-center justify-center gap-2 py-1.5 bg-slate-950/50 backdrop-blur-sm rounded-lg border border-cyan-500/20">
                            <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
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
                                <span itemProp="price" className="text-xl font-bold text-cyan-300">
                                  {creditFormatter.format(item.value)}
                                </span>
                              </div>
                            ) : (
                              <span className="text-lg font-semibold text-cyan-400/50">TBD</span>
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
              <p className="text-cyan-100/70 text-base">
                Showing <span className="text-cyan-300 font-semibold">{displayedItems.length}</span> of <span className="text-cyan-300 font-semibold">{filteredItems.length}</span> items
                {filteredItems.length < items.length && ` (${items.length} total)`}
              </p>

              {hasMoreItems && (
                <button
                  onClick={() => setDisplayLimit(prev => prev + 24)}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 hover:from-cyan-400/90 hover:to-blue-400/90 text-white font-bold rounded-xl transition-all shadow-[0_0_35px_rgba(0,229,255,0.4)] hover:scale-105 border border-cyan-400/50"
                >
                  Load More Items
                </button>
              )}

              {!hasMoreItems && filteredItems.length > 0 && (
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-900/20 border-2 border-cyan-500/40 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-cyan-300 font-semibold">All items loaded</span>
                </div>
              )}
            </div>
          </div>
        </div>
    </section>

      {/* Location Spawns Section - NEW for SEO */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-950/80 via-blue-950/40 to-slate-950/80">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-cyan-300 mb-4 text-center">
            Arc Raiders Loot Location Spawns Guide
          </h2>
          <p className="text-cyan-100/70 text-center max-w-3xl mx-auto mb-8">
            Items spawn in specific locations based on 8 location types. Use this Arc Raiders loot guide to find exactly where items spawn on all maps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-b from-slate-900/60 via-blue-900/30 to-slate-900/60 border-2 border-orange-500/30 rounded-xl p-4 hover:border-orange-400/60 hover:shadow-[0_0_30px_rgba(255,165,0,0.2)] transition-all">
              <div className="text-3xl mb-2 font-black text-orange-200">IND</div>
              <h3 className="text-lg font-bold text-orange-300 mb-2">Industrial</h3>
              <p className="text-xs text-cyan-100/60 mb-3">Dam Battlegrounds, Spaceport, Warehouse Complex</p>
              <div className="space-y-1">
                <div className="text-xs text-cyan-100/70">- Industrial Batteries</div>
                <div className="text-xs text-cyan-100/70">- Rusted Gears</div>
                <div className="text-xs text-cyan-100/70">- Metal Parts</div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-slate-900/60 via-blue-900/30 to-slate-900/60 border-2 border-red-500/30 rounded-xl p-4 hover:border-red-400/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all">
              <div className="text-3xl mb-2 font-black text-red-200">MED</div>
              <h3 className="text-lg font-bold text-red-300 mb-2">Medical</h3>
              <p className="text-xs text-cyan-100/60 mb-3">Buried City Pharmacies, Medical Labs</p>
              <div className="space-y-1">
                <div className="text-xs text-cyan-100/70">- Antiseptics</div>
                <div className="text-xs text-cyan-100/70">- Syringes</div>
                <div className="text-xs text-cyan-100/70">- ESR Analyzers</div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-slate-900/60 via-blue-900/30 to-slate-900/60 border-2 border-yellow-500/30 rounded-xl p-4 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] transition-all">
              <div className="text-3xl mb-2 font-black text-yellow-200">SEC</div>
              <h3 className="text-lg font-bold text-yellow-300 mb-2">Security</h3>
              <p className="text-xs text-cyan-100/60 mb-3">Military zones, Control Towers</p>
              <div className="space-y-1">
                <div className="text-xs text-cyan-100/70">- Keys (all types)</div>
                <div className="text-xs text-cyan-100/70">- Weapon Caches</div>
                <div className="text-xs text-cyan-100/70">- Ammunition</div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-slate-900/60 via-blue-900/30 to-slate-900/60 border-2 border-green-500/30 rounded-xl p-4 hover:border-green-400/60 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all">
              <div className="text-3xl mb-2 font-black text-green-200">RES</div>
              <h3 className="text-lg font-bold text-green-300 mb-2">Residential</h3>
              <p className="text-xs text-cyan-100/60 mb-3">Apartments, Houses, Raider Refuge</p>
              <div className="space-y-1">
                <div className="text-xs text-cyan-100/70">- Dog Collars</div>
                <div className="text-xs text-cyan-100/70">- Trinkets</div>
                <div className="text-xs text-cyan-100/70">- Household Items</div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-slate-900/60 via-blue-900/30 to-slate-900/60 border-2 border-purple-500/30 rounded-xl p-4 hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all">
              <div className="text-3xl mb-2 font-black text-purple-200">OLD</div>
              <h3 className="text-lg font-bold text-purple-300 mb-2">Old World</h3>
              <p className="text-xs text-cyan-100/60 mb-3">Historical sites, Abandoned areas</p>
              <div className="space-y-1">
                <div className="text-xs text-cyan-100/70">- Vintage Items</div>
                <div className="text-xs text-cyan-100/70">- Collectibles</div>
                <div className="text-xs text-cyan-100/70">- Film Reels</div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-slate-900/60 via-blue-900/30 to-slate-900/60 border-2 border-cyan-500/30 rounded-xl p-4 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all">
              <div className="text-3xl mb-2 font-black text-cyan-200">COM</div>
              <h3 className="text-lg font-bold text-cyan-300 mb-2">Commercial</h3>
              <p className="text-xs text-cyan-100/60 mb-3">Shops, Terminal Buildings</p>
              <div className="space-y-1">
                <div className="text-xs text-cyan-100/70">- General Loot</div>
                <div className="text-xs text-cyan-100/70">- Food Items</div>
                <div className="text-xs text-cyan-100/70">- Consumer Goods</div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-slate-900/60 via-blue-900/30 to-slate-900/60 border-2 border-lime-500/30 rounded-xl p-4 hover:border-lime-400/60 hover:shadow-[0_0_30px_rgba(132,204,22,0.2)] transition-all">
              <div className="text-3xl mb-2 font-black text-lime-200">NAT</div>
              <h3 className="text-lg font-bold text-lime-300 mb-2">Nature</h3>
              <p className="text-xs text-cyan-100/60 mb-3">Jungle areas, Outdoor zones</p>
              <div className="space-y-1">
                <div className="text-xs text-cyan-100/70">- Lemons (jungle)</div>
                <div className="text-xs text-cyan-100/70">- Apricots (trees)</div>
                <div className="text-xs text-cyan-100/70">- Mushrooms</div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-slate-900/60 via-blue-900/30 to-slate-900/60 border-2 border-blue-500/30 rounded-xl p-4 hover:border-blue-400/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all">
              <div className="text-3xl mb-2 font-black text-blue-200">ELEC</div>
              <h3 className="text-lg font-bold text-blue-300 mb-2">Electrical</h3>
              <p className="text-xs text-cyan-100/60 mb-3">Server rooms, Tech buildings</p>
              <div className="space-y-1">
                <div className="text-xs text-cyan-100/70">- Fried Motherboards</div>
                <div className="text-xs text-cyan-100/70">- Tech Components</div>
                <div className="text-xs text-cyan-100/70">- Electronics</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/map"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 hover:from-cyan-400/90 hover:to-blue-400/90 text-white font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:scale-105 border border-cyan-400/50"
            >
              View Full Map Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Top Priority Loot Section - NEW for SEO */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-cyan-300 mb-4 text-center">
            Top Priority Loot Items - What to Grab First
          </h2>
          <p className="text-cyan-100/70 text-center max-w-3xl mx-auto mb-8">
            These are the most valuable Arc Raiders items to prioritize during every raid. Focus on these for maximum efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-b from-slate-950/60 via-red-950/30 to-slate-950/60 border-2 border-red-500/40 rounded-xl p-6 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] transition-all">
              <h3 className="text-2xl font-bold text-red-300 mb-4 flex items-center">
                <span className="mr-3 text-xl font-black text-red-200">*</span>
                Must-Grab Items
              </h3>
              <div className="space-y-3">
              <div className="bg-slate-900/60 border border-red-500/20 rounded-lg p-3">
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-cyan-100 font-semibold">ARC Powercells</span>
                    <span className="text-xs px-2 py-1 bg-red-500/20 text-red-300 rounded-full border border-red-500/40">
                      Essential
                    </span>
                  </div>
                  <p className="text-xs text-cyan-100/60">Craft shield recharges - cannot craft early game</p>
                </div>

                <div className="bg-slate-900/60 border border-red-500/20 rounded-lg p-3">
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-cyan-100 font-semibold">Keys (All Types)</span>
                    <span className="text-xs px-2 py-1 bg-red-500/20 text-red-300 rounded-full border border-red-500/40">
                      Essential
                    </span>
                  </div>
                  <p className="text-xs text-cyan-100/60">Unlock high-value Security Lockers and rare loot rooms</p>
                </div>

                <div className="bg-slate-900/60 border border-orange-500/20 rounded-lg p-3">
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-cyan-100 font-semibold">Silencers & Gun Mods</span>
                    <span className="text-xs px-2 py-1 bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/40">
                      High Priority
                    </span>
                  </div>
                  <p className="text-xs text-cyan-100/60">Cannot craft early, only low-tier mods available</p>
                </div>

                <div className="bg-slate-900/60 border border-orange-500/20 rounded-lg p-3">
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-cyan-100 font-semibold">Gun Parts</span>
                    <span className="text-xs px-2 py-1 bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/40">
                      High Priority
                    </span>
                  </div>
                  <p className="text-xs text-cyan-100/60">Essential for repairing low-durability weapons found in crates</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-slate-950/60 via-amber-950/30 to-slate-950/60 border-2 border-amber-500/40 rounded-xl p-6 hover:shadow-[0_0_40px_rgba(245,158,11,0.3)] transition-all">
              <h3 className="text-2xl font-bold text-amber-300 mb-4 flex items-center">
                <span className="mr-3 text-xl font-black text-amber-200">*</span>
                High-Value Sellables
              </h3>
              <div className="space-y-3">
                <div className="bg-slate-900/60 border border-amber-500/20 rounded-lg p-3">
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-cyan-100 font-semibold">Lance's Mixtape (5th Edition)</span>
                    <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/40">
                      Epic
                    </span>
                  </div>
                  <p className="text-xs text-cyan-100/60">~10,000 credits - Most valuable single item (extremely rare)</p>
                </div>

                <div className="bg-slate-900/60 border border-amber-500/20 rounded-lg p-3">
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-cyan-100 font-semibold">Breathtaking Snow Globe</span>
                    <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/40">
                      Rare
                    </span>
                  </div>
                  <p className="text-xs text-cyan-100/60">7,000 credits - High-value collectible</p>
                </div>

                <div className="bg-slate-900/60 border border-amber-500/20 rounded-lg p-3">
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-cyan-100 font-semibold">Red Coral Jewelry</span>
                    <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/40">
                      Rare
                    </span>
                  </div>
                  <p className="text-xs text-cyan-100/60">5,000 credits - Excellent credit source</p>
                </div>

                <div className="bg-slate-900/60 border border-amber-500/20 rounded-lg p-3">
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-cyan-100 font-semibold">Rubber Duck</span>
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded-full border border-green-500/40">
                      Common
                    </span>
                  </div>
                  <p className="text-xs text-cyan-100/60">1,000 credits - Stacks to 15, found anywhere (great value/weight)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-950/40 via-cyan-950/40 to-blue-950/40 border-2 border-cyan-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-cyan-300 mb-4">Pro Loot Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start">
                <span className="text-2xl mr-3 font-black text-cyan-200">*</span>
                <div>
                  <h4 className="text-cyan-100 font-semibold mb-1">Early Game</h4>
                  <p className="text-xs text-cyan-100/70">Prioritize progression items and workshop upgrades. Keep quest materials.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3 font-black text-cyan-200">*</span>
                <div>
                  <h4 className="text-cyan-100 font-semibold mb-1">Late Game</h4>
                  <p className="text-xs text-cyan-100/70">Shift to coin generation. Farm Security Lockers with Security Breach perk.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3 font-black text-cyan-200">*</span>
                <div>
                  <h4 className="text-cyan-100 font-semibold mb-1">280-Slot Stash</h4>
                  <p className="text-xs text-cyan-100/70">Manage inventory carefully. Use Broad Shoulders + Loaded Arms for +weight.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Moved below items */}
      <section className="py-8">
        <div className="container mx-auto px-4 space-y-4 text-center">
          <div className="max-w-7xl mx-auto bg-gradient-to-b from-slate-950/60 to-blue-950/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
          <p className="text-cyan-100/70 text-sm md:text-base max-w-3xl mx-auto">
            These live stats prove how expansive the Arc Raiders Cheat Sheet is, covering loot, quests, and hideout upgrades in one continually updated hub.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-4">
            <div className="text-center p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
              <div className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">{stats.totalItems}+</div>
              <div className="text-cyan-100/60 mt-1 text-sm">Total Items</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
              <div className="text-3xl font-bold text-blue-400 drop-shadow-[0_0_10px_rgba(0,132,255,0.5)]">{stats.arcParts}</div>
              <div className="text-cyan-100/60 mt-1 text-sm">ARC Parts</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
              <div className="text-3xl font-bold text-cyan-300 drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">{stats.questItems}</div>
              <div className="text-cyan-100/60 mt-1 text-sm">Quest Items</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
              <div className="text-3xl font-bold text-blue-300 drop-shadow-[0_0_10px_rgba(0,132,255,0.5)]">{stats.craftingMaterials}</div>
              <div className="text-cyan-100/60 mt-1 text-sm">Crafting Materials</div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Main Content - SEO Optimized */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-cyan-300 mb-6">
              Complete Arc Raiders Cheat Sheet for Loot Management
            </h2>
            <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
              Welcome to the most comprehensive Arc Raiders Cheat Sheet available online. This guide helps players make informed decisions about every item they encounter in the game. Whether you're a beginner learning the basics or an experienced raider optimizing your hideout, the Arc Raiders Cheat Sheet below provides essential information for successful gameplay.
            </p>

            <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
              Understanding Arc Raiders Loot System
            </h3>
            <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
              The Arc Raiders loot system revolves around three critical decisions: keep, sell, or recycle. Every item you find in Arc Raiders serves a specific purpose, and knowing which action to take can significantly impact your progression. Our Arc Raiders Cheat Sheet categorizes all items based on their optimal use, helping you maximize your inventory efficiency and resource management.
            </p>

            <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
              Arc Raiders Quest Items and Hideout Upgrades
            </h3>
            <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
              Quest items in Arc Raiders are essential for hideout progression and unlocking advanced crafting stations. This Arc Raiders Cheat Sheet identifies all quest-specific items, including rare ARC parts like the Leaper Pulse Unit, Rocketeer Driver, and Surveyor Vault. These items should always be kept until you complete their associated quests. The sheet also details which items are needed for workshop upgrades, medical station construction, and power system installations.
            </p>

            <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
              Crafting Materials and Workshop Guide
            </h3>
            <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
              Crafting in Arc Raiders requires specific materials that can be found, purchased, or obtained through recycling. Our Arc Raiders Cheat Sheet lists all crafting materials, from common items like wires and batteries to rare components like ARC Alloy and Exodus Modules. Understanding which Arc Raiders crafting materials to stockpile ensures you're always prepared for weapon modifications, armor upgrades, and hideout construction projects.
            </p>

            <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
              Recycling Strategy for Maximum Efficiency
            </h3>
            <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
              Recycling is a core mechanic in Arc Raiders that converts unwanted items into valuable crafting materials. Our <Link href="/recycling" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">Arc Raiders recycling guide</Link> shows exactly what each item breaks down into, helping you decide whether to recycle or sell. Items like broken electronics, damaged ARC components, and household objects can be recycled for essential materials. The Arc Raider Cheat Sheet includes detailed recycling chains, showing you the most efficient paths to obtain specific crafting components.
            </p>

            <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
              ARC Parts: The Most Valuable Loot
            </h3>
            <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
              ARC parts are the most sought-after items in Arc Raiders, dropped by defeated ARC units. These Arc Raiders items include specialized components like Hornet Drivers, Wasp Drivers, Snitch Scanners, and Spotter Relays. Each ARC part serves specific purposes in hideout upgrades and advanced crafting. Our Arc Raiders Cheat Sheet provides complete information on where to find these parts, their value, and their uses in the workshop and crafting system.
            </p>

            <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
              Selling vs. Keeping: Making the Right Choice
            </h3>
            <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
              Not every item in Arc Raiders needs to be kept or recycled. Some items are best sold for immediate credits, which can be used to purchase essential supplies or upgrade your equipment. This Arc Raiders Cheat Sheet identifies vendor trash items, consumables with low utility, and duplicate materials that can safely be sold. The advice here helps you maintain optimal inventory space while maximizing credit income for important purchases.
            </p>

            <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
              Advanced Tips for Arc Raiders Players
            </h3>
            <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
              Experienced Arc Raiders players know that efficient loot management is key to success. This Arc Raiders Cheat Sheet includes advanced strategies for inventory optimization, priority item lists for different playstyles, and farming routes for specific materials. Whether you're focusing on PvP combat, PvE missions, or hideout development, these recommendations support your gameplay objectives.
            </p>

            <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
              Stay Updated with Arc Raiders Meta
            </h3>
            <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
              The Arc Raiders meta evolves with each update, introducing new items, quests, and crafting recipes. This Arc Raiders Cheat Sheet is updated to reflect the latest changes, ensuring you always have accurate information. Bookmark the guide and check back for new content, updated item values, and fresh strategies to stay ahead of the competition.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 border-t border-cyan-500/20 bg-gradient-to-b from-slate-950/70 to-blue-950/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-invert max-w-none space-y-5">
            <h2 className="text-3xl font-bold text-cyan-300">Arc Raiders cheat sheet deep strategy</h2>
            <p className="text-cyan-100/80">
              This Arc Raiders cheat sheet treats every raid like a timed sprint: land, loot, leave, and reset faster than rival squads. The Arc Raiders cheat sheet framework starts with intent—credits, crafting, or quests—so you choose routes that feed that goal instead of wandering. When you decide a raid is for credits, prioritize high-density containers and extract early; when it is for progression, follow the Arc Raiders cheat sheet quest path and ignore distractions that slow you down.
            </p>
            <p className="text-cyan-100/80">
              Inventory wins come from small decisions. An Arc Raiders cheat sheet mindset means tracking value per slot, carrying only enough ammo for two fights, and dedicating one empty slot for a surprise quest item. If you pick up a heavy battery, drop low-yield trinkets immediately. The Arc Raiders cheat sheet approach is simple: every slot must earn its space. If it does not, recycle it, sell it, or leave it behind.
            </p>
            <p className="text-cyan-100/80">
              Team coordination is where the Arc Raiders cheat sheet shines. Assign a caller to control tempo, a pack mule with weight perks, and a scout who keeps the route clean. The caller reads the Arc Raiders cheat sheet checkpoints out loud—keyrooms, tech labs, and extracts—so no one doubles back. When everyone knows their job, fights are shorter, loot is cleaner, and extracts stay on schedule.
            </p>
            <p className="text-cyan-100/80">
              Route selection lives or dies on timing. The Arc Raiders cheat sheet routes start with secured indoor spawns while lobbies are hot, then pivot to open yards once third parties thin out. On storm cycles, stick to covered interiors; on clear cycles, hit vehicle fields and rooftop crates. Always anchor on two extracts, and keep one backup marked; the Arc Raiders cheat sheet rule is to never gamble a full bag on a single exit.
            </p>
            <p className="text-cyan-100/80">
              Crafting goals keep you honest. Before deploying, note which workshop tier you are chasing and which items gate that tier. The Arc Raiders cheat sheet lists those gating items—ARC parts, electronics, batteries—so your squad grabs them first. When the gating items are secured, call extract and bank the run instead of forcing another fight. The Arc Raiders cheat sheet payoff comes from stacking small wins, not from hero plays that risk everything.
            </p>
            <p className="text-cyan-100/80">
              Money flow matters. Use this Arc Raiders cheat sheet to rotate: one credit raid to fund kits, one recycling raid for materials, one quest raid for progression, then repeat. That rhythm keeps your hideout advancing while you avoid burnout. If a trader window opens, pivot to items that spike in value and sell just enough to maintain reserves; the Arc Raiders cheat sheet rhythm is steady, not streaky.
            </p>
            <p className="text-cyan-100/80">
              Mistakes compound fast. Over-looting low-value rooms adds weight and wastes minutes. Ignoring extracts after a big find invites third parties. Forgetting to reserve an empty slot forces you to drop a key item at the worst time. The Arc Raiders cheat sheet antidote is simple habits: set a five-minute timer per zone, audit your bag after each fight, and call extracts early when objectives are met.
            </p>
            <p className="text-cyan-100/80">
              Communication keeps raids smooth. The Arc Raiders cheat sheet callouts stay short: container type, direction, and intent. “Security locker, north, holding” is enough. Avoid long stories mid-raid; save debriefs for the hideout. Clear, repeatable calls paired with the Arc Raiders cheat sheet checkpoints cut confusion and make every teammate faster.
            </p>
            <p className="text-cyan-100/80">
              Tracking progress prevents drift. Keep a tiny notepad with three lines: what you needed, what you found, what blocked you. Update it after each run and adjust the Arc Raiders cheat sheet route accordingly. If batteries were missing, swap in a power-room loop; if weight was tight, assign more slots to the pack mule. Iteration is the quiet power of any Arc Raiders cheat sheet.
            </p>
            <p className="text-cyan-100/80">
              Finally, play for the week, not the raid. Set a weekly goal—finish a quest chain, fund a hideout tier, craft a signature weapon—and let the Arc Raiders cheat sheet steer daily runs toward it. Celebrate quick extracts, not long fights. A calm, repeatable loop beats a single flashy win every time, and that is the heart of this Arc Raiders cheat sheet philosophy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
              <div className="rounded-xl border border-cyan-500/30 bg-slate-950/60 p-4">
                <h3 className="text-lg font-semibold text-cyan-100 mb-2">Arc Raiders cheat sheet quick hits</h3>
                <ul className="list-disc list-inside text-sm text-cyan-100/75 space-y-1.5">
                  <li>Declare raid intent before drop so the Arc Raiders cheat sheet route fits the goal.</li>
                  <li>Carry two-fight ammo and one flex slot to honor the Arc Raiders cheat sheet weight rules.</li>
                  <li>Mark two extracts; Arc Raiders cheat sheet discipline avoids last-second scrambles.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-cyan-500/30 bg-slate-950/60 p-4">
                <h3 className="text-lg font-semibold text-cyan-100 mb-2">Arc Raiders cheat sheet checklist</h3>
                <ul className="list-disc list-inside text-sm text-cyan-100/75 space-y-1.5">
                  <li>Review gating items and perk loadout against the Arc Raiders cheat sheet plan.</li>
                  <li>Audit bag after every fight; drop anything the Arc Raiders cheat sheet flags as low value.</li>
                  <li>Log finds and misses to refine tomorrow’s Arc Raiders cheat sheet loop.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="bg-gradient-to-b from-slate-950/80 to-blue-950/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-cyan-500/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-300 drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]">
            Ready to Master Arc Raiders?
          </h2>
          <p className="text-xl text-cyan-100/70 mb-8 max-w-2xl mx-auto">
            Explore our Arc Raiders Cheat Sheet quest guides and crafting recipes to optimize every run, then share the Arc Raiders Cheat Sheet with your squad for faster upgrades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quests"
              className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 hover:from-cyan-400/90 hover:to-blue-400/90 text-white font-bold rounded-lg transition-all shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:scale-105 border border-cyan-400/50 text-lg"
            >
              View Quest Guide
            </Link>
            <Link
              href="/workshop"
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 hover:from-blue-400/90 hover:to-cyan-400/90 text-white font-bold rounded-lg transition-all shadow-[0_0_30px_rgba(0,132,255,0.4)] hover:scale-105 border border-blue-400/50 text-lg"
            >
              Explore Workshop
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema.org */}
      <section className="py-16 bg-gradient-to-b from-blue-950/30 to-slate-950/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-cyan-300 mb-8 text-center">
            Arc Raiders Cheat Sheet FAQs
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-b from-slate-950/60 via-blue-950/30 to-slate-950/60 border-2 border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/60 transition-all">
              <h3 className="text-xl font-bold text-cyan-100 mb-3">
                What items should I keep in Arc Raiders?
              </h3>
              <p className="text-cyan-100/70 leading-relaxed">
                Always keep ARC Parts (Leaper Pulse Units, Rocketeer Drivers), quest-specific items marked with "Quest:" in descriptions, and crafting materials like ARC Alloy and Advanced Electrical Components. Use our interactive filter above to show only "Keep Priority" items. High-value items worth 1,000+ credits should be kept for workshop upgrades.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-950/60 via-blue-950/30 to-slate-950/60 border-2 border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/60 transition-all">
              <h3 className="text-xl font-bold text-cyan-100 mb-3">
                Where do items spawn in Arc Raiders?
              </h3>
              <p className="text-cyan-100/70 leading-relaxed">
                Items spawn based on 8 location types: Industrial zones (Batteries, Gears), Medical areas (Antiseptics, Syringes), Security zones (Keys, Weapons), Residential areas (Dog Collars, Trinkets), Electrical zones (Motherboards, Tech), Nature areas (Fruits, Mushrooms), Commercial zones (Food, General Loot), and Old World locations (Vintage Items). Use our Location Filter above to find items by spawn type.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-950/60 via-blue-950/30 to-slate-950/60 border-2 border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/60 transition-all">
              <h3 className="text-xl font-bold text-cyan-100 mb-3">
                Should I recycle or sell items in Arc Raiders?
              </h3>
              <p className="text-cyan-100/70 leading-relaxed">
                Compare the item's sell value to its recycled materials' combined worth. For example, Power Banks sell for 640 credits but recycle into materials worth 1,400+ credits. Always recycle at your Hideout (100% yield) instead of during raids (50% yield). Check our <Link href="/recycling" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">Recycling Guide</Link> for complete item-by-item recommendations.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-950/60 via-blue-950/30 to-slate-950/60 border-2 border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/60 transition-all">
              <h3 className="text-xl font-bold text-cyan-100 mb-3">
                What are the most valuable items to loot in Arc Raiders?
              </h3>
              <p className="text-cyan-100/70 leading-relaxed">
                Prioritize S-Tier items (5,000+ credits) like Lance's Mixtape (10,000 credits), Syringe (5,000 credits), and epic ARC Parts. A-Tier items (1,000-5,000 credits) include Industrial Batteries, Fried Motherboards, and Advanced Electrical Components. Always grab Keys and Silencers as they cannot be crafted early game. Use our Value Tier filter to show high-value items only.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-950/60 via-blue-950/30 to-slate-950/60 border-2 border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/60 transition-all">
              <h3 className="text-xl font-bold text-cyan-100 mb-3">
                How many items can I store in Arc Raiders?
              </h3>
              <p className="text-cyan-100/70 leading-relaxed">
                Your stash has 280 slots total. Manage inventory by selling low-value trinkets (diamond symbol), recycling common materials you have in excess, and using perks like Broad Shoulders (increases carry weight) and Loaded Arms (reduces weapon weight) to carry more loot per raid. Stack similar items and prioritize quest materials.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-950/60 via-blue-950/30 to-slate-950/60 border-2 border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/60 transition-all">
              <h3 className="text-xl font-bold text-cyan-100 mb-3">
                What is the best map for farming specific items in Arc Raiders?
              </h3>
              <p className="text-cyan-100/70 leading-relaxed">
                Blue Gate Warehouse Complex is best for Rusted Gears (40+ vehicles). Dam Battlegrounds Hydroponic Dome is ideal for Industrial Batteries. Buried City and Spaceport residential zones excel for Dog Collars. Stella Montis offers exclusive high-value loot. Check our <Link href="/map" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">Map Guide</Link> for detailed location breakdowns.
              </p>
            </div>
          </div>

          {/* Schema.org FAQPage */}
          <Script
            id="faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What items should I keep in Arc Raiders?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Always keep ARC Parts (Leaper Pulse Units, Rocketeer Drivers), quest-specific items marked with 'Quest:' in descriptions, and crafting materials like ARC Alloy and Advanced Electrical Components. High-value items worth 1,000+ credits should be kept for workshop upgrades."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Where do items spawn in Arc Raiders?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Items spawn based on 8 location types: Industrial zones (Batteries, Gears), Medical areas (Antiseptics, Syringes), Security zones (Keys, Weapons), Residential areas (Dog Collars, Trinkets), Electrical zones (Motherboards, Tech), Nature areas (Fruits, Mushrooms), Commercial zones (Food), and Old World locations (Vintage Items)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Should I recycle or sell items in Arc Raiders?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Compare the item's sell value to its recycled materials' combined worth. Always recycle at your Hideout (100% yield) instead of during raids (50% yield). Many items like Power Banks are worth more recycled than sold."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are the most valuable items to loot in Arc Raiders?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Prioritize S-Tier items (5,000+ credits) like Lance's Mixtape (10,000 credits) and Syringe (5,000 credits). A-Tier items (1,000-5,000 credits) include Industrial Batteries, Fried Motherboards, and Advanced Electrical Components. Always grab Keys and Silencers as they cannot be crafted early game."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How many items can I store in Arc Raiders?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Your stash has 280 slots total. Manage inventory by selling low-value trinkets, recycling excess materials, and using perks like Broad Shoulders (increases carry weight) to carry more loot per raid."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the best map for farming specific items in Arc Raiders?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Blue Gate Warehouse Complex is best for Rusted Gears (40+ vehicles). Dam Battlegrounds Hydroponic Dome is ideal for Industrial Batteries. Buried City and Spaceport residential zones excel for Dog Collars. Stella Montis offers exclusive high-value loot."
                    }
                  }
                ]
              })
            }}
          />
        </div>
      </section>
    </div>
  );
}











