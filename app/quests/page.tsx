import { generateMetadata as genMeta } from '@/lib/seo';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = genMeta({
  title: 'Arc Raiders Quest Guide - All Quests & Rewards',
  description: 'Arc Raiders quest guide with quest tree, required items, and rewards. Optimize hideout progression, Blue Gate / Stella Montis unlocks, and crafting stations fast.',
  keywords: [
    'arc raiders quests',
    'arc raiders quest guide',
    'arc raiders quest items',
    'arc raiders hideout quests',
    'arc raiders progression',
    'arc raiders quest rewards',
  ],
  canonical: 'https://arcraiderscheatsheet.org/quests',
});

const quests = [
  {
    id: 'medical_station',
    name: 'Medical Station Setup',
    category: 'Hideout',
    difficulty: 'Easy',
    rewards: ['Medical Station Level 1', '500 Credits', 'First Aid Kit x3'],
    requiredItems: [
      { name: 'Antiseptic', quantity: 3 },
      { name: 'Syringe', quantity: 5 },
      { name: 'Fabric', quantity: 10 },
    ],
    description: 'Establish a basic medical facility in your hideout to craft healing items and treat injuries.',
  },
  {
    id: 'power_grid',
    name: 'Power Grid Installation',
    category: 'Hideout',
    difficulty: 'Medium',
    rewards: ['Generator Level 1', '800 Credits', 'Electrical Components x10'],
    requiredItems: [
      { name: 'Power Rod', quantity: 2 },
      { name: 'Battery', quantity: 5 },
      { name: 'Wires', quantity: 15 },
      { name: 'Electrical Components', quantity: 8 },
    ],
    description: 'Install a power generation system to enable advanced crafting stations and lighting.',
  },
  {
    id: 'water_system',
    name: 'Water Purification System',
    category: 'Hideout',
    difficulty: 'Medium',
    rewards: ['Water Station', '600 Credits', 'Clean Water x10'],
    requiredItems: [
      { name: 'Water Pump', quantity: 1 },
      { name: 'Water Filter', quantity: 3 },
      { name: 'Metal Parts', quantity: 12 },
    ],
    description: 'Set up a water purification system to provide clean water for your hideout.',
  },
  {
    id: 'workshop_upgrade_1',
    name: 'Workshop Upgrade Level 1',
    category: 'Crafting',
    difficulty: 'Easy',
    rewards: ['Workshop Level 1', 'Basic Weapon Crafting', '400 Credits'],
    requiredItems: [
      { name: 'Metal Parts', quantity: 20 },
      { name: 'Steel Spring', quantity: 5 },
      { name: 'Wires', quantity: 10 },
    ],
    description: 'Upgrade your workshop to unlock basic weapon crafting and modifications.',
  },
  {
    id: 'workshop_upgrade_2',
    name: 'Workshop Upgrade Level 2',
    category: 'Crafting',
    difficulty: 'Medium',
    rewards: ['Workshop Level 2', 'Advanced Weapon Crafting', '1000 Credits'],
    requiredItems: [
      { name: 'ARC Alloy', quantity: 5 },
      { name: 'Advanced Electrical Components', quantity: 8 },
      { name: 'Magnetic Accelerator', quantity: 2 },
    ],
    description: 'Unlock advanced weapon crafting including energy weapons and modifications.',
  },
  {
    id: 'workshop_upgrade_3',
    name: 'Workshop Upgrade Level 3',
    category: 'Crafting',
    difficulty: 'Hard',
    rewards: ['Workshop Level 3', 'Legendary Crafting', '2000 Credits'],
    requiredItems: [
      { name: 'Leaper Pulse Unit', quantity: 2 },
      { name: 'Exodus Modules', quantity: 3 },
      { name: 'ARC Alloy', quantity: 10 },
    ],
    description: 'Achieve master crafting status with access to legendary weapon blueprints.',
  },
  {
    id: 'security_station',
    name: 'Security Station Installation',
    category: 'Hideout',
    difficulty: 'Medium',
    rewards: ['Security Station', 'Alarm System', '700 Credits'],
    requiredItems: [
      { name: 'Snitch Scanner', quantity: 2 },
      { name: 'Sensors', quantity: 8 },
      { name: 'Electrical Components', quantity: 10 },
    ],
    description: 'Install a security system to protect your hideout from raids.',
  },
  {
    id: 'communication_hub',
    name: 'Communication Hub Setup',
    category: 'Hideout',
    difficulty: 'Medium',
    rewards: ['Communication Hub', 'Team Coordination Bonus', '900 Credits'],
    requiredItems: [
      { name: 'Spotter Relay', quantity: 3 },
      { name: 'Advanced Electrical Components', quantity: 5 },
      { name: 'Battery', quantity: 8 },
    ],
    description: 'Establish a communication network for better team coordination.',
  },
  {
    id: 'drone_workshop',
    name: 'Drone Workshop Construction',
    category: 'Crafting',
    difficulty: 'Hard',
    rewards: ['Drone Workshop', 'Drone Crafting', '1500 Credits'],
    requiredItems: [
      { name: 'Hornet Driver', quantity: 3 },
      { name: 'Wasp Driver', quantity: 3 },
      { name: 'Advanced Electrical Components', quantity: 10 },
      { name: 'Sensors', quantity: 15 },
    ],
    description: 'Build a specialized workshop for crafting and modifying reconnaissance drones.',
  },
  {
    id: 'explosive_workshop',
    name: 'Explosive Workshop Setup',
    category: 'Crafting',
    difficulty: 'Hard',
    rewards: ['Explosive Workshop', 'Explosive Crafting', '1800 Credits'],
    requiredItems: [
      { name: 'Rocketeer Driver', quantity: 2 },
      { name: 'Explosive Mixture', quantity: 10 },
      { name: 'Metal Parts', quantity: 25 },
    ],
    description: 'Construct a workshop dedicated to crafting explosives and rocket launchers.',
  },
];

export default function QuestsPage() {
  const categories = ['All', 'Hideout', 'Crafting'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];
  const questRoutes = [
    {
      title: '开局主线（Dam Battlegrounds）',
      steps: [
        'Picking Up The Pieces',
        'Cleaner Skies',
        'Trash Into Treasure',
        'Off The Radar',
        'A Bad Feeling',
      ],
    },
    {
      title: '中段支线（资源/情报）',
      steps: [
        'The Right Tool',
        'A Better Use',
        'Greasing Her Palms',
        'Dormant Barons',
        'Broken Monument',
        'Eyes On The Prize',
      ],
    },
    {
      title: '区域解锁（Blue Gate / Stella Montis）',
      steps: [
        'Water Troubles',
        'Switching The Supply',
        'Back On Top',
        'Lost Transmission',
        'Blue Gate Unlock',
        'Stella Montis Unlock',
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black relative">
      {/* Tiled Background with Gradient Overlay */}
      <div className="fixed inset-0 z-0" style={{
        backgroundImage: 'url(/quests.jpg)',
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
              Arc Raiders Quest Guide
            </span>
          </h1>
          <p className="text-xl text-cyan-100/80 max-w-3xl">
            Complete Arc Raiders quest guide with all hideout upgrades, workshop progression, and required items. Plan your loot collection strategy to efficiently complete quests and unlock advanced crafting stations.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-cyan-200/80">
            <Link
              href="https://arcraiders.wiki/wiki/Quests"
              className="underline underline-offset-4 decoration-cyan-400 hover:text-cyan-100"
              target="_blank"
              rel="noreferrer"
            >
              官方 Wiki 任务页
            </Link>
            <span className="px-3 py-1 rounded-full border border-cyan-400/40 bg-cyan-500/10 text-cyan-100/90">
              Quest Tree 对应整理
            </span>
          </div>
        </div>
      </section>

      {/* Quest Tree Image */}
      <section className="py-10 border-b border-cyan-500/20 bg-slate-950/50">
        <div className="container mx-auto px-4 max-w-6xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-cyan-200">Quest Tree 总览</h2>
              <p className="text-cyan-100/70 mt-2">
                参考官方任务树，快速了解 Dam Battlegrounds 开局到 Blue Gate / Stella Montis 解锁的主要节点。
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/Quest_Tree.png"
                className="px-4 py-2 rounded-lg border border-cyan-400/40 bg-white/5 text-cyan-100 hover:bg-white/10 transition"
                target="_blank"
                rel="noreferrer"
              >
                查看原图 (4096×4096)
              </Link>
              <Link
                href="https://arcraiders.wiki/wiki/Quests"
                className="px-4 py-2 rounded-lg border border-blue-400/40 bg-blue-500/10 text-blue-100 hover:bg-blue-500/20 transition"
                target="_blank"
                rel="noreferrer"
              >
                对照 Wiki 顺序
              </Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(0,229,255,0.25)] bg-slate-900/60">
            <Image
              src="/Quest_Tree.png"
              alt="Arc Raiders Quest Tree 全景"
              width={2048}
              height={2048}
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* Route Highlights */}
      <section className="py-10 border-b border-cyan-500/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {questRoutes.map((route) => (
              <div
                key={route.title}
                className="rounded-xl border border-cyan-500/30 bg-slate-950/70 p-4 shadow-[0_0_18px_rgba(0,229,255,0.15)]"
              >
                <h3 className="text-lg font-semibold text-cyan-100 mb-3">{route.title}</h3>
                <ol className="list-decimal list-inside space-y-1 text-cyan-100/80 text-sm">
                  {route.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quests List */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-6">
            {quests.map((quest) => (
              <div
                key={quest.id}
                className="bg-gradient-to-b from-slate-950/60 via-blue-950/30 to-slate-950/60 border-2 border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(0,229,255,0.3)] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-cyan-50 mb-2">{quest.name}</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/40">
                        {quest.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                        quest.difficulty === 'Easy'
                          ? 'bg-green-500/20 text-green-300 border-green-500/40'
                          : quest.difficulty === 'Medium'
                            ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40'
                            : 'bg-red-500/20 text-red-300 border-red-500/40'
                      }`}>
                        {quest.difficulty}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-cyan-100/70 mb-6">{quest.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Required Items */}
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-200 mb-3">Required Items</h3>
                    <div className="space-y-2">
                      {quest.requiredItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between bg-slate-900/60 border border-cyan-500/20 rounded px-4 py-2">
                          <Link
                            href={`/#items-search=${item.name}`}
                            className="text-cyan-100/80 hover:text-cyan-300 transition-colors"
                          >
                            {item.name}
                          </Link>
                          <span className="text-cyan-400 font-medium">x{item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rewards */}
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-200 mb-3">Rewards</h3>
                    <div className="space-y-2">
                      {quest.rewards.map((reward, index) => (
                        <div key={index} className="flex items-center bg-slate-900/60 border border-cyan-500/20 rounded px-4 py-2">
                          <span className="text-cyan-400 mr-2">-</span>
                          <span className="text-cyan-100/80">{reward}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* SEO Content */}
        <section className="relative isolate py-16 border-t-2 border-cyan-500/20">
          <div className="absolute inset-0 bg-[#030712]" aria-hidden="true" />
          <div className="relative z-10 container mx-auto px-4 max-w-5xl">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-cyan-300 mb-6">
                Arc Raiders Quest Progression Guide
              </h2>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
                Quests in Arc Raiders are essential for hideout progression and unlocking advanced gameplay features. This Arc Raiders quest guide provides complete information about all available quests, including required items, rewards, and optimal completion order. Understanding the quest system helps you prioritize which items to keep and which materials to farm.
              </p>

              <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
                Hideout Quest Chain
              </h3>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
                Hideout quests in Arc Raiders focus on establishing and upgrading your base of operations. These Arc Raiders quests unlock essential facilities like the medical station, power grid, water purification system, and security station. Each hideout upgrade provides permanent benefits and unlocks new crafting options. Prioritize hideout quests early in your Arc Raiders progression to maximize your efficiency.
              </p>

              <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
                Workshop Progression Path
              </h3>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
                The workshop quest chain in Arc Raiders is crucial for accessing advanced weapon crafting and modifications. Starting with basic weapon crafting at Level 1, progressing through advanced energy weapons at Level 2, and culminating in legendary crafting at Level 3, the workshop progression defines your combat capabilities. This Arc Raiders guide details all required materials for each workshop upgrade, helping you plan your resource collection strategy.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
