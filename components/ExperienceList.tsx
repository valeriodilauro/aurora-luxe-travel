'use client';

import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";
import { cn } from "@/utilities/cn";

export default function ExperienceList() {
  return (
    <section
      id="experiences"
      className="relative py-24 md:py-32"
      aria-label="Signature Experiences"
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
            Signature Experiences
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Moments <span className="bg-aurora-gradient bg-clip-text text-transparent">Redefined</span>
          </h2>
          <p className="font-body text-aurora-muted max-w-2xl mx-auto">
            Every journey is a masterpiece. Explore our curated signature experiences, designed for the extraordinary.
          </p>
        </motion.div>

        {/* Experiences */}
        <div className="space-y-24">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className={cn(
                "grid gap-8 md:gap-16 items-center",
                i % 2 === 1 ? "md:grid-cols-[1fr_1.2fr]" : "md:grid-cols-[1.2fr_1fr]"
              )}
            >
              {/* Image */}
              <div
                className={cn(
                  "relative rounded-aurora-lg overflow-hidden shadow-aurora",
                  i % 2 === 1 ? "md:order-2" : "md:order-1"
                )}
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aurora-black/60 via-transparent to-transparent" />
                {/* Icon badge */}
                <div className="absolute top-6 left-6 w-12 h-12 rounded-aurora flex items-center justify-center bg-aurora-black/60 backdrop-blur-sm border border-aurora-border text-2xl">
                  {exp.icon}
                </div>
              </div>

              {/* Content */}
              <div className={cn("md:order-1", i % 2 === 1 ? "md:order-1" : "md:order-1")}>
                <span className="text-aurora-gold text-xs font-body tracking-[0.15em] uppercase mb-2 block">
                  {exp.subtitle}
                </span>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                  {exp.title}
                </h3>
                <p className="font-body text-aurora-muted leading-relaxed text-lg mb-6">
                  {exp.description}
                </p>
                <span className="inline-flex items-center gap-2 text-aurora-cyan text-sm font-body">
                  <span className="w-8 h-px bg-aurora-cyan/50" />
                  {exp.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
