import { generateMetadata as genMeta } from '@/lib/seo';
import Link from 'next/link';
import { allSkills, getSkillsByTree } from '@/lib/skills-data';
import SkillTreeVisual from '@/components/SkillTreeVisual';

export const metadata = genMeta({
  title: 'Arc Raiders Skill Trees & Builds Guide 2025',
  description:
    'Arc Raiders skill tree guide with best 2025 builds. Covers 75 skill points across Mobility, Survival, Conditioning plus top solo and squad loadouts.',
  keywords: [
    'arc raiders builds guide',
    'arc raiders skill tree guide',
    'arc raiders builds 2025',
    'arc raiders skill trees',
    'arc raiders best skills',
    'arc raiders best builds',
    'arc raiders mobility tree',
    'arc raiders survival tree',
    'arc raiders conditioning tree',
    'arc raiders solo builds',
    'arc raiders squad builds',
  ],
  canonical: 'https://arcraiderscheatsheet.org/skills',
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
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-cyan-50 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(34,211,238,0.12), transparent 32%), radial-gradient(circle at 80% 10%, rgba(59,130,246,0.12), transparent 28%), radial-gradient(circle at 20% 80%, rgba(14,165,233,0.12), transparent 30%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(0,229,255,0.2) 0%, rgba(59,130,246,0.16) 45%, rgba(10,14,26,0.82) 100%)',
          mixBlendMode: 'screen',
          opacity: 0.65,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'url(/bg.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
          mixBlendMode: 'screen',
        }}
      ></div>
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] opacity-5"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/skills.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.18,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/50 to-blue-950/80"></div>
      </div>

      <div className="relative z-10">
        <section className="border-b border-cyan-500/25 pt-14 pb-12 md:pt-20 md:pb-14 bg-gradient-to-b from-slate-950/70 via-slate-900/60 to-transparent">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center md:text-left">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]">
                Arc Raiders Skill Tree & Builds
              </span>
            </h1>
            <p className="text-base md:text-lg text-cyan-100/80 max-w-3xl">
              Brighter, homepage-matched palette for the full 75-point spread across Mobility, Survival, and Conditioning.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-6xl space-y-12">
            <div className="bg-gradient-to-br from-slate-900/70 via-blue-900/60 to-slate-900/70 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/30 shadow-[0_0_60px_rgba(0,229,255,0.15)]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-7">
                <h2 className="text-2xl md:text-3xl font-bold text-cyan-200">Skill Points Overview</h2>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white font-semibold border border-cyan-400/50 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,229,255,0.35)] transition-transform duration-200"
                  >
                    Match Homepage Look
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/60 p-5 text-center shadow-inner shadow-cyan-500/10">
                  <div className="text-4xl font-bold text-cyan-300 drop-shadow-[0_0_14px_rgba(0,229,255,0.4)]">75</div>
                  <div className="text-cyan-100/70 mt-2 text-sm">Total Skill Points</div>
                </div>
                <div className="rounded-2xl border border-blue-500/30 bg-slate-950/60 p-5 text-center shadow-inner shadow-blue-500/10">
                  <div className="text-4xl font-bold text-blue-300 drop-shadow-[0_0_14px_rgba(59,130,246,0.4)]">3</div>
                  <div className="text-cyan-100/70 mt-2 text-sm">Skill Trees</div>
                </div>
                <div className="rounded-2xl border border-emerald-500/30 bg-slate-950/60 p-5 text-center shadow-inner shadow-emerald-500/10">
                  <div className="text-4xl font-bold text-emerald-300 drop-shadow-[0_0_14px_rgba(52,211,153,0.4)]">45</div>
                  <div className="text-cyan-100/70 mt-2 text-sm">Unique Skills</div>
                </div>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-4">
                <p className="text-cyan-100/80 text-sm leading-relaxed">
                  <strong className="text-cyan-200">Important:</strong> Arc Raiders does not currently offer free respecs. A voluntary wipe is available every eight weeks via the Expedition Project.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-200 mb-4">Skill Trees</h2>
              <p className="text-cyan-100/70 mb-8 max-w-3xl">
                Same cyan-blue balance as the homepage so each tree reads clearly against the background.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {skillTrees.map((tree) => (
                  <div
                    key={tree.id}
                    className="bg-gradient-to-b from-slate-900/70 via-blue-900/50 to-slate-900/70 border border-cyan-500/25 rounded-2xl p-6 shadow-[0_15px_50px_rgba(0,0,0,0.35)] hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(0,229,255,0.25)] transition-all"
                  >
                    <h3 className="text-2xl font-bold text-cyan-50 mb-2">{tree.name}</h3>
                    <p className="text-cyan-100/75 mb-5 text-sm leading-relaxed">{tree.description}</p>

                    <h4 className="text-xs font-semibold text-cyan-300 mb-3 uppercase tracking-[0.08em]">Key Skills</h4>
                    <div className="space-y-3">
                      {tree.keySkills.map((skill, idx) => (
                        <div key={idx} className="bg-slate-950/70 border border-cyan-500/20 rounded-xl px-3 py-2.5">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-cyan-50 font-medium text-sm">{skill.name}</span>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-lg ${
                                skill.tier === 'Essential'
                                  ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/30'
                                  : 'bg-blue-500/20 text-blue-200 border border-blue-500/30'
                              }`}
                            >
                              {skill.tier}
                            </span>
                          </div>
                          <p className="text-cyan-100/65 text-xs leading-relaxed">{skill.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-cyan-200">Interactive Skill Trees (45 Skills)</h2>
              <p className="text-cyan-100/70">Click or hover to allocate points. All {allSkills.length} skills across the three trees.</p>
            </div>

            <SkillTreeVisual treeName="mobility" skills={getSkillsByTree('mobility')} />
            <SkillTreeVisual treeName="survival" skills={getSkillsByTree('survival')} />
            <SkillTreeVisual treeName="conditioning" skills={getSkillsByTree('conditioning')} />

            <div className="bg-gradient-to-b from-slate-900/70 via-blue-900/50 to-slate-900/70 border border-cyan-500/25 rounded-3xl p-6 md:p-8 shadow-[0_15px_50px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-cyan-200">Sell vs Recycle Cheat Sheet</h2>
                  <p className="text-cyan-100/70 mt-2 text-sm md:text-base">
                    Quick-reference image for which Arc Raiders loot to sell or recycle. Keep it handy while planning skill paths and crafting routes.
                  </p>
                </div>
                <span className="text-xs font-semibold text-cyan-300 uppercase tracking-[0.12em] bg-cyan-500/15 border border-cyan-500/30 rounded-full px-3 py-1">
                  Updated V3
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-cyan-500/25 shadow-[0_0_40px_rgba(0,229,255,0.2)] bg-slate-950/70">
                <img
                  src="/skills-cheatsheet.jpg"
                  alt="Arc Raiders Sell vs Recycle cheat sheet showing loot items and recommended actions"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-cyan-200 mb-4">Best Builds for 2025</h2>
            <p className="text-cyan-100/70 mb-6">Cards now share the homepage gradients and brighter contrast for easier reading.</p>
            <div className="space-y-8">
              {builds.map((build) => (
                <div
                  key={build.id}
                  className="bg-gradient-to-b from-slate-900/70 via-blue-900/50 to-slate-900/70 border border-cyan-500/25 rounded-2xl p-6 shadow-[0_15px_50px_rgba(0,0,0,0.35)] hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(0,229,255,0.25)] transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-50 mb-2">{build.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-cyan-500/15 text-cyan-200 rounded-full text-sm font-medium border border-cyan-500/40">
                          {build.type}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium border ${
                            build.difficulty === 'Beginner'
                              ? 'bg-emerald-500/15 text-emerald-200 border-emerald-500/40'
                              : 'bg-amber-500/15 text-amber-200 border-amber-500/40'
                          }`}
                        >
                          {build.difficulty}
                        </span>
                        <span className="px-3 py-1 bg-purple-500/15 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30">
                          {build.focus}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-cyan-100/80 mb-6 leading-relaxed">{build.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="rounded-2xl border border-cyan-500/25 bg-slate-950/60 p-4">
                      <h4 className="text-lg font-semibold text-cyan-100 mb-3">Point Distribution ({build.totalPoints} total)</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-slate-900/60 border border-cyan-500/20 rounded-xl px-4 py-3">
                          <span className="text-cyan-100/90">Mobility</span>
                          <span className="text-cyan-300 font-semibold">{build.distribution.mobility} pts</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-900/60 border border-emerald-500/20 rounded-xl px-4 py-3">
                          <span className="text-cyan-100/90">Survival</span>
                          <span className="text-emerald-300 font-semibold">{build.distribution.survival} pts</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-900/60 border border-orange-500/20 rounded-xl px-4 py-3">
                          <span className="text-cyan-100/90">Conditioning</span>
                          <span className="text-orange-300 font-semibold">{build.distribution.conditioning} pts</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-cyan-500/25 bg-slate-950/60 p-4">
                      <h4 className="text-lg font-semibold text-cyan-100 mb-3">Strengths</h4>
                      <div className="space-y-2">
                        {build.strengths.map((strength, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 bg-slate-900/60 border border-cyan-500/20 rounded-xl px-4 py-3"
                          >
                            <svg
                              className="w-4 h-4 text-emerald-300 shrink-0"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-cyan-100/85 text-sm">{strength}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-900/50 border border-blue-500/30 rounded-2xl p-4">
                    <h4 className="text-xs font-semibold text-blue-200 mb-3 uppercase tracking-[0.1em]">Priority Progression</h4>
                    <ul className="space-y-2">
                      {build.priorities.map((priority, index) => (
                        <li key={index} className="text-cyan-100/80 text-sm flex">
                          <span className="text-blue-300 mr-2">{index + 1}.</span>
                          <span>{priority}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 p-4 bg-slate-900/60 border border-cyan-500/20 rounded-2xl">
                    <p className="text-cyan-100/80 text-sm leading-relaxed">
                      <strong className="text-cyan-200">Playstyle:</strong> {build.playstyle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-12 border-t border-cyan-500/20">
              <h2 className="text-3xl font-bold text-cyan-200 mb-5">Complete Arc Raiders Skill Tree Guide</h2>
              <p className="text-lg text-cyan-100/75 leading-relaxed mb-6">
                The Arc Raiders skill tree system features 75 skill points distributed across three distinct specializations: Mobility, Survival, and Conditioning. This Arc Raiders build guide helps you optimize your character progression with proven builds for solo play, squad coordination, and PvP combat. Understanding the skill tree meta is crucial for success in Arc Raiders 2025.
              </p>

              <h3 className="text-2xl font-bold text-cyan-100 mt-8 mb-4">Best Skills to Unlock First</h3>
              <p className="text-lg text-cyan-100/75 leading-relaxed mb-6">
                Your first 20 skill points in Arc Raiders are absolutely critical, setting the foundation for your entire build. Priority skills include Marathon Runner and Youthful Lungs from Mobility for stamina management, In-Round Crafting from Survival for self-sufficiency, and Used to the Weight from Conditioning for gear flexibility. These Arc Raiders essential skills provide the strongest foundation for any build type.
              </p>

              <h3 className="text-2xl font-bold text-cyan-100 mt-8 mb-4">Skill Tree Builds Strategy</h3>
              <p className="text-lg text-cyan-100/75 leading-relaxed mb-6">
                Advanced Arc Raiders players should customize their skill tree build based on preferred playstyle. Solo looters benefit from heavy Survival investment with moderate Mobility, while aggressive PvP players maximize Mobility with minimal Survival. Tank builds focus on Conditioning and Survival for sustained combat. Use community tools like ARCRaiders.build and MetaForge to plan your Arc Raiders skill tree before committing points.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
