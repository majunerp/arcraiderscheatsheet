export type MapArea = {
  id: string;
  name: string;
  difficulty: string;
  size: string;
  players: string;
  extractions: number;
  embedUrl: string;
  mapUrl: string;
  image: string;
  description: string;
  keyLocations: { name: string; tag: string; detail: string }[];
  bestItems: { name: string; search: string }[];
};

export const mapAreas = [
  {
    id: 'dam-battlegrounds',
    name: 'Dam Battlegrounds',
  difficulty: 'Medium',
  size: 'Large',
  players: '32-48',
  extractions: 4,
  embedUrl: 'https://game.arcraidersmap.pro/dam-battlegrounds.html',
  mapUrl: 'https://mapgenie.io/arc-raiders/maps/dam-battlegrounds',
  image: '/dam-battlegrounds.png',
  description:
      'Large industrial map with excellent farming routes for batteries and gears. Hydroponic Dome on northwest is a hotspot for Industrial Batteries.',
    keyLocations: [
      { name: 'Hydroponic Dome Complex', tag: 'Industrial', detail: 'Industrial Batteries, High-tier components' },
      { name: 'Control Tower', tag: 'Military', detail: 'Weapon caches, ARC parts' },
      { name: 'Power Generation Complex', tag: 'Industrial', detail: 'Electrical components, batteries' },
      { name: 'Research & Administration', tag: 'Tech', detail: 'Sensors, advanced electronics' },
    ],
    bestItems: [
      { name: 'Industrial Batteries', search: 'Industrial Batteries' },
      { name: 'Rusted Gears', search: 'Rusted Gears' },
      { name: 'Heavy Loot', search: 'Heavy Loot' },
    ],
  },
  {
    id: 'spaceport',
    name: 'Spaceport',
  difficulty: 'Hard',
  size: 'Large',
  players: '32-48',
  extractions: 5,
  embedUrl: 'https://game.arcraidersmap.pro/spaceport.html',
  mapUrl: 'https://mapgenie.io/arc-raiders/maps/spaceport',
  image: '/spaceport.png',
  description:
      'Industrial areas concentrated in map center. Great for Rusted Gears and high-tier loot. Residential areas have good Dog Collar spawn rates.',
    keyLocations: [
      { name: 'Rocket Assembly', tag: 'Industrial', detail: 'Industrial Batteries, ARC tech' },
      { name: 'Terminal Buildings', tag: 'Commercial', detail: 'General loot, quest items' },
      { name: 'Residential Quarter', tag: 'Residential', detail: 'Dog Collars, household items' },
      { name: 'Launch Platform', tag: 'Military', detail: 'Weapon caches, ammunition' },
    ],
    bestItems: [
      { name: 'Dog Collars', search: 'Dog Collars' },
      { name: 'Rusted Gears', search: 'Rusted Gears' },
      { name: 'Residential Loot', search: 'Residential Loot' },
    ],
  },
  {
    id: 'buried-city',
    name: 'Buried City',
  difficulty: 'Medium',
  size: 'Medium',
  players: '24-32',
  extractions: 3,
  embedUrl: 'https://game.arcraidersmap.pro/buried-city.html',
  mapUrl: 'https://mapgenie.io/arc-raiders/maps/buried-city',
  image: '/buried-city.png',
  description:
      'Best map for Rusted Gears farming at Marano Station car park. Multiple residential areas excellent for Dog Collars. Required for "A Reveal in Ruins" quest.',
    keyLocations: [
      { name: 'Marano Station Car Park', tag: 'Urban', detail: 'Rusted Gears (best farming route)' },
      { name: 'Grandioso Apartments', tag: 'Residential', detail: 'Dog Collars, household items' },
      { name: 'Red Tower', tag: 'Residential', detail: 'Dog Collars, consumables' },
      { name: 'Santa Maria Houses', tag: 'Residential', detail: 'General residential loot' },
      { name: 'Pharmacy (x2)', tag: 'Medical', detail: 'ESR Analyzer, medical supplies' },
    ],
    bestItems: [
      { name: 'Rusted Gears', search: 'Rusted Gears' },
      { name: 'Dog Collars', search: 'Dog Collars' },
      { name: 'Quest Items', search: 'Quest Items' },
    ],
  },
  {
    id: 'blue-gate',
    name: 'Blue Gate',
  difficulty: 'Easy',
  size: 'Small',
  players: '16-24',
  extractions: 2,
  embedUrl: 'https://game.arcraidersmap.pro/blue-gate.html',
  mapUrl: 'https://mapgenie.io/arc-raiders/maps/the-blue-gate',
  image: '/blue-gate.png',
  description:
      'Smallest map, perfect for beginners and quick loot runs. Warehouse Complex underground parking is THE best spot for Rusted Gears with 40+ searchable vehicles.',
    keyLocations: [
      { name: 'Warehouse Complex', tag: 'Industrial', detail: 'Rusted Gears (40+ vehicles in underground parking), Industrial Batteries' },
      { name: "Raider's Refuge", tag: 'Residential', detail: 'Dog Collars, basic supplies' },
      { name: 'Ruined Homestead', tag: 'Residential', detail: 'Residential items' },
      { name: 'Village', tag: 'Residential', detail: 'General loot' },
    ],
    bestItems: [
      { name: 'Rusted Gears', search: 'Rusted Gears' },
      { name: 'Beginner Farming', search: 'Beginner Farming' },
      { name: 'Quick Raids', search: 'Quick Raids' },
    ],
  },
] as const satisfies MapArea[];

export function getMapArea(slug: string | undefined) {
  const normalizedSlug = (slug ?? '').trim().toLowerCase();
  if (!normalizedSlug) return undefined;
  const cleaned = normalizedSlug.replace(/\.html?$/, '');
  return mapAreas.find((area) => area.id === cleaned);
}
