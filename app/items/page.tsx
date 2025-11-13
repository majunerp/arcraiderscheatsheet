'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { items, categories, actions, rarities } from '@/lib/items-data';

export default function ItemsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAction, setSelectedAction] = useState('all');
  const [selectedRarity, setSelectedRarity] = useState('all');
  const [sortBy, setSortBy] = useState<'name' | 'value' | 'rarity'>('name');

  const filteredItems = useMemo(() => {
    let filtered = items;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Action filter
    if (selectedAction !== 'all') {
      filtered = filtered.filter(item => item.action === selectedAction);
    }

    // Rarity filter
    if (selectedRarity !== 'all') {
      filtered = filtered.filter(item => item.rarity === selectedRarity);
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'value') {
        return b.value - a.value;
      } else {
        const rarityOrder = { common: 1, uncommon: 2, rare: 3, epic: 4, legendary: 5 };
        return rarityOrder[b.rarity] - rarityOrder[a.rarity];
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedAction, selectedRarity, sortBy]);

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

  const getActionBadge = (action: string) => {
    const badges = {
      keep: { bg: 'bg-green-900/30', text: 'text-green-400', border: 'border-green-700', icon: '✅' },
      sell: { bg: 'bg-yellow-900/30', text: 'text-yellow-400', border: 'border-yellow-700', icon: '💰' },
      recycle: { bg: 'bg-blue-900/30', text: 'text-blue-400', border: 'border-blue-700', icon: '♻️' },
    };
    return badges[action as keyof typeof badges] || badges.keep;
  };

  return (
    <div className="w-full min-h-screen bg-black">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-black py-12 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Arc Raiders Item Database
            </span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl">
            Complete Arc Raiders item database with {items.length}+ items. Filter by category, action, and rarity to find exactly what you need. Each item includes detailed information about its use, value, and whether to keep, sell, or recycle it.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-zinc-900/50 py-6 border-b border-zinc-800 sticky top-16 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <input
                type="text"
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name} {cat.id !== 'all' && `(${cat.count})`}
                </option>
              ))}
            </select>

            {/* Action Filter */}
            <select
              value={selectedAction}
              onChange={(e) => setSelectedAction(e.target.value)}
              className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            >
              {actions.map(action => (
                <option key={action.id} value={action.id}>
                  {action.icon} {action.name}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="value">Sort by Value</option>
              <option value="rarity">Sort by Rarity</option>
            </select>
          </div>

          {/* Rarity Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {rarities.map(rarity => (
              <button
                key={rarity.id}
                onClick={() => setSelectedRarity(rarity.id)}
                className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
                  selectedRarity === rarity.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
              >
                {rarity.name}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-4 text-zinc-400 text-sm">
            Showing {filteredItems.length} of {items.length} items
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-zinc-400">No items found matching your filters.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedAction('all');
                  setSelectedRarity('all');
                }}
                className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredItems.map((item) => {
                const actionBadge = getActionBadge(item.action);
                return (
                  <Link
                    key={item.id}
                    href={`/items/${item.id}`}
                    className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:border-blue-500 transition-all hover:scale-105"
                  >
                    {/* Item Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-white mb-1">{item.name}</h3>
                        <p className={`text-sm font-medium ${getRarityColor(item.rarity)}`}>
                          {item.rarity.charAt(0).toUpperCase() + item.rarity.slice(1)}
                        </p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium border ${actionBadge.bg} ${actionBadge.text} ${actionBadge.border}`}>
                        {actionBadge.icon} {item.action.toUpperCase()}
                      </div>
                    </div>

                    {/* Item Description */}
                    <p className="text-sm text-zinc-400 mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Item Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                      <span className="text-sm text-zinc-500">
                        Value: <span className="text-yellow-400 font-medium">{item.value}</span>
                      </span>
                      <span className="text-blue-400 text-sm font-medium">
                        View Details →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-zinc-900/30 border-t border-zinc-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6">
              Arc Raiders Item Database Guide
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Our comprehensive Arc Raiders item database contains every item available in the game, from common recyclables to legendary ARC parts. Each entry in this Arc Raiders cheat sheet includes detailed information about the item's purpose, value, and optimal use. Whether you're looking for quest items, crafting materials, or deciding what to recycle, this database provides all the information you need.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              How to Use the Item Database
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              The Arc Raiders item database features powerful filtering options to help you find exactly what you need. Use the search bar to look up specific items by name, filter by category to browse ARC parts or crafting materials, and sort by value or rarity to prioritize your loot decisions. The action filter lets you quickly identify items to keep for quests, sell for credits, or recycle for materials.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Understanding Item Categories
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Items in Arc Raiders are organized into five main categories. ARC Parts are valuable components dropped by defeated enemies, essential for hideout upgrades. Crafting Materials include everything from basic wires to rare alloys needed for weapon and armor crafting. Quest Items are required for specific missions and should always be kept. Recyclable items can be broken down into useful materials, while Consumables provide immediate benefits or can be sold for quick credits.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
