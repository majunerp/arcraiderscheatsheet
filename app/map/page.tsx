import { generateMetadata as genMeta } from '@/lib/seo';
import Link from 'next/link';

export const metadata = genMeta({
  title: 'Arc Raiders Interactive Map 2025 - All Locations & Loot',
  description: 'Arc Raiders map guide for all 4 maps: loot locations, extractions, weapon caches, quest markers on Dam Battlegrounds, Spaceport, Buried City, and Blue Gate.',
  keywords: [
    'arc raiders map guide',
    'arc raiders maps',
    'arc raiders map',
    'arc raiders loot map',
    'arc raiders extraction points',
    'arc raiders weapon caches',
    'arc raiders quest markers',
    'arc raiders map locations',
    'arc raiders dam battlegrounds',
    'arc raiders spaceport',
    'arc raiders buried city',
    'arc raiders blue gate',
  ],
  canonical: 'https://arcraiderscheatsheet.org/map',
});

const maps = [
  {
    id: 'dam_battlegrounds',
    name: 'Dam Battlegrounds',
    difficulty: 'Medium',
    size: 'Large',
    bestFor: ['Industrial Batteries', 'Rusted Gears', 'Heavy Loot'],
    keyLocations: [
      { name: 'Hydroponic Dome Complex', type: 'Industrial', loot: 'Industrial Batteries, High-tier components' },
      { name: 'Control Tower', type: 'Military', loot: 'Weapon caches, ARC parts' },
      { name: 'Power Generation Complex', type: 'Industrial', loot: 'Electrical components, batteries' },
      { name: 'Research & Administration', type: 'Tech', loot: 'Sensors, advanced electronics' },
    ],
    description: 'Large industrial map with excellent farming routes for batteries and gears. Hydroponic Dome on northwest is a hotspot for Industrial Batteries.',
    extractionPoints: 4,
    playerCapacity: '32-48',
  },
  {
    id: 'spaceport',
    name: 'Spaceport',
    difficulty: 'Hard',
    size: 'Large',
    bestFor: ['Dog Collars', 'Rusted Gears', 'Residential Loot'],
    keyLocations: [
      { name: 'Rocket Assembly', type: 'Industrial', loot: 'Industrial Batteries, ARC tech' },
      { name: 'Terminal Buildings', type: 'Commercial', loot: 'General loot, quest items' },
      { name: 'Residential Quarter', type: 'Residential', loot: 'Dog Collars, household items' },
      { name: 'Launch Platform', type: 'Military', loot: 'Weapon caches, ammunition' },
    ],
    description: 'Industrial areas concentrated in map center. Great for Rusted Gears and high-tier loot. Residential areas have good Dog Collar spawn rates.',
    extractionPoints: 5,
    playerCapacity: '32-48',
  },
  {
    id: 'buried_city',
    name: 'Buried City',
    difficulty: 'Medium',
    size: 'Medium',
    bestFor: ['Rusted Gears', 'Dog Collars', 'Quest Items'],
    keyLocations: [
      { name: 'Marano Station Car Park', type: 'Urban', loot: 'Rusted Gears (best farming route)' },
      { name: 'Grandioso Apartments', type: 'Residential', loot: 'Dog Collars, household items' },
      { name: 'Red Tower', type: 'Residential', loot: 'Dog Collars, consumables' },
      { name: 'Santa Maria Houses', type: 'Residential', loot: 'General residential loot' },
      { name: 'Pharmacy (x2)', type: 'Medical', loot: 'ESR Analyzer, medical supplies' },
    ],
    description: 'Best map for Rusted Gears farming at Marano Station car park. Multiple residential areas excellent for Dog Collars. Required for "A Reveal in Ruins" quest.',
    extractionPoints: 3,
    playerCapacity: '24-32',
  },
  {
    id: 'blue_gate',
    name: 'Blue Gate',
    difficulty: 'Easy',
    size: 'Small',
    bestFor: ['Rusted Gears', 'Beginner Farming', 'Quick Raids'],
    keyLocations: [
      { name: 'Warehouse Complex', type: 'Industrial', loot: 'Rusted Gears (40+ vehicles in underground parking), Industrial Batteries' },
      { name: "Raider's Refuge", type: 'Residential', loot: 'Dog Collars, basic supplies' },
      { name: 'Ruined Homestead', type: 'Residential', loot: 'Residential items' },
      { name: 'Village', type: 'Residential', loot: 'General loot' },
    ],
    description: 'Smallest map, perfect for beginners and quick loot runs. Warehouse Complex underground parking is THE best spot for Rusted Gears with 40+ searchable vehicles.',
    extractionPoints: 2,
    playerCapacity: '16-24',
  },
];

const lootTypes = [
  {
    name: 'Weapon Caches',
    icon: '🔫',
    description: 'High-tier weapons and ammunition',
    maps: ['All maps'],
  },
  {
    name: 'Field Crates',
    icon: '📦',
    description: 'General loot containers with mixed items',
    maps: ['All maps'],
  },
  {
    name: 'Security Lockers',
    icon: '🔒',
    description: 'Locked containers requiring keys or lockpicks',
    maps: ['Dam Battlegrounds', 'Spaceport'],
  },
  {
    name: 'Raider Caches',
    icon: '💎',
    description: 'Premium loot stashes left by other raiders',
    maps: ['All maps'],
  },
  {
    name: 'Vehicle Trunks',
    icon: '🚗',
    description: 'Searchable vehicles for Rusted Gears',
    maps: ['Blue Gate (best)', 'Buried City', 'Dam Battlegrounds'],
  },
  {
    name: 'Exodus Modules',
    icon: '🛸',
    description: 'ARC technology and high-value components',
    maps: ['Spaceport', 'Dam Battlegrounds'],
  },
];

const interactiveMaps = [
  {
    name: 'MetaForge',
    url: 'https://metaforge.app/arc-raiders/map',
    features: ['All 4 maps', 'Loot markers', 'Quest locations', 'ARC enemies', 'Regular updates'],
    description: 'Comprehensive interactive map with live data updates from Server Slam events.',
  },
  {
    name: 'ARC Raiders Maps',
    url: 'https://arcraidersmaps.app/',
    features: ['Quest locations', 'Weapon cases', 'Field crates', 'Security lockers', 'Raider caches'],
    description: 'Community-built map showing all loot container types and quest markers.',
  },
  {
    name: 'ARC Raiders Map Pro',
    url: 'https://arcraidersmap.pro/',
    features: ['Extraction points', 'Loot locations', 'Quest markers', 'All 4 maps'],
    description: 'Essential guide for finding loot efficiently across all maps.',
  },
];

export default function MapPage() {
  return (
    <div className="w-full min-h-screen bg-black relative">
      {/* Tiled Background with Gradient Overlay */}
      <div className="fixed inset-0 z-0" style={{
        backgroundImage: 'url(/arcraiders.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.5
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="border-b-2 border-cyan-500/30 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,229,255,0.6)]">
                Arc Raiders Interactive Map
              </span>
            </h1>
            <p className="text-xl text-cyan-100/80 max-w-3xl">
              Complete Arc Raiders map guide with all 4 playable maps, loot locations, extraction points, and quest markers. Find the best farming routes for Industrial Batteries, Rusted Gears, Dog Collars, and high-tier ARC components.
            </p>
          </div>
        </section>

        {/* Interactive Map Tools */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-blue-950/30 to-slate-950/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-bold text-cyan-300 mb-6">Interactive Map Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {interactiveMaps.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-b from-slate-950/60 via-blue-950/30 to-slate-950/60 border-2 border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(0,229,255,0.3)] transition-all"
                >
                  <h3 className="text-xl font-bold text-cyan-100 mb-3 flex items-center">
                    {tool.name}
                    <span className="ml-2 text-cyan-400">↗</span>
                  </h3>
                  <p className="text-cyan-100/70 mb-4 text-sm">{tool.description}</p>
                  <div className="space-y-1">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-cyan-100/60">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Maps Overview */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-cyan-300 mb-8">All Playable Maps</h2>
            <div className="space-y-8">
              {maps.map((map) => (
                <div
                  key={map.id}
                  className="bg-gradient-to-b from-slate-950/60 via-blue-950/30 to-slate-950/60 border-2 border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(0,229,255,0.3)] transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-50 mb-2">{map.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                          map.difficulty === 'Easy'
                            ? 'bg-green-500/20 text-green-300 border-green-500/40'
                            : map.difficulty === 'Medium'
                            ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40'
                            : 'bg-red-500/20 text-red-300 border-red-500/40'
                        }`}>
                          {map.difficulty}
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/40">
                          {map.size}
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/40">
                          {map.playerCapacity} Players
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/40">
                          {map.extractionPoints} Extractions
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-cyan-100/80 mb-6">{map.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Key Locations */}
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-200 mb-3">Key Locations</h4>
                      <div className="space-y-2">
                        {map.keyLocations.map((location, index) => (
                          <div key={index} className="bg-slate-900/60 border border-cyan-500/20 rounded px-4 py-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-cyan-100 font-medium text-sm">{location.name}</span>
                              <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40">
                                {location.type}
                              </span>
                            </div>
                            <p className="text-cyan-100/60 text-xs">{location.loot}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Best For */}
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-200 mb-3">Best Farming Items</h4>
                      <div className="space-y-2">
                        {map.bestFor.map((item, index) => (
                          <div key={index} className="flex items-center bg-slate-900/60 border border-green-500/20 rounded px-4 py-2">
                            <span className="text-green-400 mr-2">✓</span>
                            <Link
                              href={`/#items?search=${item}`}
                              className="text-cyan-100/80 hover:text-cyan-300 transition-colors text-sm"
                            >
                              {item}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Loot Types Guide */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-blue-950/30 to-slate-950/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-bold text-cyan-300 mb-6">Loot Container Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lootTypes.map((loot) => (
                <div
                  key={loot.name}
                  className="bg-slate-900/60 border-2 border-cyan-500/30 rounded-lg p-4 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all"
                >
                  <div className="text-3xl mb-2">{loot.icon}</div>
                  <h3 className="text-lg font-semibold text-cyan-100 mb-2">{loot.name}</h3>
                  <p className="text-cyan-100/70 text-sm mb-3">{loot.description}</p>
                  <div className="text-xs text-cyan-400">
                    📍 {loot.maps.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="relative isolate py-16 border-t-2 border-cyan-500/20">
          <div className="absolute inset-0 bg-[#030712]" aria-hidden="true" />
          <div className="relative z-10 container mx-auto px-4 max-w-5xl">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-cyan-300 mb-6">
                Complete Arc Raiders Map Guide
              </h2>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
                Arc Raiders features four unique playable maps: Dam Battlegrounds, Spaceport, Buried City, and Blue Gate. Each Arc Raiders map offers distinct loot opportunities, extraction points, and farming routes for specific items. This comprehensive Arc Raiders map guide covers all locations, loot spawns, and optimal farming strategies for maximizing your raid efficiency.
              </p>

              <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
                Best Maps for Specific Loot
              </h3>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
                Understanding which Arc Raiders map to choose for specific loot is crucial for efficient farming. Blue Gate's Warehouse Complex offers the best Rusted Gears farming with 40+ searchable vehicles. Dam Battlegrounds' Hydroponic Dome Complex excels for Industrial Batteries. Buried City and Spaceport provide optimal Dog Collar spawns in residential areas. Use our Arc Raiders interactive map resources to plan your loot routes before each raid.
              </p>

              <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
                Extraction Points and Strategy
              </h3>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
                Each Arc Raiders map features multiple extraction points, ranging from 2 on Blue Gate to 5 on Spaceport. Larger maps like Dam Battlegrounds and Spaceport support 32-48 players, creating intense PvP opportunities near extraction zones. Smaller maps like Blue Gate (16-24 players) offer safer extraction for beginner raiders. Use Arc Raiders map tools to locate the nearest extraction point and plan escape routes before engaging in high-risk loot areas.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
