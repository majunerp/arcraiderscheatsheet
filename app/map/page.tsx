import Link from 'next/link';

import { mapAreas } from '@/lib/maps-data';
import { generateMetadata as genMeta } from '@/lib/seo';

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
        <section className="border-b-2 border-cyan-500/30 pt-8 pb-6 md:pt-12 md:pb-8">
          <div className="container mx-auto max-w-6xl px-4">
            <h1 className="mb-2 text-2xl font-bold md:text-3xl">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,229,255,0.6)]">
                Arc Raiders Interactive Map
              </span>
            </h1>
            <p className="max-w-3xl text-sm md:text-base text-cyan-100/80">
              Complete Arc Raiders map guide with all 4 playable maps, loot locations, extraction points, and quest markers. Find the best farming routes for Industrial Batteries, Rusted Gears, Dog Collars, and high-tier ARC components.
            </p>
          </div>
        </section>

        <section className="py-6 md:py-10">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-4 space-y-1">
              <h2 className="text-xl font-bold text-cyan-300 md:text-2xl">Map gallery (click to open each map)</h2>
              <p className="text-xs md:text-sm text-cyan-100/80">Uses the four map previews from the reference page - click any card to jump to its interactive view.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
              {mapAreas.map((area) => (
                <div
                  key={area.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-cyan-500/30 bg-slate-950/60 shadow-lg shadow-cyan-900/30 transition hover:-translate-y-1 hover:border-cyan-300/80"
                >
                  <Link
                    href={`/map/${area.id}`}
                    className="relative block flex-shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                    aria-label={`Open ${area.name} map page`}
                  >
                    <img
                      src={area.image}
                      alt={`${area.name} map preview`}
                      className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 md:h-44"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-2.5 md:p-3">
                      <div className="flex flex-wrap gap-1 md:gap-1.5">
                        <span className="rounded-full bg-black/50 px-2 py-0.5 text-xs font-semibold text-cyan-100">{area.difficulty}</span>
                        <span className="rounded-full bg-black/50 px-2 py-0.5 text-xs font-semibold text-cyan-100">{area.size}</span>
                        <span className="rounded-full bg-black/50 px-2 py-0.5 text-xs font-semibold text-cyan-100">{area.extractions} exits</span>
                      </div>
                      <h3 className="mt-1.5 text-base font-semibold text-cyan-50 drop-shadow md:text-lg">{area.name}</h3>
                      <p className="text-xs text-cyan-100/80 line-clamp-2">{area.description}</p>
                      <div className="mt-1.5 flex flex-wrap gap-1 text-xs text-cyan-100/80 md:gap-1.5">
                        {area.bestItems.slice(0, 2).map((item) => (
                          <span
                            key={item.name}
                            className="rounded border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5 font-semibold text-emerald-100"
                          >
                            {item.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-cyan-500/20 bg-slate-950/70 px-3 py-2 md:gap-3 md:px-3.5 md:py-2.5">
                    <Link
                      href={`/map/${area.id}`}
                      className="text-xs font-semibold text-cyan-200 hover:text-cyan-50"
                    >
                      Open {area.name} map page
                    </Link>
                    <div className="flex items-center gap-2 md:gap-2.5">
                      <Link
                        href={`/map/${area.id}`}
                        className="text-xs font-semibold text-cyan-200 underline decoration-cyan-400/60 underline-offset-4 hover:text-cyan-50"
                      >
                        Interactive map
                      </Link>
                      <Link
                        href={`/#items?search=${encodeURIComponent(area.bestItems[0].search)}`}
                        className="text-xs font-semibold text-emerald-200 underline decoration-emerald-400/60 underline-offset-4 hover:text-emerald-100"
                      >
                        Related loot
                      </Link>
                    </div>
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
