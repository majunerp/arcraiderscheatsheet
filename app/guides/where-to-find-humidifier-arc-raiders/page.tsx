import Image from 'next/image';
import Link from 'next/link';

import { defaultKeywords, generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'Where to Find Humidifiers in ARC Raiders',
  description:
    'Step-by-step December 2025 route: guaranteed Red Tower lockers in Buried City plus low-contest apartment sweeps in Dam Battlegrounds. Includes requirements, pathing, and extract pacing.',
  keywords: [
    ...defaultKeywords,
    'arc raiders humidifier',
    'arc raiders humidifier location',
    'arc raiders expedition outfitting',
    'arc raiders residential loot',
    'arc raiders red tower locker',
    'arc raiders dam battlegrounds humidifier',
  ],
  canonical: 'https://arcraiderscheatsheet.org/guides/where-to-find-humidifier-arc-raiders',
  ogImage: '/guides/humidifier.webp',
});

const RequirementList = () => (
  <div className="mt-6 grid gap-3 rounded-2xl border border-cyan-500/25 bg-black/60 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.45)] md:grid-cols-2">
    {[
      { label: 'Expedition stage', value: 'Caravan Expedition Stage 4 / 6 - Outfitting' },
      { label: 'Primary need', value: '5x Humidifier (Residential loot)' },
      { label: 'Also needed', value: '5x Advanced Electrical Components' },
      { label: 'Good to grab', value: '3x Magnetic Accelerator / 3x Leaper Pulse Unit' },
    ].map((item) => (
      <div key={item.label} className="rounded-xl border border-cyan-400/25 bg-slate-950/70 px-4 py-3">
        <p className="text-xs uppercase tracking-[0.1em] text-cyan-200/70">{item.label}</p>
        <p className="mt-1 text-sm font-semibold text-cyan-50">{item.value}</p>
      </div>
    ))}
  </div>
);

const Figure = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) => (
  <figure className="my-6 overflow-hidden rounded-2xl border border-cyan-500/25 bg-black/50 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
    <div className="relative aspect-video w-full">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width:1024px) 960px, 100vw" />
    </div>
    {caption && (
      <figcaption className="px-4 py-3 text-xs text-cyan-100/75">
        {caption}
      </figcaption>
    )}
  </figure>
);

export default function HumidifierGuide() {
  return (
    <article className="relative overflow-hidden bg-black text-cyan-50">
      <div className="absolute inset-0">
        <Image
          src="/guides/humidifier/hero.jpg"
          alt="Humidifier farming overview"
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
            <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1">Residential loot</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1">Dec 9, 2025</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-cyan-50">
            Where to Find Humidifiers in ARC Raiders
          </h1>
          <p className="mt-4 text-lg text-cyan-100/80">
            Linear run based on the Dec 9, 2025 reference: the two red lockers in Red Tower (Buried City) give a near-guaranteed
            Humidifier with a metro extract beside it; if contested, pivot to the northwest apartments in Dam Battlegrounds
            for low-traffic container sweeps. Each loop takes about 3–6 minutes.
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
            <h2 className="text-2xl font-semibold text-cyan-50">Why you need Humidifiers</h2>
            <p className="text-cyan-100/80">
              Caravan Expedition Stage 4 (Outfitting) needs 5 Humidifiers. They only drop from Residential loot, so random searching
              is slow. Use the two high-signal spots: Red Tower lockers for a near-guaranteed pull, and Dam apartments for low-contest,
              container-dense backup runs.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Route 1: Buried City Red Tower (fastest)</h2>
            <p className="text-cyan-100/80">
              Head to the Red Tower beside Plaza Rosa. Core idea: sprint the tower, drop through the wall gap, open the two red lockers,
              and extract at the metro next door—reset the lobby within three minutes.
            </p>
            <Figure
              src="/guides/humidifier/buried-city-map.jpg"
              alt="Buried City route overview"
              caption="Cut straight toward Plaza Rosa and Red Tower; stay off the main street when possible."
            />
            <h3 className="text-xl font-semibold text-cyan-50">Steps</h3>
            <ol className="space-y-3 text-cyan-100/80">
              <li><strong>1) Spawn and sprint to Plaza Rosa.</strong> Ignore side loot; stamina matters.</li>
              <li><strong>2) Climb the outer scaffolding, enter via the wall gap.</strong> Circle the roof to find the opening.</li>
              <li><strong>3) Open both red lockers.</strong> One usually holds a Humidifier; check nearby drawers for extra residential loot.</li>
              <li><strong>4) Drop to metro and extract immediately.</strong> If empty, reset the lobby to maximize attempts.</li>
            </ol>
            <div className="grid gap-4 md:grid-cols-2">
              <Figure src="/guides/humidifier/red-tower.jpg" alt="Red Tower exterior" caption="Red Tower by Plaza Rosa; outer scaffolding makes the climb simple." />
              <Figure src="/guides/humidifier/red-lockers.jpg" alt="Red lockers inside Red Tower" caption="Two red lockers inside—one often contains a Humidifier." />
            </div>
            <Figure src="/guides/humidifier/metro-extract.jpg" alt="Metro extract beside Red Tower" caption="Metro extract is next to the tower—grab and go for fast resets." />
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
              Tip: If you hear footsteps or gunfire, skip Red Tower and pivot to Dam apartments—time matters more than the fight.
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Route 2: Dam Battlegrounds apartments (low contest)</h2>
            <p className="text-cyan-100/80">
              When Red Tower is stripped, switch to the northwest residential block in Dam. Pale Apartments and Ruby Residence
              have dense residential containers with low competition—often enough to finish the remaining Humidifiers in 1–2 raids.
            </p>
            <Figure
              src="/guides/humidifier/dam-map.jpg"
              alt="Dam Battlegrounds map"
              caption="Head straight to the northwest residential cluster; night raids are even quieter."
            />
            <h3 className="text-xl font-semibold text-cyan-50">Steps</h3>
            <ol className="space-y-3 text-cyan-100/80">
              <li><strong>1) Pick night or off-peak lobbies.</strong> Less PvP, higher container completion.</li>
              <li><strong>2) Clear Pale Apartments first.</strong> Prioritize kitchens, wardrobes, side cabinets, and shelves.</li>
              <li><strong>3) Rotate to Ruby Residence.</strong> Hit kitchens and small storage rooms; avoid lingering in hallways.</li>
              <li><strong>4) Extract nearby and queue again.</strong> Residential loot is light—speed beats hoarding.</li>
            </ol>
            <div className="grid gap-4 md:grid-cols-2">
              <Figure src="/guides/humidifier/pale-apartments.jpg" alt="Pale Apartments exterior" caption="Pale Apartments: dense containers; clear top-down to avoid misses." />
              <Figure src="/guides/humidifier/ruby-residence.jpg" alt="Ruby Residence exterior" caption="Ruby Residence: even lower contest, great after a failed Red Tower run." />
            </div>
            <div className="rounded-xl border border-blue-400/30 bg-blue-500/10 px-4 py-3 text-sm text-cyan-100/85">
              Container priority: kitchen cabinets &gt; bedroom wardrobes &gt; shelves/drawers. Red tool lockers can drop extra electrical parts.
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-50">3–6 minute repeatable script</h2>
            <ul className="space-y-2 text-cyan-100/80">
              <li>1) Queue Buried City → sprint Red Tower → two red lockers → metro extract.</li>
              <li>2) If empty, queue Dam → Pale Apartments → Ruby Residence → extract.</li>
              <li>3) Alternate maps until 5x Humidifiers are secured.</li>
              <li>4) Grab Advanced Electrical Components, Magnetic Accelerators, and Leaper Pulse Units en route to cut future trips.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-50">Loadout and pacing tips</h2>
            <ul className="space-y-2 text-cyan-100/80">
              <li>Go light; Humidifiers weigh little—speed and stamina trump capacity.</li>
              <li>Lockbreakers help with nearby secure lockers, but don’t detour from red lockers/residential drawers.</li>
              <li>Night or off-peak lobbies increase Red Tower success; in primetime, go straight to Dam to save time.</li>
              <li>Duo split: one camps Red Tower, one clears apartments to finish the 5-piece requirement faster.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-50">After you have 5</h2>
            <ul className="space-y-2 text-cyan-100/80">
              <li>Combine with Advanced Electrical Components and Magnetic Accelerators to finish Outfitting.</li>
              <li>Recycle spare residential junk per the <Link href="/loot" className="text-cyan-200 underline decoration-dotted hover:text-white">loot page</Link> to keep stash space free.</li>
              <li>Plan ahead for Stage 5: Dam apartments can also feed medical/lab items while you’re there.</li>
            </ul>
          </section>
        </main>

        <footer className="border-t border-cyan-500/20 bg-black/50">
          <div className="container mx-auto max-w-4xl px-4 py-8 flex items-center justify-between text-sm text-cyan-100/70">
            <span>Source: Dec 9, 2025 field run (Red Tower + Dam apartments)</span>
            <Link href="/guides" className="font-semibold text-cyan-100 underline decoration-dotted underline-offset-4 hover:text-white">
              Back to guides hub
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
