import { generateMetadata as genMeta } from '@/lib/seo';
import Link from 'next/link';

export const metadata = genMeta({
  title: 'Arc Raiders Skill Tree & Builds Guide - Best 2025 Builds',
  description: 'Master Arc Raiders skill trees with our complete builds guide. 75 skill points, 3 trees (Mobility, Survival, Conditioning), best solo & squad builds for 2025.',
  keywords: [
    'arc raiders skill tree',
    'arc raiders builds',
    'arc raiders best build',
    'arc raiders skill tree build',
    'arc raiders character progression',
    'arc raiders talent guide',
    'arc raiders mobility build',
    'arc raiders survival build',
  ],
  canonical: 'https://arcraiderscheatsheet.org/builds',
});

const skillTrees = [
  {
    id: 'mobility',
    name: 'Mobility',
    color: 'cyan',
    description: 'Move faster, dodge more, and outmaneuver enemies across massive maps.',
    keySkills: [
      { name: 'Marathon Runner', tier: 'Essential', description: 'Increased sprint duration and stamina efficiency' },
      { name: 'Youthful Lungs', tier: 'Essential', description: 'Faster stamina regeneration' },
      { name: 'Parkour Master', tier: 'Advanced', description: 'Enhanced climbing and vaulting speed' },
      { name: 'Swift Dodger', tier: 'Advanced', description: 'Reduced dodge cooldown and stamina cost' },
    ],
  },
  {
    id: 'survival',
    name: 'Survival',
    color: 'green',
    description: 'Resource management and self-sufficiency. Enhance looting, carrying capacity, and crafting.',
    keySkills: [
      { name: 'In-Round Crafting', tier: 'Essential', description: 'Craft bandages, shield rechargers, and ammo during raids' },
      { name: "Looter's Instincts", tier: 'Essential', description: 'Highlight nearby loot and improve loot quality' },
      { name: 'Pack Mule', tier: 'Advanced', description: 'Significantly increased carrying capacity' },
      { name: 'Scavenger Expert', tier: 'Advanced', description: 'Faster looting and better loot detection range' },
    ],
  },
  {
    id: 'conditioning',
    name: 'Conditioning',
    color: 'orange',
    description: 'Noise suppression, melee efficiency, and recovery mechanics for tactical gameplay.',
    keySkills: [
      { name: 'Silent Steps', tier: 'Essential', description: 'Reduced movement noise for stealth' },
      { name: 'Used to the Weight', tier: 'Essential', description: 'Reduced movement penalty from heavy gear' },
      { name: 'Melee Mastery', tier: 'Advanced', description: 'Increased melee damage and swing speed' },
      { name: 'Quick Recovery', tier: 'Advanced', description: 'Faster health regeneration out of combat' },
    ],
  },
];

const builds = [
  {
    id: 'solo_looter',
    name: 'Solo Looter Build',
    type: 'Solo',
    difficulty: 'Beginner',
    totalPoints: 75,
    focus: 'Looting & Survival',
    distribution: {
      mobility: 25,
      survival: 35,
      conditioning: 15,
    },
    description: 'Designed for solo players focusing on maximizing stamina, stealth, survivability, and efficient looting. Get in, grab loot, and get out safely.',
    priorities: [
      'Unlock In-Round Crafting (Survival) - Non-negotiable for self-sufficiency',
      "Invest heavily in Looter's Instincts and carrying capacity",
      'Marathon Runner + Youthful Lungs for extended mobility',
      'Silent Steps for stealth when avoiding confrontation',
    ],
    strengths: ['Maximum loot carrying capacity', 'Self-sufficient crafting', 'Extended sprint duration', 'Stealth capabilities'],
    playstyle: 'Avoid fights, prioritize loot, extract quickly with maximum value',
  },
  {
    id: 'balanced',
    name: 'Balanced All-Rounder Build',
    type: 'Versatile',
    difficulty: 'Beginner',
    totalPoints: 75,
    focus: 'Mixed Gameplay',
    distribution: {
      mobility: 25,
      survival: 25,
      conditioning: 25,
    },
    description: 'Perfect for new players. Balanced mix of stamina control, crafting access, and looting bonuses without over-specializing in one direction.',
    priorities: [
      'First 20 points: Marathon Runner, Youthful Lungs, Used to the Weight',
      'Mid-game: In-Round Crafting + basic looting skills',
      'Late-game: Spread evenly across all three trees',
    ],
    strengths: ['No major weaknesses', 'Adaptable to any situation', 'Good stamina management', 'Decent looting'],
    playstyle: 'Flexible approach - can loot, fight, or support squad as needed',
  },
  {
    id: 'mobility',
    name: 'Free Runner Build',
    type: 'Aggressive',
    difficulty: 'Advanced',
    totalPoints: 75,
    focus: 'Speed & Agility',
    distribution: {
      mobility: 50,
      survival: 15,
      conditioning: 10,
    },
    description: 'Built for pure speed, agility, and complete freedom of movement. Run further and faster than anyone else with enhanced maneuverability for combat advantage.',
    priorities: [
      'Max out Mobility tree for movement speed and stamina',
      'Parkour Master for vertical mobility',
      'Minimal Survival for basic crafting',
      'Light conditioning for stamina efficiency',
    ],
    strengths: ['Unmatched movement speed', 'Superior positioning in fights', 'Quick rotations', 'Escape capability'],
    playstyle: 'Aggressive flanking, fast repositioning, hit-and-run tactics',
  },
  {
    id: 'tank',
    name: 'Tank Build',
    type: 'Squad',
    difficulty: 'Advanced',
    totalPoints: 75,
    focus: 'Durability & Recovery',
    distribution: {
      mobility: 15,
      survival: 30,
      conditioning: 30,
    },
    description: 'Dominate long fights with focus on defense, self-recovery, and overall tankiness. Perfect for players who want to endure heavy damage.',
    priorities: [
      'Quick Recovery + health regeneration skills',
      'Used to the Weight for heavy armor viability',
      'In-Round Crafting for healing items',
      'Minimum mobility for basic stamina',
    ],
    strengths: ['High survivability', 'Sustained combat capability', 'Self-healing', 'Frontline presence'],
    playstyle: 'Absorb damage for squad, hold positions, outlast enemies in prolonged fights',
  },
];

export default function BuildsPage() {
  return (
    <div className="w-full min-h-screen bg-black relative">
      {/* Tiled Background with Gradient Overlay */}
      <div className="fixed inset-0 z-0" style={{
        backgroundImage: 'url(/skills.jpg)',
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
                Arc Raiders Skill Tree & Builds
              </span>
            </h1>
            <p className="text-xl text-cyan-100/80 max-w-3xl">
              Master Arc Raiders with our complete skill tree guide. Learn the best builds for solo, squad, and PvP gameplay with optimized 75-point distributions across Mobility, Survival, and Conditioning trees.
            </p>
          </div>
        </section>

        {/* Skill Points Overview */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-gradient-to-b from-slate-950/80 to-blue-950/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 mb-12">
              <h2 className="text-2xl font-bold text-cyan-300 mb-4">Skill Points System</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">75</div>
                  <div className="text-cyan-100/70 mt-2">Total Skill Points</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 drop-shadow-[0_0_10px_rgba(0,132,255,0.5)]">3</div>
                  <div className="text-cyan-100/70 mt-2">Skill Trees</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">45</div>
                  <div className="text-cyan-100/70 mt-2">Unique Skills</div>
                </div>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                <p className="text-cyan-100/80 text-sm">
                  <strong className="text-cyan-300">⚠️ Important:</strong> Arc Raiders doesn't currently offer skill resets. Choose wisely! You can reset via the voluntary wipe every eight weeks through the Expedition Project.
                </p>
              </div>
            </div>

            {/* Skill Trees */}
            <h2 className="text-3xl font-bold text-cyan-300 mb-8">The Three Skill Trees</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {skillTrees.map((tree) => (
                <div
                  key={tree.id}
                  className="bg-gradient-to-b from-slate-950/60 via-blue-950/30 to-slate-950/60 border-2 border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(0,229,255,0.3)] transition-all"
                >
                  <h3 className="text-2xl font-bold text-cyan-100 mb-3">{tree.name}</h3>
                  <p className="text-cyan-100/70 mb-6">{tree.description}</p>

                  <h4 className="text-sm font-semibold text-cyan-300 mb-3 uppercase">Key Skills</h4>
                  <div className="space-y-3">
                    {tree.keySkills.map((skill, idx) => (
                      <div key={idx} className="bg-slate-900/60 border border-cyan-500/20 rounded px-3 py-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-cyan-100 font-medium text-sm">{skill.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            skill.tier === 'Essential'
                              ? 'bg-green-500/20 text-green-300 border border-green-500/40'
                              : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                          }`}>
                            {skill.tier}
                          </span>
                        </div>
                        <p className="text-cyan-100/60 text-xs">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Best Builds */}
            <h2 className="text-3xl font-bold text-cyan-300 mb-8">Best Builds for 2025</h2>
            <div className="space-y-8">
              {builds.map((build) => (
                <div
                  key={build.id}
                  className="bg-gradient-to-b from-slate-950/60 via-blue-950/30 to-slate-950/60 border-2 border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(0,229,255,0.3)] transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-50 mb-2">{build.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/40">
                          {build.type}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                          build.difficulty === 'Beginner'
                            ? 'bg-green-500/20 text-green-300 border-green-500/40'
                            : 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40'
                        }`}>
                          {build.difficulty}
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/40">
                          {build.focus}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-cyan-100/80 mb-6">{build.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Point Distribution */}
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-200 mb-3">Point Distribution ({build.totalPoints} total)</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-slate-900/60 border border-cyan-500/20 rounded px-4 py-2">
                          <span className="text-cyan-100/80">Mobility</span>
                          <span className="text-cyan-400 font-medium">{build.distribution.mobility} points</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-900/60 border border-green-500/20 rounded px-4 py-2">
                          <span className="text-cyan-100/80">Survival</span>
                          <span className="text-green-400 font-medium">{build.distribution.survival} points</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-900/60 border border-orange-500/20 rounded px-4 py-2">
                          <span className="text-cyan-100/80">Conditioning</span>
                          <span className="text-orange-400 font-medium">{build.distribution.conditioning} points</span>
                        </div>
                      </div>
                    </div>

                    {/* Strengths */}
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-200 mb-3">Strengths</h4>
                      <div className="space-y-2">
                        {build.strengths.map((strength, index) => (
                          <div key={index} className="flex items-center bg-slate-900/60 border border-cyan-500/20 rounded px-4 py-2">
                            <span className="text-green-400 mr-2">✓</span>
                            <span className="text-cyan-100/80 text-sm">{strength}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Priority Progression */}
                  <div className="bg-blue-950/30 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-blue-300 mb-3 uppercase">Priority Progression</h4>
                    <ul className="space-y-2">
                      {build.priorities.map((priority, index) => (
                        <li key={index} className="text-cyan-100/70 text-sm flex">
                          <span className="text-blue-400 mr-2">{index + 1}.</span>
                          <span>{priority}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 p-3 bg-slate-900/60 border border-cyan-500/20 rounded">
                    <p className="text-cyan-100/70 text-sm">
                      <strong className="text-cyan-300">Playstyle:</strong> {build.playstyle}
                    </p>
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
                Complete Arc Raiders Skill Tree Guide
              </h2>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
                The Arc Raiders skill tree system features 75 skill points distributed across three distinct specializations: Mobility, Survival, and Conditioning. This Arc Raiders build guide helps you optimize your character progression with proven builds for solo play, squad coordination, and PvP combat. Understanding the skill tree meta is crucial for success in Arc Raiders 2025.
              </p>

              <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
                Best Skills to Unlock First
              </h3>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
                Your first 20 skill points in Arc Raiders are absolutely critical, setting the foundation for your entire build. Priority skills include Marathon Runner and Youthful Lungs from Mobility for stamina management, In-Round Crafting from Survival for self-sufficiency, and Used to the Weight from Conditioning for gear flexibility. These Arc Raiders essential skills provide the strongest foundation for any build type.
              </p>

              <h3 className="text-2xl font-bold text-cyan-200 mt-8 mb-4">
                Skill Tree Builds Strategy
              </h3>
              <p className="text-lg text-cyan-100/70 leading-relaxed mb-6">
                Advanced Arc Raiders players should customize their skill tree build based on preferred playstyle. Solo looters benefit from heavy Survival investment with moderate Mobility, while aggressive PvP players maximize Mobility with minimal Survival. Tank builds focus on Conditioning and Survival for sustained combat. Use community tools like ARCRaiders.build and MetaForge to plan your Arc Raiders skill tree before committing points.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
