'use client';

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utilities/cn";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Membership", href: "#membership" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Concierge", href: "#concierge" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // Determine active section
      const sections = NAV_LINKS.map((l) =>
        document.getElementById(l.href.replace("#", ""))
      );
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(NAV_LINKS[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#") && pathname === "/") {
      const el = document.getElementById(href.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 bg-[rgba(10,10,15,0.75)] backdrop-blur-xl border-b border-aurora-border"
            : "py-5 bg-transparent"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Aurora Luxe Travel — Home"
          >
            <div className="relative w-10 h-10 flex items-center justify-center rounded-aurora bg-gradient-to-br from-aurora-cyan via-aurora-purple to-aurora-magenta group-hover:shadow-aurora-strong transition-shadow duration-500">
              <span className="text-white font-heading font-bold text-lg">A</span>
              <div className="absolute inset-0 rounded-aurora bg-aurora-gradient opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10" />
            </div>
            <span className="font-heading font-semibold text-white text-lg tracking-wide hidden sm:block">
              AURORA <span className="text-aurora-gold font-normal">LUXE</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "px-4 py-2 rounded-aurora-sm text-sm font-body transition-all duration-300",
                  activeSection === link.href
                    ? "text-aurora-cyan"
                    : "text-aurora-muted hover:text-white"
                )}
                aria-current={activeSection === link.href ? "true" : undefined}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNavClick("#concierge")}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-aurora-sm bg-aurora-gradient text-white text-sm font-body font-medium shadow-aurora hover:shadow-aurora-strong transition-shadow duration-300"
          >
            Request Itinerary
            <FiArrowRight className="w-4 h-4" />
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white rounded-aurora-sm hover:bg-aurora-border transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden pt-20 px-6"
          >
            <div className="absolute inset-0 bg-[rgba(10,10,15,0.92)] backdrop-blur-xl" />
            <div className="relative flex flex-col gap-2 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "text-left px-5 py-4 rounded-aurora text-base font-body border border-aurora-border transition-colors",
                    activeSection === link.href
                      ? "text-aurora-cyan border-aurora-cyan/30"
                      : "text-aurora-muted hover:text-white"
                  )}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => handleNavClick("#concierge")}
                className="mt-4 flex items-center justify-center gap-2 px-5 py-4 rounded-aurora bg-aurora-gradient text-white font-medium"
              >
                Request Itinerary
                <FiArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Floating CTA */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleNavClick("#concierge")}
        className="md:hidden fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-aurora-gradient flex items-center justify-center shadow-aurora-strong hover:shadow-aurora transition-shadow"
        aria-label="Request Itinerary"
      >
        <FiArrowRight className="text-white w-6 h-6" />
      </motion.button>
    </>
  );
}
