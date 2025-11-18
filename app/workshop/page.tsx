import { generateMetadata as genMeta } from '@/lib/seo';
import Link from 'next/link';

export const metadata = genMeta({
  title: 'Arc Raiders Workshop - Crafting Recipes & Guide',
  description: 'Complete Arc Raiders workshop guide with 12+ crafting recipes, materials, and upgrade paths. Craft weapons, armor, and equipment for optimal gameplay.',
  keywords: [
    'arc raiders crafting',
    'arc raiders workshop',
    'arc raiders crafting guide',
    'arc raiders recipes',
    'arc raiders weapon crafting',
    'arc raiders armor crafting',
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-slate-950/90 via-blue-950/50 to-transparent border-b-2 border-cyan-500/30 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,229,255,0.6)]">
              Arc Raiders Workshop & Crafting
            </span>
          </h1>
          <p className="text-xl text-cyan-100/80 max-w-3xl">
            Complete Arc Raiders crafting guide with all workshop recipes, required materials, and upgrade paths. Learn how to craft powerful weapons, protective armor, and essential equipment for survival.
          </p>
        </div>
      </section>

      {/* Workshop Levels Info */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-blue-950/30 to-slate-950/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-cyan-300 mb-6">Workshop Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border-2 border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all">
              <div className="text-3xl font-bold text-cyan-400 mb-2 drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">Level 1</div>
              <h3 className="text-xl font-semibold text-cyan-100 mb-2">Basic Crafting</h3>
              <p className="text-cyan-100/70">
                Unlock basic weapon and armor crafting. Essential for early game survival.
              </p>
            </div>
            <div className="bg-slate-900/60 border-2 border-blue-500/30 rounded-lg p-6 hover:border-blue-400/60 hover:shadow-[0_0_30px_rgba(0,132,255,0.2)] transition-all">
              <div className="text-3xl font-bold text-blue-400 mb-2 drop-shadow-[0_0_10px_rgba(0,132,255,0.5)]">Level 2</div>
              <h3 className="text-xl font-semibold text-cyan-100 mb-2">Advanced Crafting</h3>
              <p className="text-cyan-100/70">
                Access advanced weapons, energy rifles, and specialized equipment.
              </p>
            </div>
            <div className="bg-slate-900/60 border-2 border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all">
              <div className="text-3xl font-bold text-cyan-300 mb-2 drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">Level 3</div>
              <h3 className="text-xl font-semibold text-cyan-100 mb-2">Legendary Crafting</h3>
              <p className="text-cyan-100/70">
                Craft legendary weapons and top-tier equipment using rare ARC technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crafting Recipes */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-cyan-300 mb-8">Crafting Recipes</h2>
          <div className="space-y-6">
            {craftingRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-gradient-to-b from-slate-950/60 via-blue-950/30 to-slate-950/60 border-2 border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(0,229,255,0.3)] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-50 mb-2">{recipe.name}</h3>
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

                <p className="text-cyan-100/70 mb-6">{recipe.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Required Materials */}
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-200 mb-3">Required Materials</h4>
                    <div className="space-y-2">
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
                    <h4 className="text-lg font-semibold text-cyan-200 mb-3">Crafting Output</h4>
                    <div className="bg-cyan-500/10 border-2 border-cyan-500/40 rounded-lg px-6 py-4 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                      <div className="text-cyan-300 text-xl font-bold">{recipe.output}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* SEO Content */}
        <section className="py-16 bg-gradient-to-b from-blue-950/40 to-slate-950/60 border-t-2 border-cyan-500/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-cyan-300 mb-6">
                Arc Raiders Crafting System Guide
              </h2>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
                The crafting system in Arc Raiders is essential for creating powerful weapons, protective armor, and useful equipment. This Arc Raiders workshop guide covers all crafting recipes, required materials, and workshop upgrade paths. Understanding the crafting system helps you prioritize which materials to collect and which items to craft first.
              </p>

              <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
                Workshop Progression Strategy
              </h3>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
                Upgrading your workshop in Arc Raiders unlocks increasingly powerful crafting options. Start with Workshop Level 1 for basic weapons and armor, progress to Level 2 for advanced energy weapons and specialized equipment, and reach Level 3 for legendary crafting using rare ARC technology. This Arc Raiders crafting guide recommends prioritizing workshop upgrades early to maximize your combat effectiveness.
              </p>

              <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
                Material Collection Tips
              </h3>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
                Efficient material collection is key to successful crafting in Arc Raiders. Common materials like metal parts, wires, and fabric can be found throughout the game world or obtained by recycling items. Rare materials like ARC Alloy, Exodus Modules, and Magnetic Accelerators require defeating specific enemies or completing quests. Use this Arc Raiders guide to plan your farming routes and prioritize high-value materials.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
