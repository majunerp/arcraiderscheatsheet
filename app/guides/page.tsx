import Image from 'next/image';
import Link from 'next/link';

import { guidesData, type GuideEntry } from '@/lib/guides-data';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'Arc Raiders Guides 2025 - Expedition Routes, Puzzles & Patch Notes',
  description:
    'Arc Raiders guide hub built from community-proven routes: Humidifiers, Lightbulbs, Cooling Fans, Cat Beds, Medical Kits, Lab Reagents, Rocketeer Drivers, Hidden Bunker puzzle, and November patch intel.',
  keywords: [
    'arc raiders guide',
    'arc raiders humidifier',
    'arc raiders lightbulb',
    'arc raiders cooling fan',
    'arc raiders cat bed',
    'arc raiders medical kit',
    'arc raiders laboratory reagents',
    'arc raiders rocketeer driver',
    'arc raiders hidden bunker puzzle',
    'arc raiders patch notes',
  ],
  canonical: 'https://arcraiderscheatsheet.org/guides',
});

export default function GuidesPage() {
  const farmingGuides = guidesData.filter((guide) => guide.category === 'Farming');
  const updateGuides = guidesData.filter((guide) => guide.category === 'Update');
  const puzzleGuides = guidesData.filter((guide) => guide.category === 'Puzzle');

  const spotlightGuides = farmingGuides.slice(0, 4);
  const expeditionSlugs = new Set([
    'where-to-find-humidifier-arc-raiders',
    'where-to-find-lightbulbs-arc-raiders',
    'where-to-find-cooling-fans-arc-raiders',
    'very-comfortable-pillow-and-cat-bed-in-arc-raiders',
    'where-to-find-rusted-shut-medical-kit-in-arc-raiders',
    'where-to-find-laboratory-reagents-arc-raiders',
    'easiest-way-to-get-rocketeer-driver-arc-raiders',
  ]);
  const expeditionGuides = farmingGuides.filter((guide) => expeditionSlugs.has(guide.slug));
  const manualQuestGuide: GuideEntry = {
    slug: 'the-stench-of-corruption-arc-raiders-quest-guide',
    title: 'The Stench of Corruption ARC Raiders Quest Guide',
    category: 'Farming',
    date: 'Dec 17, 2025',
    summary:
      'Complete the single-run Spaceport quest: grab the Staff Room key in the Departure Building, drop into tunnels, and override the Flushing Terminal to earn the Warden outfit.',
    image: '/guides/stench-corruption/hero.jpg',
    map: 'Spaceport',
    need: 'Quest rewards: Warden Outfit, Dam Staff Room Key, Air Freshener, Noisemaker x3',
    highlights: [
      'Southwest lobby of Departure Building → downstairs Staff Locker Room → hazmat rack key.',
      'Enter tunnels near Launch Towers and follow west to a flashing Flushing Terminal.',
      'Single life quest—stash the key fast and avoid PvP to prevent restart.',
    ],
  };
  const allGuidesWithQuest: GuideEntry[] = [manualQuestGuide, ...guidesData];
  const guideHref = (guide: GuideEntry) =>
    guide.slug === 'very-comfortable-pillow-and-cat-bed-in-arc-raiders'
      ? '/guides/pillow-arc-raiders'
      : `/guides/${guide.slug}`;

  return (
    <div className="relative min-h-screen w-full bg-black text-cyan-50">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/guides.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
        }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/90" />
      </div>

      <div className="relative z-10">
        <section className="border-b-2 border-cyan-500/30 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.08em] text-cyan-200/80 shadow-[0_0_25px_rgba(0,229,255,0.2)]">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,229,255,0.6)]" />
                  Expedition Project routes · Patch-safe tactics
                </div>
                <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,229,255,0.6)]">
                    Arc Raiders Guides, Routes & Patch Intel
                  </span>
                </h1>
                <p className="text-lg text-cyan-100/80 md:text-xl">
                  Curated from the latest Arc Raiders community guides: rare material routes, Expedition Project checklists, puzzle solutions, and November balance changes. Everything here ties back to the items, recycling, maps, and workshop data on this site so you can act fast in 2025 raids.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-cyan-500/15 px-4 py-2 text-xs font-semibold text-cyan-100/90 border border-cyan-400/30">
                    Humidifiers · Lightbulbs · Cooling Fans
                  </span>
                  <span className="rounded-full bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-100/90 border border-blue-400/30">
                    Cat Beds · Med Kits · Lab Reagents
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100/90 border border-emerald-400/30">
                    Hidden Bunker · Rocketeer Drivers
                  </span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#rare-materials"
                    className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(0,229,255,0.4)] transition hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)]"
                  >
                    See priority routes
                  </Link>
                  <Link
                    href="/loot"
                    className="rounded-lg border border-cyan-400/40 bg-black/50 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/70 hover:text-white"
                  >
                    Open loot cheat sheet
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-slate-950/70 via-blue-950/50 to-slate-950/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <div className="rounded-xl border border-cyan-500/30 bg-black/50 px-4 py-3">
                  <div className="text-xs uppercase tracking-wide text-cyan-200/70">Guides mirrored</div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-cyan-100">12</span>
                    <span className="text-sm text-cyan-100/70">high-signal posts parsed</span>
                  </div>
                </div>
                <div className="rounded-xl border border-blue-500/30 bg-black/50 px-4 py-3">
                  <div className="text-xs uppercase tracking-wide text-blue-200/70">Expedition focus</div>
                  <div className="text-sm text-blue-100/80">
                    Humidifiers, Lightbulbs, Cooling Fans, Medical Kits, Lab Reagents, Rocketeer Drivers all have routes and backups.
                  </div>
                </div>
                <div className="rounded-xl border border-emerald-500/30 bg-black/50 px-4 py-3">
                  <div className="text-xs uppercase tracking-wide text-emerald-200/70">Patch-aware</div>
                  <div className="text-sm text-emerald-100/80">
                    November 1.2–1.4 updates summarized so your loadouts and routes stay legal post-fixes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="rare-materials" className="py-14 md:py-16">
          <div className="container mx-auto max-w-6xl px-4 space-y-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.12em] text-cyan-200/70">Priority pulls</p>
                <h2 className="text-3xl font-bold text-cyan-50 md:text-4xl">Rare Material Spotlights</h2>
                <p className="text-cyan-100/75">
                  Fastest, low-risk paths for Expedition Project parts and Scrappy upgrades pulled straight from the reference guides.
                </p>
              </div>
              <Link
                href="/map"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white"
              >
                Open interactive maps
                <span aria-hidden className="text-lg">→</span>
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {spotlightGuides.map((guide) => {
                const isDecember = guide.date.startsWith('Dec');
                const cardClass =
                  'group block overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-slate-950/70 via-blue-950/50 to-slate-950/70 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition hover:border-cyan-300/60 hover:shadow-[0_25px_70px_rgba(0,229,255,0.15)]';
                const cardContent = (
                  <>
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(min-width: 1024px) 540px, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      <div className="absolute left-4 top-3 flex flex-wrap gap-2 text-[11px] font-semibold text-cyan-50">
                        <span className="rounded-full bg-cyan-500/80 px-3 py-1 text-black shadow-[0_0_20px_rgba(0,229,255,0.6)]">
                          {guide.category}
                        </span>
                        {guide.map && (
                          <span className="rounded-full bg-black/70 px-3 py-1 text-cyan-100/80 border border-cyan-400/40">
                            {guide.map}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="space-y-3 p-5">
                      <p className="text-xs uppercase tracking-wide text-cyan-200/70">{guide.date}</p>
                      <h3 className="text-xl font-semibold text-cyan-50">{guide.title}</h3>
                      <p className="text-cyan-100/75">{guide.summary}</p>
                      {guide.need && (
                        <div className="rounded-lg border border-cyan-400/30 bg-black/30 px-3 py-2 text-sm font-semibold text-cyan-100">
                          Need: {guide.need}
                        </div>
                      )}
                      <ul className="space-y-2 text-sm text-cyan-100/80">
                        {guide.highlights.slice(0, 3).map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,229,255,0.7)]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                );

                const href = guideHref(guide);
                return isDecember ? (
                  <Link key={guide.slug} href={href} className={cardClass}>
                    {cardContent}
                  </Link>
                ) : (
                  <article key={guide.slug} className={cardClass}>
                    {cardContent}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-cyan-500/20 bg-black/50 py-14 md:py-16">
          <div className="container mx-auto max-w-6xl px-4 space-y-8">
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-[0.12em] text-cyan-200/70">Expedition project</p>
              <h2 className="text-3xl font-bold text-cyan-50 md:text-4xl">Upgrade Checklist & Backups</h2>
              <p className="text-cyan-100/75">
                Everything you need for Expedition Project steps and crafting stations, with fallback routes if the main spot is contested.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {expeditionGuides.map((guide) => {
                const isDecember = guide.date.startsWith('Dec');
                const cardClass =
                  'group flex flex-col rounded-xl border border-cyan-500/25 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/70 p-4 shadow-[0_12px_35px_rgba(0,0,0,0.45)] transition hover:border-cyan-300/50 hover:shadow-[0_18px_50px_rgba(0,229,255,0.12)]';
                const cardContent = (
                  <>
                    <div className="relative mb-3 h-36 overflow-hidden rounded-lg">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        sizes="(min-width: 1024px) 240px, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute left-3 top-3 flex items-center gap-2 text-[11px] font-semibold">
                        <span className="rounded-full bg-cyan-500/90 px-3 py-1 text-black shadow-[0_0_18px_rgba(0,229,255,0.4)]">
                          {guide.category}
                        </span>
                        {guide.map && <span className="rounded-full bg-black/60 px-3 py-1 text-cyan-100/80">{guide.map}</span>}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col space-y-2">
                      <p className="text-[11px] uppercase tracking-wide text-cyan-200/70">{guide.date}</p>
                      <h3 className="text-lg font-semibold text-cyan-50">{guide.title}</h3>
                      <p className="text-sm text-cyan-100/70">{guide.summary}</p>
                      {guide.need && (
                        <div className="rounded-lg border border-cyan-400/30 bg-black/30 px-3 py-2 text-xs font-semibold text-cyan-100">
                          {guide.need}
                        </div>
                      )}
                      <ul className="space-y-2 text-sm text-cyan-100/80">
                        {guide.highlights.slice(0, 2).map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                );
                const href = guideHref(guide);
                return isDecember ? (
                  <Link key={guide.slug} href={href} className={cardClass}>
                    {cardContent}
                  </Link>
                ) : (
                  <article key={guide.slug} className={cardClass}>
                    {cardContent}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16">
          <div className="container mx-auto max-w-6xl px-4 space-y-8">
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-[0.12em] text-cyan-200/70">Patch & event intel</p>
              <h2 className="text-3xl font-bold text-cyan-50 md:text-4xl">November Updates in One Pass</h2>
              <p className="text-cyan-100/75">
                Loadout-impacting changes and event beats pulled from 1.2.0, 1.3.0, and 1.4.0 notes plus the North Line deep dive.
              </p>
            </div>

            <div className="relative grid gap-6 md:grid-cols-2">
              {updateGuides.map((guide) => {
                const isDecember = guide.date.startsWith('Dec');
                const cardClass =
                  'group flex flex-col rounded-xl border border-cyan-500/25 bg-gradient-to-b from-slate-950/70 via-blue-950/40 to-slate-950/70 p-5 shadow-[0_16px_45px_rgba(0,0,0,0.5)] transition hover:border-cyan-300/50';
                const cardContent = (
                  <>
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-xs font-semibold uppercase tracking-wide text-cyan-200/70">{guide.date}</div>
                      <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-[11px] font-semibold text-cyan-100/90">
                        {guide.category}
                      </span>
                    </div>
                    <div className="mt-3 flex items-start gap-3">
                      <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-cyan-500/40 bg-black/50">
                        <Image
                          src={guide.image}
                          alt={guide.title}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-cyan-50">{guide.title}</h3>
                        <p className="text-sm text-cyan-100/75">{guide.summary}</p>
                      </div>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-cyan-100/80">
                      {guide.highlights.slice(0, 3).map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                );
                const href = guideHref(guide);
                return isDecember ? (
                  <Link key={guide.slug} href={href} className={cardClass}>
                    {cardContent}
                  </Link>
                ) : (
                  <article key={guide.slug} className={cardClass}>
                    {cardContent}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-cyan-500/20 bg-black/60 py-14 md:py-16">
          <div className="container mx-auto max-w-6xl px-4 space-y-8">
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-[0.12em] text-cyan-200/70">Puzzles & events</p>
              <h2 className="text-3xl font-bold text-cyan-50 md:text-4xl">Mechanics That Can Wipe Squads</h2>
              <p className="text-cyan-100/75">
                Solve the Hidden Bunker sequence and keep your squad alive during timed events.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {puzzleGuides.map((guide) => {
                const isDecember = guide.date.startsWith('Dec');
                const cardClass =
                  'group overflow-hidden rounded-2xl border border-cyan-500/25 bg-gradient-to-b from-slate-950/80 via-blue-950/40 to-slate-950/75 shadow-[0_20px_55px_rgba(0,0,0,0.45)] transition hover:border-cyan-300/50';
                const cardContent = (
                  <>
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        sizes="(min-width: 1024px) 520px, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      <div className="absolute left-4 top-3 flex items-center gap-2 text-[11px] font-semibold text-cyan-50">
                        <span className="rounded-full bg-cyan-500/90 px-3 py-1 text-black shadow-[0_0_18px_rgba(0,229,255,0.6)]">
                          {guide.category}
                        </span>
                        {guide.map && <span className="rounded-full bg-black/70 px-3 py-1 text-cyan-100/80">{guide.map}</span>}
                      </div>
                    </div>
                    <div className="space-y-3 p-5">
                      <p className="text-xs uppercase tracking-wide text-cyan-200/70">{guide.date}</p>
                      <h3 className="text-xl font-semibold text-cyan-50">{guide.title}</h3>
                      <p className="text-cyan-100/75">{guide.summary}</p>
                      <ul className="space-y-2 text-sm text-cyan-100/80">
                        {guide.highlights.slice(0, 3).map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                );
                const href = guideHref(guide);
                return isDecember ? (
                  <Link key={guide.slug} href={href} className={cardClass}>
                    {cardContent}
                  </Link>
                ) : (
                  <article key={guide.slug} className={cardClass}>
                    {cardContent}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16">
          <div className="container mx-auto max-w-6xl px-4 space-y-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-[0.12em] text-cyan-200/70">Complete library</p>
              <h2 className="text-3xl font-bold text-cyan-50 md:text-4xl">All Guides at a Glance</h2>
              <p className="text-cyan-100/75">
                Browse every mirrored article with quick context so you know what to run next.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {allGuidesWithQuest.map((guide) => {
                const isDecember = guide.date.startsWith('Dec');
                const cardClass =
                  'group flex flex-col rounded-xl border border-cyan-500/25 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/70 p-4 shadow-[0_14px_40px_rgba(0,0,0,0.45)] transition hover:border-cyan-300/50';
                const cardContent = (
                  <>
                    <div className="flex items-start gap-3">
                      <div className="relative h-16 w-20 overflow-hidden rounded-lg border border-cyan-500/30 bg-black/40">
                        <Image
                          src={guide.image}
                          alt={guide.title}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-[11px] font-semibold text-cyan-100/80">
                          <span className="rounded-full bg-cyan-500/20 px-2 py-1 text-cyan-50">{guide.category}</span>
                          <span className="text-cyan-200/70">{guide.date}</span>
                        </div>
                        <h3 className="text-base font-semibold text-cyan-50">{guide.title}</h3>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-cyan-100/75">{guide.summary}</p>
                    <ul className="mt-2 space-y-1 text-xs text-cyan-100/80">
                      {guide.highlights.slice(0, 2).map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-1 h-1 w-1 rounded-full bg-cyan-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                );
                const href = guideHref(guide);
                return isDecember ? (
                  <Link key={guide.slug} href={href} className={cardClass}>
                    {cardContent}
                  </Link>
                ) : (
                  <article key={guide.slug} className={cardClass}>
                    {cardContent}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
