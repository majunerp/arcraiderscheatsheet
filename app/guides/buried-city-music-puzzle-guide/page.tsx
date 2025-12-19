import Image from 'next/image';
import Link from 'next/link';

import { defaultKeywords, generateMetadata as genMeta } from '@/lib/seo';

type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
};

type Step = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const Figure = ({ src, alt, caption }: FigureProps) => (
  <figure className="my-6 overflow-hidden rounded-2xl border border-cyan-500/25 bg-black/50 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
    <div className="relative aspect-video w-full">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width:1024px) 960px, 100vw" />
    </div>
    {caption && <figcaption className="px-4 py-3 text-xs text-cyan-100/75">{caption}</figcaption>}
  </figure>
);

const steps: Step[] = [
  {
    id: 1,
    title: 'Plaza Rosa Apartment',
    description:
      'Go to the apartment building in Plaza Rosa (often where the Security Breach is). Head up to the upper floor, go through the demolished wall, through the dining room into the kitchen. The button is near the cupboard at the end.',
    image: '/guides/buried-city-music-puzzle/button-01.jpg',
  },
  {
    id: 2,
    title: 'Galleria Underground',
    description:
      'Head to the Galleria. Use the zipline to descend to the bottom/underground area. The button is near some shelves.',
    image: '/guides/buried-city-music-puzzle/button-02.jpg',
  },
  {
    id: 3,
    title: 'Warehouse Roof',
    description:
      'Climb the ladder to the roof of the Warehouse. Move to the back side of the building; the button is hidden between some machines.',
    image: '/guides/buried-city-music-puzzle/button-03.jpg',
  },
  {
    id: 4,
    title: 'Marano Park Shop',
    description:
      'Find the abandoned shop building in Marano Park. Inside, check the shelves for the button.',
    image: '/guides/buried-city-music-puzzle/button-04.jpg',
  },
  {
    id: 5,
    title: 'Grandioso Apartments (Top Floor)',
    description:
      'Go to the South Building of Grandioso Apartments. Head to the top floor (use the zipline inside the building). Go out onto the balcony, smash the glass to re-enter a different room, and check behind the sofa.',
    image: '/guides/buried-city-music-puzzle/button-05.jpg',
  },
  {
    id: 6,
    title: 'Piazza Arbusto Tower',
    description: 'Climb the tower in Piazza Arbusto. The button is located right on the outside ledge of the tower.',
    image: '/guides/buried-city-music-puzzle/button-06.jpg',
  },
  {
    id: 7,
    title: 'Abandoned Bus (Near Library)',
    description:
      'North of the Library, locate an abandoned bus (the one that often spawns a weapon case). The button is inside near a seat.',
    image: '/guides/buried-city-music-puzzle/button-07.jpg',
  },
  {
    id: 8,
    title: 'West Village / Town Hall House',
    description:
      'West of the Town Hall, look for a house with a large crack in the wall/missing wall section. Enter through the crack, go to the bedroom, and find the button beside the bed.',
    image: '/guides/buried-city-music-puzzle/button-08.jpg',
  },
  {
    id: 9,
    title: 'Buried Properties',
    description:
      'In the Buried Properties area (East part of the map), find a completely broken building. Climb the metal stairs; the button is between some shelves and an electrical cart.',
    image: '/guides/buried-city-music-puzzle/button-09.jpg',
  },
  {
    id: 10,
    title: 'Hospital',
    description:
      'Enter the Hospital and head to the bottom of the main staircase (near the Metro entrance). The button is tucked under the stairs behind a bunch of yellow signposts.',
    image: '/guides/buried-city-music-puzzle/button-10.jpg',
  },
  {
    id: 11,
    title: 'Broken Bridge (Highway)',
    description:
      'Go to the Abandoned Highway where the bridge is snapped in half. Drop down from the break onto the roof of a house below. The button is to your left near rubble.',
    image: '/guides/buried-city-music-puzzle/button-11.jpg',
  },
  {
    id: 12,
    title: 'Church Ruins',
    description: 'Walk up to the buried roof on the West side of the Church Ruins. The button is waiting there.',
    image: '/guides/buried-city-music-puzzle/button-12.jpg',
  },
  {
    id: 13,
    title: 'Santa Maria Attic',
    description:
      'Head to the Santa Maria houses. Go to the top floor and use the zipline to reach the Attic. The button is up there.',
    image: '/guides/buried-city-music-puzzle/button-13.jpg',
  },
  {
    id: 14,
    title: 'Tower near Piazza Roma',
    description:
      'Locate the small tower just East of the Warehouse (near Piazza Roma/Marano Station). Check inside the tower for the button.',
    image: '/guides/buried-city-music-puzzle/button-14.jpg',
  },
  {
    id: 15,
    title: 'Red Tower / Secret Door',
    description:
      'The final button is located near the Red Tower (ground floor entrance with the broken door) or the building adjacent to the Plaza Rosa Pharmacy. This is where the secret door itself is located. Pressing this final button triggers the fireworks and opens the door!',
    image: '/guides/buried-city-music-puzzle/button-15.jpg',
  },
];

export const metadata = genMeta({
  title: 'Buried City Music Puzzle Guide - ARC Raiders',
  description:
    'Complete the 15-step Buried City music puzzle in order, unlock the secret door, and claim the Guitar and rare musical loot.',
  keywords: [
    ...defaultKeywords,
    'arc raiders buried city music puzzle',
    'arc raiders red button puzzle',
    'arc raiders secret door buried city',
    'arc raiders guitar loot',
    'arc raiders plaza rosa',
  ],
  canonical: 'https://arcraiderscheatsheet.org/guides/buried-city-music-puzzle-guide',
  ogImage: '/guides/buried-city-music-puzzle/hero.jpg',
});

export default function BuriedCityMusicPuzzleGuide() {
  return (
    <article className="relative overflow-hidden bg-black text-cyan-50">
      <div className="absolute inset-0">
        <Image
          src="/guides/buried-city-music-puzzle/hero.jpg"
          alt="Buried City music puzzle banner"
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
            <span className="rounded-full border border-cyan-500/40 bg-cyan-500/15 px-3 py-1">Puzzle Guide</span>
            <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1">Buried City</span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1">Dec 19, 2025</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-cyan-50">
            Buried City Music Puzzle Guide
          </h1>
          <p className="mt-4 text-lg text-cyan-100/80">
            A strange door has appeared in Buried City, locked behind a red button that does nothing on its own. Solving the
            music puzzle requires a 15-step sequence that spans the entire map: press 14 hidden red buttons in order, then return
            to the Music Room to hit the final button and unlock the secret loot stash.
          </p>
          <div className="mt-3 text-sm text-cyan-100/70">
            Written by Crazytrick - Posted Dec 18, 2025 - Updated Dec 19, 2025
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/map/buried-city"
              className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(0,229,255,0.35)] transition hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(0,229,255,0.55)]"
            >
              Open Buried City map
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
              src="/guides/buried-city-music-puzzle/intro.jpg"
              alt="Buried City music puzzle secret room entrance"
              caption="The secret door in Buried City opens only after the full 15-button sequence is completed."
            />
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4">
                <h2 id="overview" className="text-2xl font-semibold text-cyan-50">
                  Overview: why this puzzle matters
                </h2>
                <p className="text-cyan-100/80">
                  This is the most complex ARC Raiders puzzle so far. Every match shares the same sequence, and any player pressing a
                  button out of order resets progress for the entire lobby. The reward is worth it: the hidden room contains The Guitar
                  and other musical loot you cannot find anywhere else.
                </p>
                <p className="text-cyan-100/80">
                  Treat this like a coordinated objective. If your squad can split and move fast, you can finish the full route before
                  random players interfere and extract with rare valuables.
                </p>
              </div>
              <aside className="rounded-2xl border border-cyan-500/25 bg-black/50 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">Quick prep</p>
                <ul className="mt-3 space-y-2 text-sm text-cyan-100/80">
                  <li><strong>Team size:</strong> Trio is ideal for map coverage.</li>
                  <li><strong>Movement:</strong> Zipline, Snap Hook, Adrenaline shots.</li>
                  <li><strong>Rule:</strong> Press buttons in exact order (1 - 15).</li>
                  <li><strong>Reset risk:</strong> Any wrong press resets the puzzle.</li>
                </ul>
              </aside>
            </div>
          </section>

          <nav className="rounded-2xl border border-cyan-500/25 bg-slate-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/70">In this guide</p>
            <div className="mt-3 grid gap-2 text-sm text-cyan-100/80 sm:grid-cols-2">
              <a className="transition hover:text-white" href="#how-it-works">How the puzzle works</a>
              <a className="transition hover:text-white" href="#steps">All 15 button locations</a>
              <a className="transition hover:text-white" href="#rewards">Rewards: The Guitar</a>
              <a className="transition hover:text-white" href="#tips">Coordination tips</a>
            </div>
          </nav>

          <section id="how-it-works" className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">How the Buried City music puzzle works</h2>
            <p className="text-cyan-100/80">
              The Music Room contains 15 unlit lights tied to 15 red buttons scattered across Buried City. Each button corresponds to a
              musical note. You must press the buttons in order from 1 to 15. When you finish, the final button by the secret door opens
              the room and triggers fireworks.
            </p>
            <ul className="space-y-2 text-cyan-100/80">
              <li><strong>The golden rule:</strong> press the buttons in the exact order listed below.</li>
              <li><strong>Reset mechanic:</strong> any player pressing a wrong button resets the entire sequence for everyone.</li>
              <li><strong>Visual cue:</strong> correct buttons light up and become unpressable; wrong ones stay pressable.</li>
            </ul>
            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">Recommended strategy</p>
              <p className="mt-2 text-sm text-cyan-100/80">
                Run this as a coordinated trio. Split into two runners and one anchor near the Music Room. Call out each button in order
                to avoid accidental resets by random players.
              </p>
            </div>
          </section>

          <section id="steps" className="space-y-6">
            <h2 className="text-2xl font-semibold text-cyan-50">All 15 Buried City music puzzle red button locations (in order)</h2>
            <p className="text-cyan-100/80">
              Follow this route strictly. Do not skip ahead. If a button is already lit, someone else may have pressed it correctly.
            </p>
            <div className="space-y-8">
              {steps.map((step) => (
                <article key={step.id} className="rounded-2xl border border-cyan-500/25 bg-black/40 p-5">
                  <h3 className="text-xl font-semibold text-cyan-50" id={`step-${step.id}`}>
                    {step.id}. {step.title}
                  </h3>
                  <p className="mt-2 text-cyan-100/80">{step.description}</p>
                  <Figure
                    src={step.image}
                    alt={`Button ${step.id} location in Buried City`}
                    caption={`Button ${step.id} map reference.`}
                  />
                </article>
              ))}
            </div>
          </section>

          <section id="rewards" className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Buried City music puzzle rewards: The Guitar</h2>
            <p className="text-cyan-100/80">
              Once the door opens, fireworks trigger and the Music Room fills with musical loot. The headline reward is the Acoustic
              Guitar, plus Shakers, Recorders, and other rare valuables. Grab everything and extract quickly.
            </p>
            <Figure
              src="/guides/buried-city-music-puzzle/reward.jpg"
              alt="Music puzzle reward room with musical loot"
              caption="The Guitar and other musical items are exclusive to this secret room."
            />
          </section>

          <section id="tips" className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Coordination tips for clean clears</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-cyan-500/25 bg-black/50 p-5">
                <h3 className="text-lg font-semibold text-cyan-50">Keep a runner near the door</h3>
                <p className="mt-2 text-sm text-cyan-100/80">
                  While two teammates hit buttons, keep one player near the Music Room to finish step 15 immediately after button 14.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-500/25 bg-black/50 p-5">
                <h3 className="text-lg font-semibold text-cyan-50">Reset fast if griefed</h3>
                <p className="mt-2 text-sm text-cyan-100/80">
                  If someone in the lobby resets the sequence, regroup and restart at button 1. The order never changes, so pace and
                  callouts win the race.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-cyan-500/20 bg-black/50">
          <div className="container mx-auto max-w-4xl px-4 py-8 flex flex-col gap-4 text-sm text-cyan-100/70 sm:flex-row sm:items-center sm:justify-between">
            <span>Source: Buried City music puzzle reference (Dec 18-19, 2025)</span>
            <Link href="/guides" className="font-semibold text-cyan-100 underline decoration-dotted underline-offset-4 hover:text-white">
              Back to guides hub
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
