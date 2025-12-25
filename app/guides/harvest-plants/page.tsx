import Image from 'next/image';
import Link from 'next/link';

import { defaultKeywords, generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'Harvest Plants Trial Guide - ARC Raiders Best Score Route',
  description:
    'Harvest Plants Trial guide for ARC Raiders: Great Mullein farming, Buried City solo route, Spaceport squad path, and loadout prep to reach 4,000+ score fast.',
  keywords: [
    ...defaultKeywords,
    'arc raiders harvest plants',
    'arc raiders trials guide',
    'arc raiders great mullein',
    'arc raiders buried city route',
    'arc raiders spaceport route',
  ],
  canonical: 'https://arcraiderscheatsheet.org/guides/harvest-plants',
  ogImage: '/guides/harvest-plants/hero.webp',
});

const Figure = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <figure className="my-6 overflow-hidden rounded-2xl border border-cyan-500/25 bg-black/50 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
    <div className="relative aspect-video w-full">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width:1024px) 960px, 100vw" />
    </div>
    {caption && <figcaption className="px-4 py-3 text-xs text-cyan-100/75">{caption}</figcaption>}
  </figure>
);

const StatGrid = () => (
  <div className="mt-6 grid gap-3 rounded-2xl border border-cyan-500/25 bg-black/60 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.45)] md:grid-cols-2">
    {[
      { label: 'Trial focus', value: 'Harvest Plants (Trials rotation)' },
      { label: 'Best plant', value: 'Great Mullein clusters' },
      { label: 'Solo map', value: 'Buried City - Galleria floors' },
      { label: 'Squad map', value: 'Spaceport with any 2x modifier' },
    ].map((item) => (
      <div key={item.label} className="rounded-xl border border-cyan-400/25 bg-slate-950/70 px-4 py-3">
        <p className="text-xs uppercase tracking-[0.1em] text-cyan-200/70">{item.label}</p>
        <p className="mt-1 text-sm font-semibold text-cyan-50">{item.value}</p>
      </div>
    ))}
  </div>
);

export default function HarvestPlantsGuide() {
  return (
    <article className="relative overflow-hidden bg-black text-cyan-50">
      <div className="absolute inset-0">
        <Image
          src="/guides/harvest-plants/hero.webp"
          alt="Harvest Plants trial overview"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-slate-950" />
        <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <header className="container mx-auto max-w-4xl px-4 pt-14 pb-8 md:pt-18">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-100/80">
            <span className="rounded-full border border-cyan-500/40 bg-cyan-500/15 px-3 py-1">Trials</span>
            <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1">Buried City / Spaceport</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1">Dec 24, 2025</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-cyan-50">
            Harvest Plants: Best Score Strategy in ARC Raiders Trials
          </h1>
          <p className="mt-4 text-lg text-cyan-100/80">
            Harvest Plants is a Trials objective focused on gathering flora. Great Mullein provides the fastest score, and the
            Buried City Galleria route is the most efficient solo run. Squad teams can split Spaceport routes for massive scores
            during 2x modifiers.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/map/buried-city"
              className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(0,229,255,0.4)] transition hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)]"
            >
              Open Buried City map
            </Link>
            <Link
              href="/guides"
              className="rounded-lg border border-cyan-400/40 bg-black/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/70 hover:text-white"
            >
              Back to guides
            </Link>
          </div>
        </header>

        <main className="container mx-auto max-w-4xl px-4 pb-16 space-y-10">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-50">Trial overview</h2>
            <p className="text-cyan-100/80">
              Trials rotate weekly. Harvest Plants awards score for interacting with plant spawns, with Great Mullein providing
              the most reliable density. This guide maps solo and squad routes that reach the 4,000 score reward quickly and keep
              the loop safe from PvP pressure.
            </p>
            <StatGrid />
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Preparation checklist</h2>
            <Figure
              src="/guides/harvest-plants/banner.jpg"
              alt="Trials overview banner"
              caption="Harvest Plants favors movement speed and survivability while rotating between clusters."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-cyan-500/25 bg-black/50 p-4">
                <h3 className="text-lg font-semibold text-cyan-50">Recommended kit</h3>
                <ul className="mt-3 space-y-2 text-sm text-cyan-100/80">
                  <li>Primary: Anvil IV or Tactical MK.2 for small ARC clears.</li>
                  <li>Defense: Light Shield plus 5-10 Shield Rechargers.</li>
                  <li>Heals: 10-15 Bandages and 5-10 Adrenaline Shots.</li>
                  <li>Utility: 2-5 Smoke Grenades for safe crossings.</li>
                  <li>Ammo: 80+ Heavy Ammo or equivalent energy stock.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-cyan-500/25 bg-black/50 p-4">
                <h3 className="text-lg font-semibold text-cyan-50">Optional support</h3>
                <ul className="mt-3 space-y-2 text-sm text-cyan-100/80">
                  <li>Trigger Grenades for quick ARC clears.</li>
                  <li>Free Loadout is viable if you want zero risk.</li>
                  <li>Keep inventory light for faster movement.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Best maps</h2>
            <p className="text-cyan-100/80">
              Buried City is the best solo map because the Galleria floors are packed with Great Mullein. Spaceport becomes the
              best squad option because teams can split routes and cover the full map quickly. Any 2x modifier is helpful for
              scoreboard pushes.
            </p>
            <Figure
              src="/guides/harvest-plants/buried-city-map.jpg"
              alt="Buried City Harvest Plants route"
              caption="Buried City Galleria clusters Great Mullein for rapid solo scoring."
            />
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Solo route - Buried City</h2>
            <p className="text-cyan-100/80">
              Start at the Galleria and sweep every floor. Great Mullein is dense here, so one full clear often hits the 4,000
              score target. If time remains, expand to secondary spawn pockets shown on the map.
            </p>
            <Figure
              src="/guides/harvest-plants/galleria.jpg"
              alt="Galleria Great Mullein clusters"
              caption="The Galleria interior stacks plant spawns on multiple floors for fast Harvest Plants runs."
            />
            <ol className="space-y-3 text-cyan-100/80">
              <li>
                <strong>Galleria entry:</strong> clear the ground floor and staircases, then work upward for consecutive clusters.
              </li>
              <li>
                <strong>Upper floors:</strong> circle the perimeter to avoid ambush lines while gathering the remaining plants.
              </li>
              <li>
                <strong>Optional extensions:</strong> move to other Great Mullein pockets if the raid timer is still healthy.
              </li>
            </ol>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Duo and trio route - Spaceport</h2>
            <p className="text-cyan-100/80">
              Spaceport is strongest for squads because each teammate can cover a route segment. Assign zones, harvest the Great
              Mullein clusters, then regroup near the Launch Tower base before extraction.
            </p>
            <Figure
              src="/guides/harvest-plants/spaceport-route.jpg"
              alt="Spaceport Harvest Plants squad route"
              caption="Split Spaceport routes across teammates to maximize plant coverage and score."
            />
            <div className="rounded-2xl border border-cyan-500/25 bg-black/50 p-4 text-sm text-cyan-100/80">
              Tip: Keep one player near the Launch Tower base for the extra Great Mullein spawn, then regroup before extract.
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-50">Score expectations</h2>
            <p className="text-cyan-100/80">
              Galleria clears can reach the 4,000 score target on their own. Full Buried City or Spaceport rotations can push
              leaderboard totals, especially with 2x modifiers. Extract early once the weekly reward is secured if you are
              focused on efficiency.
            </p>
          </section>
        </main>
      </div>
    </article>
  );
}
