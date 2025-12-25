import Image from 'next/image';
import Link from 'next/link';

import { defaultKeywords, generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'Damage Leapers Trial Guide - ARC Raiders Best Score Route',
  description:
    'Damage Leapers Trial guide for ARC Raiders: loadout prep, Dam Battleground route, spawn anchors, and safe tactics to push 4,000+ score fast.',
  keywords: [
    ...defaultKeywords,
    'arc raiders damage leapers',
    'arc raiders trials guide',
    'arc raiders dam battleground',
    'arc raiders leaper strategy',
    'arc raiders score route',
  ],
  canonical: 'https://arcraiderscheatsheet.org/guides/damage-leapers',
  ogImage: '/guides/damage-leapers/hero.webp',
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
      { label: 'Trial focus', value: 'Damage Leapers (Trials rotation)' },
      { label: 'Best map', value: 'Dam Battlegrounds with 2x modifier' },
      { label: 'Score target', value: '4,000+ for 3-star rewards' },
      { label: 'Core loop', value: 'Control Tower base -> Water Treatment -> Hydrophonic Dome' },
    ].map((item) => (
      <div key={item.label} className="rounded-xl border border-cyan-400/25 bg-slate-950/70 px-4 py-3">
        <p className="text-xs uppercase tracking-[0.1em] text-cyan-200/70">{item.label}</p>
        <p className="mt-1 text-sm font-semibold text-cyan-50">{item.value}</p>
      </div>
    ))}
  </div>
);

export default function DamageLeapersGuide() {
  return (
    <article className="relative overflow-hidden bg-black text-cyan-50">
      <div className="absolute inset-0">
        <Image
          src="/guides/damage-leapers/hero.webp"
          alt="Damage Leapers trial overview"
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
            <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1">Dam Battlegrounds</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1">Dec 24, 2025</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-cyan-50">
            Damage Leapers: Best Score Strategy in ARC Raiders Trials
          </h1>
          <p className="mt-4 text-lg text-cyan-100/80">
            Damage Leapers is a Trials objective where fast routing matters more than raw DPS. This guide mirrors the best community
            route on Dam Battlegrounds so you can hit 4,000 score quickly or push leaderboard runs during 2x modifiers.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/map/dam-battlegrounds"
              className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(0,229,255,0.4)] transition hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)]"
            >
              Open Dam map
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
              Trials rotate weekly. Damage Leapers rewards score for destroying Leapers during a single raid. You can complete
              the 3-star requirement with only two Leaper kills, but the route below keeps spawns cycling for higher totals.
            </p>
            <StatGrid />
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Preparation checklist</h2>
            <Figure
              src="/guides/damage-leapers/banner.jpg"
              alt="Trials overview banner"
              caption="Trials rotate weekly; Damage Leapers shines during 2x score modifiers."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-cyan-500/25 bg-black/50 p-4">
                <h3 className="text-lg font-semibold text-cyan-50">Recommended kit</h3>
                <ul className="mt-3 space-y-2 text-sm text-cyan-100/80">
                  <li>Primary: Anvil IV or Tactical MK.2 for steady DPS.</li>
                  <li>Defense: Light Shield plus 5-10 Shield Rechargers.</li>
                  <li>Heals: 10-15 Bandages for extended loops.</li>
                  <li>Utility: 2-5 Smoke Grenades, 2-3 Ziplines.</li>
                  <li>Ammo: 160+ Heavy Ammo or equivalent energy stock.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-cyan-500/25 bg-black/50 p-4">
                <h3 className="text-lg font-semibold text-cyan-50">Premium options</h3>
                <ul className="mt-3 space-y-2 text-sm text-cyan-100/80">
                  <li>Hullcracker or Jupiter for burst damage.</li>
                  <li>Launcher Ammo or Energy Clips for heavy pressure.</li>
                  <li>Wolfpack Grenades to delete a Leaper quickly.</li>
                  <li>Blaze Grenades for safe burning damage over time.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Best map and scoring</h2>
            <p className="text-cyan-100/80">
              Dam Battlegrounds is the most efficient map for Damage Leapers, especially with any 2x Trial modifier. Daytime
              Leapers grant roughly 1,760 score each, while 2x modifiers push them closer to 3,500. Stack two kills for the
              4,000 score goal, then continue looping if you are aiming for leaderboard ranks.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Route for maximum score</h2>
            <Figure
              src="/guides/damage-leapers/route-overview.jpg"
              alt="Dam Battlegrounds route overview"
              caption="Anchor your loop at the Control Tower base; rotate to Water Treatment and Hydrophonic Dome."
            />
            <ol className="space-y-3 text-cyan-100/80">
              <li>
                <strong>Control Tower base:</strong> Start at the lower dam wall. From here you can see up to three Leaper
                spawn points and pull them with ranged fire.
              </li>
              <li>
                <strong>Water Treatment Extract:</strong> Climb the dam interior and clear the single Leaper that often spawns
                near the extract approach.
              </li>
              <li>
                <strong>Hydrophonic Dome Complex:</strong> Check the dome area from range. If a Bastion is present, skip and
                rotate back to the Control Tower base to refresh spawns.
              </li>
            </ol>
            <Figure
              src="/guides/damage-leapers/route-spawn.jpg"
              alt="Leaper spawn vantage"
              caption="Pull Leapers to the dam wall for safe kiting and clear sightlines."
            />
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">How to fight a Leaper</h2>
            <p className="text-cyan-100/80">
              Engage from range, then bait the Leaper into a doorway or dam wall angle. Stay outside its leap impact radius
              to avoid knockdowns and the AoE pulse. Focus fire on the center core, or stack Blaze Grenades and Impact
              Grenades for a fast takedown if you are under time pressure.
            </p>
            <Figure
              src="/guides/damage-leapers/leaper-close.jpg"
              alt="Leaper close combat"
              caption="Keep a safe gap, hold the corner, and burn the core for maximum damage."
            />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-50">Score expectations</h2>
            <p className="text-cyan-100/80">
              Two Leapers is enough for the weekly 3-star reward. Full loops can net 4,000 to 28,000 score depending on party
              size, 2x modifiers, and time left in raid. Keep the loop clean, avoid PvP detours, and extract once you hit the
              score you need.
            </p>
            <div className="rounded-2xl border border-cyan-500/25 bg-black/50 p-4 text-sm text-cyan-100/80">
              Tip: If PvP pressure spikes, drop Smoke, break line of sight, and rotate back to the dam wall. Survival keeps the
              Trial score intact.
            </div>
          </section>
        </main>
      </div>
    </article>
  );
}
