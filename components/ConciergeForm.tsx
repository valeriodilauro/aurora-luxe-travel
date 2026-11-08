'use client';

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiCalendar, FiUsers, FiDollarSign, FiMessageSquare, FiMail, FiUser } from "react-icons/fi";

const INTERESTS = [
  "Adventure", "Beach & Relax", "Culture & History", "Culinary",
  "Wellness & Spa", "Wildlife & Safari", "Nightlife", "Photography",
  "Architecture", "Wine & Vineyards", "Stargazing", "Yacht & Water Sports",
];

export default function ConciergeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    startDate: "",
    endDate: "",
    travelers: "2",
    interests: [] as string[],
    budget: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.budget) newErrors.budget = "Please select a budget range";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        startDate: "",
        endDate: "",
        travelers: "2",
        interests: [],
        budget: "",
        notes: "",
      });
    }, 5000);
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-aurora-sm bg-aurora-card/40 border text-white font-body placeholder-aurora-muted/50 focus:outline-none focus:ring-2 focus:ring-aurora-cyan/40 focus:border-aurora-cyan/60 transition-all duration-300 ${
      errors[field] ? "border-red-500/50" : "border-aurora-border"
    }`;

  return (
    <section
      id="concierge"
      className="relative py-24 md:py-32"
      aria-label="Concierge Form"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-aurora-border bg-aurora-card/50 text-aurora-muted text-xs font-body tracking-[0.2em] uppercase mb-4">
            Concierge
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Design Your <span className="bg-aurora-gradient bg-clip-text text-transparent">Dream Trip</span>
          </h2>
          <p className="font-body text-aurora-muted max-w-2xl mx-auto">
            Tell us your vision. Our concierge team will craft a bespoke journey tailored to your desires.
          </p>
        </motion.div>

        {/* Success Toast */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 rounded-aurora-sm bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3"
          >
            <FiCheck className="text-emerald-400 text-xl" />
            <div>
              <p className="text-emerald-400 font-body font-medium">Request received!</p>
              <p className="text-emerald-400/70 text-sm font-body">
                Our concierge team will contact you within 24 hours.
              </p>
            </div>
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-8"
          noValidate
        >
          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-body text-aurora-muted mb-2">
                <FiUser className="inline w-4 h-4 mr-1" />
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                className={inputClass("name")}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-body text-aurora-muted mb-2">
                <FiMail className="inline w-4 h-4 mr-1" />
                Email *
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className={inputClass("email")}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="startDate" className="block text-sm font-body text-aurora-muted mb-2">
                <FiCalendar className="inline w-4 h-4 mr-1" />
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className={inputClass("")}
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-body text-aurora-muted mb-2">
                <FiCalendar className="inline w-4 h-4 mr-1" />
                End Date
              </label>
              <input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className={inputClass("")}
              />
            </div>
          </div>

          {/* Travelers & Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="travelers" className="block text-sm font-body text-aurora-muted mb-2">
                <FiUsers className="inline w-4 h-4 mr-1" />
                Number of Travelers
              </label>
              <select
                id="travelers"
                value={formData.travelers}
                onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                className={inputClass("")}
              >
                {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                  <option key={n} value={n} className="bg-aurora-dark">
                    {n === 1 ? "Solo traveler" : `${n} travelers`}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-body text-aurora-muted mb-2">
                <FiDollarSign className="inline w-4 h-4 mr-1" />
                Budget Range *
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className={inputClass("budget")}
              >
                <option value="" className="bg-aurora-dark">Select budget range</option>
                <option value="10k-25k" className="bg-aurora-dark">€10,000 – €25,000</option>
                <option value="25k-50k" className="bg-aurora-dark">€25,000 – €50,000</option>
                <option value="50k-100k" className="bg-aurora-dark">€50,000 – €100,000</option>
                <option value="100k+" className="bg-aurora-dark">€100,000+</option>
              </select>
              {errors.budget && <p className="text-red-400 text-xs mt-1">{errors.budget}</p>}
            </div>
          </div>

          {/* Interests Chips */}
          <div>
            <label className="block text-sm font-body text-aurora-muted mb-3">
              Interests <span className="text-aurora-muted/50">(select all that apply)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className={cn(
                    "px-4 py-2 rounded-full border text-sm font-body transition-all duration-300",
                    formData.interests.includes(interest)
                      ? "bg-aurora-cyan/10 border-aurora-cyan/40 text-aurora-cyan"
                      : "border-aurora-border text-aurora-muted hover:border-aurora-purple/30 hover:text-aurora-purple"
                  )}
                >
                  {formData.interests.includes(interest) && "✦ "}{interest}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="notes" className="block text-sm font-body text-aurora-muted mb-2">
              <FiMessageSquare className="inline w-4 h-4 mr-1" />
              Special Requests
            </label>
            <textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Tell us about your dream trip..."
              rows={4}
              className={inputClass("")}
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            className="w-full py-4 rounded-aurora bg-aurora-gradient text-white font-body font-medium text-lg shadow-aurora hover:shadow-aurora-strong transition-shadow duration-500 relative overflow-hidden"
          >
            <span className="relative z-10">Send Request to Concierge</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
