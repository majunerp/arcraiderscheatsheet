import Image from 'next/image';
import Link from 'next/link';

import { defaultKeywords, generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'Where to Find Surveyor Vaults in ARC Raiders (Storm Courier Farm)',
  description:
    'Farm Surveyor Vaults fast by looting ARC Couriers during the Electromagnetic Storm on Dam Battlegrounds. Safe route, map screenshots, and solo tips.',
  keywords: [
    ...defaultKeywords,
    'surveyor vaults',
    'arc raiders surveyor vaults',
    'where to find surveyor vaults',
    'surveyor vault farm',
    'electromagnetic storm',
    'arc couriers',
    'dam battlegrounds',
    'mixed signals quest',
    'medical lab level 3',
  ],
  canonical: 'https://arcraiderscheatsheet.org/guides/where-to-find-surveyor-vaults-arc-raiders',
  ogImage: '/guides/surveyor-vaults/hero.webp',
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
      { label: 'Best map', value: 'Dam Battlegrounds (Scrapyard + Old Battleground loop)' },
      { label: 'Best event', value: 'Electromagnetic Storm (spawns many ARC Couriers)' },
      { label: 'Primary source', value: 'ARC Couriers (breach + loot for Surveyor Vaults)' },
      { label: 'Total needed', value: '6 Surveyor Vaults (Mixed Signals + Medical Lab Lv. 3)' },
      { label: 'Solo-friendly', value: 'Yes — low combat, repeatable, ammo-efficient' },
      { label: 'Backup method', value: 'Destroy ARC Surveyors (slow, risky, contested)' },
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
        { href: '#why-you-need-surveyor-vaults', label: 'Why you need Surveyor Vaults' },
        { href: '#why-not-hunt-arc-surveyors-directly', label: 'Why not hunt ARC Surveyors' },
        { href: '#best-method-electromagnetic-storm', label: 'Best method: Electromagnetic Storm' },
        { href: '#step-1-load-into-dam-battlegrounds', label: 'Step 1: Load into Dam Battlegrounds' },
        { href: '#step-2-locate-and-loot-arc-couriers', label: 'Step 2: Locate and loot ARC Couriers' },
        { href: '#step-3-manage-the-storm-and-extract', label: 'Step 3: Manage the storm and extract' },
        { href: '#final-tips-for-consistent-farming', label: 'Final tips for consistent farming' },
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

const YouTubeEmbed = ({ id, title }: { id: string; title: string }) => (
  <div className="my-7 overflow-hidden rounded-2xl border border-cyan-500/25 bg-black/50 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
    <div className="relative aspect-video w-full">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  </div>
);

export default function SurveyorVaultsGuide() {
  return (
    <article className="relative overflow-hidden bg-black text-cyan-50">
      <div className="absolute inset-0">
        <Image
          src="/guides/surveyor-vaults/hero.webp"
          alt="Electromagnetic Storm run on Dam Battlegrounds used to farm a rare ARC component"
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
            <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1">Dam Battlegrounds</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1">Jan 6, 2026</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-cyan-50 sm:text-4xl md:text-5xl">
            Where to Find Surveyor Vaults in ARC Raiders (Storm Courier Farm)
          </h1>
          <p className="mt-4 text-lg text-cyan-100/80">
            Surveyor Vaults are a progression bottleneck: you need several for quest progression and key upgrades, but hunting ARC
            Surveyors for drops is slow and punishing — especially solo. The most consistent approach is to loot ARC Couriers
            during the Electromagnetic Storm on Dam Battlegrounds.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-cyan-100/75">
            <span className="rounded-full border border-cyan-500/25 bg-black/35 px-3 py-1">Updated for 2026 routes</span>
            <Link
              href="/guides"
              className="rounded-full border border-cyan-500/25 bg-black/35 px-3 py-1 hover:border-cyan-400/40 hover:bg-cyan-500/10"
            >
              Browse more guides
            </Link>
            <Link
              href="/map/dam-battlegrounds"
              className="rounded-full border border-cyan-500/25 bg-black/35 px-3 py-1 hover:border-cyan-400/40 hover:bg-cyan-500/10"
            >
              Open Dam map
            </Link>
          </div>
        </header>

        <main className="container mx-auto max-w-5xl px-4 pb-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
            <div className="space-y-10">
              <section className="space-y-6">
                <QuickFacts />
                <div className="rounded-xl border border-cyan-500/25 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100/85">
                  If you only want the fastest Surveyor Vaults loop: queue Dam Battlegrounds during an Electromagnetic Storm, sweep
                  Scrapyard → Old Battleground for ARC Couriers, loot until you hit Surveyor Vaults, then extract.
                </div>
              </section>

              <YouTubeEmbed id="DwEUYxnbFlQ" title="Where to Find Surveyor Vaults in ARC Raiders (video)" />

              <section id="why-you-need-surveyor-vaults" className="space-y-5 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-cyan-50">Why you need Surveyor Vaults</h2>
                <p className="text-cyan-100/80">
                  Surveyor Vaults matter because the game asks for a <strong>stack</strong>, not a lucky one-off. One Surveyor Vault is
                  used for the <strong>Mixed Signals</strong> quest, and you need more for workshop progression — most notably a
                  Medical Lab upgrade that demands several Surveyor Vaults alongside other medical components.
                </p>
                <div className="grid gap-4 md:grid-cols-[240px_1fr] md:items-start">
                  <div className="rounded-2xl border border-cyan-500/25 bg-black/60 p-4">
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-cyan-500/20">
                      <Image
                        src="/guides/surveyor-vaults/vault-item.png"
                        alt="Surveyor Vault item card used for Mixed Signals and Medical Lab upgrades"
                        fill
                        className="object-cover"
                        sizes="240px"
                      />
                    </div>
                      <p className="mt-3 text-xs text-cyan-100/70">
                      Treat this as a planned farming target, not an RNG drop.
                      </p>
                  </div>
                  <div className="space-y-4 text-cyan-100/80">
                    <p>
                      That’s why efficient routes are so valuable: a reliable farm is faster than roaming the entire map hoping an
                      ARC Surveyor shows up, then hoping it drops what you need.
                    </p>
                    <p>
                      If you are also working on other upgrades, pair this route with our medical component guide:
                      <Link
                        href="/guides/where-to-find-rusted-shut-medical-kit-in-arc-raiders"
                        className="ml-1 underline decoration-cyan-400/40 underline-offset-4 hover:text-cyan-50"
                      >
                        Rusted Shut Medical Kit farming
                      </Link>
                      .
                    </p>
                  </div>
                </div>
                <Figure
                  src="/guides/surveyor-vaults/surveyor-vault-drop.jpg"
                  alt="Surveyor Vault shown as a rare ARC component drop"
                  caption="Surveyor Vaults are rare, so you want a method that creates many loot rolls per run."
                />
              </section>

              <section id="why-not-hunt-arc-surveyors-directly" className="space-y-5 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-cyan-50">Why not hunt ARC Surveyors directly</h2>
                <p className="text-cyan-100/80">
                  Yes, Vaults can drop from destroying ARC Surveyors. In practice, farming this way is inefficient: Surveyors are
                  hard to locate on demand, take time and ammo to bring down, and often pull other Raiders to your position. If
                  you are solo, a Surveyor fight can turn into an ambush fast.
                </p>
                <div className="rounded-xl border border-amber-400/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
                  Think in terms of <strong>attempts per hour</strong>. ARC Couriers during the storm give you many fast rolls at
                  Vaults, while chasing Surveyors gives you fewer, riskier rolls.
                </div>
              </section>

              <section id="best-method-electromagnetic-storm" className="space-y-5 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-cyan-50">Best method: Electromagnetic Storm event</h2>
                <p className="text-cyan-100/80">
                  The Electromagnetic Storm changes ARC spawns, and the big win is density: more ARC Couriers means more breaches,
                  more loot windows, and more chances per raid. The goal is simple — use the storm to create a high-volume farm
                  loop that avoids unnecessary combat.
                </p>
                <Figure
                  src="/guides/surveyor-vaults/dam-scrapyard-route.jpg"
                  alt="Dam Battlegrounds route line highlighting Scrapyard and Old Battleground courier sweep"
                  caption="During an Electromagnetic Storm, focus the lower-left Dam Battlegrounds loop (Scrapyard → Old Battleground)."
                />
              </section>

              <section id="step-1-load-into-dam-battlegrounds" className="space-y-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-cyan-50">Step 1: Load into Dam Battlegrounds during the storm</h2>
                <p className="text-cyan-100/80">
                  Queue Dam Battlegrounds when the Electromagnetic Storm is active. You do not need a heavy kit for this farm: the
                  route is about movement, awareness, and quick extracts after you secure Surveyor Vaults.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-cyan-500/25 bg-black/60 p-5">
                    <p className="text-sm font-semibold text-cyan-50">Recommended loadout mindset</p>
                    <ul className="mt-3 space-y-2 text-sm text-cyan-100/80">
                      <li>
                        <strong>Lightweight kit:</strong> free loadout or minimal custom build to keep stamina high.
                      </li>
                      <li>
                        <strong>Utility first:</strong> heals + a quiet option so you can disengage and extract.
                      </li>
                      <li>
                        <strong>Inventory discipline:</strong> ignore bulky loot until you hit a Vault.
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-cyan-500/25 bg-black/60 p-5">
                    <p className="text-sm font-semibold text-cyan-50">Route objective</p>
                    <p className="mt-3 text-sm text-cyan-100/80">
                      Start moving toward the lower-left side of the map — Scrapyard and Old Battleground are the anchor zones for
                      storm ARC Courier spawns and keep your runs consistent.
                    </p>
                  </div>
                </div>
              </section>

              <section id="step-2-locate-and-loot-arc-couriers" className="space-y-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-cyan-50">Step 2: Locate and loot ARC Couriers</h2>
                <p className="text-cyan-100/80">
                  Open your map often. During the storm, ARC Couriers appear as distant icons, and you will frequently spot a
                  black-smoke marker in the direction of a Courier. When you find one, approach carefully, breach it open, then
                  loot quickly for Surveyor Vaults.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <Figure
                    src="/guides/surveyor-vaults/courier-map-icons.jpg"
                    alt="Map view showing ARC Courier icons during an Electromagnetic Storm"
                    caption="ARC Couriers show up on the map — use fast map checks to chain them."
                  />
                  <Figure
                    src="/guides/surveyor-vaults/black-smoke-marker.jpg"
                    alt="Black smoke marker used to spot an ARC Courier position"
                    caption="Black smoke is a strong visual cue; rotate to it and scan for Raiders before breaching."
                  />
                </div>
                <Figure
                  src="/guides/surveyor-vaults/breach-courier.jpg"
                  alt="Breaching an ARC Courier during an Electromagnetic Storm for loot rolls"
                  caption="Each breach is another chance at Surveyor Vaults — keep the loop tight and keep moving."
                />
                <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                  Extra value: Courier loot can include other high-demand ARC components. Keep the Vault as the main target, but
                  watch for upgrades you still need.
                </div>
              </section>

              <section id="step-3-manage-the-storm-and-extract" className="space-y-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-cyan-50">Step 3: Manage the storm and extract safely</h2>
                <p className="text-cyan-100/80">
                  While you farm Vaults, don’t forget the storm itself. Stay mobile, respect electrical shocks, and avoid drawn-out
                  fights — the best runs are short, repeatable, and end with a clean extract once you secure a Vault.
                </p>
                <Figure
                  src="/guides/surveyor-vaults/extract-after-loot.jpg"
                  alt="Extracting after securing a valuable ARC component from an ARC Courier"
                  caption="Once you hit Surveyor Vaults, extract — consistency beats one long risky raid."
                />
                <div className="rounded-xl border border-cyan-500/25 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100/85">
                  Rule of thumb: after you loot a Courier, open your map again. New ARC Couriers often spawn nearby during the
                  Electromagnetic Storm, keeping your chain alive.
                </div>
              </section>

              <section id="final-tips-for-consistent-farming" className="space-y-5 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-cyan-50">Final tips for consistent farming</h2>
                <div className="space-y-4 text-cyan-100/80">
                  <p>
                    Surveyor Vaults farming is a patience game. The storm method is the most consistent because it maximizes your
                    number of Courier loot rolls per hour.
                  </p>
                  <ul className="space-y-3">
                    <li>
                      <strong>Skip already-looted Couriers.</strong> If a Courier is breached, don’t waste time — rotate to the next
                      marker to keep Surveyor Vaults attempts high.
                    </li>
                    <li>
                      <strong>Extract early when you hit a Vault.</strong> The fastest way to finish all Surveyor Vaults is to bank
                      progress, then re-queue another storm.
                    </li>
                    <li>
                      <strong>Play the edges.</strong> The Scrapyard / Old Battleground loop keeps you moving and reduces the number
                      of angles Raiders can hold.
                    </li>
                    <li>
                      <strong>Optimize repeats, not hero runs.</strong> Short runs beat clearing the entire map when your goal is
                      Vaults.
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-cyan-500/25 bg-black/60 px-5 py-4">
                  <p className="text-sm font-semibold text-cyan-50">Need more targets after Surveyor Vaults?</p>
                  <p className="mt-2 text-sm text-cyan-100/80">
                    Check the guides hub for other bottleneck items and quick loops that stack well with Dam runs.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    <Link
                      href="/guides"
                      className="rounded-full border border-cyan-500/25 bg-black/35 px-4 py-2 hover:border-cyan-400/40 hover:bg-cyan-500/10"
                    >
                      Guides hub
                    </Link>
                    <Link
                      href="/loot"
                      className="rounded-full border border-cyan-500/25 bg-black/35 px-4 py-2 hover:border-cyan-400/40 hover:bg-cyan-500/10"
                    >
                      Loot priorities
                    </Link>
                    <Link
                      href="/recycling"
                      className="rounded-full border border-cyan-500/25 bg-black/35 px-4 py-2 hover:border-cyan-400/40 hover:bg-cyan-500/10"
                    >
                      Recycling guide
                    </Link>
                  </div>
                </div>
              </section>

              <section id="faq" className="space-y-5 scroll-mt-24">
                <h2 className="text-2xl font-semibold text-cyan-50">FAQ</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: 'How many Surveyor Vaults do I need?',
                      a: 'Plan for six total if you want full progression (Mixed Signals plus a key Medical Lab upgrade).',
                    },
                    {
                      q: 'Can Surveyor Vaults drop from ARC Surveyors?',
                      a: 'Yes, but it is slower and riskier than storm Courier farming. If your goal is Surveyor Vaults, Couriers give you better attempts-per-hour.',
                    },
                    {
                      q: 'What if I miss the Electromagnetic Storm?',
                      a: 'Use the next storm window and run multiple short raids. This farm is about repeatability; forcing non-storm runs usually costs time.',
                    },
                    {
                      q: 'Should I fight players while farming Surveyor Vaults?',
                      a: 'Only when you have to. Your advantage is speed: breach, loot, reposition, and extract once you secure Surveyor Vaults.',
                    },
                  ].map((item) => (
                    <div key={item.q} className="rounded-2xl border border-cyan-500/25 bg-black/60 p-5">
                      <p className="text-sm font-semibold text-cyan-50">{item.q}</p>
                      <p className="mt-2 text-sm text-cyan-100/80">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <TableOfContents />
              <div className="rounded-2xl border border-cyan-500/25 bg-black/60 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200/70">Related guides</p>
                <div className="mt-4 space-y-3 text-sm">
                  {[
                    {
                      href: '/guides/where-to-find-rusted-shut-medical-kit-in-arc-raiders',
                      label: 'Rusted Shut Medical Kit farming',
                      note: 'Medical Lab upgrades',
                    },
                    {
                      href: '/guides/search-first-wave-husks',
                      label: 'Search First-Wave Husks route',
                      note: 'Storm bonus farming',
                    },
                    {
                      href: '/guides/where-to-find-humidifier-arc-raiders',
                      label: 'Humidifier farming route',
                      note: 'Expedition progression',
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl border border-cyan-500/20 bg-slate-950/70 px-4 py-3 hover:border-cyan-400/40 hover:bg-cyan-500/10"
                    >
                      <p className="font-semibold text-cyan-50">{item.label}</p>
                      <p className="mt-1 text-xs text-cyan-100/70">{item.note}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </article>
  );
}
