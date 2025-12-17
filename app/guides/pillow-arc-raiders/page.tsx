import Image from 'next/image';
import Link from 'next/link';

import { defaultKeywords, generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'Where to Find Cat Beds & Very Comfortable Pillows in ARC Raiders',
  description:
    'Fast routes to farm Cat Beds and Very Comfortable Pillows for Scrappy upgrades: Buried City Red Tower containers, Dam Testing Annex lockers, and Blue Gate Village shelves/crates.',
  keywords: [
    ...defaultKeywords,
    'arc raiders pillow',
    'arc raiders very comfortable pillow',
    'arc raiders cat bed',
    'arc raiders scrappy upgrade',
    'arc raiders red tower pillow',
    'arc raiders testing annex pillow',
    'arc raiders blue gate cat bed',
  ],
  canonical: 'https://arcraiderscheatsheet.org/guides/pillow-arc-raiders',
  ogImage: '/guides/pillow-cat-bed.webp',
});

const RequirementList = () => (
  <div className="mt-6 grid gap-3 rounded-2xl border border-cyan-500/25 bg-black/60 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.45)] md:grid-cols-2">
    {[
      { label: 'Upgrade target', value: 'Scrappy (Levels 4-5)' },
      { label: 'Key items', value: '1x Cat Bed · 3x Very Comfortable Pillow' },
      { label: 'Loot pools', value: 'Residential · Commercial' },
      { label: 'Best spots', value: 'Red Tower (Buried City) · Testing Annex (Dam) · Blue Gate Village' },
    ].map((item) => (
      <div key={item.label} className="rounded-xl border border-cyan-400/25 bg-slate-950/70 px-4 py-3">
        <p className="text-xs uppercase tracking-[0.1em] text-cyan-200/70">{item.label}</p>
        <p className="mt-1 text-sm font-semibold text-cyan-50">{item.value}</p>
      </div>
    ))}
  </div>
);

const Figure = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <figure className="my-6 overflow-hidden rounded-2xl border border-cyan-500/25 bg-black/50 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
    <div className="relative aspect-video w-full">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width:1024px) 960px, 100vw" />
    </div>
    {caption && <figcaption className="px-4 py-3 text-xs text-cyan-100/75">{caption}</figcaption>}
  </figure>
);

export default function PillowGuide() {
  return (
    <article className="relative overflow-hidden bg-black text-cyan-50">
      <div className="absolute inset-0">
        <Image
          src="/guides/pillow/hero.jpg"
          alt="Pillow and Cat Bed farming overview"
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
        <header className="container mx-auto max-w-4xl px-4 pt-16 pb-10 md:pt-20">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-100/80">
            <span className="rounded-full border border-cyan-500/40 bg-cyan-500/15 px-3 py-1">Farming</span>
            <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1">Residential · Commercial</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1">Dec 4, 2025</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-cyan-50">
            Where to Find Cat Beds & Very Comfortable Pillows in ARC Raiders
          </h1>
          <p className="mt-4 text-lg text-cyan-100/80">
            Scrappy needs a Cat Bed and three Very Comfortable Pillows to reach peak passive income. This guide condenses the December 2025
            reference routes: Red Tower white containers and red lockers, Dam Testing Annex lockers, and Blue Gate Village shelves and crates.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/map"
              className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(0,229,255,0.35)] transition hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(0,229,255,0.55)]"
            >
              Open interactive maps
            </Link>
            <Link
              href="/loot"
              className="rounded-lg border border-cyan-400/40 bg-black/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/70 hover:text-white"
            >
              Check item values
            </Link>
          </div>
          <RequirementList />
        </header>

        <main className="container mx-auto max-w-4xl px-4 pb-16 space-y-10">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-50">Why these items matter</h2>
            <p className="text-cyan-100/80">
              Scrappy Level 4–5 requires one Cat Bed and three Very Comfortable Pillows. They only drop in Residential/Commercial loot pools, so
              targeted routes are the only reliable way to progress without endless RNG.
            </p>
            <Figure src="/guides/pillow/scrappy.jpg" alt="Scrappy upgrade materials" caption="Scrappy upgrades hinge on Cat Beds and Very Comfortable Pillows." />
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Primary route: Red Tower (Buried City)</h2>
            <p className="text-cyan-100/80">
              The Red Tower ledge spawns white plastic containers that almost always yield a Pillow (often multiple). Red lockers inside can also
              drop both Pillows and Cat Beds.
            </p>
            <Figure
              src="/guides/pillow/red-tower-containers.jpg"
              alt="Red Tower containers with pillow spawns"
              caption="Hit the white plastic containers on the Red Tower ledge first; check the nearby red lockers too."
            />
            <ul className="space-y-2 text-sm text-cyan-100/80">
              <li>Land on Red Tower early; if contested, loot containers fast and bail.</li>
              <li>Containers: primary Pillow source; lockers: backup Pillow/Cat Bed rolls.</li>
              <li>Use metro extract nearby to reset quickly.</li>
            </ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Backup: Buried City Hospital lockers</h2>
            <p className="text-cyan-100/80">
              If you spawn far from Red Tower, check the ground-floor red lockers in Hospital. Not guaranteed, but worth a quick pass when you are nearby.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Dam Battlegrounds: Testing Annex</h2>
            <p className="text-cyan-100/80">
              On Dam, skip apartments if you spawn east; go straight to Testing Annex. Red lockers here have confirmed Pillow and Cat Bed spawns.
            </p>
            <Figure
              src="/guides/pillow/testing-annex.jpg"
              alt="Testing Annex red lockers"
              caption="Testing Annex red lockers: reliable backup Pillow/Cat Bed drops when Red Tower is contested."
            />
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Blue Gate Village: shelves and crates</h2>
            <p className="text-cyan-100/80">
              The northwest Village in Blue Gate is dense with residential shelves and rusty crates. Great for Cat Beds; you can still find Pillows,
              but prioritize Beds here.
            </p>
            <Figure
              src="/guides/pillow/blue-gate-village.jpg"
              alt="Blue Gate Village shelves and crates"
              caption="Search living-room shelves and outside crates in the Village for Cat Beds; usually at least one per clean sweep."
            />
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Secondary: Grandioso Apartments (Buried City)</h2>
            <p className="text-cyan-100/80">
              If you prefer Buried City spawns, hit the two Grandioso towers in the southwest. Bedrooms and dresser tops often hide Cat Beds; check the
              pharmacy shelves nearby as well.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-50">Safe pocket rule</h2>
            <p className="text-cyan-100/80">
              The moment you grab a Pillow or Cat Bed, put it in your Safe Pocket. Even if you die, it counts. Never risk carrying these in your main
              backpack.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-50">Shopping list summary</h2>
            <ul className="space-y-2 text-cyan-100/80">
              <li><strong>Cat Bed (x1):</strong> Red Tower containers/lockers or Blue Gate Village shelves/crates.</li>
              <li><strong>Very Comfortable Pillow (x3):</strong> Red Tower containers; backups at Testing Annex lockers or Hospital lockers.</li>
            </ul>
            <Figure
              src="/guides/pillow/stash-haul.jpg"
              alt="Pillow and Cat Bed haul"
              caption="Example haul after a few Red Tower and Annex runs."
            />
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-50">Fast loop (3–6 minutes)</h2>
            <ul className="space-y-2 text-cyan-100/80">
              <li>1) Queue Buried City → sprint Red Tower → containers + lockers → metro extract.</li>
              <li>2) If contested, queue Dam → Testing Annex lockers → extract.</li>
              <li>3) If beds still missing, queue Blue Gate → Village shelves/crates → extract.</li>
              <li>4) Safe pocket items immediately; alternate maps until Cat Bed x1 and Pillow x3 are secured.</li>
            </ul>
          </section>
        </main>

        <footer className="border-t border-cyan-500/20 bg-black/50">
          <div className="container mx-auto max-w-4xl px-4 py-8 flex items-center justify-between text-sm text-cyan-100/70">
            <span>Source: Dec 4–9, 2025 community field runs (Red Tower, Testing Annex, Blue Gate Village)</span>
            <Link href="/guides" className="font-semibold text-cyan-100 underline decoration-dotted underline-offset-4 hover:text-white">
              Back to guides hub
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
