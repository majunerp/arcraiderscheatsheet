import Image from 'next/image';
import Link from 'next/link';

import { defaultKeywords, generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'Search First Wave Husks Trial Guide - ARC Raiders Best Score Route',
  description:
    'Search First Wave Husks Trial guide for ARC Raiders: scoring rules, Dam Battleground routes, solo vs squad paths, and loadout prep to reach 4,000+ score fast.',
  keywords: [
    ...defaultKeywords,
    'arc raiders search first wave husks',
    'arc raiders trials guide',
    'arc raiders dam battleground',
    'arc raiders husk route',
    'arc raiders score route',
  ],
  canonical: 'https://arcraiderscheatsheet.org/guides/search-first-wave-husks',
  ogImage: '/guides/search-first-wave-husks/hero.webp',
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
      { label: 'Trial focus', value: 'Search First Wave Husks (Trials rotation)' },
      { label: 'Best map', value: 'Dam Battlegrounds with Electromagnetic Storm' },
      { label: 'Score target', value: '4,000+ for weekly 3-star rewards' },
      { label: 'Scoring note', value: 'Searching an already-open Husk still counts' },
    ].map((item) => (
      <div key={item.label} className="rounded-xl border border-cyan-400/25 bg-slate-950/70 px-4 py-3">
        <p className="text-xs uppercase tracking-[0.1em] text-cyan-200/70">{item.label}</p>
        <p className="mt-1 text-sm font-semibold text-cyan-50">{item.value}</p>
      </div>
    ))}
  </div>
);

export default function SearchFirstWaveHusksGuide() {
  return (
    <article className="relative overflow-hidden bg-black text-cyan-50">
      <div className="absolute inset-0">
        <Image
          src="/guides/search-first-wave-husks/hero.webp"
          alt="Search First Wave Husks trial overview"
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
            Search First Wave Husks: Best Score Strategy in ARC Raiders Trials
          </h1>
          <p className="mt-4 text-lg text-cyan-100/80">
            Search First Wave Husks is a Trials objective about speed and routing. You score for every Husk you search, even if
            another Raider already opened it. This guide focuses on Dam Battlegrounds routes that hit the 4,000 score goal fast
            and keep spawns flowing during Electromagnetic Storm.
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
              Trials rotate weekly. Search First Wave Husks rewards score for each Husk you search during a single raid. This is
              one of the easiest Trials to clear because opened Husks still count. The route below keeps you moving through the
              highest density spawns on Dam Battlegrounds.
            </p>
            <StatGrid />
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Preparation checklist</h2>
            <Figure
              src="/guides/search-first-wave-husks/banner.jpg"
              alt="Trials overview banner"
              caption="Search First Wave Husks favors speed, stamina, and safe rotations between clusters."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-cyan-500/25 bg-black/50 p-4">
                <h3 className="text-lg font-semibold text-cyan-50">Recommended kit</h3>
                <ul className="mt-3 space-y-2 text-sm text-cyan-100/80">
                  <li>Primary: Anvil IV or Tactical MK.2 for quick ARC clears.</li>
                  <li>Defense: Light Shield plus 5-10 Shield Rechargers.</li>
                  <li>Heals: 10-15 Adrenaline Shots, 15+ Bandages.</li>
                  <li>Utility: 2-5 Smoke Grenades for safe crossings.</li>
                  <li>Ammo: 80+ Heavy Ammo or equivalent energy stock.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-cyan-500/25 bg-black/50 p-4">
                <h3 className="text-lg font-semibold text-cyan-50">Scoring tips</h3>
                <ul className="mt-3 space-y-2 text-sm text-cyan-100/80">
                  <li>Each Husk is worth 800 score during 2x modifiers.</li>
                  <li>Electromagnetic Storm boosts Husk spawn rate.</li>
                  <li>You do not need to be first to breach a Husk.</li>
                  <li>Focus on Husks, skip PvP unless forced.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Best map and modifier</h2>
            <p className="text-cyan-100/80">
              Dam Battlegrounds has the highest density of First Wave Husks, and Electromagnetic Storm is the best modifier for
              this Trial thanks to the boosted spawn rate. Aim for two full loops to hit 4,000 score if you do not see many early
              Husks.
            </p>
            <Figure
              src="/guides/search-first-wave-husks/map-husks.jpg"
              alt="Dam Battlegrounds husk map"
              caption="Dam Battlegrounds concentrates the most reliable Husk clusters for Trials runs."
            />
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Solo route</h2>
            <p className="text-cyan-100/80">
              Solo Raiders can follow one full loop to secure the 4,000 score reward, or run both branches if the raid timer and
              Adrenaline Shots allow. If you only need the weekly reward, one clean route is enough.
            </p>
            <Figure
              src="/guides/search-first-wave-husks/route-solo.jpg"
              alt="Search First Wave Husks solo route"
              caption="Solo route for fast 3-star score; use Adrenaline Shots to keep the pace high."
            />
            <ol className="space-y-3 text-cyan-100/80">
              <li>
                <strong>Start near the dam wall:</strong> clear the closest Husk cluster and scan any open ones for free score.
              </li>
              <li>
                <strong>Push the outer loop:</strong> follow the outskirts for additional spawns with minimal PvP pressure.
              </li>
              <li>
                <strong>Reset through the center:</strong> only cross mid-dam if the storm is active and you can outrun threats.
              </li>
            </ol>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Duo and trio route</h2>
            <p className="text-cyan-100/80">
              Split the loop with teammates to cover both sides of the dam. One Raider should sweep closer to the center during
              Electromagnetic Storm to catch bonus spawns. This method can reach 50,000+ score on long raids with clean rotations.
            </p>
            <Figure
              src="/guides/search-first-wave-husks/route-squad.jpg"
              alt="Search First Wave Husks squad route"
              caption="Duo or trio routes split the dam for higher spawn coverage and score bursts."
            />
            <div className="rounded-2xl border border-cyan-500/25 bg-black/50 p-4 text-sm text-cyan-100/80">
              Tip: Call out open Husks in voice chat. Every teammate can search them for score, so do not skip already-breached
              targets.
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-50">Score expectations</h2>
            <p className="text-cyan-100/80">
              Five Husks during a 2x modifier equals the 4,000 score reward. With Electromagnetic Storm active and a full raid
              timer, organized squads can push far beyond the weekly reward threshold. Extract early once you lock the score if
              you are farming only the 3-star reward.
            </p>
          </section>
        </main>
      </div>
    </article>
  );
}
