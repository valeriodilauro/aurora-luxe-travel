'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { destinations } from "@/data/destinations";
import { cn } from "@/utilities/cn";
import { FiArrowRight, FiMapPin, FiGlobe, FiX } from "react-icons/fi";

export default function DestinationGrid() {
  const [selected, setSelected] = useState<(typeof destinations)[number] | null>(null);

  return (
    <section
      id="destinations"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="Destinations"
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
            Curated Destinations
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Where <span className="bg-aurora-gradient bg-clip-text text-transparent">Extraordinary</span> Awaits
          </h2>
          <p className="font-body text-aurora-muted max-w-2xl mx-auto">
            Six handpicked destinations where luxury knows no bounds. Click any destination to discover more.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onClick={() => setSelected(dest)}
              className="group relative cursor-pointer rounded-aurora-lg overflow-hidden bg-aurora-card/40 border border-aurora-border hover:border-aurora-cyan/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-aurora"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelected(dest)}
              aria-label={`View ${dest.name} details`}
            >
              {/* Shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10 pointer-events-none" />

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aurora-black/80 via-transparent to-transparent" />
                {/* Region badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-aurora-black/60 backdrop-blur-sm text-aurora-muted text-xs font-body flex items-center gap-1.5">
                  <FiGlobe className="w-3 h-3" />
                  {dest.region}
                </span>
                {/* Price */}
                <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-aurora-gold/90 text-aurora-black text-xs font-body font-semibold">
                  from {dest.fromPrice}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-aurora-cyan transition-colors">
                  {dest.name}
                </h3>
                <p className="font-body text-aurora-muted text-sm leading-relaxed mb-4">
                  {dest.vibe}
                </p>

                {/* Quick Facts (reveal on hover) */}
                <div className="overflow-hidden transition-all duration-500 group-hover:max-h-40 max-h-0">
                  <div className="flex flex-wrap gap-2">
                    {dest.facts.map((fact) => (
                      <span
                        key={fact}
                        className="px-2.5 py-1 rounded-full border border-aurora-border text-aurora-muted text-xs font-body bg-aurora-card/30"
                      >
                        {fact}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <DestinationModal dest={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function DestinationModal({
  dest,
  onClose,
}: {
  dest: (typeof destinations)[number];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${dest.name} details`}
    >
      <div
        className="absolute inset-0 bg-aurora-black/80 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 40 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative z-10 max-w-2xl w-full rounded-aurora-lg overflow-hidden bg-aurora-dark border border-aurora-border shadow-aurora-strong"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-aurora-black/50 backdrop-blur-sm text-white hover:bg-aurora-black/70 transition-colors"
          aria-label="Close"
        >
          <FiX size={20} />
        </button>

        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full bg-aurora-border text-aurora-muted text-xs font-body flex items-center gap-1.5">
              <FiMapPin className="w-3 h-3" />
              {dest.region}
            </span>
            <span className="px-3 py-1 rounded-full bg-aurora-gold/20 text-aurora-gold text-xs font-body font-semibold">
              from {dest.fromPrice}
            </span>
          </div>

          <h3 className="font-heading text-3xl font-bold text-white mb-3">{dest.name}</h3>
          <p className="font-body text-aurora-cyan text-sm italic mb-4">{dest.vibe}</p>
          <p className="font-body text-aurora-muted leading-relaxed mb-6">{dest.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {dest.facts.map((fact) => (
              <span
                key={fact}
                className="px-3 py-1.5 rounded-full border border-aurora-border text-aurora-muted text-sm font-body"
              >
                {fact}
              </span>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              onClose();
              document.getElementById("concierge")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-aurora bg-aurora-gradient text-white font-body font-medium"
          >
            Request This Destination
            <FiArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
