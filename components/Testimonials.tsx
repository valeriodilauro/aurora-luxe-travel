'use client';

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Alexandra M.",
    location: "London, UK",
    text: "Aurora Luxe planned our honeymoon to the Maldives and it was beyond anything we could have imagined. Every detail was perfect — from the private island dinner to the underwater spa session.",
    avatar: "AM",
    rating: 5,
  },
  {
    name: "James & Sophie R.",
    location: "New York, USA",
    text: "Our Serengeti safari with Aurora was the trip of a lifetime. Watching the migration from our luxury tent, with champagne at sunset — pure magic. Obsidian tier has changed how we travel forever.",
    avatar: "JR",
    rating: 5,
  },
  {
    name: "Yuki T.",
    location: "Tokyo, Japan",
    text: "As someone who's traveled the world extensively, Aurora stands alone. Their attention to exclusivity — private access to places most people don't even know exist — is unmatched.",
    avatar: "YT",
    rating: 5,
  },
  {
    name: "Marco & Elena B.",
    location: "Milan, Italy",
    text: "From a private yacht along the Amalfi Coast to a Michelin-starred dining trail in Paris, every journey felt like a masterpiece. Aurora doesn't just plan trips — they craft memories.",
    avatar: "MB",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32"
      aria-label="Testimonials"
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
            Testimonials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Stories from <span className="bg-aurora-gradient bg-clip-text text-transparent">Our Guests</span>
          </h2>
          <p className="font-body text-aurora-muted max-w-2xl mx-auto">
            Real words from real travelers. Every journey we craft becomes a story worth telling.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative rounded-aurora-lg bg-aurora-card/40 border border-aurora-border p-8 hover:border-aurora-purple/30 transition-all duration-500 hover:shadow-aurora"
            >
              {/* Quote mark */}
              <span className="absolute top-6 left-8 text-6xl font-heading text-aurora-purple/10 leading-none">
                "
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} className="text-aurora-gold text-sm">★</span>
                ))}
              </div>

              <p className="font-body text-aurora-muted leading-relaxed mb-8 relative z-10 text-lg">
                {t.text}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-aurora-cyan/20 to-aurora-purple/20 border border-aurora-border flex items-center justify-center text-white font-heading font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-heading font-semibold text-white">{t.name}</p>
                  <p className="font-body text-aurora-muted text-sm">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
