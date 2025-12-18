import Image from 'next/image';
import Link from 'next/link';

import { defaultKeywords, generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'The Stench of Corruption ARC Raiders Quest Guide',
  description:
    'Step-by-step guide to The Stench of Corruption quest: find the Departure Building Staff Room key, reach the Spaceport tunnels, and override the Flushing Terminal in one run.',
  keywords: [
    ...defaultKeywords,
    'arc raiders stench of corruption',
    'arc raiders quest guide',
    'arc raiders departure building',
    'arc raiders staff locker room',
    'arc raiders flushing terminal',
    'arc raiders spaceport tunnels',
  ],
  canonical: 'https://arcraiderscheatsheet.org/guides/the-stench-of-corruption-arc-raiders-quest-guide',
  ogImage: '/guides/stench-corruption/hero.jpg',
});

const Figure = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <figure className="my-6 overflow-hidden rounded-2xl border border-cyan-500/25 bg-black/50 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
    <div className="relative aspect-video w-full">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width:1024px) 960px, 100vw" />
    </div>
    {caption && <figcaption className="px-4 py-3 text-xs text-cyan-100/75">{caption}</figcaption>}
  </figure>
);

export default function StenchOfCorruptionGuide() {
  return (
    <article className="relative overflow-hidden bg-black text-cyan-50">
      <div className="absolute inset-0">
        <Image
          src="/guides/stench-corruption/hero.jpg"
          alt="The Stench of Corruption quest overview"
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
            <span className="rounded-full border border-cyan-500/40 bg-cyan-500/15 px-3 py-1">Quest Guide</span>
            <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1">Spaceport</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1">Dec 17, 2025</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-cyan-50">
            The Stench of Corruption ARC Raiders Quest Guide
          </h1>
          <p className="mt-4 text-lg text-cyan-100/80">
            The Stench of Corruption is a single-run quest on Spaceport. You must reach the Departure Building Staff Room,
            grab the Flushing Terminal Key, then travel underground and override a flashing terminal. If you die, the run
            resets, so speed matters.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/map/spaceport"
              className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(0,229,255,0.35)] transition hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(0,229,255,0.55)]"
            >
              Open Spaceport map
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
            <h2 className="text-2xl font-semibold text-cyan-50">Quest overview</h2>
            <ul className="space-y-2 text-cyan-100/80">
              <li><strong>Quest giver:</strong> Shani</li>
              <li><strong>Must be completed in one round:</strong> yes</li>
              <li>
                <strong>Objectives:</strong> Reach Departure Building southwest lobby, find the Staff Locker Room, search for clues,
                reach Spaceport tunnels, override a Flushing Terminal.
              </li>
              <li>
                <strong>Rewards:</strong> Warden Outfit, Dam Staff Room Key x1, Air Freshener x1, Noisemaker x3.
              </li>
            </ul>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-cyan-500/25 bg-black/50 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
              <iframe
                title="The Stench of Corruption ARC Raiders quest guide"
                src="https://www.youtube.com/embed/u4h5MT_-OfA"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Step 1: Departure Building Staff Room</h2>
            <p className="text-cyan-100/80">
              Your first target is the large red Departure Building on Spaceport. Enter the southwest lobby, then head downstairs to the
              Staff Locker Room. Inside, search the hazmat suits on the clothing rack to obtain the Flushing Terminal Key.
            </p>
            <Figure
              src="/guides/stench-corruption/departure-building.jpg"
              alt="Departure Building exterior on Spaceport"
              caption="Enter the southwest lobby of the Departure Building to trigger the first objective."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <Figure
                src="/guides/stench-corruption/staff-room.jpg"
                alt="Staff Locker Room interior"
                caption="The Staff Locker Room is on the lower level of the southwest lobby."
              />
              <Figure
                src="/guides/stench-corruption/hazmat-key.jpg"
                alt="Hazmat suits and key location"
                caption="Interact with the hazmat suits rack to loot the Flushing Terminal Key."
              />
            </div>
            <Figure
              src="/guides/stench-corruption/departure-map.jpg"
              alt="Departure Building location on Spaceport map"
              caption="Map callout for the Departure Building and Staff Room area."
            />
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Step 2: Underground Flushing Terminal</h2>
            <p className="text-cyan-100/80">
              With the key in hand, exit the building and head toward the Launch Towers. Use the collapsed ground crack or the white ladder
              structures nearby to reach the tunnels. Once underground, move west to a maintenance area with computer banks. Find a flashing
              terminal and interact to override the protocol.
            </p>
            <Figure
              src="/guides/stench-corruption/tunnel-entrance.jpg"
              alt="Tunnel entrance near Launch Towers"
              caption="Use the ground crack or ladder structures to enter the Spaceport tunnels."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <Figure
                src="/guides/stench-corruption/flushing-terminal.jpg"
                alt="Flushing terminal in Spaceport tunnels"
                caption="Locate a flashing terminal in the maintenance area and use the key."
              />
              <Figure
                src="/guides/stench-corruption/tunnel-map.jpg"
                alt="Tunnel route map"
                caption="Tunnel map reference: head west from the entrance to the maintenance room."
              />
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-50">Step 3: Extract (optional)</h2>
            <p className="text-cyan-100/80">
              Once the terminal is overridden, the quest is complete. Extract to secure your loot or end the raid and turn the quest in to Shani
              for the Warden Outfit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-50">Fast run checklist</h2>
            <ul className="space-y-2 text-cyan-100/80">
              <li>1) Spaceport spawn -&gt; Departure Building southwest lobby.</li>
              <li>2) Downstairs to Staff Locker Room -&gt; search hazmat suits -&gt; grab key.</li>
              <li>3) Head to Launch Towers -&gt; enter tunnels via crack/ladder.</li>
              <li>4) Move west -&gt; find flashing Flushing Terminal -&gt; override.</li>
              <li>5) Extract or end raid and turn in the quest.</li>
            </ul>
          </section>
        </main>

        <footer className="border-t border-cyan-500/20 bg-black/50">
          <div className="container mx-auto max-w-4xl px-4 py-8 flex items-center justify-between text-sm text-cyan-100/70">
            <span>Source: Dec 17, 2025 quest guide reference</span>
            <Link href="/guides" className="font-semibold text-cyan-100 underline decoration-dotted underline-offset-4 hover:text-white">
              Back to guides hub
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
