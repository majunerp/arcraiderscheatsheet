import Image from 'next/image';
import Link from 'next/link';

import { defaultKeywords, generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'Deciphering the Data ARC Raiders Quest Guide',
  description:
    'Find the Fuel Control and Arrival Building Magnetic Decryptors on Spaceport, finish the quest in one run, and secure Defibrillators and Trailblazer Grenades.',
  keywords: [
    ...defaultKeywords,
    'arc raiders deciphering the data',
    'arc raiders magnetic decryptor',
    'arc raiders fuel control building',
    'arc raiders arrival building',
    'arc raiders spaceport quest',
  ],
  canonical: 'https://arcraiderscheatsheet.org/guides/deciphering-the-data-arc-raiders-quest-guide',
  ogImage: '/guides/deciphering-data/hero.jpg',
});

const Figure = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <figure className="my-6 overflow-hidden rounded-2xl border border-cyan-500/25 bg-black/50 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
    <div className="relative aspect-video w-full">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width:1024px) 960px, 100vw" />
    </div>
    {caption && <figcaption className="px-4 py-3 text-xs text-cyan-100/75">{caption}</figcaption>}
  </figure>
);

export default function DecipheringDataGuide() {
  return (
    <article className="relative overflow-hidden bg-black text-cyan-50">
      <div className="absolute inset-0">
        <Image
          src="/guides/deciphering-data/hero.jpg"
          alt="Deciphering the Data quest overview"
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
            Deciphering the Data ARC Raiders Quest Guide
          </h1>
          <p className="mt-4 text-lg text-cyan-100/80">
            This single-run Spaceport quest has two Magnetic Decryptors: one in the Fuel Control Building (northeast) and one on
            the top floor of the Arrival Building (northwest). Hit both before dying to earn Defibrillators and Trailblazer
            Grenades.
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
              <li><strong>Quest giver:</strong> Shani (unlocks after &quot;Paving the Way&quot;).</li>
              <li><strong>Objectives:</strong> Decrypt at Fuel Control -&gt; Decrypt at Arrival Building top floor (same raid).</li>
              <li><strong>Rewards:</strong> Defibrillator x3, Trailblazer Grenade x3.</li>
              <li><strong>Failure condition:</strong> Death before both decrypts = restart the quest.</li>
            </ul>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-cyan-500/25 bg-black/50 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
              <iframe
                title="ARC Raiders Deciphering the Data quest guide"
                src="https://www.youtube.com/embed/YRfHWmPFrdc"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Step 1: Fuel Control Building (Northeast)</h2>
            <p className="text-cyan-100/80">
              Enter the Fuel Control Building near Rocket Assembly. It&apos;s dark - use a flashlight. In the server room, the distinct
              blue Magnetic Decryptor sits on the southeast wall. Interact to start decryption; it will fail and point you to the next location.
            </p>
            <Figure
              src="/guides/deciphering-data/fuel-decryptor.jpg"
              alt="Fuel Control Building Magnetic Decryptor"
              caption="Fuel Control Magnetic Decryptor - first objective."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <Figure src="/guides/deciphering-data/fuel-map.jpg" alt="Fuel Control on map" caption="Fuel Control Building on Spaceport map (callout 1)." />
              <Figure src="/guides/deciphering-data/fuel-map-2.jpg" alt="Fuel Control interactive map" caption="Interactive map reference for Fuel Control (northeast, beside Rocket Assembly)." />
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-cyan-50">Step 2: Arrival Building top floor (Northwest)</h2>
            <p className="text-cyan-100/80">
              Cross to the Arrival Building on the northwest side. Go straight upstairs to the top floor. In the central corridor,
              find the long rows of old computer banks; one is the second Magnetic Decryptor. Interact to complete the quest objectives.
            </p>
            <Figure
              src="/guides/deciphering-data/arrival-decryptor.jpg"
              alt="Arrival Building Magnetic Decryptor"
              caption="Second Magnetic Decryptor on the top floor of the Arrival Building."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <Figure src="/guides/deciphering-data/arrival-decryptor-hall.jpg" alt="Arrival Building hall" caption="Rows of computer banks - look for the active Decryptor." />
              <Figure src="/guides/deciphering-data/arrival-map.jpg" alt="Arrival Building on map" caption="Arrival Building map position (northwest tarmac)." />
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-50">Extract or continue</h2>
            <p className="text-cyan-100/80">
              After the second decrypt, the quest is complete. Extract to bank loot or stay to farm Spaceport, then return to Shani in Speranza to claim rewards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-50">Fast run checklist</h2>
            <ul className="space-y-2 text-cyan-100/80">
              <li>1) Spawn Spaceport -&gt; Fuel Control (northeast) -&gt; use Magnetic Decryptor.</li>
              <li>2) Cross tarmac -&gt; Arrival Building (northwest) -&gt; top floor Decryptor.</li>
              <li>3) Extract or finish raid; turn in to Shani for rewards.</li>
            </ul>
          </section>
        </main>

        <footer className="border-t border-cyan-500/20 bg-black/50">
          <div className="container mx-auto max-w-4xl px-4 py-8 flex items-center justify-between text-sm text-cyan-100/70">
            <span>Source: Dec 17, 2025 quest reference</span>
            <Link href="/guides" className="font-semibold text-cyan-100 underline decoration-dotted underline-offset-4 hover:text-white">
              Back to guides hub
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
