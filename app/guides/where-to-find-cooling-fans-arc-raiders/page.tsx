import Image from 'next/image';
import Link from 'next/link';

import { defaultKeywords, generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'Where to Find Cooling Fans in ARC Raiders',
  description:
    'Guaranteed Cooling Fan farm inside Buried City Space Travel Building (Tech zone) with rooftop zipline entry and parking-garage extract. Steps, maps, and pacing for Expedition Part 2/6.',
  keywords: [
    ...defaultKeywords,
    'arc raiders cooling fan',
    'arc raiders cooling fans location',
    'arc raiders technological loot',
    'arc raiders space travel building',
    'arc raiders expedition part 2',
  ],
  canonical: 'https://arcraiderscheatsheet.org/guides/where-to-find-cooling-fans-arc-raiders',
  ogImage: '/guides/cooling-fan.webp',
});

const RequirementList = () => (
  <div className="mt-6 grid gap-3 rounded-2xl border border-cyan-500/25 bg-black/60 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.45)] md:grid-cols-2">
    {[
      { label: 'Expedition stage', value: 'Caravan Expedition Part 2 / 6 - Wiring & Ventilation' },
      { label: 'Primary need', value: '5x Cooling Fan (Technological loot)' },
      { label: 'Also needed', value: '35x Durable Cloth / 30x Wires / 30x Electrical Components' },
      { label: 'Best source', value: 'Space Travel Building, Buried City (Tech zone)' },
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

export default function CoolingFansGuide() {
  return (
    <article className="relative overflow-hidden bg-black text-cyan-50">
      <div className="absolute inset-0">
        <Image
          src="/guides/cooling-fans/hero.jpg"
          alt="Cooling fan farming overview"
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
            <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1">Technological loot</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1">Dec 6-8, 2025</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-cyan-50">
            Where to Find Cooling Fans in ARC Raiders
          </h1>
          <p className="mt-4 text-lg text-cyan-100/80">
            Cooling Fans are the rare bottleneck for Expedition Part 2/6. This guide follows the Space Travel Building run:
            rooftop zipline entry, Floor 6 breachables, and instant parking-garage extract. Expect 1-2 Cooling Fans per clean run
            plus other rare tech parts.
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
            <h2 className="text-2xl font-semibold text-cyan-50">Why Cooling Fans matter</h2>
            <p className="text-cyan-100/80">
              Part 2/6 (Wiring, Ventilation, Power) asks for 5 Cooling Fans and large stacks of wires and cloth. Fans are the rare piece,
              so targeted tech zones beat random scavenging.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Route overview: Space Travel Building (Buried City)</h2>
            <p className="text-cyan-100/80">
              The Space Travel Building is the highest-signal Technological zone. Enter via the rooftop zipline, clear Floor 6 breachables,
              then work downward. Finish with the parking-garage extract beside the building.
            </p>
            <Figure
              src="/guides/cooling-fans/requirements.jpg"
              alt="Cooling Fan expedition requirements"
              caption="Part 2 needs 5 Cooling Fans; the rest are bulk items you will collect passively."
            />
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Step 1: Reach Space Travel via rooftop zipline</h2>
            <p className="text-cyan-100/80">
              Spawn in Buried City and head to the Galleria rooftop. A preset zipline carries you directly onto the Space Travel roof, bypassing
              street fights and getting you to the loot first.
            </p>
            <Figure
              src="/guides/cooling-fans/space-travel-location.jpg"
              alt="Space Travel Building location"
              caption="Use the Buried City map and sprint straight to Galleria - zipline - Space Travel roof."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <Figure src="/guides/cooling-fans/zipline-start.jpg" alt="Zipline start on Galleria roof" caption="Zipline start point on Galleria rooftop." />
              <Figure src="/guides/cooling-fans/zipline-end.jpg" alt="Zipline end on Space Travel roof" caption="Zipline lands you on Space Travel roof; drop inside immediately." />
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Step 2: Clear Floor 6, then move down</h2>
            <p className="text-cyan-100/80">
              Enter from the roof; you will be on Floor 6. Two loot rooms and multiple breachable containers sit here. Open everything, then
              clear the next two floors below for shelves, tech crates, and boxes.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Figure src="/guides/cooling-fans/floor6-entrance.jpg" alt="Floor 6 entry" caption="Roof entry leads to Floor 6 corridor." />
              <Figure src="/guides/cooling-fans/floor6-rooms.jpg" alt="Floor 6 loot rooms" caption="Two loot rooms on Floor 6 - hit both before dropping down." />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Figure src="/guides/cooling-fans/breachable-containers-1.jpg" alt="Breachable tech container" caption="Breachable containers share pools with Cooling Fans and other rare tech parts." />
              <Figure src="/guides/cooling-fans/breachable-containers-2.jpg" alt="Another breachable container" caption="Open every breachable on Floors 6-4 for 1-2 Cooling Fans per clean run." />
            </div>
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
              Loot pool callout: Cooling Fans often drop alongside Damaged Heat Sinks, Advanced Electrical Components, and Fried Motherboards - grab them for later benches.
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Step 3: Extract instantly at Parking Garage</h2>
            <p className="text-cyan-100/80">
              The parking-garage extract sits right beside the Space Travel Building. Once you secure your Fans, exit immediately to keep runs short
              and repeatable.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Figure src="/guides/cooling-fans/parking-extract-1.jpg" alt="Parking garage extract path" caption="Jump out and drop to the garage entrance." />
              <Figure src="/guides/cooling-fans/parking-extract-2.jpg" alt="Parking garage extract door" caption="Extract is seconds away - ideal for chaining multiple runs." />
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-50">Fast loop script (3-5 minutes)</h2>
            <ul className="space-y-2 text-cyan-100/80">
              <li>1) Buried City spawn -&gt; Galleria roof -&gt; zipline to Space Travel.</li>
              <li>2) Clear Floor 6 breachables -&gt; move down through 5 and 4 for shelves/tech crates.</li>
              <li>3) If contested, prioritize breachables, then extract at Parking Garage.</li>
              <li>4) Requeue and repeat until 5x Cooling Fans are secured.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-50">Loadout and pacing tips</h2>
            <ul className="space-y-2 text-cyan-100/80">
              <li>Bring close-range DPS (shotgun/SMG) for tight corridors; Space Travel draws other raiders.</li>
              <li>Carry a breach tool; every breachable container is high value in this zone.</li>
              <li>Go light on armor to sprint extracts; Fans and tech parts weigh little.</li>
              <li>Duo split: one clears breachables on 6/5 while the other holds stairs and bags extra crates.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-50">After you have 5</h2>
            <ul className="space-y-2 text-cyan-100/80">
              <li>Finish Part 2 with your cloth, wires, and electrical components to advance Caravan progression.</li>
              <li>Recycle surplus tech items per the <Link href="/loot" className="text-cyan-200 underline decoration-dotted hover:text-white">loot page</Link> to keep stash space clear.</li>
              <li>Revisit Space Travel later for Damaged Heat Sinks and Advanced Electrical Components needed for higher-tier benches.</li>
            </ul>
          </section>
        </main>

        <footer className="border-t border-cyan-500/20 bg-black/50">
          <div className="container mx-auto max-w-4xl px-4 py-8 flex items-center justify-between text-sm text-cyan-100/70">
            <span>Source: Dec 6-8, 2025 Space Travel Building field runs</span>
            <Link href="/guides" className="font-semibold text-cyan-100 underline decoration-dotted underline-offset-4 hover:text-white">
              Back to guides hub
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
