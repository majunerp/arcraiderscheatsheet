import Image from 'next/image';
import Link from 'next/link';

import { defaultKeywords, generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'Where to Find Rusted Shut Medical Kit in ARC Raiders (Medical Station 3)',
  description:
    'Rusted Shut Medical Kit farming route: prioritize Dam Battlegrounds Testing Annex med rooms, cabinets, and lockers. Fast reset loop, solo tips, and backup spawns.',
  keywords: [
    ...defaultKeywords,
    'rusted shut medical kit',
    'arc raiders rusted shut medical kit',
    'where to find rusted shut medical kit',
    'medical station level 3',
    'dam battlegrounds testing annex',
    'arc raiders medical loot',
  ],
  canonical: 'https://arcraiderscheatsheet.org/guides/where-to-find-rusted-shut-medical-kit-in-arc-raiders',
  ogImage: '/guides/rusted-medkit.webp',
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
      { label: 'Best map', value: 'Dam Battlegrounds' },
      { label: 'Best building', value: 'Testing Annex (medical rooms + cabinets)' },
      { label: 'Why you need it', value: 'Medical Station Level 3 upgrades' },
      { label: 'Loop style', value: 'Short raids: hit Annex first, extract early' },
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
        { href: '#where-it-spawns', label: 'Where it spawns' },
        { href: '#fastest-loop', label: 'Fastest loop (Testing Annex)' },
        { href: '#backup-spawns', label: 'Backup spawns' },
        { href: '#tips', label: 'Tips to farm it faster' },
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

export default function RustedShutMedicalKitGuide() {
  return (
    <article className="relative overflow-hidden bg-black text-cyan-50">
      <div className="absolute inset-0">
        <Image
          src="/guides/rusted-medkit.webp"
          alt="Rusted Shut Medical Kit farming route overview"
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
            <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1">Medical loot</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1">Nov 7, 2025</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-cyan-50 sm:text-4xl md:text-5xl">
            Where to Find Rusted Shut Medical Kit in ARC Raiders
          </h1>
          <p className="mt-4 text-lg text-cyan-100/80">
            Rusted Shut Medical Kits are a bottleneck for Medical Station upgrades. The most consistent farm is to prioritize
            Dam Battlegrounds and hit <strong>Testing Annex</strong> first: it stacks medical containers close together so you can
            loot and reset quickly.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/map/dam-battlegrounds"
              className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(0,229,255,0.35)] transition hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(0,229,255,0.55)]"
            >
              Open Dam Battlegrounds map
            </Link>
            <Link
              href="/guides/where-to-find-surveyor-vaults-arc-raiders"
              className="rounded-lg border border-cyan-400/40 bg-black/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/70 hover:text-white"
            >
              Surveyor Vaults guide
            </Link>
            <Link
              href="/guides"
              className="rounded-lg border border-cyan-400/40 bg-black/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/70 hover:text-white"
            >
              Back to Guides
            </Link>
          </div>
        </header>

        <main className="container mx-auto max-w-5xl px-4 pb-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
            <div className="space-y-10">
              <section className="space-y-6">
                <QuickFacts />
                <div className="rounded-xl border border-cyan-500/25 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100/85">
                  Fast loop: spawn in, sprint to Testing Annex, clear every med cabinet + locker, then extract early and rerun.
                </div>
              </section>

              <section id="where-it-spawns" className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-cyan-50">Where it spawns</h2>
                <p className="text-cyan-100/80">
                  Treat Rusted Shut Medical Kits like high-tier medical loot: focus locations with dense medical containers
                  (cabinets, wall med boxes, lockers, and clinic rooms). On Dam Battlegrounds, Testing Annex is the best single
                  stop because you can check many medical containers in one sweep.
                </p>
                <Figure
                  src="/guides/rusted-medkit.webp"
                  alt="Medical loot containers highlighted for Rusted Shut Medical Kit farming"
                  caption="If the Annex is uncontested, you can clear it fast and leave before the lobby collapses onto you."
                />
              </section>

              <section id="fastest-loop" className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-cyan-50">Fastest loop (Testing Annex)</h2>
                <ol className="space-y-3 text-cyan-100/80">
                  {[
                    'Queue Dam Battlegrounds with a light kit (you are here for speed, not PvP).',
                    'Path straight to Testing Annex and clear the medical rooms first.',
                    'Loot every wall cabinet, med box, and locker before touching low-value office clutter.',
                    'If you find a Rusted Shut Medical Kit, safe-pocket it immediately if possible.',
                    'Rotate to the nearest extract and leave early—repeatable short raids beat one long risky run.',
                  ].map((step) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-1 h-6 w-6 shrink-0 rounded-full border border-cyan-400/40 bg-cyan-500/10 text-center text-sm font-semibold leading-6 text-cyan-50">
                        •
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section id="backup-spawns" className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-cyan-50">Backup spawns</h2>
                <p className="text-cyan-100/80">
                  If Testing Annex is hot or already looted, pivot to any Dam medical-adjacent interiors with cabinets and
                  lockers. The key is container density: you want fast checks and a quick exit, not a full-map roam.
                </p>
              </section>

              <section id="tips" className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-cyan-50">Tips to farm it faster</h2>
                <ul className="space-y-2 text-cyan-100/80">
                  {[
                    'Run short raids: check your target building first, then leave.',
                    'Skip heavy loot: time spent on low-yield props costs you more attempts per hour.',
                    'Go solo-friendly: avoid prolonged fights—your goal is repeatable container rolls.',
                    'Bundle goals: if you are also farming Surveyor Vaults, alternate routes so every run advances progress.',
                  ].map((tip) => (
                    <li key={tip} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,229,255,0.6)]" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <TableOfContents />
              <div className="rounded-2xl border border-cyan-500/25 bg-black/60 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200/70">Related</p>
                <div className="mt-3 space-y-2 text-sm">
                  <Link
                    href="/guides/where-to-find-surveyor-vaults-arc-raiders"
                    className="block rounded-lg border border-cyan-400/25 bg-slate-950/70 px-3 py-2 text-cyan-100/85 hover:border-cyan-200/60 hover:text-cyan-50"
                  >
                    Surveyor Vaults (Storm Courier Farm)
                  </Link>
                  <Link
                    href="/recycling"
                    className="block rounded-lg border border-cyan-400/25 bg-slate-950/70 px-3 py-2 text-cyan-100/85 hover:border-cyan-200/60 hover:text-cyan-50"
                  >
                    Recycling guide (sell vs recycle)
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </article>
  );
}

