import { JSX } from "react";

export interface Experience {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: string;
  highlight: string;
}

export const experiences: Experience[] = [
  {
    title: "Private Jet Expeditions",
    subtitle: "Sky without limits",
    description:
      "From your door to any runway on the planet. Our fleet of Gulfstream G700s offers bespoke interiors, Michelin catering, and crew dedicated to your comfort alone.",
    image:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&h=900&fit=crop",
    icon: "✈",
    highlight: "Door-to-door, zero queues",
  },
  {
    title: "Mediterranean Yacht Week",
    subtitle: "Sail in sovereign style",
    description:
      "A chartered superyacht, a dedicated captain and crew, and a route designed entirely around your desires — from the Greek isles to the French Riviera.",
    image:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&h=900&fit=crop",
    icon: "⛵",
    highlight: "Fully crewed, fully yours",
  },
  {
    title: "Michelin Trail Dining",
    subtitle: "A feast for the connoisseur",
    description:
      "A curated culinary journey through the world's most celebrated restaurants — with behind-the-scenes kitchen access, chef's table seating, and vintage wine pairings.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=900&fit=crop",
    icon: "✦",
    highlight: "30+ Michelin stars in one journey",
  },
  {
    title: "Desert Stargazing",
    subtitle: "Silence is the luxury",
    description:
      "Deep in the Sahara or the Atacama, with astronomer-guided telescopes, luxury camp dining, and the Milky Way stretching infinitely above you.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=900&fit=crop",
    icon: "★",
    highlight: "Private observatory access",
  },
  {
    title: "Alpine Wellness Retreat",
    subtitle: "Reinvented at altitude",
    description:
      "A high-altitude sanctuary combining cryotherapy, hot springs, personalized fitness programs, and alpine gastronomy — pure restoration.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=900&fit=crop",
    icon: "❄",
    highlight: "Full-spectrum wellness protocol",
  },
];
