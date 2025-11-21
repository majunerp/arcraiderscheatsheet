import Link from 'next/link';
import Script from 'next/script';
import { generateMetadata as genMeta } from '@/lib/seo';
import { items } from '@/lib/items-data';
import { ItemImage } from '@/components/ItemImage';

export const metadata = genMeta({
  title: 'Arc Raiders Loot Cheat Sheet 2025 - Routes & Calls',
  description:
    'Arc Raiders loot cheat sheet with S-tier drops, fastest credit routes, 280-slot stash plan, and keep/sell/recycle calls. Map-specific paths to rank first.',
  keywords: [
    'arc raiders loot',
    'arc raiders loot cheat sheet',
    'arc raiders cheat sheet loot',
    'arc raiders inventory full',
    'arc raiders stash loadout',
    'arc raiders crafting materials',
    'arc raiders loot routes',
    'arc raiders best loot',
  ],
  canonical: 'https://arcraiderscheatsheet.org/loot',
});

const locationLabels: Record<string, string> = {
  industrial: 'Industrial',
  medical: 'Medical',
  security: 'Security',
  residential: 'Residential',
  old_world: 'Old World',
  commercial: 'Commercial',
  nature: 'Nature',
  electrical: 'Electrical',
};

const lootRoutes = [
  {
    title: 'Blue Gate Warehouse Loop',
    map: 'Blue Gate',
    payout: '40+ vehicles = Rusted Gears + Industrial Batteries every run',
    steps:
      'Drop west, sweep underground parking, clear double warehouses, extract at north pad to avoid late PvP.',
  },
  {
    title: 'Dam Battlegrounds Hydroponic Dome',
    map: 'Dam Battlegrounds',
    payout: 'Industrial Batteries + ARC parts near power relays',
    steps: 'Start at Dome, hit Control Tower lockers, rotate Power Generation Complex then eastern extract.',
  },
  {
    title: 'Spaceport Terminal Towers',
    map: 'Spaceport',
    payout: 'Security Lockers + Exodus caches for epic weapon mods',
    steps: 'Land at Terminal, clear towers top-down, check double pharmacies, bail via south runway rope extract.',
  },
  {
    title: 'Buried City Residential Sweep',
    map: 'Buried City',
    payout: 'Dog Collars + quest trinkets while staying light',
    steps: 'Farm apartments and Red Tower, skip heavy fights, resupply at marina extract.',
  },
];

const containerPriorities = [
  {
    name: 'Security Lockers',
    value: 'Highest credits per slot. Focus on Spaceport towers, Dam hangars, and power rooms. Security Breach perk or keycards required.',
  },
  {
    name: 'Weapon/ARC Caches',
    value: 'Drop weapon mods, ARC parts, and rare attachments. Hit military rail spawns, rocket assembly, and crashed ARC sites.',
  },
  {
    name: 'Exodus Stashes',
    value: 'Player-saved loot with peak volatility. Check stairwells, rooftop corners, and hidden rooms for instant upgrades.',
  },
  {
    name: 'Medical & Tech Rooms',
    value: 'Best for ESR Analyzers, quest electronics, and high-yield recyclables. Prioritize research labs, pharmacies, and server rooms.',
  },
];

const faq = [
  {
    q: 'What is the fastest Arc Raiders loot route right now?',
    a: 'Blue Gate Warehouse Loop is fastest: 40+ vehicle searches in one sweep for Rusted Gears and Batteries. Extract north to avoid PvP and repeat.',
  },
  {
    q: 'How do I avoid filling my stash in Arc Raiders?',
    a: 'Keep only quest items and S-tier ARC parts, sell diamond trinkets, recycle bulk electronics at the hideout, and use Broad Shoulders + Loaded Arms to stretch capacity.',
  },
  {
    q: 'Which containers have the best loot in Arc Raiders?',
    a: 'Security Lockers and ARC/weapon caches have the highest credit-per-slot. Exodus stashes are volatile but can roll epic mods. Tech rooms are best for quest electronics.',
  },
  {
    q: 'What should I sell first in Arc Raiders?',
    a: 'Sell diamond-marked trinkets (Playing Cards, Music Album, Statuette) and duplicate consumables. Keep ARC parts and any item tagged for quests or upgrades.',
  },
];

const sTierItems = items
  .filter((item) => item.valueTier === 'S')
  .sort((a, b) => b.value - a.value)
  .slice(0, 9);

const sellFirstItems = items
  .filter((item) => item.action === 'sell')
  .sort((a, b) => b.value - a.value)
  .slice(0, 8);

const keepForUpgrades = items
  .filter((item) => item.action === 'keep')
  .sort((a, b) => (b.value || 0) - (a.value || 0))
  .slice(0, 8);

const totalTracked = items.length;
const questCount = items.filter((i) => i.category === 'quest_items').length;
const arcPartsCount = items.filter((i) => i.category === 'arc_parts').length;

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
};

export default function LootPage() {

  return (
    <div className="w-full">
      <section className="relative overflow-hidden pb-12 pt-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" aria-hidden="true" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10 space-y-8">
          <div className="bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-blue-950/40 border border-cyan-500/30 rounded-2xl p-6 md:p-10 shadow-[0_20px_80px_rgba(0,229,255,0.15)]">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="space-y-4 max-w-3xl">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
                  Arc Raiders Loot Cheat Sheet 2025
                </p>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight text-cyan-50">
                  Rank on page one with the most complete Arc Raiders loot cheat sheet
                </h1>
                <p className="text-base md:text-lg text-cyan-100/75 leading-relaxed">
                  Search trends show <strong>"arc raiders cheat sheet loot"</strong> surging. This page is built to
                  win that query: S-tier drops, fastest credit farms, 280-slot stash plan, and instant keep/sell/recycle
                  calls pulled from our live database of {totalTracked}+ items.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/#items"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg border border-cyan-400/60 hover:from-cyan-400 hover:to-blue-400 transition-all shadow-[0_10px_40px_rgba(0,229,255,0.35)]"
                  >
                    Open item database
                  </Link>
                  <Link
                    href="/map"
                    className="inline-block px-6 py-3 bg-white/5 text-cyan-100 font-semibold rounded-lg border border-cyan-400/30 hover:border-cyan-300/60 transition-all"
                  >
                    See loot maps
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:w-72">
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                  <div className="text-sm text-cyan-200/70">Tracked items</div>
                  <div className="text-2xl font-semibold text-cyan-100">{totalTracked}+</div>
                  <p className="text-xs text-cyan-100/60 mt-1">Live keep/sell/recycle calls</p>
                </div>
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                  <div className="text-sm text-blue-200/70">Quest items</div>
                  <div className="text-2xl font-semibold text-blue-100">{questCount}</div>
                  <p className="text-xs text-blue-100/60 mt-1">Never sell by mistake</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                  <div className="text-sm text-emerald-200/70">ARC parts</div>
                  <div className="text-2xl font-semibold text-emerald-100">{arcPartsCount}</div>
                  <p className="text-xs text-emerald-100/60 mt-1">All hotspots listed</p>
                </div>
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <div className="text-sm text-amber-200/70">Weight fixes</div>
                  <div className="text-2xl font-semibold text-amber-100">280</div>
                  <p className="text-xs text-amber-100/60 mt-1">Slot plan to stop "inventory full"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-cyan-500/30">
              <h2 className="text-lg font-semibold text-cyan-100 mb-2">Why this outranks other loot sheets</h2>
              <ul className="list-disc list-inside text-sm text-cyan-100/75 space-y-1.5">
                <li>Live keep/sell/recycle labels for every item, not just top loot headlines.</li>
                <li>Route-specific guidance by map with containers prioritized for credit-per-slot.</li>
                <li>Inventory plan for 280-slot stash and weight perks to stop mid-raid drops.</li>
                <li>Structured data (FAQ) and internal linking to map, workshop, and recycling pages.</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-cyan-500/30">
              <h2 className="text-lg font-semibold text-cyan-100 mb-2">Playbook at a glance</h2>
              <ul className="list-disc list-inside text-sm text-cyan-100/75 space-y-1.5">
                <li>Early raids: prioritize ARC parts, Dog Collars, Industrial Batteries; avoid heavy trinkets.</li>
                <li>Mid game: farm Security Lockers with Security Breach perk; craft Scrappy II for better drops.</li>
                <li>Late game: Blue Gate loop for Rusted Gears, Spaceport towers for weapon mods, recycle excess tech.</li>
                <li>Between raids: empty diamond trinkets to trader, recycle electronics, craft ammo in workshop.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-zinc-800/40 bg-gradient-to-b from-slate-950/60 to-blue-950/30">
        <div className="container mx-auto px-4 max-w-6xl space-y-8">
          <header className="space-y-3">
            <p className="text-sm text-cyan-300/80 uppercase tracking-[0.2em]">S-tier loot</p>
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-50">Keep items you should never sell</h2>
            <p className="text-cyan-100/70 max-w-3xl">
              These Arc Raiders loot pieces unlock hideout upgrades or endgame crafting. Keep them even if traders
              offer big credits.
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sTierItems.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-cyan-500/30 bg-slate-950/70 p-4 shadow-[0_10px_40px_rgba(0,229,255,0.12)]"
              >
                <div className="flex items-start gap-3">
                  <ItemImage
                    src={item.image}
                    alt={item.name}
                    width={72}
                    height={72}
                    rarity={item.rarity}
                    className="w-16 h-16 rounded-lg bg-slate-900 border border-cyan-500/20"
                  />
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wide text-cyan-300/80">S-tier</div>
                    <h3 className="text-lg font-semibold text-cyan-50">{item.name}</h3>
                    <p className="text-sm text-cyan-100/70">{item.description}</p>
                    {item.usedFor && (
                      <p className="text-xs text-cyan-200/70">Used for: {item.usedFor.join(', ')}</p>
                    )}
                    <p className="text-xs text-cyan-200/80">Value: {item.value} credits</p>
                    <div className="flex flex-wrap gap-2">
                      {(item.locationTypes || []).slice(0, 3).map((loc) => (
                        <span
                          key={loc}
                          className="text-[11px] px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-100/80"
                        >
                          {locationLabels[loc] || loc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-zinc-800/40">
        <div className="container mx-auto px-4 max-w-6xl space-y-8">
          <header className="space-y-3">
            <p className="text-sm text-amber-300/80 uppercase tracking-[0.2em]">Fast credits</p>
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-50">Sell these first when stash is full</h2>
            <p className="text-cyan-100/70 max-w-3xl">
              Diamond-marked trinkets and duplicate consumables convert to instant cash. Sell these before they choke
              your 280-slot stash.
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sellFirstItems.map((item) => (
              <div key={item.id} className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
                <div className="flex items-start gap-3">
                  <ItemImage
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    rarity={item.rarity}
                    className="w-14 h-14 rounded-lg bg-slate-900 border border-amber-500/30"
                  />
                  <div className="space-y-1">
                    <div className="text-[11px] uppercase tracking-wide text-amber-300">Sell</div>
                    <h3 className="text-base font-semibold text-amber-100">{item.name}</h3>
                    <p className="text-xs text-amber-100/80">{item.description}</p>
                    <p className="text-xs text-amber-100/70">Value: {item.value} credits</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-cyan-500/30 text-sm text-cyan-100/80">
            Pro move: sell these at traders, then recycle electronics and ARC junk in your hideout for better yields.
            Check the <Link href="/recycling" className="text-cyan-300 underline">Recycling guide</Link> for exact
            conversions.
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-zinc-800/40 bg-gradient-to-b from-blue-950/40 to-slate-950/50">
        <div className="container mx-auto px-4 max-w-6xl space-y-8">
          <header className="space-y-3">
            <p className="text-sm text-emerald-300/80 uppercase tracking-[0.2em]">Crafting and quests</p>
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-50">Keep for upgrades and hideout progress</h2>
            <p className="text-cyan-100/70 max-w-3xl">
              These items gate your workshop tiers, medical bay, or key quests. Never drop or sell them.
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keepForUpgrades.map((item) => (
              <div key={item.id} className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <ItemImage
                      src={item.image}
                      alt={item.name}
                      width={56}
                      height={56}
                      rarity={item.rarity}
                      className="w-12 h-12 rounded-lg bg-slate-900 border border-emerald-500/30"
                    />
                    <div>
                      <div className="text-[11px] uppercase tracking-wide text-emerald-300">Keep</div>
                      <h3 className="text-base font-semibold text-emerald-50">{item.name}</h3>
                      <p className="text-xs text-emerald-100/70">Value: {item.value} credits</p>
                    </div>
                  </div>
                  <p className="text-sm text-emerald-100/80">{item.description}</p>
                  {item.usedFor && (
                    <p className="text-xs text-emerald-200/80">Needed for: {item.usedFor.join(', ')}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lootRoutes.map((route) => (
              <div key={route.title} className="rounded-xl border border-cyan-500/30 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-cyan-300/80">{route.map}</div>
                    <h3 className="text-lg font-semibold text-cyan-50">{route.title}</h3>
                  </div>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-100/80">
                    {route.payout}
                  </span>
                </div>
                <p className="text-sm text-cyan-100/75 mt-2">{route.steps}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-zinc-800/40">
        <div className="container mx-auto px-4 max-w-6xl space-y-8">
          <header className="space-y-3">
            <p className="text-sm text-cyan-300/80 uppercase tracking-[0.2em]">Containers first</p>
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-50">Open these before anything else</h2>
            <p className="text-cyan-100/70 max-w-3xl">
              Prioritize containers with the best credit-per-slot and highest chance of epic mods. This cuts wasted
              time and keeps you ahead of competing squads.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {containerPriorities.map((container) => (
              <div key={container.name} className="rounded-xl border border-cyan-500/30 bg-slate-950/70 p-4">
                <h3 className="text-lg font-semibold text-cyan-100">{container.name}</h3>
                <p className="text-sm text-cyan-100/75 mt-1">{container.value}</p>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-cyan-500/30 text-sm text-cyan-100/80">
            Tip: run with teammates so one carries keycards while another packs ammo and grenades. This keeps your
            stash lean but lets you unlock every high-yield locker you encounter.
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-zinc-800/40 bg-gradient-to-b from-blue-950/30 to-slate-950/50">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <header className="space-y-2 text-center">
            <p className="text-sm text-cyan-300/80 uppercase tracking-[0.2em]">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-50">Arc Raiders loot questions, answered</h2>
            <p className="text-cyan-100/70">
              Clear answers for the hottest searches so you can loot faster and rank higher.
            </p>
          </header>
          <div className="space-y-4">
            {faq.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-cyan-500/30 bg-slate-950/70 p-4 shadow-[0_8px_32px_rgba(0,229,255,0.12)]"
              >
                <h3 className="text-lg font-semibold text-cyan-100">{item.q}</h3>
                <p className="text-sm text-cyan-100/75 mt-2">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-cyan-100/70">
            Still looking for a specific item? Jump to the{' '}
            <Link href="/#items" className="text-cyan-300 underline">
              full Arc Raiders item database
            </Link>{' '}
            or check the{' '}
            <Link href="/workshop" className="text-cyan-300 underline">
              workshop recipes
            </Link>{' '}
            to see how each drop fits into your build.
          </div>
        </div>
      </section>

      <Script
        id="loot-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
