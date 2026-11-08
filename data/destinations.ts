export interface Destination {
  slug: string;
  name: string;
  region: string;
  vibe: string;
  fromPrice: string;
  image: string;
  facts: string[];
  description: string;
}

export const destinations: Destination[] = [
  {
    slug: "maldives",
    name: "Malé Atoll",
    region: "Indian Ocean",
    vibe: "Overwater villas beneath bioluminescent tides",
    fromPrice: "€12,500",
    image:
      "https://images.unsplash.com/photo-1514282401047-c79dbd652761?w=1200&h=900&fit=crop",
    facts: [
      "Private island resorts",
      "Spa pavilions over the reef",
      "Dolphin-dive excursions",
    ],
    description:
      "Wake to the sound of gentle waves lapping against your private pool. The Malé Atoll offers an unparalleled luxury experience with overwater villas, world-class diving, and sunset champagne cruises along the Indian Ocean horizon.",
  },
  {
    slug: "tokyo",
    name: "Tokyo",
    region: "Japan",
    vibe: "Neon-lit tradition meets futuristic opulence",
    fromPrice: "€8,900",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=900&fit=crop",
    facts: ["Michelin-starred omakase", "Helicopter city tour", "Exclusive tea ceremonies"],
    description:
      "Tokyo is a symphony of contrasts — ancient temples beside cutting-edge architecture, serene gardens next to electric Shibuya crossings. Experience the city through VIP access to exclusive rooftops, private geisha evenings, and the finest sushi in Ginza.",
  },
  {
    slug: "swiss-alps",
    name: "Swiss Alps",
    region: "Switzerland",
    vibe: "Alpine grandeur with a private chalet aura",
    fromPrice: "€15,200",
    image:
      "https://images.unsplash.com/photo-1502784040885-1c3a12e0eb8f?w=1200&h=900&fit=crop",
    facts: ["Helicopter ski access", "Private glacier tours", "Truffle dining"],
    description:
      "Perched among the iconic peaks of the Swiss Alps, your private chalet becomes a sanctuary of warmth and elegance. Ski slopes are yours at dawn, fondue awaits by the roaring fire, and panoramic gondola rides reveal the alpine majesty at golden hour.",
  },
  {
    slug: "dubai",
    name: "Dubai",
    region: "UAE",
    vibe: "Where desert dreams become glass-and-gold reality",
    fromPrice: "€10,800",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=900&fit=crop",
    facts: ["Penthouse suite at Burj Al Arab", "Desert yachts", "Private souk access"],
    description:
      "Dubai redefines audacity. From the sail-shaped Burj Al Arab to the man-made Palm Island, every moment here is a statement. Enjoy private yacht charters, golden-sand dune bashing in luxury vehicles, and dinners under the stars in the Empty Quarter.",
  },
  {
    slug: "safari",
    name: "Serengeti",
    region: "Tanzania",
    vibe: "Untamed wilderness wrapped in five-star canvas",
    fromPrice: "€18,000",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=900&fit=crop",
    facts: ["VIP migration viewing", "Hot air balloon safaris", "Luxury tented suites"],
    description:
      "Witness the Great Migration from the comfort of a luxury tented camp. Champagne sundowners on the savanna, private game drives with expert rangers, and nights illuminated by millions of African stars make the Serengeti a once-in-a-lifetime escape.",
  },
  {
    slug: "amalfi",
    name: "Amalfi Coast",
    region: "Italy",
    vibe: "Limoncello sunsets and cliffside elegance",
    fromPrice: "€9,500",
    image:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=1200&h=900&fit=crop",
    facts: ["Private villa with infinity pool", "Yacht along the coast", "Lemon grove tours"],
    description:
      "The Amalfi Coast is Italy's crowning jewel. Cliffside villas draped in bougainvillea, private ferries to hidden coves, and pasta made with ingredients from the garden — this is la dolce vita at its most luxurious and intimate.",
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
