export type GuideCategory = 'Farming' | 'Update' | 'Puzzle';

export type GuideEntry = {
  slug: string;
  title: string;
  category: GuideCategory;
  date: string;
  summary: string;
  image: string;
  map?: string;
  need?: string;
  highlights: string[];
};

export const guidesData = [
  {
    slug: 'locked-gate-arc-raiders-event-guide',
    title: 'Locked Gate Event Guide',
    category: 'Puzzle',
    date: 'Dec 18, 2025',
    summary:
      'Complete the Blue Gate Locked Gate event: find four security codes, activate the Gate Control Room, and loot the underground for the Bobcat blueprint.',
    image: '/guides/locked-gate-event/hero.jpg',
    map: 'Blue Gate',
    highlights: [
      "Security codes spawn in Ancient Fort, Raider's Refuge, Reinforced Reception, and Pilgrim's Peak containers.",
      'Landmines and Rocketeers define the event - bring heals and long-range tools.',
      'Deliver codes to the Gate Control Room to open the underground blast doors.',
    ],
  },
  {
    slug: 'buried-city-music-puzzle-guide',
    title: 'Buried City Music Puzzle',
    category: 'Puzzle',
    date: 'Dec 19, 2025',
    summary:
      'Press 14 hidden red buttons in order, return to the Music Room, and hit the final button to open the secret door and claim the Guitar.',
    image: '/guides/buried-city-music-puzzle/hero.jpg',
    map: 'Buried City',
    highlights: [
      'All 15 buttons must be pressed in sequence or the lobby resets instantly.',
      'Run this as a trio with ziplines and snap hooks to cover the map fast.',
      'Rewards include the Acoustic Guitar, Shakers, Recorders, and rare valuables.',
    ],
  },
  {
    slug: 'where-to-find-humidifier-arc-raiders',
    title: 'Humidifier Farming Route',
    category: 'Farming',
    date: 'Dec 9, 2025',
    summary:
      'Stage 4/6 Outfitting needs five Humidifiers. This loop prioritizes Buried City’s Red Tower lockers with a quick Metro extract, with Dam Battlegrounds as a low-traffic backup.',
    image: '/guides/humidifier.webp',
    map: 'Buried City / Dam Battlegrounds',
    need: '5x Humidifier – Expedition Project 4/6 Outfitting',
    highlights: [
      'Breach the Red Tower third floor and loot the two red lockers; one often guarantees a Humidifier if uncontested.',
      'If the lobby is picked clean, rotate to Pale Apartments and Ruby Residence on Dam Battlegrounds for quieter residential spawns.',
      'Use the Metro extraction beside Red Tower to reset runs in under three minutes.',
    ],
  },
  {
    slug: 'where-to-find-lightbulbs-arc-raiders',
    title: 'Lightbulbs for Framework',
    category: 'Farming',
    date: 'Dec 7, 2025',
    summary:
      'Lightbulbs are electrical loot for Expedition 3/6 – Framework. Focus electrical zones and chain short clears to stack five quickly.',
    image: '/guides/lightbulb.webp',
    map: 'Electrical Loot Zones',
    need: '5x Lightbulbs – Expedition Project 3/6 Framework',
    highlights: [
      'Hit Spaceport maintenance tunnels and Dam Research/Admin blocks where electrical containers cluster.',
      'Prioritize lockers, tool cabinets, and power rooms; skip low-yield residential shelves.',
      'Pair these runs with Cooling Fan or Sensor routes to finish multiple Expedition steps together.',
    ],
  },
  {
    slug: 'where-to-find-cooling-fans-arc-raiders',
    title: 'Cooling Fan Power Farm',
    category: 'Farming',
    date: 'Dec 6, 2025',
    summary:
      'Cooling Fans gate Expedition Project Part 2. The fastest pulls come from tech-heavy buildings with stacked server racks.',
    image: '/guides/cooling-fan.webp',
    map: 'Buried City (Space Travel Building)',
    need: 'Cooling Fans – Expedition Project Part 2',
    highlights: [
      'Enter the Space Travel Building and sweep every server aisle and workbench for Technological loot.',
      'Reset if the lobby is contested; fans are rarer than generic electronics, so clean spawns matter.',
      'Use compact, lightweight loadouts to sprint extracts—fans are low weight, so bring extra stash space for side loot.',
    ],
  },
  {
    slug: 'very-comfortable-pillow-and-cat-bed-in-arc-raiders',
    title: 'Cat Bed & Pillow Hunt',
    category: 'Farming',
    date: 'Dec 4, 2025',
    summary:
      'Scrappy upgrades need comfort items that only spawn in residential interiors. Buried City delivers the best density.',
    image: '/guides/pillow-cat-bed.webp',
    map: 'Buried City / Dam Battlegrounds',
    need: 'Cat Beds & Very Comfortable Pillows – Scrappy upgrade',
    highlights: [
      'Run the Red Tower apartments in Buried City for back-to-back bedroom and lounge containers.',
      'Check Dam Battlegrounds Testing Annex bedrooms when rotating for medical loot.',
      'Clear every wardrobe, sofa table, and side cabinet—comfort items sit in generic residential props.',
    ],
  },
  {
    slug: 'damage-leapers',
    title: 'Damage Leapers Trial Route',
    category: 'Farming',
    date: 'Dec 24, 2025',
    summary:
      'Fast Dam Battlegrounds loop for the Damage Leapers Trial: anchor at the Control Tower base, rotate to Water Treatment, then reset to keep spawns rolling.',
    image: '/guides/damage-leapers/hero.webp',
    map: 'Dam Battlegrounds',
    need: 'Trials score - aim for 4,000+ for weekly 3-star rewards',
    highlights: [
      'Leapers score higher during 2x modifiers, so prioritize those rotations.',
      'Pull spawns to the dam wall for safe kiting and clean sightlines.',
      'Two Leaper kills are enough for the baseline reward; loop for leaderboard totals.',
    ],
  },
  {
    slug: 'search-first-wave-husks',
    title: 'Search First Wave Husks Trial Route',
    category: 'Farming',
    date: 'Dec 24, 2025',
    summary:
      'Dam Battlegrounds loop that chains First Wave Husk clusters during Electromagnetic Storm so you can hit 4,000 score quickly.',
    image: '/guides/search-first-wave-husks/hero.webp',
    map: 'Dam Battlegrounds',
    need: 'Trials score - 4,000+ for weekly 3-star rewards',
    highlights: [
      'Searching an already-open Husk still grants score, so do not skip them.',
      'Electromagnetic Storm boosts Husk spawns and doubles score to 800 each.',
      'Split the loop in squads to push 50,000+ score on long raids.',
    ],
  },
  {
    slug: 'harvest-plants',
    title: 'Harvest Plants Trial Route',
    category: 'Farming',
    date: 'Dec 24, 2025',
    summary:
      'Great Mullein farming route for Trials. Solo runs excel in Buried City Galleria, while squads can split Spaceport for fast clears.',
    image: '/guides/harvest-plants/hero.webp',
    map: 'Buried City / Spaceport',
    need: 'Trials score - 4,000+ for weekly 3-star rewards',
    highlights: [
      'Galleria floors are packed with Great Mullein for fast solo scoring.',
      'Spaceport routes scale better for duo or trio teams with split coverage.',
      'Free Loadout works if you want zero risk while farming.',
    ],
  },
  {
    slug: 'november-update-1-4-0',
    title: 'Patch 1.4.0 Hotfix',
    category: 'Update',
    date: 'Nov 27, 2025',
    summary:
      'Small but important patch: the quick gun swap exploit is gone and locked-room cheese was fixed. Relearn timing on weapon swaps and locked caches.',
    image: '/guides/update-1-4-0.webp',
    highlights: [
      'Quick swap exploit removed—expect slower burst combos until you adapt perk choices.',
      'Locked room exploit patched; rely on keycards and map knowledge again.',
      'Cross-check our map page for legitimate locked-room entries before raids.',
    ],
  },
  {
    slug: 'november-update-1-3-0',
    title: 'Patch 1.3.0 Balance Pass',
    category: 'Update',
    date: 'Nov 20, 2025',
    summary:
      'Weapon tuning and ARC tweaks, with Venator power reined in and ammo adjustments. Loadouts shift slightly toward burst rifles and utility grenades.',
    image: '/guides/update-1-3-0.webp',
    highlights: [
      'Deadline, Power Cell, and launcher ammo adjusted—revisit ammo economy on long raids.',
      'Venator fully upgraded is toned down; swap to mixed-damage squads for boss clears.',
      'Pair balance notes with our skill and workshop pages to rebuild efficient kits.',
    ],
  },
  {
    slug: 'november-update-1-2-0',
    title: 'Patch 1.2.0 – North Line',
    category: 'Update',
    date: 'Nov 13, 2025',
    summary:
      'Community unlock event plus new ARCs, guns, grenades, mines, and a big balance sweep. Early-game routes shift with new loot tables.',
    image: '/guides/update-1-2-0.webp',
    highlights: [
      'Stella Montis introduced; learn new extract timings and ARC spawns.',
      'Fresh quests and items—stockpile components before prices spike.',
      'Follow the community unlock timeline to avoid missing limited drops.',
    ],
  },
  {
    slug: 'arc-raiders-update-north-line',
    title: 'North Line Deep Dive',
    category: 'Update',
    date: 'Nov 12, 2025',
    summary:
      'Breakdown of the “Breaking New Ground” community event, Stella Montis map beats, and new Matriarch enemy behaviors.',
    image: '/guides/north-line.webp',
    highlights: [
      'Matriarch and new ARC types change open-field positioning—bring EMPs.',
      'Community event cadence rewards frequent short raids; optimize quick extracts.',
      'Use interactive maps to learn Stella Montis elevations and sightlines fast.',
    ],
  },
  {
    slug: 'hidden-bunker-arc-raiders-puzzle',
    title: 'Hidden Bunker Puzzle',
    category: 'Puzzle',
    date: 'Nov 8, 2025',
    summary:
      'All four antenna activations, bunker access, and data download steps explained so you can finish the event without wipes.',
    image: '/guides/hidden-bunker.webp',
    map: 'Event Route',
    highlights: [
      'Activate all four antennas in sequence; watch for patrol spawns between nodes.',
      'Carry spare fuses and a melee option—noise attracts extra ARC patrols near the bunker.',
      'Extract immediately after the data download to secure rewards.',
    ],
  },

  {
    slug: 'where-to-find-rusted-shut-medical-kit-in-arc-raiders',
    title: 'Rusted Shut Medical Kit',
    category: 'Farming',
    date: 'Nov 7, 2025',
    summary:
      'Rare medical component needed for Medical Station 3. The Testing Annex on Dam Battlegrounds is the go-to farm.',
    image: '/guides/rusted-medkit.webp',
    map: 'Dam Battlegrounds',
    need: 'Rusted Shut Medical Kit – Medical Station Lv3',
    highlights: [
      'Sprint to Testing Annex and sweep surgery rooms and med cabinets.',
      'Combine with Laboratory Reagent runs for efficient medical crafting sessions.',
      'Bring extra weight perks; medical loot stacks quickly in these corridors.',
    ],
  },
  {
    slug: 'where-to-find-laboratory-reagents-arc-raiders',
    title: 'Laboratory Reagents',
    category: 'Farming',
    date: 'Nov 7, 2025',
    summary:
      'Reagents upgrade the Explosives Station to Level 3. They drop in medical zones with the best odds at Dam’s Testing Annex and Plaza Rosa pharmacies.',
    image: '/guides/lab-reagents.webp',
    map: 'Dam Battlegrounds / Buried City',
    need: 'Laboratory Reagents – Explosives Station Lv3',
    highlights: [
      'Hit Testing Annex first; if picked clean, pivot to Plaza Rosa pharmacies in Buried City.',
      'Check fridges, med kits, and wall cabinets—ignore office clutter to save time.',
      'Run night raids to dodge competition and keep reagent runs consistent.',
    ],
  },
  {
    slug: 'easiest-way-to-get-rocketeer-driver-arc-raiders',
    title: 'Rocketeer Driver Route',
    category: 'Farming',
    date: 'Nov 6, 2025',
    summary:
      'Three Rocketeer Drivers are needed for Explosives Station 3. The Husk Graveyard event lets you loot husks safely instead of fighting live Rocketeers.',
    image: '/guides/rocketeer-driver.webp',
    map: 'Husk Graveyard Event',
    need: '3x Rocketeer Drivers – Explosives Station Lv3',
    highlights: [
      'Prioritize Husk Graveyard spawns; husks can be looted without triggering heavy fights.',
      'Carry EMPs and stun tools in case live Rocketeers rotate in mid-loot.',
      'Secure a fast extract nearby before other squads converge on the event zone.',
    ],
  },
] as const satisfies GuideEntry[];
