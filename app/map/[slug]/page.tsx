import Link from 'next/link';
import { notFound } from 'next/navigation';

import IframeAdBlocker from '@/components/IframeAdBlocker';
import MeasurePatchClient from '@/components/MeasurePatchClient';
import { getMapArea, mapAreas } from '@/lib/maps-data';
import { generateMetadata as genMeta } from '@/lib/seo';

type MapPageProps = {
  params: Promise<{ slug?: string }>;
};

type MapDetailContent = {
  heroKicker: string;
  subheading: string;
  stats: { label: string; value: string; accent?: string }[];
  extractions: { name: string; tip: string }[];
  routes: { title: string; steps: string[] }[];
  lootFocus: { title: string; items: string[] }[];
  proTips: string[];
};

const mapDetails: Record<string, MapDetailContent> = {
  'blue-gate': {
    heroKicker: 'Mountain Research Complex',
    subheading:
      'Compact vertical layout of research labs and the underground car park. Sparse parking spots with huge Rusted Gears yield; lab tower and vertical shaft hide high-value tech loot.',
    stats: [
      { label: 'Players', value: '16-24' },
      { label: 'Extractions', value: '2' },
      { label: 'Best Loot', value: 'Rusted Gears / Industrial Batteries' },
    ],
    extractions: [
      { name: 'Surface Helipad', tip: 'Rooftop evac with wide sightlines—throw smokes/stuns before you run.' },
      { name: 'Cliff Lift', tip: 'Cliffside lift, best exit after Garage → Tower; stay off open sightlines.' },
    ],
    routes: [
      {
        title: 'Garage gear farm → Tower exit',
        steps: [
          'Start in the Warehouse Complex underground parking; clear outer ring cars before inner stalls.',
          'Move up the ramp to the Communication Tower; hit lockers/toolboxes on the way.',
          'Leave via the cliffside path to the Cliff Lift; watch for rooftop snipers.',
        ],
      },
      {
        title: 'Research sprint → Helipad',
        steps: [
          'Drop into the Vertical Shaft labs; grab batteries and electronic modules first.',
          'If you have the key, clear Confiscation Room for stacked tech loot.',
          'Exit via the tower roof Helipad—pre-clear high ground before committing.',
        ],
      },
    ],
    lootFocus: [
      { title: 'High-value rooms', items: ['Vertical Shaft labs → Batteries/Modules', 'Confiscation Room → Rare tech loot', 'Tower lockers → Tools/Electronics'] },
      { title: 'Recommended kit', items: ['Flashlight/NVG for dark garage', '1-2 smokes for exits', 'Shotgun/SMG for tight tower fights'] },
    ],
    proTips: [
      '40+ vehicles—run a ring route to avoid missing trunks.',
      'Plan extraction once half-full; both exits get camped often.',
      'Tower windows host snipers—move with cover and smokes.',
    ],
  },
  'dam-battlegrounds': {
    heroKicker: 'Alcantara Power Plant',
    subheading: 'Open industrial yards plus indoor turbines. Highest density of batteries and ARC parts. Four extractions on the perimeter—plan routes and leave early.',
    stats: [
      { label: 'Players', value: '32-48' },
      { label: 'Extractions', value: '4' },
      { label: 'Best Loot', value: 'Industrial Batteries / ARC Parts' },
    ],
    extractions: [
      { name: 'Research Cable Car', tip: 'North high-ground exit; clear long sightlines before pulling the lever.' },
      { name: 'West Cliff Rope', tip: 'Fastest drop—perfect after Dome/Control Tower runs.' },
      { name: 'South Maintenance Gate', tip: 'Vehicle cover but common ambushes; bring smokes.' },
      { name: 'Control Tower Rail', tip: 'Rooftop overwatch—verify roof is clear before extraction.' },
    ],
    routes: [
      {
        title: 'Battery blitz',
        steps: [
          'Sprint to Hydroponic Dome for dense batteries/components.',
          'Clear Control Tower weapon crates (2F) and machine rooms below.',
          'Slide to West Cliff Rope with smokes for cover.',
        ],
      },
      {
        title: 'Power corridor',
        steps: [
          'Enter Power Generation Complex for toolboxes and generator cabinets.',
          'Push into Research & Administration for electronics and quest items.',
          'Exit via Research Cable Car to avoid southern ambushes.',
        ],
      },
    ],
    lootFocus: [
      { title: 'Primary spots', items: ['Hydroponic Dome → Industrial batteries/electronics', 'Control Tower → Weapon crates/ARC parts', 'Power Generation → Large toolboxes'] },
      { title: 'Recommended kit', items: ['3x/4x scope for long sightlines', '2x smokes for cable car/rope', 'Weight mod for heavy loot hauls'] },
    ],
    proTips: [
      'Control rooftops before diving indoors—vertical fights decide control.',
      'Plan extraction before you’re overweight; don’t cross open yards full.',
      'For quests, run “Power Gen → Research → South Gate” for shortest loop.',
    ],
  },
  spaceport: {
    heroKicker: 'Acerra Spaceport',
    subheading: 'Layered terminals plus rocket assembly. Five extractions span runway, metro, and residential. High density of dog tags and industrial loot—expect heavy PvP.',
    stats: [
      { label: 'Players', value: '32-48' },
      { label: 'Extractions', value: '5' },
      { label: 'Best Loot', value: 'Dog Collars / Rusted Gears / Batteries' },
    ],
    extractions: [
      { name: 'Runway Gate', tip: 'Wide open; smoke/flash before sprinting.' },
      { name: 'Cargo Rail', tip: 'Tons of cover but ambush-heavy—clear close angles first.' },
      { name: 'Terminal Metro', tip: 'Indoor exit, safer; prepare for close quarters.' },
      { name: 'Rocket Assembly Roof', tip: 'Vertical climb—ensure stamina before committing.' },
      { name: 'Residential Shuttle Pad', tip: 'Best after farming dog tags in apartments.' },
    ],
    routes: [
      {
        title: 'Terminal loot → Metro exit',
        steps: [
          'Start Terminal B baggage; hit luggage racks/metal lockers.',
          'Push through shops for consumables and dog tags.',
          'Exit via Terminal Metro; smoke and clear tight corners.',
        ],
      },
      {
        title: 'Rocket assembly tech run',
        steps: [
          'Farm Rocket Assembly for industrial batteries and ARC modules.',
          'Hit Launch Platform weapon crates—mind vertical sightlines.',
          'Choose Cargo Rail or roof evac based on pressure.',
        ],
      },
    ],
    lootFocus: [
      { title: 'Terminal', items: ['Baggage → Dog tags/consumables', 'Counters/Security → Electronics', 'Shops → Meds/Food'] },
      { title: 'Industrial', items: ['Rocket Assembly → Batteries/Modules', 'Cargo → Gears/Metal', 'Launch Platform → Weapon crates'] },
    ],
    proTips: [
      'Runway is long sight—bring a scope and smokes to break vision.',
      'Residential dog-tag farming is fast; exit via Shuttle Pad afterward.',
      'Close-quarters everywhere—carry a shotgun/SMG backup.',
    ],
  },
  'buried-city': {
    heroKicker: 'Ancient Urban Zone',
    subheading: 'Tight urban ruins with constant alley fights. Vehicles and apartments are dense; Marano Station car park is the premier Rusted Gears spot, with dog tags and meds in nearby housing.',
    stats: [
      { label: 'Players', value: '24-32' },
      { label: 'Extractions', value: '3' },
      { label: 'Best Loot', value: 'Rusted Gears / Dog Collars / Quest Items' },
    ],
    extractions: [
      { name: 'East Tram', tip: 'Near Marano car park; watch for ambushes between vehicles.' },
      { name: 'Southern Highway', tip: 'Long sightlines from the overpass—mind snipers.' },
      { name: 'Canyon Rope', tip: 'Fastest for light kits; rope noise can give you away.' },
    ],
    routes: [
      {
        title: 'Car park gear loop',
        steps: [
          'Start at Marano Station parking; clear trunks for Rusted Gears.',
          'Rotate to Santa Maria Houses for dog tags and household loot.',
          'Exit via East Tram to avoid central crossfire.',
        ],
      },
      {
        title: 'Pharmacy quest line',
        steps: [
          'Hit Grandioso Apartments and both Pharmacies for meds/quest items.',
          'Swing by Red Tower for dog tags; stairwells are close-quarters.',
          'When heavy, leave via Southern Highway for cover and elevation.',
        ],
      },
    ],
    lootFocus: [
      { title: 'Housing/Pharmacy', items: ['Grandioso/Red Tower → Dog tags/household items', 'Pharmacy → ESR Analyzer/med kits'] },
      { title: 'Vehicles/Ruins', items: ['Marano car park → Rusted Gears', 'Street wrecks → Hardware/Fuel'] },
    ],
    proTips: [
      'Shotgun/SMG excels here—expect stairwell and alley ambushes.',
      'Quest items get heavy; plan to leave at half-full rather than full.',
      'Sound cues (metal/vehicle steps) reveal enemies; smokes save lives in tight lanes.',
    ],
  },
};

export function generateStaticParams() {
  return mapAreas.map((area) => ({ slug: area.id }));
}

export async function generateMetadata({ params }: MapPageProps) {
  const { slug: rawSlug } = await params;
  const slug = (rawSlug ?? '').trim().toLowerCase();
  const map = getMapArea(slug);

  if (!map) {
    return genMeta({
      title: 'Arc Raiders Map Guide',
      description: 'Arc Raiders interactive maps with loot, extractions, and farming routes.',
      canonical: `https://arcraiderscheatsheet.org/map/${slug || 'map'}`,
    });
  }

  return genMeta({
    title: `${map.name} Map Guide - Arc Raiders Loot & Extractions`,
    description: `${map.name} interactive map with loot routes, extraction points, key locations, and best farming items for Arc Raiders.`,
    keywords: [
      `${map.name} map`,
      `${map.name} arc raiders`,
      `${map.name} loot`,
      `${map.name} extraction points`,
      'arc raiders map',
      'arc raiders interactive map',
    ],
    canonical: `https://arcraiderscheatsheet.org/map/${map.id}`,
  });
}

export default async function MapDetailPage({ params }: MapPageProps) {
  const { slug: rawSlug } = await params;
  const slug = (rawSlug ?? '').trim().toLowerCase();
  const map = getMapArea(slug);

  if (!map) {
    return notFound();
  }

  const detail =
    mapDetails[map.id] ?? {
      heroKicker: '',
      subheading: map.description,
      stats: [],
      extractions: [],
      routes: [],
      lootFocus: [],
      proTips: [],
    };

  return (
    <div className="relative min-h-screen bg-black text-cyan-50">
      <MeasurePatchClient />
      <IframeAdBlocker />
      <div className="relative overflow-hidden border-b-2 border-cyan-500/30">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${map.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-[#020617]" aria-hidden />
        <div className="relative z-10 container mx-auto max-w-5xl px-4 py-6 md:py-8">
          <Link href="/map" className="text-sm font-semibold text-cyan-200 hover:text-cyan-50">
            &larr; Back to Arc Raiders maps
          </Link>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cyan-200/80">{detail.heroKicker}</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]">
              {map.name} Map Guide
            </span>
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-cyan-100/85 md:text-base">{detail.subheading}</p>
        </div>
      </div>

      <div className="relative z-10">
        <section className="py-4 md:py-2">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={map.embedUrl}
                  className="absolute top-0 left-0 h-full w-full border-0"
                  title={`${map.name} Map - Interactive ARC Raiders Map`}
                  allowFullScreen
                  allow="fullscreen"
                  style={{ minHeight: '400px' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {detail.stats.length > 0 && (
          <section className="py-6 md:py-10">
            <div className="container mx-auto max-w-5xl px-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {detail.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-cyan-500/25 bg-slate-900/70 px-4 py-3 shadow-sm shadow-cyan-900/30"
                  >
                    <div className="text-xs uppercase tracking-wide text-cyan-200/70">{stat.label}</div>
                    <div className="text-xl font-bold text-cyan-50">{stat.value}</div>
                    {stat.accent ? <div className="text-xs text-cyan-100/70">{stat.accent}</div> : null}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {detail.lootFocus.length > 0 && (
          <section className="py-6 md:py-10">
            <div className="container mx-auto max-w-5xl px-4">
              <h2 className="mb-3 text-2xl font-bold text-cyan-300">Loot priorities</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {detail.lootFocus.map((block) => (
                  <div key={block.title} className="rounded-lg border border-cyan-500/20 bg-slate-900/70 px-4 py-3 shadow-sm shadow-cyan-900/30">
                    <div className="text-sm font-semibold text-cyan-50">{block.title}</div>
                    <ul className="mt-2 space-y-1 text-xs text-cyan-100/75 list-disc list-inside">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-6 md:py-10">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-blue-500/25 bg-slate-950/60 p-4 shadow-sm shadow-blue-900/30">
                <h2 className="mb-3 text-xl font-bold text-cyan-300">Extraction planner</h2>
                <div className="space-y-3">
                  {detail.extractions.map((exit) => (
                    <div key={exit.name} className="rounded-lg border border-blue-500/30 bg-blue-950/30 px-3 py-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-cyan-50">{exit.name}</span>
                        <span className="text-xs text-cyan-100/70">Exit</span>
                      </div>
                      <p className="text-xs text-cyan-100/70">{exit.tip}</p>
                    </div>
                  ))}
                  {detail.extractions.length === 0 && (
                    <p className="text-xs text-cyan-100/70">Use the interactive map above to locate exits.</p>
                  )}
                </div>
              </div>
              <div className="rounded-xl border border-emerald-500/25 bg-slate-950/60 p-4 shadow-sm shadow-emerald-900/30">
                <h2 className="mb-3 text-xl font-bold text-cyan-300">Recommended routes</h2>
                <div className="space-y-3">
                  {detail.routes.map((route) => (
                    <div key={route.title} className="rounded-lg border border-emerald-500/30 bg-emerald-950/20 px-3 py-3">
                      <div className="text-sm font-semibold text-emerald-100">{route.title}</div>
                      <ul className="mt-2 space-y-1 text-xs text-emerald-50/80 list-disc list-inside">
                        {route.steps.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {detail.routes.length === 0 && (
                    <p className="text-xs text-cyan-100/70">Use the interactive map above to plan routes and exits.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {detail.proTips.length > 0 && (
          <section className="py-8 md:py-12 bg-gradient-to-r from-slate-950/60 via-blue-950/40 to-slate-950/60">
            <div className="container mx-auto max-w-5xl px-4">
              <h2 className="mb-4 text-2xl font-bold text-cyan-300">Pro tips</h2>
              <div className="space-y-2">
                {detail.proTips.map((tip, idx) => (
                  <div
                    key={tip}
                    className="flex items-start gap-2 rounded-lg border border-cyan-500/20 bg-slate-900/70 px-4 py-3 text-sm text-cyan-100/85"
                  >
                    <span className="text-cyan-200 font-semibold">#{idx + 1}</span>
                    <p className="leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-8 md:py-12">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-3 text-2xl font-bold text-cyan-300">Key locations</h2>
                <div className="space-y-3">
                  {map.keyLocations.map((location) => (
                    <div
                      key={location.name}
                      className="rounded-lg border border-cyan-500/20 bg-slate-900/70 px-4 py-3 shadow-sm shadow-cyan-900/30"
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-cyan-50">{location.name}</div>
                        <span className="rounded border border-blue-500/40 bg-blue-500/20 px-2 py-0.5 text-xs text-blue-200">
                          {location.tag}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-cyan-100/70">{location.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="mb-3 text-2xl font-bold text-cyan-300">Best farming items</h2>
                <div className="space-y-3">
                  {map.bestItems.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between rounded-lg border border-emerald-500/25 bg-slate-900/70 px-4 py-3 shadow-sm shadow-emerald-900/30"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">&#10003;</span>
                        <span className="text-sm font-semibold text-cyan-50">{item.name}</span>
                      </div>
                      <Link
                        href={`/#items?search=${encodeURIComponent(item.search)}`}
                        className="text-xs font-semibold text-emerald-200 underline decoration-emerald-400/60 underline-offset-4 hover:text-emerald-100"
                      >
                        View loot
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-cyan-500/20 bg-slate-950/60 px-4 py-3 text-sm text-cyan-100/80">
                  Rotate farming routes: {map.name} is best for{' '}
                  <span className="font-semibold text-emerald-200">{map.bestItems[0].name}</span>. Use the interactive map above to plan
                  spawns, PvP hotspots, and extraction paths.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
