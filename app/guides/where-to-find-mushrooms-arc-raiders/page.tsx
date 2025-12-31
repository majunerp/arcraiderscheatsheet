import Image from 'next/image';
import Link from 'next/link';

import { defaultKeywords, generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'Where to Find Mushrooms in ARC Raiders (Guaranteed Spaceport Spawn)',
  description:
    'Farm Mushrooms fast with a guaranteed Spaceport spawn near Trench Hatch (East): grab 3 per run, safe-pocket them, then surrender to reset. Includes loadout tips, route screenshots, and a repeatable 2–4 minute loop.',
  keywords: [
    ...defaultKeywords,
    'arc raiders mushrooms',
    'arc raiders mushroom location',
    'arc raiders mushroom farm',
    'arc raiders spaceport mushroom',
    'arc raiders trench hatch east',
    'arc raiders safe pocket',
  ],
  canonical: 'https://arcraiderscheatsheet.org/guides/where-to-find-mushrooms-arc-raiders',
  ogImage: '/guides/mushrooms/hero.jpg',
});

const Figure = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <figure className="my-7 overflow-hidden rounded-2xl border border-cyan-500/25 bg-black/50 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
    <div className="relative aspect-video w-full">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width:1024px) 960px, 100vw" />
    </div>
    {caption && <figcaption className="px-4 py-3 text-xs text-cyan-100/75">{caption}</figcaption>}
  </figure>
);

const QuickFacts = () => (
  <div className="grid gap-3 rounded-2xl border border-cyan-500/25 bg-black/60 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.45)] md:grid-cols-2">
    {[
      { label: 'Map', value: 'Spaceport (north-east trench by Trench Hatch — East)' },
      { label: 'Guaranteed per run', value: '3x Mushrooms from a single tree' },
      { label: 'Why you farm them', value: 'Scrappy upgrades + Flickering Flames project phases' },
      { label: 'Fast reset', value: 'Safe Pocket + Surrender (2–4 minutes per loop)' },
    ].map((item) => (
      <div key={item.label} className="rounded-xl border border-cyan-400/25 bg-slate-950/70 px-4 py-3">
        <p className="text-xs uppercase tracking-[0.1em] text-cyan-200/70">{item.label}</p>
        <p className="mt-1 text-sm font-semibold text-cyan-50">{item.value}</p>
      </div>
    ))}
  </div>
);

const TableOfContents = () => (
  <nav className="rounded-2xl border border-cyan-500/25 bg-black/60 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200/70">On this page</p>
    <ul className="mt-3 space-y-2 text-sm text-cyan-100/80">
      {[
        { href: '#why-you-need-mushrooms', label: 'Why you need Mushrooms' },
        { href: '#the-guaranteed-spaceport-spawn', label: 'The guaranteed Spaceport spawn' },
        { href: '#the-fastest-loop', label: 'The fastest loop (6 steps)' },
        { href: '#pvp-and-consistency-tips', label: 'PvP & consistency tips' },
        { href: '#faq', label: 'FAQ' },
      ].map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="block rounded-lg border border-transparent px-2 py-1 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-50"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default function MushroomGuide() {
  return (
    <article className="relative overflow-hidden bg-black text-cyan-50">
      <div className="absolute inset-0">
        <Image
          src="/guides/mushrooms/hero.jpg"
          alt="Mushrooms secured in a Safe Pocket after a quick Spaceport run"
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
        <header className="container mx-auto max-w-5xl px-4 pt-16 pb-10 md:pt-20">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-100/80">
            <span className="rounded-full border border-cyan-500/40 bg-cyan-500/15 px-3 py-1">Farming</span>
            <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1">Nature resource</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1">Dec 31, 2025</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-cyan-50 sm:text-4xl md:text-5xl">
            Where to Find Mushrooms in ARC Raiders (Guaranteed Spaceport Spawn)
          </h1>
          <p className="mt-4 text-lg text-cyan-100/80">
            Mushrooms can be a frustrating Nature grind if you rely on random spawns. The fastest method is a small trench
            on Spaceport (north-east side) with a repeatable tree that spawns <strong>three Mushrooms every run</strong>.
            Put them into your <strong>Safe Pocket</strong>, then <strong>Surrender</strong> to reset without running to extract.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/map/spaceport"
              className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(0,229,255,0.35)] transition hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(0,229,255,0.55)]"
            >
              Open Spaceport map
            </Link>
            <Link
              href="/loot"
              className="rounded-lg border border-cyan-400/40 bg-black/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/70 hover:text-white"
            >
              Check item categories
            </Link>
            <Link
              href="/guides"
              className="rounded-lg border border-cyan-400/40 bg-black/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/70 hover:text-white"
            >
              Back to guides
            </Link>
          </div>

          <div className="mt-6">
            <QuickFacts />
          </div>
        </header>

        <main className="container mx-auto max-w-5xl px-4 pb-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
            <div className="space-y-10">
              <section className="space-y-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-cyan-500/25 bg-black/50 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
                  <iframe
                    title="Where to find guaranteed Mushrooms in ARC Raiders"
                    src="https://www.youtube.com/embed/G9TFNZ4TeL0"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="rounded-xl border border-cyan-500/25 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100/85">
                  If you only care about speed: run an <strong>empty custom loadout</strong> so you have a Safe Pocket, sprint to
                  the trench, pocket the 3 Mushrooms, then surrender.
                </div>
              </section>

              <section id="why-you-need-mushrooms" className="space-y-5 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-cyan-50">Why you need Mushrooms</h2>
                <p className="text-cyan-100/80">
                  Mushrooms are a progression bottleneck because they show up in multiple systems. If you are pushing hideout
                  upgrades, you will usually need a <strong>stack</strong> rather than one lucky drop, which is why a guaranteed
                  spawn is such a big time saver.
                </p>
                <Figure
                  src="/guides/mushrooms/item-requirements.jpg"
                  alt="Mushroom requirements for upgrades and projects"
                  caption="Mushrooms are requested by multiple upgrade/project steps, so consistent farming beats random nature spawns."
                />
                <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                  Planning tip: aim for 12+ Mushrooms for Scrappy progress, then keep extra for project phases so you don’t have to
                  revisit the route later.
                </div>
              </section>

              <section id="the-guaranteed-spaceport-spawn" className="space-y-5 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-cyan-50">The guaranteed Spaceport spawn</h2>
                <p className="text-cyan-100/80">
                  The spawn sits on the <strong>north-east side of Spaceport</strong>, just beside <strong>Trench Hatch (East)</strong>.
                  There’s a small trench next to the hatch with a single tree. That tree spawns <strong>three guaranteed Mushrooms</strong>
                  when it has not been looted.
                </p>
                <Figure
                  src="/guides/mushrooms/spaceport-overview.png"
                  alt="Spaceport overview map for the Mushroom route"
                  caption="Use the Spaceport map to orient north-east; the Trench Hatch area is the anchor landmark."
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <Figure
                    src="/guides/mushrooms/location-callout.jpg"
                    alt="Callout of the Trench Hatch (East) mushroom trench location"
                    caption="The trench is next to Trench Hatch (East); plan a straight sprint off spawn."
                  />
                  <Figure
                    src="/guides/mushrooms/trench-approach.jpg"
                    alt="Approaching the trench beside Trench Hatch (East)"
                    caption="Approach quietly and scan: this spot is popular for fast progression."
                  />
                </div>
              </section>

              <section id="the-fastest-loop" className="space-y-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-cyan-50">The fastest loop (6 steps)</h2>

                <div className="space-y-4 text-cyan-100/80">
                  <p>
                    This route is intentionally simple: you are trading a “successful extraction” mindset for a fast,
                    repeatable material sprint.
                  </p>
                  <ol className="space-y-3">
                    <li>
                      <strong>1) Prepare an empty custom loadout.</strong> Going in with no gear is the point: you are not risking
                      items, and you want the Safe Pocket slot so Mushrooms stay with you even if you get killed.
                    </li>
                    <li>
                      <strong>2) Queue Spaceport and immediately path north-east.</strong> When major events pull players elsewhere,
                      the trench is often uncontested. Otherwise, expect to race at least one other Raider.
                    </li>
                    <li>
                      <strong>3) Move to Trench Hatch (East).</strong> The hatch is the landmark; the Mushrooms are in the small
                      trench next to it.
                    </li>
                    <li>
                      <strong>4) Loot the tree and pick up all three Mushrooms.</strong> Don’t linger. Grab them and immediately
                      move them to your Safe Pocket.
                    </li>
                    <li>
                      <strong>5) Surrender to reset.</strong> Open the menu and surrender instead of jogging to extract. It’s the
                      fastest possible turnaround for this farm.
                    </li>
                    <li>
                      <strong>6) Repeat until you hit your target.</strong> Most players finish their stack quickly because each run
                      is fixed at three Mushrooms.
                    </li>
                  </ol>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Figure
                    src="/guides/mushrooms/mushroom-tree.jpg"
                    alt="The mushroom tree inside the trench"
                    caption="Drop into the trench: the tree sits at the bottom and spawns three Mushrooms when available."
                  />
                  <Figure
                    src="/guides/mushrooms/three-mushrooms.jpg"
                    alt="Three Mushrooms collected from the tree"
                    caption="Always pocket them immediately so a surprise fight doesn’t waste the run."
                  />
                </div>

                <Figure
                  src="/guides/mushrooms/surrender-menu.jpg"
                  alt="Surrender option in the menu for fast resets"
                  caption="Surrender saves minutes per loop. This is the trick that makes the route feel ‘guaranteed’ over time."
                />
              </section>

              <section id="pvp-and-consistency-tips" className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-cyan-50">PvP & consistency tips</h2>
                <ul className="space-y-2 text-cyan-100/80">
                  <li>
                    <strong>Bring nothing you care about.</strong> This route shines when you treat it as a zero-risk sprint.
                  </li>
                  <li>
                    <strong>Pocket first, fight later.</strong> If you have the Mushrooms, your “win condition” is already complete.
                  </li>
                  <li>
                    <strong>Use a stamina spike.</strong> If you keep spawning far away, carry 1–2 Adrenaline shots so you can reach the trench first.
                  </li>
                  <li>
                    <strong>Don’t tunnel-vision.</strong> If you hear a squad already in the trench, rotate away and requeue; time beats ego fights.
                  </li>
                </ul>
              </section>

              <section id="faq" className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-cyan-50">FAQ</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: 'How many Mushrooms do you get per run?',
                      a: 'Three, when the tree hasn’t been looted yet. That fixed payout is why this is the fastest method.',
                    },
                    {
                      q: 'Do I have to extract to keep the Mushrooms?',
                      a: 'No. If you move them into your Safe Pocket, they remain secured even if you surrender or get eliminated.',
                    },
                    {
                      q: 'Where is the exact location on Spaceport?',
                      a: 'North-east side of the map, beside Trench Hatch (East). The Mushrooms are in a small trench next to the hatch.',
                    },
                    {
                      q: 'What if the tree is already looted?',
                      a: 'Surrender and requeue. The route is designed around fast resets, not long rotations.',
                    },
                  ].map((item) => (
                    <div key={item.q} className="rounded-xl border border-cyan-500/25 bg-slate-950/60 p-4">
                      <p className="text-sm font-semibold text-cyan-50">{item.q}</p>
                      <p className="mt-1 text-sm text-cyan-100/75">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-4">
                <TableOfContents />
                <div className="rounded-2xl border border-cyan-500/25 bg-black/60 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200/70">Quick script</p>
                  <ul className="mt-3 space-y-2 text-sm text-cyan-100/80">
                    <li>Queue Spaceport with an empty loadout.</li>
                    <li>Sprint to Trench Hatch (East) in the north-east.</li>
                    <li>Loot tree → pocket 3 Mushrooms.</li>
                    <li>Surrender → requeue.</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </main>

        <footer className="border-t border-cyan-500/20 bg-black/50">
          <div className="container mx-auto max-w-5xl px-4 py-8 flex items-center justify-between text-sm text-cyan-100/70">
            <span>Source: community reference posted Dec 31, 2025 (Spaceport guaranteed spawn + surrender reset)</span>
            <Link href="/guides" className="font-semibold text-cyan-100 underline decoration-dotted underline-offset-4 hover:text-white">
              Back to guides hub
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}

