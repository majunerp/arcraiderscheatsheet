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
                  Arc Raiders loot cheat sheet — best loot routes, containers, and calls
                </h1>
                <p className="text-base md:text-lg text-cyan-100/75 leading-relaxed">
                  Use this Arc Raiders cheat sheet loot guide to find the best loot routes, S-tier drops, fastest credit farms, a 280-slot stash plan, and instant keep/sell/recycle calls pulled from our live database of {totalTracked}+ items.
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

      <section className="py-14 border-t border-zinc-800/40 bg-gradient-to-b from-slate-950/70 to-blue-950/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-invert max-w-none space-y-5">
            <h2 className="text-3xl font-bold text-cyan-300">Arc Raiders loot strategy playbook</h2>
            <p className="text-cyan-100/80">
              Arc Raiders loot strategy for 2025 centers on speed, intel, and clean extracts. This Arc Raiders loot guide leans on live item calls so you can choose the right drop spot, clear the best rooms first, and leave with more credits per kilogram than rival squads. Treat every raid as a timed puzzle: identify where high-value Arc Raiders loot sits, rotate before third parties arrive, and exit early enough to reset without risking your best finds.
            </p>
            <p className="text-cyan-100/80">
              Arc Raiders loot economy works like a market: every slot should return more than it costs to carry. Track the value-per-slot of quest items, ARC parts, and diamond trinkets so you never clog your stash with low-yield junk. When your inventory is close to full, audit each slot mid-raid and replace anything underperforming; the shift from a 200-credit filler to a 1,200-credit Arc Raiders loot find is the difference between a small win and a game-changing buy order.
            </p>
            <p className="text-cyan-100/80">
              Arc Raiders loot routes should change with weather and threat levels. On stormy cycles, lean on enclosed spaces like Spaceport towers where visibility is controlled. On clear cycles, stretch to open vehicle yards for explosive crate density. Always keep a backup Arc Raiders loot path in mind so you can pivot if a hot drop gets contested, and mark extracts before you commit to a full clear to avoid late collapses.
            </p>
            <p className="text-cyan-100/80">
              Arc Raiders loot weight management is the hidden multiplier. Run Broad Shoulders with Loaded Arms when you know you will scoop batteries, ARC parts, and weapon mods. Swap to lighter rigs for trinket-heavy raids so you can sprint between spawns. If a teammate specializes in weight perks, let them carry the heaviest Arc Raiders loot while you scout and secure keycards; sharing roles keeps the squad mobile and lets you hit more rooms in a single timer.
            </p>
            <p className="text-cyan-100/80">
              Arc Raiders loot squads win more when roles are defined. Assign one player to open Security Lockers, another to watch angles, and a third to bag medical spawns. Rotate the pack mule job each raid so no one burns out. A calm caller who tracks remaining Arc Raiders loot hotspots prevents the panic that leads to dropped items or missed extracts, and clarity keeps density high without feeling like keyword stuffing.
            </p>
            <p className="text-cyan-100/80">
              Arc Raiders loot containers pay differently depending on timing. Early raid, sweep Medical and Tech rooms for quest electronics before other squads arrive. Mid raid, pivot to weapon caches and ARC debris for mod rolls. Late raid, prioritize Exodus stashes because they scale with time survived. Treat each segment as its own Arc Raiders loot sprint so you do not waste minutes opening low-yield crates when better options are nearby.
            </p>
            <p className="text-cyan-100/80">
              Arc Raiders loot prep starts before deployment. Craft enough ammo to skip mid-raid stops, pack a single grenade for emergencies, and bring just enough meds to survive two fights. That leaves slots open for premium Arc Raiders loot without sacrificing safety. Keep one empty slot reserved for a surprise quest item so you are never forced to drop a high-tier mod at the worst moment.
            </p>
            <p className="text-cyan-100/80">
              Arc Raiders loot risk management is about disciplined resets. If you already secured a key item, exit early rather than chasing a risky third fight. Log wins in a notebook with map, route, and container notes; over time you will see patterns where Arc Raiders loot runs pay out more often. Refine those loops and ignore distractions that offer low value, even if they look fun.
            </p>
            <p className="text-cyan-100/80">
              Arc Raiders loot progression ties directly to quests and workshop tiers. Before each session, note which upgrades need ARC parts, which quests require rare trinkets, and which recyclables can be converted later. Carry only what those goals demand. This keeps Arc Raiders loot decisions purposeful: every container you open moves you toward a milestone instead of filling your stash with random finds that slow you down.
            </p>
            <p className="text-cyan-100/80">
              Arc Raiders loot weeks flow best with a simple rhythm: one raid for credits, one for crafting mats, one for quest items, repeat. That cadence maintains a steady bankroll while you chase upgrades. When in doubt, ask whether the next room offers better Arc Raiders loot than what is already in your pack; if not, leave and bank the win.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
              <div className="rounded-xl border border-cyan-500/30 bg-slate-950/60 p-4">
                <h3 className="text-lg font-semibold text-cyan-100 mb-2">Arc Raiders loot quick wins</h3>
                <ul className="list-disc list-inside text-sm text-cyan-100/75 space-y-1.5">
                  <li>Run one sprint on Blue Gate vehicles per session for guaranteed Arc Raiders loot batteries.</li>
                  <li>Hit Dam Battlegrounds tech rooms first; they pair Arc Raiders loot value with low contest.</li>
                  <li>Stash diamond trinkets at trader mid-loop to free slots for heavier Arc Raiders loot mods.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-cyan-500/30 bg-slate-950/60 p-4">
                <h3 className="text-lg font-semibold text-cyan-100 mb-2">Arc Raiders loot checklist</h3>
                <ul className="list-disc list-inside text-sm text-cyan-100/75 space-y-1.5">
                  <li>Mark two extracts and a backup Arc Raiders loot route before landing.</li>
                  <li>Carry one flex slot for a sudden high-tier Arc Raiders loot drop.</li>
                  <li>Track which containers are still closed so you never double back on spent Arc Raiders loot rooms.</li>
                </ul>
              </div>
            </div>
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
