import { generateMetadata as genMeta } from '@/lib/seo';
import Link from 'next/link';

export const metadata = genMeta({
  title: 'Arc Raiders Quest Guide - All Quests & Rewards',
  description: 'Complete Arc Raiders quest guide with 10+ quests, required items, and rewards. Optimize your hideout progression and unlock advanced crafting stations.',
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

  return (
    <div className="w-full min-h-screen bg-black">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-black border-b border-zinc-800 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Arc Raiders Quest Guide
            </span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl">
            Complete Arc Raiders quest guide with all hideout upgrades, workshop progression, and required items. Plan your loot collection strategy to efficiently complete quests and unlock advanced crafting stations.
          </p>
        </div>
      </section>

      {/* Quests List */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-6">
            {quests.map((quest) => (
              <div
                key={quest.id}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-blue-500 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{quest.name}</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium">
                        {quest.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        quest.difficulty === 'Easy' ? 'bg-green-900/30 text-green-400' :
                        quest.difficulty === 'Medium' ? 'bg-yellow-900/30 text-yellow-400' :
                        'bg-red-900/30 text-red-400'
                      }`}>
                        {quest.difficulty}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-zinc-300 mb-6">{quest.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Required Items */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Required Items</h3>
                    <div className="space-y-2">
                      {quest.requiredItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between bg-zinc-800 rounded px-4 py-2">
                          <Link
                            href={`/#items?search=${item.name}`}
                            className="text-zinc-300 hover:text-blue-400 transition-colors"
                          >
                            {item.name}
                          </Link>
                          <span className="text-blue-400 font-medium">x{item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rewards */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Rewards</h3>
                    <div className="space-y-2">
                      {quest.rewards.map((reward, index) => (
                        <div key={index} className="flex items-center bg-zinc-800 rounded px-4 py-2">
                          <span className="text-green-400 mr-2">✓</span>
                          <span className="text-zinc-300">{reward}</span>
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
      <section className="py-16 bg-zinc-900/30 border-t border-zinc-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6">
              Arc Raiders Quest Progression Guide
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Quests in Arc Raiders are essential for hideout progression and unlocking advanced gameplay features. This Arc Raiders quest guide provides complete information about all available quests, including required items, rewards, and optimal completion order. Understanding the quest system helps you prioritize which items to keep and which materials to farm.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Hideout Quest Chain
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Hideout quests in Arc Raiders focus on establishing and upgrading your base of operations. These Arc Raiders quests unlock essential facilities like the medical station, power grid, water purification system, and security station. Each hideout upgrade provides permanent benefits and unlocks new crafting options. Prioritize hideout quests early in your Arc Raiders progression to maximize your efficiency.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Workshop Progression Path
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              The workshop quest chain in Arc Raiders is crucial for accessing advanced weapon crafting and modifications. Starting with basic weapon crafting at Level 1, progressing through advanced energy weapons at Level 2, and culminating in legendary crafting at Level 3, the workshop progression defines your combat capabilities. This Arc Raiders guide details all required materials for each workshop upgrade, helping you plan your resource collection strategy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
