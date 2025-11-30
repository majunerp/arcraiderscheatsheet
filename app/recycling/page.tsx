import { generateMetadata as genMeta } from '@/lib/seo';
import Link from 'next/link';
import { items } from '@/lib/items-data';

export const metadata = genMeta({
  title: 'Arc Raiders Recycling Guide 2025 - Recycle Sheet',
  description: 'Arc Raiders recycling guide with full item list, recycle vs sell decisions, and material conversion charts. Know what to recycle for maximum value.',
  keywords: [
    'arc raiders recycling',
    'arc raiders recycle',
    'arc raiders recycling sheet',
    'arc raiders recycle sheet',
    'arc raiders what to recycle',
    'arc raiders recycle vs sell',
    'arc raiders recycling guide',
  ],
  canonical: 'https://arcraiderscheatsheet.org/recycling',
});

const recyclableItems = items.filter(item => item.action === 'recycle' || item.recyclesInto);

const recycleMaterials = [
  { name: 'Electrical Components', icon: '⚡', commonSources: ['Broken electronics', 'Damaged tech', 'Old appliances'] },
  { name: 'Metal Parts', icon: '🔩', commonSources: ['Tools', 'Utensils', 'Vehicle parts'] },
  { name: 'Wires', icon: '🔌', commonSources: ['Cables', 'Broken radios', 'Old electronics'] },
  { name: 'Battery', icon: '🔋', commonSources: ['Power banks', 'Flashlights', 'Electronics'] },
  { name: 'Plastic Parts', icon: '🧱', commonSources: ['Containers', 'Toys', 'Household items'] },
  { name: 'Rubber Parts', icon: '⚫', commonSources: ['Tires', 'Sports equipment', 'Seals'] },
  { name: 'Fabric', icon: '🧵', commonSources: ['Clothes', 'Blankets', 'Parachutes'] },
  { name: 'Sensors', icon: '📡', commonSources: ['Cameras', 'Tech devices', 'Projectors'] },
];

const decisionGuide = [
  {
    category: 'Always Recycle',
    items: ['Broken Electronics', 'Damaged ARC Components', 'Old Appliances', 'Worn Clothing'],
    reason: 'Materials worth more than sell value + needed for crafting',
    color: 'blue',
  },
  {
    category: 'Always Sell',
    items: ['Trinkets (diamond symbol)', 'Playing Cards', 'Music Albums', 'Decorative Items'],
    reason: 'No crafting use, pure credit items',
    color: 'amber',
  },
  {
    category: 'Keep Until Needed',
    items: ['Quest Items', 'Workshop Upgrade Materials', 'Scrappy Training Items'],
    reason: 'Required for progression',
    color: 'green',
  },
  {
    category: 'Context-Dependent',
    items: ['Common Materials', 'Food Items', 'Basic Tools'],
    reason: 'Depends on current needs and inventory space',
    color: 'purple',
  },
];

export default function RecyclingPage() {
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
        <section className="border-b-2 border-cyan-500/30 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,229,255,0.6)]">
                Arc Raiders Recycling Guide
              </span>
            </h1>
            <p className="text-xl text-cyan-100/80 max-w-3xl">
              Complete Arc Raiders recycling sheet with all recyclable items, material conversion charts, and recycle vs sell decision guides. Maximize your material yields and inventory efficiency.
            </p>
          </div>
        </section>

        {/* Materials You Can Get */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-blue-950/30 to-slate-950/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-cyan-300 mb-6">Crafting Materials from Recycling</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {recycleMaterials.map((material) => (
                <div
                  key={material.name}
                  className="bg-slate-900/60 border-2 border-cyan-500/30 rounded-lg p-4 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all"
                >
                  <div className="text-4xl mb-2 text-center">{material.icon}</div>
                  <h3 className="text-lg font-semibold text-cyan-100 mb-3 text-center">{material.name}</h3>
                  <div className="space-y-1">
                    <p className="text-xs text-cyan-400 mb-2">Common Sources:</p>
                    {material.commonSources.map((source, idx) => (
                      <div key={idx} className="text-xs text-cyan-100/60 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {source}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Recyclable Items List */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-cyan-300">All Recyclable Items ({recyclableItems.length})</h2>
              <Link
                href="/"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500/80 to-blue-500/80 hover:from-cyan-400/90 hover:to-blue-400/90 text-white font-semibold rounded-xl transition-all shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:scale-105 border border-cyan-400/50"
              >
                View Full Item Database
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recyclableItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-b from-slate-950/60 via-blue-950/30 to-slate-950/60 border-2 border-cyan-500/30 rounded-lg p-4 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(0,229,255,0.3)] transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-cyan-50">{item.name}</h3>
                    <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40">
                      {item.value} CR
                    </span>
                  </div>

                  <p className="text-sm text-cyan-100/70 mb-3 line-clamp-2">{item.description}</p>

                  {item.recyclesInto && item.recyclesInto.length > 0 && (
                    <div className="bg-slate-900/60 border border-cyan-500/20 rounded p-2">
                      <p className="text-xs text-cyan-400 mb-1">Recycles into:</p>
                      <div className="flex flex-wrap gap-1">
                        {item.recyclesInto.map((material, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-0.5 bg-green-500/20 text-green-300 rounded-full border border-green-500/30"
                          >
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Decision Guide */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-blue-950/30 to-slate-950/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-cyan-300 mb-6">Recycle vs Sell Decision Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {decisionGuide.map((guide) => (
                <div
                  key={guide.category}
                  className="bg-gradient-to-b from-slate-950/60 via-blue-950/30 to-slate-950/60 border-2 border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(0,229,255,0.3)] transition-all"
                >
                  <h3 className="text-xl font-bold text-cyan-100 mb-3">{guide.category}</h3>
                  <div className="space-y-2 mb-4">
                    {guide.items.map((item, idx) => (
                      <div key={idx} className="flex items-center text-cyan-100/70 text-sm">
                        <span className={`mr-2 ${
                          guide.color === 'blue' ? 'text-blue-400' :
                          guide.color === 'amber' ? 'text-amber-400' :
                          guide.color === 'green' ? 'text-green-400' :
                          'text-purple-400'
                        }`}>•</span>
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className={`p-3 rounded-lg border ${
                    guide.color === 'blue' ? 'bg-blue-500/10 border-blue-500/30' :
                    guide.color === 'amber' ? 'bg-amber-500/10 border-amber-500/30' :
                    guide.color === 'green' ? 'bg-green-500/10 border-green-500/30' :
                    'bg-purple-500/10 border-purple-500/30'
                  }`}>
                    <p className="text-cyan-100/80 text-sm">{guide.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 border-t-2 border-cyan-500/20 bg-gradient-to-b from-slate-950/70 to-blue-950/40">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="prose prose-invert max-w-none space-y-5">
              <h2 className="text-3xl font-bold text-cyan-300">Arc Raiders recycling deep dive</h2>
              <p className="text-cyan-100/80">
                Arc Raiders recycling is the backbone of every efficient hideout. When you treat Arc Raiders recycling as a deliberate economy, you convert dead weight into upgrade fuel without slowing your squad. Start each session with a goal: craft ammo, finish a workshop tier, or bankroll a purchase. If that goal demands materials, Arc Raiders recycling is the tool that pays for it faster than selling random trinkets.
              </p>
              <p className="text-cyan-100/80">
                Arc Raiders recycling beats raid salvaging because yields are higher and more predictable. Salvaging mid-raid is a panic button; true Arc Raiders recycling happens at the hideout where every part is counted and no materials are lost. Plan your clears so you can reset quickly, dump recyclables into the bench, and roll straight into the next deployment with fresh kits funded by Arc Raiders recycling returns.
              </p>
              <p className="text-cyan-100/80">
                Arc Raiders recycling routes should focus on tech corridors, power rooms, and research labs. These areas pack electronics, batteries, and damaged ARC parts that flip into high-yield materials. Keep two or three fallback paths ready so you can pivot if another team beats you to the first spawn. Consistency matters; a steady Arc Raiders recycling loop outperforms a risky farm that sometimes wipes the squad.
              </p>
              <p className="text-cyan-100/80">
                Arc Raiders recycling also depends on stash discipline. Carry only the tools needed for three fights so you have room for heavy recyclables. If you pick up a quest item, reevaluate your carry weight and drop lower-yield pieces that would bottleneck Arc Raiders recycling output. Every kilogram you free up is another battery or broken drone that converts into the wires, plastics, and parts your workshop needs.
              </p>
              <p className="text-cyan-100/80">
                Arc Raiders recycling thrives when the squad runs defined roles. One player scouts for containers, another hauls heavy gear, and a third covers angles while sorting. Communicate drop priorities: if someone finds power banks, the pack mule grabs them so the scout stays light. A team that respects Arc Raiders recycling roles clears faster and escapes with more materials than a solo looter juggling every task.
              </p>
              <p className="text-cyan-100/80">
                Arc Raiders recycling pairs well with smart trader timing. Sell diamond trinkets at peak prices, then funnel the credits into workbench upgrades that amplify Arc Raiders recycling yields. When traders rotate, note which materials spike in demand and recycle items that feed those recipes. The compounding effect keeps your balance healthy while your hideout climbs tiers without grinding extra raids.
              </p>
              <p className="text-cyan-100/80">
                Arc Raiders recycling prep starts before you spawn. Bring a single grenade, lean kit, and enough ammo for two fights; the rest of your space belongs to recyclables. Tuck one empty slot away for an emergency quest pickup so you are never forced to drop high-yield Arc Raiders recycling targets. If your bag fills mid-raid, make a quick extract and bank the materials rather than gambling on one more fight.
              </p>
              <p className="text-cyan-100/80">
                Arc Raiders recycling math favors patience. Compare selling a Power Bank for credits versus breaking it down for wires, plastics, and batteries you would otherwise buy. Keep a small spreadsheet or notepad with ratios so you can decide in seconds. When you know the numbers, Arc Raiders recycling becomes automatic: you see an item, know its conversion, and either stash it or skip it without hesitation.
              </p>
              <p className="text-cyan-100/80">
                Arc Raiders recycling also unlocks quest progress. Many missions demand converted materials rather than raw loot, so recycling early keeps you ahead of the curve. Before deploying, note which quests align with Arc Raiders recycling runs—if you need sensors, plan a route through labs; if you need metal parts, hit vehicle yards. By mapping quests to Arc Raiders recycling targets, you achieve two goals in one clean loop.
              </p>
              <p className="text-cyan-100/80">
                Arc Raiders recycling weeks work best with a simple cadence: one credit raid, one recycling raid, one quest raid, then repeat. That rhythm prevents burnout while keeping your materials bin full. Whenever you feel tempted to over-loot, ask whether the next room adds to your Arc Raiders recycling plan; if not, extract and bank the win.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                <div className="rounded-xl border border-cyan-500/30 bg-slate-950/60 p-4">
                  <h3 className="text-lg font-semibold text-cyan-100 mb-2">Arc Raiders recycling quick wins</h3>
                  <ul className="list-disc list-inside text-sm text-cyan-100/75 space-y-1.5">
                    <li>Clear research labs first; they hold top-tier Arc Raiders recycling targets with minimal contest.</li>
                    <li>Salvage only when forced; hideout Arc Raiders recycling delivers the full value every time.</li>
                    <li>Track daily needs so every raid slots into your Arc Raiders recycling pipeline.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-cyan-500/30 bg-slate-950/60 p-4">
                  <h3 className="text-lg font-semibold text-cyan-100 mb-2">Arc Raiders recycling checklist</h3>
                  <ul className="list-disc list-inside text-sm text-cyan-100/75 space-y-1.5">
                    <li>Pack light to leave five slots open for Arc Raiders recycling hauls.</li>
                    <li>Mark two extracts so you can bank Arc Raiders recycling materials fast.</li>
                    <li>Log what you recycled after each raid to refine future Arc Raiders recycling runs.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="relative isolate py-16 border-t-2 border-cyan-500/20">
          <div className="absolute inset-0 bg-[#030712]" aria-hidden="true" />
          <div className="relative z-10 container mx-auto px-4 max-w-5xl">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-cyan-300 mb-6">
                Complete Arc Raiders Recycling System Guide
              </h2>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
                The Arc Raiders recycling system is essential for converting unwanted items into valuable crafting materials. This comprehensive Arc Raiders recycling guide covers every recyclable item, material conversion rates, and optimal recycling strategies for maximizing your resource efficiency. Understanding what to recycle versus sell is crucial for effective inventory management and hideout progression.
              </p>

              <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
                How Arc Raiders Recycling Works
              </h3>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
                Recycling in Arc Raiders breaks down items into core crafting materials at your Hideout workbench. Always recycle at your Hideout rather than salvaging during raids, as Hideout recycling provides full material yields while raid salvaging gives reduced returns. Items marked with "Recyclable" tags show exactly what materials they convert into, helping you make informed Arc Raiders recycling decisions.
              </p>

              <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
                Recycle vs Sell Decision Strategy
              </h3>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
                The key to efficient Arc Raiders inventory management is comparing sell prices to recycled material values. For example, a Power Bank sells for 640 credits but recycles into materials worth over 1,400 credits combined. Use our Arc Raiders recycling sheet to quickly determine whether each item should be recycled for materials or sold for immediate credits. Always check Workshop requirements before recycling, as some items are needed for station upgrades or Scrappy training.
              </p>

              <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
                Best Items to Recycle for Materials
              </h3>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
                Priority Arc Raiders recycling targets include broken electronics for Electrical Components, damaged ARC tech for advanced materials, and household appliances for Metal Parts and Wires. Farm technological zones like Dam Battlegrounds Research Building and Spaceport server rooms for high-density recyclable spawns. Our Arc Raiders recycle guide identifies the most efficient farming routes and optimal items for each crafting material you need.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
