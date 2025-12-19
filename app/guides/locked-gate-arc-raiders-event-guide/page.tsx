import Image from 'next/image';
import Link from 'next/link';

import { defaultKeywords, generateMetadata as genMeta } from '@/lib/seo';

type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
};

const Figure = ({ src, alt, caption }: FigureProps) => (
  <figure className="my-6 overflow-hidden rounded-2xl border border-cyan-500/25 bg-black/50 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
    <div className="relative aspect-video w-full">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width:1024px) 960px, 100vw" />
    </div>
    {caption && <figcaption className="px-4 py-3 text-xs text-cyan-100/75">{caption}</figcaption>}
  </figure>
);

const overviewStats = [
  { label: 'Map', value: 'Blue Gate (event-only)' },
  { label: 'Time limit', value: '40 minutes' },
  { label: 'Objective', value: 'Find 4 security codes and open the main gate' },
  { label: 'Exclusive reward', value: 'Bobcat weapon blueprint' },
  { label: 'Hazards', value: 'Landmines + Rocketeers' },
];

export const metadata = genMeta({
  title: 'Locked Gate ARC Raiders Event Guide',
  description:
    'Complete the Locked Gate event on Blue Gate: locate four security codes, activate the Gate Control Room consoles, and loot the underground for the Bobcat blueprint.',
  keywords: [
    ...defaultKeywords,
    'arc raiders locked gate event',
    'arc raiders blue gate locked gate',
    'arc raiders security codes',
    'arc raiders gate control room',
    'arc raiders bobcat blueprint',
  ],
  canonical: 'https://arcraiderscheatsheet.org/guides/locked-gate-arc-raiders-event-guide',
  ogImage: '/guides/locked-gate-event/hero.jpg',
});

export default function LockedGateEventGuide() {
  return (
    <article className="relative overflow-hidden bg-black text-cyan-50">
      <div className="absolute inset-0">
        <Image
          src="/guides/locked-gate-event/hero.jpg"
          alt="Locked Gate event banner on Blue Gate"
          fill
          className="object-cover opacity-35"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-slate-950" />
        <div className="absolute -left-8 top-6 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-6 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <header className="container mx-auto max-w-4xl px-4 pt-16 pb-10 md:pt-20">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-100/80">
            <span className="rounded-full border border-cyan-500/40 bg-cyan-500/15 px-3 py-1">Event Guide</span>
            <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1">Blue Gate</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1">Dec 18, 2025</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-cyan-50">
            Locked Gate ARC Raiders Event Guide
          </h1>
          <p className="mt-4 text-lg text-cyan-100/80">
            The Locked Gate Event is a high-stakes map modifier for Blue Gate. It currently shows up twice a day and requires the
            whole lobby to cooperate: locate four security codes across the map, deliver them to the Gate Control Room, and unlock
            the underground section for exclusive loot.
          </p>
          <div className="mt-3 text-sm text-cyan-100/70">Written by Crazytrick ¡¤ Posted Dec 18, 2025</div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/map/blue-gate"
              className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(0,229,255,0.35)] transition hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(0,229,255,0.55)]"
            >
              Open Blue Gate map
            </Link>
            <Link
              href="/guides"
              className="rounded-lg border border-cyan-400/40 bg-black/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/70 hover:text-white"
            >
              Back to guides
            </Link>
          </div>
        </header>

        <main className="container mx-auto max-w-4xl px-4 pb-16 space-y-12">
          <section className="space-y-6">
            <Figure
              src="/guides/locked-gate-event/intro.jpg"
              alt="Locked Gate reinforced checkpoint on Blue Gate"
              caption="The Locked Gate event centers on the reinforced checkpoint and the underground gate system."
            />
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4">
                <h2 id="overview" className="text-2xl font-semibold text-cyan-50">
                  Locked Gate event overview
                </h2>
                <p className="text-cyan-100/80">
                  Four different security codes can spawn inside loot containers across Ancient Fort, Raider's Refuge, Reinforced
                  Reception, and Pilgrim's Peak. Any player can find a code, and multiple copies can spawn, so the lobby can finish
                  even if one carrier goes down.
                </p>
                <p className="text-cyan-100/80">
                  Once all codes are delivered, the Gate Control Room unlocks the main blast doors. The underground Security Wing and
                  Breach Room have boosted loot tables, making this a must-run event for rare blueprints.
                </p>
              </div>
              <aside className="rounded-2xl border border-cyan-500/25 bg-black/50 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">Event facts</p>
                <ul className="mt-3 space-y-2 text-sm text-cyan-100/80">
                  {overviewStats.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}:</strong> {item.value}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Crucial hazard warning: landmines</h2>
            <p className="text-cyan-100/80">
              The Locked Gate modifier spreads landmines across the surface. Slow down and scan for a faint red glow before sprinting
              through open ground. Pack Bandages and Shield Rechargers if you like to move fast.
            </p>
            <Figure
              src="/guides/locked-gate-event/pilgrims-peak.jpg"
              alt="Pilgrim's Peak security code"
              caption="Security codes can spawn in any container, even in dangerous zones like Pilgrim's Peak."
            />
          </section>

          <section id="step-1" className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Step 1: Find the 4 security codes</h2>
            <p className="text-cyan-100/80">
              Security codes spawn in any loot container within four specific zones. You do not need to collect all four yourself ¡ª
              the entire lobby contributes.
            </p>
            <Figure
              src="/guides/locked-gate-event/areas-map.jpg"
              alt="Map showing code drop zones for Locked Gate event"
              caption="All four zones where security codes can drop during the event."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-cyan-500/25 bg-black/50 p-5">
                <h3 className="text-lg font-semibold text-cyan-50">Ancient Fort</h3>
                <p className="mt-2 text-sm text-cyan-100/80">
                  Riddled with landmines. Check every crate; keys can spawn outside the puzzle room.
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-500/25 bg-black/50 p-5">
                <h3 className="text-lg font-semibold text-cyan-50">Raider's Refuge</h3>
                <p className="mt-2 text-sm text-cyan-100/80">
                  Search every container ¡ª keys can show up in breached metal bins.
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-500/25 bg-black/50 p-5">
                <h3 className="text-lg font-semibold text-cyan-50">Reinforced Reception</h3>
                <p className="mt-2 text-sm text-cyan-100/80">
                  Often spawns in the single trashcan inside the reception building.
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-500/25 bg-black/50 p-5">
                <h3 className="text-lg font-semibold text-cyan-50">Pilgrim's Peak</h3>
                <p className="mt-2 text-sm text-cyan-100/80">
                  High danger zone guarded by two Rocketeers. Use lure grenades or long-range weapons.
                </p>
              </div>
            </div>
          </section>

          <section id="step-2" className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Step 2: The Gate Control Room</h2>
            <p className="text-cyan-100/80">
              Bring any security code to the Gate Control Room near the Warehouse Complex (on top of the checkpoint gate structure).
              Inside are four wall consoles. Interact with the console that matches your code.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Figure
                src="/guides/locked-gate-event/gate-control-map.jpg"
                alt="Gate Control Room location on Blue Gate"
                caption="Gate Control Room location near the Warehouse Complex checkpoint."
              />
              <Figure
                src="/guides/locked-gate-event/gate-control-room.jpg"
                alt="Gate Control Room console wall"
                caption="Four consoles line the walls; match your code to the correct station."
              />
            </div>
            <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-rose-200/80">PvP warning</p>
              <p className="mt-2 text-sm text-rose-100/80">
                This is the most dangerous room on the map. Expect campers waiting for code carriers. Clear corners and cover exits.
              </p>
            </div>
          </section>

          <section id="step-3" className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Step 3: Enter the underground</h2>
            <p className="text-cyan-100/80">
              When all four consoles are activated, the main blast doors at the Outer Gates open. This is the only underground
              entrance for the event. Sprint down and prioritize the Security Wing and Breach Room for boosted loot.
            </p>
            <Figure
              src="/guides/locked-gate-event/underground.jpg"
              alt="Looting inside the Locked Gate underground"
              caption="The underground Security Wing has massively increased loot tables during the event."
            />
          </section>

          <section id="bobcat" className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">The Bobcat blueprint</h2>
            <p className="text-cyan-100/80">
              The chase item is the Bobcat weapon blueprint. It drops frequently inside the underground Security Wing, but reports
              confirm it can spawn in any container on the map during the event ¡ª keep looting even if you miss the gate.
            </p>
            <Figure
              src="/guides/locked-gate-event/bobcat-blueprint.png"
              alt="Bobcat weapon blueprint"
              caption="The Bobcat blueprint is the exclusive reward tied to the Locked Gate event."
            />
          </section>
        </main>

        <footer className="border-t border-cyan-500/20 bg-black/50">
          <div className="container mx-auto max-w-4xl px-4 py-8 flex flex-col gap-4 text-sm text-cyan-100/70 sm:flex-row sm:items-center sm:justify-between">
            <span>Source: Locked Gate event reference (Dec 18, 2025)</span>
            <Link href="/guides" className="font-semibold text-cyan-100 underline decoration-dotted underline-offset-4 hover:text-white">
              Back to guides hub
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
