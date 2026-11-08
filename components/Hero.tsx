'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2400&h=1400&fit=crop"
          alt="Stunning luxury travel destination with crystal waters"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-aurora-black/60 via-aurora-black/30 to-aurora-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-aurora-black/50 via-transparent to-aurora-black/50" />
      </div>

      {/* Animated Aurora Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 0.95, 1],
            rotate: [0, 15, -10, 0],
          }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-aurora-cyan/20 via-aurora-purple/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 0.9, 1.1, 1],
            rotate: [0, -15, 10, 0],
          }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-aurora-magenta/15 via-aurora-purple/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 0.95, 1],
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
          className="absolute top-1/3 left-1/2 w-[400px] h-[400px] -translate-x-1/2 rounded-full bg-gradient-to-r from-aurora-purple/10 to-aurora-cyan/10 blur-3xl"
        />
      </div>

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-aurora-border bg-aurora-card/50 backdrop-blur-sm text-aurora-muted text-xs font-body tracking-[0.2em] uppercase mb-8">
            Ultra-Premium Concierge Travel
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6"
        >
          Beyond
          <br />
          <span className="bg-aurora-gradient bg-clip-text text-transparent">
            First Class.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          className="font-body text-lg md:text-xl text-aurora-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Curated journeys crafted for those who accept nothing less than extraordinary.
          From private islands to Michelin-starred evenings — your world, elevated.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#concierge"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-aurora bg-aurora-gradient text-white font-body font-medium text-lg shadow-aurora hover:shadow-aurora-strong transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Design My Trip</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>

          <a
            href="#destinations"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-aurora border border-aurora-border bg-aurora-card/30 backdrop-blur-sm text-white font-body font-medium text-lg hover:bg-aurora-card/50 hover:border-aurora-cyan/30 transition-all duration-300"
          >
            Explore Destinations
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-aurora-muted text-xs font-body tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiChevronDown className="text-aurora-muted w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
