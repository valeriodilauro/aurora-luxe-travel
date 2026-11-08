'use client';

import { motion } from "framer-motion";
import { cn } from "@/utilities/cn";

const TIERS = [
  {
    name: "Silver",
    color: "from-gray-400 to-gray-200",
    bg: "from-gray-500/10 to-gray-300/5",
    border: "border-gray-500/20 hover:border-gray-400/40",
    price: "Complimentary",
    tagline: "Your gateway to curated luxury",
    perks: [
      "Annual destination concierge call",
      "Early access to new itineraries",
      "VIP airport lounge access (domestic)",
      "Curated seasonal travel guide",
      "Birthday travel credit (€500)",
      "Dedicated email support",
    ],
    cta: "Join Silver",
  },
  {
    name: "Black",
    color: "from-aurora-cyan to-aurora-purple",
    bg: "from-aurora-cyan/10 via-aurora-purple/5 to-aurora-magenta/10",
    border: "border-aurora-cyan/30 hover:border-aurora-purple/50",
    price: "€5,000 / year",
    tagline: "Elevated access, elevated life",
    perks: [
      "All Silver benefits, plus:",
      "Private jet charter discounts (15%)",
      "VIP airport lounge access (global)",
      "Priority restaurant reservations",
      "Annual luxury cruise invitation",
      "Personal travel stylist",
      "24/7 dedicated concierge line",
      "Complimentary room upgrades",
    ],
    cta: "Join Black",
    featured: true,
  },
  {
    name: "Obsidian",
    color: "from-aurora-gold to-yellow-300",
    bg: "from-aurora-gold/10 to-yellow-400/5",
    border: "border-aurora-gold/30 hover:border-aurora-gold/60",
    price: "By invitation only",
    tagline: "The pinnacle of exclusivity",
    perks: [
      "All Black benefits, plus:",
      "Unlimited private jet availability",
      "Private island weekends",
      "Dedicated team (5 specialists)",
      "Personal security detail on request",
      "Exclusive event access (worldwide)",
      "Bespoke itinerary creation (unlimited)",
      "Complimentary luxury villa stays",
    ],
    cta: "Request Access",
  },
];

export default function Tiers() {
  return (
    <section
      id="membership"
      className="relative py-24 md:py-32"
      aria-label="Membership Tiers"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-aurora-border bg-aurora-card/50 text-aurora-muted text-xs font-body tracking-[0.2em] uppercase mb-4">
            Membership
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your <span className="bg-aurora-gradient bg-clip-text text-transparent">Level</span>
          </h2>
          <p className="font-body text-aurora-muted max-w-2xl mx-auto">
            Every tier unlocks deeper access to the world's most extraordinary experiences.
          </p>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={cn(
                "relative rounded-aurora-lg overflow-hidden border bg-aurora-card/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2",
                tier.border,
                tier.featured && "md:scale-105 md:z-10"
              )}
            >
              {/* Featured badge */}
              {tier.featured && (
                <div className="absolute -top-px left-0 right-0 h-px bg-aurora-gradient" />
              )}

              {/* Card Background */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-b opacity-0 hover:opacity-100 transition-opacity duration-500",
                  `bg-gradient-to-b ${tier.bg}`
                )}
              />

              <div className="relative p-8">
                {/* Tier Name */}
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-aurora bg-gradient-to-br flex items-center justify-center text-lg font-bold",
                      tier.color
                    )}
                  >
                    {tier.name[0]}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {tier.name}
                  </h3>
                </div>

                {tier.featured && (
                  <span className="inline-block px-3 py-1 rounded-full bg-aurora-gradient text-white text-xs font-body font-medium mb-4">
                    Most Popular
                  </span>
                )}

                <p className="font-body text-aurora-muted text-sm mb-1">{tier.tagline}</p>

                <p
                  className={cn(
                    "font-heading text-3xl font-bold mb-6",
                    tier.name === "Obsidian"
                      ? "bg-aurora-gradient bg-clip-text text-transparent"
                      : "text-aurora-gold"
                  )}
                >
                  {tier.price}
                </p>

                {/* Perks */}
                <ul className="space-y-3 mb-8">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3">
                      <span className="text-aurora-cyan mt-0.5 text-sm">✦</span>
                      <span className="font-body text-aurora-muted text-sm leading-relaxed">
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full py-3 rounded-aurora font-body font-medium transition-all duration-300",
                    tier.featured
                      ? "bg-aurora-gradient text-white shadow-aurora hover:shadow-aurora-strong"
                      : "border border-aurora-border text-white hover:bg-aurora-card/50"
                  )}
                >
                  {tier.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
