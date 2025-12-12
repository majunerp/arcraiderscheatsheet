import { generateMetadata as genMeta } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = genMeta({
  title: 'Arc Raiders Crafting Guide - Workshop Recipes 2025',
  description:
    'Arc Raiders crafting guide with 12+ workshop recipes, materials, and upgrade paths. Learn how to craft weapons, armor, and equipment efficiently in 2025.',
  keywords: [
    'arc raiders crafting',
    'arc raiders workshop',
    'arc raiders crafting guide',
    'arc raiders recipes',
    'arc raiders weapon crafting',
    'arc raiders armor crafting',
    'arc raiders workshop guide',
    'arc raiders crafting system',
  ],
  canonical: 'https://arcraiderscheatsheet.org/workshop',
});

const craftingRecipes = [
  {
    id: 'basic_rifle',
    name: 'Basic Assault Rifle',
    category: 'Weapons',
    tier: 'Basic',
    materials: [
      { name: 'Metal Parts', quantity: 15 },
      { name: 'Steel Spring', quantity: 3 },
      { name: 'Wires', quantity: 5 },
    ],
    output: 'Assault Rifle (Common)',
    workshopLevel: 1,
    description: 'Standard assault rifle with balanced stats. Good for beginners.',
  },
  {
    id: 'advanced_rifle',
    name: 'Advanced Assault Rifle',
    category: 'Weapons',
    tier: 'Advanced',
    materials: [
      { name: 'ARC Alloy', quantity: 5 },
      { name: 'Advanced Electrical Components', quantity: 3 },
      { name: 'Steel Spring', quantity: 5 },
    ],
    output: 'Assault Rifle (Rare)',
    workshopLevel: 2,
    description: 'Enhanced assault rifle with improved accuracy and damage.',
  },
  {
    id: 'energy_rifle',
    name: 'Energy Rifle',
    category: 'Weapons',
    tier: 'Advanced',
    materials: [
      { name: 'Magnetic Accelerator', quantity: 2 },
      { name: 'Advanced Electrical Components', quantity: 5 },
      { name: 'Battery', quantity: 8 },
    ],
    output: 'Energy Rifle (Epic)',
    workshopLevel: 2,
    description: 'Experimental energy weapon with high damage and no bullet drop.',
  },
  {
    id: 'railgun',
    name: 'Railgun',
    category: 'Weapons',
    tier: 'Legendary',
    materials: [
      { name: 'Magnetic Accelerator', quantity: 3 },
      { name: 'Exodus Modules', quantity: 2 },
      { name: 'ARC Alloy', quantity: 8 },
    ],
    output: 'Railgun (Legendary)',
    workshopLevel: 3,
    description: 'Devastating electromagnetic weapon capable of penetrating multiple targets.',
  },
  {
    id: 'rocket_launcher',
    name: 'Rocket Launcher',
    category: 'Weapons',
    tier: 'Advanced',
    materials: [
      { name: 'Rocketeer Driver', quantity: 2 },
      { name: 'Explosive Mixture', quantity: 5 },
      { name: 'Metal Parts', quantity: 20 },
    ],
    output: 'Rocket Launcher (Epic)',
    workshopLevel: 2,
    description: 'Heavy explosive weapon for dealing with groups and vehicles.',
  },
  {
    id: 'basic_armor',
    name: 'Basic Tactical Vest',
    category: 'Armor',
    tier: 'Basic',
    materials: [
      { name: 'Fabric', quantity: 20 },
      { name: 'Metal Parts', quantity: 10 },
      { name: 'Rubber Parts', quantity: 5 },
    ],
    output: 'Tactical Vest (Common)',
    workshopLevel: 1,
    description: 'Standard protective vest offering basic damage reduction.',
  },
  {
    id: 'advanced_armor',
    name: 'Advanced Combat Armor',
    category: 'Armor',
    tier: 'Advanced',
    materials: [
      { name: 'Durable Cloth', quantity: 15 },
      { name: 'ARC Alloy', quantity: 8 },
      { name: 'Rubber Parts', quantity: 10 },
    ],
    output: 'Combat Armor (Rare)',
    workshopLevel: 2,
    description: 'Enhanced armor with improved protection and mobility.',
  },
  {
    id: 'arc_armor',
    name: 'ARC Composite Armor',
    category: 'Armor',
    tier: 'Legendary',
    materials: [
      { name: 'ARC Alloy', quantity: 15 },
      { name: 'Exodus Modules', quantity: 3 },
      { name: 'Durable Cloth', quantity: 20 },
    ],
    output: 'ARC Armor (Legendary)',
    workshopLevel: 3,
    description: 'Top-tier armor incorporating ARC technology for maximum protection.',
  },
  {
    id: 'medkit',
    name: 'Medical Kit',
    category: 'Consumables',
    tier: 'Basic',
    materials: [
      { name: 'Antiseptic', quantity: 2 },
      { name: 'Fabric', quantity: 5 },
      { name: 'Syringe', quantity: 1 },
    ],
    output: 'Medical Kit x3',
    workshopLevel: 1,
    description: 'Restores health over time. Essential for survival.',
  },
  {
    id: 'stim',
    name: 'Combat Stimulant',
    category: 'Consumables',
    tier: 'Advanced',
    materials: [
      { name: 'Antiseptic', quantity: 3 },
      { name: 'Syringe', quantity: 2 },
      { name: 'Advanced Electrical Components', quantity: 1 },
    ],
    output: 'Combat Stim x2',
    workshopLevel: 2,
    description: 'Instantly restores health and provides temporary damage boost.',
  },
  {
    id: 'recon_drone',
    name: 'Reconnaissance Drone',
    category: 'Equipment',
    tier: 'Advanced',
    materials: [
      { name: 'Hornet Driver', quantity: 1 },
      { name: 'Sensors', quantity: 5 },
      { name: 'Battery', quantity: 3 },
    ],
    output: 'Recon Drone',
    workshopLevel: 2,
    description: 'Deployable drone for scouting and marking enemies.',
  },
  {
    id: 'trap',
    name: 'Proximity Mine',
    category: 'Equipment',
    tier: 'Advanced',
    materials: [
      { name: 'Explosive Mixture', quantity: 3 },
      { name: 'Sensors', quantity: 2 },
      { name: 'Wires', quantity: 5 },
    ],
    output: 'Proximity Mine x2',
    workshopLevel: 2,
    description: 'Explosive trap that detonates when enemies approach.',
  },
];

export default function WorkshopPage() {
  const categories = ['All', 'Weapons', 'Armor', 'Consumables', 'Equipment'];
  const tiers = ['All', 'Basic', 'Advanced', 'Legendary'];

  return (
    <div className="w-full min-h-screen bg-black relative">
      {/* Tiled Background with Gradient Overlay */}
      <div className="fixed inset-0 z-0" style={{
        backgroundImage: 'url(/workshop.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.5
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="border-b-2 border-cyan-500/30 pt-10 pb-8 md:pt-14 md:pb-10">
          <div className="container mx-auto px-4 max-w-6xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-cyan-200/80">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,229,255,0.6)]" />
              Lean, patch-safe crafting overview
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,229,255,0.6)]">
                Arc Raiders Workshop & Crafting
              </span>
            </h1>
            <p className="text-base md:text-lg text-cyan-100/80 max-w-3xl">
              Compact recipes, upgrade checkpoints, and material priorities so you can push Workshop 1→3 without digging through walls of text.
            </p>
          </div>
        </section>

        {/* Visual Overview */}
        <section className="py-8 md:py-10 border-b border-cyan-500/20 bg-black/40">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="relative overflow-hidden rounded-xl border border-cyan-500/30 bg-black/50 shadow-[0_15px_40px_rgba(0,0,0,0.5)] aspect-[16/9]">
                <Image
                  src="/workshop.jpg"
                  alt="Workshop overview render"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 720px, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="relative overflow-hidden rounded-xl border border-cyan-500/30 bg-black/50 shadow-[0_15px_40px_rgba(0,0,0,0.5)] aspect-[4/5]">
                <Image
                  src="/arc-raiders-pvp-explained.webp"
                  alt="Arc Raiders crafting floor"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              </div>
            </div>
          </div>
        </section>

      {/* Workshop Levels Info */}
      <section className="py-8 md:py-10 bg-gradient-to-b from-blue-950/30 to-slate-950/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-300 mb-4">Workshop Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { level: 'Level 1', title: 'Basic Crafting', copy: 'Unlock starter weapons and armor for early clears.' },
              { level: 'Level 2', title: 'Advanced Crafting', copy: 'Energy rifles, explosives, and utility gear come online.' },
              { level: 'Level 3', title: 'Legendary Crafting', copy: 'ARC alloys and Exodus parts fuel endgame builds.' },
            ].map((card) => (
              <div
                key={card.level}
                className="bg-slate-900/60 border border-cyan-500/30 rounded-lg p-5 hover:border-cyan-300/60 hover:shadow-[0_0_25px_rgba(0,229,255,0.18)] transition-all"
              >
                <div className="text-2xl font-bold text-cyan-300 mb-1.5 drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]">{card.level}</div>
                <h3 className="text-lg font-semibold text-cyan-100 mb-1">{card.title}</h3>
                <p className="text-cyan-100/70 text-sm leading-relaxed">{card.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crafting Recipes */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-6">Crafting Recipes</h2>
          <div className="space-y-5">
            {craftingRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-gradient-to-b from-slate-950/60 via-blue-950/30 to-slate-950/60 border border-cyan-500/30 rounded-lg p-5 hover:border-cyan-300/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.22)] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-50 mb-1.5">{recipe.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/40">
                        {recipe.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                        recipe.tier === 'Basic' ? 'bg-green-500/20 text-green-300 border-green-500/40' :
                        recipe.tier === 'Advanced' ? 'bg-blue-500/20 text-blue-300 border-blue-500/40' :
                        'bg-purple-500/20 text-purple-300 border-purple-500/40'
                      }`}>
                        {recipe.tier}
                      </span>
                      <span className="px-3 py-1 bg-slate-900/60 text-cyan-200 rounded-full text-sm font-medium border border-cyan-500/30">
                        Workshop Level {recipe.workshopLevel}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-cyan-100/70 mb-4 text-sm md:text-base">{recipe.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Required Materials */}
                  <div>
                    <h4 className="text-base font-semibold text-cyan-200 mb-2.5">Required Materials</h4>
                    <div className="space-y-1.5">
                      {recipe.materials.map((material, index) => (
                        <div key={index} className="flex items-center justify-between bg-slate-900/60 border border-cyan-500/20 rounded px-4 py-2">
                          <Link
                            href={`/#items?search=${material.name}`}
                            className="text-cyan-100/80 hover:text-cyan-300 transition-colors"
                          >
                            {material.name}
                          </Link>
                          <span className="text-cyan-400 font-medium">x{material.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Output */}
                  <div>
                    <h4 className="text-base font-semibold text-cyan-200 mb-2.5">Crafting Output</h4>
                    <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-5 py-3 shadow-[0_0_16px_rgba(0,229,255,0.18)]">
                      <div className="text-cyan-300 text-lg font-bold">{recipe.output}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* SEO Content */}
        <section className="relative isolate py-10 md:py-12 border-t-2 border-cyan-500/20">
          <div className="absolute inset-0 bg-[#030712]" aria-hidden="true" />
          <div className="relative z-10 container mx-auto px-4 max-w-5xl">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-cyan-300 mb-5">
                Complete Arc Raiders Crafting Guide 2025
              </h2>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-5">
                The Arc Raiders crafting system is essential for creating powerful weapons, protective armor, and useful equipment. This comprehensive Arc Raiders crafting guide covers all workshop recipes, required materials, and upgrade paths for 2025. Understanding the Arc Raiders workshop mechanics helps you prioritize which materials to collect and which items to craft first for maximum combat effectiveness.
              </p>

              <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
                Arc Raiders Workshop Progression Strategy
              </h3>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-5">
                Upgrading your workshop in Arc Raiders unlocks increasingly powerful crafting options across three tiers. Workshop Level 1 provides basic weapons and armor crafting for early game survival. Arc Raiders Workshop Level 2 unlocks advanced energy weapons, specialized equipment, and improved armor. Workshop Level 3 enables legendary crafting using rare ARC technology for endgame builds. This Arc Raiders crafting guide recommends prioritizing workshop upgrades early to maximize your combat potential and access high-tier gear.
              </p>

              <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-3">
                Crafting Material Collection Tips
              </h3>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-4">
                Efficient material collection is crucial for successful Arc Raiders crafting. Common materials like Metal Parts, Wires, and Fabric can be found throughout all maps or obtained by recycling items. Rare Arc Raiders crafting materials like ARC Alloy, Exodus Modules, and Magnetic Accelerators require defeating specific ARC enemies, looting Exodus caches, or completing hideout quests. Use this Arc Raiders workshop guide to plan your farming routes on Dam Battlegrounds, Spaceport, Buried City, and Blue Gate for optimal material gathering efficiency.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
