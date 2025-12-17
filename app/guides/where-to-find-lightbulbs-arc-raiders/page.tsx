import Image from 'next/image';
import Link from 'next/link';

import { defaultKeywords, generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'Where to Find Lightbulbs in ARC Raiders',
  description:
    'Guaranteed Dam Battlegrounds electrical spawns plus the Blue Gate Pilgrims Peak locker to secure 5 Lightbulbs for Expedition Framework (Stage 3/6). Steps, maps, extracts, and pacing.',
  keywords: [
    ...defaultKeywords,
    'arc raiders lightbulb',
    'arc raiders lightbulbs location',
    'arc raiders framework lightbulb',
    'arc raiders electrical loot',
    'arc raiders dam battlegrounds lightbulb',
    'arc raiders blue gate lightbulb',
  ],
  canonical: 'https://arcraiderscheatsheet.org/guides/where-to-find-lightbulbs-arc-raiders',
  ogImage: '/guides/lightbulb.webp',
});

const RequirementList = () => (
  <div className="mt-6 grid gap-3 rounded-2xl border border-cyan-500/25 bg-black/60 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.45)] md:grid-cols-2">
    {[
      { label: 'Expedition stage', value: 'Caravan Expedition Stage 3 / 6 - Framework' },
      { label: 'Primary need', value: '5x Lightbulb (Electrical loot)' },
      { label: 'Also needed', value: '30x Battery / 20x Sensors / 1x Exodus Module' },
      { label: 'Best sources', value: 'Dam Field Depot & Generator Hall / Blue Gate Pilgrims Peak' },
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

export default function LightbulbGuide() {
  return (
    <article className="relative overflow-hidden bg-black text-cyan-50">
      <div className="absolute inset-0">
        <Image
          src="/guides/lightbulbs/hero.jpg"
          alt="Lightbulb farming overview"
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
            <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1">Electrical loot</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1">Dec 7-8, 2025</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-cyan-50">
            Where to Find Lightbulbs in ARC Raiders
          </h1>
          <p className="mt-4 text-lg text-cyan-100/80">
            Lightbulbs are rare electrical components for Framework (3/6). This guide mirrors the December 2025 reference runs:
            one guaranteed drawer and one breachable car hood in Dam Battlegrounds, plus a quiet Blue Gate locker at Pilgrims Peak.
            Each loop is built to finish 5 Lightbulbs quickly while stacking Batteries and Sensors.
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
            <h2 className="text-2xl font-semibold text-cyan-50">Why Lightbulbs matter</h2>
            <p className="text-cyan-100/80">
              Framework (Stage 3/6) needs 5 Lightbulbs to build the Caravan walls and roof systems. They only roll in Electrical loot,
              so chasing random zones is slow. Use the two guaranteed Dam pulls and the Blue Gate locker to get them without relying on RNG.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Route 1: Dam Battlegrounds - two guaranteed pulls</h2>
            <p className="text-cyan-100/80">
              Both spawns sit near Generator Hall extract, making this the fastest loop. Grab the drawer, then the car hood, extract, and reset.
            </p>
            <Figure
              src="/guides/lightbulbs/dam-map.jpg"
              alt="Dam Battlegrounds map for Lightbulbs"
              caption="Move between Power Generation Complex and East Broken Bridge toward the Field Depot and Generator Hall."
            />
            <h3 className="text-xl font-semibold text-cyan-50">Steps</h3>
            <ol className="space-y-3 text-cyan-100/80">
              <li><strong>1) Load into Dam Battlegrounds.</strong> Any loadout works; lighter is faster.</li>
              <li><strong>2) Field Depot drawer (guaranteed).</strong> Inside the depot between Power Generation Complex and East Broken Bridge; open the corner computer desk drawer for 1x Lightbulb.</li>
              <li><strong>3) Generator Hall car hood (guaranteed).</strong> Near the Generator Hall extract, breach the hood of the car by the bus for another Lightbulb.</li>
              <li><strong>4) Extract at Generator Hall.</strong> Bank both Lightbulbs and reset.</li>
            </ol>
            <div className="grid gap-4 md:grid-cols-2">
              <Figure src="/guides/lightbulbs/field-depot.jpg" alt="Field Depot exterior" caption="Field Depot between Power Generation Complex and East Broken Bridge." />
              <Figure src="/guides/lightbulbs/drawer.jpg" alt="Guaranteed drawer inside Field Depot" caption="Corner desk drawer: guaranteed Lightbulb if unlooted." />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Figure src="/guides/lightbulbs/car-hood.jpg" alt="Breachable car hood at Generator Hall" caption="Breachable car hood beside the bus near Generator Hall extract." />
              <Figure src="/guides/lightbulbs/generator-extract.jpg" alt="Generator Hall extract" caption="Extract immediately after looting to keep the loop under 4 minutes." />
            </div>
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
              Tip: If the drawer is empty, skip straight to the car hood; if both are gone, extract and requeue - time beats chasing contested loot.
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Route 2: Blue Gate - Pilgrims Peak locker</h2>
            <p className="text-cyan-100/80">
              A quieter backup if Dam is contested. One red locker inside Pilgrims Peak holds a guaranteed Lightbulb.
            </p>
            <Figure
              src="/guides/lightbulbs/blue-gate-map.jpg"
              alt="Blue Gate map overview"
              caption="Head to the northeast corner at Pilgrims Peak; fewer players contest this spot."
            />
            <h3 className="text-xl font-semibold text-cyan-50">Steps</h3>
            <ol className="space-y-3 text-cyan-100/80">
              <li><strong>1) Load into Blue Gate.</strong> Bring a basic kit; travel light.</li>
              <li><strong>2) Climb Pilgrims Peak.</strong> Grapple or climb toward the top, then drop into the interior room before the summit.</li>
              <li><strong>3) Open the two red lockers.</strong> One of them is a guaranteed Lightbulb if unlooted.</li>
              <li><strong>4) Extract at the nearest point.</strong> Reset if the locker is empty; contest is usually low.</li>
            </ol>
            <div className="grid gap-4 md:grid-cols-2">
              <Figure src="/guides/lightbulbs/pilgrims-peak.jpg" alt="Pilgrims Peak exterior" caption="Approach Pilgrims Peak from the northeast; use grapples to ascend quickly." />
              <Figure src="/guides/lightbulbs/climb-drop.jpg" alt="Drop-in path at Pilgrims Peak" caption="Before the summit, drop into the interior room that holds the lockers." />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Figure src="/guides/lightbulbs/red-locker-room.jpg" alt="Red locker room with guaranteed Lightbulb" caption="Two red lockers; one contains the Lightbulb if unlooted." />
              <Figure src="/guides/lightbulbs/blue-gate-extract.jpg" alt="Blue Gate extract" caption="Extract nearby and requeue if needed; competition is low compared to Dam." />
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-50">Fast loop script (3-6 minutes)</h2>
            <ul className="space-y-2 text-cyan-100/80">
              <li>1) Queue Dam -&gt; Field Depot drawer -&gt; car hood -&gt; Generator Hall extract.</li>
              <li>2) If Dam is picked clean, queue Blue Gate -&gt; Pilgrims Peak lockers -&gt; extract.</li>
              <li>3) Alternate until 5x Lightbulbs are secured; grab Batteries and Sensors along the way.</li>
              <li>4) Pair with other electrical runs (Cooling Fans, Sensors) to finish multiple steps together.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-50">Loadout and pacing tips</h2>
            <ul className="space-y-2 text-cyan-100/80">
              <li>Go light; Lightbulbs are small, so speed and stamina perks beat extra capacity.</li>
              <li>Carry a breach tool for the car hood; a lockpick helps with side lockers but avoid long detours.</li>
              <li>Night/off-peak queues reduce contest at Dam; Blue Gate is naturally quieter.</li>
              <li>Duo split: one player camps Dam guaranteed spawns while another runs Blue Gate to parallelize the 5-Lightbulb requirement.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-50">After you have 5</h2>
            <ul className="space-y-2 text-cyan-100/80">
              <li>Finish Framework by combining Lightbulbs with Batteries, Sensors, and the Exodus Module.</li>
              <li>Recycle spare electrical junk per the <Link href="/loot" className="text-cyan-200 underline decoration-dotted hover:text-white">loot page</Link> to free stash space.</li>
              <li>Use the same Dam loop to double-dip for Cooling Fans or Sensors if you still need them.</li>
            </ul>
          </section>
        </main>

        <footer className="border-t border-cyan-500/20 bg-black/50">
          <div className="container mx-auto max-w-4xl px-4 py-8 flex items-center justify-between text-sm text-cyan-100/70">
            <span>Source: Dec 7-8, 2025 field runs (Dam guaranteed spawns + Blue Gate locker)</span>
            <Link href="/guides" className="font-semibold text-cyan-100 underline decoration-dotted underline-offset-4 hover:text-white">
              Back to guides hub
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
