import { generateMetadata as genMeta } from '@/lib/seo';
import Link from 'next/link';

const embedUrl = 'https://arcraidersmap.pro/#map';

const mapAreas = [
  {
    id: 'dam-battlegrounds',
    name: 'Dam Battlegrounds',
    difficulty: 'Medium',
    size: 'Large',
    players: '32-48',
    extractions: 4,
    mapUrl: 'https://arcraidersmap.pro/maps/dam-battlegrounds',
    image: '/dam-battlegrounds.png',
    description:
      'Large industrial map with excellent farming routes for batteries and gears. Hydroponic Dome on northwest is a hotspot for Industrial Batteries.',
    keyLocations: [
      { name: 'Hydroponic Dome Complex', tag: 'Industrial', detail: 'Industrial Batteries, High-tier components' },
      { name: 'Control Tower', tag: 'Military', detail: 'Weapon caches, ARC parts' },
      { name: 'Power Generation Complex', tag: 'Industrial', detail: 'Electrical components, batteries' },
      { name: 'Research & Administration', tag: 'Tech', detail: 'Sensors, advanced electronics' },
    ],
    bestItems: [
      { name: 'Industrial Batteries', search: 'Industrial Batteries' },
      { name: 'Rusted Gears', search: 'Rusted Gears' },
      { name: 'Heavy Loot', search: 'Heavy Loot' },
    ],
  },
  {
    id: 'spaceport',
    name: 'Spaceport',
    difficulty: 'Hard',
    size: 'Large',
    players: '32-48',
    extractions: 5,
    mapUrl: 'https://arcraidersmap.pro/maps/spaceport',
    image: '/spaceport.png',
    description:
      'Industrial areas concentrated in map center. Great for Rusted Gears and high-tier loot. Residential areas have good Dog Collar spawn rates.',
    keyLocations: [
      { name: 'Rocket Assembly', tag: 'Industrial', detail: 'Industrial Batteries, ARC tech' },
      { name: 'Terminal Buildings', tag: 'Commercial', detail: 'General loot, quest items' },
      { name: 'Residential Quarter', tag: 'Residential', detail: 'Dog Collars, household items' },
      { name: 'Launch Platform', tag: 'Military', detail: 'Weapon caches, ammunition' },
    ],
    bestItems: [
      { name: 'Dog Collars', search: 'Dog Collars' },
      { name: 'Rusted Gears', search: 'Rusted Gears' },
      { name: 'Residential Loot', search: 'Residential Loot' },
    ],
  },
  {
    id: 'buried-city',
    name: 'Buried City',
    difficulty: 'Medium',
    size: 'Medium',
    players: '24-32',
    extractions: 3,
    mapUrl: 'https://arcraidersmap.pro/maps/buried-city',
    image: '/buried-city.png',
    description:
      'Best map for Rusted Gears farming at Marano Station car park. Multiple residential areas excellent for Dog Collars. Required for "A Reveal in Ruins" quest.',
    keyLocations: [
      { name: 'Marano Station Car Park', tag: 'Urban', detail: 'Rusted Gears (best farming route)' },
      { name: 'Grandioso Apartments', tag: 'Residential', detail: 'Dog Collars, household items' },
      { name: 'Red Tower', tag: 'Residential', detail: 'Dog Collars, consumables' },
      { name: 'Santa Maria Houses', tag: 'Residential', detail: 'General residential loot' },
      { name: 'Pharmacy (x2)', tag: 'Medical', detail: 'ESR Analyzer, medical supplies' },
    ],
    bestItems: [
      { name: 'Rusted Gears', search: 'Rusted Gears' },
      { name: 'Dog Collars', search: 'Dog Collars' },
      { name: 'Quest Items', search: 'Quest Items' },
    ],
  },
  {
    id: 'blue-gate',
    name: 'Blue Gate',
    difficulty: 'Easy',
    size: 'Small',
    players: '16-24',
    extractions: 2,
    mapUrl: 'https://arcraidersmap.pro/maps/blue-gate',
    image: '/blue-gate.png',
    description:
      'Smallest map, perfect for beginners and quick loot runs. Warehouse Complex underground parking is THE best spot for Rusted Gears with 40+ searchable vehicles.',
    keyLocations: [
      { name: 'Warehouse Complex', tag: 'Industrial', detail: 'Rusted Gears (40+ vehicles in underground parking), Industrial Batteries' },
      { name: "Raider's Refuge", tag: 'Residential', detail: 'Dog Collars, basic supplies' },
      { name: 'Ruined Homestead', tag: 'Residential', detail: 'Residential items' },
      { name: 'Village', tag: 'Residential', detail: 'General loot' },
    ],
    bestItems: [
      { name: 'Rusted Gears', search: 'Rusted Gears' },
      { name: 'Beginner Farming', search: 'Beginner Farming' },
      { name: 'Quick Raids', search: 'Quick Raids' },
    ],
  },
] as const;

export const metadata = genMeta({
  title: 'Arc Raiders Interactive Map 2025 - All Locations & Loot',
  description:
    'Arc Raiders map guide for all 4 maps: loot locations, extractions, weapon caches, quest markers on Dam Battlegrounds, Spaceport, Buried City, and Blue Gate.',
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

export default function MapPage() {
  return (
    <div className="relative min-h-screen bg-black text-cyan-50">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/arcraiders.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
        }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
      </div>

      <div className="relative z-10">
        <section className="border-b-2 border-cyan-500/30 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,229,255,0.6)]">
                Arc Raiders Interactive Map
              </span>
            </h1>
            <p className="max-w-3xl text-xl text-cyan-100/80">
              Complete Arc Raiders map guide with all 4 playable maps, loot locations, extraction points, and quest markers. Find the best farming routes for Industrial Batteries, Rusted Gears, Dog Collars, and high-tier ARC components.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-cyan-300">Map gallery (click to open each map)</h2>
                <p className="text-cyan-100/80">Uses the four map previews from the reference page - click any card to jump to its interactive view.</p>
              </div>
              <a
                href={embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-cyan-400/60 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-50"
              >
                Open main map
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {mapAreas.map((area) => (
                <div
                  key={area.id}
                  className="group overflow-hidden rounded-xl border border-cyan-500/30 bg-slate-950/60 shadow-lg shadow-cyan-900/30 transition hover:-translate-y-1 hover:border-cyan-300/80"
                >
                  <div className="relative">
                    <img
                      src={area.image}
                      alt={`${area.name} map preview`}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-cyan-100">{area.difficulty}</span>
                        <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-cyan-100">{area.size}</span>
                        <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-cyan-100">{area.extractions} exits</span>
                      </div>
                      <h3 className="mt-3 text-xl font-semibold text-cyan-50 drop-shadow">{area.name}</h3>
                      <p className="text-sm text-cyan-100/80 line-clamp-2">{area.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2 text-xs text-cyan-100/80">
                        {area.bestItems.slice(0, 2).map((item) => (
                          <span
                            key={item.name}
                            className="rounded border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-100"
                          >
                            {item.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-cyan-500/20 bg-slate-950/70 px-4 py-3">
                    <a
                      href={area.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-cyan-200 hover:text-cyan-50"
                    >
                      Open interactive map
                    </a>
                    <Link
                      href={`/#items?search=${encodeURIComponent(area.bestItems[0].search)}`}
                      className="text-xs font-semibold text-emerald-200 underline decoration-emerald-400/60 underline-offset-4 hover:text-emerald-100"
                    >
                      View related loot
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="mb-8 text-3xl font-bold text-cyan-300">All Playable Maps</h2>
            <div className="space-y-8">
              {mapAreas.map((area) => (
                <div
                  key={area.id}
                  className="rounded-lg border-2 border-cyan-500/30 bg-gradient-to-b from-slate-950/60 via-blue-950/30 to-slate-950/60 p-6 transition-all hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(0,229,255,0.3)]"
                >
                  <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="mb-2 text-2xl font-bold text-cyan-50">{area.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full border bg-yellow-500/20 px-3 py-1 text-sm font-medium text-yellow-300 border-yellow-500/40">
                          {area.difficulty}
                        </span>
                        <span className="rounded-full border bg-cyan-500/20 px-3 py-1 text-sm font-medium text-cyan-300 border-cyan-500/40">
                          {area.size}
                        </span>
                        <span className="rounded-full border bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-300 border-purple-500/40">
                          {area.players} Players
                        </span>
                        <span className="rounded-full border bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300 border-blue-500/40">
                          {area.extractions} Extractions
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mb-6 text-cyan-100/80">{area.description}</p>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 text-lg font-semibold text-cyan-200">Key Locations</h4>
                      <div className="space-y-2">
                        {area.keyLocations.map((location) => (
                          <div
                            key={location.name}
                            className="rounded border border-cyan-500/20 bg-slate-900/60 px-4 py-2"
                          >
                            <div className="mb-1 flex items-center justify-between">
                              <span className="text-sm font-medium text-cyan-100">{location.name}</span>
                              <span className="rounded border border-blue-500/40 bg-blue-500/20 px-2 py-0.5 text-xs text-blue-300">
                                {location.tag}
                              </span>
                            </div>
                            <p className="text-xs text-cyan-100/60">{location.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3 text-lg font-semibold text-cyan-200">Best Farming Items</h4>
                      <div className="space-y-2">
                        {area.bestItems.map((item) => (
                          <div
                            key={item.name}
                            className="flex items-center rounded border border-green-500/20 bg-slate-900/60 px-4 py-2"
                          >
                            <span className="mr-2 text-green-400">&#10003;</span>
                            <Link
                              href={`/#items?search=${encodeURIComponent(item.search)}`}
                              className="text-sm text-cyan-100/80 transition-colors hover:text-cyan-300"
                            >
                              {item.name}
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

        <section className="py-12 md:py-16 bg-gradient-to-b from-blue-950/30 to-slate-950/50">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="mb-6 text-2xl font-bold text-cyan-300">Loot Container Types</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex h-full flex-col rounded-lg border-2 border-cyan-500/30 bg-slate-900/60 p-4 transition-all hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                <div className="mb-2 text-3xl">🔫</div>
                <h3 className="mb-2 text-lg font-semibold text-cyan-100">Weapon Caches</h3>
                <p className="mb-3 text-sm text-cyan-100/70">High-tier weapons and ammunition</p>
                <div className="text-xs text-cyan-400">📍 All maps</div>
              </div>
              <div className="flex h-full flex-col rounded-lg border-2 border-cyan-500/30 bg-slate-900/60 p-4 transition-all hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                <div className="mb-2 text-3xl">📦</div>
                <h3 className="mb-2 text-lg font-semibold text-cyan-100">Field Crates</h3>
                <p className="mb-3 text-sm text-cyan-100/70">General loot containers with mixed items</p>
                <div className="text-xs text-cyan-400">📍 All maps</div>
              </div>
              <div className="flex h-full flex-col rounded-lg border-2 border-cyan-500/30 bg-slate-900/60 p-4 transition-all hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                <div className="mb-2 text-3xl">🔒</div>
                <h3 className="mb-2 text-lg font-semibold text-cyan-100">Security Lockers</h3>
                <p className="mb-3 text-sm text-cyan-100/70">Locked containers requiring keys or lockpicks</p>
                <div className="text-xs text-cyan-400">📍 Dam Battlegrounds, Spaceport</div>
              </div>
              <div className="flex h-full flex-col rounded-lg border-2 border-cyan-500/30 bg-slate-900/60 p-4 transition-all hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                <div className="mb-2 text-3xl">💎</div>
                <h3 className="mb-2 text-lg font-semibold text-cyan-100">Raider Caches</h3>
                <p className="mb-3 text-sm text-cyan-100/70">Premium loot stashes left by other raiders</p>
                <div className="text-xs text-cyan-400">📍 All maps</div>
              </div>
              <div className="flex h-full flex-col rounded-lg border-2 border-cyan-500/30 bg-slate-900/60 p-4 transition-all hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                <div className="mb-2 text-3xl">🚙</div>
                <h3 className="mb-2 text-lg font-semibold text-cyan-100">Vehicle Trunks</h3>
                <p className="mb-3 text-sm text-cyan-100/70">Searchable vehicles for Rusted Gears</p>
                <div className="text-xs text-cyan-400">📍 Blue Gate (best), Buried City, Dam Battlegrounds</div>
              </div>
              <div className="flex h-full flex-col rounded-lg border-2 border-cyan-500/30 bg-slate-900/60 p-4 transition-all hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                <div className="mb-2 text-3xl">🛸</div>
                <h3 className="mb-2 text-lg font-semibold text-cyan-100">Exodus Modules</h3>
                <p className="mb-3 text-sm text-cyan-100/70">ARC technology and high-value components</p>
                <div className="text-xs text-cyan-400">📍 Spaceport, Dam Battlegrounds</div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate border-t-2 border-cyan-500/20 py-16">
          <div className="absolute inset-0 bg-[#030712]" aria-hidden="true" />
          <div className="relative z-10 container mx-auto max-w-5xl px-4">
            <div className="text-cyan-100/80">
              <h2 className="mb-6 text-3xl font-bold text-cyan-300">Complete Arc Raiders Map Guide</h2>
              <p className="mb-6 text-lg leading-relaxed text-cyan-100/70">
                Arc Raiders features four unique playable maps: Dam Battlegrounds, Spaceport, Buried City, and Blue Gate. Each Arc Raiders map offers distinct loot opportunities, extraction points, and farming routes for specific items. This comprehensive Arc Raiders map guide covers all locations, loot spawns, and optimal farming strategies for maximizing your raid efficiency.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-bold text-cyan-200">Best Maps for Specific Loot</h3>
              <p className="mb-6 text-lg leading-relaxed text-cyan-100/70">
                Understanding which Arc Raiders map to choose for specific loot is crucial for efficient farming. Blue Gate's Warehouse Complex offers the best Rusted Gears farming with 40+ searchable vehicles. Dam Battlegrounds' Hydroponic Dome Complex excels for Industrial Batteries. Buried City and Spaceport provide optimal Dog Collar spawns in residential areas. Use our Arc Raiders interactive map resources to plan your loot routes before each raid.
              </p>
              <h3 className="mt-8 mb-4 text-2xl font-bold text-cyan-200">Extraction Points and Strategy</h3>
              <p className="mb-0 text-lg leading-relaxed text-cyan-100/70">
                Each Arc Raiders map features multiple extraction points, ranging from 2 on Blue Gate to 5 on Spaceport. Larger maps like Dam Battlegrounds and Spaceport support 32-48 players, creating intense PvP opportunities near extraction zones. Smaller maps like Blue Gate (16-24 players) offer safer extraction for beginner raiders. Use Arc Raiders map tools to locate the nearest extraction point and plan escape routes before engaging in high-risk loot areas.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
